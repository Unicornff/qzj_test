<template>
	<el-table ref="scrollLoadTableContainer" :data="props.data" height="100%" v-loading="props.initLoading">
		<slot></slot>
		<!-- 滚动到底部的加载效果 -->
		<template #append>
			<div v-if="props.loadMoreLoading" class="loading-container">
				<el-icon class="loading-icon"><loading /></el-icon>
				<span class="loading-text">加载中...</span>
			</div>
		</template>
	</el-table>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';

import Utils from '@/utils/utils';

const props = defineProps({
	data: {
		type: Array<any>,
		required: true,
		default: [],
	},
	initLoading: {
		type: Boolean,
		default: false,
	},
	loadMoreLoading: {
		type: Boolean,
		default: false,
	},
	pageSize: {
		type: Number,
		default: 20,
	},
	hasMore: {
		type: Boolean,
		default: true,
	},
});
const emit = defineEmits(['loadMoreData']);

const currentPage = ref(1);
const scrollLoadTableContainer = ref<HTMLElement | null>(null);
let scrollWrapper: HTMLElement | null = null;

onMounted(() => {
	nextTick(() => {
		let tableWrapper: any = (scrollLoadTableContainer.value as any).$refs.bodyWrapper as HTMLElement;
		scrollWrapper = tableWrapper.querySelector('.el-scrollbar__wrap') as HTMLElement;
		if (scrollWrapper) {
			scrollWrapper.addEventListener('scroll', handleScroll);
		}
	});
});

onBeforeUnmount(() => {
	if (scrollWrapper) {
		scrollWrapper.removeEventListener('scroll', handleScroll);
	}
});

const handleScroll = Utils.lodashThrottle((e: Event) => {
	if (!props.hasMore) return; // 如果已经没有更多数据了，则不再触发加载更多数据

	const el = e.target as HTMLElement;
	const threshold = 5; // 滚动到底部的阈值
	// 这里需要判断是否滚动到底部，如果滚动到底部则加载更多数据
	if (el.scrollHeight - el.scrollTop - el.clientHeight < threshold) {
		loadMoreData();
	}
}, 300);

// 加载更多数据
const loadMoreData = () => {
	currentPage.value++;
	emit('loadMoreData', currentPage.value, props.pageSize);
};
</script>

<style scoped lang="scss">
::v-deep(.loading-container) {
	display: inline-flex;
	height: 40px;
	width: 100%;
	justify-content: center;
	background-color: #f8f8f8;
	align-items: center;
	.loading-icon {
		margin-right: 5px;
		animation: spin 3s linear infinite;
	}
	@keyframes spin {
		100% {
			transform: rotate(360deg);
		}
	}
}
</style>
