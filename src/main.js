import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// 1. 引入 i18n 配置 (指向我们刚才创建的 src/i18n/index.js)
import i18n from './i18n'

// 2. 引入 Element Plus 及其样式/图标
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 3. 引入 Bootstrap (解决布局问题)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// 4. 引入全局样式 (如有)
// import './assets/main.css'

// --- 初始化应用 ---
const app = createApp(App)

// --- 注册插件 ---
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(i18n) // 🔥 挂载 i18n

// --- 注册所有 Element Plus 图标 ---
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// --- 挂载应用 ---
app.mount('#app')