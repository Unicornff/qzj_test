<template>
	<div
		v-show="visible"
		ref="rightClickMenu"
		class="right-click-menu"
		:style="{ top: `${position.y}px`, left: `${position.x}px` }"
		@contextmenu.prevent
	>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { nextTick, ref, onMounted, onBeforeUnmount } from 'vue';

const visible = ref(false);
const position = ref({ x: 0, y: 0 });
const rightClickMenu = ref<HTMLElement | null>(null);
const containerRef = ref<HTMLElement | null>(null);

onMounted(() => {
	document.addEventListener('mousedown', onGlobalClick);
});

onBeforeUnmount(() => {
	document.removeEventListener('mousedown', onGlobalClick);
});

// 点击页面任意位置关闭菜单（如果不是容器内）
function onGlobalClick(e: MouseEvent) {
	const target = e.target as Node;
	if (!visible.value) return;

	const isLeftClick = e.button === 0;
	const clickedInContainer = containerRef.value && containerRef.value.contains(target);
	const clickedInMenu = rightClickMenu.value && rightClickMenu.value.contains(target);

	// 如果是左键点击且不在菜单内，或者右键点击且不在容器内，则隐藏菜单
	if ((isLeftClick && !clickedInMenu) || (!isLeftClick && !clickedInContainer)) {
		hideMenu();
	}
}

// 设置父容器
const setContainer = (el: HTMLElement) => {
	containerRef.value = el;
};

// 显示菜单
const showMenu = (e: MouseEvent) => {
	e.preventDefault();
	visible.value = true;
	position.value = { x: e.clientX, y: e.clientY };

	nextTick(() => {
		if (rightClickMenu.value) {
            // 防止菜单超出屏幕边界
			const { offsetWidth, offsetHeight } = rightClickMenu.value;
			const { clientWidth, clientHeight } = document.documentElement;
			if (position.value.x + offsetWidth > clientWidth) {
				position.value.x = position.value.x - offsetWidth;
			}
			if (position.value.y + offsetHeight > clientHeight) {
				position.value.y = position.value.y - offsetHeight;
			}
		}
	});
};

// 隐藏菜单
const hideMenu = () => {
	visible.value = false;
};

defineExpose({ showMenu, hideMenu, setContainer });
</script>

<style scoped lang="scss">
.right-click-menu {
	position: fixed;
	z-index: 999;
	// background-color: #fff;
	// border: 1px solid #ccc;
	// box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
