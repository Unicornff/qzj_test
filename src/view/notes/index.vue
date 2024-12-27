<template>
    <div class="main-container">

        <div class="filter-class">
            <label>标题：</label>
            <el-input v-model="filterParams.title" placeholder="请输入关键字" clearable style="width: 230px;"></el-input>
            <label>日期：</label>
            <el-date-picker v-model="filterParams.date" type="date" placeholder="请选择日期" :editable="false" clearable
                format="YYYY-MM-DD" value-format="YYYY-MM-DD" style="width: 230px;">
            </el-date-picker>
            <div style="margin:0 0 0 auto">
                <el-button type="primary" @click="searchList">查询</el-button>
            </div>
        </div>

        <div class="code-class" v-loading="loading" ref="codeRef">
            <div v-for="note in listsData" :key="note.noteId">
                <h3 class="flex-row flex-between fullWidth">
                    <span class="flex-row flex-center">
                        <el-icon>
                            <Memo />
                        </el-icon>
                        {{ note.title || '------' }}
                    </span>
                    <span class="flex-row flex-center">
                        <el-icon>
                            <Calendar />
                        </el-icon>
                        {{ note.date || '------' }}
                    </span>
                </h3>
                <template v-for="item in note.data" :key="item.dataId">
                    <!-- 代码区 -->
                    <pre class="line-numbers" v-if="item.type !== 'img' && item.type !== 'text'">
                        <h4>{{ item.type }}</h4>
                        <code class="language-ts" v-if="item.type === 'ts'">
                            <div>{{ item.code }}</div>
                        </code>
                        <code class="language-html" v-if="item.type === 'html'">
                            <div v-html="escapeHtmlTags(item.code)"></div>
                        </code>
                        <code class="language-scss" v-if="item.type === 'scss'">
                            <div>{{ item.code }}</div>
                        </code>
                    </pre>
                    <!-- 文字区 -->
                    <div class="text-class" v-if="item.type === 'text'">
                        <p v-for="(lineText, index) in item.text" :key="index" :class="item.class">
                            <span v-if="!item.class?.includes('link-class')">{{ lineText }}</span>
                            <span v-else>参考链接：<a :href="lineText" target="_blank">{{ lineText }}</a></span>
                        </p>
                    </div>
                    <!-- 图片区 -->
                    <div class="img-class" v-if="item.type === 'img'">
                        <img :src="item.img" alt="">
                    </div>
                </template>
                <br>
            </div>

            <el-empty description="暂无数据" v-if="listsData && listsData.length === 0"></el-empty>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { onMounted, ref, Ref } from 'vue';
import Prism from 'prismjs';
import notes from './notes.ts'

onMounted(async () => {
    await searchList();
})
const listsData: any = ref();
const init = () => {
    listsData.value = [...notes].reverse()
}

/* 列表数据筛选 */
const filterParams: any = ref({
    title: '',
    date: ''
})
const loading: Ref<boolean> = ref(false)
const codeRef: any = ref(null)
const searchList = () => {
    try {
        init()
        loading.value = true
        setTimeout(() => {
            listsData.value = listsData.value.filter((item: any) => {
                return item.title.includes(filterParams.value.title || '') && item.date.includes(filterParams.value.date || '')
            })
            loading.value = false;
            Prism.highlightAll();
        }, 500);
    } catch (e) {
        console.log(e);
    } finally {
        // 查询完列表回到顶部
        if (codeRef.value) {
            codeRef.value.scrollTop = 0;
        }
    }
}

const escapeHtmlTags = (html: any) => {
    // 使用正则表达式匹配 HTML 标签并将其转义
    return html.replace(/<[^>]*>/g, function (match: any) {
        return match.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    });
};
</script>

<style scoped lang='scss'>
.main-container {
    margin: 0 400px;
    width: calc(100% - 800px);
    height: 100%;
    position: relative;
    overflow: hidden;

    .filter-class {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        padding: 15px;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        border-radius: 8px;
        background-color: #fff;
        z-index: 2;

        label {
            margin: 0 10px;
            width: 50px;
            font-weight: bold;
            color: #000;
        }
    }

    .code-class {
        margin: 0;
        margin-top: 80px;
        width: 100%;
        height: calc(100% - 80px);
        overflow-y: scroll;
        box-sizing: border-box;

        .text-class {
            color: #000000;
            padding: 10px 25px;
            margin: 10px 0;
            border-left: 4px solid #007eff;
            background-color: #ebfaff;
            text-indent: 2em;

            .title-class {
                font-size: 15px;
                font-weight: bold;
                text-indent: 0;

                a {
                    color: #2291ff;
                }
            }
        }

        .img-class {
            width: 100%;
            padding: 0 50px;
            height: auto;
            box-sizing: border-box;

            img {
                max-width: 100% !important;
                margin: 0;
            }
        }
    }
}

::v-deep(.el-empty) {
    width: 100%;
    height: 100%;
}
</style>