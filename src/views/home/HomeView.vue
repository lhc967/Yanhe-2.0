<template>
  <div class="home-entry" :class="{ 'transitioning': isTransitioning }">
    
    <div class="flag-bg-layer" :style="flagBgStyle"></div>

    <header class="header">
      <div class="brand-logo">言禾 YanHe</div>
      <div class="header-right">
        <span class="info-item">
          <el-icon><Trophy /></el-icon> 2026 Challenge Cup
        </span>
        <span class="info-item desktop-only">
          <el-icon><Connection /></el-icon> Global Portal
        </span>
      </div>
    </header>

    <main class="main-content">
      <div class="bg-watermark">BRIDGE THE WORLD</div>

      <h1 class="hero-title">连接世界，共享中文</h1>
      <p class="hero-subtitle">请选择您的母语 / Select Your Language</p>

      <transition-group name="list" tag="div" class="lang-grid">
        
        <div 
          v-for="item in displayedLanguages" 
          :key="item.code"
          class="lang-card"
          :class="{ 'active': selectedLang === item.code }"
          :style="{ '--hover-color': item.color }"
          @click="handleEnterSystem(item)"
          @mouseenter="handleHover(item.bg)"
          @mouseleave="handleHover('')"
        >
          <div class="card-inner-bg" :style="{ backgroundImage: `url(${item.bg})` }"></div>
          <div class="card-border"></div>
          
          <div class="content-wrapper">
            <div class="flag-emoji">{{ item.flag }}</div>
            <div class="lang-name">{{ item.name }}</div>
            <div class="greeting">{{ item.greeting }}</div>
          </div>
        </div>

        <div v-if="!isExpanded" key="more" class="lang-card more-card" @click="toggleExpand(true)">
          <div class="content-wrapper">
            <div class="flag-emoji action-icon"><el-icon><MoreFilled /></el-icon></div>
            <div class="lang-name">更多语言</div>
            <div class="greeting">More</div>
          </div>
        </div>

        <div v-if="isExpanded" key="collapse" class="lang-card more-card" @click="toggleExpand(false)">
          <div class="content-wrapper">
            <div class="flag-emoji action-icon"><el-icon><ArrowUpBold /></el-icon></div>
            <div class="lang-name">收起列表</div>
            <div class="greeting">Collapse</div>
          </div>
        </div>

      </transition-group>
    </main>

    <footer class="footer">
      <div class="partner-logos">
        <span title="教育部"><el-icon><School /></el-icon> Ministry of Education</span>
        <span title="孔子学院"><el-icon><Reading /></el-icon> Confucius Institute</span>
        <span title="UNESCO"><el-icon><Place /></el-icon> UNESCO</span>
      </div>
      <div class="copyright">
        © 2026 YanHe International Education Platform. All Rights Reserved.
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
import { Trophy, Connection, School, Reading, Place, MoreFilled, ArrowUpBold } from '@element-plus/icons-vue'

const router = useRouter()
const { locale } = useI18n()
const isTransitioning = ref(false)
const selectedLang = ref(null)
const currentBgImg = ref('')
const isExpanded = ref(false)

// ---------------------------------------------------------
// 🌍 完整 24 种语言配置
// ---------------------------------------------------------
const allLanguages = [
  // --- 核心 TOP 5 (默认显示) ---
  { code: 'zh', flag: '🇨🇳', name: '中文 (简体)', greeting: '" 你好 "', color: '#ff4d4f', bg: 'https://flagcdn.com/w2560/cn.png' },
  { code: 'en', flag: '🇺🇸', name: 'English', greeting: '" Hello "', color: '#1890ff', bg: 'https://flagcdn.com/w2560/us.png' },
  { code: 'jp', flag: '🇯🇵', name: '日本語', greeting: '" こんにちは "', color: '#f5222d', bg: 'https://flagcdn.com/w2560/jp.png' },
  { code: 'kr', flag: '🇰🇷', name: '한국어', greeting: '" 안녕하세요 "', color: '#2f54eb', bg: 'https://flagcdn.com/w2560/kr.png' },
  { code: 'fr', flag: '🇫🇷', name: 'Français', greeting: '" Bonjour "', color: '#531dab', bg: 'https://flagcdn.com/w2560/fr.png' },

  // --- 拓展语言 (点击 More 显示) ---
  { code: 'de', flag: '🇩🇪', name: 'Deutsch', greeting: '" Hallo "', color: '#d48806', bg: 'https://flagcdn.com/w2560/de.png' },
  { code: 'ru', flag: '🇷🇺', name: 'Русский', greeting: '" Привет "', color: '#13c2c2', bg: 'https://flagcdn.com/w2560/ru.png' },
  { code: 'es', flag: '🇪🇸', name: 'Español', greeting: '" Hola "', color: '#fa8c16', bg: 'https://flagcdn.com/w2560/es.png' },
  
  // 新增语言包
  { code: 'ar', flag: '🇸🇦', name: 'العربية', greeting: '" مرحباً "', color: '#006c35', bg: 'https://flagcdn.com/w2560/sa.png' },
  { code: 'it', flag: '🇮🇹', name: 'Italiano', greeting: '" Ciao "', color: '#009246', bg: 'https://flagcdn.com/w2560/it.png' },
  { code: 'pt', flag: '🇵🇹', name: 'Português', greeting: '" Olá "', color: '#ff0000', bg: 'https://flagcdn.com/w2560/pt.png' },
  { code: 'th', flag: '🇹🇭', name: 'ไทย', greeting: '" สวัสดี "', color: '#241d4f', bg: 'https://flagcdn.com/w2560/th.png' },
  { code: 'vn', flag: '🇻🇳', name: 'Tiếng Việt', greeting: '" Xin chào "', color: '#da251d', bg: 'https://flagcdn.com/w2560/vn.png' },
  { code: 'id', flag: '🇮🇩', name: 'Indonesia', greeting: '" Halo "', color: '#ff0000', bg: 'https://flagcdn.com/w2560/id.png' },
  { code: 'ms', flag: '🇲🇾', name: 'Melayu', greeting: '" Hai "', color: '#010066', bg: 'https://flagcdn.com/w2560/my.png' },
  { code: 'hi', flag: '🇮🇳', name: 'हिन्दी', greeting: '" नमस्ते "', color: '#ff9933', bg: 'https://flagcdn.com/w2560/in.png' },
  { code: 'tr', flag: '🇹🇷', name: 'Türkçe', greeting: '" Merhaba "', color: '#e30a17', bg: 'https://flagcdn.com/w2560/tr.png' },
  { code: 'ir', flag: '🇮🇷', name: 'فارسی', greeting: '" سلام "', color: '#239f40', bg: 'https://flagcdn.com/w2560/ir.png' },
  { code: 'pk', flag: '🇵🇰', name: 'اردو', greeting: '" سلام "', color: '#115740', bg: 'https://flagcdn.com/w2560/pk.png' },
  { code: 'pl', flag: '🇵🇱', name: 'Polski', greeting: '" Cześć "', color: '#dc143c', bg: 'https://flagcdn.com/w2560/pl.png' },
  { code: 'gr', flag: '🇬🇷', name: 'Ελληνικά', greeting: '" Γεια σας "', color: '#0d5eaf', bg: 'https://flagcdn.com/w2560/gr.png' },
  { code: 'nl', flag: '🇳🇱', name: 'Nederlands', greeting: '" Hallo "', color: '#ae1c28', bg: 'https://flagcdn.com/w2560/nl.png' },
  { code: 'sw', flag: '🇰🇪', name: 'Kiswahili', greeting: '" Hujambo "', color: '#000000', bg: 'https://flagcdn.com/w2560/ke.png' },
  { code: 'la', flag: '🇻🇦', name: 'Latina', greeting: '" Salve "', color: '#ffe000', bg: 'https://flagcdn.com/w2560/va.png' }, // 使用梵蒂冈旗帜代表拉丁语
]

// 计算显示的语言列表
const displayedLanguages = computed(() => {
  return isExpanded.value ? allLanguages : allLanguages.slice(0, 5)
})

const toggleExpand = (state) => isExpanded.value = state

// 背景样式计算
const flagBgStyle = computed(() => ({
  backgroundImage: currentBgImg.value ? `url(${currentBgImg.value})` : 'none',
  opacity: currentBgImg.value ? 0.15 : 0
}))

const handleHover = (bgUrl) => {
  if (isTransitioning.value) return
  currentBgImg.value = bgUrl
}

// 进入系统逻辑
const handleEnterSystem = (item) => {
  if (isTransitioning.value) return
  
  // 1. 设置 UI 状态
  selectedLang.value = item.code
  currentBgImg.value = item.bg
  isTransitioning.value = true

  // 2. 切换 i18n 语言
  locale.value = item.code 
  
  // 3. 针对 RTL 语言 (阿拉伯语、波斯语、乌尔都语) 设置排版
  if (['ar', 'ir', 'pk'].includes(item.code)) {
    document.body.setAttribute('dir', 'rtl')
    document.body.classList.add('rtl-mode')
  } else {
    document.body.removeAttribute('dir')
    document.body.classList.remove('rtl-mode')
  }

  // 4. 持久化存储
  localStorage.setItem('user_locale', item.code)

  // 5. 提示消息
  const welcomeMsg = item.code === 'zh' ? '欢迎进入言禾！' : `Welcome! Switching to ${item.name}...`
  ElMessage.success(welcomeMsg)

  // 6. 跳转
  setTimeout(() => {
    router.push('/portal')
  }, 1200)
}
</script>

<style scoped lang="scss">
$primary: #004aad;

.home-entry {
  font-family: -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif;
  min-height: 100vh;
  overflow-y: auto; overflow-x: hidden;
  position: relative;
  display: flex; flex-direction: column; justify-content: space-between;
  background: linear-gradient(-45deg, #eef4ff, #ffffff, #dbeafe, #f0f7ff);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; }
}

.flag-bg-layer {
  position: fixed; inset: 0; z-index: 0;
  background-size: cover; background-position: center;
  pointer-events: none; filter: grayscale(30%); transform: scale(1.1);
  transition: opacity 0.5s ease, transform 10s linear;
}

.home-entry.transitioning {
  .flag-bg-layer { transform: scale(1); opacity: 0.25 !important; } 
  .header, .main-content, .footer { opacity: 0; transform: scale(0.95); transition: 0.8s ease; }
}

.header {
  padding: 30px 50px; display: flex; justify-content: space-between; align-items: center; z-index: 10;
  .brand-logo {
    font-size: 1.8rem; font-weight: 900; letter-spacing: -0.5px;
    background: linear-gradient(135deg, #004aad 0%, #0078ff 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  .header-right { font-size: 14px; color: #666; font-weight: 500; display: flex; gap: 20px; .info-item { display: flex; align-items: center; gap: 5px; } }
}

.main-content {
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
  position: relative; z-index: 2; padding: 40px 20px;
  .bg-watermark {
    position: fixed; top: 10%; left: 50%; transform: translateX(-50%);
    font-size: 10rem; font-weight: 900; color: rgba(0, 74, 173, 0.03);
    white-space: nowrap; pointer-events: none; z-index: -1;
  }
}

.hero-title {
  font-size: 3.5rem; font-weight: 900; color: #111; margin: 0 0 10px 0; text-align: center;
  background: linear-gradient(to right, #004aad, #002a5c);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  animation: fadeInUp 0.8s ease forwards;
}
.hero-subtitle { font-size: 1.2rem; color: #666; margin: 0 0 50px 0; text-align: center; letter-spacing: 2px; animation: fadeInUp 0.8s ease forwards 0.2s; opacity: 0; }

.lang-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px;
  max-width: 900px; width: 100%;
}

.lang-card {
  position: relative; background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.8); border-radius: 20px; padding: 30px 20px;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  cursor: pointer; overflow: hidden; height: 180px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 4px 20px rgba(0, 74, 173, 0.05);

  .card-inner-bg {
    position: absolute; inset: 0; background-size: cover; background-position: center;
    opacity: 0.05; filter: grayscale(100%); transition: 0.4s; z-index: 0;
  }
  .content-wrapper { position: relative; z-index: 2; text-align: center; }
  
  .flag-emoji { 
    font-size: 3.5rem; margin-bottom: 12px; transition: 0.4s; 
    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
    font-family: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; 
  }
  
  .lang-name { font-size: 1.2rem; font-weight: 800; color: #333; margin-bottom: 4px; }
  .greeting { font-size: 0.9rem; color: #888; font-family: serif; font-style: italic; }

  &:hover {
    transform: translateY(-8px); background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 15px 30px rgba(0, 74, 173, 0.15); border-color: var(--hover-color);
    .card-inner-bg { opacity: 0.1; filter: grayscale(0%); transform: scale(1.1); }
    .flag-emoji { transform: scale(1.1) rotate(8deg); }
    .lang-name { color: var(--hover-color); }
  }
}

.more-card {
  border: 2px dashed rgba(0, 74, 173, 0.2); background: rgba(255,255,255,0.4);
  .action-icon { color: $primary; font-size: 3rem; margin-bottom: 10px; }
  &:hover { 
    border-color: $primary; border-style: solid; background: #fff;
    .action-icon { transform: scale(1.2); }
  }
}

.list-enter-active, .list-leave-active { transition: all 0.4s ease; }
.list-enter-from, .list-leave-to { opacity: 0; transform: translateY(30px); }
.list-move { transition: transform 0.4s ease; }

.footer {
  padding: 30px; text-align: center; font-size: 12px; color: #999; z-index: 10;
  .partner-logos {
    display: flex; gap: 30px; justify-content: center; margin-bottom: 15px; opacity: 0.6;
    span { display: flex; align-items: center; gap: 6px; cursor: help; transition: 0.2s; &:hover { opacity: 1; color: $primary; } }
  }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .hero-title { font-size: 2.2rem; }
  .lang-grid { grid-template-columns: repeat(2, 1fr); padding: 0 10px; }
  .header { padding: 20px; }
  .desktop-only { display: none; }
  .partner-logos { flex-wrap: wrap; gap: 15px; }
}
</style>