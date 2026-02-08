<template>
  <div class="chat-page">
    
    <nav class="navbar fixed-top navbar-custom px-4">
      <div class="container-fluid">
        <a class="navbar-brand d-flex align-items-center" @click.prevent="$router.push('/portal')" href="#">
          <i class="bi bi-chevron-left text-dark me-2"></i> {{ $t('chat.nav_back') }}
        </a>
        <div class="fw-bold">{{ $t('chat.title') }}</div>
        <div style="width: 80px"></div> </div>
    </nav>

    <div class="container chat-container">
      <div class="card border-0 shadow-sm overflow-hidden chat-card">
        <div class="row g-0 h-100">
          
          <div class="col-lg-3 col-md-4 border-end contact-sidebar">
            <div class="p-3 border-bottom bg-light">
              <div class="input-group">
                <span class="input-group-text bg-white border-end-0"><i class="bi bi-search text-muted"></i></span>
                <input type="text" class="form-control border-start-0 ps-0" :placeholder="$t('chat.search_placeholder')">
              </div>
            </div>
            
            <div class="contact-list custom-scrollbar">
              <div 
                v-for="contact in contacts" 
                :key="contact.id"
                class="contact-item"
                :class="{ active: currentContact.id === contact.id }"
                @click="selectContact(contact)"
              >
                <div class="position-relative">
                  <img :src="contact.avatar" class="rounded-circle contact-avatar">
                  <span v-if="contact.unread > 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-light">
                    {{ contact.unread }}
                  </span>
                </div>
                <div class="contact-info">
                  <div class="d-flex justify-content-between align-items-center">
                    <h6 class="mb-0 fw-bold text-truncate">{{ contact.name }}</h6>
                    <small class="text-muted" style="font-size: 11px;">{{ contact.time }}</small>
                  </div>
                  <p class="mb-0 text-muted small text-truncate">{{ contact.lastMsg }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-9 col-md-8 d-flex flex-column h-100">
            
            <div class="chat-header p-3 border-bottom d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center gap-3">
                <img :src="currentContact.avatar" class="rounded-circle" width="40" height="40">
                <div>
                  <h6 class="mb-0 fw-bold">{{ currentContact.name }}</h6>
                  <div class="d-flex align-items-center gap-1" v-if="currentContact.isTyping">
                    <div class="typing-indicator">
                      <span></span><span></span><span></span>
                    </div>
                    <span class="text-primary small">{{ $t('chat.typing') }}</span>
                  </div>
                  <small v-else class="text-muted">{{ currentContact.role }}</small>
                </div>
              </div>
              <div class="dropdown">
                <button class="btn btn-light btn-sm rounded-circle" type="button" data-bs-toggle="dropdown">
                  <i class="bi bi-three-dots-vertical"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><a class="dropdown-item" href="#">{{ $t('chat.menu_profile') }}</a></li>
                  <li><a class="dropdown-item text-danger" href="#">{{ $t('chat.menu_report') }}</a></li>
                </ul>
              </div>
            </div>

            <div class="message-area flex-grow-1 p-4 custom-scrollbar" ref="messageBox">
              <div v-for="(msg, index) in messages" :key="index">
                
                <div v-if="msg.showTime" class="text-center my-3">
                  <span class="badge bg-light text-secondary fw-normal">{{ msg.time }}</span>
                </div>

                <div class="message-row" :class="{ 'me': msg.isMe }">
                  <img :src="msg.isMe ? userStore.userInfo.avatar : currentContact.avatar" class="msg-avatar rounded-circle">
                  <div class="msg-content">
                    <div class="msg-bubble" :class="msg.isMe ? 'bg-primary text-white' : 'bg-light text-dark'">
                      {{ msg.text }}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div class="input-area p-3 border-top">
              <div class="d-flex gap-2 align-items-end">
                <button class="btn btn-light rounded-circle text-muted"><i class="bi bi-paperclip"></i></button>
                <button class="btn btn-light rounded-circle text-muted"><i class="bi bi-emoji-smile"></i></button>
                <div class="flex-grow-1 position-relative">
                  <textarea 
                    v-model="inputText" 
                    @keyup.enter.prevent="sendMessage"
                    class="form-control border-0 bg-light" 
                    rows="1" 
                    style="resize: none; border-radius: 20px; padding: 10px 15px;"
                    :placeholder="$t('chat.input_placeholder')"
                  ></textarea>
                </div>
                <button class="btn btn-primary rounded-circle shadow-sm" style="width: 45px; height: 45px;" @click="sendMessage">
                  <i class="bi bi-send-fill"></i>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/store/user'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const route = useRoute()
const userStore = useUserStore()
const messageBox = ref(null)
const inputText = ref('')

const contacts = ref([])
const currentContact = ref({})
const messages = ref([])

// [Database] 模拟加载联系人和消息 (根据语言切换内容)
const loadMockData = () => {
  const isEn = locale.value === 'en'

  contacts.value = [
    { id: 1, name: isEn ? 'AllBright Law Firm' : '锦天城律师事务所', role: isEn ? 'Employer · Verified' : '雇主 · 企业认证', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Law', lastMsg: isEn ? 'Are you familiar with Contract Law?' : '请问您对合同法熟悉吗？', time: '10:30', unread: 2, isTyping: false },
    { id: 2, name: isEn ? 'YanHe Service' : '言禾官方客服', role: isEn ? 'Official Support' : '官方客服', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=YanHe', lastMsg: isEn ? 'Your verification is approved.' : '您的实名认证已通过审核。', time: isEn ? 'Yday' : '昨天', unread: 0, isTyping: false },
    { id: 3, name: isEn ? 'Lily (Alumni)' : '李同学', role: isEn ? 'Alumni · German Dept' : '校友 · 德语系', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lily', lastMsg: isEn ? 'Thanks senior!' : '好的，谢谢学长！', time: isEn ? 'Mon' : '周一', unread: 0, isTyping: false }
  ]

  // 初始化当前联系人
  const targetId = currentContact.value.id || contacts.value[0].id
  currentContact.value = contacts.value.find(c => c.id === targetId) || contacts.value[0]

  // 初始化消息 (针对第一个联系人)
  if (currentContact.value.id === 1) {
    messages.value = [
      { id: 1, isMe: false, text: isEn ? 'Hello, I am the HR from AllBright.' : '你好，我是锦天城律所的HR。', time: '10:28', showTime: true },
      { id: 2, isMe: false, text: isEn ? 'I saw your resume, your legal English background fits our needs.' : '我看过你的简历，你的法律英语背景很符合我们的要求。', time: '10:29', showTime: false },
      { id: 3, isMe: true, text: isEn ? 'Hi! Thank you. I hold a CATTI Level 2 certificate and minored in International Business Law.' : '您好！非常感谢您的认可。我有 CATTI 二级笔译证书，并且辅修过国际商法。', time: '10:30', showTime: false },
      { id: 4, isMe: false, text: isEn ? 'Are you familiar with Contract Law?' : '请问您对合同法熟悉吗？', time: '10:30', showTime: false }
    ]
  } else {
    messages.value = []
  }
}

watch(locale, () => {
  loadMockData()
})

const selectContact = (contact) => {
  currentContact.value = contact
  contact.unread = 0 
  
  // [API] 获取历史消息
  // const res = await axios.get(`/api/chat/history/${contact.id}`)
  // messages.value = res.data
  
  // 模拟切换消息清空/加载
  if (contact.id !== 1) messages.value = [] // 仅演示第一个有数据
  
  scrollToBottom()
}

const scrollToBottom = () => {
  nextTick(() => {
    if (messageBox.value) {
      messageBox.value.scrollTop = messageBox.value.scrollHeight
    }
  })
}

const sendMessage = () => {
  if (!inputText.value.trim()) return
  
  // [API] 发送消息
  // axios.post('/api/chat/send', { to: currentContact.value.id, text: inputText.value })

  messages.value.push({
    id: Date.now(),
    isMe: true,
    text: inputText.value,
    time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
    showTime: false
  })
  
  const sentText = inputText.value
  inputText.value = ''
  scrollToBottom()

  // 模拟回复
  currentContact.value.isTyping = true
  setTimeout(() => {
    currentContact.value.isTyping = false
    const reply = locale.value === 'en' 
      ? `Received. Regarding "${sentText}", let's discuss details.` 
      : `收到，关于"${sentText}"这部分细节，我们可以再详细沟通一下。`
      
    messages.value.push({
      id: Date.now() + 1,
      isMe: false,
      text: reply,
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      showTime: false
    })
    scrollToBottom()
  }, 2000)
}

onMounted(() => {
  loadMockData()
  scrollToBottom()
  if (route.query.targetId) {
    const target = contacts.value.find(c => c.id == route.query.targetId)
    if (target) selectContact(target)
  }
})
</script>

<style scoped lang="scss">
$primary: #004aad;
$bg-light: #f8faff;

.chat-page {
  background: $bg-light;
  padding-top: 70px;
  height: 100vh;
  display: flex; flex-direction: column;
}

.navbar-custom { background: #fff; border-bottom: 1px solid #eee; height: 70px; }

/* 聊天主容器 */
.chat-container {
  flex: 1; padding: 20px 0; height: calc(100vh - 70px);
  display: flex; flex-direction: column;
}

.chat-card {
  height: 100%;
  background: #fff;
  border-radius: 12px;
}

/* 左侧联系人 */
.contact-sidebar { background: #fff; height: 100%; display: flex; flex-direction: column; }
.contact-list { flex: 1; overflow-y: auto; }
.contact-item {
  display: flex; gap: 12px; padding: 15px 20px; cursor: pointer; transition: 0.2s; border-bottom: 1px solid #f9f9f9;
  &:hover { background: #f8f9fa; }
  &.active { background: rgba($primary, 0.08); border-left: 4px solid $primary; }
}
.contact-avatar { width: 45px; height: 45px; object-fit: cover; }
.contact-info { flex: 1; min-width: 0; } // min-width:0 for text-truncate

/* 右侧聊天区 */
.chat-header { height: 70px; background: #fff; }
.message-area { background: #f4f6f9; }

/* 消息气泡 */
.message-row {
  display: flex; gap: 10px; margin-bottom: 20px; align-items: flex-end;
  &.me { flex-direction: row-reverse; }
}
.msg-avatar { width: 36px; height: 36px; object-fit: cover; flex-shrink: 0; }
.msg-bubble {
  max-width: 70%; padding: 10px 16px; border-radius: 12px; position: relative; font-size: 15px; line-height: 1.5;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}
/* 气泡小尖角 */
.message-row:not(.me) .msg-bubble { border-bottom-left-radius: 2px; }
.message-row.me .msg-bubble { border-bottom-right-radius: 2px; }

/* 正在输入动画 */
.typing-indicator {
  display: inline-flex; align-items: center; gap: 2px;
  span {
    width: 4px; height: 4px; background: $primary; border-radius: 50%;
    animation: bounce 1.4s infinite ease-in-out both;
  }
  span:nth-child(1) { animation-delay: -0.32s; }
  span:nth-child(2) { animation-delay: -0.16s; }
}
@keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }

/* 滚动条美化 */
.custom-scrollbar::-webkit-scrollbar { width: 6px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #ccc; border-radius: 3px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
</style>