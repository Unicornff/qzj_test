<template>
    <div class='main-container box-padding box-bg-color'>
        <el-link type="primary" :underline="false" href="https://github.com/fengyuanchen/vue-qrcode/blob/main/src/README.md"
            target="_blank" style="margin-bottom: 20px;">
            vue-qrcode 文档链接
        </el-link>

        <div class="qrcode-item" v-for="(item, index) in arr_qrcode" :key="index">
            <VueQrcode :value="item.value" :options="item.options"></VueQrcode>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import VueQrcode from '@chenfengyuan/vue-qrcode';

const arr_qrcode = ref([
    {
        value: '这里是测试文字1',
        options: {
        }
    },
    {
        value: 'https://www.baidu.com/',
        options: {
            color: {
                dark: '#0074d9',
                light: '#7fdbff',
            }
        }
    },
])
</script>

<style scoped lang='scss'></style>