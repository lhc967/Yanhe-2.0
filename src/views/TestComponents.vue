<template>
  <div class="test-page">
    <h1>组件测试实验室</h1>
    <el-divider />

    <div class="section">
      <h2>1. 登录弹窗</h2>
      <el-button type="primary" @click="showLogin = true">打开登录弹窗</el-button>
      <p v-if="userStore.isLoggedIn" class="success-text">
        当前状态：已登录 ({{ userStore.userInfo.name }})
      </p>
      <p v-else>当前状态：未登录</p>
      
      <LoginModal v-model="showLogin" @success="handleLoginSuccess" />
    </div>

    <el-divider />

    <div class="section">
      <h2>2. 课程播放器 (带断点续播)</h2>
      <VideoPlayer 
        src="https://media.w3.org/2010/05/sintel/trailer.mp4" 
        course-id="101" 
      />
    </div>

    <el-divider />

    <div class="section">
      <h2>3. 拼音纠错互动</h2>
      <MLPinyinCorrect />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/store/user'
import LoginModal from '@/components/LoginModal.vue'
import VideoPlayer from '@/components/VideoPlayer.vue'
import MLPinyinCorrect from '@/components/MLPinyinCorrect.vue'

const userStore = useUserStore()
const showLogin = ref(false)

const handleLoginSuccess = () => {
  console.log('登录成功回调触发')
}
</script>

<style scoped>
.test-page {
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
}
.section {
  margin-bottom: 40px;
}
.success-text {
  color: green;
  font-weight: bold;
}
</style>