<template>
  <div class="course-player-page">
    
    <nav class="navbar navbar-expand-lg fixed-top custom-navbar">
      <div class="container-fluid px-4">
        <a class="navbar-brand text-white fw-bold" @click.prevent="$router.push('/portal')" href="#">{{ $t('brand') }}</a>
        <div class="d-flex align-items-center ms-auto gap-3">
          <button class="btn btn-sm btn-warning fw-bold border-0" @click="userStore.toggleDemo()">
            <i class="bi bi-magic"></i> {{ userStore.isDemo ? $t('player.nav.demo_exit') : $t('player.nav.demo_mode') }}
          </button>
          
          <button @click="$router.push('/education')" class="btn btn-outline-light btn-sm rounded-pill px-3">
            <i class="bi bi-arrow-left"></i> {{ $t('player.nav.back') }}
          </button>
          <img :src="userStore.userInfo.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=LiHua'" class="nav-avatar border border-white">
        </div>
      </div>
    </nav>

    <div class="container py-4 main-container" v-if="loading">
      <el-skeleton :rows="15" animated />
    </div>

    <div class="container py-4 main-container" v-else>
      <div class="row g-4">
        <div class="col-lg-8">
          
          <div class="video-container shadow-sm" id="videoArea">
            
            <div v-if="currentChapter.isPaid && !currentChapter.unlocked" class="lock-overlay d-flex">
               <i class="bi bi-lock-fill" style="font-size: 50px; margin-bottom: 15px;"></i>
               <h4 class="fw-bold">{{ $t('player.lock.title') }}</h4>
               <p class="text-white-50 mb-4">{{ $t('player.lock.desc') }}</p>
               <button class="btn btn-danger rounded-pill px-5 fw-bold" @click="handleUnlock">
                   {{ $t('player.lock.btn_unlock', { price: currentChapter.price }) }}
               </button>
               <button class="btn btn-link text-white small mt-2">{{ $t('player.lock.btn_trial') }}</button>
            </div>

            <div v-else class="player-wrapper">
              <video 
                ref="videoRef"
                class="real-video"
                :src="videoSrc" 
                controls 
                poster="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800"
                @timeupdate="handleTimeUpdate"
                @loadedmetadata="checkHistory"
              ></video>
              
              <div class="subtitle-layer" v-if="settings.showSubtitle">
                <p class="sub-cn" v-if="settings.subMode !== 'EN'">{{ currentSubtitle.cn }}</p>
                <p class="sub-en" v-if="settings.subMode !== 'CN'">{{ currentSubtitle.en }}</p>
              </div>

              <transition name="fade">
                <div class="resume-tip" v-if="showResumeTip" @click="jumpToHistory">
                  <i class="bi bi-clock-history"></i> {{ $t('player.resume_tip', { time: formatTime(historyTime) }) }}
                </div>
              </transition>
            </div>
          </div>

          <div class="card mt-3 border-0 shadow-sm tool-card">
            <div class="card-body d-flex align-items-center gap-2 py-2 flex-wrap">
              <span class="fw-bold small text-muted me-2"><i class="bi bi-tools"></i> {{ $t('player.tools.label') }}:</span>
              
              <div class="dropdown">
                <button class="btn btn-light btn-sm border dropdown-toggle" type="button" data-bs-toggle="dropdown">
                  {{ $t('player.tools.pinyin') }}: {{ pinyinChar || $t('player.tools.pinyin_ph') }}
                </button>
                <ul class="dropdown-menu p-2 shadow" style="min-width: 240px;">
                  <li class="mb-2 text-muted small px-2">{{ $t('player.tools.pinyin_tip') }}</li>
                  <div class="d-flex gap-1 flex-wrap px-2">
                    <button v-for="char in pinyinOptions" :key="char" 
                            class="btn btn-sm btn-outline-secondary p-1" style="width: 30px;"
                            @click="selectPinyin(char)">{{ char }}</button>
                  </div>
                </ul>
              </div>

              <button class="btn btn-light btn-sm border text-success" @click="showQuiz = true">
                <i class="bi bi-pencil-square"></i> {{ $t('player.tools.quiz') }}
              </button>

              <button class="btn btn-sm ms-auto" 
                      :class="isFav ? 'btn-danger text-white' : 'btn-outline-danger'"
                      @click="toggleFav">
                <i :class="isFav ? 'bi bi-heart-fill' : 'bi bi-heart'"></i> {{ isFav ? $t('player.tools.faved') : $t('player.tools.fav') }}
              </button>
            </div>
          </div>

          <div class="control-bar mt-3 p-3 bg-white rounded shadow-sm d-flex gap-3 align-items-center flex-wrap" 
               v-if="!currentChapter.isPaid || currentChapter.unlocked">
            
            <div class="dropdown">
              <button class="btn btn-light btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">
                {{ $t('player.ctrl.speed') }}: {{ settings.speed }}x
              </button>
              <ul class="dropdown-menu">
                <li v-for="rate in [0.5, 1.0, 1.25, 1.5, 2.0]" :key="rate">
                  <a class="dropdown-item" href="#" @click.prevent="changeSpeed(rate)">{{ rate }}x</a>
                </li>
              </ul>
            </div>

            <div class="btn-group btn-group-sm">
              <button class="btn" :class="settings.subMode==='CN' ? 'btn-primary' : 'btn-outline-primary'" @click="settings.subMode='CN'">{{ $t('player.ctrl.sub_cn') }}</button>
              <button class="btn" :class="settings.subMode==='EN' ? 'btn-primary' : 'btn-outline-primary'" @click="settings.subMode='EN'">{{ $t('player.ctrl.sub_en') }}</button>
              <button class="btn" :class="settings.subMode==='BOTH' ? 'btn-primary' : 'btn-outline-primary'" @click="settings.subMode='BOTH'">{{ $t('player.ctrl.sub_both') }}</button>
            </div>

            <div class="form-check form-switch ms-auto">
              <input class="form-check-input" type="checkbox" v-model="settings.showSubtitle" id="subSwitch">
              <label class="form-check-label small" for="subSwitch">{{ $t('player.ctrl.subtitle') }}</label>
            </div>
          </div>

          <div class="mt-4">
              <h2 class="fw-bold">{{ currentChapter.title }}</h2>
              <div class="d-flex gap-3 text-muted small mt-2">
                  <span><i class="bi bi-eye"></i> 1.2w {{ $t('player.meta.views') }}</span>
                  <span><i class="bi bi-star-fill text-warning"></i> 4.9</span>
                  <span><i class="bi bi-clock"></i> {{ currentChapter.duration }}</span>
              </div>
              <hr>
              <h5 class="fw-bold mt-4">{{ $t('player.meta.key_points') }}</h5>
              <div class="bg-light p-3 rounded small text-secondary">
                  <ul>
                      <li v-for="(point, idx) in chapterPoints" :key="idx">{{ point }}</li>
                  </ul>
              </div>
          </div>
        </div>

        <div class="col-lg-4">
            <div class="playlist-card">
                <div class="playlist-header">
                    <h5 class="fw-bold m-0">{{ $t('player.playlist.title') }}</h5>
                    <div class="video-tabs">
                        <span v-for="tab in ['all', 'grammar', 'scenario', 'culture']" 
                              :key="tab"
                              class="v-tab" 
                              :class="{ active: filterType === tab }" 
                              @click="filterType = tab">
                          {{ $t(`player.playlist.tabs.${tab}`) }}
                        </span>
                    </div>
                </div>

                <div class="chapter-list">
                    <div 
                      v-for="chapter in filteredChapters" 
                      :key="chapter.id"
                      class="chapter-item" 
                      :class="{ active: currentChapter.id === chapter.id, locked: chapter.isPaid && !chapter.unlocked }"
                      @click="switchChapter(chapter)"
                    >
                        <div>
                            <div class="small fw-bold mb-1 text-dark">{{ chapter.title }}</div>
                            <div class="text-muted" style="font-size: 11px;">
                                <i :class="currentChapter.id === chapter.id ? 'bi bi-play-fill text-primary' : 'bi bi-play-circle'"></i> 
                                {{ chapter.duration }}
                            </div>
                        </div>
                        <div class="text-end">
                            <span v-if="!chapter.isPaid" class="tag-free">{{ $t('player.tags.free') }}</span>
                            <span v-else-if="chapter.unlocked" class="tag-vip">{{ $t('player.tags.unlocked') }}</span>
                            <span v-else class="tag-paid"><i class="bi bi-lock-fill"></i> {{ $t('player.tags.paid') }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>

    <div class="ai-float-btn">
        <button class="btn btn-primary rounded-circle shadow-lg d-flex align-items-center justify-content-center"
                style="width: 60px; height: 60px; font-size: 24px;"
                @click="showChat = !showChat">
            <i class="bi bi-robot"></i>
        </button>
    </div>

    <transition name="slide-up">
      <div class="card shadow-lg ai-chat-box" v-show="showChat">
          <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center" style="border-radius: 16px 16px 0 0;">
              <span class="fw-bold"><i class="bi bi-robot me-2"></i>{{ $t('player.ai.title') }}</span>
              <button type="button" class="btn-close btn-close-white btn-sm" @click="showChat = false"></button>
          </div>
          <div class="card-body bg-light overflow-auto" ref="chatBody">
              <div class="d-flex align-items-start mb-3" v-for="(msg, i) in chatMessages" :key="i">
                  <div :class="msg.role === 'ai' ? 'bg-white text-dark' : 'bg-primary text-white ms-auto'" 
                       class="p-2 rounded shadow-sm small" style="max-width: 80%;">
                      {{ msg.text }}
                  </div>
              </div>
          </div>
          <div class="card-footer bg-white">
              <div class="input-group">
                  <input type="text" v-model="chatInput" @keyup.enter="sendMessage" class="form-control border-0 bg-light" :placeholder="$t('player.ai.input_ph')">
                  <button class="btn btn-link text-primary" @click="sendMessage"><i class="bi bi-send-fill"></i></button>
              </div>
          </div>
      </div>
    </transition>

    <el-dialog v-model="showQuiz" :title="$t('player.quiz.title')" width="90%" style="max-width:500px">
      <div v-for="(q, i) in quizList" :key="q.id" class="mb-4">
        <p class="fw-bold mb-2">{{ i+1 }}. {{ q.title }}</p>
        <div class="d-flex flex-column gap-2">
          <label v-for="opt in q.options" :key="opt.val" 
               class="p-2 border rounded cursor-pointer quiz-opt"
               :class="{ 
                 'bg-primary text-white': userAnswers[q.id] === opt.val,
                 'bg-danger text-white': quizResult && quizResult.wrongIds.includes(q.id.toString()) && userAnswers[q.id] === opt.val,
                 'bg-success text-white': quizResult && q.correct === opt.val
               }">
            <input type="radio" :name="'q'+q.id" :value="opt.val" v-model="userAnswers[q.id]" class="d-none">
            {{ opt.label }}
          </label>
        </div>
      </div>
      <template #footer>
        <div class="d-flex justify-content-between align-items-center">
          <span v-if="quizResult" class="fw-bold text-primary">{{ $t('player.quiz.score') }}: {{ quizResult.score }}</span>
          <button class="btn btn-primary" @click="submitQuiz" :disabled="!!quizResult">{{ $t('player.quiz.btn_submit') }}</button>
        </div>
      </template>
    </el-dialog>

  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router' 
import { useUserStore } from '@/store/user'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'

const { t, locale } = useI18n()
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const loading = ref(true)
const showChat = ref(false)
const showQuiz = ref(false)
const chatInput = ref('')
const filterType = ref('all')
const videoRef = ref(null)
const videoSrc = ref('https://media.w3.org/2010/05/sintel/trailer.mp4') 

const settings = reactive({ speed: 1.0, showSubtitle: true, subMode: 'BOTH' })
const showResumeTip = ref(false)
const historyTime = ref(0)
const isFav = ref(false)

const pinyinChar = ref('');
const pinyinOptions = ['ā', 'á', 'ǎ', 'à', 'ō', 'ó', 'ǒ', 'ò', 'ē', 'é', 'ě', 'è', 'ī', 'í', 'ǐ', 'ì'];

// 响应式数据 (需动态加载)
const chapters = ref([])
const currentChapter = ref({})
const chatMessages = ref([])
const quizList = ref([])
const chapterPoints = ref([])
const currentSubtitle = reactive({ cn: '', en: '' })
const userAnswers = ref({});
const quizResult = ref(null);

// [Database] 根据语言加载模拟数据
const loadMockData = () => {
  const isEn = locale.value === 'en'
  
  // 1. 章节
  chapters.value = [
    { id: 1, title: isEn ? "01. Intro: Negotiation Mindset" : "01. 导论：中国人的谈判思维", type: "grammar", isPaid: false, unlocked: true, duration: "15:00", price: 0 },
    { id: 2, title: isEn ? "02. Vocab: Quoting & Bargaining" : "02. 核心词汇：报价与还价", type: "grammar", isPaid: false, unlocked: true, duration: "22:30", price: 0 },
    { id: 3, title: isEn ? "03. Scenario: First Meeting" : "03. 情景模拟：初次见面寒暄", type: "scenario", isPaid: true, unlocked: false, duration: "10:45", price: 99 },
    { id: 4, title: isEn ? "04. Scenario: Toasting Etiquette" : "04. 情景模拟：酒桌上的博弈", type: "scenario", isPaid: true, unlocked: false, duration: "18:20", price: 99 },
    { id: 5, title: isEn ? "05. Culture: Mianzi (Face)" : "05. 文化：面子工程", type: "culture", isPaid: true, unlocked: false, duration: "12:00", price: 199 },
    { id: 6, title: isEn ? "06. Contract Analysis" : "06. 合同条款深度解析", type: "grammar", isPaid: true, unlocked: false, duration: "35:00", price: 199 }
  ]
  
  // 保持当前选中的章节 ID
  const currentId = currentChapter.value.id || 1
  currentChapter.value = chapters.value.find(c => c.id === currentId) || chapters.value[0]

  // 2. 重点
  chapterPoints.value = isEn 
    ? ['How to politely refuse alcohol?', 'Toasting order and phrasing', 'Application of "Giving Face" in business']
    : ['如何委婉地拒绝劝酒？ (Polite Refusal)', '敬酒的顺序与措辞 (Toasting Etiquette)', '“给面子”在商务谈判中的实际应用。']

  // 3. 字幕
  currentSubtitle.cn = '示例：商务谈判中的“给面子”非常重要。'
  currentSubtitle.en = 'Example: "Giving face" is crucial.'

  // 4. 测验
  quizList.value = [
    { 
      id: 1, 
      title: isEn ? 'What does "Giving Face" mean?' : '商务谈判中，"Giving Face" 指的是？', 
      correct: 'B', 
      options: isEn 
        ? [{val:'A', label:'Giving Money'}, {val:'B', label:'Respect/Honor'}, {val:'C', label:'Face to Face'}]
        : [{val:'A', label:'给钱'}, {val:'B', label:'给面子/尊重'}, {val:'C', label:'面对面'}]
    },
    { 
      id: 2, 
      title: isEn ? 'Which hand to use for business cards?' : '初次见面交换名片应该用哪只手？', 
      correct: 'A', 
      options: isEn
        ? [{val:'A', label:'Both Hands'}, {val:'B', label:'One Hand'}, {val:'C', label:'Any'}]
        : [{val:'A', label:'双手'}, {val:'B', label:'单手'}, {val:'C', label:'随意'}]
    }
  ]

  // 5. 聊天初始消息
  if (chatMessages.value.length === 0 || chatMessages.value.length === 1) {
    chatMessages.value = [{ role: 'ai', text: t('player.ai.welcome') }]
  }
}

watch(locale, loadMockData)

onMounted(() => {
  loadMockData()
  setTimeout(() => {
    loading.value = false;
    isFav.value = userStore.favorites.includes(parseInt(route.params.id) || 1);
    userStore.addHistory({ id: 1, title: '商务汉语谈判技巧' });
  }, 800)
})

const filteredChapters = computed(() => {
  if (filterType.value === 'all') return chapters.value
  return chapters.value.filter(c => c.type === filterType.value)
})

const switchChapter = (chapter) => {
  currentChapter.value = chapter
  if (!chapter.isPaid || chapter.unlocked) {
    videoSrc.value = videoSrc.value + '?t=' + Date.now() 
    showResumeTip.value = false;
  }
}

const handleUnlock = () => {
  if (!userStore.isLoggedIn) {
    ElMessage.warning(t('login_warn'))
    router.push({ path: '/login', query: { redirect: route.fullPath } });
    return;
  }
  router.push({ path: '/checkout', query: { type: 'course' } });
}

const changeSpeed = (rate) => {
  settings.speed = rate
  if (videoRef.value) videoRef.value.playbackRate = rate
}

const checkHistory = () => {
  const savedTime = localStorage.getItem(`video_time_1`);
  if (savedTime && parseFloat(savedTime) > 5) {
    historyTime.value = parseFloat(savedTime);
    showResumeTip.value = true;
    setTimeout(() => showResumeTip.value = false, 8000);
  }
}

const jumpToHistory = () => {
  videoRef.value.currentTime = historyTime.value;
  videoRef.value.play();
  showResumeTip.value = false;
  ElMessage.success(t('player.msg_jumped', { time: formatTime(historyTime.value) }));
}

const handleTimeUpdate = (e) => {
  const time = e.target.currentTime;
  if (Math.floor(time) % 5 === 0) localStorage.setItem(`video_time_1`, time);
}

const formatTime = (s) => {
  const min = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${min}:${sec < 10 ? '0'+sec : sec}`;
}

const toggleFav = () => {
  if (!userStore.isLoggedIn) {
      ElMessage.warning(t('login_warn'));
      return;
  }
  isFav.value = !isFav.value;
  if (isFav.value) {
    userStore.favorites.push(1);
    ElMessage.success(t('player.msg_faved'));
  } else {
    ElMessage.info(t('player.msg_unfaved'));
  }
}

const selectPinyin = (char) => {
  pinyinChar.value = char;
  navigator.clipboard.writeText(char);
  ElMessage.success(t('player.msg_copied', { char }));
}

const submitQuiz = () => {
  let score = 0;
  let wrongIds = [];
  quizList.value.forEach(q => {
    if (userAnswers.value[q.id] === q.correct) score += 50;
    else wrongIds.push(q.id.toString());
  });
  quizResult.value = { score, wrongIds };
  if (score === 100) ElMessage.success(t('player.quiz.msg_perfect'));
}

const sendMessage = () => {
  if (!chatInput.value) return
  chatMessages.value.push({ role: 'user', text: chatInput.value })
  setTimeout(() => {
    chatMessages.value.push({ role: 'ai', text: t('player.ai.mock_reply', { input: chatInput.value }) })
  }, 800)
  chatInput.value = ''
}
</script>

<style scoped lang="scss">
$primary: #004aad;

.course-player-page {
  padding-top: 70px;
  background: #f8faff;
  min-height: 100vh;
}

/* 导航栏 (强制蓝底白字) */
.custom-navbar {
  background-color: $primary !important;
  height: 70px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
.nav-avatar { width: 38px; height: 38px; border-radius: 50%; object-fit: cover; }

/* 视频区域 */
.video-container {
  background: #000; width: 100%; aspect-ratio: 16/9; border-radius: 12px; overflow: hidden; position: relative;
  display: flex; align-items: center; justify-content: center;
}

/* 续播提示气泡 */
.resume-tip {
  position: absolute; bottom: 60px; left: 20px;
  background: rgba(0, 0, 0, 0.85); color: #fff; border: 1px solid rgba(255,255,255,0.2);
  padding: 8px 15px; border-radius: 20px; cursor: pointer; font-size: 13px; z-index: 20;
  transition: 0.3s;
  &:hover { background: $primary; border-color: $primary; }
}

/* 锁定遮罩 */
.lock-overlay {
  position: absolute; inset: 0; background: rgba(0,0,0,0.85); backdrop-filter: blur(8px);
  flex-direction: column; align-items: center; justify-content: center; color: #fff; z-index: 10;
}

.player-wrapper { width: 100%; height: 100%; position: relative; }
.real-video { width: 100%; height: 100%; object-fit: contain; }

/* 字幕层 */
.subtitle-layer {
  position: absolute; bottom: 40px; left: 0; right: 0; text-align: center; pointer-events: none;
  p {
    display: inline-block; background: rgba(0,0,0,0.6); color: #fff; padding: 4px 12px; border-radius: 6px;
    margin: 2px 0; text-shadow: 0 1px 2px rgba(0,0,0,0.8);
  }
  .sub-cn { font-size: 18px; font-weight: bold; }
  .sub-en { font-size: 14px; color: #eee; }
}

/* 目录卡片 */
.playlist-card { background: #fff; border-radius: 12px; border: 1px solid #eee; height: 600px; display: flex; flex-direction: column; }
.playlist-header { padding: 20px; border-bottom: 1px solid #eee; }
.video-tabs { display: flex; gap: 8px; margin-top: 15px; overflow-x: auto; }
.v-tab {
  font-size: 13px; padding: 4px 12px; border-radius: 20px; background: #f5f5f5; color: #666; cursor: pointer; white-space: nowrap; transition: 0.2s;
  &.active { background: $primary; color: #fff; }
}

.chapter-list { flex: 1; overflow-y: auto; padding: 0; }
.chapter-item {
  padding: 15px 20px; border-bottom: 1px solid #f9f9f9; cursor: pointer; transition: 0.2s;
  display: flex; justify-content: space-between; align-items: center;
  &:hover { background: #f0f7ff; }
  &.active { background: #eef4ff; border-left: 4px solid $primary; .text-dark { color: $primary !important; font-weight: bold; } }
  &.locked { opacity: 0.7; }
}

/* 标签样式 */
.tag-free { font-size: 10px; background: #e6f9ed; color: #28a745; padding: 2px 6px; border-radius: 4px; font-weight: bold; }
.tag-paid { font-size: 10px; background: #fff0f0; color: #dc3545; padding: 2px 6px; border-radius: 4px; font-weight: bold; }
.tag-vip { font-size: 10px; background: linear-gradient(135deg, #ffd700, #ffaa00); color: #fff; padding: 2px 6px; border-radius: 4px; font-weight: bold; }

/* AI 聊天框位置 */
.ai-float-btn { position: fixed; bottom: 30px; right: 30px; z-index: 1050; }
.ai-chat-box {
  position: fixed; bottom: 100px; right: 30px; width: 350px; height: 500px; z-index: 1050; border-radius: 16px; border: none;
}

/* 过渡动画 */
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.slide-up-enter-active, .slide-up-leave-active { transition: all 0.3s ease; }
.slide-up-enter-from, .slide-up-leave-to { opacity: 0; transform: translateY(20px); }

/* 测验选项 */
.quiz-opt { transition: 0.2s; &:hover { background: #f8f9fa; } }

/* 响应式 */
@media (max-width: 768px) {
  .ai-chat-box { width: 90%; right: 5%; bottom: 90px; height: 400px; }
  .playlist-card { height: auto; max-height: 400px; }
}
</style>