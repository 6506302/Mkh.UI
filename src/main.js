import { configure } from '../package/index.js'
import zhCN from '@mkh-locale/zh-cn'
import en from '@mkh-locale/en'
import './mod.js'

mkh.config.site.title = '17MKH'
mkh.config.site.home = '/doc/home'
mkh.config.auth.enableButtonPermissions = true
/** 配置登录组件 */
mkh.config.component.login = 'k'

/** 为什么不设置一个默认语言包呢？ */
/** 因为不知道有多少模块集成，也就无法在打包的时候动态加载模块的语言包文件，所以必须手动导入语言包 */
configure({ locale: { messages: [zhCN, en] } })
