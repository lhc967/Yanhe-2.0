<template>
  <div class="login-page">
    
    <header class="login-header">
      <div class="brand-box" @click="goHome">
        <span class="logo-text">{{ $t('brand') }}</span>
      </div>
      <div class="back-box" @click="goHome">
        <el-icon><HomeFilled /></el-icon> <span>{{ $t('login.back_home') }}</span>
      </div>
    </header>

    <div class="login-body">
      
      <div class="brand-side" :class="{ 'student-mode': currentRole === 'individual' }">
        <div class="bg-circle c1"></div>
        <div class="bg-circle c2"></div>
        
        <transition name="fade" mode="out-in">
          <div v-if="currentRole === 'enterprise'" key="ent" class="brand-text">
            <div class="icon-wrap"><el-icon><OfficeBuilding /></el-icon></div>
            <h1 v-html="$t('login.brand.ent_title')"></h1>
            <p>{{ $t('login.brand.ent_desc') }}</p>
          </div>
          <div v-else key="ind" class="brand-text">
            <div class="icon-wrap"><el-icon><School /></el-icon></div>
            <h1 v-html="$t('login.brand.ind_title')"></h1>
            <p>{{ $t('login.brand.ind_desc') }}</p>
            
            <div class="badge-wall">
              <div class="wall-title">{{ $t('login.brand.badge_title') }}</div>
              <div class="badges">
                <el-tooltip :content="$t('login.brand.badge_gold')" placement="top">
                  <div class="badge-item gold"><i class="bi bi-patch-check-fill"></i></div>
                </el-tooltip>
                <el-tooltip :content="$t('login.brand.badge_silver')" placement="top">
                  <div class="badge-item silver"><i class="bi bi-trophy-fill"></i></div>
                </el-tooltip>
                <el-tooltip :content="$t('login.brand.badge_bronze')" placement="top">
                  <div class="badge-item bronze"><i class="bi bi-calendar-check-fill"></i></div>
                </el-tooltip>
                <div class="badge-item empty">+</div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <div class="form-side" :style="formBackgroundStyle">
        <div class="form-card">
          
          <div class="role-switch">
            <div class="switch-item" :class="{ active: currentRole === 'enterprise' }" @click="currentRole = 'enterprise'">
              <el-icon><Briefcase /></el-icon> {{ $t('login.role_ent') }}
            </div>
            <div class="switch-item" :class="{ active: currentRole === 'individual' }" @click="currentRole = 'individual'">
              <el-icon><User /></el-icon> {{ $t('login.role_ind') }}
            </div>
          </div>

          <div v-if="currentView === 'login'" class="form-content">
            <h2 class="welcome-title">{{ $t('login.welcome') }}</h2>
            <p class="welcome-sub">{{ currentRole === 'individual' ? $t('login.sub_ind') : $t('login.sub_ent') }}</p>
            
            <form @submit.prevent="handleLogin">
              <div class="input-group">
                <el-input v-model="loginForm.account" 
                  :placeholder="currentRole === 'enterprise' ? $t('login.placeholder.ent_account') : $t('login.placeholder.ind_account')" 
                  size="large">
                  <template #prefix><el-icon><User /></el-icon></template>
                </el-input>
              </div>
              <div class="input-group">
                <el-input v-model="loginForm.password" type="password" 
                  :placeholder="$t('login.placeholder.password')" 
                  size="large" show-password>
                  <template #prefix><el-icon><Lock /></el-icon></template>
                </el-input>
              </div>
              
              <div class="action-row">
                <el-checkbox v-model="loginForm.remember">{{ $t('login.remember') }}</el-checkbox>
                <span class="forgot-pwd">{{ $t('login.forgot') }}</span>
              </div>

              <button type="submit" class="submit-btn" :class="currentRole" :disabled="loading">
                {{ loading ? $t('login.logging_in') : $t('login.btn_login') }}
              </button>
            </form>
            
            <div class="switch-view">
              {{ $t('login.no_account') }} <span @click="currentView = 'register'">{{ $t('login.to_register') }}</span>
            </div>
          </div>

          <div v-else class="form-content">
            <h2 class="welcome-title">{{ $t('login.create_account') }}</h2>
            <p class="welcome-sub">{{ currentRole === 'individual' ? $t('login.join_ind') : $t('login.join_ent') }}</p>
            
            <form @submit.prevent="handleRegister">
              <template v-if="currentRole === 'enterprise'">
                <div class="input-group"><el-input v-model="registerForm.orgName" :placeholder="$t('login.placeholder.org_name')" size="large" /></div>
              </template>
              <template v-else>
                <div class="input-group"><el-input v-model="registerForm.school" :placeholder="$t('login.placeholder.school')" size="large" /></div>
              </template>
              
              <div class="input-group"><el-input v-model="registerForm.account" :placeholder="$t('login.placeholder.phone_email')" size="large" /></div>
              <div class="input-group"><el-input v-model="registerForm.password" type="password" :placeholder="$t('login.placeholder.set_password')" size="large" show-password /></div>
              
              <div class="agreement-box">
                <el-checkbox v-model="registerForm.agree">
                  {{ $t('login.agree_prefix') }} <span class="link">{{ $t('login.agreement') }}</span>
                </el-checkbox>
              </div>

              <button type="submit" class="submit-btn" :class="currentRole">{{ $t('login.btn_register') }}</button>
            </form>
            
            <div class="switch-view">
              {{ $t('login.has_account') }} <span @click="currentView = 'login'">{{ $t('login.to_login') }}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/store/user'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
import { HomeFilled, OfficeBuilding, School, Briefcase, User, Lock } from '@element-plus/icons-vue'

const { t } = useI18n()
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const currentRole = ref('enterprise')
const currentView = ref('login')
const loading = ref(false)

const formBackgroundStyle = computed(() => {
  return {}
})

const loginForm = reactive({ account: '', password: '', remember: false })
const registerForm = reactive({ orgName: '', school: '', account: '', password: '', agree: false })

const goHome = () => router.push('/portal')

const handleLogin = () => {
  if (!loginForm.account || !loginForm.password) return ElMessage.warning(t('login.msg.input_error'))
  loading.value = true
  
  // [API] 登录接口
  // axios.post('/api/auth/login', loginForm)
  setTimeout(() => {
    loading.value = false
    userStore.login('token-123', {
      name: currentRole.value === 'enterprise' ? '言禾科技' : '李华',
      role: currentRole.value,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${currentRole.value}`
    })
    ElMessage.success(t('login.msg.login_success'))
    router.push(route.query.redirect || '/portal')
  }, 1000)
}

const handleRegister = () => {
  if (!registerForm.agree) return ElMessage.warning(t('login.msg.agree_error'))
  // [API] 注册接口
  // axios.post('/api/auth/register', registerForm)
  ElMessage.success(t('login.msg.register_success'))
  currentView.value = 'login'
}
</script>

<style scoped lang="scss">
/* 变量定义 */
$blue-primary: #004aad;
$orange-accent: #ff6b00;
$gray-bg: #f8f9fa;

.login-page {
  height: 100vh; display: flex; flex-direction: column; overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

/* 头部导航 (修复遮挡) */
.login-header {
  height: 60px; padding: 0 40px; display: flex; justify-content: space-between; align-items: center;
  background: #fff; box-shadow: 0 2px 10px rgba(0,0,0,0.05); z-index: 100;
  
  .brand-box { 
    font-size: 20px; font-weight: 900; background: linear-gradient(135deg, $blue-primary, #0078ff); 
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; cursor: pointer; 
  }
  .back-box { 
    font-size: 14px; color: #666; cursor: pointer; display: flex; align-items: center; gap: 5px;
    &:hover { color: $blue-primary; }
  }
}

.login-body { flex: 1; display: flex; }

/* 左侧品牌区 */
.brand-side {
  flex: 1; background: linear-gradient(135deg, #002a5c 0%, $blue-primary 100%);
  position: relative; display: flex; align-items: center; padding: 0 80px; color: #fff;
  transition: background 0.5s ease;
  overflow: hidden; /* 防止圆圈溢出 */
  
  &.student-mode { background: linear-gradient(135deg, #cc5500 0%, $orange-accent 100%); }
  
  /* 背景圆圈装饰 */
  .bg-circle { position: absolute; border-radius: 50%; background: rgba(255,255,255,0.05); animation: float 10s infinite ease-in-out; }
  .c1 { width: 300px; height: 300px; top: -50px; right: -50px; }
  .c2 { width: 150px; height: 150px; bottom: 50px; left: 50px; animation-delay: -5s; }
  
  .brand-text { position: relative; z-index: 2; width: 100%; max-width: 480px; }
  .icon-wrap { font-size: 48px; margin-bottom: 20px; opacity: 0.8; }
  h1 { font-size: 48px; font-weight: 800; line-height: 1.2; margin-bottom: 20px; }
  p { font-size: 18px; opacity: 0.8; margin-bottom: 40px; }
  
  /* 徽章墙 */
  .badge-wall {
    background: rgba(255,255,255,0.1); padding: 20px; border-radius: 16px; backdrop-filter: blur(10px);
    .wall-title { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; opacity: 0.7; margin-bottom: 15px; }
    .badges { display: flex; gap: 15px; }
    .badge-item {
      width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.2);
      display: flex; align-items: center; justify-content: center; font-size: 18px; cursor: pointer;
      transition: transform 0.2s;
      &:hover { transform: scale(1.1); background: #fff; }
      &.gold { color: #ffd700; } &.silver { color: #c0c0c0; } &.bronze { color: #cd7f32; }
      &.empty { border: 1px dashed rgba(255,255,255,0.5); background: transparent; font-size: 14px; }
    }
  }
}

/* 右侧表单区 */
.form-side {
  flex: 1; display: flex; align-items: center; justify-content: center; background: #fff;
  position: relative;
  /* 如果有背景图，加个遮罩保证文字清晰 */
  &::before { content: ''; position: absolute; inset: 0; background: rgba(255,255,255,0.9); pointer-events: none; }
}

.form-card { width: 100%; max-width: 400px; padding: 40px; position: relative; z-index: 1; }

.role-switch {
  background: #f0f2f5; padding: 4px; border-radius: 8px; display: flex; margin-bottom: 30px;
  .switch-item {
    flex: 1; text-align: center; padding: 8px; font-size: 14px; font-weight: 600; color: #666;
    border-radius: 6px; cursor: pointer; transition: 0.3s; display: flex; align-items: center; justify-content: center; gap: 6px;
    &.active { background: #fff; color: $blue-primary; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
  }
}
/* 学生模式下，激活态变橙色 */
.student-mode ~ .form-side .role-switch .switch-item.active { color: $orange-accent; } /* 这里的CSS选择器可能选不到，我们在JS里控制更简单，或者直接用下面的方式 */
/* 简单处理：根据父级类名变色比较麻烦，直接写死不同颜色的类 */

.welcome-title { font-size: 28px; font-weight: 800; color: #333; margin-bottom: 5px; }
.welcome-sub { color: #999; margin-bottom: 30px; }

.input-group { margin-bottom: 20px; }
:deep(.el-input__wrapper) { padding: 12px; border-radius: 8px; box-shadow: 0 0 0 1px #eee inset; }
:deep(.el-input__wrapper.is-focus) { box-shadow: 0 0 0 1px $blue-primary inset !important; }

.action-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; font-size: 14px; }
.forgot-pwd { color: #999; cursor: pointer; &:hover { color: $blue-primary; } }

.submit-btn {
  width: 100%; height: 48px; border: none; border-radius: 8px; font-size: 16px; font-weight: bold; color: #fff; cursor: pointer; transition: 0.3s;
  background: $blue-primary;
  &:hover { opacity: 0.9; transform: translateY(-1px); }
  &.individual { background: $orange-accent; }
}

.switch-view { margin-top: 20px; text-align: center; font-size: 14px; color: #666; span { color: $blue-primary; font-weight: bold; cursor: pointer; } }
.agreement-box { margin-bottom: 20px; font-size: 12px; .link { color: $blue-primary; cursor: pointer; } }

@keyframes float { 0%,100%{transform:translate(0,0);} 50%{transform:translate(10px,-10px);} }

/* 响应式 */
@media (max-width: 992px) {
  .brand-side { display: none; }
  .form-side::before { display: none; } /* 手机端去掉遮罩 */
}
</style>