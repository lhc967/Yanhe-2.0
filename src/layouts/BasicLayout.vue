<template>
  <el-container class="layout-container">
    <el-aside width="220px" class="layout-aside">
      <div class="logo">
        <h2>言禾 YanHe</h2>
      </div>
      <el-menu
        :default-active="activeMenu"
        class="el-menu-vertical"
        background-color="#1a237e"
        text-color="#fff"
        active-text-color="#ff9800"
        router
      >
        <el-menu-item index="/">
          <el-icon><HomeFilled /></el-icon>
          <span>首页大厅</span>
        </el-menu-item>
        
        <el-menu-item index="/study">
          <el-icon><Reading /></el-icon>
          <span>学习中心</span>
        </el-menu-item>
        
        <el-menu-item index="/user">
          <el-icon><User /></el-icon>
          <span>个人中心</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="layout-header">
        <div class="header-left">
          <span>国际中文教育平台</span>
        </div>
        <div class="header-right">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              {{ userStore.userInfo.name || '用户' }}
              <el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="profile">个人资料</el-dropdown-item>
                <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
// 自动导入图标需要额外配置，这里为了简单直接引入
import { HomeFilled, Reading, User, ArrowDown } from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()

// 当前激活的菜单项
const activeMenu = computed(() => route.path)

const handleCommand = (command) => {
  if (command === 'logout') {
    userStore.logout()
    router.push('/login')
  } else if (command === 'profile') {
    router.push('/user')
  }
}
</script>

<style scoped lang="scss">
/* 直接在这里引入变量也可以，或者在 vite.config 配置全局引入 */
$color-primary: #1a237e;

.layout-container {
  height: 100vh;
}

.layout-aside {
  background-color: $color-primary;
  color: #fff;
  display: flex;
  flex-direction: column;

  .logo {
    height: 60px;
    line-height: 60px;
    text-align: center;
    background-color: darken($color-primary, 10%); // 稍微深一点
    
    h2 {
      margin: 0;
      font-size: 20px;
      font-weight: 600;
      color: #fff;
    }
  }

  .el-menu-vertical {
    border-right: none; // 去掉菜单右侧边框
  }
}

.layout-header {
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .el-dropdown-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #333;
  }
}

.el-main {
  background-color: #f0f2f5;
  padding: 20px;
}
</style>