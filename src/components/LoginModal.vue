<template>
  <el-dialog
    v-model="visible"
    :title="$t('login.welcome')"
    width="400px"
    :close-on-click-modal="false"
    center
    destroy-on-close
  >
    <el-form :model="form" label-position="top" size="large">
      <el-form-item :label="$t('login.placeholder.ind_account')">
        <el-input 
          v-model="form.username" 
          :placeholder="$t('login.placeholder.ind_account')" 
          prefix-icon="User" 
        />
      </el-form-item>
      <el-form-item :label="$t('login.placeholder.password')">
        <el-input 
          v-model="form.password" 
          type="password" 
          :placeholder="$t('login.placeholder.password')" 
          prefix-icon="Lock" 
          show-password
        />
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <div class="demo-tip">
          <el-button link type="info" size="small" @click="fillDemoAccount">
            {{ $t('login.demo_fill') }}
          </el-button>
        </div>
        <el-button @click="close">{{ $t('common.cancel') }}</el-button>
        <el-button type="primary" :loading="loading" @click="handleLogin">
          {{ $t('login.btn_login') }}
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '@/store/user'
import { useI18n } from 'vue-i18n' // 引入 i18n
import { ElMessage } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue', 'success'])

const { t } = useI18n() // 获取翻译函数
const userStore = useUserStore()
const loading = ref(false)
const form = ref({
  username: '',
  password: ''
})

const visible = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const close = () => {
  visible.value = false
}

const fillDemoAccount = () => {
  form.value.username = 'admin'
  form.value.password = '123456'
}

const handleLogin = async () => {
  // 提示语多语言化
  if (!form.value.username || !form.value.password) {
    ElMessage.warning(t('login.msg.input_error'))
    return
  }

  loading.value = true
  try {
    await userStore.login(form.value)
    ElMessage.success(t('login.msg.login_success'))
    emit('success')
    close()
  } catch (error) {
    // 错误信息如果后端没翻译，前端可以使用通用提示
    ElMessage.error(error.message || t('ai.error_msg'))
  } finally {
    loading.value = false
  }
}
</script>

<style scoped lang="scss">
/* 样式保持原样 */
.dialog-footer {
  display: flex;
  flex-direction: column;
  gap: 10px;
  .demo-tip {
    text-align: right;
    margin-bottom: 10px;
  }
  button {
    margin-left: 0;
    width: 100%;
  }
}
</style>