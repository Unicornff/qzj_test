import { defineStore } from 'pinia';

const useThemeStore = defineStore('useThemeStore', {
    state: () => ({
        isLight: localStorage.getItem('theme') === 'light' ? true : false
    }),
    actions: {
        themeChange() {
            const html = document.querySelector('html')
            if (this.isLight) {
                html?.classList.remove('light')
                html?.classList.add('dark')
            } else {
                html?.classList.remove('dark')
                html?.classList.add('light')
            }
            this.isLight = !this.isLight
            localStorage.setItem('theme', this.isLight ? 'light' : 'dark')
        },
        getTheme() {
            const html = document.querySelector('html')
            if (this.isLight) {
                html?.classList.remove('dark')
                html?.classList.add('light')
            } else {
                html?.classList.remove('light')
                html?.classList.add('dark')
            }
        }
    }
})

export default useThemeStore;