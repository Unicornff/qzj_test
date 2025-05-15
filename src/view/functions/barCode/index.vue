<template>
    <div class='full-size box-padding box-bg-color'>
        <el-link type="primary" underline="never" href="https://github.com/lindell/JsBarcode/wiki" target="_blank"
            style="margin-bottom: 20px;">
            jsbarcode 文档链接
        </el-link>

        <div class="flex-row">
            <el-card shadow="always" v-for="(item, index) in barCodeArr" :key="index">
                <barCode :text="item.text" :type="item.type" :options="item.options"></barCode>
            </el-card>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import barCode from './barCode.vue';

const barCodeArr = ref([
    {
        text: "CODE128",
        type: "CODE128",
        options: {}
    },
    {
        text: "CODE39",
        type: "CODE39",
        options: {
            lineColor: "#990000"
        }
    },
    {
        text: "123456",
        type: "pharmacode",
        options: {
            background: "#eee",
            width: 5
        }
    }
])
</script>

<style scoped lang='scss'>
.flex-row {
    width: 100%;
    height: 300px;
    justify-content: space-between;

    ::v-deep(.el-card) {
        width: 30%;

        .el-card__body {
            padding: 20px;
            height: 100%;
            box-sizing: border-box;
        }
    }
}
</style>