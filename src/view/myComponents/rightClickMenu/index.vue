<template>
	<div class="full-size box-bg-color">
		<div ref="containerRef" class="can-right-click-container" @contextmenu="showRightClickMenu">
			<RightClickMenu ref="rightClickMenu">
				<div class="menu-container">
					<div class="menu-item" v-for="item in 5" :key="item" @click="handleRightClick(item)">
						{{ item }}
					</div>
				</div>
			</RightClickMenu>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import RightClickMenu from './RightClickMenu.vue';
import { ElMessage } from 'element-plus';

const containerRef = ref<HTMLDivElement>(); // 右键菜单容器
const rightClickMenu = ref<InstanceType<typeof RightClickMenu>>(); // 右键菜单组件

onMounted(() => {
	if (containerRef.value) {
		rightClickMenu.value?.setContainer(containerRef.value);
	}
});

const showRightClickMenu = (e: MouseEvent) => {
	rightClickMenu.value?.showMenu(e);
};

const handleRightClick = (item: number) => {
	ElMessage.success(`你点击了第${item}项`);
	rightClickMenu.value?.hideMenu();
};
</script>

<style scoped lang="scss">
.can-right-click-container {
	width: 100%;
	height: 100%;
	background-color: #ccc;
	.menu-container {
		width: 100px;
		height: auto;
		background-color: #fff;
		border-radius: 4px;
		padding: 5px 0;
		.menu-item {
			width: 100px;
			height: 30px;
			line-height: 30px;
			text-align: center;
			background-color: #fff;
			margin-bottom: 5px;
			cursor: pointer;
			margin-bottom: 5px;
			&:last-child {
				margin-bottom: 0;
			}
			&:hover {
				background-color: #eee;
			}
		}
	}
}
</style>
