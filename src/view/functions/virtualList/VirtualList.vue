<template>
	<div class="virtual-list" :style="{ height: `${containerHeight}px`, overflowY: 'auto' }" @scroll="handleScroll">
		<div :style="{ height: `${totalHeight}px`, position: 'relative' }">
			<div v-for="(item, index) in visibleData" :key="item.id" :style="getItemStyle(index)"
				class="virtual-list-item">
				<slot name="item" :item="item" :index="startIndex + index"> </slot>
			</div>
		</div>
		<el-empty description="无数据" v-if="!data.length" />
	</div>
</template>

<script setup lang="ts">
defineOptions({
	name: "VirtualList",
});
import { ref, computed } from "vue";
import Utils from "@/utils/utils.ts";

const props = defineProps({
	data: {
		type: Array,
		required: true,
	},
	itemHeight: {
		type: Number,
		default: 50, // 每个列表项的高度
	},
	containerHeight: {
		type: Number,
		default: 500, // 容器的可见高度
	},
});

const scrollTop = ref(0); // 滚动条距离顶部的偏移量
const visibleCount = computed(() => Math.ceil(props.containerHeight / props.itemHeight)); // 可见的列表项数量
const startIndex = computed(() => Math.floor(scrollTop.value / props.itemHeight)); // 当前滚动位置的起始索引
const endIndex = computed(() => startIndex.value + visibleCount.value); // 当前滚动位置的结束索引

// 可见的数据片段
const visibleData: any = computed(() => props.data.slice(startIndex.value, endIndex.value));

// 总高度
const totalHeight = computed(() => props.data.length * props.itemHeight);

const handleScroll = Utils.lodashThrottle((e: Event) => {
	scrollTop.value = (e.target as HTMLElement).scrollTop;
}, 30);

// 计算每个可见项目的样式（主要用于控制其绝对定位位置）
const getItemStyle = (index: number) => {
	const top = (startIndex.value + index) * props.itemHeight;
	return {
		position: "absolute",
		top: `${top}px`,
		width: "100%",
		height: `${props.itemHeight}px`,
	} as any;
};
</script>

<style scoped lang="scss">
.virtual-list {
	border: 1px solid #ccc;
	position: relative;
}

.virtual-list-item {
	border: 1px solid #eee;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f9f9f9;
	cursor: pointer;
	box-sizing: border-box;

	&:hover {
		background-color: #2546ff;
		color: #fff;
	}
}

::v-deep(.el-empty) {
	padding: 0;
	width: 100%;
	height: 100%;
}
</style>
