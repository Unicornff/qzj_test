<template>
	<div class="code-class">
		<h2>页面代码区（使用prismjs）</h2>
		<br />
		<h3>html</h3>
		<pre class="line-numbers">
			<code class="language-html">
				<div v-html="escapeHtmlTags(htmlCode)"></div>
			</code>
		</pre>
		<h3>ts</h3>
		<pre class="line-numbers">
			<code class="language-ts" data-prismjs-copy="复制" data-prismjs-copy-error="复制失败"
				data-prismjs-copy-success="复制成功">
				import { onMounted } from "vue";
				import Prism from "prismjs";

				/*
				code标签上可以绑定下面的属性来改变toolbar的复制文字
				data-prismjs-copy="复制"
				data-prismjs-copy-error="复制失败"
				data-prismjs-copy-success="复制成功"
				*/
				onMounted(() => {
					Prism.highlightAll();
				});
			</code>
		</pre>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Prism from "prismjs";

const htmlCode = ref(
`
<div>Example</div>
<div>Hello</div>
`
);

onMounted(() => {
	Prism.highlightAll();
});

const escapeHtmlTags = (html: any) => {
	// 使用正则表达式匹配 HTML 标签并将其转义
	return html.replace(/<[^>]*>/g, function (match: any) {
		return match.replace(/</g, "&lt;").replace(/>/g, "&gt;");
	});
};
</script>

<style scoped lang="scss"></style>
