const functionsRouter =
{
    path: '/functions',
    name: 'functions',
    children: [
        {
            path: 'image-verify',
            name: 'imageVerify',
            component: () => import('@/view/functions/imageVerify/index.vue')
        },
        {
            path: 'watermark',
            name: 'watermark',
            component: () => import('@/view/functions/watermark/index.vue')
        },
        {
            path: 'export-excel',
            name: 'exportExcel',
            component: () => import('@/view/functions/exportExcel/index.vue')
        },
    ]
}


export default functionsRouter