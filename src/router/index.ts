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
            component: () => import('@/layout/index.vue'),
            redirect: "/home",
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('@/view/home/home.vue')
                },
                {
                    path: '/focus',
                    name: 'focus',
                    component: () => import('@/view/home/home.vue')
                },
                {
                    path: '/activity',
                    name: 'activity',
                    component: () => import('@/view/activity/activity.vue')
                },
                {
                    path: '/community',
                    name: 'community',
                    component: () => import('@/view/home/home.vue')
                },
            ]
        },
    ]
})