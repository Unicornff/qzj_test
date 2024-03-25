import { defineStore } from 'pinia';

const useTestStore = defineStore('useTestStore', {
    state: () => ({
        count: 0
    }),
    getters: {
        /* // 第一种方法
        double: (state) => state.count * 2 */
        // 第二种方法
        double(): number {
            return this.count * 2
        }
    },
    actions: {
        increment() {
            this.count++
        }
    }
})

export default useTestStore;