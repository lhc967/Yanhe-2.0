import { createI18n } from 'vue-i18n'

// ===================================================
// 1. 核心语言包 (真实文件，确保 src/locales/ 下有这些文件)
// ===================================================
import zh from '../locales/zh-CN'
import en from '../locales/en-US'
import jp from '../locales/jp'
import kr from '../locales/kr'
import fr from '../locales/fr'
import de from '../locales/de'
import ru from '../locales/ru'
import es from '../locales/es'
import ar from '../locales/ar' // 阿拉伯语
import it from '../locales/it' // 意大利语
import pt from '../locales/pt' // 葡萄牙语
import th from '../locales/th' // 泰语
import vn from '../locales/vn' // 越南语
import id from '../locales/id' // 印尼语
import ms from '../locales/ms' // 马来语
import hi from '../locales/hi' // 印地语
import tr from '../locales/tr' // 土耳其语
import ir from '../locales/ir' // 波斯语
import pk from '../locales/pk' // 乌尔都语
import pl from '../locales/pl' // 波兰语
import gr from '../locales/gr' // 希腊语
import nl from '../locales/nl' // 荷兰语
import sw from '../locales/sw' // 斯瓦希里语
import la from '../locales/la' // 拉丁语

// ===================================================
// 2. 拓展语言配置
// (为了防止报错，暂时将未创建文件的语言指向 'en')
// ===================================================
const messages = {
  // --- 核心已存在 ---
  zh, // 中文
  en, // 英语
  jp, // 日语
  kr, // 韩语
  fr, // 法语
  de, // 德语
  ru, // 俄语
  es, // 西班牙语

  // --- 拓展语言 (HomeEntry 中的列表) ---
  // 注意：此处暂时使用英文包(en)兜底，防止报错。
  // 如果你后续创建了 src/locales/ar.js，请改为 import ar from '../locales/ar' 并在此处使用
  ar, // 阿拉伯语
  it, // 意大利语
  pt, // 葡萄牙语
  th, // 泰语
  vn, // 越南语
  id, // 印尼语
  ms, // 马来语
  hi, // 印地语
  tr, // 土耳其语
  ir, // 波斯语 (Persian)
  pk, // 乌尔都语 (Pakistan)
  pl, // 波兰语
  gr, // 希腊语
  nl, // 荷兰语
  sw, // 斯瓦希里语
  la  // 拉丁语
}

// 3. 获取本地缓存的语言
const savedLocale = localStorage.getItem('user_locale')

// 兼容处理：如果缓存里是旧的 'cn'，强制转为 'zh'
const defaultLocale = (savedLocale === 'cn' ? 'zh' : savedLocale) || 'zh'

// 4. 创建 i18n 实例
const i18n = createI18n({
  legacy: false, // 必须为 false 以支持 Composition API
  globalInjection: true, // 全局注入 $t
  locale: defaultLocale, // 当前语言
  fallbackLocale: 'en',  // 缺省回退语言
  messages
})

export default i18n