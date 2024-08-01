<template>
	<div class="main-container box-padding box-bg-color">
		<waterMark text="测试一下" fontSize="16px" :gradientColors="arr" rotate="10" xGap="200" yGap="200">
			<div>插槽内容</div>
		</waterMark>
	</div>
</template>

<script setup lang="ts">
import waterMark from "./components/waterMark.vue";
const arr = ["purple", "magenta", "blue", "red"];
</script>

<style scoped lang="scss"></style>
