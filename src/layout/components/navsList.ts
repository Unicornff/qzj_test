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
];

export default arr_nav