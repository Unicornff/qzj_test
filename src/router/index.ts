import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            // vue2使用: *    vue3使用: pathMatch('*') 或者 :pathMatch('*')* 或者 :catchAll(.*)
            path: "/:catchAll(.*)",
            redirect: "/"
        },
        {
            path: "/",
            name: "home",
            component: () => import('@/view/home/home.vue')
        },
    ]
})