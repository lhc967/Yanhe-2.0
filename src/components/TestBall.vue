<template>
  <div class="ai-assistant-root">
    
    <div 
      class="float-ball"
      ref="aiBall"
      :style="ballStyle"
      :class="{ 'is-active': isOpen }"
      @mousedown.prevent="startDrag"
      @click="handleClick"
    >
      <div v-if="loading" class="loading-box">
        <div class="spinner"></div>
      </div>

      <canvas ref="canvasRef" class="vrm-canvas"></canvas>
    </div>

    <transition name="panel-scale">
      <div v-if="isOpen" class="chat-panel glass-effect">
        <div class="panel-header">
          {{ $t('ai.title') }} 
          <span class="close-btn" @click.stop="toggleOpen">×</span>
        </div>
        
        <div class="view-content">
          <div class="msg-bubble" v-html="$t('ai.demo_greeting')"></div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n' // 引入 i18n
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { VRMLoaderPlugin } from '@pixiv/three-vrm'

// 获取翻译函数
const { t } = useI18n()

// --- 状态 ---
const isOpen = ref(false)
const loading = ref(true)
const canvasRef = ref(null)

// --- 拖拽逻辑 (保持不变) ---
const isDragging = ref(false)
const pos = reactive({ x: window.innerWidth - 200, y: window.innerHeight - 320 })
const start = { x: 0, y: 0 }; const initial = { x: 0, y: 0 }; let isClick = true
const ballStyle = computed(() => ({ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }))
const startDrag = (e) => { isDragging.value = true; isClick = true; start.x = e.clientX; start.y = e.clientY; initial.x = pos.x; initial.y = pos.y; document.addEventListener('mousemove', onMove); document.addEventListener('mouseup', stopDrag); }
const onMove = (e) => { if(!isDragging.value) return; isClick=false; pos.x = initial.x + (e.clientX - start.x); pos.y = initial.y + (e.clientY - start.y); }
const stopDrag = () => { isDragging.value = false; document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', stopDrag); }
const handleClick = () => { if(isClick) isOpen.value = !isOpen.value }
const toggleOpen = () => isOpen.value = !isOpen.value

// --- Three.js 变量 ---
let scene, camera, renderer, clock, currentVrm, animationId

const initThree = () => {
  const width = 180
  const height = 240
  
  renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value, alpha: true, antialias: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(window.devicePixelRatio)

  // 相机设置 (标准半身像位置)
  camera = new THREE.PerspectiveCamera(30.0, width / height, 0.1, 20.0)
  camera.position.set(0, 1.4, 1.2) 
  camera.lookAt(0, 1.4, 0)

  scene = new THREE.Scene()

  // 灯光
  const dirLight = new THREE.DirectionalLight(0xffffff, 2.0)
  dirLight.position.set(1, 1, 1).normalize()
  scene.add(dirLight)
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.0)
  scene.add(ambientLight)

  clock = new THREE.Clock()
  
  loadModel()
  animate()
}

const loadModel = () => {
  const loader = new GLTFLoader()
  loader.register((parser) => new VRMLoaderPlugin(parser))

  const modelUrl = '/alice.vrm'

  loader.load(
    modelUrl,
    (gltf) => {
      const vrm = gltf.userData.vrm
      currentVrm = vrm
      scene.add(vrm.scene)

      // 调整模型
      vrm.scene.rotation.y = Math.PI 
      vrm.scene.position.set(0, 0, 0)
      
      loading.value = false
      // 3. 控制台日志也可以多语言化
      console.log(t('ai.model_loaded'))
    },
    (progress) => {
      // console.log(t('ai.loading_progress'), 100.0 * (progress.loaded / progress.total), '%')
    },
    (error) => {
      console.error(t('ai.model_failed'), error)
      loading.value = false
    }
  )
}

const animate = () => {
  animationId = requestAnimationFrame(animate)
  const delta = clock.getDelta()
  if (currentVrm) currentVrm.update(delta)
  renderer.render(scene, camera)
}

onMounted(() => {
  setTimeout(initThree, 100)
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  if(renderer) renderer.dispose()
})
</script>

<style scoped>
/* 样式保持不变 */
.ai-assistant-root { position: fixed; bottom: 0; right: 0; z-index: 10000; pointer-events: none; }

.float-ball {
  position: fixed; bottom: 20px; right: 20px;
  width: 180px; height: 240px; 
  cursor: grab; pointer-events: auto;
  /* 记得最后把这个红色背景删掉或改成透明 */
  background: rgba(255, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
}
.float-ball:active { cursor: grabbing; }

.vrm-canvas { width: 100%; height: 100%; display: block; }

.loading-box {
  position: absolute; top:0; left:0; width:100%; height:100%;
  display:flex; justify-content:center; align-items:center;
  background: rgba(255,255,255,0.8);
  color: #004aad;
}
.spinner {
  width: 20px; height: 20px; border: 3px solid #004aad; border-top-color: transparent; border-radius: 50%; animation: spin 1s linear infinite;
}

/* 聊天面板 */
.chat-panel {
  position: fixed; bottom: 80px; right: 20px; width: 300px; height: 400px;
  background: white; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  display: flex; flex-direction: column; pointer-events: auto; border: 1px solid #eee;
}
.panel-header { background: #004aad; color: white; padding: 10px; display:flex; justify-content:space-between; border-radius: 12px 12px 0 0; }
.view-content { padding: 15px; }
.msg-bubble { background: #f0f0f0; padding: 10px; border-radius: 10px; display:inline-block; }

/* 简单的过渡动画 */
.panel-scale-enter-active, .panel-scale-leave-active { transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.panel-scale-enter-from, .panel-scale-leave-to { opacity: 0; transform: scale(0.8) translateY(20px); }

@keyframes spin { to { transform: rotate(360deg); } }
</style>