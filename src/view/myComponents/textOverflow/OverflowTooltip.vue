<template>
	<!-- 溢出时显示 Tooltip -->
	<el-tooltip v-if="isOverflow" :content="content" :placement="placement" :effect="effect">
		<div
			ref="textContainer"
			:class="['text-container', 'overflow-cursor', { multiline: isMultiline }]"
			:style="[multilineStyle, { width: containerWidth + 'px' }]"
			@mouseover="checkOverflow"
		>
			<slot></slot>
		</div>
	</el-tooltip>

	<!-- 非溢出时直接显示文本 -->
	<div
		v-else
		ref="textContainer"
		:class="['text-container', { multiline: isMultiline }]"
		:style="[multilineStyle, { width: containerWidth + 'px' }]"
		@mouseover="checkOverflow"
	>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

// 传入的 props
const props = defineProps({
	lineClamp: {
		type: Number,
		default: 1,
	},

	// 下面是 el-tooltip 的属性
	placement: {
		type: String,
		default: 'top',
	},
	effect: {
		type: String,
		default: 'dark',
	},
});

const isOverflow = ref(false);
const textContainer: any = ref(null);
const containerWidth = ref(0);
const isMultiline = computed(() => props.lineClamp > 1);

// 使用 ResizeObserver 监听父容器的宽度变化
const resizeObserver = new ResizeObserver(() => {
	updateWidth();
	checkOverflow();
});

const updateWidth = () => {
	const parentWidth = textContainer.value?.parentElement?.clientWidth || 0;
	containerWidth.value = parentWidth;
};

onMounted(() => {
	updateWidth();
	resizeObserver.observe(textContainer.value?.parentElement); // 监听父级元素
	checkOverflow();
});

onBeforeUnmount(() => {
	resizeObserver.disconnect(); // 移除 ResizeObserver 监听
});

const multilineStyle: any = computed(() => {
	return isMultiline.value
		? {
				'-webkit-line-clamp': props.lineClamp,
				display: '-webkit-box',
				'-webkit-box-orient': 'vertical',
		  }
		: {};
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
