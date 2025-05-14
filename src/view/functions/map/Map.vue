<template>
    <div class='full-size'>
        <div>
            <span>关键字查询位置：</span>
            <input id="input_map" placeholder="请输入搜索内容" />
        </div>
        <div id="map"></div>
    </div>
</template>

<script setup lang='ts'>
defineOptions({
    name: 'Map'
});
import { ref, onMounted, onUnmounted } from 'vue';
import AMapLoader from "@amap/amap-jsapi-loader";

let map: any = ref(null);

(window as any)._AMapSecurityConfig = {
    securityJsCode: 'f1830c78f2da55b4784613baa3def039',
}

onMounted(() => {
    initMap();
})

onUnmounted(() => {
    map?.destroy();
});

const initMap = () => {
    AMapLoader.load({
        key: "6975cfc045bc135c3c4936525fd1912f", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ["AMap.Scale"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
    })
        .then((AMap) => {
            map = new AMap.Map("map", {
                // 设置地图容器id
                viewMode: "3D", // 是否为3D地图模式
                zoom: 11, // 初始化地图级别
                // center: [116.397428, 39.90923], // 初始化地图中心点位置
            });

            // 插件
            AMap.plugin(
                [
                    'AMap.ToolBar',
                    'AMap.Scale',
                    'AMap.HawkEye',
                    'AMap.ControlBar',
                    'AMap.MapType',
                    'AMap.Geolocation',
                    'AMap.ContextMenu',
                    'AMap.AutoComplete',
                    'AMap.PlaceSearch',
                ],
                function () {
                    //在回调函数中实例化插件，并使用插件功能
                    map.addControl(
                        new AMap.ControlBar({
                            position: {
                                top: '10px',
                                right: '10px',
                            },
                        }),
                    ); //控制罗盘
                    map.addControl(new AMap.HawkEye()); //鹰眼
                    map.addControl(
                        new AMap.Geolocation({
                            position: {
                                bottom: '160px',
                                left: '20px',
                            },
                        }),
                    ); //定位控件，用来获取和展示用户主机所在的经纬度位置
                    map.addControl(
                        new AMap.ToolBar({
                            position: {
                                bottom: '80px',
                                left: '21px',
                            },
                        }),
                    ); //缩放工具条
                    map.addControl(
                        new AMap.Scale({
                            position: {
                                bottom: '35px',
                                left: '20px',
                            },
                        }),
                    );

                    //3.添加右键点击事件
                    let contextMenu: any = null;
                    //4.信息窗口
                    let infoWindow: any = null;

                    //地图绑定鼠标右击事件——弹出右键菜单
                    map.on('rightclick', function (e: any) {
                        infoWindow?.close(); //清空点击事件弹框
                        let contextMenuPositon: any = null;
                        contextMenu = new AMap.ContextMenu({ isOpen: false });
                        //右键放大
                        contextMenu?.addItem(
                            '放大一级',
                            function () {
                                map.zoomIn();
                            },
                            0,
                        );

                        //右键缩小
                        contextMenu?.addItem(
                            '缩小一级',
                            function () {
                                map.zoomOut();
                            },
                            1,
                        );

                        //右键显示全国范围
                        contextMenu?.addItem(
                            '缩放至全国范围',
                            function () {
                                map.setZoomAndCenter(4, [108.946609, 34.262324]);
                            },
                            2,
                        );

                        //右键添加Marker标记
                        contextMenu?.addItem(
                            '添加标记',
                            function () {
                                new AMap.Marker({
                                    map: map,
                                    position: contextMenuPositon, //基点位置
                                });
                            },
                            3,
                        );

                        contextMenu?.open(map, e.lnglat);
                        contextMenuPositon = e.lnglat;
                    });

                    //打开信息窗体
                    map.on('click', function (e: any) {
                        contextMenu?.close(); //关闭右键弹框
                        //构建信息窗体中显示的内容
                        let info: any = [];
                        info.push(
                            '<div class=\'input-card content-window-card\'><div><img style="float:left;width:67px;height:16px;" src=" https://webapi.amap.com/images/autonavi.png "/></div> ',
                        );
                        info.push('<div style="padding:7px 0px 0px 0px;"><h4>高德软件</h4>');
                        info.push(
                            "<p class='input-item'>电话 : 010-84107000   邮编 : 100102</p>",
                        );
                        info.push(
                            "<p class='input-item'>地址 :北京市朝阳区望京阜荣街10号首开广场4层</p></div></div>",
                        );

                        infoWindow = new AMap.InfoWindow({
                            content: info.join(''), //使用默认信息窗体框样式，显示信息内容
                        });

                        infoWindow?.open(map, e.lnglat);
                    });

                    // 4.搜索
                    let auto = new AMap.AutoComplete({ input: 'input_map' });
                    let placeSearch = new AMap.PlaceSearch({
                        map: map,
                    }); //构造地点查询类
                    auto.on('select', function (e: any) {
                        placeSearch.setCity(e.poi.adcode);
                        placeSearch.search(e.poi.name); //关键字查询查询
                    }); //注册监听，当选中某条记录时会触发
                })
        })
        .catch((e) => {
            console.log(e);
        });
}
</script>

<style scoped lang='scss'>
#input_map {
    width: 220px;
    height: 32px;
    line-height: 32px;
    border-radius: 4px;
    border: 1px solid #c0c4cc;
    box-sizing: border-box;
    padding-left: 10px;
    padding-top: 2px;
    outline: none;

    &:focus {
        border: 1px solid #409eff;
    }
}

#map {
    margin-top: 10px;
    width: 100%;
    height: calc(100% - 10px - 32px);
}
</style>