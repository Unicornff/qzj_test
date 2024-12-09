const testRouter =
{
    path: '/test',
    name: 'test',
    children: [
        {
            path: 'testCode',
            name: 'testCode',
            component: () => import('@/view/test/test-code/TestCode.vue')
        },
        {
            path: 'testFile',
            name: 'testFile',
            component: () => import('@/view/test/test-file/TestFile.vue')
        },
        {
            path: 'testGrid',
            name: 'testGrid',
            component: () => import('@/view/test/test-grid/TestGrid.vue')
        },
        {
            path: 'testLayout',
            name: 'testLayout',
            component: () => import('@/view/test/test-layout/MenuList.vue')
        },
        {
            path: 'testLog',
            name: 'testLog',
            component: () => import('@/view/test/test-log/TestLog.vue')
        },
        {
            path: 'testPage',
            name: 'testPage',
            component: () => import('@/view/test/test-page/testPage.vue')
        },
    ]
}


export default testRouter