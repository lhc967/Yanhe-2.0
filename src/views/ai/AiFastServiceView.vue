<template>
  <div class="ai-page">
    
    <div class="sidebar d-none d-md-flex flex-column">
      <div class="p-3">
        <button class="btn btn-outline-light w-100 d-flex align-items-center justify-content-start gap-2" @click="newChat">
          <i class="bi bi-plus-lg"></i> {{ $t('ai.new_chat') }}
        </button>
      </div>
      <div class="history-list flex-grow-1 overflow-auto custom-scrollbar">
        <div class="history-label">{{ $t('ai.history.today') }}</div>
        <div class="history-item active"><i class="bi bi-chat-left-text"></i> {{ $t('ai.history.demo1') }}</div>
        <div class="history-item"><i class="bi bi-chat-left-text"></i> {{ $t('ai.history.demo2') }}</div>
        <div class="history-label">{{ $t('ai.history.yesterday') }}</div>
        <div class="history-item"><i class="bi bi-chat-left-text"></i> {{ $t('ai.history.demo3') }}</div>
      </div>
      <div class="user-bottom p-3 border-top border-secondary">
        <div class="d-flex align-items-center gap-2 text-white-50">
          <img :src="userStore.userInfo.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=User'" class="rounded-circle" width="32">
          <span class="text-truncate">{{ userStore.userInfo.name || $t('ai.guest') }}</span>
        </div>
      </div>
    </div>

    <div class="main-chat d-flex flex-column h-100">
      
      <header class="chat-header">
        <div class="d-flex align-items-center gap-3">
          <button class="btn btn-link text-dark p-0 d-md-none" @click="$router.go(-1)">
            <i class="bi bi-arrow-left fs-4"></i>
          </button>
          
          <div class="dropdown">
            <button class="btn btn-light border rounded-pill dropdown-toggle d-flex align-items-center gap-2" type="button" data-bs-toggle="dropdown">
              <i class="bi bi-stars text-warning"></i>
              <span class="fw-bold">{{ currentModel.name }}</span>
            </button>
            <ul class="dropdown-menu shadow border-0 mt-2 p-1">
              <li v-for="model in models" :key="model.id">
                <a class="dropdown-item rounded py-2 d-flex align-items-center justify-content-between" 
                   :class="{ active: currentModel.id === model.id }" 
                   href="#" @click.prevent="currentModel = model">
                  <div>
                    <div class="fw-bold">{{ model.name }}</div>
                    <div class="small text-muted" style="font-size:11px">{{ $t(`ai.models.${model.id}_desc`) }}</div>
                  </div>
                  <i class="bi bi-check-lg" v-if="currentModel.id === model.id"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="d-flex align-items-center gap-2">
          <button class="btn btn-light rounded-circle" :title="$t('ai.clear_chat')" @click="clearMessages"><i class="bi bi-trash3"></i></button>
          <button class="btn btn-light rounded-circle d-md-none"><i class="bi bi-clock-history"></i></button>
        </div>
      </header>

      <div class="chat-content flex-grow-1 overflow-auto p-3 p-md-5" ref="chatBox">
        
        <div v-if="messages.length === 0" class="empty-state">
          <div class="logo-box mb-4">
            <i class="bi bi-robot fs-1 text-primary"></i>
          </div>
          <h2 class="fw-bold mb-4">{{ $t('ai.welcome_title') }}</h2>
          <div class="shortcut-grid">
            <div class="shortcut-card" @click="sendShortcut($t('ai.shortcuts.translate_prompt'))">
              <div class="icon-box bg-blue"><i class="bi bi-translate"></i></div>
              <div class="text-start">
                <div class="fw-bold">{{ $t('ai.shortcuts.translate_title') }}</div>
                <div class="text-muted small">{{ $t('ai.shortcuts.translate_desc') }}</div>
              </div>
            </div>
            <div class="shortcut-card" @click="sendShortcut($t('ai.shortcuts.polish_prompt'))">
              <div class="icon-box bg-purple"><i class="bi bi-envelope-check"></i></div>
              <div class="text-start">
                <div class="fw-bold">{{ $t('ai.shortcuts.polish_title') }}</div>
                <div class="text-muted small">{{ $t('ai.shortcuts.polish_desc') }}</div>
              </div>
            </div>
            <div class="shortcut-card" @click="sendShortcut($t('ai.shortcuts.grammar_prompt'))">
              <div class="icon-box bg-green"><i class="bi bi-check-circle"></i></div>
              <div class="text-start">
                <div class="fw-bold">{{ $t('ai.shortcuts.grammar_title') }}</div>
                <div class="text-muted small">{{ $t('ai.shortcuts.grammar_desc') }}</div>
              </div>
            </div>
            <div class="shortcut-card" @click="sendShortcut($t('ai.shortcuts.culture_prompt'))">
              <div class="icon-box bg-orange"><i class="bi bi-book"></i></div>
              <div class="text-start">
                <div class="fw-bold">{{ $t('ai.shortcuts.culture_title') }}</div>
                <div class="text-muted small">{{ $t('ai.shortcuts.culture_desc') }}</div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="message-list">
          <div v-for="(msg, index) in messages" :key="index" class="message-row" :class="msg.role">
            <div class="avatar">
              <img v-if="msg.role === 'user'" :src="userStore.userInfo.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=User'">
              <div v-else class="ai-avatar"><i class="bi bi-stars"></i></div>
            </div>
            <div class="bubble-container">
              <div class="sender-name">{{ msg.role === 'user' ? 'You' : 'YanHe AI' }}</div>
              
              <div class="bubble">
                <span v-if="msg.typing" class="typing-cursor">█</span>
                <div v-else v-html="renderMarkdown(msg.content)"></div>
              </div>

              <div v-if="msg.role === 'ai' && !msg.typing" class="action-bar">
                <button class="btn-action" @click="copyText(msg.content)"><i class="bi bi-clipboard"></i> {{ $t('ai.copy') }}</button>
                <button class="btn-action"><i class="bi bi-hand-thumbs-up"></i></button>
                <button class="btn-action"><i class="bi bi-arrow-clockwise"></i> {{ $t('ai.retry') }}</button>
              </div>
            </div>
          </div>
          
          <div v-if="isThinking" class="message-row ai">
            <div class="avatar"><div class="ai-avatar"><i class="bi bi-stars"></i></div></div>
            <div class="bubble-container">
              <div class="sender-name">YanHe AI</div>
              <div class="bubble thinking">
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <footer class="chat-footer">
        <div class="input-wrapper">
          <textarea 
            v-model="inputText" 
            rows="1" 
            :placeholder="$t('ai.input_placeholder')"
            @keydown.enter.prevent="handleEnter"
            ref="inputRef"
          ></textarea>
          <button class="btn-send" :disabled="!inputText.trim() || isThinking" @click="sendMessage">
            <i class="bi bi-arrow-up"></i>
          </button>
        </div>
        <div class="footer-tip">
          {{ $t('ai.disclaimer') }}
        </div>
      </footer>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive, nextTick, onMounted } from 'vue'
import { useUserStore } from '@/store/user'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'

const { t } = useI18n()
const userStore = useUserStore()
const chatBox = ref(null)
const inputRef = ref(null)
const inputText = ref('')
const isThinking = ref(false)

// 模型列表 (desc 仅用于 ID 映射，实际显示使用 $t)
const models = [
  { id: 'pro', name: 'YanHe-Pro 4.0' },
  { id: 'fast', name: 'YanHe-Fast' },
  { id: 'creative', name: 'YanHe-Creative' }
]
const currentModel = ref(models[0])

const messages = ref([])

// [Database] 这里本应从后端 API 获取回复，这里使用 Mock
const mockResponses = {
  'default': t('ai.mock.default'),
  'trans': t('ai.mock.trans'),
  'polish': t('ai.mock.polish')
}

// 发送消息逻辑
const sendMessage = async () => {
  const text = inputText.value.trim()
  if (!text || isThinking.value) return

  // 1. 用户消息上屏
  messages.value.push({ role: 'user', content: text })
  inputText.value = ''
  scrollToBottom()

  // 2. AI 思考中
  isThinking.value = true
  
  try {
    // -----------------------------------------------------------
    // [位置标识] 调用 LLM 接口 (如 OpenAI / 文心一言)
    // const res = await axios.post('/api/ai/chat', { prompt: text, model: currentModel.value.id })
    // const replyText = res.data.content
    // -----------------------------------------------------------

    // 模拟网络延迟
    setTimeout(() => {
      isThinking.value = false
      
      // 简单根据关键词匹配 Mock 回复
      let replyText = mockResponses['default']
      if (text.includes('翻译') || text.includes('Translate')) replyText = mockResponses['trans']
      if (text.includes('润色') || text.includes('Polish')) replyText = mockResponses['polish']

      // 4. 流式输出效果
      streamOutput(replyText)
    }, 1500)
  } catch (error) {
    isThinking.value = false
    ElMessage.error(t('ai.error_msg'))
  }
}

// 模拟流式输出
const streamOutput = async (fullText) => {
  const msgIndex = messages.value.push({ role: 'ai', content: '', typing: true }) - 1
  const chars = fullText.split('')
  
  for (let i = 0; i < chars.length; i++) {
    await new Promise(r => setTimeout(r, 30)) // 打字速度
    messages.value[msgIndex].content += chars[i]
    scrollToBottom()
  }
  
  messages.value[msgIndex].typing = false
}

const handleEnter = (e) => {
  if (e.shiftKey) return // 换行
  sendMessage()
}

const sendShortcut = (text) => {
  inputText.value = text
  inputRef.value.focus()
}

const newChat = () => {
  // [Database] 这里可以调用接口保存当前对话
  messages.value = []
}

const clearMessages = () => {
  messages.value = []
  ElMessage.success(t('ai.cleared'))
}

const copyText = (text) => {
  navigator.clipboard.writeText(text)
  ElMessage.success(t('ai.copied'))
}

const scrollToBottom = () => {
  nextTick(() => {
    if (chatBox.value) chatBox.value.scrollTop = chatBox.value.scrollHeight
  })
}

// 简单的 Markdown 渲染
const renderMarkdown = (text) => {
  if (!text) return ''
  return text
    .replace(/\n/g, '<br>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
}
</script>

<style scoped lang="scss">
$primary: #004aad;
$sidebar-bg: #171717;
$chat-bg: #ffffff;

.ai-page {
  display: flex;
  height: 100vh;
  background: $chat-bg;
  font-family: -apple-system, "PingFang SC", sans-serif;
}

/* 左侧边栏 */
.sidebar {
  width: 260px;
  background: $sidebar-bg;
  color: #ececec;
  flex-shrink: 0;
}
.history-list { padding: 10px; }
.history-label { font-size: 12px; color: #888; margin: 15px 10px 5px; font-weight: bold; }
.history-item {
  padding: 10px 12px; margin-bottom: 5px; border-radius: 8px; cursor: pointer; font-size: 14px;
  color: #ccc; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; transition: 0.2s;
  &:hover { background: rgba(255,255,255,0.1); color: #fff; }
  &.active { background: rgba(255,255,255,0.1); color: #fff; }
  i { margin-right: 8px; opacity: 0.7; }
}

/* 右侧主区域 */
.main-chat { flex: 1; position: relative; background: #fff; }

/* 头部 */
.chat-header {
  height: 60px; padding: 0 20px; border-bottom: 1px solid #f0f0f0;
  display: flex; align-items: center; justify-content: space-between;
}

/* 空状态 */
.empty-state {
  max-width: 800px; margin: 60px auto 0; text-align: center;
  .logo-box { width: 80px; height: 80px; background: #f0f7ff; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; }
  .shortcut-grid {
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-top: 40px;
    @media(max-width: 768px) { grid-template-columns: 1fr; }
  }
  .shortcut-card {
    border: 1px solid #eee; border-radius: 12px; padding: 15px; text-align: left;
    display: flex; align-items: center; gap: 15px; cursor: pointer; transition: 0.2s;
    &:hover { background: #f8faff; border-color: $primary; }
  }
  .icon-box { width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px; flex-shrink: 0; }
  .bg-blue { background: #007bff; } .bg-purple { background: #6f42c1; }
  .bg-green { background: #198754; } .bg-orange { background: #fd7e14; }
}

/* 消息列表 */
.message-list { max-width: 800px; margin: 0 auto; padding-bottom: 20px; }
.message-row {
  display: flex; gap: 15px; margin-bottom: 30px;
  &.user { flex-direction: row-reverse; }
  .avatar img { width: 36px; height: 36px; border-radius: 4px; }
  .ai-avatar { width: 36px; height: 36px; border-radius: 4px; background: linear-gradient(135deg, $primary, #0078ff); color: #fff; display: flex; align-items: center; justify-content: center; }
}
.bubble-container { max-width: 85%; }
.sender-name { font-size: 12px; color: #999; margin-bottom: 4px; display: none; } /* 类似 ChatGPT 不显示名字 */
.bubble {
  font-size: 16px; line-height: 1.6; color: #333;
  &.thinking span {
    display: inline-block; width: 6px; height: 6px; background: #ccc; border-radius: 50%; margin: 0 2px;
    animation: blink 1.4s infinite both;
  }
  &.thinking span:nth-child(2) { animation-delay: 0.2s; }
  &.thinking span:nth-child(3) { animation-delay: 0.4s; }
}
.message-row.user .bubble {
  background: #f0f2f5; padding: 10px 15px; border-radius: 12px;
}

/* AI 底部操作栏 */
.action-bar { display: flex; gap: 10px; margin-top: 8px; opacity: 0; transition: 0.2s; }
.message-row.ai:hover .action-bar { opacity: 1; }
.btn-action { border: none; background: transparent; font-size: 12px; color: #999; cursor: pointer; &:hover { color: $primary; } }

/* 输入框 */
.chat-footer {
  padding: 20px;
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, #fff 20%);
}
.input-wrapper {
  max-width: 800px; margin: 0 auto; position: relative;
  background: #f4f4f4; border-radius: 16px; padding: 10px 15px; border: 1px solid transparent;
  transition: 0.2s;
  &:focus-within { background: #fff; border-color: #ddd; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
  textarea {
    width: 100%; border: none; background: transparent; outline: none; resize: none;
    max-height: 200px; padding-right: 40px; font-size: 16px;
  }
  .btn-send {
    position: absolute; bottom: 8px; right: 10px; width: 32px; height: 32px;
    background: $primary; color: #fff; border: none; border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    transition: 0.2s;
    &:disabled { background: #ccc; cursor: not-allowed; }
  }
}
.footer-tip { text-align: center; font-size: 11px; color: #aaa; margin-top: 8px; }

/* 动画 */
@keyframes blink { 0%, 80%, 100% { opacity: 0; } 40% { opacity: 1; } }
.typing-cursor { display: inline-block; width: 8px; height: 16px; background: #333; animation: blink 1s step-end infinite; vertical-align: middle; }
</style>