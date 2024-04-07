import { defineStore } from 'pinia';

const useFullScreenStore = defineStore('useFullScreenStore', {
    state: () => ({
        fullScreen: false,
    }),
    actions: {
        fullScreenAction() {
            this.fullScreen = !this.fullScreen
        }
    }
})

export default useFullScreenStore;