<template>
  <div class="badge-wall-page">
    
    <nav class="navbar fixed-top navbar-custom px-4">
      <div class="container-fluid">
        <a class="navbar-brand" @click.prevent="$router.push('/portal')" href="#">{{ $t('brand') }}</a>
        <div class="d-flex align-items-center gap-3">
          <button @click="$router.go(-1)" class="btn btn-outline-secondary btn-sm rounded-pill px-3">
            <i class="bi bi-arrow-left"></i> {{ $t('badge.nav_back') }}
          </button>
        </div>
      </div>
    </nav>

    <div class="wall-header">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-8">
            <h1 class="display-5 fw-bold mb-2">{{ $t('badge.header.title') }}</h1>
            <p class="text-muted lead">{{ $t('badge.header.subtitle') }}</p>
            <div class="progress mt-3" style="height: 10px; background: #e9ecef; border-radius: 10px;">
              <div class="progress-bar bg-gradient-gold" role="progressbar" :style="{ width: progressPercentage + '%' }"></div>
            </div>
            <div class="d-flex justify-content-between mt-2 small text-muted">
              <span>{{ $t('badge.header.unlocked') }}: <b class="text-dark">{{ unlockedCount }}</b> / {{ badges.length }}</span>
              <span>{{ $t('badge.header.percentile', { percent: 85 }) }}</span>
            </div>
          </div>
          <div class="col-md-4 text-center d-none d-md-block">
            <img src="https://api.dicebear.com/7.x/shapes/svg?seed=Trophy" class="trophy-img floating">
          </div>
        </div>
      </div>
    </div>

    <div class="container pb-5">
      
      <div class="filter-tabs mb-4">
        <button 
          v-for="tab in tabs" :key="tab.key"
          class="filter-btn" 
          :class="{ active: currentTab === tab.key }"
          @click="currentTab = tab.key"
        >
          {{ $t(`badge.tabs.${tab.key}`) }}
        </button>
      </div>

      <div class="row g-4">
        <transition-group name="list">
          <div class="col-6 col-md-4 col-lg-3" v-for="badge in filteredBadges" :key="badge.id">
            <div 
              class="badge-card" 
              :class="{ 'locked': !badge.unlocked, 'ssr-glow': badge.rarity === 'SSR' }"
              @click="openBadgeDetail(badge)"
            >
              <div class="rarity-tag" :class="badge.rarity">{{ badge.rarity }}</div>
              
              <div class="badge-icon-wrapper">
                <img :src="badge.icon" class="badge-img">
                <div class="lock-overlay" v-if="!badge.unlocked"><i class="bi bi-lock-fill"></i></div>
              </div>
              
              <div class="badge-info">
                <h6 class="badge-name">{{ badge.name }}</h6>
                <div class="badge-date">{{ badge.unlocked ? badge.date : $t('badge.status_locked') }}</div>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </div>

    <el-dialog v-model="showDetail" width="400px" align-center class="badge-dialog" :show-close="false">
      <div class="text-center position-relative" v-if="selectedBadge">
        
        <div class="dialog-light-effect" v-if="selectedBadge.unlocked"></div>
        
        <img :src="selectedBadge.icon" class="dialog-badge-img mb-3" :class="{ 'grayscale': !selectedBadge.unlocked }">
        
        <h3 class="fw-bold mb-1">{{ selectedBadge.name }}</h3>
        <span class="badge rounded-pill mb-3" :class="getBadgeColorClass(selectedBadge.rarity)">
          {{ selectedBadge.rarity }} {{ $t('badge.level_badge') }}
        </span>
        
        <p class="text-muted px-4">{{ selectedBadge.desc }}</p>
        
        <div class="achievement-meta mt-4 p-3 bg-light rounded-3 text-start">
          <div class="d-flex justify-content-between mb-2">
            <span class="small text-muted">{{ $t('badge.meta.condition') }}</span>
            <span class="small fw-bold">{{ selectedBadge.condition }}</span>
          </div>
          <div class="d-flex justify-content-between" v-if="selectedBadge.unlocked">
            <span class="small text-muted">{{ $t('badge.meta.unlocked_at') }}</span>
            <span class="small fw-bold text-primary">{{ selectedBadge.date }}</span>
          </div>
          <div class="d-flex justify-content-between" v-else>
            <span class="small text-muted">{{ $t('badge.meta.progress') }}</span>
            <span class="small fw-bold text-danger">{{ selectedBadge.progress }}</span>
          </div>
        </div>

        <button class="btn btn-dark rounded-pill w-100 mt-4 py-2" @click="showDetail = false">{{ $t('badge.btn_close') }}</button>
        <button v-if="selectedBadge.unlocked" class="btn btn-link text-muted btn-sm mt-2">
          <i class="bi bi-share"></i> {{ $t('badge.btn_share') }}
        </button>
      </div>
    </el-dialog>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const currentTab = ref('all')
const showDetail = ref(false)
const selectedBadge = ref(null)
const badges = ref([])

const tabs = [
  { key: 'all' },
  { key: 'unlocked' },
  { key: 'locked' },
  { key: 'ssr' }
]

// [Database] 模拟数据加载
const loadBadgeData = () => {
  const isEn = locale.value === 'en'
  
  badges.value = [
    { id: 1, name: isEn ? 'Early Pioneer' : '早期拓荒者', icon: 'https://api.dicebear.com/7.x/shapes/svg?seed=1', rarity: 'SSR', unlocked: true, date: '2025.12.01', desc: isEn ? 'Joined in the first month.' : '在言禾平台上线首月注册并完成首次任务。', condition: isEn ? '1st Month User' : '首月注册用户', progress: '100%' },
    { id: 2, name: isEn ? 'Perfect Attendance' : '全勤达人', icon: 'https://api.dicebear.com/7.x/shapes/svg?seed=2', rarity: 'SR', unlocked: true, date: '2026.01.15', desc: isEn ? 'Logged in for 30 consecutive days.' : '连续 30 天登录并进行有效学习。', condition: isEn ? '30 Days Streak' : '连续登录30天', progress: '100%' },
    { id: 3, name: isEn ? 'Cultural Ambassador' : '文化传播大使', icon: 'https://api.dicebear.com/7.x/shapes/svg?seed=3', rarity: 'SSR', unlocked: false, date: '', desc: isEn ? 'Reached 10k views on posts.' : '在社区发布的内容累计获得 10k 阅读量。', condition: isEn ? '10k Views' : '累计阅读 10k', progress: '3.5k / 10k' },
    { id: 4, name: isEn ? 'Dialect Guardian' : '方言守护者', icon: 'https://api.dicebear.com/7.x/shapes/svg?seed=4', rarity: 'R', unlocked: true, date: '2026.01.20', desc: isEn ? 'Contributed 5 dialect recordings.' : '为方言地图贡献 5 条有效语料录音。', condition: isEn ? '5 Recordings' : '贡献5条语料', progress: '100%' },
    { id: 5, name: isEn ? 'Vocab Master' : '单词收割机', icon: 'https://api.dicebear.com/7.x/shapes/svg?seed=5', rarity: 'N', unlocked: true, date: '2026.01.05', desc: isEn ? 'Learned 500 words.' : '累计背诵单词达到 500 个。', condition: isEn ? '500 Words' : '背词500个', progress: '100%' },
    { id: 6, name: isEn ? 'Gold Translator' : '金牌译员', icon: 'https://api.dicebear.com/7.x/shapes/svg?seed=6', rarity: 'SR', unlocked: false, date: '', desc: isEn ? 'Completed 10 enterprise tasks.' : '完成 10 个企业级翻译订单并获得好评。', condition: isEn ? '10 Tasks' : '完成10单', progress: '2 / 10' },
    { id: 7, name: isEn ? 'Socialite' : '社牛', icon: 'https://api.dicebear.com/7.x/shapes/svg?seed=7', rarity: 'N', unlocked: false, date: '', desc: isEn ? 'Followed 50 creators.' : '关注 50 位创作者。', condition: isEn ? 'Follow 50' : '关注50人', progress: '12 / 50' },
    { id: 8, name: isEn ? 'AI Tamer' : 'AI 驯化师', icon: 'https://api.dicebear.com/7.x/shapes/svg?seed=8', rarity: 'R', unlocked: true, date: '2026.01.28', desc: isEn ? 'Chatted with AI Master for 2 hours.' : '与 AI 夫子进行超过 2 小时的深度博弈。', condition: isEn ? 'AI Chat 2h' : 'AI对话2小时', progress: '100%' },
  ]
}

watch(locale, loadBadgeData)
onMounted(loadBadgeData)

const unlockedCount = computed(() => badges.value.filter(b => b.unlocked).length)
const progressPercentage = computed(() => (unlockedCount.value / badges.value.length) * 100)

const filteredBadges = computed(() => {
  if (currentTab.value === 'all') return badges.value
  if (currentTab.value === 'unlocked') return badges.value.filter(b => b.unlocked)
  if (currentTab.value === 'locked') return badges.value.filter(b => !b.unlocked)
  if (currentTab.value === 'ssr') return badges.value.filter(b => b.rarity === 'SSR')
  return badges.value
})

const openBadgeDetail = (badge) => {
  selectedBadge.value = badge
  showDetail.value = true
}

const getBadgeColorClass = (rarity) => {
  if (rarity === 'SSR') return 'bg-warning text-dark'
  if (rarity === 'SR') return 'bg-primary text-white'
  if (rarity === 'R') return 'bg-info text-white'
  return 'bg-secondary text-white'
}
</script>

<style scoped lang="scss">
$primary: #004aad;
$gold: #d4af37;

.badge-wall-page {
  min-height: 100vh;
  background: #f8faff;
  padding-top: 70px;
  font-family: -apple-system, "PingFang SC", sans-serif;
}

/* 导航 */
.navbar-custom { background: #fff; box-shadow: 0 1px 5px rgba(0,0,0,0.05); height: 70px; }
.navbar-brand { font-weight: 900; color: $primary !important; font-size: 1.4rem; }

/* 头部 */
.wall-header {
  background: #fff; padding: 40px 0; border-bottom: 1px solid #eee; margin-bottom: 30px;
  .bg-gradient-gold { background: linear-gradient(90deg, #ffd700, #ffaa00); }
}
.trophy-img { width: 180px; }
.floating { animation: float 3s ease-in-out infinite; }
@keyframes float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }

/* 筛选 */
.filter-tabs {
  display: flex; gap: 10px; justify-content: center;
  .filter-btn {
    border: none; background: #fff; padding: 8px 24px; border-radius: 20px; font-weight: 600; color: #666; transition: 0.2s;
    box-shadow: 0 2px 5px rgba(0,0,0,0.02);
    &.active { background: $primary; color: #fff; box-shadow: 0 4px 10px rgba(0, 74, 173, 0.3); }
    &:hover:not(.active) { background: #eee; }
  }
}

/* 勋章卡片 */
.badge-card {
  background: #fff; border-radius: 16px; padding: 20px; text-align: center;
  border: 2px solid transparent; transition: all 0.3s; cursor: pointer; position: relative; overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
  
  &:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.08); }
  
  /* SSR 特效 */
  &.ssr-glow { border-color: rgba(255, 215, 0, 0.3); box-shadow: 0 0 15px rgba(255, 215, 0, 0.1); }
  
  /* 锁定状态 */
  &.locked { 
    background: #f4f4f4; 
    .badge-img { filter: grayscale(100%); opacity: 0.3; }
    .badge-name { color: #999; }
    .badge-date { display: none; }
  }

  .rarity-tag {
    position: absolute; top: 10px; right: 10px; font-size: 10px; font-weight: 900; padding: 2px 6px; border-radius: 4px;
    &.SSR { background: #ffd700; color: #000; }
    &.SR { background: $primary; color: #fff; }
    &.R { background: #17a2b8; color: #fff; }
    &.N { background: #ccc; color: #fff; }
  }

  .badge-icon-wrapper {
    position: relative; width: 80px; height: 80px; margin: 10px auto 15px;
    .badge-img { width: 100%; height: 100%; object-fit: contain; }
    .lock-overlay { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 24px; color: #999; }
  }

  .badge-name { font-weight: bold; margin-bottom: 4px; }
  .badge-date { font-size: 11px; color: #999; }
}

/* 列表动画 */
.list-enter-active, .list-leave-active { transition: all 0.4s ease; }
.list-enter-from, .list-leave-to { opacity: 0; transform: translateY(20px); }

/* 详情弹窗 */
.dialog-badge-img { width: 120px; &.grayscale { filter: grayscale(100%); opacity: 0.5; } }
.dialog-light-effect {
  position: absolute; top: 20px; left: 50%; transform: translateX(-50%);
  width: 150px; height: 150px; background: radial-gradient(circle, rgba(255,215,0,0.4) 0%, transparent 70%);
  z-index: -1; animation: pulse 2s infinite;
}
@keyframes pulse { 0% { opacity: 0.5; transform: translateX(-50%) scale(0.8); } 50% { opacity: 1; transform: translateX(-50%) scale(1.1); } 100% { opacity: 0.5; transform: translateX(-50%) scale(0.8); } }
</style>