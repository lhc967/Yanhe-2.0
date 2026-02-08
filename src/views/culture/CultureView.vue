<template>
  <div class="culture-museum-page" :class="{ 'pro-mode': isProMode }">
    
    <div class="universe-bg">
      <div class="stars"></div>
      <div class="nebula"></div>
    </div>

    <nav class="hud-navbar">
      <div class="hud-section left" @click="go('/portal')">
        <div class="back-btn"><i class="bi bi-chevron-left"></i></div>
        <div class="brand-info">
          <span class="cn">{{ $t('brand') }}</span>
          <span class="en">{{ $t('culture.navbar.subtitle') }}</span>
        </div>
      </div>

      <div class="hud-section center">
        <div class="dimension-switch">
          <div class="switch-track" :class="{ right: isProMode }"></div>
          <div class="opt" :class="{ active: !isProMode }" @click="setMode(false)">{{ $t('culture.navbar.explore') }}</div>
          <div class="opt pro" :class="{ active: isProMode }" @click="setMode(true)">
            <i class="bi bi-lightning-charge-fill"></i> {{ $t('culture.navbar.pro') }}
          </div>
        </div>
      </div>

      <div class="hud-section right">
        <div class="passport-trigger" @click="showPassport = true">
          <div class="icon-box"><i class="bi bi-journal-album"></i></div>
          <div class="info">
            <span class="label">{{ $t('culture.navbar.passport') }}</span>
            <span class="val">{{ unlockedCities.length }} / 6</span>
          </div>
        </div>
      </div>
    </nav>

    <div class="map-container" id="china-map"></div>

    <transition name="slide-right">
      <div v-if="currentCity" class="cyber-terminal">
        
        <div class="terminal-header" :style="{ backgroundImage: `url(${currentCity.bg})` }">
          <div class="header-overlay"></div>
          <button class="close-btn" @click="currentCity = null"><i class="bi bi-x-lg"></i></button>
          <div class="city-info">
            <div class="code">ID: {{ currentCity.id }}</div>
            <h1>{{ $t(`culture.cities.${currentCity.key}.name`) }}</h1>
            <div class="tags">
              <span v-for="tag in $tm(`culture.cities.${currentCity.key}.tags`)" :key="tag" class="cyber-tag">{{ tag }}</span>
            </div>
          </div>
        </div>

        <div class="terminal-tabs">
          <div class="tab" :class="{ active: activeTab === 'learn' }" @click="activeTab = 'learn'">{{ $t('culture.tabs.learn') }}</div>
          <div class="tab" :class="{ active: activeTab === 'ai' }" @click="checkProAuth('ai')">
            {{ $t('culture.tabs.ai') }} <i v-if="!userStore.isVip" class="bi bi-lock-fill"></i>
          </div>
          <div class="tab" :class="{ active: activeTab === 'upload' }" @click="activeTab = 'upload'">
            {{ $t('culture.tabs.upload') }} <span class="badge-dot" v-if="uploadStatus === 'idle'"></span>
          </div>
        </div>

        <div class="terminal-body">
          
          <div v-if="activeTab === 'learn'" class="content-panel">
            <div class="intro-box">{{ $t(`culture.cities.${currentCity.key}.intro`) }}</div>
            <div class="vocab-list">
              <div v-for="(word, idx) in $tm(`culture.cities.${currentCity.key}.words`)" :key="idx" class="vocab-card">
                <div class="v-left">
                  <div class="txt">{{ word.text }}</div>
                  <div class="ipa">[{{ word.ipa }}]</div>
                </div>
                <button class="sound-btn" @click="playSample(currentCity.key, idx)">
                  <i class="bi bi-volume-up-fill"></i>
                </button>
              </div>
            </div>
          </div>

          <div v-if="activeTab === 'ai'" class="content-panel ai-zone">
            
            <div class="model-selector">
              <span class="label">{{ $t('culture.ai.model_base') }}</span>
              <div class="model-scroll">
                <div 
                  v-for="(model, idx) in currentCity.aiModels" 
                  :key="idx" 
                  class="model-chip"
                  :class="{ active: selectedModel === idx }"
                  @click="switchModel(idx)"
                >
                  <i class="bi bi-cpu"></i> {{ $t(`culture.cities.${currentCity.key}.aiModels.${idx}.name`) }}
                </div>
              </div>
            </div>

            <div class="challenge-card">
              <div class="text-content">
                <span class="sub">{{ $t('culture.ai.read_guide', { model: $t(`culture.cities.${currentCity.key}.aiModels.${selectedModel}.name`) }) }}</span>
                <h3>{{ $t(`culture.cities.${currentCity.key}.aiChallenge.word`) }}</h3>
                <div class="ipa-hint">[{{ currentCity.aiChallenge.ipa }}]</div>
              </div>
              <button class="play-sample" @click="playSample(currentCity.key, 'challenge')">
                <i class="bi bi-play-circle-fill"></i> {{ $t('culture.ai.listen_sample') }}
              </button>
            </div>

            <div class="interaction-area">
              
              <div v-if="aiStatus !== 'result'" class="recording-ui">
                <div class="wave-visualizer">
                  <div class="spectrum-bar" v-for="n in 20" :key="n" 
                       :style="{ height: isAiRecording ? Math.random() * 100 + '%' : '10%', animationDelay: n * 0.05 + 's' }"
                       :class="{ active: isAiRecording }">
                  </div>
                </div>
                
                <div v-if="aiStatus === 'analyzing'" class="analyzing-overlay">
                  <div class="scan-line"></div>
                  <div class="loading-text">
                    {{ $t('culture.ai.analyzing') }}<br>
                    <span class="small">{{ $t('culture.ai.comparing', { city: $t(`culture.cities.${currentCity.key}.name`) }) }}</span>
                  </div>
                </div>

                <button class="record-btn" 
                  :class="{ recording: isAiRecording, disabled: aiStatus === 'analyzing' }"
                  @mousedown="startAiRecord" 
                  @mouseup="stopAiRecord"
                >
                  <i class="bi" :class="isAiRecording ? 'bi-mic-fill' : 'bi-mic'"></i>
                  <span>{{ aiBtnText }}</span>
                </button>
              </div>

              <div v-else class="ai-report">
                <div class="score-header">
                  <div class="total-score">
                    <span class="num">{{ aiResult.totalScore }}</span>
                    <span class="unit">{{ $t('culture.ai.score_unit') }}</span>
                  </div>
                  <div class="ai-comment">
                    <i class="bi bi-robot"></i> {{ aiResult.comment }}
                  </div>
                </div>

                <div class="dimension-bars">
                  <div class="dim-row" v-for="(val, key) in aiResult.dimensions" :key="key">
                    <span class="label">{{ $t(`culture.ai.dimensions.${key}`) }}</span>
                    <div class="bar-track">
                      <div class="bar-fill" :style="{ width: val + '%' }"></div>
                    </div>
                    <span class="val">{{ val }}</span>
                  </div>
                </div>

                <div class="tone-analysis">
                  <h4><i class="bi bi-graph-up"></i> {{ $t('culture.ai.tone_analysis') }}</h4>
                  <div class="tone-chart">
                    <svg viewBox="0 0 100 40" class="tone-svg">
                      <path d="M0,30 Q25,10 50,30 T100,20" fill="none" stroke="#ccc" stroke-width="2" stroke-dasharray="2"/>
                      <path d="M0,32 Q25,15 50,28 T100,22" fill="none" stroke="#004aad" stroke-width="2" class="user-path"/>
                    </svg>
                    <div class="error-spot" style="left: 45%">
                      <div class="pointer"></div>
                      <span class="msg">Low Pitch</span>
                    </div>
                  </div>
                </div>

                <button class="retry-btn" @click="resetAi">
                  <i class="bi bi-arrow-counterclockwise"></i> {{ $t('culture.ai.retry') }}
                </button>
              </div>

            </div>
          </div>

          <div v-if="activeTab === 'upload'" class="content-panel upload-panel">
            
            <div v-if="uploadStatus === 'idle'" class="upload-form">
              <div class="upload-header">
                <h3><i class="bi bi-soundwave"></i> {{ $t('upload.title') }}</h3>
                <p>{{ $t('upload.desc') }}</p>
              </div>

              <div class="audio-input-zone" :class="{ 'is-recording': isUploadRecording }">
                <div class="visualizer-bars">
                  <span v-for="n in 12" :key="n" :style="{ animationDelay: `${n * 0.05}s` }"></span>
                </div>
                
                <div class="actions">
                  <button class="action-btn record" @mousedown="startUploadRecord" @mouseup="stopUploadRecord">
                    <i class="bi bi-mic-fill"></i>
                    {{ isUploadRecording ? $t('upload.release_end') : $t('upload.hold_talk') }}
                  </button>
                  <div class="divider">{{ $t('upload.or') }}</div>
                  <label class="action-btn upload">
                    <i class="bi bi-cloud-arrow-up-fill"></i> {{ $t('upload.upload_file') }}
                    <input type="file" accept="audio/*" hidden @change="handleFileSelect">
                  </label>
                </div>
              </div>

              <div class="form-group">
                <div class="input-item">
                  <i class="bi bi-chat-square-text"></i>
                  <input type="text" v-model="uploadForm.text" :placeholder="$t('upload.placeholder_word')">
                </div>
                <div class="input-item">
                  <i class="bi bi-translate"></i>
                  <input type="text" v-model="uploadForm.meaning" :placeholder="$t('upload.placeholder_meaning')">
                </div>
                <div class="tags-select">
                  <span v-for="tag in $tm('upload.tags')" 
                        :key="tag" 
                        class="tag-chip" 
                        :class="{ active: uploadForm.tag === tag }"
                        @click="uploadForm.tag = tag">
                    {{ tag }}
                  </span>
                </div>
              </div>

              <button class="submit-btn" :disabled="!canSubmit" @click="submitCorpus">
                {{ $t('upload.submit') }} <i class="bi bi-arrow-right"></i>
              </button>
            </div>

            <div v-else-if="uploadStatus === 'success'" class="audit-status-card">
              <div class="status-icon">
                <div class="spinner-ring"></div>
                <i class="bi bi-hourglass-split"></i>
              </div>
              <h3>{{ $t('upload.success_title') }}</h3>
              <p class="ticket-id">Ticket: #AUDIT-{{ Date.now().toString().slice(-6) }}</p>
              
              <div class="timeline">
                <div class="step completed">
                  <div class="dot"></div>
                  <div class="txt">{{ $t('upload.steps.upload') }}</div>
                </div>
                <div class="step active">
                  <div class="dot pulsing"></div>
                  <div class="txt">{{ $t('upload.steps.ai_audit') }}</div>
                </div>
                <div class="step">
                  <div class="dot"></div>
                  <div class="txt">{{ $t('upload.steps.human_audit') }}</div>
                </div>
              </div>

              <div class="audit-tip">{{ $t('upload.audit_tip') }}</div>
              <button class="btn-back" @click="resetUpload">{{ $t('upload.btn_continue') }}</button>
            </div>
          </div>

        </div>
      </div>
    </transition>

    <transition name="fade">
      <div v-if="showPassport" class="passport-overlay" @click.self="showPassport = false">
        <div class="passport-card">
          <h2>{{ $t('culture.passport.title') }}</h2>
          <div class="stamp-grid">
            <div v-for="c in allCities" :key="c.name" class="stamp" :class="{ active: unlockedCities.includes(c.key) }">
              {{ $t(`culture.cities.${c.key}.name`) }}
            </div>
          </div>
          <button class="mt-4 btn btn-outline-light btn-sm rounded-pill" @click="showPassport = false">{{ $t('culture.passport.close') }}</button>
        </div>
      </div>
    </transition>

    <el-dialog v-model="showProDialog" :title="$t('pro.title')" width="320px" align-center class="dark-dialog">
      <div class="text-center">
        <i class="bi bi-gem text-warning fs-1"></i>
        <p class="mt-3">{{ $t('pro.desc') }}</p>
      </div>
      <template #footer>
        <button class="btn btn-outline-secondary btn-sm me-2" @click="showProDialog = false">{{ $t('pro.cancel') }}</button>
        <button class="btn btn-primary btn-sm" @click="handleUpgrade">{{ $t('pro.unlock') }}</button>
      </template>
    </el-dialog>

  </div>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
import { useI18n } from 'vue-i18n'
import * as echarts from 'echarts'
import { ElMessage, ElLoading } from 'element-plus'

const { t } = useI18n()
const router = useRouter()
const userStore = useUserStore()

// --- 状态管理 ---
const isProMode = ref(false)
const showPassport = ref(false)
const showProDialog = ref(false)
const currentCity = ref(null)
const activeTab = ref('learn')
// 存储已解锁的城市 Key，而不是中文名
const unlockedCities = ref(['Beijing']) 
let chartInstance = null

// --- 地图坐标配置 (静态数据，不随语言改变) ---
// 覆盖了 6 个主要城市
const allCities = [
  { key: 'Beijing', name: 'Beijing', pos: [116.40, 39.90] },
  { key: 'Shanghai', name: 'Shanghai', pos: [121.47, 31.23] },
  { key: 'Guangzhou', name: 'Guangzhou', pos: [113.26, 23.12] },
  { key: 'Chengdu', name: 'Chengdu', pos: [104.06, 30.67] },
  { key: 'Xian', name: 'Xian', pos: [108.94, 34.34] },
  { key: 'Changsha', name: 'Changsha', pos: [112.93, 28.23] }
]

// --- 城市详情静态配置 (只存 Key 和非文本数据) ---
const cityDetailsConfig = {
  'Beijing': {
    id: 'BJ110', 
    key: 'Beijing',
    bg: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600',
    // 3个模型
    aiModels: [{ code: 'bj_old' }, { code: 'bj_new' }, { code: 'bj_south' }],
    // AI 挑战的标准 IPA (不翻译)
    aiChallenge: { ipa: 'tʂə tɕjɑʊ ti tɑʊ' }
  },
  'Shanghai': {
    id: 'SH310', 
    key: 'Shanghai',
    bg: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=600',
    aiModels: [{ code: 'sh_old' }, { code: 'sh_new' }],
    aiChallenge: { ipa: 'nɔŋ vɛ tɕʰiə ku vɑʔ' }
  },
  'Guangzhou': {
    id: 'GZ020',
    key: 'Guangzhou',
    bg: 'https://images.unsplash.com/photo-1583491322055-685b8696d740?w=600',
    aiModels: [{ code: 'gz_xiguan' }, { code: 'gz_hk' }],
    aiChallenge: { ipa: 'zou yan zui gan yiu hoi sam' }
  },
  'Chengdu': {
    id: 'CD028',
    key: 'Chengdu',
    bg: 'https://images.unsplash.com/photo-1565529366-0414995f5536?w=600',
    aiModels: [{ code: 'cd_main' }],
    aiChallenge: { ipa: 'an yi de ban' }
  },
  'Xian': {
    id: 'XA029',
    key: 'Xian',
    bg: 'https://images.unsplash.com/photo-1563806495-23f269472314?w=600',
    aiModels: [{ code: 'xa_main' }],
    aiChallenge: { ipa: 'nge di shen a' }
  },
  'Changsha': {
    id: 'CS0731',
    key: 'Changsha',
    bg: 'https://images.unsplash.com/photo-1622340263688-693526132916?w=600',
    aiModels: [{ code: 'cs_main' }],
    aiChallenge: { ipa: 'fu de liao' }
  }
}

// --- AI 测评增强状态 ---
const selectedModel = ref(0)
const aiStatus = ref('idle') // idle | recording | analyzing | result
const isAiRecording = ref(false)
const aiResult = ref({
  totalScore: 0,
  comment: '',
  dimensions: { tone: 0, clarity: 0, emotion: 0 }
})

const aiBtnText = computed(() => {
  if (aiStatus.value === 'analyzing') return t('culture.ai.analyzing_voice')
  if (isAiRecording.value) return t('culture.ai.release_stop')
  return t('culture.ai.long_press')
})

// --- 语料上传状态 ---
const isUploadRecording = ref(false)
const uploadStatus = ref('idle') // idle | uploading | success
const uploadForm = ref({ text: '', meaning: '', tag: '日常' })
const hasAudio = ref(false)

// --- 地图逻辑 ---
const loadMap = async () => {
  const loading = ElLoading.service({ target: '#china-map', text: t('loading.map'), background: 'rgba(0,0,0,0.7)' })
  try {
    const res = await fetch('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
    const mapJson = await res.json()
    echarts.registerMap('china', mapJson)
    initChart()
  } finally {
    loading.close()
  }
}

const initChart = () => {
  if (chartInstance) chartInstance.dispose()
  chartInstance = echarts.init(document.getElementById('china-map'))
  const isPro = isProMode.value
  
  const option = {
    backgroundColor: 'transparent',
    geo: {
      map: 'china', roam: true, zoom: 1.2,
      itemStyle: {
        areaColor: isPro ? '#1e293b' : '#dbeafe',
        borderColor: isPro ? '#38bdf8' : '#fff',
        borderWidth: 1,
        shadowBlur: isPro ? 15 : 0,
        shadowColor: 'rgba(56, 189, 248, 0.5)'
      },
      emphasis: { itemStyle: { areaColor: isPro ? '#0f172a' : '#bfdbfe' } }
    },
    series: [{
      type: 'effectScatter', coordinateSystem: 'geo',
      data: allCities.map(c => ({ name: c.name, value: c.pos })), // ECharts 里的 name 需要和地图文件对应，这里为了演示简化
      symbolSize: 15,
      itemStyle: { color: isPro ? '#fbbf24' : '#004aad' },
      rippleEffect: { scale: 4, brushType: 'stroke' }
    }]
  }
  chartInstance.setOption(option)
  
  // 地图点击事件
  chartInstance.on('click', p => { 
    if(p.componentType==='series') {
      // 简单映射逻辑：Echarts 点 -> Config Key
      // 在实际项目中，allCities 的 name 应该跟 echarts 地图数据一致
      // 这里假设点击后直接传回 Key
      openCity(p.name) 
    }
  })
}

// --- 交互逻辑 ---
const setMode = (pro) => {
  if (pro && !userStore.isVip) {
    showProDialog.value = true
    return
  }
  isProMode.value = pro
  initChart()
  ElMessage.success(pro ? t('pro.toast_on') : t('pro.toast_off'))
}

const checkProAuth = (tab) => {
  if (tab === 'ai' && !userStore.isVip) showProDialog.value = true
  else activeTab.value = tab
}

const openCity = (cityName) => {
  // 建立中文/ECharts名 到 Key 的映射
  const keyMap = {
    '北京': 'Beijing', 'Beijing': 'Beijing',
    '上海': 'Shanghai', 'Shanghai': 'Shanghai',
    '广州': 'Guangzhou', 'Guangzhou': 'Guangzhou',
    '成都': 'Chengdu', 'Chengdu': 'Chengdu',
    '西安': 'Xian', 'Xian': 'Xian',
    '长沙': 'Changsha', 'Changsha': 'Changsha'
  }
  
  const key = keyMap[cityName] || 'Beijing'
  const config = cityDetailsConfig[key]
  
  if (config) {
    currentCity.value = config
    activeTab.value = 'learn' 
    selectedModel.value = 0 
    resetAi() 
    resetUpload() 
    
    if (!unlockedCities.value.includes(key)) unlockedCities.value.push(key)
  }
}

const handleUpgrade = () => { showProDialog.value = false; router.push('/unlock-pro') }
const go = (p) => router.push(p)

// 播放音频 (含 API 调用)
const playSample = (cityKey, type) => {
  const audioId = `${cityKey}_${type}`
  // [API] 获取音频流
  // const url = `/api/audio/${audioId}?lang=${locale.value}`
  // new Audio(url).play()
  ElMessage.success(t('loading.audio'))
}

// --- AI 深度测评逻辑 ---
const switchModel = (idx) => {
  selectedModel.value = idx
  resetAi()
  // 提示语也国际化
  const modelName = t(`culture.cities.${currentCity.value.key}.aiModels.${idx}.name`)
  ElMessage.success(`${t('culture.ai.model_base')} ${modelName}`)
}

const startAiRecord = () => { isAiRecording.value = true; aiStatus.value = 'recording' }

const stopAiRecord = () => {
  isAiRecording.value = false
  aiStatus.value = 'analyzing'
  // 模拟计算
  setTimeout(() => {
    const mockScore = Math.floor(Math.random() * 15) + 80
    aiResult.value = {
      totalScore: mockScore,
      comment: mockScore > 90 ? t('culture.ai.comment_good') : t('culture.ai.comment_avg'),
      dimensions: {
        tone: mockScore - 2,
        clarity: mockScore + 3 > 100 ? 100 : mockScore + 3,
        emotion: 92
      }
    }
    aiStatus.value = 'result'
  }, 2000)
}

const resetAi = () => { aiStatus.value = 'idle'; isAiRecording.value = false }

// --- 语料上传逻辑 ---
const canSubmit = computed(() => uploadForm.value.text && uploadForm.value.meaning && hasAudio.value)

const startUploadRecord = () => { isUploadRecording.value = true }
const stopUploadRecord = () => { 
  isUploadRecording.value = false
  hasAudio.value = true
  // ElMessage.success('录音已暂存') -> 建议也放到语言包，这里略
}

const handleFileSelect = (e) => {
  if(e.target.files.length > 0) {
    hasAudio.value = true
  }
}

const submitCorpus = () => {
  const loading = ElLoading.service({ target: '.cyber-terminal', text: t('loading.uploading'), background: 'rgba(0,0,0,0.8)' })
  
  // [API] 上传接口
  // axios.post('/api/corpus', form)
  
  setTimeout(() => {
    loading.close()
    uploadStatus.value = 'success'
  }, 1500)
}

const resetUpload = () => {
  uploadStatus.value = 'idle'
  uploadForm.value = { text: '', meaning: '', tag: '日常' }
  hasAudio.value = false
}

// --- 生命周期 ---
onMounted(() => {
  loadMap()
  window.addEventListener('resize', () => chartInstance && chartInstance.resize())
})
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap');
$neon: #38bdf8;
$primary: #004aad;
$dark-bg: #020617;
$light-bg: #f0f4f8;

// 全局布局
.culture-museum-page {
  height: 100vh; width: 100vw; overflow: hidden; position: relative;
  background: $light-bg; transition: background 0.6s;
  &.pro-mode { background: $dark-bg; }
}

// 背景层
.universe-bg {
  position: absolute; inset: 0; opacity: 0; transition: opacity 1s;
  .pro-mode & { opacity: 1; }
  .stars { position: absolute; width: 100%; height: 100%; background: url('http://www.script-tutorials.com/demos/360/images/stars.png'); }
}

// HUD 导航
.hud-navbar {
  position: absolute; top: 0; left: 0; right: 0; height: 70px; z-index: 100;
  display: flex; justify-content: space-between; align-items: center; padding: 0 20px;
  background: rgba(255,255,255,0.8); backdrop-filter: blur(10px);
  .pro-mode & { background: rgba(2, 6, 23, 0.8); color: #fff; border-bottom: 1px solid rgba(255,255,255,0.1); }
  
  .brand-info { display: flex; flex-direction: column; line-height: 1; .cn { font-weight: bold; font-size: 18px; } .en { font-size: 9px; font-family: 'Orbitron'; color: $neon; letter-spacing: 1px; } }
}

// 模式切换开关
.dimension-switch {
  background: rgba(0,0,0,0.05); border-radius: 20px; padding: 4px; display: flex; position: relative; width: 150px;
  .switch-track { position: absolute; top: 4px; left: 4px; width: 71px; height: 24px; background: #fff; border-radius: 12px; transition: 0.3s; &.right { left: 75px; background: #fbbf24; } }
  .opt { flex: 1; text-align: center; font-size: 12px; font-weight: bold; cursor: pointer; z-index: 1; color: #666; &.active { color: #000; } }
}

// 地图
.map-container { width: 100%; height: 100%; }

// 赛博终端
.cyber-terminal {
  position: absolute; top: 80px; right: 20px; bottom: 30px; width: 360px;
  background: rgba(255,255,255,0.9); border-radius: 16px; box-shadow: 0 20px 50px rgba(0,0,0,0.1);
  display: flex; flex-direction: column; overflow: hidden;
  .pro-mode & { background: rgba(15, 23, 42, 0.9); border: 1px solid rgba($neon, 0.3); color: #fff; }
}

.terminal-header {
  height: 120px; background-size: cover; position: relative; padding: 20px; color: #fff;
  .header-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); }
  h1 { position: relative; font-size: 24px; margin: 0; }
  .cyber-tag { background: rgba(255,255,255,0.2); padding: 2px 8px; font-size: 10px; border-radius: 4px; margin-right: 5px; position: relative; }
  .close-btn { position: absolute; top: 10px; right: 10px; background: none; border: none; color: #fff; cursor: pointer; }
}

.terminal-tabs { 
  display: flex; border-bottom: 1px solid rgba(0,0,0,0.05); 
  .tab { 
    flex: 1; text-align: center; padding: 12px; font-size: 13px; cursor: pointer; position: relative;
    &.active { color: $primary; font-weight: bold; border-bottom: 2px solid $primary; } 
    .pro-mode & &.active { color: $neon; border-color: $neon; } 
    .badge-dot { position: absolute; top: 8px; right: 20%; width: 6px; height: 6px; background: #ff4757; border-radius: 50%; }
  } 
}
.terminal-body { flex: 1; overflow-y: auto; padding: 20px; position: relative; }

// TAB 1: 单词卡片
.vocab-card {
  display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.03); padding: 12px; border-radius: 8px; margin-bottom: 10px;
  .pro-mode & { background: rgba(255,255,255,0.05); }
  .txt { font-weight: bold; } .ipa { font-size: 11px; color: #999; font-family: monospace; }
  .sound-btn { border: none; background: transparent; color: $primary; cursor: pointer; .pro-mode & { color: #fbbf24; } }
}

// TAB 2: AI 测评 (Pro + Enhanced)
.ai-zone {
  display: flex; flex-direction: column; height: 100%;

  .model-selector {
    margin-bottom: 15px;
    .label { font-size: 10px; color: #999; margin-bottom: 5px; display: block; }
    .model-scroll {
      display: flex; gap: 8px; overflow-x: auto; padding-bottom: 5px;
      &::-webkit-scrollbar { display: none; }
    }
    .model-chip {
      flex-shrink: 0; padding: 6px 12px; border-radius: 20px; font-size: 11px; 
      background: #f1f5f9; color: #64748b; border: 1px solid transparent; cursor: pointer; transition: 0.2s;
      &.active { background: $primary; color: #fff; box-shadow: 0 4px 10px rgba(0, 74, 173, 0.3); }
      .pro-mode & {
        background: rgba(255,255,255,0.05); color: #94a3b8;
        &.active { background: rgba(56, 189, 248, 0.2); border-color: $neon; color: $neon; }
      }
    }
  }

  .challenge-card {
    background: linear-gradient(135deg, rgba(0,0,0,0.02), rgba(0,0,0,0.05));
    border-radius: 12px; padding: 15px; margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center;
    .pro-mode & { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); }
    .sub { font-size: 10px; color: #999; display: block; margin-bottom: 4px; }
    h3 { margin: 0; font-size: 20px; color: #333; .pro-mode & { color: #fff; } }
    .ipa-hint { font-family: monospace; font-size: 12px; color: $primary; margin-top: 4px; .pro-mode & { color: $neon; } }
    .play-sample {
      border: none; background: #fff; color: $primary; padding: 6px 12px; border-radius: 20px; font-size: 11px; cursor: pointer; box-shadow: 0 2px 5px rgba(0,0,0,0.05);
      .pro-mode & { background: #1e293b; color: $neon; }
    }
  }

  .interaction-area { flex: 1; display: flex; flex-direction: column; justify-content: flex-end; position: relative; }

  .recording-ui {
    flex: 1; display: flex; flex-direction: column; justify-content: flex-end; position: relative;
    .wave-visualizer {
      height: 60px; display: flex; align-items: flex-end; justify-content: center; gap: 3px; margin-bottom: 20px;
      .spectrum-bar {
        width: 4px; background: #ddd; border-radius: 2px; transition: height 0.1s;
        &.active { background: $primary; .pro-mode & { background: $neon; } }
      }
    }
    .analyzing-overlay {
      position: absolute; inset: 0; background: rgba(255,255,255,0.9); z-index: 10; display: flex; flex-direction: column; align-items: center; justify-content: center;
      .pro-mode & { background: rgba(15, 23, 42, 0.95); }
      .scan-line {
        width: 100%; height: 2px; background: linear-gradient(90deg, transparent, $primary, transparent);
        animation: scan 1.5s infinite; margin-bottom: 10px;
        .pro-mode & { background: linear-gradient(90deg, transparent, $neon, transparent); }
      }
      .loading-text { text-align: center; font-size: 14px; font-weight: bold; color: #333; .pro-mode & { color: #fff; } }
      .small { font-size: 10px; color: #999; font-weight: normal; }
    }
    .record-btn {
      width: 100%; padding: 15px; border-radius: 12px; border: none; font-weight: bold; font-size: 14px;
      background: #f1f5f9; color: #64748b; display: flex; align-items: center; justify-content: center; gap: 8px; cursor: pointer; transition: 0.3s;
      &.recording { background: #ef4444; color: #fff; animation: pulse-red 1.5s infinite; }
      &.disabled { opacity: 0.5; cursor: wait; }
      .pro-mode & { background: #1e293b; color: #94a3b8; &.recording { background: #ef4444; color: #fff; } }
    }
  }

  .ai-report {
    animation: slide-up 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    .score-header {
      display: flex; align-items: center; gap: 15px; margin-bottom: 20px;
      .total-score { 
        .num { font-size: 48px; font-weight: bold; color: #10b981; font-family: 'Orbitron'; line-height: 1; }
        .unit { font-size: 12px; color: #10b981; }
      }
      .ai-comment { font-size: 12px; color: #666; background: #f0fdf4; padding: 10px; border-radius: 8px; flex: 1; line-height: 1.4; .pro-mode & { background: rgba(16, 185, 129, 0.1); color: #fff; } }
    }
    .dimension-bars {
      margin-bottom: 20px;
      .dim-row {
        display: flex; align-items: center; gap: 10px; margin-bottom: 8px; font-size: 11px;
        .label { width: 70px; color: #666; .pro-mode & { color: #94a3b8; } }
        .bar-track { flex: 1; height: 6px; background: #eee; border-radius: 3px; overflow: hidden; .pro-mode & { background: #334155; } }
        .bar-fill { height: 100%; background: $primary; border-radius: 3px; animation: grow 1s ease-out forwards; .pro-mode & { background: $neon; } }
        .val { width: 25px; text-align: right; font-weight: bold; }
      }
    }
    .tone-analysis {
      background: #f8fafc; border-radius: 8px; padding: 10px; position: relative; margin-bottom: 15px;
      .pro-mode & { background: rgba(255,255,255,0.05); }
      h4 { margin: 0 0 10px; font-size: 12px; color: #333; .pro-mode & { color: #fff; } }
      .tone-chart { position: relative; height: 60px; }
      .tone-svg { width: 100%; height: 100%; overflow: visible; }
      .user-path { stroke-dasharray: 100; stroke-dashoffset: 100; animation: draw-line 2s ease-out forwards 0.5s; .pro-mode & { stroke: $neon; } }
      .error-spot {
        position: absolute; top: 0; transform: translateX(-50%);
        .pointer { width: 6px; height: 6px; background: #ef4444; border-radius: 50%; margin: 0 auto 2px; box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.2); }
        .msg { background: #ef4444; color: #fff; font-size: 9px; padding: 2px 6px; border-radius: 4px; white-space: nowrap; }
        animation: pop-in 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards 1.5s; opacity: 0;
      }
    }
    .retry-btn { width: 100%; padding: 12px; background: #fff; border: 1px solid #ddd; border-radius: 8px; color: #666; cursor: pointer; &:hover { border-color: $primary; color: $primary; } .pro-mode & { background: transparent; border-color: #334155; color: #94a3b8; &:hover { border-color: $neon; color: $neon; } } }
  }
}

// TAB 3: 语料上传 (Modern)
.upload-panel {
  display: flex; flex-direction: column; height: 100%;
  
  .upload-header {
    margin-bottom: 20px;
    h3 { font-size: 18px; margin: 0 0 5px; color: $primary; display: flex; align-items: center; gap: 8px; }
    p { font-size: 11px; color: #666; margin: 0; }
    .pro-mode & h3 { color: $neon; }
    .pro-mode & p { color: #94a3b8; }
  }
}

.audio-input-zone {
  background: rgba(0,0,0,0.03); border: 1px dashed #ccc; border-radius: 12px; padding: 20px;
  text-align: center; margin-bottom: 20px; transition: 0.3s; position: relative; overflow: hidden;
  
  .pro-mode & { background: rgba(255,255,255,0.05); border-color: #334155; }
  
  &.is-recording {
    border-color: #ff4757; background: rgba(255, 71, 87, 0.05);
    .visualizer-bars span { animation-play-state: running; background: #ff4757; }
  }

  .visualizer-bars {
    height: 40px; display: flex; justify-content: center; align-items: center; gap: 4px; margin-bottom: 15px;
    span {
      width: 4px; height: 10%; background: $primary; border-radius: 2px;
      animation: wave 0.5s ease-in-out infinite alternate; animation-play-state: paused;
      .pro-mode & { background: $neon; }
    }
  }

  .actions {
    display: flex; align-items: center; justify-content: center; gap: 15px;
    .divider { font-size: 12px; color: #999; }
    .action-btn {
      padding: 8px 16px; border-radius: 20px; border: 1px solid transparent; font-size: 12px; cursor: pointer; display: flex; align-items: center; gap: 5px; transition: 0.2s;
      &.record { background: $primary; color: #fff; &:active { transform: scale(0.95); } }
      &.upload { background: #fff; border-color: #eee; color: #333; &:hover { border-color: $primary; color: $primary; } }
      
      .pro-mode & {
        &.record { background: $neon; color: #000; }
        &.upload { background: transparent; border-color: #475569; color: #fff; &:hover { border-color: $neon; color: $neon; } }
      }
    }
  }
}

.form-group {
  flex: 1;
  .input-item {
    display: flex; align-items: center; background: #f8fafc; border-radius: 8px; padding: 0 12px; margin-bottom: 10px; border: 1px solid transparent; transition: 0.3s;
    i { color: #94a3b8; margin-right: 10px; }
    input { border: none; background: transparent; padding: 12px 0; width: 100%; outline: none; font-size: 13px; color: #333; }
    &:focus-within { border-color: $primary; background: #fff; box-shadow: 0 0 0 3px rgba(0, 74, 173, 0.1); }
    
    .pro-mode & {
      background: rgba(255,255,255,0.05); 
      input { color: #fff; }
      &:focus-within { border-color: $neon; background: rgba(56, 189, 248, 0.1); box-shadow: none; }
    }
  }

  .tags-select {
    display: flex; flex-wrap: wrap; gap: 8px; margin-top: 15px;
    .tag-chip {
      padding: 4px 10px; font-size: 11px; border-radius: 12px; background: #e2e8f0; color: #64748b; cursor: pointer; transition: 0.2s;
      &.active { background: $primary; color: #fff; }
      .pro-mode & {
        background: #1e293b; color: #94a3b8;
        &.active { background: $neon; color: #000; }
      }
    }
  }
}

.submit-btn {
  width: 100%; padding: 14px; border: none; border-radius: 8px; background: $primary; color: #fff; font-weight: bold; cursor: pointer; display: flex; justify-content: center; align-items: center; gap: 10px; margin-top: 20px;
  &:disabled { background: #cbd5e1; cursor: not-allowed; }
  .pro-mode & { background: $neon; color: #0f172a; &:disabled { background: #334155; color: #64748b; } }
}

// 审核状态卡片
.audit-status-card {
  height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;
  
  .status-icon {
    width: 60px; height: 60px; position: relative; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;
    i { font-size: 24px; color: #f59e0b; z-index: 2; }
    .spinner-ring {
      position: absolute; inset: 0; border: 3px solid rgba(245, 158, 11, 0.2); border-top-color: #f59e0b; border-radius: 50%; animation: spin 1.5s linear infinite;
    }
  }

  h3 { font-size: 18px; margin: 0 0 5px; color: #333; .pro-mode & { color: #fff; } }
  .ticket-id { font-family: monospace; font-size: 12px; color: #94a3b8; margin-bottom: 30px; }

  .timeline {
    width: 100%; max-width: 200px; display: flex; justify-content: space-between; position: relative; margin-bottom: 30px;
    &::before { content: ''; position: absolute; top: 5px; left: 0; right: 0; height: 2px; background: #e2e8f0; z-index: 0; .pro-mode & { background: #334155; } }
    
    .step {
      position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; gap: 8px;
      .dot { width: 12px; height: 12px; background: #e2e8f0; border-radius: 50%; border: 2px solid #fff; .pro-mode & { background: #334155; border-color: #0f172a; } }
      .txt { font-size: 10px; color: #94a3b8; white-space: nowrap; }
      
      &.completed .dot { background: #10b981; }
      &.active {
        .dot { background: #f59e0b; box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.2); }
        .txt { color: #f59e0b; font-weight: bold; }
      }
    }
  }

  .audit-tip { font-size: 11px; background: #fef3c7; color: #92400e; padding: 10px; border-radius: 6px; width: 100%; margin-bottom: 20px; }
  .btn-back { border: 1px solid #e2e8f0; background: transparent; padding: 8px 20px; border-radius: 20px; font-size: 12px; color: #64748b; cursor: pointer; &:hover { border-color: $primary; color: $primary; } .pro-mode & { border-color: #334155; color: #94a3b8; &:hover { border-color: $neon; color: $neon; } } }
}

// 通关文牒
.passport-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 200; display: flex; align-items: center; justify-content: center;
  .passport-card { width: 300px; background: #8e1c1c; padding: 30px; border-radius: 12px; color: #fff; text-align: center;
    .stamp-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 20px; }
    .stamp { aspect-ratio: 1; border: 1px dashed rgba(255,255,255,0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; opacity: 0.4;
      &.active { border: 2px solid #ffd700; color: #ffd700; opacity: 1; font-weight: bold; transform: rotate(-10deg); }
    }
  }
}

// 动画
@keyframes wave { 0% { height: 10%; } 100% { height: 100%; } }
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes scan { 0% { transform: translateY(-20px); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(20px); opacity: 0; } }
@keyframes pulse-red { 0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); } 70% { box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); } 100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); } }
@keyframes grow { from { width: 0; } }
@keyframes draw-line { to { stroke-dashoffset: 0; } }
@keyframes slide-up { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
@keyframes pop-in { to { opacity: 1; transform: translateX(-50%) translateY(0); } }
.pulsing { animation: pulse 1.5s infinite; }
@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.4); } 70% { box-shadow: 0 0 0 6px rgba(245, 158, 11, 0); } 100% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0); } }
</style>