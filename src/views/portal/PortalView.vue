<template>
  <div class="home-page">
    
    <nav class="navbar" :class="{ scrolled: isScrolled }">
      <div class="container navbar-content">
        <a class="navbar-brand" href="#" @click.prevent="go('/portal')">{{ $t('brand') }}</a>
        
        <div class="mobile-toggle d-lg-none" @click="isMenuOpen = !isMenuOpen">
          <i class="bi" :class="isMenuOpen ? 'bi-x-lg' : 'bi-list'" style="font-size: 1.5rem; color: #333;"></i>
        </div>

        <div class="navbar-menu" :class="{ 'is-open': isMenuOpen }" @click.stop>
          <ul class="nav-list">
            <li class="nav-item active" @click="go('/portal')">{{ $t('home.nav.home') }}</li>
            <li class="nav-item" @click="go('/story')">{{ $t('home.nav.story') }}</li>
            <li class="nav-item" @click="go('/education')">{{ $t('home.nav.edu') }}</li>
            <li class="nav-item" @click="go('/service')">{{ $t('home.nav.task') }}</li>
            <li class="nav-item" @click="go('/culture')">{{ $t('home.nav.map') }}</li>
          </ul>
          
          <div class="nav-buttons">
            <template v-if="!userStore.isLoggedIn">
              <button class="btn btn-outline" @click="go('/login')">{{ $t('home.nav.login') }}</button>
            </template>
            <template v-else>
              <div class="user-profile-trigger" @click="go('/user/profile')">
                <img :src="userStore.userInfo.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'" 
                     style="width: 32px; height: 32px; border-radius: 50%; border: 1px solid #ddd;">
                <span class="username ms-2 small">{{ userStore.userInfo.name || 'User' }}</span>
              </div>
            </template>
            
            <button class="btn btn-primary-solid" @click="toggleLang">
              <i class="bi bi-translate me-1"></i> {{ $t('home.nav.lang_en') }}
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div class="hero-section">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-text">
            <div class="badges animate-up">
              <span class="badge-official"><i class="bi bi-patch-check-fill text-primary"></i> {{ $t('home.hero.badge_1') }}</span>
              <span class="badge-official"><i class="bi bi-heart-fill text-danger"></i> {{ $t('home.hero.badge_2') }}</span>
            </div>

            <h1 class="hero-title animate-up delay-200">
              {{ $t('home.hero.title_1') }}<br>
              {{ $t('home.hero.title_2') }} <span>{{ $t('home.hero.title_high') }}</span>
            </h1>

            <p class="hero-desc animate-up delay-400">{{ $t('home.hero.desc') }}</p>

            <div class="hero-actions animate-up delay-400">
              <button @click="go('/service')" class="btn btn-lg btn-primary-solid">
                <i class="bi bi-briefcase-fill"></i> {{ $t('home.hero.btn_task') }}
              </button>
              <button @click="go('/education')" class="btn btn-lg btn-outline-dark">
                <i class="bi bi-mortarboard-fill"></i> {{ $t('home.hero.btn_learn') }}
              </button>
            </div>

            <div class="hero-footer animate-up delay-400">
              <span><i class="bi bi-shield-lock-fill text-success"></i> {{ $t('home.hero.patent') }}</span>
              <span><i class="bi bi-code-slash text-primary"></i> {{ $t('home.hero.copyright') }}</span>
            </div>
          </div>
          
          <div class="hero-image d-none d-lg-block animate-up delay-200">
             <img src="https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80" alt="Hero Image">
          </div>
        </div>

        <div class="stats-bar animate-up delay-400">
          <div class="stats-grid">
            <div class="stat-item border-right">
              <span class="stat-num">{{ displayCounters.countries }}</span>
              <span class="stat-desc">{{ $t('home.stats.countries') }}</span>
            </div>
            <div class="stat-item border-right">
              <span class="stat-num">{{ displayCounters.experts }}</span>
              <span class="stat-desc">{{ $t('home.stats.experts') }}</span>
            </div>
            <div class="stat-item border-right">
              <span class="stat-num">¥{{ displayCounters.income }}</span>
              <span class="stat-desc">{{ $t('home.stats.income') }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-num">{{ displayCounters.students }}</span>
              <span class="stat-desc">{{ $t('home.stats.students') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cards-section">
      <div class="container">
        <div class="cards-grid">
          <div class="biz-card card-story" @click="go('/story')">
            <div class="biz-icon"><i class="bi bi-camera-reels"></i></div>
            <div class="biz-title">{{ $t('home.cards.story_title') }}</div>
            <div class="biz-sub">{{ $t('home.cards.story_desc') }}</div>
            <div class="btn-arrow"><i class="bi bi-arrow-right"></i></div>
          </div>
          <div class="biz-card card-edu" @click="go('/education')">
            <div class="biz-icon"><i class="bi bi-mortarboard"></i></div>
            <div class="biz-title">{{ $t('home.cards.edu_title') }}</div>
            <div class="biz-sub">{{ $t('home.cards.edu_desc') }}</div>
            <div class="btn-arrow"><i class="bi bi-arrow-right"></i></div>
          </div>
          <div class="biz-card card-task" @click="go('/service')">
            <div class="biz-icon"><i class="bi bi-briefcase"></i></div>
            <div class="biz-title">{{ $t('home.cards.task_title') }}</div>
            <div class="biz-sub">{{ $t('home.cards.task_desc') }}</div>
            <div class="btn-arrow"><i class="bi bi-arrow-right"></i></div>
          </div>
          <div class="biz-card card-map" @click="go('/culture')">
            <div class="biz-icon"><i class="bi bi-map"></i></div>
            <div class="biz-title">{{ $t('home.cards.map_title') }}</div>
            <div class="biz-sub">{{ $t('home.cards.map_desc') }}</div>
            <div class="btn-arrow"><i class="bi bi-arrow-right"></i></div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const router = useRouter()
const userStore = useUserStore()

// 状态管理
const isScrolled = ref(false)
const isMenuOpen = ref(false)
const displayCounters = reactive({ countries: 0, experts: 0, income: 0, students: 0 })

// 1. 修复：定义 go 跳转函数
const go = (path) => {
  router.push(path)
  isMenuOpen.value = false // 跳转后关闭手机菜单
}

// 2. 修复：定义 handleScroll 滚动监听函数
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// 语言切换逻辑
const toggleLang = () => {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
}

// 数字滚动动画函数
const animateValue = (key, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    displayCounters[key] = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// 初始化数据
const initData = async () => {
  // 模拟数据
  const mockData = {
    countries: 28,
    experts: 12000,
    income: 86000,
    students: 5320
  }
  
  // 执行动画
  animateValue('countries', 0, mockData.countries, 1500)
  animateValue('experts', 0, mockData.experts, 2000)
  animateValue('income', 0, mockData.income, 2500)
  animateValue('students', 0, mockData.students, 2000)
}

// 生命周期
onMounted(() => {
  // 监听滚动事件
  window.addEventListener('scroll', handleScroll)
  // 初始化数据
  initData()
})

onUnmounted(() => {
  // 销毁时移除监听
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="scss">
@use "sass:color";

/* --- 变量定义 --- */
$primary: #004aad;
$primary-gradient: linear-gradient(135deg, #004aad 0%, #0078ff 100%);
$bg-light: #f8faff;

/* --- 全局容器 --- */
.home-page {
  font-family: -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif;
  padding-top: 70px;
  background: $bg-light;
  min-height: 100vh;
  display: flex; flex-direction: column;
}

.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

/* 按钮样式 */
.btn { border: none; outline: none; cursor: pointer; padding: 8px 18px; border-radius: 30px; font-weight: 600; font-size: 14px; transition: all 0.3s; display: inline-flex; align-items: center; justify-content: center; gap: 8px; text-decoration: none; }
.btn-lg { padding: 12px 24px; font-size: 16px; }
.btn-outline { background: transparent; border: 1px solid #ccc; color: #555; &:hover { border-color: $primary; color: $primary; } }
.btn-outline-dark { background: transparent; border: 1px solid #333; color: #333; &:hover { background: #333; color: #fff; } }
.btn-primary-solid { 
  background: $primary; color: #fff; 
  &:hover { background: color.adjust($primary, $lightness: 5%); box-shadow: 0 4px 10px color.change($primary, $alpha: 0.3); } 
}

/* 导航栏 */
.navbar {
  position: fixed; top: 0; left: 0; right: 0; height: 70px; 
  background: rgba(255,255,255,0.95); backdrop-filter: blur(12px); 
  z-index: 1000; transition: box-shadow 0.3s;
  &.scrolled { box-shadow: 0 2px 15px rgba(0,0,0,0.05); }

  .navbar-content { height: 100%; display: flex; align-items: center; justify-content: space-between; position: relative; }
  
  .navbar-brand { 
    font-weight: 900; font-size: 1.6rem; letter-spacing: -0.5px; 
    background: $primary-gradient; -webkit-background-clip: text; -webkit-text-fill-color: transparent; 
    text-decoration: none;
  }
  
  .mobile-toggle { display: none; cursor: pointer; }
  
  .navbar-menu { display: flex; align-items: center; gap: 30px; }
  
  .nav-list { 
    display: flex; list-style: none; margin: 0; padding: 0; gap: 5px; 
    .nav-item { 
      padding: 8px 18px; border-radius: 30px; color: #555; font-weight: 600; cursor: pointer; transition: all 0.3s; 
      &:hover { color: $primary; background: color.change($primary, $alpha: 0.06); } 
      &.active { background: $primary; color: #fff; box-shadow: 0 4px 10px color.change($primary, $alpha: 0.3); } 
    }
  }
  .nav-buttons { display: flex; gap: 10px; align-items: center; }
  
  .user-profile-trigger {
    display: flex; align-items: center; gap: 8px; cursor: pointer; padding: 5px 12px; border-radius: 20px; background: #f0f2f5; transition: all 0.2s;
    &:hover { background: #e6e8eb; }
    .username { font-size: 14px; font-weight: 600; color: #333; }
  }
}

/* Hero 区域 */
.hero-section {
  padding: 60px 0 80px; background: linear-gradient(135deg, #f0f7ff 0%, #fff 100%); position: relative; overflow: hidden;
  &::before { content: ''; position: absolute; top: -50%; right: -20%; width: 800px; height: 800px; background: radial-gradient(circle, color.change(#004aad, $alpha: 0.05) 0%, transparent 70%); border-radius: 50%; z-index: 0; }
  .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; position: relative; z-index: 1; }
  
  .hero-text {
    .badges { margin-bottom: 20px; display: flex; gap: 10px; flex-wrap: wrap; }
    .badge-official { background: #fff; border: 1px solid #e0e0e0; color: #333; padding: 6px 14px; border-radius: 30px; font-size: 12px; font-weight: bold; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 4px 10px rgba(0,0,0,0.03); }
    .hero-title { font-size: 3rem; line-height: 1.2; font-weight: 900; color: #111; margin-bottom: 20px; span { color: $primary; } }
    .hero-desc { font-size: 1.1rem; color: #666; margin-bottom: 35px; max-width: 500px; }
    .hero-actions { display: flex; gap: 15px; margin-bottom: 40px; }
    .hero-footer { border-top: 1px solid #e0e0e0; padding-top: 20px; display: flex; gap: 20px; font-size: 13px; color: #888; span { display: flex; align-items: center; gap: 5px; } }
  }
  .hero-image img { width: 100%; border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); border: 4px solid #fff; transform: rotate(2deg); }
}

/* Stats */
.stats-bar {
  margin-top: 50px; background: linear-gradient(135deg, #004aad 0%, #003366 100%); color: #fff; padding: 35px 0; border-radius: 20px; box-shadow: 0 20px 50px color.change(#004aad, $alpha: 0.25); position: relative; z-index: 2;
  .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); text-align: center; .stat-item { display: flex; flex-direction: column; align-items: center; &.border-right { border-right: 1px solid rgba(255,255,255,0.2); } } .stat-num { font-size: 32px; font-weight: 800; line-height: 1; margin-bottom: 5px; } .stat-desc { font-size: 13px; opacity: 0.8; } }
}

/* Cards */
.cards-section { padding: 60px 0 80px; .cards-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 25px; } }
.biz-card {
  background: #fff; border-radius: 16px; padding: 30px; border: 1px solid #f0f0f0; transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1); cursor: pointer; position: relative; overflow: hidden; height: 100%; display: flex; flex-direction: column;
  &:hover { transform: translateY(-8px); box-shadow: 0 15px 30px rgba(0,0,0,0.08); border-color: $primary; .biz-icon { transform: scale(1.1) rotate(5deg); } .btn-arrow { background: $primary; color: #fff; } }
  .biz-icon { width: 60px; height: 60px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 28px; margin-bottom: 20px; transition: 0.3s; }
  .biz-title { font-weight: 800; font-size: 1.2rem; margin-bottom: 8px; color: #333; }
  .biz-sub { font-size: 0.9rem; color: #888; line-height: 1.5; margin-bottom: 20px; flex: 1; }
  .btn-arrow { position: absolute; bottom: 25px; right: 25px; width: 30px; height: 30px; border-radius: 50%; background: #f8f9fa; display: flex; align-items: center; justify-content: center; color: #aaa; transition: 0.3s; }
  &.card-story .biz-icon { background: #fff0f0; color: #dc3545; }
  &.card-edu .biz-icon { background: #eef4ff; color: $primary; }
  &.card-task .biz-icon { background: #fff8e1; color: #ffc107; }
  &.card-map .biz-icon { background: #e8f5e9; color: #198754; }
}

.animate-up { animation: fadeInUp 0.8s ease forwards; opacity: 0; transform: translateY(20px); }
.delay-200 { animation-delay: 0.2s; } .delay-400 { animation-delay: 0.4s; }
@keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }

/* =========================================================
   🔥 手机端适配 (强制居中 & 双列卡片) 🔥
   ========================================================= */

@media (max-width: 992px) {
  .mobile-toggle { display: block; }

  .navbar-menu {
    position: absolute; top: 85px; left: 15px; right: 15px;
    background: #ffffff; padding: 20px; border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.05);
    flex-direction: column; alignItems: stretch; opacity: 0; transform: translateY(-20px); pointer-events: none; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    &.is-open { opacity: 1; transform: translateY(0); pointer-events: auto; }
  }
  .nav-list { flex-direction: column; width: 100%; text-align: center; gap: 12px; margin-bottom: 25px; .nav-item { display: block; background: #f8f9fa; padding: 12px; border-radius: 12px; } }
  .nav-buttons { flex-direction: column; width: 100%; gap: 12px; button { width: 100%; height: 48px; border-radius: 12px; } .user-profile-trigger { justify-content: center; height: 48px; } }

  /* Hero 强制居中 */
  .hero-grid { grid-template-columns: 1fr; text-align: center; }
  
  .hero-text {
    width: 100%; margin: 0 auto; display: flex; flex-direction: column; align-items: center;
    .badges { justify-content: center; width: 100%; }
    .hero-title { font-size: 2.2rem; }
    .hero-desc { margin: 0 auto 30px; }
    .hero-actions { 
      width: 100%; display: flex; flex-direction: row; justify-content: space-between; gap: 15px;
      button { flex: 1; white-space: nowrap; font-size: 14px; padding: 12px 0; }
    }
    .hero-footer { justify-content: center; }
  }
  .hero-image { display: none; }
  
  /* 统计条 2x2 */
  .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 20px; }
  .stat-item.border-right { border-right: none; }
  
  /* 卡片田字格 (2列) */
  .cards-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 15px !important; }
  .biz-card { 
    padding: 20px; align-items: center; text-align: center;
    .biz-sub { display: none; } /* 移动端隐藏描述，保持整洁 */
    .btn-arrow { display: none; }
    .biz-icon { margin-bottom: 10px; }
    .biz-title { font-size: 1rem; margin-bottom: 0; }
  }
}

@media (max-width: 768px) {
  .hero-title { font-size: 2.2rem; }
  .stat-item { margin-bottom: 10px; }
}
</style>