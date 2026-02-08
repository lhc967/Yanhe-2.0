<template>
  <div class="story-ai-page">
    
    <div class="ai-header">
      <button class="close-btn" @click="$router.back()"><i class="bi bi-x-lg"></i></button>
      <div class="ai-title">{{ $t('story_ai.title') }}</div>
    </div>

    <div class="chat-scroll" ref="chatRef">
      <div class="chat-msg ai">
        <div class="avatar"><i class="bi bi-journal-text"></i></div>
        <div class="bubble">
          <p>{{ $t('story_ai.welcome.greeting') }}</p>
          <p>{{ $t('story_ai.welcome.desc') }}</p>
        </div>
      </div>

      <div v-for="msg in messages" :key="msg.id" class="chat-msg" :class="msg.role">
        <div class="avatar" v-if="msg.role === 'ai'"><i class="bi bi-journal-text"></i></div>
        
        <div v-if="msg.isCard" class="result-card">
          <div class="card-header">
            <span class="card-tag">{{ $t('story_ai.card_tag') }}</span>
            <button class="copy-btn" @click="copyText(msg.text)"><i class="bi bi-files"></i></button>
          </div>
          <div class="card-content">{{ msg.text }}</div>
        </div>
        
        <div v-else class="bubble">{{ msg.text }}</div>
      </div>

      <div v-if="loading" class="chat-msg ai">
        <div class="avatar"><i class="bi bi-journal-text"></i></div>
        <div class="bubble loading">
          <span class="dot"></span><span class="dot"></span><span class="dot"></span>
        </div>
      </div>
    </div>

    <div class="ai-footer">
      <div class="quick-actions" v-if="messages.length < 3">
        <button @click="quickAsk($t('story_ai.actions.polish_prompt'))">🖋️ {{ $t('story_ai.actions.polish') }}</button>
        <button @click="quickAsk($t('story_ai.actions.fest_prompt'))">🌙 {{ $t('story_ai.actions.fest') }}</button>
        <button @click="quickAsk($t('story_ai.actions.culture_prompt'))">🏮 {{ $t('story_ai.actions.culture') }}</button>
      </div>

      <div class="input-box">
        <input 
          v-model="input" 
          :placeholder="$t('story_ai.input_ph')" 
          @keyup.enter="send"
        >
        <button class="send-btn" @click="send" :disabled="!input.trim()">
          <i class="bi bi-arrow-up"></i>
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'

const { t, locale } = useI18n()
const input = ref('')
const loading = ref(false)
const chatRef = ref(null)
const messages = ref([])

const quickAsk = (text) => {
  input.value = text
  document.querySelector('.input-box input').focus()
}

const send = () => {
  const text = input.value.trim()
  if (!text) return

  messages.value.push({ id: Date.now(), role: 'user', text })
  input.value = ''
  scrollToBottom()

  // [API] 调用 LLM
  // axios.post('/api/ai/story', { prompt: text })

  loading.value = true
  setTimeout(() => {
    loading.value = false
    
    // 模拟不同语言的回复
    const isCreative = text.includes('文案') || text.includes('Copy') || text.includes('Polish')
    let replyText = ''

    if (locale.value === 'en') {
      replyText = isCreative 
        ? "[Spring Garden Stroll]\n\nSpring breeze brushes the face, willows sway gently. Walking in the garden in Hanfu feels like traveling back a thousand years."
        : "Received. I am searching for relevant information..."
    } else {
      replyText = isCreative
        ? "【春日游园】\n\n春风拂面，杨柳依依。穿上汉服漫步在园林之中，仿佛穿越了千年时光。\n\nSpring breeze brushes the face, willows sway gently."
        : "收到，小童这就为您查找相关资料..."
    }
    
    messages.value.push({
      id: Date.now() + 1,
      role: 'ai',
      isCard: isCreative,
      text: replyText
    })
    scrollToBottom()
  }, 1500)
}

const scrollToBottom = () => {
  nextTick(() => {
    if (chatRef.value) {
      chatRef.value.scrollTop = chatRef.value.scrollHeight
    }
  })
}

const copyText = (text) => {
  navigator.clipboard.writeText(text)
  ElMessage.success(t('story_ai.copied'))
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Noto+Serif+SC:wght@400;700&display=swap');

$ink-black: #2c2c2c;
$paper-color: #f4f0e6;
$seal-red: #b52a1c;

.story-ai-page {
  background-color: $paper-color;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dcbba3' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  height: 100vh;
  display: flex; flex-direction: column;
  font-family: 'Noto Serif SC', serif;
}

/* 顶部 */
.ai-header {
  height: 60px; display: flex; align-items: center; justify-content: center;
  border-bottom: 1px solid rgba(0,0,0,0.05); position: relative;
  background: rgba(244, 240, 230, 0.95);
  .close-btn { position: absolute; left: 20px; background: none; border: none; font-size: 20px; cursor: pointer; color: $ink-black; }
  .ai-title { font-family: 'Ma Shan Zheng'; font-size: 20px; color: $ink-black; }
}

/* 聊天区 */
.chat-scroll { flex: 1; overflow-y: auto; padding: 20px; display: flex; flex-direction: column; gap: 20px; }

.chat-msg {
  display: flex; gap: 10px; align-items: flex-start;
  &.user { flex-direction: row-reverse; }
  
  .avatar {
    width: 36px; height: 36px; background: $ink-black; color: #fff;
    border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px;
  }
  
  .bubble {
    background: #fff; padding: 12px 16px; border-radius: 12px; max-width: 80%;
    font-size: 14px; line-height: 1.6; color: #333;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    &.loading { display: flex; gap: 4px; padding: 16px; }
  }
  
  &.user .bubble { background: $ink-black; color: #fff; }
}

/* 结果卡片 (锦囊) */
.result-card {
  background: #fff; border: 1px solid $ink-black; border-radius: 4px;
  padding: 15px; max-width: 85%; position: relative;
  box-shadow: 5px 5px 0 rgba(44, 44, 44, 0.1);
  
  .card-header {
    display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;
    border-bottom: 1px dashed #ccc; padding-bottom: 8px;
    .card-tag { font-size: 12px; color: $seal-red; font-weight: bold; border: 1px solid $seal-red; padding: 1px 6px; border-radius: 4px; }
    .copy-btn { background: none; border: none; cursor: pointer; color: #999; &:hover { color: $ink-black; } }
  }
  .card-content { white-space: pre-wrap; font-size: 14px; line-height: 1.8; color: #444; }
}

/* 底部 */
.ai-footer { padding: 20px; background: rgba(244, 240, 230, 0.95); }

.quick-actions {
  display: flex; gap: 10px; overflow-x: auto; margin-bottom: 15px; padding-bottom: 5px;
  &::-webkit-scrollbar { display: none; }
  button {
    white-space: nowrap; background: #fff; border: 1px solid #ccc; padding: 6px 12px;
    border-radius: 20px; font-size: 12px; color: #666; cursor: pointer; transition: 0.2s;
    &:hover { border-color: $ink-black; color: $ink-black; }
  }
}

.input-box {
  display: flex; gap: 10px; background: #fff; padding: 8px; border-radius: 30px; border: 1px solid #ddd;
  input { flex: 1; border: none; outline: none; padding-left: 10px; font-family: 'Noto Serif SC', serif; background: transparent; }
  .send-btn {
    width: 36px; height: 36px; border-radius: 50%; background: $ink-black; color: #fff;
    border: none; display: flex; align-items: center; justify-content: center; cursor: pointer;
    &:disabled { opacity: 0.5; cursor: not-allowed; }
  }
}

.dot { width: 6px; height: 6px; background: #999; border-radius: 50%; animation: bounce 1.4s infinite ease-in-out both; }
.dot:nth-child(1) { animation-delay: -0.32s; }
.dot:nth-child(2) { animation-delay: -0.16s; }
@keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }
</style>