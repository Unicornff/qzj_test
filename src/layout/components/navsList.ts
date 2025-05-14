const arr_nav = [
    {
        id: '1',
        name: "我的组件",
        pathRouterName: "myComponents",
        icon: 'Menu',
    },
    {
        id: '2',
        name: "热点",
        pathRouterName: "focus",
        icon: 'Opportunity',
    },
    {
        id: '3',
        name: "社区",
        pathRouterName: "community",
        icon: 'Management',
    },
    {
        id: '4',
        name: "threejs",
        pathRouterName: "threejs",
        icon: 'VideoCameraFilled',
        children: [
            {
                id: '4-1',
                name: "threejs学习",
                pathRouterName: "threejsLearn",
                icon: '',
            },
            {
                id: '4-2',
                name: "地月演示",
                pathRouterName: "earthMoon",
                icon: '',
            },
        ]
    },
    {
        id: '5',
        name: "笔记",
        pathRouterName: "notes",
        icon: 'List',
    },
    {
        id: '6',
        name: "功能",
        pathRouterName: "",
        icon: 'ChromeFilled',
        children: [
            {
                id: '6-1',
                name: "图形验证",
                pathRouterName: "imageVerify",
                icon: '',
            },
            {
                id: '6-6',
                name: "水印",
                pathRouterName: "watermark",
                icon: '',
            },
            {
                id: '6-3',
                name: "导出Excel",
                pathRouterName: "exportExcel",
                icon: '',
            },
            {
                id: '6-4',
                name: "预览PDF",
                pathRouterName: "previewPDF",
                icon: '',
            },
            {
                id: '6-5',
                name: "条形码",
                pathRouterName: "barCode",
                icon: '',
            },
            {
                id: '6-7',
                name: "二维码",
                pathRouterName: "qrCode",
                icon: '',
            },
            {
                id: '6-7',
                name: "地图",
                pathRouterName: "map",
                icon: '',
            },
            {
                id: '6-8',
                name: "虚拟列表",
                pathRouterName: "virtualList",
                icon: '',
            },
        ]
    },
    {
        id: '7',
        name: "测试",
        pathRouterName: "",
        icon: 'Grid',
        children: [
            {
                id: '7-1',
                name: "code",
                pathRouterName: "testCode",
                icon: '',
            },
            {
                id: '7-6',
                name: "file",
                pathRouterName: "testFile",
                icon: '',
            },
            {
                id: '7-3',
                name: "grid",
                pathRouterName: "testGrid",
                icon: '',
            },
            {
                id: '7-4',
                name: "layout",
                pathRouterName: "testLayout",
                icon: '',
            },
            {
                id: '7-5',
                name: "log",
                pathRouterName: "testLog",
                icon: '',
            },
        ]
    },
];

export default arr_nav