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
        {
            path: 'preview-pdf',
            name: 'previewPDF',
            component: () => import('@/view/functions/previewPDF/index.vue')
        },
        {
            path: 'bar-code',
            name: 'barCode',
            component: () => import('@/view/functions/barCode/index.vue')
        },
        {
            path: 'qr-code',
            name: 'qrCode',
            component: () => import('@/view/functions/qrCode/index.vue')
        },
        {
            path: 'map',
            name: 'map',
            component: () => import('@/view/functions/map/index.vue')
        },
        {
            path: 'text-overflow',
            name: 'textOverflow',
            component: () => import('@/view/functions/textOverflow/index.vue')
        },
    ]
}


export default functionsRouter