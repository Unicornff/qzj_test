<template>
	<div class="full-size">
		<div class="top">
			<img src="@/assets/layout/myComponents.png" alt="" class="title-pic" />
			<span class="title-name">封装组件</span>
		</div>
		<div class="list-class">
			<div
				:class="[item.name === currentComponentName ? 'item-active' : '', 'item-class']"
				v-for="item in componentsList"
				:key="item.name"
				@click="jumpComponent(item)"
			>
				{{ item.text }}
			</div>
		</div>
		<div class="content">
			<transition name="fade" mode="out-in">
				<component :is="currentComponent"></component>
			</transition>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref, shallowRef, onBeforeUnmount } from 'vue';
import { componentsList, ComponentList } from './componentsList';

const currentComponentName = ref<string>(''); // 当前组件名称
const currentComponent = shallowRef<any>(); // 当前组件

onMounted(() => {
	// 初始化组件
	let current = (window.sessionStorage.getItem('my-components-current') as string) || componentsList[0].name;
	componentsList.forEach((item) => {
		if (item.name === current) {
			jumpComponent(item);
		}
	});
});

onBeforeUnmount(() => {
	// 清除组件缓存
	window.sessionStorage.removeItem('my-components-current');
});

/**
 * 切换组件
 * @param param 包含组件名称和组件的列表
 */
const jumpComponent = ({ name, component }: ComponentList) => {
	currentComponentName.value = name;
	currentComponent.value = component;
	window.sessionStorage.setItem('my-components-current', name);
};
</script>

<style scoped lang="scss">
.full-size {
	display: flex;
	flex-direction: column;
	overflow: hidden;
	.top {
		display: inline-flex;
		align-items: center;
		width: 100%;
		height: 120px;
		.title-pic {
			width: 140px;
			height: 120px;
		}
		.title-name {
			position: relative;
			margin-left: 30px;
			color: #2546ff;
			font-style: italic;
			font-size: 20px;
			font-weight: bold;
			letter-spacing: 3px;
			&::before {
				content: '';
				position: absolute;
				top: -1px;
				left: -20px;
				width: 5px;
				height: 30px;
				background-color: #2546ff;
			}
		}
	}

	.list-class {
		margin-bottom: 20px;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		width: 100%;
		height: auto;
		.item-class {
			margin-right: 10px;
			padding: 0 20px;
			width: auto;
			height: 40px;
			line-height: 40px;
			border-radius: 4px;
			text-align: center;
			cursor: pointer;
			background-color: #fff;
			&:last-child {
				margin-right: 0;
			}
		}
		.item-active {
			background-color: #2546ff;
			color: #fff;
		}
	}

	.content {
		flex: 1;
		height: 0;
		.fade-enter-active,
		.fade-leave-active {
			transition: all 0.5s ease;
		}
		.fade-enter-from {
			opacity: 0;
			transform: translateX(20px);
		}
		.fade-leave-to {
			opacity: 0;
			transform: translateX(-20px);
		}
	}
}
</style>
