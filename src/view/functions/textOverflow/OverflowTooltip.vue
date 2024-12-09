<template>
	<el-tooltip v-if="isOverflow" :content="content" :placement="placement" :effect="effect">
		<div ref="textContainer" :class="['text-container', 'overflow-cursor', { multiline: isMultiline }]"
			:style="[multilineStyle, getWidth]" @mouseover="checkOverflow">
			<slot></slot>
		</div>
	</el-tooltip>
	<div v-else ref="textContainer" :class="['text-container', { multiline: isMultiline }]"
		:style="[multilineStyle, getWidth]" @mouseover="checkOverflow">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated, computed } from "vue";
defineOptions({
	name: "OverflowTooltip",
});

const props = defineProps({
	lineClamp: {
		type: Number,
		default: 1,
	},
	width: {
		type: Number,
		default: 100,
	},

	// 下面是 element-plus提示框属性
	placement: {
		type: String,
		default: "top",
	},
	effect: {
		type: String,
		default: "dark",
	},
	// ...
});

const isOverflow = ref(false);
const textContainer: any = ref(null);
const isMultiline = computed(() => props.lineClamp > 1);

onMounted(() => {
	checkOverflow();
});

onUpdated(() => {
	checkOverflow();
});

const multilineStyle: any = computed(() => {
	return isMultiline.value
		? {
			"-webkit-line-clamp": props.lineClamp,
			display: "-webkit-box",
			"-webkit-box-orient": "vertical",
		}
		: {};
});

const getWidth = computed(() => {
	return {
		width: props.width + "px",
	};
});

const checkOverflow = () => {
	const el: any = textContainer.value;
	if (isMultiline.value) {
		isOverflow.value = el.scrollHeight > el.clientHeight;
	} else {
		isOverflow.value = el.scrollWidth > el.clientWidth;
	}
};

const content = computed(() => {
	return textContainer.value?.textContent.trim();
});
</script>

<style scoped>
.text-container {
	display: inline-block;
	vertical-align: middle;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}

.overflow-cursor {
	cursor: pointer;
}

.multiline {
	white-space: normal;
}
</style>
