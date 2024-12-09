const arr_nav = [
    {
        id: '1',
        name: "首页",
        pathRouterName: "home",
        icon: 'HomeFilled',
    },
    {
        id: '2',
        name: "功能",
        pathRouterName: "",
        icon: 'ChromeFilled',
        children: [
            {
                id: '2-1',
                name: "图形验证",
                pathRouterName: "imageVerify",
                icon: '',
            },
            {
                id: '2-2',
                name: "水印",
                pathRouterName: "watermark",
                icon: '',
            },
            {
                id: '2-3',
                name: "导出Excel",
                pathRouterName: "exportExcel",
                icon: '',
            },
            {
                id: '2-4',
                name: "预览PDF",
                pathRouterName: "previewPDF",
                icon: '',
            },
            {
                id: '2-5',
                name: "条形码",
                pathRouterName: "barCode",
                icon: '',
            },
            {
                id: '2-6',
                name: "二维码",
                pathRouterName: "qrCode",
                icon: '',
            },
            {
                id: '2-7',
                name: "地图",
                pathRouterName: "map",
                icon: '',
            },
            {
                id: '2-8',
                name: "文字省略",
                pathRouterName: "textOverflow",
                icon: '',
            },
        ]
    },
    {
        id: '3',
        name: "热点",
        pathRouterName: "focus",
        icon: 'Opportunity',
    },
    {
        id: '4',
        name: "活动",
        pathRouterName: "activity",
        icon: 'TrendCharts',
    },
    {
        id: '5',
        name: "社区",
        pathRouterName: "community",
        icon: 'Management',
    },
    {
        id: '6',
        name: "测试",
        pathRouterName: "",
        icon: '',
        children: [
            {
                id: '6-1',
                name: "code",
                pathRouterName: "testCode",
                icon: '',
            },
            {
                id: '6-2',
                name: "file",
                pathRouterName: "testFile",
                icon: '',
            },
            {
                id: '6-3',
                name: "grid",
                pathRouterName: "testGrid",
                icon: '',
            },
            {
                id: '6-4',
                name: "layout",
                pathRouterName: "testLayout",
                icon: '',
            },
            {
                id: '6-5',
                name: "log",
                pathRouterName: "testLog",
                icon: '',
            },
            {
                id: '6-6',
                name: "page",
                pathRouterName: "testPage",
                icon: '',
            },
        ]
    },
];

export default arr_nav