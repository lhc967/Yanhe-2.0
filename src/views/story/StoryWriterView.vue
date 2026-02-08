<template>
  <div class="writer-paper-page">
    
    <nav class="desk-nav">
      <div class="nav-left" @click="$router.back()">
        <span class="back-text"><i class="bi bi-chevron-left"></i> {{ $t('writer.nav.back') }}</span>
      </div>
      <div class="nav-center">
        <span class="status-dot" :class="{ saved: isSaved }"></span>
        <span class="status-text">{{ isSaved ? $t('writer.nav.status_saved') : $t('writer.nav.status_writing') }}</span>
      </div>
      <div class="nav-right">
        <button class="publish-seal-btn" @click="handlePublish">
          <span class="seal-inner">{{ $t('writer.nav.publish') }}</span>
        </button>
      </div>
    </nav>

    <div class="paper-container">
      <div class="cover-section" @click="triggerCoverUpload">
        <input type="file" ref="coverInput" hidden @change="handleCoverChange">
        <div v-if="coverUrl" class="cover-img" :style="{ backgroundImage: `url(${coverUrl})` }">
          <div class="cover-mask">{{ $t('writer.cover.change') }}</div>
        </div>
        <div v-else class="cover-placeholder">
          <i class="bi bi-image"></i>
          <span>{{ $t('writer.cover.add') }}</span>
        </div>
      </div>

      <div class="writing-area">
        <input 
          v-model="title" 
          class="ink-title" 
          :placeholder="$t('writer.editor.title_ph')" 
          @input="isSaved = false"
        >
        
        <div class="author-line">
          <span class="date">{{ formattedDate }}</span>
          <span class="divider">/</span>
          <span class="name">{{ userStore.userInfo.name || $t('writer.msg.anonymous') }} {{ $t('writer.editor.author_suffix') }}</span>
        </div>

        <div class="editor-box">
          <textarea 
            v-model="content" 
            class="ink-content" 
            :placeholder="$t('writer.editor.content_ph')" 
            ref="textareaRef"
            @input="handleInput"
          ></textarea>
          
          <transition name="fade">
            <div v-if="content.length > 0" class="ai-brush-float" @click="aiContinueWrite" :title="$t('writer.editor.ai_btn')">
              <i class="bi bi-pen-fill"></i>
              <span class="brush-tip">{{ $t('writer.editor.ai_tip') }}</span>
            </div>
          </transition>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
import { useI18n } from 'vue-i18n'
import { ElMessage, ElLoading } from 'element-plus'

const { t, locale } = useI18n()
const router = useRouter()
const userStore = useUserStore()

const title = ref('')
const content = ref('')
const coverUrl = ref('')
const isSaved = ref(true)
const textareaRef = ref(null)
const coverInput = ref(null)

// 动态日期格式
const formattedDate = computed(() => {
  const date = new Date()
  if (locale.value === 'en') {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  } else {
    return `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日`
  }
})

const handleInput = () => {
  isSaved.value = false
  // 自动增高
  const el = textareaRef.value
  el.style.height = 'auto'
  el.style.height = el.scrollHeight + 'px'
  
  // [Database] 可以在这里做防抖自动保存
  // autoSaveToDraft(form)
}

const triggerCoverUpload = () => coverInput.value.click()
const handleCoverChange = (e) => {
  const file = e.target.files[0]
  if (file) coverUrl.value = URL.createObjectURL(file)
}

// AI 续写功能
const aiContinueWrite = () => {
  const loading = ElLoading.service({ 
    text: t('writer.msg.ai_loading'), 
    background: 'rgba(244, 240, 230, 0.8)',
    customClass: 'ink-loading' 
  })
  
  // [API] 调用续写接口
  // axios.post('/api/ai/continue', { context: content.value })

  setTimeout(() => {
    loading.close()
    
    // 模拟不同语言的续写内容
    const aiText = locale.value === 'en' 
      ? "\n\n(AI Continuation) The wind at this moment seems to carry echoes of a thousand years, blowing through ancient streets..."
      : "\n\n(AI 续写) 此刻的风仿佛也带着千年的回响，穿过古老的街巷，吹动了檐角的风铃。我驻足良久，想起一句古诗..."
      
    content.value += aiText
    handleInput() // 调整高度
    ElMessage.success(t('writer.msg.ai_done'))
  }, 1500)
}

const handlePublish = () => {
  if (!title.value || !content.value) return ElMessage.warning(t('writer.msg.validate_error'))
  
  // 模拟盖章动画
  const btn = document.querySelector('.publish-seal-btn')
  btn.classList.add('stamping')
  
  // [API] 发布文章
  // axios.post('/api/story/publish', { title, content, coverUrl })

  setTimeout(() => {
    ElMessage.success(t('writer.msg.success'))
    router.push('/story')
  }, 1000)
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Noto+Serif+SC:wght@400;700&display=swap');

$ink-black: #2c2c2c;
$paper-color: #f4f0e6;
$seal-red: #b52a1c;

.writer-paper-page {
  background-color: $paper-color;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dcbba3' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  min-height: 100vh;
  padding-top: 70px;
  font-family: 'Noto Serif SC', serif;
  color: $ink-black;
}

/* 1. 顶部案头 */
.desk-nav {
  position: fixed; top: 0; left: 0; right: 0; height: 60px;
  display: flex; justify-content: space-between; align-items: center;
  padding: 0 30px; z-index: 100;
  background: rgba(244, 240, 230, 0.95);
  border-bottom: 1px solid rgba(0,0,0,0.05);
  
  .back-text { cursor: pointer; font-size: 14px; color: #666; transition: 0.3s; &:hover { color: $ink-black; } }
  
  .nav-center {
    display: flex; align-items: center; gap: 6px; font-size: 12px; color: #999;
    .status-dot { width: 6px; height: 6px; background: #ccc; border-radius: 50%; transition: 0.3s; }
    .status-dot.saved { background: #52c41a; }
  }
  
  /* 印章按钮 */
  .publish-seal-btn {
    width: 36px; height: 36px; border: 2px solid $ink-black; border-radius: 4px;
    background: transparent; padding: 2px; cursor: pointer; transition: 0.3s;
    .seal-inner {
      display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;
      background: $ink-black; color: #fff; font-family: 'Ma Shan Zheng'; font-size: 12px;
    }
    &:hover .seal-inner { background: $seal-red; }
    &.stamping { transform: scale(0.9); border-color: $seal-red; .seal-inner { background: $seal-red; } }
  }
}

/* 2. 纸张容器 */
.paper-container {
  max-width: 800px; margin: 30px auto; background: #fff;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-radius: 4px;
  min-height: 80vh; padding-bottom: 100px; position: relative;
}

/* 封面 */
.cover-section {
  height: 200px; background: #f9f9f9; position: relative; cursor: pointer; overflow: hidden;
  &:hover .cover-placeholder { color: $ink-black; }
  .cover-placeholder {
    height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;
    color: #ccc; font-size: 14px; gap: 10px; transition: 0.3s; i { font-size: 24px; }
  }
  .cover-img { width: 100%; height: 100%; background-size: cover; background-position: center; }
  .cover-mask {
    position: absolute; inset: 0; background: rgba(0,0,0,0.3); color: #fff;
    display: flex; align-items: center; justify-content: center; opacity: 0; transition: 0.3s;
  }
  &:hover .cover-mask { opacity: 1; }
}

/* 书写区 */
.writing-area { padding: 40px 60px; position: relative; }

.ink-title {
  width: 100%; border: none; font-size: 32px; font-weight: bold; margin-bottom: 15px;
  font-family: 'Noto Serif SC', serif; outline: none; color: $ink-black; text-align: center;
  &::placeholder { color: #ddd; }
}

.author-line {
  text-align: center; font-size: 12px; color: #999; margin-bottom: 40px; font-family: sans-serif;
  .divider { margin: 0 5px; }
}

/* 核心：信纸格线效果 */
.editor-box { position: relative; }
.ink-content {
  width: 100%; min-height: 400px; border: none; resize: none; outline: none;
  font-size: 18px; line-height: 2.0; color: #444; background: transparent;
  font-family: 'Noto Serif SC', serif;
  
  /* CSS 绘制信纸横线 */
  background-image: linear-gradient(transparent 96%, #eee 96%);
  background-size: 100% 36px; /* 行高必须匹配 line-height */
  line-height: 36px; 
}

/* 悬浮毛笔 */
.ai-brush-float {
  position: absolute; right: -50px; bottom: 20px;
  width: 40px; height: 100px; cursor: pointer;
  display: flex; flex-direction: column; align-items: center; gap: 5px;
  transition: 0.3s; opacity: 0.6;
  
  i { font-size: 24px; color: $ink-black; transform: rotate(135deg); }
  .brush-tip { writing-mode: vertical-rl; font-size: 12px; letter-spacing: 2px; color: $ink-black; font-weight: bold; }
  
  &:hover { opacity: 1; transform: translateY(-5px); i { color: $seal-red; } }
}

@media (max-width: 768px) {
  .writing-area { padding: 30px 20px; }
  .ai-brush-float { right: 0; bottom: -40px; flex-direction: row; height: auto; width: auto; background: #fff; padding: 5px 10px; border-radius: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); i { transform: none; } .brush-tip { writing-mode: horizontal-tb; } }
}
</style>