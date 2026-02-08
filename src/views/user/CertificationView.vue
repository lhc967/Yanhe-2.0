<template>
  <div class="cert-page">
    
    <nav class="navbar fixed-top navbar-custom px-4">
      <div class="container">
        <a class="navbar-brand fw-bold d-flex align-items-center" @click.prevent="$router.go(-1)" href="#">
          <i class="bi bi-chevron-left me-1"></i> {{ $t('cert.nav_back') }}
        </a>
      </div>
    </nav>

    <div class="auth-hero text-center">
      <div class="container position-relative z-1">
        <h2 class="fw-bold mb-3">{{ $t('cert.hero.title') }}</h2>
        <p class="opacity-75 mb-4">{{ $t('cert.hero.subtitle') }}</p>
        <div class="d-flex justify-content-center gap-3 mb-4 flex-wrap">
          <span class="badge bg-white text-primary px-3 py-2 rounded-pill"><i class="bi bi-mortarboard-fill"></i> BSU</span>
          <span class="badge bg-white text-dark px-3 py-2 rounded-pill opacity-75">BFSU</span>
          <span class="badge bg-white text-dark px-3 py-2 rounded-pill opacity-75">BLCU</span>
        </div>
      </div>
    </div>

    <div class="container pb-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="form-container">

            <div class="row g-3 mb-4">
              <div class="col-4">
                <div class="benefit-card">
                  <div class="icon-box"><i class="bi bi-coin"></i></div>
                  <h6 class="fw-bold">{{ $t('cert.benefits.free.title') }}</h6>
                  <p class="small text-muted m-0">{{ $t('cert.benefits.free.desc') }}</p>
                </div>
              </div>
              <div class="col-4">
                <div class="benefit-card">
                  <div class="icon-box"><i class="bi bi-lightning-charge"></i></div>
                  <h6 class="fw-bold">{{ $t('cert.benefits.priority.title') }}</h6>
                  <p class="small text-muted m-0">{{ $t('cert.benefits.priority.desc') }}</p>
                </div>
              </div>
              <div class="col-4">
                <div class="benefit-card">
                  <div class="icon-box"><i class="bi bi-award"></i></div>
                  <h6 class="fw-bold">{{ $t('cert.benefits.cert.title') }}</h6>
                  <p class="small text-muted m-0">{{ $t('cert.benefits.cert.desc') }}</p>
                </div>
              </div>
            </div>

            <hr class="my-4">

            <el-form :model="form" label-position="top" size="large" @submit.prevent>
              
              <h5 class="fw-bold mb-4 border-start border-4 border-primary ps-3">{{ $t('cert.form.step1') }}</h5>
              <div class="row g-3 mb-4">
                <div class="col-md-6">
                  <el-form-item :label="$t('cert.form.name_label')">
                    <el-input v-model="form.name" :placeholder="$t('cert.form.name_ph')" />
                  </el-form-item>
                </div>
                <div class="col-md-6">
                  <el-form-item :label="$t('cert.form.school_label')">
                    <el-select v-model="form.school" :placeholder="$t('cert.form.school_ph')" class="w-100">
                      <el-option :label="$t('cert.form.schools.bsu')" value="BSU" />
                      <el-option :label="$t('cert.form.schools.bfsu')" value="BFSU" />
                      <el-option :label="$t('cert.form.schools.blcu')" value="BLCU" />
                      <el-option :label="$t('cert.form.schools.other')" value="Other" />
                    </el-select>
                  </el-form-item>
                </div>
                <div class="col-md-6">
                  <el-form-item :label="$t('cert.form.major_label')">
                    <el-input v-model="form.major" :placeholder="$t('cert.form.major_ph')" />
                  </el-form-item>
                </div>
                <div class="col-md-6">
                  <el-form-item :label="$t('cert.form.id_label')">
                    <el-input v-model="form.studentId" :placeholder="$t('cert.form.id_ph')" />
                  </el-form-item>
                </div>
              </div>

              <h5 class="fw-bold mb-4 border-start border-4 border-primary ps-3">{{ $t('cert.form.step2') }}</h5>
              <div class="mb-4">
                <label class="form-label mb-2 d-block fw-bold text-secondary" style="font-size:14px">{{ $t('cert.form.upload_label') }}</label>
                
                <el-upload
                  class="upload-demo"
                  drag
                  action="#"
                  :auto-upload="false"
                  :on-change="handleFileChange"
                  :show-file-list="true"
                >
                  <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                  <div class="el-upload__text">
                    {{ $t('cert.form.drag_text') }} <em>{{ $t('cert.form.click_upload') }}</em>
                  </div>
                  <template #tip>
                    <div class="el-upload__tip text-center">
                      {{ $t('cert.form.upload_tip') }}
                    </div>
                  </template>
                </el-upload>
              </div>

              <div class="mb-4">
                <el-checkbox v-model="form.agree">{{ $t('cert.form.agree') }}</el-checkbox>
              </div>

              <button class="btn btn-primary w-100 py-3 rounded-pill fw-bold shadow-sm" :disabled="loading" @click="submitAuth">
                <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                {{ loading ? $t('cert.form.submitting') : $t('cert.form.btn_submit') }}
              </button>

            </el-form>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
import { UploadFilled } from '@element-plus/icons-vue'

const { t } = useI18n()
const router = useRouter()
const userStore = useUserStore()
const loading = ref(false)

const form = reactive({
  name: '',
  school: 'BSU',
  major: '',
  studentId: '',
  file: null,
  agree: false
})

onMounted(() => {
  if (userStore.userInfo.name) {
    form.name = userStore.userInfo.name
  }
})

const handleFileChange = (file) => {
  form.file = file
}

const submitAuth = () => {
  if (!form.agree) {
    return ElMessage.warning(t('cert.msg.agree_warn'))
  }
  if (!form.name || !form.studentId) {
    return ElMessage.warning(t('cert.msg.info_warn'))
  }
  
  loading.value = true
  
  // [API] 提交认证
  // axios.post('/api/user/verify', form)

  setTimeout(() => {
    loading.value = false
    ElMessage.success(t('cert.msg.success'))
    
    // 更新 Store
    userStore.userInfo.verifyStatus = 'pending'
    
    router.go(-1)
  }, 1500)
}
</script>

<style scoped lang="scss">
$primary: #004aad;
$bg-light: #f8faff;

.cert-page {
  font-family: -apple-system, "PingFang SC", sans-serif;
  padding-top: 70px;
  background: $bg-light;
  min-height: 100vh;
}

.navbar-custom { background: rgba(255,255,255,0.95); backdrop-filter: blur(12px); box-shadow: 0 4px 20px rgba(0,0,0,0.03); height: 70px; z-index: 1000; }
.navbar-brand { color: $primary; text-decoration: none; }

.auth-hero { 
  background: linear-gradient(135deg, #004aad, #002a4d); 
  color: #fff; padding: 60px 0; position: relative; overflow: hidden; 
  
  &::after { 
    content: ''; position: absolute; right: -50px; bottom: -50px; width: 300px; height: 300px; 
    background: url('https://upload.wikimedia.org/wikipedia/zh/thumb/2/23/Beijing_Sport_University_Logo.svg/1200px-Beijing_Sport_University_Logo.svg.png') no-repeat center/contain; 
    opacity: 0.1; filter: grayscale(100%); pointer-events: none;
  }
}

.form-container { 
  background: #fff; padding: 40px; border-radius: 16px; 
  box-shadow: 0 10px 40px rgba(0,0,0,0.05); margin-top: -50px; position: relative; z-index: 2; 
}

/* 权益卡片 */
.benefit-card { 
  background: #fff; padding: 20px; border-radius: 12px; text-align: center; height: 100%; 
  border: 1px solid rgba(0,0,0,0.05); transition: 0.3s; 
  &:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
  .icon-box { 
    width: 50px; height: 50px; background: #eef4fc; color: $primary; 
    border-radius: 50%; display: flex; align-items: center; justify-content: center; 
    font-size: 24px; margin: 0 auto 15px; 
  }
}

/* Element UI 覆盖 */
:deep(.el-upload-dragger) { border-radius: 12px; }
:deep(.el-input__wrapper) { box-shadow: 0 0 0 1px #eee inset; background-color: #f9f9f9; }
:deep(.el-input__wrapper.is-focus) { box-shadow: 0 0 0 1px $primary inset !important; background-color: #fff; }
</style>