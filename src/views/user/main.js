/* src/main.js */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 1. 引入刚才那个文件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

// 2. 安装插件 (必须在 mount 之前！)
app.use(router)
app.use(ElementPlus)

// 3. 最后一步才是挂载 (Mount)
app.mount('#app')