<template>
  <div class="ai-debate-page">
    
    <div class="debate-header">
      <button class="back-btn" @click="$router.back()"><i class="bi bi-chevron-left"></i> {{ $t('debate.header.end_chat') }}</button>
      <div class="debate-topic">
        <span class="label">{{ $t('debate.header.topic_label') }}</span>
        <span class="val">{{ currentTopicName }}</span>
      </div>
      <div class="ai-status">
        <span class="dot"></span> {{ $t('debate.header.status_online') }}
      </div>
    </div>

    <div class="debate-body">
      <div class="chat-container" ref="chatRef">
        <div class="msg-row ai">
          <div class="avatar master-avatar">
            <img src="https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Master">
          </div>
          <div class="bubble">
            <p>
              {{ $t('debate.chat.welcome_prefix') }} 
              <strong>{{ currentTopicName }}</strong> 
              {{ $t('debate.chat.welcome_suffix') }}
            </p>
            <p>{{ $t('debate.chat.welcome_invite') }}</p>
          </div>
        </div>

        <div v-for="msg in messages" :key="msg.id" class="msg-row" :class="msg.role">
          <div class="avatar" v-if="msg.role === 'ai'">
            <img src="https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Master">
          </div>
          <div class="avatar user" v-else>
            <img :src="userStore.userInfo.avatar">
          </div>
          <div class="bubble">
            {{ msg.text }}
          </div>
        </div>

        <div v-if="loading" class="msg-row ai">
          <div class="avatar"><img src="https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Master"></div>
          <div class="bubble typing">{{ $t('debate.chat.thinking') }}</div>
        </div>
      </div>
    </div>

    <div class="debate-footer">
      <div class="input-wrapper">
        <input v-model="input" :placeholder="$t('debate.footer.input_placeholder')" @keyup.enter="send">
        <button class="send-btn" @click="send" :disabled="!input.trim()">{{ $t('debate.footer.send_btn') }}</button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/store/user'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()
const userStore = useUserStore()
const input = ref('')
const loading = ref(false)
const chatRef = ref(null)
const messages = ref([])

// 课题映射 (Key 对应语言包)
const currentTopicName = computed(() => {
  const key = route.query.topic || 'general'
  // 如果语言包里没有这个 key，回退到 general
  return t(`debate.topics.${key}`)
})

const send = async () => {
  const text = input.value.trim()
  if (!text) return

  // 1. 用户消息上屏
  const userMsg = { id: Date.now(), role: 'user', text }
  messages.value.push(userMsg)
  input.value = ''
  scrollToBottom()
  
  // -----------------------------------------------------------
  // [Database] 保存用户消息到数据库
  // await axios.post('/api/debate/log', { topic: route.query.topic, msg: text, role: 'user' })
  // -----------------------------------------------------------

  loading.value = true

  try {
    // -----------------------------------------------------------
    // [API] 调用 AI 模型接口 (数字夫子模型)
    // const res = await axios.post('/api/ai/master_chat', { 
    //   prompt: text, 
    //   mode: 'debate',
    //   topic: route.query.topic 
    // })
    // const replyText = res.data.reply
    // -----------------------------------------------------------

    // 模拟回复延迟
    setTimeout(() => {
      loading.value = false
      
      // 模拟生成的回复 (支持简单的动态插入)
      const replyText = `${t('debate.chat.ai_reply_prefix')} “${text.substring(0, 10)}...” ${t('debate.chat.ai_reply_body')}`
      
      const aiMsg = { id: Date.now() + 1, role: 'ai', text: replyText }
      messages.value.push(aiMsg)
      
      // [Database] 保存 AI 回复到数据库
      // await axios.post('/api/debate/log', { topic: route.query.topic, msg: replyText, role: 'ai' })
      
      scrollToBottom()
    }, 2000)

  } catch (error) {
    loading.value = false
    console.error('AI Error', error)
  }
}

const scrollToBottom = () => {
  nextTick(() => {
    if (chatRef.value) chatRef.value.scrollTop = chatRef.value.scrollHeight
  })
}
</script>

<style scoped lang="scss">
$primary: #004aad;
$bg-dark: #0f172a;

.ai-debate-page {
  height: 100vh; display: flex; flex-direction: column; background: #f0f2f5;
  font-family: 'PingFang SC', sans-serif;
}

.debate-header {
  height: 60px; background: $bg-dark; color: #fff; display: flex; align-items: center; justify-content: space-between; padding: 0 20px;
  .back-btn { background: none; border: none; color: #fff; font-size: 14px; cursor: pointer; display: flex; align-items: center; gap: 5px; opacity: 0.8; &:hover { opacity: 1; } }
  .debate-topic { font-size: 16px; font-weight: bold; .val { color: #ffd700; margin-left: 5px; } }
  .ai-status { font-size: 12px; color: #4ade80; display: flex; align-items: center; gap: 5px; .dot { width: 8px; height: 8px; background: #4ade80; border-radius: 50%; display: inline-block; } }
}

.debate-body { flex: 1; overflow: hidden; display: flex; flex-direction: column; }
.chat-container { flex: 1; overflow-y: auto; padding: 20px; }

.msg-row {
  display: flex; gap: 15px; margin-bottom: 20px;
  &.user { flex-direction: row-reverse; }
  
  .avatar {
    width: 44px; height: 44px; border-radius: 50%; overflow: hidden; background: #fff; flex-shrink: 0; border: 2px solid #fff;
    img { width: 100%; height: 100%; }
    &.master-avatar { border-color: $primary; box-shadow: 0 0 10px rgba(0, 74, 173, 0.3); }
  }
  
  .bubble {
    background: #fff; padding: 15px; border-radius: 12px; border-top-left-radius: 2px;
    font-size: 15px; line-height: 1.6; max-width: 80%; box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    &.typing { color: #999; font-style: italic; }
  }
  &.user .bubble { background: $primary; color: #fff; border-radius: 12px; border-top-right-radius: 2px; }
}

.debate-footer {
  padding: 15px 20px; background: #fff; border-top: 1px solid #eee;
  .input-wrapper {
    display: flex; gap: 10px; background: #f5f5f5; padding: 5px; border-radius: 30px;
    input { flex: 1; background: transparent; border: none; padding: 10px 20px; outline: none; font-size: 15px; }
    .send-btn {
      width: 44px; height: 44px; border-radius: 50%; background: $bg-dark; color: #ffd700; border: none; font-weight: bold; cursor: pointer; transition: 0.2s;
      &:disabled { opacity: 0.5; cursor: not-allowed; }
      &:not(:disabled):hover { transform: scale(1.1); }
    }
  }
}
</style>