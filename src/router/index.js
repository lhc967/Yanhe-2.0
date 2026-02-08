import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store/user'
import { ElMessage } from 'element-plus'

// 注意：这里不再静态引入所有组件，而是使用动态导入
// 只有 HomeView (首屏) 可以保留静态引入，其他的全部懒加载

import HomeView from '@/views/home/HomeView.vue' 

const routes = [
  // --- 基础页 ---
  {
    path: '/',
    name: 'Home',
    component: HomeView, // 首屏直接加载
    meta: { title: '言禾 - 语言选择' }
  },
  {
    path: '/portal',
    name: 'Portal',
    // ⚡️ 懒加载写法：只有访问 /portal 时，才会下载这个页面的代码
    component: () => import('@/views/portal/PortalView.vue'),
    meta: { title: '言禾 - 综合门户' }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/LoginView.vue'),
    meta: { title: '言禾 - 统一身份认证' }
  },

  // --- 教育云板块 ---
  {
    path: '/education',
    name: 'Education',
    component: () => import('@/views/education/EducationView.vue'),
    meta: { title: '言禾 - 教育云' }
  },
  
  // --- 搜索功能 ---
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/search/SearchResultView.vue'),
    meta: { title: '言禾 - 全局搜索' }
  },

  // --- 支付/收银台 ---
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('@/views/payment/CheckoutView.vue'),
    meta: { title: '言禾 - 安全收银台', requiresAuth: true }
  },
  
  // --- 学习功能 ---
  {
    path: '/review',
    name: 'Review',
    component: () => import('@/views/study/ReviewView.vue'),
    meta: { title: '智能复习中心' }
  },
  {
    path: '/course/:id', 
    name: 'CoursePlayer',
    component: () => import('@/views/study/CoursePlayerView.vue'),
    meta: { title: '课程播放', requiresAuth: true }
  },
  
  // --- 占位页面 ---
  // 对于还没写的页面，我们可以暂时都指向 Portal，或者写一个 404 页
  {
    path: '/story',
    name: 'Story',
    component: () => import('@/views/story/StoryView.vue'),
    meta: { title: '中国故事' }
  },
{
  path: '/user/certification',
  name: 'Certification',
  component: () => import('@/views/user/CertificationView.vue'),
  meta: { title: '言禾 - 高校认证', requiresAuth: true }
},
{
  path: '/story/:id', // 注意这里有个 :id 参数
  name: 'StoryDetail',
  component: () => import('@/views/story/StoryDetailView.vue'),
  meta: { title: '言禾 - 故事详情' }
},
{
    path: '/story/publish',
    name: 'StoryPublish',
    component: () => import('@/views/story/StoryPublishView.vue'),
    meta: { title: '言禾 - 发布笔记' }
  },
  
  // 2. 写故事 (类似公众号文章)
  {
    path: '/story/write',
    name: 'StoryWriter',
    component: () => import('@/views/story/StoryWriterView.vue'),
    meta: { title: '言禾 - 创作文章' }
  },
  {
    path: '/story/ai',
    name: 'StoryAI',
    component: () => import('@/views/story/StoryAIView.vue'),
    meta: { title: '言禾 - 灵感锦囊' }
  },

{
  path: '/service/detail',
  name: 'TaskDetail',
  component: () => import('@/views/service/TaskDetailView.vue'),
  meta: { title: '任务详情 - 立即接单' }
},
{
  path: '/user/profile',
  name: 'UserProfile',
  component: () => import('@/views/user/ProfileView.vue'),
  meta: { title: '言禾 - 个人主页', requiresAuth: true }
},
{
  path: '/service/ai',
  name: 'AiFastService',
  component: () => import('@/views/ai/AiFastServiceView.vue'),
  meta: { title: '言禾 AI 极速服务' }
},
{
  path: '/chat',
  name: 'Chat',
  component: () => import('@/views/user/ChatView.vue'),
  meta: { title: '言禾 - 消息中心', requiresAuth: true }
},
{
  path: '/chat',
  name: 'Chat',
  component: () => import('@/views/user/ChatView.vue'),
  meta: { title: '言禾 - 消息中心', requiresAuth: true }
},
  {
  path: '/service/publish',
  name: 'TaskPublish',
  component: () => import('@/views/service/TaskPublishView.vue'),
  meta: { title: '言禾 - 发布需求', requiresAuth: true }
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('@/views/service/ServiceView.vue'),
    meta: { title: '任务大厅' }
  },
  {
    path: '/unlock-pro',
    name: 'UnlockPro',
    component: () => import('@/views/culture/UnlockProView.vue')
  },
  
  // 新增：教育云 AI 博弈页 (带参数 ?topic=xxx)
  {
    path: '/education/ai',
    name: 'EducationAI',
    component: () => import('@/views/education/EducationAIView.vue')
  },
  
  // 新增：方言语料上传页
  {
    path: '/culture/upload',
    name: 'CorpusUpload',
    component: () => import('@/views/culture/CorpusUploadView.vue')
  },
  {
    path: '/user/badges',
    name: 'BadgeWall',
    component: () => import('../views/user/BadgeWallView.vue'),
    meta: { title: '言禾 - 勋章墙' }
  },
  {
    path: '/culture',
    name: 'Culture',
    component: () => import('@/views/culture/CultureView.vue'),
    meta: { title: '方言地图' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  
  // 1. 设置标题
  if (to.meta.title) document.title = to.meta.title;

  // 2. 鉴权逻辑
  if (to.meta.requiresAuth && !userStore.isLoggedIn) {
    ElMessage.warning('该功能需要登录后访问');
    next({ 
      path: '/login', 
      query: { redirect: to.fullPath } 
    });
  } else {
    next();
  }
});

export default router