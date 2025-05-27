<template>
	<div ref="scrollContainer" class="wheel-horizontal-scroll">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const scrollContainer = ref<HTMLElement | null>(null);

onMounted(() => {
	if (scrollContainer.value) {
		scrollContainer.value.addEventListener('wheel', handleWheel, { passive: false });
	}
});

onBeforeUnmount(() => {
	if (scrollContainer.value) {
		scrollContainer.value.removeEventListener('wheel', handleWheel);
	}
});

const handleWheel = (e: WheelEvent) => {
    // 阻止默认滚动行为
	e.preventDefault();

    // 将鼠标滚轮事件转换为水平滚动
	if (scrollContainer.value) {
		scrollContainer.value.scrollLeft += e.deltaY;
	}
};
</script>

<style scoped lang="scss">
.wheel-horizontal-scroll {
	overflow-x: scroll;
	overflow-y: hidden;
    white-space: nowrap;
    width: 100%;
	height: 100%;
    border: 1px solid;
}
</style>
