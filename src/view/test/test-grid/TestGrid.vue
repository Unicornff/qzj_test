<template>
	<!-- 网格布局 -->
	<div class="main-container">
		<ul class="list-content">
			<li v-for="(i, index) in 9" :key="index" class="item-content">{{ i }}</li>
		</ul>
	</div>
	<div class="code-class">
		<pre class="line-numbers">
		<code class="language-css">
			.item {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				gap: 20px; /* 相当于column-gap: 20px; row-gap: 20px; */
				grid-template-rows: repeat(3, 1fr);
				grid-auto-rows: calc((100% - 40px) / 3); /* 未明确指定高度的行默认高度为50px */
			}
		</code>
	</pre>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Prism from "prismjs";

onMounted(() => {
	Prism.highlightAll();
});
</script>

<style scoped lang="scss">
.list-content {
	padding: 0;
	list-style: none;
	width: 100%;
	height: 100%;
	overflow-y: scroll;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	// grid-auto-rows: calc((100% - 40px) / 3); /* 未明确指定高度的行默认高度为50px */
	// gap: 20px;
	column-gap: 20px;
	row-gap: 20px;

	.item-content {
		background-color: #fff;
	}
}
</style>
