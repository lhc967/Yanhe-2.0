<template>
  <div class="service-page">
    
    <nav class="navbar navbar-expand-lg fixed-top custom-navbar">
      <div class="container-fluid px-4">
        <a class="navbar-brand" @click.prevent="go('/portal')" href="#">{{ $t('brand') }}</a>
        
        <button class="navbar-toggler border-0" @click="isMenuOpen = !isMenuOpen">
          <i class="bi bi-list fs-2 text-primary"></i>
        </button>

        <div class="collapse navbar-collapse" :class="{ 'show': isMenuOpen }">
          <ul class="navbar-nav mx-auto gap-1">
            <li class="nav-item"><a class="nav-link" @click.prevent="go('/portal')" href="#">{{ $t('nav.home') }}</a></li>
            <li class="nav-item"><a class="nav-link" @click.prevent="go('/story')" href="#">{{ $t('nav.story') }}</a></li>
            <li class="nav-item"><a class="nav-link" @click.prevent="go('/education')" href="#">{{ $t('nav.education') }}</a></li>
            <li class="nav-item"><a class="nav-link active" href="#">{{ $t('nav.service') }}</a></li>
            <li class="nav-item"><a class="nav-link" @click.prevent="go('/culture')" href="#">{{ $t('nav.map') }}</a></li>
          </ul>

          <div class="d-flex align-items-center gap-2 mt-3 mt-lg-0 ms-lg-4">
            
            <template v-if="!userStore.isLoggedIn">
              <button @click="go('/login')" class="btn btn-outline-primary rounded-pill btn-sm px-4 fw-bold">{{ $t('nav.login') }}</button>
            </template>
            
            <template v-else>
              <el-dropdown trigger="click" @command="handleCommand">
                <div class="user-profile-trigger d-flex align-items-center gap-2 cursor-pointer">
                  <el-avatar :size="36" :src="userStore.userInfo.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=User'" />
                  <span class="fw-bold text-dark small d-none d-lg-block">{{ userStore.userInfo.name }}</span>
                  <el-icon><CaretBottom /></el-icon>
                </div>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item command="profile">{{ $t('user.profile') }}</el-dropdown-item>
                    <el-dropdown-item command="orders">{{ $t('user.orders') }}</el-dropdown-item>
                    <el-dropdown-item command="logout" divided style="color: #dc3545;">
                      <el-icon><SwitchButton /></el-icon> {{ $t('user.logout') }}
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </template>

            <button class="btn btn-primary rounded-pill btn-sm fw-bold px-3 border-0 ms-2" @click="toggleLang">
              {{ currentLang === 'zh' ? 'English' : '中文' }}
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div class="service-hero">
      <div class="container">
        <div class="role-switch-container">
          <button class="role-btn" :class="{ active: currentRole === 'creator' }" @click="switchRole('creator')">{{ $t('service.role.creator') }}</button>
          <button class="role-btn" :class="{ active: currentRole === 'client' }" @click="switchRole('client')">{{ $t('service.role.client') }}</button>
        </div>

        <div class="search-box-custom">
          <input 
            type="text" 
            class="search-input" 
            v-model="searchText"
            @keyup.enter="handleSearch"
            :placeholder="currentRole === 'creator' ? $t('service.search.placeholder_creator') : $t('service.search.placeholder_client')"
          >
          <button class="btn btn-primary rounded-pill search-btn" @click="handleSearch">{{ $t('service.search.btn') }}</button>
        </div>
      </div>
    </div>

    <div class="container pb-5 mt-4">
      
      <transition name="fade" mode="out-in">
        <div v-if="currentRole === 'creator'" key="creator">
          <div class="row">
            <div class="col-lg-8">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h5 class="fw-bold m-0 text-dark"><i class="bi bi-briefcase-fill text-primary"></i> {{ $t('service.recommend_title') }}</h5>
                <div class="dropdown">
                  <button class="btn btn-light btn-sm rounded-pill border dropdown-toggle" type="button">{{ $t('service.sort_newest') }}</button>
                </div>
              </div>

              <div v-for="task in taskList" :key="task.id" class="task-card" @click="goToTaskDetail(task.id)">
                <div class="d-flex justify-content-between align-items-start">
                  <div>
                    <span class="badge mb-2" :class="task.badgeClass">{{ $t(`service.task_types.${task.typeKey}`) }}</span>
                    <h5 class="fw-bold mb-1">{{ task.title }}</h5>
                    <div class="text-muted small mb-2">{{ task.desc }}</div>
                  </div>
                  <div class="text-end">
                    <div class="price-tag">¥ {{ task.price }}</div>
                    <div class="small text-muted">{{ task.unit }}</div>
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-between mt-3 pt-3 border-top border-light">
                  <div class="d-flex align-items-center gap-2">
                    <img :src="task.avatar" class="rounded-circle" width="24">
                    <span class="small fw-bold text-secondary">{{ task.company }}</span>
                  </div>
                  
                  <div v-if="task.progress" class="d-flex align-items-center gap-2 small">
                    <div class="text-end">
                      <span class="text-success fw-bold">{{ $t('service.status.recruiting') }}</span>
                      <div class="text-muted" style="font-size:10px;">{{ $t('service.status.joined', { count: task.joined, total: task.total }) }}</div>
                    </div>
                    <div class="limit-bar-bg"><div class="limit-bar-fill" :style="{ width: (task.joined/task.total*100) + '%' }"></div></div>
                  </div>
                  <span v-else class="small text-danger fw-bold"><i class="bi bi-clock"></i> {{ task.deadline }}</span>
                </div>
              </div>

            </div>

            <div class="col-lg-4">
              <div class="sidebar-card text-center bg-primary text-white auth-card-gradient">
                <div class="mb-2"><i class="bi bi-mortarboard-fill fs-1"></i></div>
                <h6 class="fw-bold">{{ $t('service.auth_card.title') }}</h6>
                <p class="small opacity-75 mb-3">{{ $t('service.auth_card.desc') }}</p>
                <button class="btn btn-sm btn-light text-primary rounded-pill w-100 fw-bold" @click="$router.push('/user/certification')">{{ $t('service.auth_card.btn') }}</button>
              </div>

              <div class="sidebar-card">
                <h6 class="fw-bold mb-3">🏆 {{ $t('service.rank.title') }}</h6>
                <div v-for="(rank, idx) in rankList" :key="idx" class="rank-item">
                  <div class="d-flex align-items-center">
                    <div class="rank-num" :class="'rank-' + (idx+1)">{{ idx+1 }}</div>
                    <img :src="rank.avatar" class="rounded-circle me-2" width="30">
                    <span>{{ rank.name }}</span>
                  </div>
                  <span class="fw-bold text-danger">¥ {{ rank.income }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else key="client">
          <div class="row g-4 mb-5">
            <div class="col-md-6">
              <div class="client-action-card bg-primary bg-opacity-10" @click="publishTask">
                <div class="action-icon-lg bg-primary text-white shadow-sm"><i class="bi bi-pencil-square"></i></div>
                <h3 class="fw-bold text-primary">{{ $t('service.client.post_title') }}</h3>
                <p class="text-muted mt-3">
                  {{ $t('service.client.post_desc') }}<br>
                  <span class="badge bg-primary mt-2">{{ $t('service.client.tag_escrow') }}</span> <span class="badge bg-primary mt-2">{{ $t('service.client.tag_audit') }}</span>
                </p>
                <button class="btn btn-primary rounded-pill px-5 mt-3 fw-bold">{{ $t('service.client.btn_post') }}</button>
              </div>
            </div>
            <div class="col-md-6">
              <div class="client-action-card bg-warning bg-opacity-10" @click="openAiHelper">
                <div class="action-icon-lg bg-warning text-white shadow-sm"><i class="bi bi-robot"></i></div>
                <h3 class="fw-bold text-dark">{{ $t('service.client.ai_title') }}</h3>
                <p class="text-muted mt-3">
                  {{ $t('service.client.ai_desc') }}<br>
                  <span class="badge bg-warning text-dark mt-2">24h</span> <span class="badge bg-warning text-dark mt-2">{{ $t('service.client.tag_fast') }}</span>
                </p>
                <button class="btn btn-warning text-white rounded-pill px-5 mt-3 fw-bold">{{ $t('service.client.btn_ai') }}</button>
              </div>
            </div>
          </div>

          <div class="sidebar-card mx-auto" style="max-width: 800px;">
            <h5 class="fw-bold mb-3 text-center"><i class="bi bi-graph-up-arrow text-success"></i> {{ $t('service.market.title') }}</h5>
            <div class="market-list-scroll">
              <div v-for="(market, i) in marketData" :key="i" class="market-row">
                <span><span class="badge bg-light text-dark border me-2">{{ $t(`service.market.tags.${market.tagKey}`) }}</span> {{ market.title }}</span>
                <span class="fw-bold text-dark">{{ market.price }}</span>
              </div>
            </div>
            <p class="text-center text-muted small mt-3 mb-0">{{ $t('service.market.disclaimer') }}</p>
          </div>
        </div>
      </transition>

    </div>

    <div class="ai-float-btn">
      <button class="btn btn-primary rounded-circle shadow-lg d-flex align-items-center justify-content-center"
              style="width: 60px; height: 60px; font-size: 24px;"
              @click="openAiHelper">
        <i class="bi bi-robot"></i>
      </button>
    </div>

    <footer class="bg-dark text-white py-4 mt-auto text-center small">
        <div class="container">
            <p class="mb-1 fw-bold">{{ $t('footer.main') }}</p>
            <div class="text-white-50">{{ $t('footer.sub') }}</div>
        </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
import { CaretBottom, SwitchButton } from '@element-plus/icons-vue'

const { t, locale } = useI18n()
const router = useRouter()
const userStore = useUserStore()
const isMenuOpen = ref(false)
const searchText = ref('')
const currentRole = ref('creator')

const currentLang = computed(() => locale.value)
const toggleLang = () => {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
}

// [Database] Mock Data (语言相关)
const taskList = ref([])
const rankList = ref([])
const marketData = ref([])

const loadMockData = () => {
  const isEn = locale.value === 'en'
  
  taskList.value = [
    { id: 1, typeKey: 'business', title: isEn ? 'Legal Contract Translation' : '《国际商法》合同条款英译中', desc: isEn ? 'Legal background required.' : '需要有法律背景的同学，准确翻译术语。', price: 500, unit: isEn ? '/ 1k words' : '/ 千字', company: isEn ? 'AllBright Law' : '锦天城律师事务所', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Law', badgeClass: 'bg-danger bg-opacity-10 text-danger', progress: true, joined: 3, total: 5 },
    { id: 2, typeKey: 'dialect', title: isEn ? 'Suzhou Dialect Recording' : '录制 50 句苏州话日常用语', desc: isEn ? 'Native pronunciation required.' : '用于完善言禾语料库，要求发音地道。', price: 120, unit: isEn ? '/ set' : '/ 组', company: 'YanHe Official', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=YanHe', badgeClass: 'bg-warning bg-opacity-10 text-dark', progress: false, deadline: isEn ? 'Long-term' : '长期招募' },
    { id: 3, typeKey: 'urgent', title: isEn ? 'PS Editing for UK G5' : '留学文书 PS 深度润色', desc: isEn ? 'Need native British expression.' : '申请英国G5，需要地道的英式表达。', price: 300, unit: isEn ? 'Fixed' : '一口价', company: isEn ? 'Individual' : '个人雇主', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Stu', badgeClass: 'bg-dark text-white', progress: false, deadline: isEn ? '4h left' : '剩 4 小时截止' }
  ]

  rankList.value = [
    { name: isEn ? 'Jack (English)' : '英语系·张同学', income: '3,200', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jack' },
    { name: isEn ? 'Lily (German)' : '德语系·李同学', income: '1,850', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lily' },
    { name: isEn ? 'Mike (Russian)' : '俄语系·王同学', income: '980', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike' }
  ]

  marketData.value = [
    { tagKey: 'law', title: isEn ? 'Contract Trans (En-Zh)' : '合同翻译 (英译中)', price: isEn ? '¥ 180 - 260 / 1k' : '¥ 180 - 260 / 千字' },
    { tagKey: 'interpreting', title: isEn ? 'Escort (Japanese)' : '陪同翻译 (日语)', price: isEn ? '¥ 800 - 1500 / day' : '¥ 800 - 1500 / 天' },
    { tagKey: 'dubbing', title: isEn ? 'Dialect Recording' : '方言录音 (短句)', price: isEn ? '¥ 50 - 100 / set' : '¥ 50 - 100 / 组' },
    { tagKey: 'writing', title: isEn ? 'Essay Polishing' : '留学文书润色', price: isEn ? '¥ 300 - 800 / pc' : '¥ 300 - 800 / 篇' }
  ]
}

watch(locale, loadMockData, { immediate: true })

const switchRole = (role) => { currentRole.value = role }
const go = (path) => { router.push(path); isMenuOpen.value = false }

const handleSearch = () => {
  if (searchText.value.trim()) {
    router.push({ path: '/search', query: { q: searchText.value } })
  }
}

const goToTaskDetail = (id) => {
  // [API] 获取详情
  router.push({ path: '/service/detail', query: { id } })
}

const publishTask = () => {
  if(!userStore.isLoggedIn) {
    ElMessage.warning(t('login_warn'))
    router.push({ path: '/login', query: { redirect: '/service/publish' } }) 
  } else {
    router.push('/service/publish')
  }
}

const openAiHelper = () => {
  router.push('/service/ai')
}

const handleCommand = (command) => {
  if (command === 'logout') { userStore.logout(); ElMessage.success(t('user.logout_success')); router.push('/login'); }
  else if (command === 'profile') router.push('/user/profile')
  else if (command === 'orders') router.push('/user/profile')
}
</script>

<style scoped lang="scss">
$primary: #0052cc;
$accent: #ffab00;
$bg-light: #f4f5f7;

.service-page {
  font-family: 'Inter', sans-serif;
  padding-top: 76px;
  background: $bg-light;
  min-height: 100vh;
  display: flex; flex-direction: column;
}

/* 导航栏 */
.custom-navbar {
  background: rgba(255,255,255,0.95); backdrop-filter: blur(12px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.03); height: 76px;
}
.navbar-brand { font-weight: 900; font-size: 1.6rem; color: $primary; letter-spacing: -0.5px; }
.nav-link {
  font-weight: 600; color: #505f79 !important; padding: 8px 18px !important; border-radius: 30px; transition: 0.3s;
  &:hover { color: $primary !important; background: rgba(0, 82, 204, 0.06); }
  &.active { color: #fff !important; background: $primary; box-shadow: 0 4px 10px rgba(0, 82, 204, 0.3); }
}

/* Hero */
.service-hero { background: linear-gradient(180deg, #fff 0%, #ebecf0 100%); padding: 50px 0 30px; text-align: center; }
.role-switch-container {
  background: #dfe1e6; border-radius: 50px; padding: 5px; display: inline-flex; position: relative;
  box-shadow: inset 0 2px 6px rgba(0,0,0,0.05); margin-bottom: 30px;
}
.role-btn {
  padding: 12px 35px; border-radius: 40px; border: none; font-weight: bold; font-size: 0.95rem;
  background: transparent; color: #505f79; transition: 0.3s; cursor: pointer;
  &.active { background: $primary; color: #fff; box-shadow: 0 4px 12px rgba(0, 82, 204, 0.3); }
}

/* Search */
.search-box-custom {
  max-width: 600px; margin: 0 auto; background: #fff; border-radius: 50px; padding: 5px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05); border: 1px solid #dfe1e6; display: flex;
}
.search-input { border: none; flex: 1; padding: 12px 25px; border-radius: 50px; outline: none; font-size: 0.95rem; }
.search-btn { border-radius: 50px; padding: 8px 30px; font-weight: bold; }

/* Cards */
.task-card {
  background: #fff; border-radius: 8px; padding: 24px; margin-bottom: 20px; border: 1px solid #ebecf0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02); transition: 0.2s; cursor: pointer;
  &:hover { transform: translateY(-3px); box-shadow: 0 12px 24px rgba(0,0,0,0.08); border-color: $primary; }
}
.price-tag { color: #008da6; font-weight: 800; font-size: 1.2rem; }
.limit-bar-bg { height: 6px; background: #ebecf0; border-radius: 3px; overflow: hidden; width: 100px; margin-top: 5px; }
.limit-bar-fill { height: 100%; background: #36b37e; }

/* Sidebar */
.sidebar-card { background: #fff; border-radius: 8px; padding: 20px; margin-bottom: 20px; border: 1px solid #ebecf0; }
.auth-card-gradient { background: linear-gradient(135deg, $primary, $accent); border: none; }
.rank-item { display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px; font-size: 0.9rem; }
.rank-num {
  width: 24px; height: 24px; background: #ebecf0; color: #505f79; border-radius: 4px;
  text-align: center; line-height: 24px; font-size: 0.8rem; font-weight: bold; margin-right: 10px;
  &.rank-1 { background: #ffd700; color: #fff; }
  &.rank-2 { background: #c0c0c0; color: #fff; }
  &.rank-3 { background: #cd7f32; color: #fff; }
}

/* Client Actions */
.client-action-card {
  background: #fff; border-radius: 12px; padding: 40px; text-align: center; height: 100%;
  border: 1px solid #ebecf0; transition: 0.3s; cursor: pointer;
  &:hover { border-color: $primary; transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,82,204,0.1); }
}
.action-icon-lg { width: 80px; height: 80px; border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 40px; margin: 0 auto 20px; }

/* Market Rows */
.market-row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px dashed #eee; font-size: 0.9rem; color: #505f79; }

/* Float AI Btn */
.ai-float-btn { position: fixed; bottom: 30px; right: 30px; z-index: 1050; }

/* Transitions */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* Mobile */
@media (max-width: 991px) {
  .custom-navbar { height: auto; min-height: 76px; }
  .navbar-collapse {
    background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(20px);
    padding: 20px; border-radius: 16px; margin-top: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: 1px solid rgba(255,255,255,0.3);
  }
}
</style>