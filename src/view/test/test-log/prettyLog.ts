// 使用样式定制输出数字或字符串内容

const prettyLog = () => {
    const prettyPrint = (title: any, text: any, color: string) => {
        console.log(
            `%c ${title} %c ${text} %c`,
            `background:${color};border:1px solid ${color};padding:1px;border-radius:2px 0 0 2px;color:#fff`,
            `border:1px solid ${color};padding:1px;border-radius:0 2px 2px 0;color:${color}`,
            `background:transparent`
        )
    }
    const info = (text: any, title: any = 'info') => {
        prettyPrint(title, text, '#909399')
    }
    const error = (text: any, title: any = 'error') => {
        prettyPrint(title, text, '#F56C6C')
    }
    const warning = (text: any, title: any = 'warning') => {
        prettyPrint(title, text, '#E6A23C')
    }
    const success = (text: any, title: any = 'success') => {
        prettyPrint(title, text, '#67C23A')
    }
    return {
        info, error, warning, success
    }
}

const selfLog: any = prettyLog()
export default selfLog