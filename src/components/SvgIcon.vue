<template>
	<svg aria-hidden="true" class="svg-icon">
		<use :xlink:href="symbolId" />
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
	width: {
		type: String,
		default: "40px",
	},
	height: {
		type: String,
		default: "40px",
	},
	color: {
		type: String,
		default: "",
	},
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);

const width = props.width;
const height = props.height;
const color = props.color;
</script>

<style scoped>
.svg-icon {
	fill: v-bind(color);
	filter: drop-shadow(0px 0px #111);
	overflow: hidden;
	width: v-bind(width);
	height: v-bind(height);
}
</style>