<template>
  <div class="culture-scroll-page" @wheel="handleWheel">
    
    <nav class="floating-nav">
      <div class="nav-left">
        <button class="nav-btn back-home" @click="go('/portal')">
          <i class="bi bi-arrow-left"></i>
          <span>{{ $t('culture_scroll.nav_back') }}</span>
        </button>
        <div class="vertical-divider"></div>
        <div class="brand">
          <span class="cn">{{ $t('brand') }}</span><span class="en"> · {{ $t('culture_scroll.brand_sub') }}</span>
        </div>
      </div>

      <div class="nav-right">
        <div class="lang-switch" @click="toggleLang">
          <span :class="{active: !isEn}">中</span>
          <span :class="{active: isEn}">En</span>
        </div>
        <div class="user-avatar" @click="$router.push('/user/profile')">
          <img :src="userStore.userInfo.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=User'" alt="User">
        </div>
      </div>
    </nav>

    <div class="ink-bg">
      <div class="smoke smoke-1"></div>
      <div class="smoke smoke-2"></div>
    </div>

    <div class="scroll-container" ref="scrollContainer">
      <div class="scroll-track" :style="{ transform: `translateX(${-scrollX}px)` }">
        
        <div class="intro-card">
          <div class="vertical-text">
            <h1>{{ $t('culture_scroll.intro.title') }}</h1>
            <p v-html="$t('culture_scroll.intro.desc')"></p>
          </div>
          <div class="scroll-tip">
            <i class="bi bi-mouse"></i> <span>SCROLL TO EXPLORE</span>
          </div>
        </div>

        <div 
          v-for="(card, index) in cards" 
          :key="card.id" 
          class="story-card-3d"
          @click="openDetail(card)"
        >
          <div class="card-visual">
            <img :src="card.image" loading="lazy">
            <div class="card-overlay"></div>
            <div class="ai-culture-tag">
              <i class="bi bi-stars text-warning"></i> {{ card.aiTag }}
            </div>
          </div>

          <div class="card-info">
            <h3 class="title">{{ card.title }}</h3>
            <div class="meta">
              <span class="author">@{{ card.user }}</span>
              <div class="seal-btn" @click.stop="stampIt(card)">
                <div class="seal-mark" :class="{ stamped: card.isLiked }">
                  {{ card.isLiked ? $t('culture_scroll.seal.liked') : $t('culture_scroll.seal.like') }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="publish-card-end" @click="showPublishMenu = true">
          <div class="dashed-box">
            <i class="bi bi-feather fs-1 mb-3"></i>
            <h3>{{ $t('culture_scroll.end_card.title') }}</h3>
            <p>{{ $t('culture_scroll.end_card.desc') }}</p>
          </div>
        </div>

      </div>
    </div>

    <div class="progress-bar-wrapper">
      <div class="progress-line">
        <div class="progress-fill" :style="{ width: progress + '%' }"></div>
      </div>
      <div class="location-indicator" v-if="currentLocation">
        <i class="bi bi-geo-alt-fill text-danger"></i> {{ currentLocation }}
      </div>
    </div>

    <div class="fixed-publish-btn" @click="showPublishMenu = true">
      <div class="ink-btn">
        <i class="bi bi-pen-fill"></i>
        <span class="btn-label">{{ $t('culture_scroll.fab_write') }}</span>
      </div>
    </div>

    <transition name="fade">
      <div v-if="showPublishMenu" class="publish-modal" @click.self="showPublishMenu = false">
        <div class="publish-content">
          <button class="close-btn" @click="showPublishMenu = false"><i class="bi bi-x-lg"></i></button>
          <h2>{{ $t('culture_scroll.modal.title') }}</h2>
          <div class="options-grid">
            <div class="opt" @click="goPublish('ai')">
              <div class="icon-circle ai-bg"><i class="bi bi-stars"></i></div>
              <span>{{ $t('culture_scroll.modal.opt_ai') }}</span>
            </div>
            <div class="opt" @click="goPublish('photo')">
              <div class="icon-circle photo-bg"><i class="bi bi-image"></i></div>
              <span>{{ $t('culture_scroll.modal.opt_photo') }}</span>
            </div>
            <div class="opt" @click="goPublish('write')">
              <div class="icon-circle write-bg"><i class="bi bi-journal-richtext"></i></div>
              <span>{{ $t('culture_scroll.modal.opt_write') }}</span>
            </div>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'

const { t, locale } = useI18n()
const router = useRouter()
const userStore = useUserStore()
const isEn = computed(() => locale.value === 'en')
const showPublishMenu = ref(false)

const scrollX = ref(0)
const maxScroll = ref(2000)
const cards = ref([])

// [Database] 模拟数据加载 (根据语言切换)
const loadMockData = () => {
  const isEnglish = locale.value === 'en'
  
  cards.value = [
    {
      id: 1,
      title: isEnglish ? 'Hongcun after rain, ink painting alike' : '雨后的宏村，简直就是水墨画本人',
      aiTag: isEnglish ? 'Hui Architecture' : '徽派建筑 · 马头墙',
      image: 'https://images.unsplash.com/photo-1629737976779-797740f93026?w=600&q=80',
      user: 'Traveler_Lee',
      location: isEnglish ? 'Anhui · Hongcun' : '安徽·宏村',
      isLiked: false
    },
    {
      id: 2,
      title: isEnglish ? 'Cycling on Xi\'an City Wall' : '在西安城墙骑车，触摸六百年的历史',
      aiTag: isEnglish ? 'Ming Dynasty Wall' : '明代城墙 · 历史',
      image: 'https://images.unsplash.com/photo-1572076936302-34947932607e?w=600&q=80',
      user: 'Jack_On_Tour',
      location: isEnglish ? 'Shaanxi · Xi\'an' : '陕西·西安',
      isLiked: true
    },
    {
      id: 3,
      title: isEnglish ? 'Sichuan Opera Face Changing!' : '第一次看川剧变脸，太神奇了！',
      aiTag: isEnglish ? 'Intangible Heritage' : '非遗 · 川剧',
      image: 'https://images.unsplash.com/photo-1544243399-63a232f0c766?w=600&q=80',
      user: 'Sarah_Vlogs',
      location: isEnglish ? 'Sichuan · Chengdu' : '四川·成都',
      isLiked: false
    },
    {
      id: 4,
      title: isEnglish ? 'Jingdezhen Porcelain Market' : '景德镇陶瓷市集，器物之魂',
      aiTag: isEnglish ? 'Capital of Porcelain' : '瓷都 · 匠人',
      image: 'https://images.unsplash.com/photo-1599707367072-cd6ad66acc40?w=600&q=80',
      user: 'Art_Fan',
      location: isEnglish ? 'Jiangxi · Jingdezhen' : '江西·景德镇',
      isLiked: false
    },
    {
      id: 5,
      title: isEnglish ? 'The Bund at night, Cyberpunk!' : '上海外滩的夜景，Cyberpunk!',
      aiTag: isEnglish ? 'Modern Skyline' : '现代 · 天际线',
      image: 'https://images.unsplash.com/photo-1548593444-406735c02604?w=600&q=80',
      user: 'City_Boy',
      location: isEnglish ? 'Shanghai · Bund' : '上海·外滩',
      isLiked: false
    }
  ]
}

watch(locale, loadMockData)

// 进度条
const progress = computed(() => {
  return Math.min((scrollX.value / maxScroll.value) * 100, 100)
})

// 当前位置
const currentLocation = computed(() => {
  const index = Math.floor(scrollX.value / 340) 
  if (index >= 0 && index < cards.value.length) {
    return cards.value[index].location
  }
  return t('culture_scroll.location_default')
})

const handleWheel = (e) => {
  if (window.innerWidth > 768) {
    e.preventDefault()
    let newX = scrollX.value + e.deltaY
    if (newX < 0) newX = 0
    if (newX > maxScroll.value) newX = maxScroll.value
    scrollX.value = newX
  }
}

const stampIt = (card) => {
  card.isLiked = !card.isLiked
  // [API] 点赞接口
  // axios.post('/api/story/like', { id: card.id })
}

const toggleLang = () => {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
}

const openDetail = (card) => router.push(`/story/${card.id}`)
const go = (path) => router.push(path)

const goPublish = (type) => {
  showPublishMenu.value = false
  if (type === 'ai') router.push('/story/ai') 
  else if (type === 'write') router.push('/story/write') // 假设有
  else router.push('/story/publish')
}

onMounted(() => {
  loadMockData()
  // [Logic] 计算滚动长度
  maxScroll.value = (5 * 360) + 600 - window.innerWidth // 简单估算
  if (maxScroll.value < 0) maxScroll.value = 0
})
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Noto+Serif+SC:wght@400;700&display=swap');

$ink-black: #2c2c2c;
$paper-color: #f4f0e6;
$seal-red: #b52a1c;

.culture-scroll-page {
  font-family: 'Noto Serif SC', serif;
  background-color: $paper-color;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dcbba3' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  height: 100vh;
  overflow: hidden; /* PC端隐藏滚动条，完全接管滚轮 */
  position: relative;
  color: $ink-black;
}

/* 1. 浮空导航 (修复版：带返回按钮) */
.floating-nav {
  position: fixed; top: 0; left: 0; right: 0; height: 70px;
  display: flex; justify-content: space-between; align-items: center;
  padding: 0 40px; z-index: 100;
  background: linear-gradient(to bottom, rgba(244, 240, 230, 0.95), transparent);
  
  .nav-left {
    display: flex; align-items: center; gap: 20px;
    
    .nav-btn {
      border: none; background: rgba(255,255,255,0.6); padding: 6px 16px; border-radius: 20px;
      font-size: 14px; font-weight: bold; cursor: pointer; transition: 0.2s;
      display: flex; align-items: center; gap: 6px;
      border: 1px solid rgba(0,0,0,0.05);
      &:hover { background: #fff; transform: translateY(-2px); box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
    }
    
    .vertical-divider { width: 1px; height: 16px; background: rgba(0,0,0,0.1); }
    
    .brand {
      .cn { font-family: 'Ma Shan Zheng', cursive; font-size: 24px; }
      .en { font-size: 12px; letter-spacing: 1px; opacity: 0.6; text-transform: uppercase; }
    }
  }
  
  .nav-right {
    display: flex; align-items: center; gap: 15px;
    .lang-switch {
      border: 1px solid $ink-black; border-radius: 20px; padding: 2px; cursor: pointer; display: flex;
      span { padding: 2px 8px; border-radius: 16px; font-size: 12px; transition: 0.3s; &.active { background: $ink-black; color: #fff; } }
    }
    .user-avatar img { width: 36px; height: 36px; border-radius: 50%; border: 2px solid $ink-black; cursor: pointer; }
  }
}

/* 2. 背景水墨 */
.ink-bg {
  position: absolute; inset: 0; z-index: 0; pointer-events: none;
  .smoke {
    position: absolute; width: 500px; height: 500px; background: radial-gradient(rgba(0,0,0,0.04), transparent 70%);
    border-radius: 50%; filter: blur(50px); animation: floatCloud 20s infinite linear;
  }
  .smoke-1 { top: -100px; left: 10%; }
  .smoke-2 { bottom: -100px; right: 20%; animation-duration: 30s; animation-direction: reverse; }
}
@keyframes floatCloud { 0% { transform: translate(0,0); } 50% { transform: translate(30px, 20px); } 100% { transform: translate(0,0); } }

/* 3. 滚动容器 */
.scroll-container { height: 100vh; display: flex; align-items: center; perspective: 1000px; }
.scroll-track {
  display: flex; align-items: center; padding-left: 8vw; gap: 40px;
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* 引导文字 (竖排) */
.intro-card {
  margin-right: 40px; margin-top: -50px;
  .vertical-text {
    writing-mode: vertical-rl; text-orientation: upright; letter-spacing: 4px;
    h1 { font-family: 'Ma Shan Zheng'; font-size: 60px; margin: 0; color: rgba(0,0,0,0.8); }
    p { font-size: 16px; color: #666; margin-right: 10px; border-right: 1px solid #ccc; padding-right: 10px; height: 120px; }
  }
  .scroll-tip { margin-top: 30px; font-size: 10px; color: #999; display: flex; align-items: center; gap: 5px; opacity: 0.6; }
}

/* 故事卡片 */
.story-card-3d {
  width: 300px; height: 480px; position: relative; flex-shrink: 0;
  cursor: pointer; transition: all 0.4s ease; transform-style: preserve-3d;
  &:hover { transform: translateY(-20px) rotateY(-3deg); }
  
  .card-visual {
    width: 100%; height: 100%; border-radius: 8px; overflow: hidden; position: relative;
    box-shadow: 10px 15px 30px rgba(0,0,0,0.1);
    img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; }
    .card-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.8)); }
    .ai-culture-tag {
      position: absolute; top: 15px; left: 15px; background: rgba(255,255,255,0.95);
      padding: 4px 10px; border-radius: 4px; font-size: 11px; font-weight: bold;
      color: $ink-black; box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
  }
  &:hover .card-visual img { transform: scale(1.05); }

  .card-info {
    position: absolute; bottom: 20px; left: 20px; right: 20px; color: #fff; z-index: 2;
    .title { font-size: 18px; font-weight: bold; margin-bottom: 12px; line-height: 1.4; text-shadow: 0 2px 4px rgba(0,0,0,0.5); }
    .meta { display: flex; justify-content: space-between; align-items: flex-end; }
    .author { font-size: 12px; opacity: 0.8; }
  }
}

/* 印章按钮 */
.seal-btn {
  width: 44px; height: 44px; cursor: pointer;
  .seal-mark {
    width: 100%; height: 100%; border: 2px solid rgba(255,255,255,0.8); border-radius: 4px;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Ma Shan Zheng'; color: #fff; font-size: 14px; transition: 0.3s;
    &.stamped {
      background: #fdfbf7; border-color: #fdfbf7; color: $seal-red;
      box-shadow: 0 0 15px rgba(255,255,255,0.5); transform: rotate(-12deg);
    }
  }
}

/* 尾部发布引导 */
.publish-card-end {
  width: 200px; height: 400px; display: flex; align-items: center; justify-content: center;
  margin-left: 20px; cursor: pointer;
  .dashed-box {
    border: 2px dashed #ccc; border-radius: 12px; padding: 40px 20px; text-align: center;
    color: #999; transition: 0.3s;
    &:hover { border-color: $ink-black; color: $ink-black; }
  }
}

/* 4. 底部进度 */
.progress-bar-wrapper {
  position: fixed; bottom: 30px; left: 40px; right: 40px; display: flex; align-items: center; gap: 20px; pointer-events: none;
  .progress-line { flex: 1; height: 2px; background: rgba(0,0,0,0.1); position: relative; overflow: hidden; }
  .progress-fill { height: 100%; background: $ink-black; transition: width 0.1s; }
  .location-indicator { font-size: 12px; font-weight: bold; min-width: 100px; text-align: right; }
}

/* 5. 悬浮提笔按钮 (Persistent FAB) */
.fixed-publish-btn {
  position: fixed; bottom: 40px; right: 40px; z-index: 200; cursor: pointer;
  .ink-btn {
    width: 64px; height: 64px; background: $ink-black; border-radius: 50%;
    color: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center;
    box-shadow: 0 8px 20px rgba(44, 44, 44, 0.4); transition: transform 0.2s;
    i { font-size: 20px; margin-bottom: 2px; }
    .btn-label { font-size: 10px; font-family: 'Ma Shan Zheng'; }
    &:hover { transform: scale(1.1); }
    &:active { transform: scale(0.95); }
  }
}

/* 6. 发布菜单 */
.publish-modal {
  position: fixed; inset: 0; background: rgba(244, 240, 230, 0.95); backdrop-filter: blur(10px); z-index: 300;
  display: flex; align-items: center; justify-content: center;
  .publish-content { text-align: center; width: 100%; max-width: 600px; position: relative; }
  .close-btn { position: absolute; top: -60px; right: 0; background: none; border: none; font-size: 30px; cursor: pointer; }
  h2 { font-family: 'Ma Shan Zheng'; font-size: 36px; margin-bottom: 50px; color: $ink-black; }
  .options-grid { display: flex; justify-content: center; gap: 40px; }
  .opt {
    display: flex; flex-direction: column; align-items: center; gap: 15px; cursor: pointer; transition: 0.3s;
    .icon-circle {
      width: 70px; height: 70px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
      color: #fff; font-size: 28px; box-shadow: 0 10px 20px rgba(0,0,0,0.1);
      &.ai-bg { background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%); }
      &.photo-bg { background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%); }
      &.write-bg { background: linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%); }
    }
    span { font-weight: bold; font-size: 14px; color: #555; }
    &:hover { transform: translateY(-10px); }
  }
}

/* Mobile Fix: 回退到垂直滚动 */
@media (max-width: 768px) {
  .culture-scroll-page { overflow-y: auto; height: auto; display: block; }
  .scroll-container { display: block; height: auto; }
  .scroll-track { display: flex; flex-direction: column; padding: 100px 20px; transform: none !important; gap: 30px; }
  
  .intro-card { margin: 0 0 30px; .vertical-text { writing-mode: horizontal-tb; text-align: center; p { border: none; height: auto; } } }
  .story-card-3d { width: 100%; height: auto; aspect-ratio: 3/4; &:hover { transform: none; } }
  .publish-card-end { display: none; } /* 手机端不需要最后的卡片，因为有悬浮按钮 */
  
  .floating-nav { background: rgba(244, 240, 230, 0.95); padding: 0 20px; }
  .fixed-publish-btn { bottom: 30px; right: 20px; .ink-btn { width: 56px; height: 56px; } }
  .progress-bar-wrapper { display: none; }
  
  .publish-modal .publish-content { background: #fff; border-radius: 20px 20px 0 0; padding: 30px 20px; position: fixed; bottom: 0; max-width: 100%; }
  .publish-modal .options-grid { gap: 20px; justify-content: space-around; }
  .publish-modal .close-btn { top: 15px; right: 15px; font-size: 24px; }
}
</style>