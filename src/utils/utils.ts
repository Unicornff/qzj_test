import dayjs from "dayjs"
import { throttle, debounce, random } from 'lodash'
import { v4 as uuidv4 } from 'uuid'

class utils {
    // 节流
    lodashThrottle(fn: any, time: number, leading: boolean = false, trailing: boolean = true) {
        return throttle(fn, time, { leading, trailing })
    }
    // 防抖
    lodashDebounce = (fn: any, time: number, leading = false, trailing = true) => {
        return debounce(fn, time, { leading, trailing })
    }
    // 返回 min至max(min和max都包含在内) 的随机数
    lodashRandow(min: number, max: number, float: boolean = false) {
        return random(min, max, float)
    }

    // 日期格式转换
    dateFormatString = (time: any, format: string) => {
        // format格式例子：YYYY-MM-DD HH:mm:ss
        let date = dayjs(time);
        return date.format(format)
    }
    dateFormatDate = (time: any) => {
        let date = dayjs(time);
        return date.toDate();
    }

    // 获取随机id
    getRandomUniqueId = () => {
        return uuidv4();
    }

    // 获取变量类型（返回小写的字符串）例：number boolean string array object null undefined function 
    getVariableType = (variable: any) => {
        return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();
    }

    // 利用new Set()数组去重
    uniqueArray = (arr: Array<any>) => {
        return new Set([...arr])
    }
}

const Utils = new utils();

export default Utils;

