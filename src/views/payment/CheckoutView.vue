<template>
  <div class="checkout-page">
    
    <nav class="navbar navbar-expand-lg fixed-top custom-navbar">
      <div class="container-fluid px-4">
        <div class="navbar-brand fw-bold text-primary">{{ $t('brand') }}</div>
        <div class="ms-auto text-muted small d-flex align-items-center gap-2">
          <i class="bi bi-shield-lock-fill text-success"></i> {{ $t('checkout.secure_ssl') }}
        </div>
      </div>
    </nav>

    <div class="demo-switcher">
      <span><i class="bi bi-eye"></i> {{ $t('checkout.demo.label') }}</span>
      <button class="demo-btn" 
              :class="{ active: currentScenario === 'membership' }" 
              @click="switchScenario('membership')">{{ $t('checkout.demo.scenario_a') }}</button>
      <button class="demo-btn" 
              :class="{ active: currentScenario === 'course' }" 
              @click="switchScenario('course')">{{ $t('checkout.demo.scenario_b') }}</button>
      <button class="demo-btn" 
              :class="{ active: currentScenario === 'task' }" 
              @click="switchScenario('task')">{{ $t('checkout.demo.scenario_c') }}</button>
    </div>

    <div class="countdown-bar" v-if="!isPaid">
      <i class="bi bi-clock"></i> {{ $t('checkout.countdown_prefix') }} <strong>{{ timerDisplay }}</strong> {{ $t('checkout.countdown_suffix') }}
    </div>

    <div class="container success-view" v-if="isPaid">
      <div class="success-icon"><i class="bi bi-check-lg"></i></div>
      <h2 class="fw-bold mb-3">{{ $t(`checkout.success.${currentScenario}.title`) }}</h2>
      <p class="text-muted mb-5">{{ $t(`checkout.success.${currentScenario}.desc`) }}</p>

      <div class="d-flex justify-content-center gap-3">
        <button class="btn btn-outline-secondary rounded-pill px-4" @click="$router.push('/portal')">{{ $t('checkout.btn_home') }}</button>
        <button class="btn btn-primary rounded-pill px-5 fw-bold" @click="handleRedirect">{{ $t('checkout.btn_experience') }}</button>
      </div>
    </div>

    <div class="checkout-container" v-else>
      <transition name="fade" mode="out-in">
        <div class="row" :key="currentScenario">
          <div class="col-lg-8">
            
            <div class="vip-card" v-if="currentScenario === 'membership'">
              <div class="vip-tag">Pro Membership</div>
              <div class="vip-title">{{ $t('checkout.products.membership.title') }}</div>
              <div class="vip-desc">{{ $t('checkout.products.membership.desc') }}</div>
              <div class="vip-price">¥98 <span style="font-size:14px; color:#aaa; font-weight:normal;">/{{ $t('checkout.unit_year') }}</span></div>
              <ul class="vip-list">
                <li><i class="bi bi-check-circle-fill"></i> {{ $t('checkout.products.membership.feat1') }}</li>
                <li><i class="bi bi-check-circle-fill"></i> {{ $t('checkout.products.membership.feat2') }}</li>
                <li><i class="bi bi-check-circle-fill"></i> {{ $t('checkout.products.membership.feat3') }}</li>
              </ul>
            </div>

            <div class="pay-card" v-if="currentScenario === 'course'">
              <div class="card-title-sm">{{ $t('checkout.course_info') }}</div>
              <div class="product-info">
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200" class="product-thumb">
                <div>
                  <div class="product-title">{{ $t('checkout.products.course.title') }}</div>
                  <div class="product-desc">
                    <span class="tag-course"><i class="bi bi-play-circle-fill"></i> {{ $t('checkout.products.course.tag') }}</span><br>
                    {{ $t('checkout.products.course.detail') }}
                  </div>
                </div>
              </div>
            </div>

            <div class="pay-card" v-if="currentScenario === 'task'">
              <div class="card-title-sm">{{ $t('checkout.escrow_detail') }}</div>
              <div class="product-info">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200" class="product-thumb">
                <div>
                  <div class="product-title">{{ $t('checkout.products.task.title') }}</div>
                  <div class="product-desc">
                    <span class="tag-escrow"><i class="bi bi-shield-lock"></i> {{ $t('checkout.products.task.tag') }}</span><br>
                    {{ $t('checkout.products.task.detail') }}
                  </div>
                </div>
              </div>
            </div>

            <div class="pay-card">
              <div class="card-title-sm">{{ $t('checkout.payment_method') }}</div>

              <div class="payment-method" 
                   :class="{ active: payMethod === 'wechat' }" 
                   @click="payMethod = 'wechat'">
                <div class="d-flex align-items-center gap-3">
                  <i class="bi bi-wechat text-success fs-4"></i>
                  <div>
                    <div class="fw-bold">{{ $t('checkout.pay_wechat') }}</div>
                    <div class="small text-muted">{{ $t('checkout.pay_wechat_desc') }}</div>
                  </div>
                </div>
                <i :class="payMethod === 'wechat' ? 'bi bi-check-circle-fill check-circle active' : 'bi bi-circle check-circle'"></i>
              </div>

              <div class="payment-method" 
                   :class="{ active: payMethod === 'alipay' }" 
                   @click="payMethod = 'alipay'">
                <div class="d-flex align-items-center gap-3">
                  <i class="bi bi-alipay text-primary fs-4"></i>
                  <div>
                    <div class="fw-bold">{{ $t('checkout.pay_alipay') }}</div>
                    <div class="small text-muted">{{ $t('checkout.pay_alipay_desc') }}</div>
                  </div>
                </div>
                <i :class="payMethod === 'alipay' ? 'bi bi-check-circle-fill check-circle active' : 'bi bi-circle check-circle'"></i>
              </div>

              <div class="payment-method" 
                   :class="{ active: payMethod === 'card' }" 
                   @click="payMethod = 'card'">
                <div class="d-flex align-items-center gap-3">
                  <i class="bi bi-credit-card-2-back text-dark fs-4"></i>
                  <div>
                    <div class="fw-bold">{{ $t('checkout.pay_card') }}</div>
                    <div class="small text-muted">{{ $t('checkout.pay_card_desc') }}</div>
                  </div>
                </div>
                <i :class="payMethod === 'card' ? 'bi bi-check-circle-fill check-circle active' : 'bi bi-circle check-circle'"></i>
              </div>
            </div>

            <div class="pay-card" v-if="currentScenario !== 'membership'">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="needInvoice">
                <label class="form-check-label fw-bold" for="needInvoice">{{ $t('checkout.need_invoice') }}</label>
              </div>
            </div>

          </div>

          <div class="col-lg-4">
            <div class="pay-card sticky-top" style="top: 100px;">
              <div class="card-title-sm">{{ $t('checkout.summary_title') }}</div>

              <div v-if="currentScenario === 'membership'">
                <div class="price-row"><span>{{ $t('checkout.price_original') }}</span><span class="text-decoration-line-through">¥ 298.00</span></div>
                <div class="price-row text-success"><span>{{ $t('checkout.price_student') }}</span><span>- ¥ 200.00</span></div>
                <div class="price-row text-muted"><span>{{ $t('checkout.price_tax') }}</span><span>¥ 0.00</span></div>
              </div>

              <div v-if="currentScenario === 'course'">
                <div class="price-row"><span>{{ $t('checkout.price_course_orig') }}</span><span class="text-decoration-line-through">¥ 199.00</span></div>
                <div class="price-row text-success"><span>{{ $t('checkout.price_discount') }}</span><span>- ¥ 100.00</span></div>
              </div>

              <div v-if="currentScenario === 'task'">
                <div class="price-row"><span>{{ $t('checkout.price_bounty') }}</span><span>¥ 500.00</span></div>
                <div class="price-row"><span>{{ $t('checkout.price_service_fee') }}</span><span>¥ 25.00</span></div>
                <div class="price-row text-primary"><span>{{ $t('checkout.price_expedite') }}</span><span>¥ 10.00</span></div>
              </div>

              <hr>

              <div class="d-flex justify-content-between align-items-end mb-4">
                <span class="fw-bold">{{ $t('checkout.total_due') }}</span>
                <span class="total-price">{{ totalPrice }}</span>
              </div>

              <button class="btn-pay" :disabled="loading" @click="handlePay">
                <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                {{ loading ? $t('checkout.processing') : btnText }}
              </button>

              <div class="text-center mt-3 text-muted" style="font-size: 12px;">
                <i class="bi bi-shield-check"></i> {{ $t('checkout.guarantee') }}
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/store/user'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'

const { t } = useI18n()
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

// 状态
const currentScenario = ref('membership')
const payMethod = ref('wechat')
const loading = ref(false)
const isPaid = ref(false)
const timeLeft = ref(900)
let timer = null

// 配置数据
const totalPrice = computed(() => {
  if (currentScenario.value === 'membership') return '¥ 98.00'
  if (currentScenario.value === 'course') return '¥ 99.00'
  return '¥ 535.00'
})

const btnText = computed(() => {
  if (currentScenario.value === 'membership') return `${t('checkout.btn_pay_now')} ¥98.00`
  if (currentScenario.value === 'course') return `${t('checkout.btn_pay')} ¥99.00`
  return `${t('checkout.btn_escrow')} ¥535.00`
})

// 倒计时
const timerDisplay = computed(() => {
  const m = Math.floor(timeLeft.value / 60).toString().padStart(2, '0')
  const s = (timeLeft.value % 60).toString().padStart(2, '0')
  return `${m}:${s}`
})

// 方法
const switchScenario = (type) => {
  currentScenario.value = type
  isPaid.value = false
  timeLeft.value = 900
}

const handlePay = () => {
  loading.value = true
  
  // -----------------------------------------------------------
  // [API] 调用统一支付接口
  // const res = await axios.post('/api/pay/create_order', { 
  //   type: currentScenario.value, 
  //   method: payMethod.value 
  // })
  // -----------------------------------------------------------

  setTimeout(() => {
    loading.value = false
    isPaid.value = true
    
    // 更新全局状态
    if (currentScenario.value === 'membership') {
      userStore.userInfo.isVip = true
    }
    
    window.scrollTo(0, 0)
  }, 1500)
}

const handleRedirect = () => {
  if (currentScenario.value === 'membership') {
    router.push('/culture')
  } else if (currentScenario.value === 'course') {
    router.push('/review')
  } else {
    router.push('/service')
  }
}

onMounted(() => {
  if (route.query.type) {
    currentScenario.value = route.query.type
  }
  timer = setInterval(() => {
    if (timeLeft.value > 0) timeLeft.value--
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped lang="scss">
$primary: #004aad;
$accent: #ff6b00;
$gold: #d4af37;
$bg-light: #f4f6f9;

.checkout-page {
  font-family: -apple-system, "PingFang SC", sans-serif;
  background: $bg-light;
  padding-top: 70px;
  color: #333;
  min-height: 100vh;
}

/* 导航 */
.custom-navbar { background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.05); height: 70px; }

/* 演示条 */
.demo-switcher {
  background: #172b4d; color: #fff; padding: 10px; text-align: center; font-size: 13px;
}
.demo-btn {
  background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #fff;
  padding: 4px 12px; border-radius: 4px; margin: 0 5px; cursor: pointer; transition: 0.2s;
  &.active { background: $accent; border-color: $accent; color: #fff; font-weight: 700; }
}

/* 倒计时 */
.countdown-bar {
  background: #fff3cd; color: #856404; text-align: center; font-size: 13px; padding: 8px;
  border-bottom: 1px solid #ffeeba;
}

.checkout-container { max-width: 1000px; margin: 40px auto; padding: 0 20px; }

/* 通用卡片 */
.pay-card {
  background: #fff; border-radius: 12px; border: 1px solid #e0e0e0;
  padding: 25px; margin-bottom: 20px; transition: all 0.3s;
}
.card-title-sm { font-size: 16px; font-weight: 700; color: #333; margin-bottom: 20px; }

/* VIP 卡片 */
.vip-card {
  background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
  border-radius: 20px; padding: 30px; color: #fff; position: relative; overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15); margin-bottom: 20px;
  &::before {
    content: ''; position: absolute; top: -50%; right: -20%; width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%); pointer-events: none;
  }
}
.vip-tag { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: rgba(255,255,255,0.5); margin-bottom: 5px; }
.vip-title { font-size: 24px; font-weight: 800; background: linear-gradient(to right, #fff, #d4af37); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.vip-desc { color: rgba(255,255,255,0.7); font-size: 13px; margin-top: 5px; }
.vip-price { font-size: 32px; font-weight: 900; color: $gold; margin-top: 15px; }
.vip-list { margin-top: 15px; padding: 0; list-style: none; li { font-size: 13px; color: rgba(255,255,255,0.8); margin-bottom: 5px; i { color: $gold; margin-right: 8px; } } }

/* 商品信息 */
.product-info { display: flex; gap: 20px; align-items: flex-start; }
.product-thumb { width: 80px; height: 80px; border-radius: 8px; object-fit: cover; background: #eee; flex-shrink: 0; }
.product-title { font-weight: 700; font-size: 18px; margin-bottom: 5px; color: #000; }
.product-desc { font-size: 14px; color: #666; line-height: 1.5; }
.tag-course { background: #e3f2fd; color: #004aad; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: 700; display: inline-block; margin-bottom: 5px; }
.tag-escrow { background: #e3fcef; color: #006644; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: 700; display: inline-block; margin-bottom: 5px; }

/* 支付方式 */
.payment-method {
  display: flex; align-items: center; justify-content: space-between;
  padding: 15px 20px; border: 1px solid #eee; border-radius: 10px;
  cursor: pointer; transition: 0.2s; margin-bottom: 12px;
  &:hover { border-color: $primary; background: #f8faff; }
  &.active { border-color: $primary; background: rgba(0, 74, 173, 0.05); .check-circle { color: $primary; } }
}
.check-circle { color: #ddd; font-size: 20px; }

/* 结算 */
.price-row { display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 14px; color: #505f79; }
.total-price { font-size: 28px; font-weight: 800; color: #333; }
.btn-pay {
  background: $primary; color: #fff; border: none; width: 100%; padding: 14px;
  font-size: 16px; font-weight: 700; border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 74, 173, 0.2); transition: 0.2s;
  &:hover { background: #003d8f; transform: translateY(-1px); }
  &:disabled { opacity: 0.7; cursor: not-allowed; }
}

/* 成功页 */
.success-view { text-align: center; padding: 60px 20px; }
.success-icon {
  width: 80px; height: 80px; background: #28a745; color: #fff;
  border-radius: 50%; display: inline-flex; align-items: center; justify-content: center;
  font-size: 40px; margin-bottom: 24px; animation: popIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes popIn { from{transform:scale(0);} to{transform:scale(1);} }

/* 动画 */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>