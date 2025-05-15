<template>
	<div
		ref="virtualListContainer"
		class="virtual-list"
		:style="{ height: `${containerHeight}px`, overflowY: 'auto' }"
		@scroll="handleScroll"
	>
		<div :style="{ height: `${totalHeight}px`, position: 'relative' }">
			<div
				v-for="(item, index) in visibleData"
				:key="item.id"
				:style="getItemStyle(index)"
				class="virtual-list-item"
			>
				<slot name="item" :item="item" :index="startIndex + index"> </slot>
			</div>
		</div>
		<el-empty description="无数据" v-if="!props.data.length" />
	</div>
</template>

<script setup lang="ts">
defineOptions({
	name: 'VirtualList',
});
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue';
import Utils from '@/utils/utils.ts';

const props = defineProps({
	data: {
		type: Array,
		required: true,
	},
	itemHeight: {
		type: Number,
		default: 50, // 每个列表项的高度
	},
});

let resizeObserver: ResizeObserver | null = null; // 监听容器大小变化的观察者
const virtualListContainer = ref<HTMLElement | null>(null); // 虚拟列表容器
const containerHeight = ref(0); // 虚拟列表容器的高度（通过ResizeObserve动态计算得出）
const scrollTop = ref(0); // 滚动条距离顶部的偏移量
const visibleCount = computed(() => Math.ceil(containerHeight.value / props.itemHeight)); // 可见的列表项数量（向上取整）
const startIndex = computed(() => Math.floor(scrollTop.value / props.itemHeight)); // 当前滚动位置的起始索引（向下取整）
const endIndex = computed(() => startIndex.value + visibleCount.value); // 当前滚动位置的结束索引

onMounted(() => {
	nextTick(() => {
		const parent = virtualListContainer.value?.parentElement;
		if (parent) {
			resizeObserver = new ResizeObserver(() => {
				containerHeight.value = parent.clientHeight;
			});
			resizeObserver.observe(parent);

			// 初始化容器高度
			containerHeight.value = parent.clientHeight;
		}
	});
});

onBeforeUnmount(() => {
	if (resizeObserver) {
		resizeObserver.disconnect();
		resizeObserver = null;
	}
});

// 可见的数据片段
const visibleData: any = computed(() => props.data.slice(startIndex.value, endIndex.value));

// 总高度
const totalHeight = computed(() => props.data.length * props.itemHeight);

// 监听滚动事件，更新scrollTop的值（节流）
const handleScroll = Utils.lodashThrottle((e: Event) => {
	scrollTop.value = (e.target as HTMLElement).scrollTop;
}, 30);

// 计算每个可见项目的样式（主要用于控制其绝对定位位置）
const getItemStyle = (index: number) => {
	const top = (startIndex.value + index) * props.itemHeight;
	return {
		position: 'absolute',
		top: `${top}px`,
		width: '100%',
		height: `${props.itemHeight}px`,
	} as any;
};
</script>

<style scoped lang="scss">
.virtual-list {
	border: 1px solid #e2e2e2;
	position: relative;
}

.virtual-list-item {
	box-sizing: border-box;
	border-bottom: 1px solid #e2e2e2;
}

::v-deep(.el-empty) {
	padding: 0;
	width: 100%;
	height: 100%;
}
</style>
