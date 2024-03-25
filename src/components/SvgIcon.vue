<template>
	<svg
		aria-hidden="true"
		class="svg-icon"
		:width="props.size"
		:height="props.size"
	>
		<use
			:xlink:href="symbolId"
			rel="external nofollow"
			:fill="props.color"
		/>
	</svg>
</template>

<script setup lang='ts'>
import { computed } from "vue";

const props = defineProps({
	prefix: {
		type: String,
		default: "icon",
	},
	name: {
		type: String,
		require: true,
	},
	size: {
		type: String,
		default: "10px",
	},
	color: {
		type: String,
		default: "",
	},
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<style scoped>
.svg-icon {
	overflow: hidden;
}
</style>