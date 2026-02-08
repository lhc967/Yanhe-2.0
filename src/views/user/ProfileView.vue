<template>
  <div class="profile-page">
    
    <nav class="navbar fixed-top navbar-custom px-4">
      <div class="container-fluid">
        <a class="navbar-brand" @click.prevent="$router.push('/portal')" href="#">{{ $t('brand') }}</a>
        
        <div class="navbar-nav-scroll">
          <ul class="navbar-nav flex-row gap-4">
            <li class="nav-item"><a class="nav-link" @click.prevent="$router.push('/education')" href="#">{{ $t('nav.education') }}</a></li>
            <li class="nav-item"><a class="nav-link" @click.prevent="$router.push('/service')" href="#">{{ $t('nav.service') }}</a></li>
            <li class="nav-item"><a class="nav-link" @click.prevent="$router.push('/story')" href="#">{{ $t('nav.story') }}</a></li>
            <li class="nav-item"><a class="nav-link" @click.prevent="$router.push('/culture')" href="#">{{ $t('nav.map') }}</a></li>
          </ul>
        </div>

        <div class="d-flex align-items-center gap-3 ms-auto">
          <div v-if="userStore.isVip" class="vip-status-badge">PRO</div>
          
          <el-dropdown trigger="click" @command="handleCommand">
            <div class="nav-avatar-container">
              <img :src="userStore.userInfo.avatar || defaultAvatar" class="nav-avatar">
              <div class="status-dot"></div>
            </div>
            <template #dropdown>
              <el-dropdown-menu class="custom-dropdown">
                <div class="px-3 py-2 border-bottom">
                  <div class="fw-bold text-dark">{{ userStore.userInfo.name || $t('profile.unnamed') }}</div>
                  <div class="small text-muted">ID: 8839201</div>
                </div>
                <el-dropdown-item command="edit" class="mt-1"><i class="bi bi-gear me-2"></i> {{ $t('profile.menu.edit') }}</el-dropdown-item>
                <el-dropdown-item command="badge"><i class="bi bi-trophy me-2"></i> {{ $t('profile.menu.badge') }}</el-dropdown-item>
                <el-dropdown-item command="vip" class="text-warning"><i class="bi bi-gem me-2"></i> {{ $t('profile.menu.vip') }}</el-dropdown-item>
                <el-dropdown-item command="lang"><i class="bi bi-translate me-2"></i> {{ currentLang === 'zh' ? 'English' : '中文' }}</el-dropdown-item>
                <el-dropdown-item divided command="logout" class="text-danger"><i class="bi bi-box-arrow-right me-2"></i> {{ $t('user.logout') }}</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </nav>

    <div class="profile-header-wrapper">
      <div class="banner-img" :style="{ backgroundImage: `url(${bannerImage})` }">
        <div class="banner-overlay"></div>
        <label class="btn-change-cover">
          <input type="file" accept="image/*" class="d-none" @change="handleBannerChange">
          <i class="bi bi-camera"></i> {{ $t('profile.header.edit_cover') }}
        </label>
      </div>
      
      <div class="container content-container">
        <div class="row">
          
          <div class="col-lg-3 col-md-4">
            <div class="profile-card shadow-sm">
              <div class="avatar-section">
                <div class="avatar-wrapper" @click="openEditModal">
                  <img :src="userStore.userInfo.avatar || defaultAvatar" class="big-avatar" :class="{ 'vip-border': userStore.isVip }">
                  <div class="avatar-overlay"><i class="bi bi-pencil-fill"></i></div>
                  <div v-if="userStore.isVip" class="vip-icon"><i class="bi bi-gem-fill"></i></div>
                </div>
              </div>
              
              <div class="info-section mt-3">
                <h4 class="user-name">
                  {{ userStore.userInfo.name || 'Felix' }}
                  <i class="bi bi-patch-check-fill text-primary ms-1 fs-6" :title="$t('profile.header.verified')"></i>
                </h4>
                <div class="user-bio text-muted small mb-3">
                  {{ userStore.userInfo.bio || $t('profile.header.no_bio') }}
                </div>

                <div class="tags-row mb-4">
                  <span class="skill-pill">🇬🇧 IELTS 8.0</span>
                  <span class="skill-pill">💻 Python</span>
                </div>

                <div class="d-grid gap-2">
                  <button class="btn btn-primary rounded-pill fw-bold" @click="openEditModal">{{ $t('profile.header.btn_edit') }}</button>
                  <button class="btn btn-outline-secondary rounded-pill fw-bold">{{ $t('profile.header.btn_share') }}</button>
                </div>
              </div>

              <div class="stats-row border-top mt-4 pt-3">
                <div class="stat-col">
                  <div class="num">128</div>
                  <div class="label">{{ $t('profile.stats.following') }}</div>
                </div>
                <div class="stat-col border-start border-end">
                  <div class="num">3.5k</div>
                  <div class="label">{{ $t('profile.stats.followers') }}</div>
                </div>
                <div class="stat-col">
                  <div class="num">58</div>
                  <div class="label">{{ $t('profile.stats.likes') }}</div>
                </div>
              </div>
            </div>

            <div class="sidebar-widget mt-4 shadow-sm bg-white rounded-4 p-4">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h6 class="fw-bold m-0"><i class="bi bi-trophy-fill text-warning"></i> {{ $t('profile.badges.title') }}</h6>
                <span class="small text-primary cursor-pointer" @click="$router.push('/user/badges')">{{ $t('profile.badges.all') }} ></span>
              </div>
              <div class="badges-grid">
                <el-tooltip v-for="(badge, idx) in badges" :key="idx" :content="badge.name" placement="top">
                  <div class="badge-item" :class="{ locked: !badge.unlocked }">
                    <div class="badge-icon" :style="{ backgroundColor: badge.bg }">
                      <i :class="badge.icon" :style="{ color: badge.color }"></i>
                    </div>
                  </div>
                </el-tooltip>
              </div>
            </div>
          </div>

          <div class="col-lg-9 col-md-8 ps-lg-4 mt-4 mt-md-0">
            <div class="content-tabs mb-4">
              <div class="tab-btn" :class="{ active: activeTab === 'overview' }" @click="activeTab = 'overview'">{{ $t('profile.tabs.overview') }}</div>
              <div class="tab-btn" :class="{ active: activeTab === 'learning' }" @click="activeTab = 'learning'">{{ $t('profile.tabs.learning') }}</div>
              <div class="tab-btn" :class="{ active: activeTab === 'posts' }" @click="activeTab = 'posts'">{{ $t('profile.tabs.posts') }}</div>
              <div class="tab-btn" :class="{ active: activeTab === 'collections' }" @click="activeTab = 'collections'">{{ $t('profile.tabs.collections') }}</div>
            </div>

            <transition name="fade" mode="out-in">
              
              <div v-if="activeTab === 'overview'" key="overview">
                <div class="section-card mb-4">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <h5 class="fw-bold m-0">{{ $t('profile.overview.heat_title') }}</h5>
                    <span class="small text-muted">{{ $t('profile.overview.heat_sub', { hours: 324 }) }}</span>
                  </div>
                  <div class="heatmap-wrapper">
                    <div class="heatmap-grid">
                      <div v-for="i in 364" :key="i" class="heat-dot" :class="getHeatClass(i)"></div>
                    </div>
                    <div class="heatmap-legend mt-2">
                      <span>Less</span>
                      <div class="heat-box l0"></div><div class="heat-box l1"></div><div class="heat-box l2"></div><div class="heat-box l3"></div><div class="heat-box l4"></div>
                      <span>More</span>
                    </div>
                  </div>
                </div>

                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="section-box h-100">
                      <h6 class="fw-bold mb-3">{{ $t('profile.overview.visitors') }}</h6>
                      <div class="d-flex gap-2">
                        <el-avatar v-for="i in 5" :key="i" :size="40" :src="`https://api.dicebear.com/7.x/avataaars/svg?seed=visitor${i}`" class="border" />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="section-box h-100 bg-primary text-white position-relative overflow-hidden">
                      <div class="position-relative z-1">
                        <h6 class="fw-bold">{{ $t('profile.overview.vip_title') }}</h6>
                        <p class="small opacity-75 mb-3">{{ userStore.isVip ? $t('profile.overview.vip_date') : $t('profile.overview.vip_desc') }}</p>
                        <button class="btn btn-sm btn-light text-primary fw-bold rounded-pill" @click="$router.push('/unlock-pro')">
                          {{ userStore.isVip ? $t('profile.overview.btn_renew') : $t('profile.overview.btn_unlock') }}
                        </button>
                      </div>
                      <i class="bi bi-gem position-absolute top-50 end-0 translate-middle-y me-n3 text-white opacity-25" style="font-size: 5rem;"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div v-else-if="activeTab === 'learning'" key="learning">
                <div v-for="(item, idx) in learningTasks" :key="idx" class="course-card d-flex align-items-center p-3 bg-white rounded-3 shadow-sm mb-3 border">
                  <img :src="item.img" class="rounded me-3" style="width:120px;height:80px;object-fit:cover;">
                  <div class="flex-grow-1">
                    <div class="d-flex justify-content-between mb-1">
                      <h6 class="fw-bold mb-0">{{ item.title }}</h6>
                      <span class="text-primary fw-bold small">{{ item.progress }}%</span>
                    </div>
                    <div class="progress" style="height: 6px;">
                      <div class="progress-bar" :style="{ width: item.progress + '%' }"></div>
                    </div>
                    <div class="mt-2 small text-muted">{{ $t('profile.learning.next') }}: {{ item.next }}</div>
                  </div>
                  <button class="btn btn-sm btn-primary rounded-pill ms-3 px-3">{{ $t('profile.learning.continue') }}</button>
                </div>
              </div>

              <div v-else-if="activeTab === 'posts'" key="posts">
                <div class="row g-3">
                  <div v-for="(post, idx) in myPosts" :key="idx" class="col-md-4">
                    <div class="card border-0 shadow-sm h-100 overflow-hidden post-card" @click="openPostModal(post)">
                      <img :src="post.cover" class="card-img-top" style="height:160px;object-fit:cover;">
                      <div class="card-body p-3">
                        <div class="fw-bold text-truncate mb-1">{{ post.title }}</div>
                        <div class="d-flex justify-content-between text-muted" style="font-size:11px;">
                          <span><i class="bi bi-eye"></i> {{ post.views }}</span>
                          <span>{{ $t('profile.posts.time_ago') }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div v-else-if="activeTab === 'collections'" key="collections">
                <div class="row g-3">
                  <div v-for="(col, index) in myCollections" :key="index" class="col-md-4">
                    <div class="card border-0 shadow-sm overflow-hidden h-100 collection-card">
                      <div class="d-flex" style="height:120px;">
                        <img :src="col.cover" class="w-75 h-100" style="object-fit:cover;">
                        <div class="w-25 bg-light d-flex flex-column border-start">
                          <div class="h-50 border-bottom"></div>
                          <div class="h-50"></div>
                        </div>
                      </div>
                      <div class="card-body p-3">
                        <div class="fw-bold text-truncate">{{ col.title }}</div>
                        <div class="d-flex justify-content-between text-muted mt-2" style="font-size:11px;">
                          <span>{{ col.count }} {{ $t('profile.collections.items') }}</span>
                          <i v-if="col.private" class="bi bi-lock-fill"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </transition>
          </div>

        </div>
      </div>
    </div>

    <el-dialog v-model="editDialogVisible" :title="$t('profile.modal.title')" width="450px" align-center>
      <div class="text-center mb-3">
        <el-avatar :size="80" :src="editForm.avatar" class="border" />
        <div class="mt-2"><button class="btn btn-sm btn-light rounded-pill" @click="randomizeAvatar">🎲 {{ $t('profile.modal.random_avatar') }}</button></div>
      </div>
      <el-form label-position="top">
        <el-form-item :label="$t('profile.modal.label_name')"><el-input v-model="editForm.name" /></el-form-item>
        <el-form-item :label="$t('profile.modal.label_bio')"><el-input v-model="editForm.bio" type="textarea" /></el-form-item>
      </el-form>
      <template #footer>
        <button class="btn btn-secondary me-2 rounded-pill" @click="editDialogVisible=false">{{ $t('profile.modal.cancel') }}</button>
        <button class="btn btn-primary rounded-pill px-4" @click="saveProfile">{{ $t('profile.modal.save') }}</button>
      </template>
    </el-dialog>

    <el-dialog v-model="postDialogVisible" width="500px" align-center>
      <div v-if="currentPost">
        <img :src="currentPost.cover" class="w-100 rounded mb-3">
        <h5>{{ currentPost.title }}</h5>
        <p class="text-muted small">{{ $t('profile.posts.demo_content') }}</p>
      </div>
    </el-dialog>

  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'

const { t, locale } = useI18n()
const router = useRouter()
const userStore = useUserStore()

const defaultAvatar = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'
const bannerImage = ref('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&q=80')
const activeTab = ref('overview')
const editDialogVisible = ref(false)
const postDialogVisible = ref(false)
const currentPost = ref(null)
const editForm = reactive({ name: '', bio: '', avatar: '' })

// 语言切换
const currentLang = computed(() => locale.value)
const toggleLang = () => {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
}

// 响应式数据 (支持 Mock 多语言)
const badges = ref([])
const learningTasks = ref([])
const myPosts = ref([])
const myCollections = ref([])

const loadMockData = () => {
  const isEn = locale.value === 'en'
  
  badges.value = [
    { name: isEn ? 'Early Contributor' : '早期贡献者', icon: 'bi-star-fill', bg: '#fff3cd', color: '#ffc107', unlocked: true },
    { name: isEn ? 'Perfect Attendance' : '全勤达人', icon: 'bi-lightning-fill', bg: '#e2e3e5', color: '#6c757d', unlocked: true },
    { name: isEn ? 'Master Translator' : '高阶译员', icon: 'bi-translate', bg: '#cff4fc', color: '#0dcaf0', unlocked: false },
    { name: isEn ? 'Culture Ambassador' : '文化大使', icon: 'bi-flower1', bg: '#f8d7da', color: '#dc3545', unlocked: false }
  ]

  learningTasks.value = [
    { title: isEn ? 'Business Chinese: Negotiation' : '商务汉语：高级谈判技巧', progress: 75, next: isEn ? 'Pricing Strategy' : '价格博弈策略', img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300' },
    { title: isEn ? 'Daily Vocab Plan' : '每日生词复习计划', progress: 30, next: isEn ? '12 Words Due' : '12个待复习单词', img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300' }
  ]

  myPosts.value = [
    { title: isEn ? 'Shanghai Yuyuan Garden 🏮' : '上海豫园灯会打卡 🏮', views: '12.5k', cover: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600' },
    { title: isEn ? 'Hotpot Challenge 🌶️' : '挑战最辣火锅 🌶️', views: '8.2k', cover: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=600' },
    { title: isEn ? 'Afternoon at Library' : '北外图书馆的午后', views: '3.1k', cover: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600' },
  ]

  myCollections.value = [
    { title: isEn ? 'Traditional Arch' : '中国传统建筑美学', count: 12, cover: 'https://images.unsplash.com/photo-1512641406448-6574e777bec6?w=600', private: false },
    { title: isEn ? 'Business Vocab' : '商务英语高频词', count: 85, cover: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600', private: true }
  ]
}

watch(locale, loadMockData)
onMounted(loadMockData)

const handleCommand = (cmd) => {
  if (cmd === 'logout') { userStore.logout(); router.push('/login') }
  else if (cmd === 'edit') openEditModal()
  else if (cmd === 'badge') router.push('/user/badges')
  else if (cmd === 'vip') router.push('/unlock-pro')
  else if (cmd === 'lang') toggleLang()
}

const handleBannerChange = (e) => {
  const file = e.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      bannerImage.value = e.target.result
      ElMessage.success(t('profile.msg_banner_success'))
    }
    reader.readAsDataURL(file)
  }
}

const openEditModal = () => {
  editForm.name = userStore.userInfo.name || ''
  editForm.bio = userStore.userInfo.bio || ''
  editForm.avatar = userStore.userInfo.avatar || defaultAvatar
  editDialogVisible.value = true
}

const randomizeAvatar = () => {
  const seeds = ['Felix', 'Max', 'Luna', 'Jack']
  editForm.avatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${seeds[Math.floor(Math.random()*seeds.length)]}`
}

const saveProfile = () => {
  userStore.userInfo.name = editForm.name
  userStore.userInfo.bio = editForm.bio
  userStore.userInfo.avatar = editForm.avatar
  localStorage.setItem('yanhe_user_info', JSON.stringify(userStore.userInfo))
  editDialogVisible.value = false
  ElMessage.success(t('profile.msg_save_success'))
}

const openPostModal = (post) => {
  currentPost.value = post
  postDialogVisible.value = true
}

const getHeatClass = (i) => {
  const r = Math.random() // 为了演示简单随机，实际应绑定数据
  if (r > 0.9) return 'l4'
  if (r > 0.6) return 'l2'
  return 'l0'
}
</script>

<style scoped lang="scss">
$primary: #004aad;
$gold: #d4af37;

.profile-page {
  background: #f4f6f8;
  min-height: 100vh;
  padding-top: 70px; /* 确保内容不被导航栏遮挡 */
}

/* 导航栏：固定、纯白、高层级 */
.navbar-custom { 
  background: #fff; 
  box-shadow: 0 2px 10px rgba(0,0,0,0.05); 
  height: 70px; 
  z-index: 9999;
}
.navbar-brand { font-weight: 900; color: $primary !important; font-size: 1.4rem; text-decoration: none; }
.nav-link { color: #555 !important; font-weight: 600; text-decoration: none; transition: 0.2s; &:hover { color: $primary !important; } }
.nav-avatar { width: 36px; height: 36px; border-radius: 50%; border: 1px solid #eee; cursor: pointer; }
.vip-status-badge { background: $gold; color: #fff; font-size: 10px; font-weight: 900; padding: 2px 6px; border-radius: 4px; box-shadow: 0 2px 5px rgba(212, 175, 55, 0.3); }
.status-dot { width: 8px; height: 8px; background: #28a745; border-radius: 50%; position: absolute; bottom: 0; right: 0; border: 1px solid #fff; }

/* Banner */
.banner-img {
  height: 240px; background-size: cover; background-position: center; position: relative;
  z-index: 1;
  .banner-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.2); }
  
  .btn-change-cover {
    position: absolute; bottom: 20px; right: 20px;
    background: rgba(0,0,0,0.5); color: #fff; padding: 6px 15px; border-radius: 20px;
    font-size: 12px; cursor: pointer; backdrop-filter: blur(4px); transition: 0.2s;
    &:hover { background: rgba(0,0,0,0.7); }
  }
}

.content-container { margin-top: -80px; position: relative; z-index: 10; }

/* Profile Card */
.profile-card {
  background: #fff; border-radius: 16px; padding: 25px; text-align: center; border: 1px solid #f0f0f0;
  .avatar-wrapper {
    position: relative; width: 110px; height: 110px; margin: 0 auto; cursor: pointer;
    .big-avatar {
      width: 100%; height: 100%; border-radius: 50%; object-fit: cover;
      border: 4px solid #fff; background: #fff; transition: 0.3s;
      &.vip-border { border-color: $gold; box-shadow: 0 0 0 2px $gold; }
    }
    .avatar-overlay {
      position: absolute; inset: 0; border-radius: 50%; background: rgba(0,0,0,0.5);
      display: flex; align-items: center; justify-content: center; color: #fff; font-size: 1.5rem;
      opacity: 0; transition: 0.2s;
    }
    &:hover .avatar-overlay { opacity: 1; }
    .vip-icon {
      position: absolute; bottom: 5px; right: 5px; background: $gold; color: #fff;
      width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
      border: 2px solid #fff; font-size: 12px;
    }
  }
}

/* Badge Wall */
.badges-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;
  .badge-item {
    aspect-ratio: 1; display: flex; align-items: center; justify-content: center; cursor: pointer;
    .badge-icon {
      width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 18px; transition: 0.2s;
    }
    &.locked { opacity: 0.4; filter: grayscale(100%); }
    &:hover .badge-icon { transform: scale(1.1); box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
  }
}

/* Tabs */
.content-tabs {
  background: #fff; padding: 6px; border-radius: 12px; display: inline-flex; gap: 5px;
  .tab-btn {
    padding: 8px 24px; border-radius: 8px; font-weight: 600; color: #666; cursor: pointer; transition: 0.2s;
    &.active { background: $primary; color: #fff; }
  }
}

.section-card { background: #fff; border-radius: 16px; padding: 25px; border: 1px solid #f0f0f0; }
.section-box { background: #fff; border-radius: 12px; padding: 20px; border: 1px solid rgba(0,0,0,0.03); box-shadow: 0 2px 10px rgba(0,0,0,0.01); }

/* Heatmap */
.heatmap-grid { display: grid; grid-template-columns: repeat(52, 1fr); gap: 3px; overflow: hidden; }
.heat-dot { width: 100%; aspect-ratio: 1; border-radius: 2px; background: #ebedf0; }
.heat-dot.l2 { background: #9be9a8; }
.heat-dot.l4 { background: #30a14e; }
.heatmap-legend { display: flex; align-items: center; justify-content: flex-end; gap: 4px; font-size: 11px; color: #666; .heat-box { width: 10px; height: 10px; } }

/* Cards & Stats */
.skill-pill { background: #eff2f5; color: #555; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; margin: 0 4px; }
.stats-row { display: flex; justify-content: space-between; .stat-col { text-align: center; flex: 1; .num { font-weight: 800; font-size: 1.1rem; } .label { font-size: 0.75rem; color: #999; } } }
.post-card, .collection-card { transition: 0.2s; cursor: pointer; &:hover { transform: translateY(-3px); box-shadow: 0 5px 15px rgba(0,0,0,0.08) !important; } }

@media (max-width: 991px) {
  .banner-img { height: 180px; }
  .content-container { margin-top: -60px; }
}
</style>