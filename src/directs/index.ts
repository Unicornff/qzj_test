import sizeDirect from './sizeDirect'

// 自定义指令对应关系表
const directives: any = {
    'size-ob': sizeDirect
}

export default {
    install(app: any) {
        // 注册全局指令
        Object.keys(directives).forEach((key) => {
            app.directive(key, directives[key])
        })
    }
}