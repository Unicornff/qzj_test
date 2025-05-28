<template>
	<div class="full-size box-padding box-bg-color">
		<!-- 测试 v-size-ob 自定义指令 -->
		<div v-size-ob="sizeObserver" class="size-ob-class"></div>
		<!-- 宽度适应内容 -->
		<div class="width-fit-content">宽度适应内容</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const sizeObserver = (size: any) => {
	console.log(size);
};
</script>

<style scoped lang="scss">
.size-ob-class {
	width: 10%;
	height: 10%;
	background-color: red;
}
.width-fit-content {
	width: fit-content;
	height: auto;
	padding: 2px 5px;
	background-color: blue;
	color: #fff;
	display: inline-flex;
	align-items: center;
}
</style>
