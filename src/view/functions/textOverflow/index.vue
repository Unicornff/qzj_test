<template>
	<div class="main-container box-padding box-bg-color">
		<OverflowTooltip :lineClamp="1" :width="200" placement="right">
			这是一个非常长的单行文本，用来测试是否会超出盒子的宽度。
		</OverflowTooltip>
		<div style="margin: 20px 0"></div>
		<OverflowTooltip :lineClamp="3" :width="200" placement="bottom" effect="light">
			这是一个非常长的多行文本，用来测试是否会超出盒子的宽度。它应该在达到最大行数时截断，并在悬浮时显示完整内容。
		</OverflowTooltip>
	</div>
</template>

<script setup lang="ts">
import OverflowTooltip from "./OverflowTooltip.vue";
</script>

<style scoped lang="scss"></style>
