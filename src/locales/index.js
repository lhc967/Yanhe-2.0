import { createI18n } from 'vue-i18n'
import zhCN from './zh-CN'
import enUS from './en-US'

// 获取浏览器语言或本地缓存语言，默认中文
const defaultLang = localStorage.getItem('yanhe_lang') || 'zh-CN'

const i18n = createI18n({
  // 使用 Composition API 模式，必须设置为 false
  legacy: false, 
  // 全局注入 $t 函数
  globalInjection: true, 
  // 默认语言
  locale: defaultLang,
  // 备用语言（如果当前语言缺省翻译，回退到这个语言）
  fallbackLocale: 'zh-CN',
  // 语言包
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS
  }
})

export default i18n