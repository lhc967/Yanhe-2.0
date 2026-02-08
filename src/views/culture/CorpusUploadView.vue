<template>
  <div class="corpus-upload-page">
    
    <nav class="upload-nav">
      <button @click="$router.back()"><i class="bi bi-x-lg"></i></button>
      <span>{{ $t('upload.title') }}</span>
      <div style="width: 24px;"></div>
    </nav>

    <div class="terminal-container">
      <div class="status-bar">
        <span><i class="bi bi-wifi"></i> {{ $t('upload.db_connected') }}</span>
        <span>ID: {{ userStore.userInfo.name || $t('upload.guest_id') }}</span>
      </div>

      <div class="record-section">
        <div class="visualizer">
          <div class="bar" v-for="n in 20" :key="n" :style="{ height: isRecording ? Math.random()*100 + '%' : '10%' }"></div>
        </div>
        <div class="timer">{{ formatTime(duration) }}</div>
        
        <button class="record-main-btn" :class="{ recording: isRecording }" @click="toggleRecord">
          <i class="bi" :class="isRecording ? 'bi-stop-fill' : 'bi-mic-fill'"></i>
        </button>
        <p class="hint">{{ isRecording ? $t('upload.recording_hint') : $t('upload.start_hint') }}</p>
      </div>

      <div class="meta-form">
        <div class="form-group">
          <label>{{ $t('upload.form.location_label') }}</label>
          <input :placeholder="$t('upload.form.location_placeholder')" v-model="form.location">
        </div>
        <div class="form-group">
          <label>{{ $t('upload.form.meaning_label') }}</label>
          <input :placeholder="$t('upload.form.meaning_placeholder')" v-model="form.meaning">
        </div>
        <div class="form-group">
          <label>{{ $t('upload.form.tags_label') }}</label>
          <div class="tags">
            <span class="tag" :class="{active: form.type==='daily'}" @click="form.type='daily'">{{ $t('upload.tags.daily') }}</span>
            <span class="tag" :class="{active: form.type==='nursery'}" @click="form.type='nursery'">{{ $t('upload.tags.nursery') }}</span>
            <span class="tag" :class="{active: form.type==='slang'}" @click="form.type='slang'">{{ $t('upload.tags.slang') }}</span>
          </div>
        </div>
      </div>

      <button class="upload-confirm-btn" @click="submit" :disabled="!canSubmit">
        <i class="bi bi-cloud-upload"></i> {{ $t('upload.btn_submit') }}
      </button>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
import { useI18n } from 'vue-i18n'
import { ElMessage, ElLoading } from 'element-plus'

const { t } = useI18n()
const router = useRouter()
const userStore = useUserStore()

const isRecording = ref(false)
const duration = ref(0)
const timerInterval = ref(null)
const hasRecorded = ref(false)
const audioBlob = ref(null) // 新增：存储音频数据

// 默认 type 改为 key
const form = ref({ location: '', meaning: '', type: 'daily' })

const canSubmit = computed(() => hasRecorded && form.value.location && form.value.meaning)

const toggleRecord = () => {
  if (isRecording.value) {
    // 停止录制
    isRecording.value = false
    clearInterval(timerInterval.value)
    hasRecorded.value = true
    // [Logic] 这里应调用浏览器 MediaRecorder API 获取 Blob
    // navigator.mediaDevices.getUserMedia(...)
    audioBlob.value = new Blob(['mock_audio_data'], { type: 'audio/mp3' }) 
  } else {
    // 开始录制
    isRecording.value = true
    duration.value = 0
    hasRecorded.value = false
    timerInterval.value = setInterval(() => duration.value++, 1000)
  }
}

const formatTime = (s) => {
  const m = Math.floor(s / 60).toString().padStart(2, '0')
  const sec = (s % 60).toString().padStart(2, '0')
  return `${m}:${sec}`
}

const submit = () => {
  const loading = ElLoading.service({ 
    text: t('upload.loading_text'), 
    background: 'rgba(0,0,0,0.8)' 
  })

  // [API] 构建 FormData 上传
  // const formData = new FormData()
  // formData.append('audio', audioBlob.value)
  // formData.append('location', form.value.location)
  // formData.append('meaning', form.value.meaning)
  // formData.append('type', form.value.type)
  
  // axios.post('/api/corpus/upload', formData)

  setTimeout(() => {
    loading.close()
    ElMessage.success(t('upload.success_msg'))
    router.back()
  }, 1500)
}
</script>

<style scoped lang="scss">
.corpus-upload-page {
  background: #111; color: #fff; min-height: 100vh; padding-top: 60px;
  font-family: 'Courier New', monospace; /* 终端字体风格 */
}

.upload-nav {
  position: fixed; top: 0; left: 0; right: 0; height: 60px; display: flex; justify-content: space-between; align-items: center; padding: 0 20px; background: #111; border-bottom: 1px solid #333; z-index: 100;
  button { background: none; border: none; color: #fff; font-size: 20px; }
  span { font-weight: bold; letter-spacing: 2px; }
}

.terminal-container { max-width: 600px; margin: 0 auto; padding: 20px; }

.status-bar { display: flex; justify-content: space-between; font-size: 10px; color: #0f0; margin-bottom: 30px; border-bottom: 1px dashed #333; padding-bottom: 10px; }

.record-section {
  text-align: center; margin-bottom: 40px;
  .visualizer {
    height: 60px; display: flex; align-items: center; justify-content: center; gap: 4px; margin-bottom: 20px;
    .bar { width: 4px; background: #0f0; border-radius: 2px; transition: height 0.1s; }
  }
  .timer { font-size: 32px; font-weight: bold; margin-bottom: 20px; letter-spacing: 2px; }
  .record-main-btn {
    width: 80px; height: 80px; border-radius: 50%; border: none; background: #fff; color: #d32f2f; font-size: 30px; cursor: pointer; transition: 0.3s;
    &.recording { background: #d32f2f; color: #fff; transform: scale(1.1); animation: pulse 1s infinite; }
  }
  .hint { color: #666; font-size: 12px; margin-top: 15px; }
}

.meta-form {
  .form-group {
    margin-bottom: 20px;
    label { display: block; font-size: 12px; color: #999; margin-bottom: 5px; }
    input { width: 100%; background: #222; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; outline: none; transition: 0.3s; &:focus { border-color: #0f0; } }
  }
  .tags {
    display: flex; gap: 10px;
    .tag { padding: 6px 16px; border: 1px solid #333; border-radius: 20px; font-size: 12px; cursor: pointer; &.active { background: #0f0; color: #000; border-color: #0f0; } }
  }
}

.upload-confirm-btn {
  width: 100%; background: #0f0; color: #000; border: none; padding: 15px; border-radius: 8px; font-weight: bold; margin-top: 20px; cursor: pointer;
  &:disabled { background: #333; color: #666; cursor: not-allowed; }
}

@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(211, 47, 47, 0.4); } 70% { box-shadow: 0 0 0 20px rgba(211, 47, 47, 0); } 100% { box-shadow: 0 0 0 0 rgba(211, 47, 47, 0); } }
</style>