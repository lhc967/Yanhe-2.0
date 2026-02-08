<template>
  <div class="unlock-page">
    
    <nav class="navbar fixed-top bg-white px-3 shadow-sm" style="height: 60px;">
      <div class="d-flex align-items-center cursor-pointer" @click="$router.back()">
        <i class="bi bi-x-lg fs-5 text-dark"></i>
      </div>
      <span class="fw-bold mx-auto">{{ $t('unlock.nav_title') }}</span>
      <span class="text-muted small">{{ $t('unlock.restore_purchase') }}</span>
    </nav>

    <div class="vip-hero">
      <div class="vip-title">{{ $t('unlock.pro_title') }}</div>
      <p class="opacity-75">{{ $t('unlock.pro_desc') }}</p>
    </div>

    <div class="card-container">
      <div class="benefit-card">
        <div class="row g-4 mb-4">
          <div class="col-4" v-for="item in benefits" :key="item.key">
            <div class="icon-box"><i :class="item.icon"></i></div>
            <div class="fw-bold mb-1 small">{{ $t(`unlock.benefits.${item.key}.title`) }}</div>
            <div class="small text-muted scale-90">{{ $t(`unlock.benefits.${item.key}.desc`) }}</div>
          </div>
        </div>

        <div class="price-section" :class="{ active: selectedPlan === 'year' }" @click="selectedPlan = 'year'">
          <div class="tag-save">{{ $t('unlock.plans.year_tag') }}</div>
          <div class="mt-2 d-flex align-items-baseline justify-content-center">
            <span class="fs-4 fw-bold">¥</span>
            <span class="price-lg">49</span>
            <span class="fs-6 text-muted">/{{ $t('unlock.plans.unit_year') }}</span>
            <span class="price-old">¥498</span>
          </div>
          <div class="small text-muted mt-1">{{ $t('unlock.plans.year_desc') }}</div>
        </div>

        <div class="price-section small-plan" :class="{ active: selectedPlan === 'month' }" @click="selectedPlan = 'month'">
          <div class="d-flex align-items-center justify-content-center gap-2">
            <span class="fw-bold">¥ 12.9 / {{ $t('unlock.plans.unit_month') }}</span>
            <span class="badge bg-secondary">{{ $t('unlock.plans.month_tag') }}</span>
          </div>
        </div>

        <hr class="my-4">

        <h6 class="fw-bold mb-3 text-start"><i class="bi bi-lightning-charge-fill text-warning"></i> {{ $t('unlock.compare.title') }}</h6>
        <table class="compare-table">
          <thead>
            <tr class="text-muted small">
              <th>{{ $t('unlock.compare.col_feature') }}</th>
              <th class="text-center">{{ $t('unlock.compare.col_free') }}</th>
              <th class="text-center text-dark fw-bold">PRO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ $t('unlock.compare.row_ai') }}</td>
              <td class="text-center">{{ $t('unlock.compare.val_limit') }}</td>
              <td class="text-center"><i class="bi bi-infinity check-gold"></i></td>
            </tr>
            <tr>
              <td>{{ $t('unlock.compare.row_map') }}</td>
              <td class="text-center">{{ $t('unlock.compare.val_map_limit') }}</td>
              <td class="text-center"><i class="bi bi-check-circle-fill check-gold"></i> {{ $t('unlock.compare.val_all') }}</td>
            </tr>
            <tr>
              <td>{{ $t('unlock.compare.row_npc') }}</td>
              <td class="text-center"><i class="bi bi-lock-fill text-muted"></i></td>
              <td class="text-center"><i class="bi bi-check-circle-fill check-gold"></i> {{ $t('unlock.compare.val_unlock') }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="text-center text-muted small mt-4 mb-5 pb-5">
        {{ $t('unlock.agreement') }}
      </p>
    </div>

    <div class="bottom-bar">
      <div class="total-price">
        {{ $t('unlock.total') }}: <span class="num">¥{{ selectedPlan === 'year' ? '49.00' : '12.90' }}</span>
      </div>
      <button class="btn-unlock" @click="handlePayment">
        {{ $t('unlock.btn_pay') }} <i class="bi bi-arrow-right"></i>
      </button>
    </div>

    <el-dialog v-model="showPayModal" :title="$t('unlock.pay_modal.title')" width="300px" align-center>
      <div class="text-center">
        <p class="text-muted mb-2">{{ $t('unlock.pay_modal.amount') }}</p>
        <h2 class="fw-bold mb-4">¥{{ selectedPlan === 'year' ? '49.00' : '12.90' }}</h2>
        <div class="qr-placeholder mb-3">
          <i class="bi bi-qr-code-scan" style="font-size: 80px;"></i>
          <p class="small mt-2">{{ $t('unlock.pay_modal.scan_tip') }}</p>
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-success" @click="finishPay">{{ $t('unlock.pay_modal.btn_mock') }}</button>
        </div>
      </div>
    </el-dialog>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
import { useI18n } from 'vue-i18n'
import { ElMessage, ElLoading } from 'element-plus'

const { t } = useI18n()
const router = useRouter()
const userStore = useUserStore()

const showPayModal = ref(false)
const selectedPlan = ref('year')

// Benefits data (using key for i18n)
const benefits = [
  { icon: 'bi bi-mic-fill', key: 'ai' },
  { icon: 'bi bi-map-fill', key: 'map' },
  { icon: 'bi bi-robot', key: 'npc' }
]

const handlePayment = () => {
  if (!userStore.isLoggedIn) {
    ElMessage.warning(t('unlock.login_warn'))
    router.push('/login')
    return
  }
  showPayModal.value = true
}

const finishPay = () => {
  const loading = ElLoading.service({ text: t('unlock.verifying'), background: 'rgba(255,255,255,0.8)' })
  
  // [API] 调用后端支付验证接口
  // const res = await axios.post('/api/pay/verify', { orderId: '...' })
  
  setTimeout(() => {
    loading.close()
    showPayModal.value = false
    
    // 更新本地状态
    if (userStore.upgradeToVip) {
      userStore.upgradeToVip()
    } else {
      userStore.isVip = true
      localStorage.setItem('yanhe_is_vip', 'true')
    }
    
    ElMessage.success({
      message: t('unlock.success_msg'),
      duration: 3000
    })
    
    setTimeout(() => router.back(), 1500)
  }, 1200)
}
</script>

<style scoped lang="scss">
$gold: #d4af37;
$dark: #1a1a1a;

.unlock-page { background: #f8f9fa; min-height: 100vh; padding-top: 60px; font-family: -apple-system, sans-serif; }

.vip-hero {
  background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
  color: #fff; padding: 40px 20px 80px; text-align: center;
  border-radius: 0 0 50% 50% / 20px; margin-bottom: -60px;
  .vip-title { font-size: 32px; font-weight: 900; color: $gold; letter-spacing: 1px; }
}

.card-container { max-width: 600px; margin: 0 auto; padding: 0 20px; position: relative; z-index: 2; }

.benefit-card {
  background: #fff; border-radius: 16px; padding: 30px 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  border: 1px solid rgba(212, 175, 55, 0.2);
}

.icon-box {
  width: 50px; height: 50px; background: #fff3cd;
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-size: 24px; color: #b8860b; margin: 0 auto 10px;
}
.scale-90 { transform: scale(0.9); }

.price-section { 
  border: 2px solid #eee; border-radius: 12px; padding: 20px; text-align: center; cursor: pointer; transition: 0.2s; position: relative; overflow: hidden;
  &.active { border-color: $gold; background: rgba(212, 175, 55, 0.05); }
  .tag-save { position: absolute; top: 0; left: 0; background: #d32f2f; color: #fff; padding: 2px 8px; font-size: 10px; border-radius: 0 0 8px 0; }
  .price-lg { font-size: 40px; font-weight: 900; color: #333; line-height: 1; }
  .price-old { text-decoration: line-through; color: #999; margin-left: 5px; font-size: 14px; }
}
.small-plan { margin-top: 15px; padding: 15px; opacity: 0.8; &.active { opacity: 1; border-color: $gold; } }

.compare-table { width: 100%; text-align: left; td { padding: 10px 5px; border-bottom: 1px solid #f5f5f5; font-size: 13px; } .check-gold { color: $gold; } }

.bottom-bar {
  position: fixed; bottom: 0; left: 0; right: 0; background: #fff; padding: 15px 20px;
  box-shadow: 0 -5px 20px rgba(0,0,0,0.05); display: flex; justify-content: space-between; align-items: center; z-index: 100;
  .total-price { font-size: 14px; color: #666; .num { font-size: 24px; font-weight: bold; color: #d32f2f; } }
  .btn-unlock {
    background: $dark; color: $gold; border: none; padding: 10px 30px; border-radius: 50px; font-weight: bold;
  }
}

.qr-placeholder { background: #f8f9fa; padding: 20px; border-radius: 8px; color: #333; }
</style>