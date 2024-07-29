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


                // 测试表格
                {
                    path: '/test-table',
                    name: 'testTable',
                    component: () => import('@/view/test/test-table/TestTable.vue')
                },
                // 测试输出
                {
                    path: '/test-log',
                    name: 'testLog',
                    component: () => import('@/view/test/test-log/TestLog.vue')
                },
                // 测试文件
                {
                    path: '/test-file',
                    name: 'testFile',
                    component: () => import('@/view/test/test-file/TestFile.vue')
                },
                // 测试
                {
                    path: '/test',
                    name: 'test',
                    component: () => import('@/view/test/index.vue')
                },
            ]
        },
    ]
})