// 注册 v-size-ob 自定义指令，用于监听元素尺寸变化（已做节流处理）
import Utils from '@/utils/utils'

const weakMap = new WeakMap();

const ob = new ResizeObserver((entries) => {
    for (const entry of entries) {
        const handler = weakMap.get(entry.target);
        handler && handler({
            width: entry.borderBoxSize[0].inlineSize,
            height: entry.borderBoxSize[0].blockSize
        });
    }
})

const sizeDirect = {
    mounted(el: HTMLElement, binding: any) {
        if (typeof binding.value !== 'function') {
            console.warn('v-size-ob expects a function as the value');
            return;
        }
        const throttled = Utils.lodashThrottle(binding.value, 300);
        weakMap.set(el, throttled);
        ob.observe(el);
    },
    unmounted(el: HTMLElement) {
        ob.unobserve(el);
        weakMap.delete(el);
    },
}

export default sizeDirect;