<template>
    <div class="main-container box-padding">
        <div class="code-class">
            <div v-for="(note, index) in notes">
                <h3>{{ note.title }}</h3>
                <pre class="line-numbers" v-for="(item, itemIndex) in note.data">
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
                <br>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import Prism from 'prismjs';
import notes from './notes.ts'

onMounted(() => {
    Prism.highlightAll();
    init();
})

const escapeHtmlTags = (html: any) => {
    // 使用正则表达式匹配 HTML 标签并将其转义
    return html.replace(/<[^>]*>/g, function (match: any) {
        return match.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    });
};

const init = () => {

}


</script>

<style scoped lang='scss'></style>