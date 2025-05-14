<template>
	<div class="full-size box-padding box-bg-color">
		<div class="text-content">
			单行：
			<OverflowTooltip :lineClamp="1" placement="right">
				这是一个非常长的单行文本，用来测试是否会超出盒子的宽度。
			</OverflowTooltip>
			<div style="margin: 50px 0"></div>
			多行：
			<OverflowTooltip :lineClamp="3" placement="bottom" effect="light">
				这是一个非常长的多行文本，用来测试是否会超出盒子的宽度。它应该在达到最大行数时截断，并在悬浮时显示完整内容。
			</OverflowTooltip>
		</div>
	</div>
</template>

<script setup lang="ts">
import OverflowTooltip from './OverflowTooltip.vue';
</script>

<style scoped lang="scss">
.text-content {
    width: 10%;
	// background-color: #46a3f0;
}
</style>
