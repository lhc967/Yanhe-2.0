<template>
  <div class="education-page">
    
    <nav class="navbar navbar-expand-lg fixed-top custom-navbar">
      <div class="container-fluid px-4">
        <a class="navbar-brand" @click.prevent="go('/portal')" href="#">{{ $t('brand') }}</a>
        
        <button class="navbar-toggler border-0" @click="isMenuOpen = !isMenuOpen">
          <i class="bi bi-list fs-2 text-primary"></i>
        </button>

        <div class="collapse navbar-collapse" :class="{ 'show': isMenuOpen }" id="navContent">
          <ul class="navbar-nav mx-auto gap-1">
            <li class="nav-item"><a class="nav-link" @click.prevent="go('/portal')" href="#">{{ $t('nav.home') }}</a></li>
            <li class="nav-item"><a class="nav-link" @click.prevent="go('/story')" href="#">{{ $t('nav.story') }}</a></li>
            <li class="nav-item"><a class="nav-link active" href="#">{{ $t('nav.education') }}</a></li>
            <li class="nav-item"><a class="nav-link" @click.prevent="go('/service')" href="#">{{ $t('nav.service') }}</a></li>
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
                    <el-dropdown-item command="vip">
                      <span :class="userStore.isVip ? 'text-success' : 'text-warning'">
                        <i class="bi bi-gem"></i> {{ userStore.isVip ? $t('user.vip_active') : $t('user.vip_join') }}
                      </span>
                    </el-dropdown-item>
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

    <div class="container mt-4 pt-4">
      <div class="hero-interactive">
        <div class="ai-master-container">
          <div class="hologram-circle">
            <div class="inner-ring"></div>
            <img src="https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Master" class="ai-avatar">
          </div>
          <div class="ai-dialog">
            <h2 v-html="$t('education.hero.title')"></h2>
            <p v-html="$t('education.hero.desc')"></p>
            <div class="action-row">
              <button class="try-btn" @click="startAiDebate('business')">
                <i class="bi bi-briefcase"></i> {{ $t('education.hero.btn_business') }}
              </button>
              <button class="try-btn outline" @click="startAiDebate('history')">
                <i class="bi bi-hourglass-split"></i> {{ $t('education.hero.btn_history') }}
              </button>
            </div>
            <div v-if="!userStore.isVip" class="pro-tag">PRO Exclusive</div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-4">
      <div class="memory-dashboard">
        <div class="row align-items-center">
          <div class="col-lg-8 mb-3 mb-lg-0 text-white">
            <h2 class="fw-bold mb-2"><i class="bi bi-lightning-charge-fill text-warning"></i> {{ $t('education.memory.title') }}</h2>
            <p class="mb-0 opacity-75">
              {{ $t('education.memory.current_dict') }}: <strong class="text-white">{{ dictName }}</strong> ({{ wordCount }} / {{ totalWords }})<br>
              {{ $t('education.memory.forget_alert', { count: 12 }) }}
            </p>
          </div>
          <div class="col-lg-4">
            <div class="bg-white bg-opacity-10 p-3 rounded-3 border border-white border-opacity-20 backdrop-blur">
              <div class="d-flex justify-content-between text-sm mb-1 text-white">
                <span>{{ $t('education.memory.saturation') }}</span>
                <span class="fw-bold text-warning">{{ memoryPercent }}%</span>
              </div>
              <div class="brain-battery mb-2">
                <div class="battery-level" :style="{ width: memoryPercent + '%' }"></div>
              </div>
              <button @click="go('/review')" class="btn btn-sm btn-light text-primary fw-bold w-100 rounded-pill">
                <i class="bi bi-play-fill"></i> {{ $t('education.memory.review_now') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mb-4">
      <div class="row justify-content-center my-4">
        <div class="col-lg-8">
          <div class="input-group shadow-sm rounded-pill overflow-hidden border">
            <span class="input-group-text bg-white border-0 ps-3"><i class="bi bi-search text-muted"></i></span>
            <input 
              type="text" 
              v-model="searchText" 
              @keyup.enter="handleSearch"
              class="form-control border-0 bg-white py-2" 
              :placeholder="$t('education.search_placeholder')"
            >
            <button class="btn btn-primary px-4 fw-bold" @click="handleSearch">{{ $t('education.btn_search') }}</button>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center gap-2 flex-wrap mb-5">
        <span 
          v-for="tag in tags" 
          :key="tag"
          class="filter-tag" 
          :class="{ active: currentTag === tag }"
          @click="currentTag = tag"
        >
          {{ $t(`education.tags.${tag}`) }}
        </span>
      </div>

      <h5 class="fw-bold mb-4 border-start border-4 border-primary ps-3">
        {{ currentTag === 'all' ? $t('education.courses_title_all') : $t(`education.tags.${currentTag}`) + ' ' + $t('education.courses_suffix') }}
      </h5>

      <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        <div class="col" v-for="course in filteredCourses" :key="course.id">
          <div class="course-card" @click="handleCourseClick(course)">
            <div class="card-img-top">
              <img :src="course.image" class="w-100 h-100 object-fit-cover">
              <span class="source-badge" :class="course.badgeColor">
                <i :class="course.icon"></i> {{ $t(`education.course_source.${course.sourceKey}`) }}
              </span>
              <div v-if="course.isPaid && !userStore.isVip" class="price-tag-overlay">¥{{ course.priceNum }}</div>
            </div>
            <div class="course-body">
              <div class="course-title">{{ $t(`education.courses.${course.id}.title`) }}</div>
              <div class="course-meta">
                <div class="d-flex align-items-center">
                  <i class="bi bi-person-circle me-1 text-muted"></i>
                  <span>{{ course.teacher }}</span>
                </div>
                <span :class="course.priceClass">{{ course.isPaid ? '¥ ' + course.priceNum : $t('education.free') }}</span>
              </div>
              <div class="mt-2 pt-2 border-top border-light d-flex justify-content-between text-muted small">
                 <span>{{ $t(`education.tags.${course.tagKey}`) }}</span>
                 <span><i class="bi bi-people"></i> {{ course.learners }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mb-5">
      <div class="ethnic-section">
        <div class="section-header">
          <h2>{{ $t('education.ethnic.title') }}</h2>
          <p>{{ $t('education.ethnic.subtitle') }}</p>
        </div>
        <div class="ethnic-scroll">
          <div class="ethnic-card" v-for="item in ethnicCourses" :key="item.key">
            <div class="bg-pattern" :style="{ backgroundImage: `url(${item.pattern})` }"></div>
            <div class="content">
              <h3>{{ $t(`education.ethnic.items.${item.key}.lang`) }}</h3>
              <p>{{ $t(`education.ethnic.items.${item.key}.desc`) }}</p>
              <button class="learn-btn" @click="go('/culture/upload')">{{ $t('education.ethnic.btn_enter') }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div v-if="showVipModal" class="vip-modal-mask" @click.self="showVipModal = false">
        <div class="vip-panel">
          <div class="panel-head">
            <h3>{{ $t('education.vip_modal.title') }}</h3>
            <p>{{ $t('education.vip_modal.desc') }}</p>
          </div>
          <div class="benefit-grid">
            <div class="benefit"><i class="bi bi-robot"></i><span>{{ $t('education.vip_modal.ben_1') }}</span></div>
            <div class="benefit"><i class="bi bi-camera-video"></i><span>{{ $t('education.vip_modal.ben_2') }}</span></div>
            <div class="benefit"><i class="bi bi-translate"></i><span>{{ $t('education.vip_modal.ben_3') }}</span></div>
            <div class="benefit"><i class="bi bi-award"></i><span>{{ $t('education.vip_modal.ben_4') }}</span></div>
          </div>
          <button class="pay-btn" @click="handlePay">{{ $t('education.vip_modal.btn_pay') }}</button>
        </div>
      </div>
    </transition>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
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
const currentTag = ref('all') // 改用 key
const showVipModal = ref(false)

const dictName = ref('HSK 6')
const totalWords = ref(5000); const wordCount = ref(1205)
const memoryPercent = computed(() => Math.floor((wordCount.value / totalWords.value) * 100))

// 语言切换
const currentLang = computed(() => locale.value)
const toggleLang = () => {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
}

// 标签 Key 列表
const tags = ['all', 'hsk', 'business', 'culture', 'dialect', 'ethnic']

// 课程数据 (静态配置 + Key)
const allCourses = [
  { id: 'c1', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500', sourceKey: 'original', badgeColor: 'bg-primary', icon: 'bi-patch-check-fill', teacher: 'BSU Team', priceNum: 0, priceClass: 'text-success fw-bold', tagKey: 'hsk', learners: '1.2k', isPaid: false },
  { id: 'c2', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500', sourceKey: 'master', badgeColor: 'bg-warning text-dark', icon: 'bi-star-fill', teacher: 'Prof. Wang', priceNum: 99, priceClass: 'text-danger fw-bold', tagKey: 'business', learners: '800', isPaid: true },
  { id: 'c3', image: 'https://images.unsplash.com/photo-1523730205978-59fd1b2965e3?w=500', sourceKey: 'culture', badgeColor: 'bg-dark', icon: 'bi-globe', teacher: 'Li Jushi', priceNum: 0, priceClass: 'text-success', tagKey: 'culture', learners: '5k', isPaid: false },
  { id: 'c4', image: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=500', sourceKey: 'dialect', badgeColor: 'bg-danger', icon: 'bi-mic-fill', teacher: 'Chengdu Master', priceNum: 0, priceClass: 'text-success', tagKey: 'dialect', learners: '8k+', isPaid: false },
]

// 民族课程数据 (Key)
const ethnicCourses = [
  { key: 'tibetan', pattern: 'https://www.transparenttextures.com/patterns/black-scales.png' },
  { key: 'uyghur', pattern: 'https://www.transparenttextures.com/patterns/arabesque.png' },
  { key: 'zhuang', pattern: 'https://www.transparenttextures.com/patterns/bamboo.png' }
]

const filteredCourses = computed(() => {
  let list = allCourses
  if (currentTag.value !== 'all') list = list.filter(c => c.tagKey === currentTag.value)
  // 简单搜索 (仅演示，实际应搜翻译后的文本或后端搜索)
  if (searchText.value) list = list.filter(c => t(`education.courses.${c.id}.title`).includes(searchText.value))
  return list
})

const handleSearch = () => {
  if (searchText.value.trim()) {
    router.push({ path: '/search', query: { q: searchText.value } })
  }
}

const go = (path) => { router.push(path); isMenuOpen.value = false }

const handleCommand = (command) => {
  if (command === 'logout') { userStore.logout(); ElMessage.success(t('user.logout_success')); router.push('/login'); }
  else if (command === 'profile') router.push('/user/profile')
  else if (command === 'vip') router.push('/unlock-pro')
}

const startAiDebate = (topic) => {
  if (!userStore.isLoggedIn) { router.push('/login'); return }
  if (userStore.isVip) {
    router.push(`/education/ai?topic=${topic}`)
  } else {
    showVipModal.value = true
  }
}

const handleCourseClick = (course) => {
  if (course.isPaid && !userStore.isVip) {
    ElMessage.info(t('education.vip_required'))
    showVipModal.value = true
  } else {
    go('/course/' + course.id)
  }
}

const handlePay = () => { showVipModal.value = false; router.push('/unlock-pro') }
</script>

<style scoped lang="scss">
/* 保持你之前发我的完整 CSS 样式不变 */
$primary: #004aad; $gold: #d4af37; $bg-light: #f8faff;
.education-page { padding-top: 70px; background: $bg-light; min-height: 100vh; font-family: 'Helvetica Neue', 'PingFang SC', sans-serif; }
.custom-navbar { background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(12px); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03); height: 70px; }
.navbar-brand { font-weight: 900; font-size: 1.6rem; color: $primary; letter-spacing: -0.5px; }
.nav-link { font-weight: 600; color: #505f79 !important; padding: 8px 18px !important; border-radius: 30px; transition: 0.3s;
  &:hover { color: $primary !important; background: rgba(0, 74, 173, 0.06); }
  &.active { color: #fff !important; background: $primary; box-shadow: 0 4px 10px rgba(0, 74, 173, 0.3); }
}
.hero-interactive { background: #0f172a; border-radius: 20px; padding: 30px; color: #fff; position: relative; overflow: hidden; background-image: url('https://www.transparenttextures.com/patterns/cubes.png');
  .ai-master-container { display: flex; align-items: center; gap: 30px; position: relative; z-index: 2;
    .hologram-circle { width: 100px; height: 100px; position: relative; display: flex; align-items: center; justify-content: center;
      .inner-ring { position: absolute; inset: 0; border: 2px solid $primary; border-radius: 50%; animation: spin 10s linear infinite; border-left-color: transparent; }
      .ai-avatar { width: 70px; height: 70px; border-radius: 50%; box-shadow: 0 0 20px $primary; }
    }
    .ai-dialog { h2 { font-size: 24px; margin-bottom: 8px; font-family: 'Noto Serif SC', serif; } p { color: rgba(255,255,255,0.7); margin-bottom: 20px; font-size: 14px; }
      .action-row { display: flex; gap: 10px;
        .try-btn { padding: 8px 20px; border-radius: 8px; font-weight: bold; border: none; cursor: pointer; display: flex; align-items: center; gap: 6px; font-size: 12px; background: $primary; color: #fff; transition: 0.2s;
          &.outline { background: transparent; border: 1px solid rgba(255,255,255,0.3); color: #fff; &:hover { border-color: #fff; } }
          &:hover { transform: scale(1.05); }
        }
      }
      .pro-tag { position: absolute; top: 0; right: 0; background: $gold; color: #000; font-size: 10px; font-weight: bold; padding: 4px 8px; border-radius: 0 0 0 8px; }
    }
  }
}
@keyframes spin { 100% { transform: rotate(360deg); } }
.memory-dashboard { background: linear-gradient(135deg, #003366 0%, #004aad 100%); padding: 25px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0, 74, 173, 0.15); }
.brain-battery { background: rgba(255,255,255,0.2); border-radius: 10px; padding: 3px; height: 16px; overflow: hidden; .battery-level { height: 100%; background: #ffc107; border-radius: 8px; transition: width 1s ease-in-out; } }
.filter-tag { font-size: 13px; padding: 6px 16px; border-radius: 20px; cursor: pointer; color: #666; background: #fff; border: 1px solid #eee; transition: 0.2s;
  &:hover { color: $primary; border-color: $primary; }
  &.active { background: $primary; color: #fff; border-color: $primary; }
}
.course-card { background: #fff; border-radius: 12px; overflow: hidden; cursor: pointer; box-shadow: 0 2px 10px rgba(0,0,0,0.03); transition: transform 0.2s; border: 1px solid #eee;
  &:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.08); }
  .card-img-top { height: 160px; position: relative; }
  .source-badge { position: absolute; top: 10px; left: 10px; font-size: 10px; color: #fff; padding: 2px 8px; border-radius: 4px; backdrop-filter: blur(4px); }
  .price-tag-overlay { position: absolute; bottom: 10px; right: 10px; background: #fff; color: #d32f2f; font-weight: bold; padding: 2px 8px; border-radius: 20px; font-size: 12px; box-shadow: 0 2px 5px rgba(0,0,0,0.2); }
  .course-body { padding: 15px; .course-title { font-weight: bold; font-size: 15px; margin-bottom: 8px; height: 42px; overflow: hidden; }
    .course-meta { display: flex; justify-content: space-between; font-size: 12px; color: #666; }
  }
}
.ethnic-section { background: #fff; padding: 30px; border-radius: 16px; border: 1px solid #eee; margin-top: 40px;
  .section-header { text-align: center; margin-bottom: 20px; h2 { font-size: 22px; font-weight: bold; margin-bottom: 5px; } p { color: #999; font-size: 12px; letter-spacing: 2px; } }
  .ethnic-scroll { display: flex; gap: 20px; overflow-x: auto; padding-bottom: 10px;
    .ethnic-card { min-width: 260px; height: 140px; border-radius: 12px; position: relative; overflow: hidden; cursor: pointer; transition: 0.3s; border: 1px solid #eee;
      &:hover { transform: translateY(-3px); box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
      .bg-pattern { position: absolute; inset: 0; opacity: 0.1; background-size: 80px; }
      .content { position: relative; z-index: 1; padding: 20px; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;
        h3 { font-weight: bold; margin-bottom: 5px; color: #333; } p { font-size: 12px; color: #666; margin-bottom: 10px; }
        .learn-btn { border: 1px solid #333; background: transparent; padding: 4px 12px; font-size: 11px; border-radius: 20px; transition: 0.2s; &:hover { background: #333; color: #fff; } }
      }
    }
  }
}
.vip-modal-mask { position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 999; display: flex; align-items: center; justify-content: center;
  .vip-panel { width: 340px; background: #fff; border-radius: 20px; padding: 30px; text-align: center; position: relative; overflow: hidden;
    &::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 5px; background: linear-gradient(90deg, #d4af37, #f1c40f); }
    .panel-head { h3 { font-size: 22px; font-weight: 900; margin-bottom: 5px; } p { color: $gold; font-size: 12px; letter-spacing: 2px; } }
    .benefit-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 25px 0; .benefit { display: flex; flex-direction: column; align-items: center; gap: 5px; color: #555; font-size: 12px; i { font-size: 20px; color: $primary; background: rgba(0, 74, 173, 0.1); width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; } } }
    .pay-btn { width: 100%; background: linear-gradient(135deg, #111, #333); color: $gold; border: none; padding: 10px; border-radius: 8px; font-weight: bold; cursor: pointer; &:hover { opacity: 0.9; } }
  }
}
</style>