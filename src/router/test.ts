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
            path: 'testLog',
            name: 'testLog',
            component: () => import('@/view/test/test-log/TestLog.vue')
        },
    ]
}


export default testRouter