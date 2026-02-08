<template>
  <div class="digital-human-root" :style="{ transform: `translate(${offset.x}px, ${offset.y}px)` }">
    <div class="avatar-stage" @mousedown="handleStart" @touchstart.passive="handleStart" @dblclick="handleAction">
      <canvas ref="canvasRef" class="webgl-canvas"></canvas>
      
      <div v-if="isTalking" class="voice-waves">
        <span></span><span></span><span></span>
      </div>

      <transition name="pop">
        <div v-if="actionLabel" class="status-tag">{{ actionLabel }}</div>
      </transition>
    </div>

    <transition name="panel-anime">
      <div v-if="isOpen" class="premium-panel" @mousedown.stop @touchstart.stop>
        <div class="panel-decorator"></div>
        
        <div class="panel-header">
          <div class="brand">
            <div class="ai-pulse" :class="{ 'speaking': isTalking }"></div>
            <span class="name">ALICE</span>
            <span class="cv-tag">Minami Tanaka</span>
          </div>
          <button class="close-btn" @click="isOpen = false">×</button>
        </div>

        <div class="chat-flow" ref="msgBox">
          <div v-for="(msg, i) in messages" :key="i" :class="['msg-unit', msg.role]">
            <div class="bubble">{{ msg.content }}</div>
          </div>
          
          <div v-if="loadingAI" class="typing-indicator">
            {{ t('ai.thinking') }}<span>.</span><span>.</span><span>.</span>
          </div>
        </div>

        <div class="input-wrapper">
          <input 
            v-model="userInput" 
            @keyup.enter="handleSend" 
            :placeholder="t('ai.input_placeholder')" 
          />
          <button @click="handleSend" class="send-icon" :disabled="loadingAI">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useI18n } from 'vue-i18n' // 引入 i18n
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { VRMLoaderPlugin } from '@pixiv/three-vrm'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { chatWithAI } from '@/api/llm'

// --- i18n 实例化 ---
const { t, locale } = useI18n()

// --- 状态管理 ---
const loading = ref(true)
const isOpen = ref(false)
const canvasRef = ref(null)
const actionLabel = ref('')
const userInput = ref('')
const loadingAI = ref(false)
const isTalking = ref(false)
const msgBox = ref(null)
const offset = reactive({ x: 0, y: 0 })

// 初始消息：使用关键词 ai.sync_established
const messages = ref([{ 
  role: 'assistant', 
  content: t('ai.sync_established') 
}])

// --- 监听语言切换 ---
// 当用户在首页切换语言时，同步重置 Alice 的第一句问候语
watch(locale, () => {
  if (messages.value.length === 1) {
    messages.value[0].content = t('ai.sync_established')
  }
})

// --- 3D 渲染与逻辑变量 ---
let isDragging = false, startPos = { x: 0, y: 0 }, clickTime = 0
let scene, camera, renderer, clock, currentVrm, controls, animationId, audioCtx, analyser, dataArray
const mouseTarget = new THREE.Object3D()

// --- 核心：口型同步 ---
const playVoice = async (text) => {
  isTalking.value = true
  const voiceUrl = `https://api.tts.quest/v3/voicevox/synthesis?text=${encodeURIComponent(text)}&speaker=2`
  const audio = new Audio(voiceUrl)
  audio.crossOrigin = "anonymous"

  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  const source = audioCtx.createMediaElementSource(audio)
  analyser = audioCtx.createAnalyser()
  analyser.fftSize = 64
  source.connect(analyser)
  analyser.connect(audioCtx.destination)
  dataArray = new Uint8Array(analyser.frequencyBinCount)

  audio.play().catch(e => console.warn("Audio Context blocked", e))

  const updateMouth = () => {
    if (!isTalking.value) return
    analyser.getByteFrequencyData(dataArray)
    let sum = 0; dataArray.forEach(v => sum += v)
    const average = sum / dataArray.length
    if (currentVrm) {
      const openRatio = Math.min(average / 40, 1.2)
      currentVrm.expressionManager.setValue('aa', openRatio)
    }
    requestAnimationFrame(updateMouth)
  }
  updateMouth()

  audio.onended = () => {
    isTalking.value = false
    if (currentVrm) currentVrm.expressionManager.setValue('aa', 0)
  }
}

// --- 交互处理 ---
const handleStart = (e) => {
  const cx = e.touches ? e.touches[0].clientX : e.clientX
  const cy = e.touches ? e.touches[0].clientY : e.clientY
  if (!e.touches && e.button !== 0) return
  isDragging = true; clickTime = Date.now()
  startPos.x = cx - offset.x; startPos.y = cy - offset.y

  const onMove = (me) => {
    if (!isDragging) return
    const mx = me.touches ? me.touches[0].clientX : me.clientX
    const my = me.touches ? me.touches[0].clientY : me.clientY
    offset.x = mx - startPos.x; offset.y = my - startPos.y
    updateLookAt(mx, my)
  }
  const onEnd = () => {
    isDragging = false
    if (Date.now() - clickTime < 200) isOpen.value = !isOpen.value
    document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onEnd)
    document.removeEventListener('touchmove', onMove); document.removeEventListener('touchend', onEnd)
  }
  document.addEventListener('mousemove', onMove); document.addEventListener('mouseup', onEnd)
  document.addEventListener('touchmove', onMove, { passive: false }); document.addEventListener('touchend', onEnd)
}

const handleSend = async () => {
  if (!userInput.value.trim() || loadingAI.value) return
  const text = userInput.value
  messages.value.push({ role: 'user', content: text })
  userInput.value = ''; loadingAI.value = true
  scrollToBottom()
  
  try {
    const reply = await chatWithAI(messages.value)
    loadingAI.value = false
    messages.value.push({ role: 'assistant', content: reply })
    scrollToBottom(); playVoice(reply)
  } catch (err) {
    loadingAI.value = false
    // 错误处理：使用关键词 ai.error_msg
    messages.value.push({ role: 'assistant', content: t('ai.error_msg') })
  }
}

const handleAction = () => {
  // 双击反馈：使用关键词 ai.action_happy
  actionLabel.value = t('ai.action_happy')
  currentVrm.expressionManager.setValue('happy', 1)
  setTimeout(() => { 
    actionLabel.value = ""
    currentVrm.expressionManager.setValue('happy', 0) 
  }, 2500)
}

// --- 3D 渲染核心 ---
const initThree = () => {
  renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value, alpha: true, antialias: true })
  renderer.setSize(200, 300); renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  camera = new THREE.PerspectiveCamera(22, 2/3, 0.1, 20); camera.position.set(0, 0.9, 2.8)
  scene = new THREE.Scene(); scene.add(mouseTarget)
  const l = new THREE.DirectionalLight(0xffffff, 1.8); l.position.set(1, 1, 1); scene.add(l)
  scene.add(new THREE.AmbientLight(0xffffff, 0.8))
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true; controls.target.set(0, 0.8, 0)
  controls.mouseButtons = { RIGHT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.DOLLY, LEFT: null }
  clock = new THREE.Clock()
  new GLTFLoader().register(p => new VRMLoaderPlugin(p)).load('/alice.vrm', (gltf) => {
    currentVrm = gltf.userData.vrm; scene.add(currentVrm.scene)
    currentVrm.scene.rotation.y = Math.PI; currentVrm.lookAt.target = mouseTarget
    loading.value = false
  })
  animate()
}

const animate = () => {
  animationId = requestAnimationFrame(animate)
  const d = clock.getDelta(), e = clock.getElapsedTime()
  if (currentVrm) {
    currentVrm.update(d)
    const bones = currentVrm.humanoid
    const la = bones.getRawBoneNode('leftUpperArm'), ra = bones.getRawBoneNode('rightUpperArm')
    if (la && ra) {
      la.rotation.z = 1.35 + Math.sin(e) * 0.02
      ra.rotation.z = -1.35 - Math.sin(e) * 0.02
    }
    currentVrm.expressionManager.setValue('blink', Math.sin(e * 2) > 0.98 ? 1 : 0)
  }
  controls.update(); renderer.render(scene, camera)
}

const updateLookAt = (cx, cy) => {
  const r = canvasRef.value.getBoundingClientRect()
  const x = ((cx - r.left) / r.width) * 2 - 1, y = -((cy - r.top) / r.height) * 2 + 1
  mouseTarget.position.set(x * 2, y * 2 + 0.8, 1.0)
}

const scrollToBottom = () => nextTick(() => { if(msgBox.value) msgBox.value.scrollTop = msgBox.value.scrollHeight })

onMounted(() => setTimeout(initThree, 100))
onUnmounted(() => { cancelAnimationFrame(animationId); renderer?.dispose() })
</script>

<style scoped>
/* 样式部分保持原样，无需修改 */
.digital-human-root { position: fixed; bottom: 20px; right: 20px; z-index: 10000; display: flex; align-items: flex-end; pointer-events: none; will-change: transform; }
.avatar-stage { width: 200px; height: 300px; cursor: grab; pointer-events: auto; position: relative; touch-action: none; }
.webgl-canvas { width: 100%; height: 100%; }
.premium-panel { position: absolute; bottom: 320px; right: 0; width: 300px; height: 450px; background: rgba(15, 23, 42, 0.75); backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 30px 10px 30px 30px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); display: flex; flex-direction: column; overflow: hidden; pointer-events: auto; }
.panel-decorator { height: 4px; background: linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6); background-size: 200% 100%; animation: flow 3s linear infinite; }
.panel-header { padding: 20px; display: flex; justify-content: space-between; align-items: center; }
.brand { display: flex; align-items: center; gap: 10px; }
.ai-pulse { width: 10px; height: 10px; background: #64748b; border-radius: 50%; transition: 0.3s; }
.ai-pulse.speaking { background: #10b981; box-shadow: 0 0 12px #10b981; animation: pulse 1.5s infinite; }
.name { color: white; font-weight: 800; letter-spacing: 2px; font-size: 16px; }
.cv-tag { color: #94a3b8; font-size: 10px; border: 1px solid #475569; padding: 2px 6px; border-radius: 4px; }
.close-btn { background: none; border: none; color: #94a3b8; font-size: 20px; cursor: pointer; }
.chat-flow { flex: 1; padding: 0 20px; overflow-y: auto; display: flex; flex-direction: column; gap: 15px; scrollbar-width: none; }
.chat-flow::-webkit-scrollbar { display: none; }
.msg-unit { display: flex; max-width: 85%; }
.msg-unit.user { align-self: flex-end; }
.msg-unit.assistant { align-self: flex-start; }
.bubble { padding: 12px 16px; font-size: 13px; line-height: 1.6; border-radius: 18px; }
.assistant .bubble { background: rgba(255, 255, 255, 0.05); color: #e2e8f0; border: 1px solid rgba(255,255,255,0.1); border-bottom-left-radius: 4px; }
.user .bubble { background: #3b82f6; color: white; border-bottom-right-radius: 4px; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3); }
.input-wrapper { margin: 15px; background: rgba(255, 255, 255, 0.05); border-radius: 20px; display: flex; align-items: center; padding: 5px 15px; border: 1px solid rgba(255,255,255,0.1); }
.input-wrapper input { flex: 1; background: none; border: none; color: white; padding: 10px 0; outline: none; font-size: 14px; }
.send-icon { background: none; border: none; color: #3b82f6; cursor: pointer; display: flex; align-items: center; }
.status-tag { position: absolute; top: 10%; left: 50%; transform: translateX(-50%); background: #ff6b6b; color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; font-weight: bold; }
@keyframes flow { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
@keyframes pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.2); opacity: 0.7; } 100% { transform: scale(1); opacity: 1; } }
.panel-anime-enter-active, .panel-anime-leave-active { transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.panel-anime-enter-from, .panel-anime-leave-to { opacity: 0; transform: scale(0.8) translateY(40px); }
</style>