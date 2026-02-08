<template>
  <div class="search-result-page">
    
    <nav class="navbar navbar-expand-lg fixed-top custom-navbar">
      <div class="container-fluid px-4">
        <a class="navbar-brand" @click.prevent="$router.push('/portal')" href="#">{{ $t('brand') }}</a>
        <div class="d-flex ms-auto align-items-center gap-3">
          <a class="nav-link text-muted" @click.prevent="$router.push('/portal')" href="#">{{ $t('search.nav_back') }}</a>
          <img :src="userStore.userInfo.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=User'" class="rounded-circle user-avatar">
        </div>
      </div>
    </nav>

    <div class="search-header">
      <div class="container">
        <div class="search-input-group">
          <i class="bi bi-search search-icon"></i>
          <input 
            type="text" 
            class="search-input" 
            v-model="keyword" 
            @keyup.enter="handleSearch"
            :placeholder="$t('search.placeholder')"
          >
        </div>
        <div class="filter-tabs">
          <div 
            v-for="tab in tabs" 
            :key="tab.value"
            class="filter-tab" 
            :class="{ active: currentTab === tab.value }"
            @click="currentTab = tab.value"
          >
            {{ $t(`search.tabs.${tab.value}`) }}
          </div>
        </div>
      </div>
    </div>

    <div class="container py-4 result-container">
      
      <p class="text-muted small mb-3" v-if="keyword">
        {{ $t('search.result_stat', { count: filteredResults.length, keyword: keyword }) }}
      </p>

      <div v-if="filteredResults.length === 0" class="text-center py-5 text-muted">
        <i class="bi bi-inbox fs-1 d-block mb-3 opacity-50"></i>
        {{ $t('search.empty.title') }}<br>
        <small>{{ $t('search.empty.tip') }}</small>
      </div>

      <transition-group name="list" tag="div">
        <div v-for="item in filteredResults" :key="item.id" class="result-card" @click="handleCardClick(item)">
          
          <div v-if="item.type === 'task'" class="d-flex justify-content-between align-items-start">
            <div>
              <span class="tag tag-task">{{ $t('search.tags.task') }}</span>
              <h5 class="fw-bold d-inline-block mb-1">{{ item.title }}</h5>
              <p class="text-muted small mb-2 mt-1">{{ item.desc }}</p>
              <div class="d-flex align-items-center gap-2">
                <img :src="item.avatar" class="rounded-circle" width="20">
                <span class="small text-secondary">{{ item.company }}</span>
              </div>
            </div>
            <div class="text-end" style="min-width: 100px;">
              <h5 class="fw-bold text-primary m-0">¥ {{ item.price }}</h5>
              <small class="text-muted">/ {{ item.unit }}</small>
            </div>
          </div>

          <div v-else-if="item.type === 'user'" class="d-flex align-items-center gap-3">
            <img :src="item.avatar" class="rounded-circle" width="60">
            <div class="flex-grow-1">
              <span class="tag tag-user">{{ $t('search.tags.user') }}</span>
              <h5 class="fw-bold d-inline-block mt-1 mb-1">{{ item.name }}</h5>
              <p class="text-muted small mb-0">{{ item.tags.join(' | ') }}</p>
              <div class="mt-2">
                <span v-for="skill in item.skills" :key="skill" class="badge bg-light text-dark border fw-normal me-1">
                  {{ skill }}
                </span>
              </div>
            </div>
            <button class="btn btn-outline-primary btn-sm rounded-pill px-4">{{ $t('search.btn_contact') }}</button>
          </div>

          <div v-else-if="item.type === 'course'" class="d-flex gap-3">
            <img :src="item.image" style="width:120px; height:80px; object-fit:cover; border-radius:8px;">
            <div>
              <span class="tag tag-course">{{ $t('search.tags.course') }}</span>
              <h6 class="fw-bold d-inline-block mt-1">{{ item.title }}</h6>
              <p class="text-muted small mb-0 mt-1">{{ item.desc }}</p>
              <div class="mt-2 small text-warning">
                <i class="bi bi-star-fill"></i> {{ item.rating }} {{ $t('search.score') }}
              </div>
            </div>
          </div>

        </div>
      </transition-group>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/store/user'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'

const { t, locale } = useI18n()
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const keyword = ref('')
const currentTab = ref('all')
const tabs = [
  { value: 'all' },
  { value: 'task' },
  { value: 'user' },
  { value: 'course' }
]

const database = ref([])

// [Database] 模拟数据库数据 (根据语言返回不同内容)
const loadMockData = () => {
  const isEn = locale.value === 'en'
  
  database.value = [
    // Task
    { id: 101, type: 'task', title: isEn ? 'Legal Contract Translation' : '法律合同条款英译中', desc: isEn ? 'Translate 5k words service agreement.' : '翻译一份5000字服务协议，要求法律背景。', company: isEn ? 'AllBright Law' : '锦天城律师事务所', price: 500, unit: isEn ? 'k words' : '千字', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Law' },
    { id: 102, type: 'task', title: isEn ? 'Expo Escort Interpretation' : '商务会议陪同翻译', desc: isEn ? 'CIIE escort needed, fluent oral English.' : '上海进博会展台陪同，需口语流利。', company: isEn ? 'Global Trade Co.' : '某外贸公司', price: 800, unit: isEn ? 'day' : '天', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Trade' },
    
    // User
    { id: 201, type: 'user', name: isEn ? 'Jack Zhang' : '张杰', tags: isEn ? ['CATTI L2', 'BSU English'] : ['CATTI二级笔译', '北体大英语'], skills: isEn ? ['Legal', 'Finance'] : ['法律翻译', '金融'], avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jack' },
    { id: 202, type: 'user', name: 'Sherry Li', tags: isEn ? ['TEM-8', 'Fudan Master'] : ['专八优秀', '复旦研究生'], skills: isEn ? ['Literature', 'Subtitling'] : ['文学翻译', '字幕组'], avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Snow' },

    // Course
    { id: 301, type: 'course', title: isEn ? 'Business Chinese: Adv. Translation' : '商务汉语：高级翻译技巧', desc: isEn ? 'Master core rules of business docs.' : '掌握商业文件翻译核心准则。', rating: 4.9, image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200' },
    { id: 302, type: 'course', title: isEn ? 'Legal English Guide' : '法律英语入门指南', desc: isEn ? 'Common terms in contract translation.' : '合同翻译中的常用术语解析。', rating: 4.8, image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=200' }
  ]
}

// 监听语言变化，重新加载数据
watch(locale, () => {
  loadMockData()
})

const filteredResults = computed(() => {
  const k = keyword.value.trim().toLowerCase()
  if (!k) return []

  let results = database.value.filter(item => {
    const str = JSON.stringify(item).toLowerCase()
    return str.includes(k)
  })

  if (currentTab.value !== 'all') {
    results = results.filter(item => item.type === currentTab.value)
  }

  return results
})

const handleSearch = () => {
  // [API] 调用后端搜索接口
  // axios.get('/api/search', { params: { q: keyword.value } })
  console.log('Searching for:', keyword.value)
}

const handleCardClick = (item) => {
  if (item.type === 'task') {
    router.push({ path: '/checkout', query: { type: 'task' } })
  } else if (item.type === 'course') {
    router.push({ path: '/checkout', query: { type: 'course' } })
  } else {
    ElMessage.success(t('search.msg_contact', { name: item.name }))
  }
}

onMounted(() => {
  loadMockData()
  if (route.query.q) {
    keyword.value = route.query.q
  } else {
    keyword.value = t('search.default_keyword') // '翻译' or 'Translation'
  }
})
</script>

<style scoped lang="scss">
$primary: #004aad;
$bg-light: #f8faff;

.search-result-page {
  font-family: -apple-system, "PingFang SC", sans-serif;
  background: $bg-light;
  
  /* 🔥 核心修复：增加顶部内边距，抵消 fixed 导航栏的高度 */
  padding-top: 85px; 
  min-height: 100vh;
}

/* 导航 (Fixed) */
.custom-navbar {
  background: rgba(255,255,255,0.95); backdrop-filter: blur(12px);
  box-shadow: 0 2px 15px rgba(0,0,0,0.03); height: 70px;
  /* 确保导航栏在最上层 */
  z-index: 1000; 
}
.navbar-brand { font-weight: 900; color: $primary; letter-spacing: 1px; text-decoration: none; }
.user-avatar { width: 40px; height: 40px; object-fit: cover; border: 2px solid $primary; padding: 2px; }

/* 搜索头部 (Sticky 吸顶) */
.search-header {
  background: #fff; padding: 20px 0; border-bottom: 1px solid #eee;
  
  /* 🔥 核心修复：sticky 的 top 值必须 >= 导航栏高度 (70px) */
  position: sticky;
  top: 70px; 
  z-index: 900; /* 比导航栏低一层 */
}

.search-input-group { max-width: 700px; margin: 0 auto; position: relative; }
.search-input {
  border-radius: 50px; padding: 12px 20px 12px 45px; border: 1px solid #ddd; width: 100%;
  outline: none; transition: 0.3s; background: #f9f9f9;
  &:focus { border-color: $primary; background: #fff; box-shadow: 0 0 0 4px rgba(0, 74, 173, 0.1); }
}
.search-icon { position: absolute; left: 15px; top: 14px; color: #999; }

/* 筛选 Tabs */
.filter-tabs { display: flex; gap: 10px; margin-top: 20px; justify-content: center; }
.filter-tab {
  padding: 6px 20px; border-radius: 20px; background: #f1f3f5; color: #666;
  font-weight: 600; font-size: 14px; cursor: pointer; transition: 0.2s;
  &:hover { background: #e9ecef; }
  &.active { background: $primary; color: #fff; }
}

/* 结果容器 */
.result-container { max-width: 800px; margin-top: 20px; }

/* 结果卡片 */
.result-card {
  background: #fff; border-radius: 12px; padding: 20px; margin-bottom: 15px;
  border: 1px solid rgba(0,0,0,0.03); transition: 0.2s; cursor: pointer;
  &:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-color: $primary; }
}

.tag { font-size: 12px; padding: 3px 8px; border-radius: 4px; font-weight: 700; margin-right: 5px; vertical-align: text-bottom; }
.tag-task { background: #e3fcef; color: #006644; }
.tag-user { background: #e3f2fd; color: #004aad; }
.tag-course { background: #fff0f0; color: #dc3545; }

/* 列表过渡动画 */
.list-enter-active, .list-leave-active { transition: all 0.4s ease; }
.list-enter-from, .list-leave-to { opacity: 0; transform: translateY(20px); }
</style>