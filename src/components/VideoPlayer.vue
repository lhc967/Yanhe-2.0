<template>
  <div class="video-container">
    <video
      ref="videoRef"
      class="native-video"
      :src="src"
      controls
      @timeupdate="handleTimeUpdate"
      @loadedmetadata="loadProgress"
    >
      {{ $t('player.video_not_supported') }}
    </video>

    <div class="custom-controls">
      <span class="label">{{ $t('player.speed_label') }}</span>
      <div class="speed-group">
        <span 
          v-for="rate in [0.5, 1.0, 1.5, 2.0]" 
          :key="rate"
          class="speed-item"
          :class="{ active: currentRate === rate }"
          @click="changeSpeed(rate)"
        >
          {{ rate }}x
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n' // 引入 i18n
import { ElMessage } from 'element-plus'

const props = defineProps({
  src: { type: String, required: true },
  courseId: { type: [String, Number], required: true }
})

const { t } = useI18n() // 获取翻译函数
const videoRef = ref(null)
const currentRate = ref(1.0)
const storageKey = `yanhe_progress_${props.courseId}`

// 修改倍速
const changeSpeed = (rate) => {
  if (videoRef.value) {
    videoRef.value.playbackRate = rate
    currentRate.value = rate
  }
}

// 实时记录进度
const handleTimeUpdate = () => {
  const currentTime = videoRef.value?.currentTime
  if (currentTime) {
    localStorage.setItem(storageKey, currentTime)
  }
}

// 加载上次进度
const loadProgress = () => {
  const lastTime = localStorage.getItem(storageKey)
  if (lastTime && videoRef.value) {
    const time = parseFloat(lastTime)
    videoRef.value.currentTime = time
    
    // 3. 替换恢复进度的提示，使用变量注入 {time}
    ElMessage.info(t('player.resume_tip', { time: formatTime(time) }))
  }
}

// 辅助函数：格式化时间 (国际化)
const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  // 4. 时间格式也走翻译，因为 "分/秒" 和 "min/sec" 写法不同
  return t('player.time_format', { m, s })
}
</script>

<style scoped lang="scss">
/* 样式保持不变 */
.video-container {
  width: 100%;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.native-video {
  width: 100%;
  display: block;
  max-height: 500px;
}

.custom-controls {
  background: #fff;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;

  .label {
    font-size: 14px;
    color: #666;
    margin-right: 10px;
  }

  .speed-group {
    display: flex;
    gap: 8px;

    .speed-item {
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 12px;
      cursor: pointer;
      background: #f5f5f5;
      color: #333;
      transition: all 0.3s;

      &:hover {
        background: #e3f2fd;
      }

      &.active {
        background: #1a237e;
        color: #fff;
      }
    }
  }
}
</style>