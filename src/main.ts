// 引入样式
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/style/index.scss'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'prismjs/themes/prism-okaidia.css' // 代码样式
import '@/style/element_module/element-variables.scss'  // 自制样式
import '@/style/element_module/element-variables-dark.scss'  // 自制样式

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import { createPinia } from 'pinia'
import Utils from './utils/utils'
import Directive from './directs/index'

const app = createApp(App)
const pinia = createPinia()

// 注册自定义指令
app.use(Directive)

// 全局后置守卫
router.afterEach(() => {
    window.scrollTo(0, 0)    // 会到顶部
})

// 以 virtual: 作为虚拟模块的前缀
import 'virtual:svg-icons-register'

// 注册公共方法到全局
app.config.globalProperties.$utils = Utils

// 引入全局组件
import SvgIcon from '@/components/SvgIcon.vue'
// 统一注册Icon图标
import * as ElIconModules from '@element-plus/icons-vue' // 全局引入element-plus中的icon
Object.keys(ElIconModules).forEach(function (key) {
    app.component((ElIconModules as any)[key].name, (ElIconModules as any)[key])
})

// 注册路由、状态管理工具、全局组件
app.use(router).use(pinia).use(ElementPlus, { locale: zhCn }).component('svg-icon', SvgIcon).mount('#app')
