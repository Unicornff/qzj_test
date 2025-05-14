<template>
    <div class='full-size box-padding box-bg-color'>
        <el-link type="primary" :underline="false" href="https://lbs.amap.com/" target="_blank">高德地图官网链接</el-link>
        <Map class="map-content"></Map>
    </div>
</template>

<script setup lang='ts'>
defineOptions({
    name: ''
});
import { ref } from 'vue';
import Map from './Map.vue';
</script>

<style scoped lang='scss'>
.map-content {
    margin-top: 10px;
    height: calc(100% - 10px - 20px);
}
</style>