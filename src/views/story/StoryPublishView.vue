<template>
  <div class="publish-paper-page">
    
    <nav class="paper-nav">
      <a class="nav-text cancel" @click="$router.back()">{{ $t('publish_paper.nav.cancel') }}</a>
      <span class="nav-title">{{ $t('publish_paper.nav.title') }}</span>
      <button class="nav-btn-publish" :disabled="!isReady" @click="handlePublish">
        <span class="seal-text">{{ $t('publish_paper.nav.publish') }}</span>
      </button>
    </nav>

    <div class="desk-container">
      
      <div class="material-board">
        <div class="upload-zone" @click="triggerUpload" :class="{ 'has-file': previewUrl }">
          <input type="file" ref="fileInput" hidden @change="handleFileChange" accept="image/*,video/*">
          
          <div v-if="previewUrl" class="preview-wrap">
            <img :src="previewUrl" class="preview-img">
            <div class="change-tip">{{ $t('publish_paper.upload.change') }}</div>
          </div>
          
          <div v-else class="placeholder">
            <div class="ink-circle">
              <i class="bi bi-image"></i>
            </div>
            <p>{{ $t('publish_paper.upload.placeholder') }}</p>
          </div>
        </div>
      </div>

      <div class="writing-paper">
        <div class="paper-lines">
          
          <div class="input-row title-row">
            <input v-model="form.title" :placeholder="$t('publish_paper.form.title_ph')" class="ink-input title">
            <button class="ai-polish-btn" @click="aiOptimize" :title="$t('publish_paper.form.ai_btn')">
              <i class="bi bi-magic"></i>
            </button>
          </div>

          <div class="input-row content-row">
            <textarea v-model="form.content" :placeholder="$t('publish_paper.form.content_ph')" rows="8" class="ink-textarea"></textarea>
          </div>

          <div class="meta-section">
            <div class="meta-label">{{ $t('publish_paper.form.topic_label') }}</div>
            <div class="tags-cloud">
              <span 
                v-for="tag in $tm('publish_paper.tags')" 
                :key="tag" 
                class="ink-pill" 
                :class="{ selected: form.tags.includes(tag) }"
                @click="toggleTag(tag)"
              >
                # {{ tag }}
              </span>
            </div>
          </div>

          <div class="meta-section">
            <div class="meta-row" @click="getLocation">
              <div class="left"><i class="bi bi-geo-alt"></i> {{ $t('publish_paper.form.loc_label') }}</div>
              <div class="right">{{ form.location || $t('publish_paper.form.loc_ph') }} <i class="bi bi-chevron-right"></i></div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ElMessage, ElLoading } from 'element-plus'

const { t, locale } = useI18n()
const router = useRouter()
const fileInput = ref(null)
const previewUrl = ref('')

const form = reactive({
  title: '',
  content: '',
  location: '',
  tags: []
})

const isReady = computed(() => previewUrl.value && form.title && form.content)

const triggerUpload = () => fileInput.value.click()

const handleFileChange = (e) => {
  const file = e.target.files[0]
  if (file) previewUrl.value = URL.createObjectURL(file)
}

const toggleTag = (tag) => {
  if (form.tags.includes(tag)) form.tags = form.tags.filter(t => t !== tag)
  else {
    if (form.tags.length >= 3) return ElMessage.warning(t('publish_paper.msg_max_tags'))
    form.tags.push(tag)
  }
}

const getLocation = () => {
  form.location = t('publish_paper.loc_finding')
  setTimeout(() => {
    form.location = locale.value === 'en' ? 'China · Beijing' : '中国 · 北京'
  }, 1000)
}

const aiOptimize = () => {
  if (!form.title) return ElMessage.warning(t('publish_paper.msg_no_title'))
  
  const loading = ElLoading.service({ text: t('publish_paper.ai_processing'), background: 'rgba(255,255,255,0.8)' })
  
  // [API] AI 润色接口
  // const res = await axios.post('/api/ai/optimize_title', { title: form.title })
  
  setTimeout(() => {
    loading.close()
    const prefix = locale.value === 'en' ? '✨ ' : '✨ '
    const suffix = locale.value === 'en' ? ' | Oriental Aesthetics' : ' | 东方美学惊艳时刻'
    form.title = `${prefix}${form.title}${suffix}`
    ElMessage.success(t('publish_paper.msg_ai_done'))
  }, 1000)
}

const handlePublish = () => {
  const loading = ElLoading.service({ text: t('publish_paper.publishing'), background: 'rgba(255,255,255,0.8)' })
  
  // [API] 发布接口
  // const formData = new FormData()
  // formData.append('file', fileInput.value.files[0])
  // ...
  // axios.post('/api/story/publish', formData)

  setTimeout(() => {
    loading.close()
    ElMessage.success(t('publish_paper.msg_success'))
    router.push('/story')
  }, 1500)
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Noto+Serif+SC:wght@400;700&display=swap');

$ink-black: #2c2c2c;
$paper-color: #f4f0e6;
$seal-red: #b52a1c;

.publish-paper-page {
  background-color: $paper-color;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dcbba3' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  min-height: 100vh;
  padding-top: 60px;
  font-family: 'Noto Serif SC', serif;
  color: $ink-black;
}

/* 导航 */
.paper-nav {
  position: fixed; top: 0; left: 0; right: 0; height: 60px;
  display: flex; justify-content: space-between; align-items: center;
  padding: 0 30px; z-index: 100;
  background: rgba(244, 240, 230, 0.95); border-bottom: 1px solid rgba(0,0,0,0.05);
  
  .nav-text { cursor: pointer; font-size: 14px; color: #666; &:hover { color: $ink-black; } }
  .nav-title { font-weight: bold; font-size: 16px; letter-spacing: 2px; }
  
  .nav-btn-publish {
    background: $ink-black; color: #fff; border: none; padding: 6px 16px;
    border-radius: 4px; cursor: pointer; transition: 0.3s;
    &:disabled { opacity: 0.5; cursor: not-allowed; }
    &:not(:disabled):hover { background: $seal-red; }
    .seal-text { font-family: 'Ma Shan Zheng'; font-size: 14px; }
  }
}

/* 创作台 */
.desk-container {
  max-width: 1000px; margin: 30px auto; display: flex; gap: 40px; padding: 0 20px;
  height: calc(100vh - 100px);
}

/* 左侧素材板 */
.material-board { flex: 1; display: flex; flex-direction: column; }
.upload-zone {
  flex: 1; background: rgba(0,0,0,0.03); border: 2px dashed rgba(0,0,0,0.1);
  border-radius: 8px; display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: 0.3s; overflow: hidden; position: relative;
  
  &:hover { background: rgba(0,0,0,0.05); border-color: $ink-black; }
  
  .placeholder {
    text-align: center; color: #999;
    .ink-circle {
      width: 60px; height: 60px; border-radius: 50%; border: 2px solid #ccc;
      display: flex; align-items: center; justify-content: center; margin: 0 auto 10px;
      font-size: 24px;
    }
  }
  
  .preview-wrap {
    width: 100%; height: 100%;
    .preview-img { width: 100%; height: 100%; object-fit: contain; }
    .change-tip {
      position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);
      background: rgba(0,0,0,0.6); color: #fff; padding: 4px 12px; border-radius: 20px;
      font-size: 12px; opacity: 0; transition: 0.3s;
    }
    &:hover .change-tip { opacity: 1; }
  }
}

/* 右侧信笺 */
.writing-paper {
  flex: 1.2; background: #fff; padding: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  border-radius: 4px; overflow-y: auto;
}

/* 输入控件 (下划线风格) */
.ink-input {
  width: 100%; border: none; border-bottom: 1px solid #eee; padding: 10px 0;
  font-family: 'Noto Serif SC', serif; outline: none; background: transparent;
  transition: 0.3s;
  &.title { font-size: 24px; font-weight: bold; color: $ink-black; }
  &:focus { border-bottom-color: $ink-black; }
}

.title-row { display: flex; align-items: center; margin-bottom: 20px; position: relative; }
.ai-polish-btn {
  position: absolute; right: 0; background: none; border: none; font-size: 18px; color: #d4af37;
  cursor: pointer; &:hover { transform: scale(1.1); }
}

.ink-textarea {
  width: 100%; border: none; resize: none; outline: none;
  font-family: 'Noto Serif SC', serif; font-size: 16px; line-height: 1.8;
  background: transparent; margin-bottom: 30px;
  background-image: linear-gradient(transparent 95%, #eee 95%);
  background-size: 100% 36px; /* 行高模拟 */
  line-height: 36px; /* 对齐网格 */
}

/* 标签云 */
.meta-section { margin-bottom: 20px; }
.meta-label { font-size: 12px; color: #999; margin-bottom: 10px; }
.tags-cloud { display: flex; flex-wrap: wrap; gap: 8px; }
.ink-pill {
  font-size: 12px; padding: 4px 12px; border: 1px solid #eee; border-radius: 20px;
  cursor: pointer; color: #666; transition: 0.2s;
  &:hover { border-color: $ink-black; }
  &.selected { background: $ink-black; color: #fff; border-color: $ink-black; }
}

.meta-row {
  display: flex; justify-content: space-between; padding: 15px 0;
  border-bottom: 1px solid #eee; cursor: pointer; font-size: 14px;
  &:hover { color: $seal-red; }
  .right { color: #999; font-size: 12px; }
}

@media (max-width: 768px) {
  .desk-container { flex-direction: column; height: auto; }
  .upload-zone { height: 250px; }
  .writing-paper { padding: 20px; }
}
</style>