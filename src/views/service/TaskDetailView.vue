<template>
  <div class="service-detail-page">
    
    <nav class="navbar navbar-expand-lg fixed-top custom-navbar px-4">
      <div class="container-fluid">
        <a class="navbar-brand" @click.prevent="go('/portal')" href="#">{{ $t('brand') }}</a>
        
        <div class="collapse navbar-collapse d-none d-lg-block">
          <ul class="navbar-nav mx-auto d-flex flex-row gap-4">
            <li class="nav-item"><a class="nav-link" @click.prevent="go('/education')" href="#">{{ $t('nav.education') }}</a></li>
            <li class="nav-item"><a class="nav-link active" @click.prevent="go('/service')" href="#">{{ $t('nav.service') }}</a></li>
            <li class="nav-item"><a class="nav-link" @click.prevent="go('/story')" href="#">{{ $t('nav.story') }}</a></li>
            <li class="nav-item"><a class="nav-link" @click.prevent="go('/culture')" href="#">{{ $t('nav.map') }}</a></li>
          </ul>
        </div>

        <div class="d-flex align-items-center gap-3">
          <button @click="go('/service')" class="btn btn-outline-secondary btn-sm rounded-pill px-3">
            <i class="bi bi-arrow-left"></i> {{ $t('service_detail.nav_back') }}
          </button>
          
          <template v-if="userStore.isLoggedIn">
            <div class="d-flex align-items-center gap-2 border-start ps-3">
              <img :src="userStore.userInfo.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=User'" width="32" class="rounded-circle border">
              <span class="small fw-bold d-none d-md-block">{{ userStore.userInfo.name }}</span>
            </div>
          </template>
          <template v-else>
            <button @click="go('/login')" class="btn btn-primary btn-sm rounded-pill px-3">{{ $t('nav.login') }}</button>
          </template>
        </div>
      </div>
    </nav>

    <div class="sub-header">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="#" @click.prevent="go('/service')">{{ $t('nav.service') }}</a></li>
            <li class="breadcrumb-item text-muted">{{ $t('service_detail.breadcrumb_cat') }}</li>
            <li class="breadcrumb-item active fw-bold">{{ $t('service_detail.breadcrumb_current') }}</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="container main-content">
      <div class="row">

        <div class="col-lg-8">
          <div class="content-card mb-4">
            <div class="card-header-custom">
              <div class="d-flex align-items-start justify-content-between">
                <div>
                  <h1 class="job-title">{{ taskInfo.title }}</h1>
                  <div class="job-meta-row">
                    <span class="status-badge"><i class="bi bi-shield-lock-fill"></i> {{ $t('service_detail.meta.escrow') }}</span>
                    <span class="tag-urgent"><i class="bi bi-lightning-fill"></i> {{ $t('service_detail.meta.urgent') }}</span>
                    <span><i class="bi bi-clock"></i> {{ taskInfo.publishTime }}</span>
                    <span><i class="bi bi-eye"></i> {{ $t('service_detail.meta.views', { count: taskInfo.views }) }}</span>
                  </div>
                </div>
                <div class="d-none d-md-block text-end">
                  <div class="text-muted small mb-1">{{ $t('service_detail.meta.id_label') }}</div>
                  <div class="fw-bold font-monospace text-primary">T{{ taskInfo.id }}</div>
                </div>
              </div>
            </div>

            <div class="card-body-custom">
              <h4 class="section-heading">{{ $t('service_detail.section.background') }}</h4>
              <p class="text-body-lg">{{ taskInfo.background }}</p>
              <p class="text-body-lg">{{ taskInfo.requirement_desc }}</p>

              <h4 class="section-heading">{{ $t('service_detail.section.duties') }}</h4>
              <ul class="text-body-lg ps-3">
                <li v-for="(duty, idx) in taskInfo.duties" :key="idx">{{ duty }}</li>
              </ul>

              <h4 class="section-heading">{{ $t('service_detail.section.skills') }}</h4>
              <div class="mb-4">
                <span v-for="skill in taskInfo.skills" :key="skill" class="skill-tag">{{ skill }}</span>
              </div>

              <h4 class="section-heading">{{ $t('service_detail.section.questions') }}</h4>
              <div class="alert alert-light border small text-secondary">
                <ol class="mb-0 ps-3">
                  <li v-for="(q, idx) in taskInfo.questions" :key="idx">{{ q }}</li>
                </ol>
              </div>

              <h4 class="section-heading">{{ $t('service_detail.section.attachment') }}</h4>
              <div class="attachment-box">
                <i class="bi bi-file-earmark-pdf-fill text-danger fs-3"></i>
                <div>
                  <div class="fw-bold small">Sample_Contract_Preview.pdf</div>
                  <div class="text-muted small">{{ $t('service_detail.attachment_hint') }}</div>
                </div>
                <i class="bi bi-download ms-auto text-primary cursor-pointer" @click="downloadFile"></i>
              </div>
            </div>
          </div>

          <div class="content-card p-4">
            <h6 class="fw-bold mb-4 border-bottom pb-3">{{ $t('service_detail.bids.title', { count: taskInfo.joined }) }}</h6>
            <div class="row text-center mb-4">
              <div class="col-3 border-end">
                <div class="fs-4 fw-bold text-primary">{{ taskInfo.joined }}</div>
                <div class="small text-muted">{{ $t('service_detail.bids.stat_joined') }}</div>
              </div>
              <div class="col-3 border-end">
                <div class="fs-4 fw-bold text-dark">2</div>
                <div class="small text-muted">{{ $t('service_detail.bids.stat_chat') }}</div>
              </div>
              <div class="col-3 border-end">
                <div class="fs-4 fw-bold text-dark">10m</div>
                <div class="small text-muted">{{ $t('service_detail.bids.stat_active') }}</div>
              </div>
              <div class="col-3">
                <div class="fs-4 fw-bold text-dark">35%</div>
                <div class="small text-muted">{{ $t('service_detail.bids.stat_rate') }}</div>
              </div>
            </div>
            
            <div class="d-flex align-items-center mb-3" v-for="i in 3" :key="i">
              <img :src="`https://api.dicebear.com/7.x/avataaars/svg?seed=User${i}`" class="rounded-circle me-3 border" width="40">
              <div>
                <div class="fw-bold small">User_{{ i+290 }}</div>
                <div class="text-muted" style="font-size: 12px;">{{ $t('service_detail.bids.submit_time') }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">

          <div class="sidebar-card text-center sticky-card">
            <div class="mb-3 text-start">
              <div class="price-label">{{ $t('service_detail.sidebar.budget_label') }}</div>
              <div class="price-val">¥ {{ taskInfo.price }} <span class="price-unit">{{ $t('service_detail.sidebar.unit') }}</span></div>
            </div>

            <button 
              class="btn-apply" 
              :class="{ 'btn-secondary': hasBid }" 
              :disabled="hasBid" 
              @click="openBidModal"
            >
              {{ hasBid ? $t('service_detail.btn.applied') : $t('service_detail.btn.apply') }}
            </button>
            
            <button class="btn-chat" @click="contactEmployer">
              <i class="bi bi-chat-dots"></i> {{ $t('service_detail.btn.chat') }}
            </button>

            <div class="mt-3 small text-muted d-flex justify-content-center gap-3">
              <span class="action-icon"><i class="bi bi-heart"></i> {{ $t('service_detail.action.collect') }}</span>
              <span class="action-icon"><i class="bi bi-share"></i> {{ $t('service_detail.action.share') }}</span>
              <span class="action-icon"><i class="bi bi-flag"></i> {{ $t('service_detail.action.report') }}</span>
            </div>
          </div>

          <div class="sidebar-card">
            <h5 class="fw-bold mb-3 fs-6">{{ $t('service_detail.client.title') }}</h5>

            <div class="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom">
              <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold avatar-box" style="width:40px;height:40px;">T</div>
              <div style="line-height:1.2;">
                <div class="fw-bold">TechGlobal Inc.</div>
                <div class="small text-muted">{{ $t('service_detail.client.verified') }} <i class="bi bi-patch-check-fill text-primary"></i></div>
              </div>
            </div>

            <div class="client-stat-item">
              <span class="stat-label">{{ $t('service_detail.client.loc') }}</span>
              <span class="stat-val">Beijing / Singapore</span>
            </div>
            <div class="client-stat-item">
              <span class="stat-label">{{ $t('service_detail.client.tasks') }}</span>
              <span class="stat-val">12</span>
            </div>
            <div class="client-stat-item">
              <span class="stat-label">{{ $t('service_detail.client.spent') }}</span>
              <span class="stat-val">¥ 150,000+</span>
            </div>
            <div class="client-stat-item">
              <span class="stat-label">{{ $t('service_detail.client.rate') }}</span>
              <span class="stat-val text-success">85% (High)</span>
            </div>
          </div>

          <div class="sidebar-card">
            <h6 class="fw-bold mb-3 fs-6">{{ $t('service_detail.similar_title') }}</h6>
            <div class="similar-item" v-for="i in 3" :key="i">
              <a href="#" class="similar-title">{{ $t('service_detail.similar_demo') }}</a>
              <div class="d-flex justify-content-between small text-muted">
                <span>{{ $t('service_detail.similar_tag') }}</span>
                <span class="similar-price">¥ 800</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <el-dialog v-model="showBidModal" :title="$t('service_detail.modal.title')" width="600px" align-center custom-class="bid-dialog">
      <div class="alert alert-primary d-flex align-items-center small mb-4" role="alert">
        <i class="bi bi-info-circle-fill me-2"></i>
        <div>{{ $t('service_detail.modal.fee_tip') }}</div>
      </div>

      <div class="row mb-3">
        <div class="col-md-6">
          <label class="form-label small fw-bold">{{ $t('service_detail.modal.price_label') }}</label>
          <div class="input-group">
            <input type="number" class="form-control" v-model="bidForm.price">
            <span class="input-group-text">{{ $t('service_detail.sidebar.unit') }}</span>
          </div>
          <div class="form-text small text-muted">{{ $t('service_detail.modal.income_calc') }}: <span class="text-success fw-bold">¥ {{ (bidForm.price * 0.9).toFixed(0) }}</span></div>
        </div>
        <div class="col-md-6">
          <label class="form-label small fw-bold">{{ $t('service_detail.modal.days_label') }}</label>
          <select class="form-select" v-model="bidForm.days">
            <option value="5">5 {{ $t('service_detail.modal.day_unit') }}</option>
            <option value="3">3 {{ $t('service_detail.modal.day_unit') }} ({{ $t('service_detail.modal.urgent_opt') }})</option>
            <option value="7">7 {{ $t('service_detail.modal.day_unit') }}</option>
          </select>
        </div>
      </div>

      <div class="mb-3">
        <label class="form-label small fw-bold">{{ $t('service_detail.modal.letter_label') }}</label>
        <textarea class="form-control" rows="5" v-model="bidForm.letter" :placeholder="$t('service_detail.modal.letter_ph')"></textarea>
        <div class="d-flex justify-content-end mt-2">
          <button class="btn btn-sm btn-outline-primary rounded-pill" @click="aiPolish"><i class="bi bi-stars"></i> {{ $t('service_detail.modal.ai_polish') }}</button>
        </div>
      </div>

      <div class="mb-3">
        <label class="form-label small fw-bold">{{ $t('service_detail.modal.upload_label') }}</label>
        <input type="file" class="form-control">
      </div>

      <template #footer>
        <button class="btn btn-secondary me-2" @click="showBidModal = false">{{ $t('service_detail.modal.cancel') }}</button>
        <button class="btn btn-primary fw-bold px-4" @click="submitBid" :disabled="isSubmitting">
          <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-1"></span>
          {{ isSubmitting ? $t('service_detail.modal.submitting') : $t('service_detail.modal.confirm') }}
        </button>
      </template>
    </el-dialog>

  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/store/user'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'

const { t, locale } = useI18n()
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const showBidModal = ref(false)
const isSubmitting = ref(false)
const hasBid = ref(false)
const taskInfo = ref({})

const bidForm = reactive({
  price: 6500,
  days: '5',
  letter: ''
})

// [Database] 模拟后端获取详情 (支持多语言)
const loadTaskData = () => {
  const isEn = locale.value === 'en'
  
  taskInfo.value = {
    id: '20260108-88',
    title: isEn ? 'SaaS Legal Terms Translation (En-Zh)' : 'SaaS 平台法律服务条款英译中 (8000字)',
    price: 6500,
    publishTime: isEn ? '2 hours ago' : '2小时前',
    views: 342,
    joined: 8,
    background: isEn 
      ? 'We are a Singapore-based FinTech company expanding into mainland China. We need a senior translator with legal background for our "User Agreement" and "Privacy Policy".'
      : '我司是一家总部位于新加坡的金融科技公司（FinTech），目前正在拓展中国大陆市场。我们需要一名具备**法律背景**的资深中文译员，将我们的《用户服务协议》和《隐私政策》从英文翻译成简体中文。',
    requirement_desc: isEn
      ? 'Source text approx 5,000 words. Translation must comply with Mainland China regulations (Cybersecurity Law) and maintain a professional tone.'
      : '稿件原文约 5,000 单词。译文必须符合中国大陆的法律法规表述习惯（特别是《网络安全法》相关术语），同时保持品牌语气的专业与亲和。',
    duties: isEn 
      ? ['Translate legal docs (Terms & Conditions).', 'Create bilingual glossary.', 'Collaborate with legal team for review.']
      : ['完成法律文档的英中翻译，确保术语准确（Terms & Conditions）。', '建立中英对照术语表（Glossary），供后续项目复用。', '配合我司法务团队进行一轮审校修改。'],
    skills: isEn 
      ? ['Legal Translation', 'FinTech', 'CATTI Level 2+', 'Trados']
      : ['法律翻译', '金融科技 (FinTech)', 'CATTI 二级及以上', '熟练使用 Trados'],
    questions: isEn
      ? ['Do you have experience with FinTech agreements?', 'Which CAT tool do you use?', 'Can you deliver initial draft in 3 days?']
      : ['您是否有过互联网金融类协议的翻译经验？请举例。', '您通常使用哪款 CAT 工具进行协作？', '本项目要求 3 天内交付初稿，您的排期是否允许？']
  }
}

watch(locale, loadTaskData)

const go = (path) => router.push(path)

// [API] 下载附件
const downloadFile = () => {
  // window.open('/api/file/download/...')
  ElMessage.success(t('loading.audio')) // 复用 Loading 提示或新建
}

const openBidModal = () => {
  if (!userStore.isLoggedIn) {
    ElMessage.warning(t('login_warn')) // 需在 global 或 service 添加此 key
    router.push({ path: '/login', query: { redirect: route.fullPath } })
    return
  }
  showBidModal.value = true
}

// [API] AI 润色
const aiPolish = () => {
  if (!bidForm.letter) bidForm.letter = locale.value === 'en' ? "I have 5 years of legal translation experience..." : "本人拥有5年法律翻译经验，曾服务于多家知名律所..."
  
  const polishText = locale.value === 'en' 
    ? "\n\n[AI Polished]: With solid bilingual skills and deep understanding of Cybersecurity Law, I ensure legal accuracy and commercial readability."
    : "\n\n[AI 智能润色]：凭借扎实的双语功底和对《网络安全法》的深入理解，我能确保译文的法律准确性与商业可读性，交付高质量稿件。"
    
  bidForm.letter += polishText
  ElMessage.success(t('service_detail.modal.ai_done'))
}

const submitBid = () => {
  if (!bidForm.letter) {
    ElMessage.warning(t('service_detail.modal.letter_ph'))
    return
  }
  isSubmitting.value = true
  
  // [API] 提交投标
  // axios.post('/api/task/bid', { ... })

  setTimeout(() => {
    isSubmitting.value = false
    showBidModal.value = false
    hasBid.value = true
    taskInfo.value.joined += 1 
    ElMessage.success(t('service_detail.modal.success_msg'))
  }, 1000)
}

const contactEmployer = () => {
  if (!userStore.isLoggedIn) {
    ElMessage.warning(t('login_warn'))
    router.push({ path: '/login', query: { redirect: route.fullPath } })
    return
  }
  router.push({ path: '/chat', query: { targetId: 99 } })
}

onMounted(() => {
  loadTaskData()
  // [API] 根据 route.params.id 获取真实详情
})
</script>

<style scoped lang="scss">
$primary: #004aad;
$dark: #333;
$bg-light: #f8faff;
$success: #28a745;
$text-gray: #666;

.service-detail-page {
  font-family: -apple-system, "PingFang SC", sans-serif;
  // 🔥 增加 padding 防止导航栏遮挡
  padding-top: 85px; 
  background: $bg-light;
  color: $dark;
  min-height: 100vh;
}

/* Navbar */
.navbar-custom { background: #fff; box-shadow: 0 1px 5px rgba(0,0,0,0.05); height: 70px; z-index: 1000; }
.navbar-brand { font-weight: 900; color: $primary !important; font-size: 1.4rem; }
.nav-link { font-weight: 600; color: #555 !important; transition: 0.2s; &:hover { color: $primary !important; } }

/* Sub Header */
.sub-header { background: #fff; border-bottom: 1px solid #ebecf0; padding: 15px 0; font-size: 14px; }
.breadcrumb-item a { text-decoration: none; color: $text-gray; &:hover { color: $primary; } }

/* Main Content */
.main-content { padding: 30px 0 60px; }

/* Cards */
.content-card {
  background: #fff; border-radius: 12px; margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.02); overflow: hidden; border: 1px solid #eee;
}
.card-header-custom { padding: 25px 30px 20px; border-bottom: 1px solid #f0f0f0; }
.card-body-custom { padding: 30px; }

/* Job Title & Meta */
.job-title { font-size: 24px; font-weight: 800; color: #000; margin-bottom: 12px; line-height: 1.4; }
.job-meta-row { display: flex; gap: 20px; font-size: 13px; color: $text-gray; align-items: center; margin-bottom: 5px; flex-wrap: wrap; }

.status-badge { background: #e6f9ed; color: $success; padding: 3px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; display: inline-flex; align-items: center; gap: 4px; }
.tag-urgent { background: #fff0f0; color: #dc3545; padding: 3px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; }

/* Body Text */
.section-heading { font-size: 16px; font-weight: 700; margin-top: 30px; margin-bottom: 15px; color: #000; border-left: 4px solid $primary; padding-left: 10px; }
.text-body-lg { font-size: 15px; line-height: 1.8; color: #444; text-align: justify; }

/* Skills */
.skill-tag { background: #f1f3f5; color: #495057; padding: 6px 14px; border-radius: 20px; font-size: 13px; margin-right: 8px; margin-bottom: 8px; display: inline-block; }

/* Sidebar */
.sidebar-card { background: #fff; border-radius: 12px; padding: 25px; margin-bottom: 20px; border: 1px solid #eee; }
.sticky-card { position: sticky; top: 90px; z-index: 10; }

.price-label { font-size: 12px; color: #999; text-transform: uppercase; font-weight: bold; }
.price-val { font-size: 32px; font-weight: 900; color: #ff6b00; font-family: Arial, sans-serif; }
.price-unit { font-size: 14px; color: #666; font-weight: normal; }

.btn-apply {
  width: 100%; background: linear-gradient(135deg, $primary 0%, #0062cc 100%); color: #fff; border: none; padding: 12px;
  border-radius: 50px; font-weight: bold; font-size: 16px; transition: 0.3s;
  box-shadow: 0 5px 15px rgba(0, 74, 173, 0.25);
  &:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0, 74, 173, 0.35); }
  &:disabled { background: #6c757d; cursor: not-allowed; box-shadow: none; }
}

.btn-chat {
  width: 100%; background: #fff; color: $primary; border: 1px solid $primary; padding: 10px;
  border-radius: 50px; font-weight: bold; margin-top: 10px; transition: 0.2s;
  &:hover { background: #f0f7ff; }
}

.action-icon { cursor: pointer; transition: 0.2s; &:hover { color: $primary; } }

.client-stat-item { display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 14px; color: #555; }
.stat-label { color: #999; }
.stat-val { font-weight: 600; color: #333; }

/* Attachment */
.attachment-box {
  display: flex; align-items: center; gap: 12px; padding: 15px;
  border: 1px solid #eee; border-radius: 8px; max-width: 400px;
  background: #fafbfc; transition: 0.2s; cursor: pointer;
  &:hover { border-color: $primary; background: #fff; }
}

/* Similar Items */
.similar-item { padding: 12px 0; border-bottom: 1px dashed #eee; &:last-child { border-bottom: none; } }
.similar-title { font-weight: bold; color: #333; text-decoration: none; display: block; margin-bottom: 4px; font-size: 14px; &:hover { color: $primary; } }
.similar-price { color: #ff6b00; font-weight: bold; font-size: 13px; }

/* Responsive */
@media (max-width: 991px) {
  .sticky-card { position: static; }
}
</style>