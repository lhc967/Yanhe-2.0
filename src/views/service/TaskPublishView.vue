<template>
  <div class="publish-page">
    
    <nav class="navbar fixed-top navbar-custom px-4">
      <div class="container-fluid">
        <a class="navbar-brand d-flex align-items-center" @click.prevent="$router.go(-1)" href="#">
          <i class="bi bi-x-lg text-secondary me-3 cursor-pointer"></i>
          {{ $t('publish.nav_title') }}
        </a>
        <span class="text-muted small">{{ $t('publish.nav_subtitle') }}</span>
      </div>
    </nav>

    <div class="publish-container pb-5 mb-5">
      
      <div class="mb-4 px-2">
        <el-steps :active="activeStep" finish-status="success" align-center>
          <el-step :title="$t('publish.steps.desc')" />
          <el-step :title="$t('publish.steps.budget')" />
        </el-steps>
      </div>

      <transition name="fade" mode="out-in">
        
        <div v-if="activeStep === 0" key="step1">
          <div class="form-card">
            <h5 class="fw-bold mb-4">1. {{ $t('publish.steps.desc') }}</h5>

            <div class="mb-4">
              <label class="section-label">{{ $t('publish.form.type_label') }}</label>
              <div class="row g-2">
                <div class="col-6 col-md-3" v-for="typeKey in taskTypes" :key="typeKey">
                  <input type="radio" class="btn-check" :id="'t-'+typeKey" :value="typeKey" v-model="form.category">
                  <label class="btn btn-outline-primary w-100 rounded-pill" :for="'t-'+typeKey">
                    {{ $t(`publish.types.${typeKey}`) }}
                  </label>
                </div>
              </div>
            </div>

            <div class="mb-4">
              <label class="section-label">{{ $t('publish.form.title_label') }}</label>
              <input type="text" class="form-control" v-model="form.title" :placeholder="$t('publish.form.title_ph')">
            </div>

            <div class="mb-4">
              <label class="section-label">{{ $t('publish.form.desc_label') }}</label>
              <textarea class="form-control" rows="5" v-model="form.desc" :placeholder="$t('publish.form.desc_ph')"></textarea>
            </div>

            <div class="mb-0">
              <label class="section-label">{{ $t('publish.form.upload_label') }}</label>
              <div class="upload-zone">
                <i class="bi bi-cloud-arrow-up fs-2 text-muted"></i>
                <p class="mb-0 mt-2 text-muted small">{{ $t('publish.form.upload_hint') }}</p>
              </div>
            </div>
          </div>
          
          <button class="btn btn-primary w-100 rounded-pill py-3 fw-bold shadow-sm" @click="nextStep">
            {{ $t('publish.btn_next') }}
          </button>
        </div>

        <div v-else key="step2">
          
          <div class="form-card">
            <h5 class="fw-bold mb-4">2. {{ $t('publish.step2.mode_title') }}</h5>
            <div class="row g-3">
              <div class="col-md-6">
                <div class="mode-select-card" :class="{ active: form.mode === 'normal' }" @click="form.mode = 'normal'">
                  <div class="d-flex align-items-center gap-3">
                    <div class="icon-circle bg-light"><i class="bi bi-person"></i></div>
                    <div>
                      <div class="fw-bold">{{ $t('publish.modes.normal.title') }}</div>
                      <div class="small text-muted">{{ $t('publish.modes.normal.desc') }}</div>
                    </div>
                  </div>
                  <i class="bi bi-check-circle-fill check-icon" v-if="form.mode === 'normal'"></i>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mode-select-card" :class="{ active: form.mode === 'contest' }" @click="form.mode = 'contest'">
                  <div class="d-flex align-items-center gap-3">
                    <div class="icon-circle bg-warning text-white"><i class="bi bi-trophy"></i></div>
                    <div>
                      <div class="fw-bold">{{ $t('publish.modes.contest.title') }}</div>
                      <div class="small text-muted">{{ $t('publish.modes.contest.desc') }}</div>
                    </div>
                  </div>
                  <i class="bi bi-check-circle-fill check-icon" v-if="form.mode === 'contest'"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="form-card">
            <h5 class="fw-bold mb-4">3. {{ $t('publish.steps.budget') }}</h5>

            <div v-if="form.mode === 'normal'">
              <div class="mb-3">
                <label class="section-label">{{ $t('publish.step2.budget_label') }} (¥)</label>
                <input type="number" class="form-control form-control-lg fw-bold text-primary" v-model.number="form.budget" placeholder="0.00">
                <div class="form-text">{{ $t('publish.step2.budget_hint') }}</div>
              </div>
            </div>

            <div v-else>
              <div class="alert alert-warning border-warning bg-warning bg-opacity-10 mb-4">
                <small><i class="bi bi-info-circle-fill"></i> {{ $t('publish.step2.contest_alert') }}</small>
              </div>
              
              <div class="row g-3 mb-3">
                <div class="col-md-6">
                  <label class="section-label">{{ $t('publish.step2.total_budget') }} (¥)</label>
                  <input type="number" class="form-control" v-model.number="form.budget">
                </div>
                <div class="col-md-6">
                  <label class="section-label">{{ $t('publish.step2.max_people') }}</label>
                  <select class="form-select" v-model.number="form.maxPeople">
                    <option value="3">3</option>
                    <option value="5">5 ({{ $t('publish.step2.recommend') }})</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>

              <div class="bg-light p-3 rounded mb-3 border">
                <div class="d-flex justify-content-between mb-2">
                  <span>{{ $t('publish.step2.pool_entry') }} (60%)</span>
                  <span class="fw-bold">¥ {{ (form.budget * 0.6).toFixed(0) }} <span class="text-muted fw-normal small">({{ $t('publish.step2.per_person') }} ¥{{ ((form.budget * 0.6)/form.maxPeople).toFixed(0) }})</span></span>
                </div>
                <div class="d-flex justify-content-between text-danger">
                  <span>🏆 {{ $t('publish.step2.pool_winner') }} (40%)</span>
                  <span class="fw-bold">¥ {{ (form.budget * 0.4).toFixed(0) }}</span>
                </div>
              </div>
            </div>

            <div class="row g-3 mb-3">
              <div class="col-md-6">
                <label class="section-label">{{ $t('publish.step2.deadline') }}</label>
                <el-date-picker v-model="form.deadline" type="date" :placeholder="$t('publish.step2.deadline_ph')" style="width: 100%" />
              </div>
            </div>

            <div class="form-check form-switch mb-3">
              <input class="form-check-input" type="checkbox" id="urgentSwitch" v-model="form.isUrgent">
              <label class="form-check-label fw-bold" for="urgentSwitch">{{ $t('publish.step2.urgent_opt') }}</label>
            </div>
            
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="expertSwitch" checked>
              <label class="form-check-label fw-bold" for="expertSwitch">{{ $t('publish.step2.expert_opt') }}</label>
            </div>
          </div>

          <button class="btn btn-link text-muted w-100 text-decoration-none mb-5" @click="activeStep = 0">
            {{ $t('publish.btn_back') }}
          </button>

        </div>
      </transition>
    </div>

    <div class="footer-action" v-if="activeStep === 1">
        <div class="container d-flex justify-content-between align-items-center" style="max-width: 800px;">
            <div>
                <div class="small text-muted">{{ $t('publish.footer.total_label') }}</div>
                <div class="price-display">¥ {{ totalAmount.toFixed(2) }}</div>
            </div>
            <button class="btn btn-primary rounded-pill px-5 py-3 fw-bold shadow" @click="submitTask" :disabled="loading">
                <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                {{ loading ? $t('publish.footer.submitting') : $t('publish.footer.btn_pay') }}
            </button>
        </div>
    </div>

  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'

const { t } = useI18n()
const router = useRouter()
const activeStep = ref(0)
const loading = ref(false)

// 改为 Key，方便国际化
const taskTypes = ['translation', 'dubbing', 'polish', 'custom']

const form = reactive({
  category: 'translation',
  title: '',
  desc: '',
  mode: 'normal',
  budget: 500,
  maxPeople: 5,
  deadline: '',
  isUrgent: false
})

const totalAmount = computed(() => {
  let base = form.budget || 0
  if (form.isUrgent) base += 20
  return base
})

const nextStep = () => {
  if (!form.title) return ElMessage.warning(t('publish.msg_title_required'))
  activeStep.value = 1
  window.scrollTo(0, 0)
}

const submitTask = () => {
  if (form.budget <= 0) return ElMessage.warning(t('publish.msg_budget_invalid'))
  
  loading.value = true
  
  // -----------------------------------------------------------
  // [API] 创建任务订单
  // const res = await axios.post('/api/task/create', form)
  // const orderId = res.data.id
  // -----------------------------------------------------------

  setTimeout(() => {
    loading.value = false
    ElMessage.success(t('publish.msg_success'))
    
    // 跳转收银台
    router.push({
      path: '/checkout',
      query: { 
        type: 'task', 
        amount: totalAmount.value 
      }
    })
  }, 1000)
}
</script>

<style scoped lang="scss">
$primary: #004aad;
$accent: #ff6b00;
$bg-light: #f8faff;

.publish-page {
  font-family: -apple-system, "PingFang SC", sans-serif;
  padding-top: 70px;
  background: $bg-light;
  min-height: 100vh;
}

/* 导航 */
.navbar-custom { background: #fff; box-shadow: 0 1px 5px rgba(0,0,0,0.05); height: 70px; }
.navbar-brand { font-weight: 900; color: $primary; text-decoration: none; font-size: 1.2rem; }
.cursor-pointer { cursor: pointer; }

/* 容器 */
.publish-container { max-width: 800px; margin: 30px auto; padding: 0 15px; }
.form-card { 
  background: #fff; border-radius: 12px; padding: 30px; 
  box-shadow: 0 4px 20px rgba(0,0,0,0.02); margin-bottom: 20px; border: 1px solid #eee;
}

/* 表单元素 */
.section-label { font-weight: 700; font-size: 15px; margin-bottom: 10px; display: block; color: #333; }
.form-control, .form-select { padding: 12px; border-radius: 8px; border: 1px solid #eee; background: #fcfcfc; &:focus { border-color: $primary; box-shadow: 0 0 0 3px rgba(0, 74, 173, 0.1); background: #fff; } }

/* 上传区 */
.upload-zone { border: 2px dashed #ddd; border-radius: 12px; padding: 40px; text-align: center; cursor: pointer; transition: 0.2s; background: #fafafa; &:hover { border-color: $primary; background: #f0f7ff; color: $primary; } }

/* 模式选择卡片 */
.mode-select-card {
  border: 1px solid #eee; border-radius: 10px; padding: 15px; cursor: pointer; position: relative; transition: 0.2s;
  &:hover { border-color: $primary; background: #f8faff; }
  &.active { border-color: $primary; background: rgba(0, 74, 173, 0.05); box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
  .icon-circle { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; }
  .check-icon { position: absolute; top: 10px; right: 10px; color: $primary; font-size: 18px; }
}

/* 底部结算 */
.footer-action { position: fixed; bottom: 0; left: 0; right: 0; background: #fff; padding: 20px; border-top: 1px solid #eee; box-shadow: 0 -5px 20px rgba(0,0,0,0.05); z-index: 100; }
.price-display { font-size: 24px; font-weight: 900; color: $accent; }

/* 动画 */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>