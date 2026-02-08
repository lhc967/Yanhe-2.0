<template>
  <div class="review-page">

    <div class="review-header">
      <div class="d-flex align-items-center gap-3">
        <div class="close-btn" @click="handleBack">
          <el-icon><Close /></el-icon>
        </div>
        <div class="fw-bold text-muted">{{ headerTitle }}</div>
      </div>

      <div class="progress-container" v-if="currentMode !== 'menu'">
        <div class="progress-custom">
          <div class="progress-bar-custom" :style="{ width: progressPercent + '%' }"></div>
        </div>
        <div class="progress-text">{{ currentIndex + 1 }} / {{ totalCount }}</div>
      </div>

      <div class="d-flex align-items-center gap-2 text-warning fw-bold">
        <el-icon><Trophy /></el-icon>
        <span v-if="currentMode === 'quiz'">Combo: {{ combo }}</span>
        <span v-else>{{ $t('review.header.streak', { day: 5 }) }}</span>
      </div>
    </div>

    <div class="review-stage">

      <transition name="fade-up">
        <div class="container menu-container" v-if="currentMode === 'menu'">
          <h2 class="text-center fw-bold mb-5 text-dark">{{ $t('review.menu.title') }}</h2>
          <div class="row g-4 justify-content-center">
            
            <div class="col-md-4">
              <div class="mode-card card-flash" @click="switchMode('flashcard')">
                <div class="icon-box"><el-icon><Collection /></el-icon></div>
                <h3>{{ $t('review.menu.flash.title') }}</h3>
                <p>{{ $t('review.menu.flash.desc') }}</p>
                <div class="badge-tag">{{ $t('review.menu.flash.badge', { count: 12 }) }}</div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="mode-card card-phonics" @click="switchMode('phonics')">
                <div class="icon-box"><el-icon><Microphone /></el-icon></div>
                <h3>{{ $t('review.menu.phonics.title') }}</h3>
                <p>{{ $t('review.menu.phonics.desc') }}</p>
                <div class="badge-tag">{{ $t('review.menu.phonics.badge', { count: 5 }) }}</div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="mode-card card-quiz" @click="switchMode('quiz')">
                <div class="icon-box"><el-icon><Stopwatch /></el-icon></div>
                <h3>{{ $t('review.menu.quiz.title') }}</h3>
                <p>{{ $t('review.menu.quiz.desc') }}</p>
                <div class="badge-tag">{{ $t('review.menu.quiz.badge', { score: 1200 }) }}</div>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <div v-if="currentMode === 'flashcard'" class="w-100 h-100 d-flex flex-column align-items-center justify-content-center">
        <div class="flashcard" :class="{ flipped: isFlipped }" @click="flipCard">
          <div class="card-face card-front">
            <div class="btn-audio" @click.stop="playAudio"><el-icon><VideoPlay /></el-icon></div>
            <div class="small text-muted text-uppercase mb-3 fw-bold tracking-wide">{{ $t('review.flash.tag') }}</div>
            <div class="word-lg">{{ currentItem.front }}</div>
            <div class="hint-text">{{ $t('review.flash.hint_flip') }}</div>
          </div>
          <div class="card-face card-back">
            <div class="btn-audio" @click.stop="playAudio"><el-icon><VideoPlay /></el-icon></div>
            <div class="phonetic">{{ currentItem.phonetic }}</div>
            <div class="meaning">{{ currentItem.meaning }}</div>
            <div class="example-box">
              <div class="example-en">{{ currentItem.exEn }}</div>
              <div class="example-cn">{{ currentItem.exCn }}</div>
            </div>
          </div>
        </div>
        
        <div class="kb-hint mt-4 d-none d-md-flex">
          {{ $t('review.flash.kb_hint_prefix') }} <span class="key-cap">{{ $t('review.flash.kb_space') }}</span> {{ $t('review.flash.kb_hint_suffix') }}
        </div>
      </div>

      <div v-if="currentMode === 'phonics'" class="w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
        <div class="phonics-card">
          <div class="word-display mb-2">{{ currentItem.front }}</div>
          <div class="phonetic-display mb-4">{{ currentItem.phonetic }}</div>
          
          <div class="recording-area" :class="{ 'is-recording': isRecording }">
            <div class="wave" v-if="isRecording"></div>
            <div class="wave" v-if="isRecording"></div>
            <button class="btn-mic" @click="toggleRecording">
              <el-icon v-if="!isRecording" size="30"><Microphone /></el-icon>
              <div v-else class="stop-rect"></div>
            </button>
          </div>
          
          <div class="mt-4 text-muted status-text">
            {{ isRecording ? $t('review.phonics.status_recording') : $t('review.phonics.status_idle') }}
          </div>

          <transition name="el-zoom-in-center">
            <div class="score-result" v-if="phonicsScore > 0">
              <div class="score-circle">
                <span class="score-num">{{ phonicsScore }}</span>
                <span class="score-label">{{ $t('review.phonics.score_unit') }}</span>
              </div>
              <div class="score-feedback">{{ phonicsFeedback }}</div>
              <button class="btn btn-sm btn-light mt-3" @click="nextItem">{{ $t('review.btn_next') }}</button>
            </div>
          </transition>
        </div>
      </div>

      <div v-if="currentMode === 'quiz'" class="w-100 h-100 d-flex flex-column align-items-center justify-content-center">
        <div class="quiz-container">
          <div class="timer-bar" :style="{ width: quizTimer + '%' }"></div>
          <div class="question-card">
            <h2 class="mb-4">{{ currentItem.front }}</h2>
            <div class="options-grid">
              <button 
                v-for="(opt, idx) in currentItem.options" 
                :key="idx"
                class="btn-option"
                :class="{ 
                  'correct': quizAnswered && opt.correct, 
                  'wrong': quizAnswered && !opt.correct && opt.selected 
                }"
                @click="handleQuizAnswer(opt, idx)"
                :disabled="quizAnswered"
              >
                {{ opt.text }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="success-overlay" v-if="isFinished">
        <div class="success-icon"><el-icon><CircleCheckFilled /></el-icon></div>
        <h2 class="fw-bold mb-2">{{ $t('review.finish.title') }}</h2>
        <p class="text-muted mb-5">{{ $t('review.finish.desc', { count: totalCount }) }}</p>
        <button class="btn btn-dark rounded-pill px-5 py-3 fw-bold" @click="backToMenu">{{ $t('review.finish.btn_back') }}</button>
      </div>

    </div>

    <div class="control-bar" v-if="currentMode === 'flashcard'">
      <button v-if="!isFlipped" class="btn-show" @click="flipCard">{{ $t('review.flash.btn_show') }}</button>

      <div class="grading-actions" v-else>
        <button class="btn-grade btn-again" @click="nextItem('again')">
          {{ $t('review.flash.grade.again') }}<span class="grade-sub">1min</span>
        </button>
        <button class="btn-grade btn-hard" @click="nextItem('hard')">
          {{ $t('review.flash.grade.hard') }}<span class="grade-sub">2d</span>
        </button>
        <button class="btn-grade btn-good" @click="nextItem('good')">
          {{ $t('review.flash.grade.good') }}<span class="grade-sub">4d</span>
        </button>
        <button class="btn-grade btn-easy" @click="nextItem('easy')">
          {{ $t('review.flash.grade.easy') }}<span class="grade-sub">7d</span>
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { 
  Close, VideoPlay, Collection, Microphone, Stopwatch, 
  Trophy, CircleCheckFilled 
} from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const router = useRouter()

// --- 状态管理 ---
const currentMode = ref('menu') // menu, flashcard, phonics, quiz
const currentIndex = ref(0)
const isFinished = ref(false)
const cardsData = ref([])

// [Database] 模拟加载复习数据 (根据语言)
const loadReviewData = () => {
  const isEn = locale.value === 'en'
  
  cardsData.value = [
    { 
      front: "Negotiation", 
      phonetic: "/nɪˌɡoʊʃiˈeɪʃn/", 
      meaning: isEn ? "Discussion aimed at reaching an agreement" : "谈判；协商", 
      exEn: "The negotiation went very smoothly.", 
      exCn: isEn ? "Discussions were productive." : "谈判进行得非常顺利。", 
      options: isEn 
        ? [{text:'Budget',correct:false}, {text:'Negotiation',correct:true}, {text:'Contract',correct:false}, {text:'Meeting',correct:false}]
        : [{text:'预算',correct:false}, {text:'谈判',correct:true}, {text:'合同',correct:false}, {text:'会议',correct:false}]
    },
    { 
      front: "Budget", 
      phonetic: "/ˈbʌdʒɪt/", 
      meaning: isEn ? "An estimate of income and expenditure" : "预算", 
      exEn: "We need to cut the budget.", 
      exCn: isEn ? "We must reduce spending." : "我们需要削减预算。", 
      options: isEn
        ? [{text:'Budget',correct:true}, {text:'Finance',correct:false}, {text:'Deficit',correct:false}, {text:'Invest',correct:false}]
        : [{text:'预算',correct:true}, {text:'金融',correct:false}, {text:'赤字',correct:false}, {text:'投资',correct:false}]
    },
    { 
      front: "Contract", 
      phonetic: "/ˈkɑːntrækt/", 
      meaning: isEn ? "A written or spoken agreement" : "合同；契约", 
      exEn: "Please sign the contract here.", 
      exCn: isEn ? "Sign the agreement." : "请在这里签署合同。", 
      options: isEn
        ? [{text:'Contact',correct:false}, {text:'Contrast',correct:false}, {text:'Contract',correct:true}, {text:'Control',correct:false}]
        : [{text:'联系',correct:false}, {text:'对比',correct:false}, {text:'合同',correct:true}, {text:'控制',correct:false}]
    }
  ]
}

watch(locale, loadReviewData)
onMounted(loadReviewData)

// 计算属性
const totalCount = computed(() => cardsData.value.length)
const currentItem = computed(() => cardsData.value[currentIndex.value] || cardsData.value[0])
const progressPercent = computed(() => ((currentIndex.value) / totalCount.value) * 100)
const headerTitle = computed(() => {
  if (currentMode.value === 'menu') return t('review.header.title_menu')
  if (currentMode.value === 'flashcard') return t('review.header.title_flash')
  if (currentMode.value === 'phonics') return t('review.header.title_phonics')
  if (currentMode.value === 'quiz') return t('review.header.title_quiz')
  return ''
})

// --- 通用逻辑 ---
const switchMode = (mode) => {
  currentMode.value = mode
  currentIndex.value = 0
  isFinished.value = false
  isFlipped.value = false
  phonicsScore.value = 0
  combo.value = 0
  quizTimer.value = 100
}

const handleBack = () => {
  if (currentMode.value !== 'menu') {
    currentMode.value = 'menu'
  } else {
    router.push('/education')
  }
}

const backToMenu = () => {
  currentMode.value = 'menu'
  isFinished.value = false
}

const nextItem = () => {
  if (currentIndex.value < totalCount.value - 1) {
    if (currentMode.value === 'flashcard') {
      isFlipped.value = false
      setTimeout(() => currentIndex.value++, 300)
    } else {
      currentIndex.value++
      phonicsScore.value = 0
      quizAnswered.value = false
      quizTimer.value = 100
    }
  } else {
    isFinished.value = true
  }
}

// --- 模式 1: 闪卡 ---
const isFlipped = ref(false)
const flipCard = () => { isFlipped.value = !isFlipped.value }
const playAudio = () => { ElMessage.info(t('loading.audio')) }

// --- 模式 2: 音标 ---
const isRecording = ref(false)
const phonicsScore = ref(0)
const phonicsFeedback = ref('')

const toggleRecording = () => {
  if (isRecording.value) {
    isRecording.value = false
    const score = Math.floor(Math.random() * (98 - 80) + 80)
    phonicsScore.value = score
    phonicsFeedback.value = score > 90 ? t('review.phonics.fb_perfect') : t('review.phonics.fb_good')
  } else {
    isRecording.value = true
    phonicsScore.value = 0
  }
}

// --- 模式 3: Quiz ---
const combo = ref(0)
const quizAnswered = ref(false)
const quizTimer = ref(100)

const handleQuizAnswer = (opt, idx) => {
  if (quizAnswered.value) return
  quizAnswered.value = true
  opt.selected = true 
  
  if (opt.correct) {
    combo.value++
    setTimeout(nextItem, 1000)
  } else {
    combo.value = 0
    ElMessage.error(t('review.quiz.msg_wrong', { ans: currentItem.value.meaning }))
    setTimeout(nextItem, 2000)
  }
}
</script>

<style scoped lang="scss">
$primary: #004aad;
$dark: #333;
$bg-light: #f8faff;
$success: #28a745;
$danger: #dc3545;

/* 全局容器 */
.review-page {
  font-family: -apple-system, "PingFang SC", sans-serif;
  background: $bg-light;
  height: 100vh;
  overflow: hidden;
  display: flex; flex-direction: column;
}

/* 头部 */
.review-header {
  padding: 0 30px; background: #fff; border-bottom: 1px solid #eee;
  display: flex; justify-content: space-between; align-items: center; height: 70px;
  flex-shrink: 0;
}
.close-btn { color: #999; font-size: 1.5rem; cursor: pointer; transition: 0.2s; &:hover { color: $dark; transform: rotate(90deg); } }

/* 进度条 */
.progress-container { width: 300px; display: flex; flex-direction: column; align-items: center; }
.progress-custom { height: 8px; background: #eee; border-radius: 4px; overflow: hidden; width: 100%; }
.progress-bar-custom { height: 100%; background: $success; transition: width 0.5s ease; }
.progress-text { font-size: 12px; color: #999; margin-top: 4px; font-weight: bold; }

/* 主舞台 */
.review-stage {
  flex: 1; position: relative; overflow: hidden;
  perspective: 1000px;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
}

/* --- 模式 0: 菜单 --- */
.menu-container { padding-top: 50px; }
.mode-card {
  background: #fff; border-radius: 20px; padding: 30px; text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05); cursor: pointer; transition: 0.3s;
  border: 1px solid transparent;
  &:hover { transform: translateY(-10px); border-color: $primary; }
}
.icon-box {
  width: 60px; height: 60px; border-radius: 50%; margin: 0 auto 20px;
  display: flex; align-items: center; justify-content: center; font-size: 28px; color: #fff;
}
.card-flash .icon-box { background: $primary; box-shadow: 0 5px 15px rgba(0, 74, 173, 0.3); }
.card-phonics .icon-box { background: #ffc107; box-shadow: 0 5px 15px rgba(255, 193, 7, 0.3); }
.card-quiz .icon-box { background: #198754; box-shadow: 0 5px 15px rgba(25, 135, 84, 0.3); }
.badge-tag { display: inline-block; background: #f0f2f5; font-size: 12px; padding: 4px 10px; border-radius: 10px; color: #666; margin-top: 15px; }

/* --- 模式 1: 闪卡 (完全保留你的 CSS) --- */
.flashcard {
  width: 90%; max-width: 600px; height: 380px; cursor: pointer;
  position: relative; transform-style: preserve-3d; transition: transform 0.6s;
  &.flipped { transform: rotateY(180deg); }
}
.card-face {
  position: absolute; width: 100%; height: 100%; backface-visibility: hidden;
  border-radius: 16px; background: #fff; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  border: 1px solid #eee; padding: 40px; text-align: center;
}
.card-front { z-index: 2; }
.card-back { transform: rotateY(180deg); background: #fdfdfd; }
.word-lg { font-size: 3.5rem; font-weight: 800; color: $dark; margin-bottom: 20px; }
.hint-text { color: #999; font-size: 14px; }
.phonetic { font-size: 1.2rem; color: #666; margin-bottom: 10px; }
.meaning { font-size: 2rem; font-weight: 900; color: $primary; margin-bottom: 25px; }
.example-box { background: #f8f9fa; padding: 15px; border-radius: 8px; width: 100%; text-align: left; border-left: 4px solid $primary; }
.example-en { font-size: 1.1rem; font-weight: 600; margin-bottom: 4px; color: #333; }
.example-cn { font-size: 0.9rem; color: #666; }
.btn-audio { position: absolute; top: 20px; right: 20px; font-size: 1.5rem; color: #ddd; &:hover { color: $primary; } }
.kb-hint { color: #adb5bd; font-size: 13px; display: flex; align-items: center; gap: 5px; }
.key-cap { border: 1px solid #dee2e6; padding: 2px 8px; border-radius: 4px; font-weight: bold; background: #fff; box-shadow: 0 2px 0 #eee; }

/* --- 模式 2: 音标纠音 --- */
.phonics-card { width: 100%; max-width: 500px; text-align: center; }
.word-display { font-size: 3rem; font-weight: 800; color: $dark; }
.phonetic-display { font-size: 1.5rem; color: #666; font-family: 'Arial', sans-serif; }
.recording-area {
  width: 120px; height: 120px; margin: 0 auto; position: relative;
  display: flex; align-items: center; justify-content: center;
}
.btn-mic {
  width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, $primary, #0078ff);
  border: none; color: #fff; display: flex; align-items: center; justify-content: center;
  position: relative; z-index: 2; transition: 0.3s;
  box-shadow: 0 10px 20px rgba(0, 74, 173, 0.3);
  &:hover { transform: scale(1.05); }
}
.stop-rect { width: 24px; height: 24px; background: #fff; border-radius: 4px; }
.wave {
  position: absolute; width: 100%; height: 100%; border-radius: 50%;
  border: 2px solid $primary; opacity: 0;
  animation: ripple 1.5s infinite linear;
}
.wave:nth-child(2) { animation-delay: 0.5s; }
@keyframes ripple { 0% { transform: scale(0.8); opacity: 0.8; } 100% { transform: scale(1.5); opacity: 0; } }
.score-circle {
  width: 100px; height: 100px; border: 4px solid $success; border-radius: 50%;
  display: flex; align-items: baseline; justify-content: center;
  margin: 20px auto 10px; color: $success;
}
.score-num { font-size: 40px; font-weight: bold; }
.score-label { font-size: 14px; margin-left: 2px; }

/* --- 模式 3: Quiz --- */
.quiz-container { width: 100%; max-width: 600px; }
.question-card { background: #fff; border-radius: 20px; padding: 40px; text-align: center; box-shadow: 0 10px 40px rgba(0,0,0,0.05); }
.timer-bar { height: 6px; background: $primary; width: 100%; border-radius: 3px; margin-bottom: 20px; transition: width 1s linear; }
.options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
.btn-option {
  padding: 20px; border: 2px solid #eee; background: #fff; border-radius: 12px; font-size: 16px; font-weight: bold; color: #555;
  transition: 0.2s;
  &:hover:not(:disabled) { border-color: $primary; color: $primary; background: #f0f7ff; }
  &.correct { background: $success; color: #fff; border-color: $success; }
  &.wrong { background: $danger; color: #fff; border-color: $danger; }
}

/* 底部控制栏 */
.control-bar {
  position: fixed; bottom: 0; left: 0; right: 0; height: 100px;
  background: #fff; border-top: 1px solid #eee;
  display: flex; align-items: center; justify-content: center; gap: 15px;
  box-shadow: 0 -5px 20px rgba(0,0,0,0.02); z-index: 10;
}
.btn-show {
  background: $dark; color: #fff; padding: 15px 80px; border-radius: 50px;
  font-weight: bold; font-size: 18px; border: none; box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  transition: 0.2s;
  &:hover { transform: scale(1.05); }
}
.grading-actions { display: flex; gap: 15px; }
.btn-grade {
  border: none; padding: 0; width: 110px; height: 55px; border-radius: 8px;
  font-weight: bold; font-size: 15px; color: #fff; transition: 0.2s;
  display: flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1.2;
  &:hover { transform: translateY(-3px); box-shadow: 0 5px 15px rgba(0,0,0,0.15); }
}
.btn-again { background: #ff6b6b; border-bottom: 4px solid #e03131; }
.btn-hard { background: #ff922b; border-bottom: 4px solid #e8590c; }
.btn-good { background: #51cf66; border-bottom: 4px solid #2f9e44; }
.btn-easy { background: #339af0; border-bottom: 4px solid #1c7ed6; }
.grade-sub { font-size: 12px; opacity: 0.8; font-weight: normal; }

/* 结算页 */
.success-overlay {
  position: fixed; inset: 0; background: #fff; z-index: 100;
  display: flex; align-items: center; justify-content: center; flex-direction: column;
}
.success-icon { font-size: 80px; color: $success; animation: popIn 0.5s; margin-bottom: 20px; }
@keyframes popIn { from{transform:scale(0);} to{transform:scale(1);} }

/* 动画 */
.fade-up-enter-active, .fade-up-leave-active { transition: all 0.5s ease; }
.fade-up-enter-from { opacity: 0; transform: translateY(20px); }
.fade-up-leave-to { opacity: 0; transform: translateY(-20px); }
</style>