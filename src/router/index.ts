import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import functionsRouter from './functions';
import testRouter from './test';

export default createRouter({
    history: createWebHashHistory(),
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
                // 主页
                {
                    path: 'home',
                    name: 'home',
                    component: () => import('@/view/home/home.vue')
                },
                // 热点
                {
                    path: 'focus',
                    name: 'focus',
                    component: () => import('@/view/focus/focus.vue')
                },
                // 活动
                {
                    path: 'community',
                    name: 'community',
                    component: () => import('@/view/community/community.vue')
                },
                // threejs学习
                {
                    path: 'three-learn',
                    name: 'threeLearn',
                    component: () => import('@/view/threeLearn/index.vue')
                },
                // 笔记
                {
                    path: 'notes',
                    name: 'notes',
                    component: () => import('@/view/notes/index.vue')
                },
                // 功能
                functionsRouter,
                // 测试
                testRouter
            ]
        },
    ]
})