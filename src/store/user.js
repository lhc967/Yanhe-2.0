/**
 * src/store/user.js
 * 用户全状态管理：登录、历史、收藏、VIP权限
 */
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    // 1. 基础认证状态
    token: localStorage.getItem('yanhe_token') || '',
    userInfo: JSON.parse(localStorage.getItem('yanhe_user_info')) || {},
    
    // 2. 🔥 VIP 权限状态 (新增：从持久化存储初始化)
    isVip: localStorage.getItem('yanhe_is_vip') === 'true',
    
    // 3. 学习记录与收藏
    history: JSON.parse(localStorage.getItem('yanhe_history')) || [],
    favorites: [],
    
    // 4. 全局演示模式
    isDemo: sessionStorage.getItem('yanhe_demo_mode') === 'true'
  }),

  getters: {
    // 只要有 token 就算已登录
    isLoggedIn: (state) => !!state.token
  },

  actions: {
    // --- 1. 登录并同步数据 ---
    login(token, user) {
      this.token = token;
      this.userInfo = user;
      
      // 持久化保存
      localStorage.setItem('yanhe_token', token);
      localStorage.setItem('yanhe_user_info', JSON.stringify(user));
      
      // 登录后立即同步云端数据 (收藏夹等)
      this.syncUserData();
    },

    // --- 2. 🔥 升级 VIP (新增：用于支付成功后调用) ---
    upgradeToVip() {
      this.isVip = true;
      localStorage.setItem('yanhe_is_vip', 'true');
    },

    // --- 3. 退出登录 (彻底清理) ---
    logout() {
      // 清空 State
      this.token = '';
      this.userInfo = {};
      this.favorites = [];
      this.isVip = false; // 退出时重置权限
      this.isDemo = false;
      
      // 清空所有相关的持久化数据
      localStorage.removeItem('yanhe_token');
      localStorage.removeItem('yanhe_user_info');
      localStorage.removeItem('yanhe_is_vip'); // 清理VIP标记
      sessionStorage.removeItem('yanhe_demo_mode');
    },

    // --- 4. 记录学习历史 (自动去重，保留最近 20 条) ---
    addHistory(course) {
      const idx = this.history.findIndex(h => h.id === course.id);
      if (idx > -1) this.history.splice(idx, 1);
      
      this.history.unshift({ ...course, time: new Date().toLocaleString() });
      
      if (this.history.length > 20) this.history.pop();
      
      localStorage.setItem('yanhe_history', JSON.stringify(this.history));
    },

    // --- 5. 切换演示模式 ---
    toggleDemo() {
      this.isDemo = !this.isDemo;
      sessionStorage.setItem('yanhe_demo_mode', this.isDemo);
      
      if (this.isDemo) {
        // 开启演示：自动登录一个 Mock 账号
        this.login('demo-token-888', { 
          name: '演示用户', 
          role: 'individual',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'
        });
      } else {
        this.logout();
      }
      
      // 刷新页面以重置所有组件状态
      window.location.reload();
    },

    // --- 6. 模拟同步云端数据 ---
    async syncUserData() {
      console.log('正在同步言禾云端数据...');
      
      // 模拟拉取收藏夹
      this.favorites = [1, 3]; 
      
      // 实际开发中，这里也可以拉取服务器端的 VIP 状态
      // const res = await api.getUserProfile();
      // this.isVip = res.data.isVip;
    }
  }
});