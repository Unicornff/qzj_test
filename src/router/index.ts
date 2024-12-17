import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import functionsRouter from './functions';
import testRouter from './test';

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
                // 主页
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('@/view/home/Home.vue')
                },
                // 热点
                {
                    path: '/focus',
                    name: 'focus',
                    component: () => import('@/view/focus/Focus.vue')
                },
                // 活动
                {
                    path: '/activity',
                    name: 'activity',
                    component: () => import('@/view/activity/Activity.vue')
                },
                // 社区
                {
                    path: '/community',
                    name: 'community',
                    component: () => import('@/view/community/Community.vue')
                },
                // 社区
                {
                    path: '/test',
                    name: 'test',
                    component: () => import('@/view/test/test-grid/TestGrid.vue')
                },
                // 笔记
                {
                    path: '/notes',
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