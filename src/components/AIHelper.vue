<template>
  <div class="ai-helper-container" :class="{ 'loaded': isLoaded }">
    <div v-if="!isLoaded" class="loading-tip">
      <div class="spinner-border text-primary spinner-border-sm" role="status"></div>
      <span class="ms-2 small">{{ $t('ai.waking_up') }}</span>
    </div>
    
    <canvas ref="canvasRef" class="vrm-canvas"></canvas>
    
    <transition name="fade">
      <div v-if="message" class="chat-bubble">
        {{ message }}
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n' // 引入 i18n
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { VRMLoaderPlugin, VRMUtils } from '@pixiv/three-vrm'

// 获取 i18n 函数
const { t } = useI18n()

// Props
const props = defineProps({
  modelUrl: {
    type: String,
    default: 'https://cdn.jsdelivr.net/gh/pixiv/three-vrm@master/packages/three-vrm/examples/models/three-vrm-girl.vrm'
  },
  message: {
    type: String,
    default: ''
  }
})

const canvasRef = ref(null)
const isLoaded = ref(false)

// Three.js 变量
let scene, camera, renderer, clock, currentVrm
let animationId

// 初始化 3D 场景
const initThree = () => {
  const width = 300 
  const height = 400 

  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    alpha: true, 
    antialias: true 
  })
  renderer.setSize(width, height)
  renderer.setPixelRatio(window.devicePixelRatio)

  camera = new THREE.PerspectiveCamera(30.0, width / height, 0.1, 20.0)
  camera.position.set(0.0, 1.35, 1.5) 

  scene = new THREE.Scene()
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0)
  directionalLight.position.set(1.0, 1.0, 1.0).normalize()
  scene.add(directionalLight)
  
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4) 
  scene.add(ambientLight)

  clock = new THREE.Clock()
}

// 加载 VRM 模型
const loadVRM = () => {
  const loader = new GLTFLoader()
  loader.register((parser) => new VRMLoaderPlugin(parser))

  loader.load(
    props.modelUrl,
    (gltf) => {
      const vrm = gltf.userData.vrm
      VRMUtils.removeUnnecessaryVertices(gltf.scene)
      VRMUtils.removeUnnecessaryJoints(gltf.scene)
      vrm.scene.traverse((obj) => {
        obj.frustumCulled = false 
      })

      currentVrm = vrm
      scene.add(vrm.scene)
      vrm.scene.rotation.y = Math.PI 
      
      // 3. 控制台日志也可以多语言化（可选）
      console.log(t('ai.sync_established'))
      isLoaded.value = true
    },
    null,
    (error) => console.error(error)
  )
}

// 动画循环
const animate = () => {
  animationId = requestAnimationFrame(animate)
  const deltaTime = clock.getDelta()
  if (currentVrm) {
    currentVrm.update(deltaTime)
  }
  renderer.render(scene, camera)
}

// 视线追踪
const handleMouseMove = (event) => {
  if (!currentVrm) return
  const x = (event.clientX / window.innerWidth) * 2.0 - 1.0
  const y = (event.clientY / window.innerHeight) * 2.0 - 1.0
  if (currentVrm.lookAt) {
    currentVrm.lookAt.target = new THREE.Vector3(x, -y + 1.35, 0)
  }
}

onMounted(() => {
  initThree()
  loadVRM()
  animate()
  window.addEventListener('mousemove', handleMouseMove)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  cancelAnimationFrame(animationId)
  if (renderer) renderer.dispose()
})
</script>

<style scoped>
/* 样式保持不变，已支持 popIn 动画 */
.ai-helper-container {
  position: fixed;
  bottom: 0;
  right: 20px;
  width: 300px;
  height: 400px;
  z-index: 1000;
  pointer-events: none;
}
.vrm-canvas {
  width: 100%;
  height: 100%;
  outline: none;
  opacity: 0;
  transition: opacity 1s ease;
  transform: translateY(20px);
}
.ai-helper-container.loaded .vrm-canvas {
  opacity: 1;
  transform: translateY(0);
}
.loading-tip {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255,255,255,0.8);
  padding: 8px 16px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
.chat-bubble {
  position: absolute;
  top: 60px;
  left: 20px;
  right: 20px;
  background: #fff;
  padding: 12px 16px;
  border-radius: 12px 12px 12px 0;
  box-shadow: 0 5px 20px rgba(0, 74, 173, 0.15);
  font-size: 14px;
  color: #333;
  line-height: 1.5;
  animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  pointer-events: auto;
  border: 1px solid rgba(0, 74, 173, 0.1);
}
.chat-bubble::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 10px solid #fff;
  border-bottom: 10px solid transparent;
}
@keyframes popIn {
  from { opacity: 0; transform: scale(0.8) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>