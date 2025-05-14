<template>
    <div class='full-size box-padding box-bg-color'>
        <div class="upload-box">
            <el-upload accept=".pdf" drag :file-list="fileList" :auto-upload="false" show-file-list
                :on-change="handleChange">
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">
                    将PDF文件拖到此处，或 <em>点击上传</em>
                </div>
            </el-upload>
            <div class="upload-btn flex-row flex-center">
                <el-button type="primary" @click="previewFile" style="margin-right:20px">预览文件</el-button>
                <el-link type="primary" :underline="false" href="https://github.com/hrynko/vue-pdf-embed" target="_blank">
                    vue-pdf-embed文档链接  （除了页面的预览功能还可实现 PDF 分页、放大、缩小、下载、打印）
                </el-link>

            </div>
        </div>

        <div class="preview-box" v-loading="loading">
            <VuePdfEmbed class="full-size" :page="currentPage" :source="source" @rendered="handleDocumentRender">
            </VuePdfEmbed>
        </div>
    </div>
</template>

<script setup lang='ts'>
defineOptions({
    name: 'PreviewPDF'
});
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import VuePdfEmbed from 'vue-pdf-embed';

const fileList: any = ref([])
const source: any = ref('')
const currentPage = ref()
const loading = ref(false);

const handleChange = (file: any) => {
    fileList.value.push(file)
}

const previewFile = () => {
    if (fileList.value.length !== 0) {
        // loading.value = true;
        source.value = URL.createObjectURL(fileList.value[0].raw)
        console.log(source.value);
        fileList.value = [];
    }
    else {
        ElMessage.warning('请先上传文件');
    }
}

const handleDocumentRender = () => {
    loading.value = false;
}
</script>

<style scoped lang='scss'>
.upload-btn {
    width: 100%;
}

.preview-box {
    margin-top: 20px;
    width: 100%;
    height: calc(100% - 226px - 20px);
    overflow: auto;
}
</style>