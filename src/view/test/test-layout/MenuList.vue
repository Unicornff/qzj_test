<template>
	<div>
		<el-menu :default-active="menuIndex" :collapse="isCollapse">
			<MenuTree :menu="menu" :active="menuIndex" @routeClick="jumpRoute"></MenuTree>
		</el-menu>
	</div>
</template>

<script setup lang="ts">
type Menu = {
	id: string,
	icon: string,
	pathName: string,
	title: string,
	children?: Menu[]
}

import { Ref, reactive, ref } from "vue"
import { useRouter } from 'vue-router'
import MenuTree from './MenuTree.vue'
const router = useRouter()

const isCollapse: Ref<boolean> = ref(false)
const menuIndex: Ref<string> = ref("")
const menu: Menu[] = reactive([
	{
		id: '1',
		icon: '',
		pathName: '',
		title: '1',
		children: [
			{
				id: '11',
				icon: '',
				pathName: '',
				title: '11',
			},
			{
				id: '12',
				icon: '',
				pathName: '',
				title: '12',
			}
		]
	},
	{
		id: '2',
		icon: '',
		pathName: '',
		title: '2'
	},
	{
		id: '3',
		icon: '',
		pathName: '',
		title: '3'
	},
])

const jumpRoute = (route: any) => {
	// router.push({ name: route.pathName });
}
</script>

<style scoped lang="scss">
@import "../../style/variables.scss";

::v-deep(.el-menu) {
	border-right: none !important;
	background-color: #fff !important;
	font-size: 18px;
	color: #000;

	.el-menu-item,
	.el-sub-menu__title {
		margin: 10px 20px 0;
		border-radius: 10px;
		height: 46px !important;
		line-height: 46px !important;

		&:hover {
			background-color: #2546ff;
			color: #fff;
		}

		svg {
			margin-right: 10px;
		}
	}

	.el-menu-item.is-active {
		background-color: #2546ff !important;
		color: #fff !important;
	}

	.el-sub-menu.is-active {
		.el-sub-menu__title {
			background-color: #2546ff !important;
			color: #ffffff;

			i {
				color: #ffffff;
			}
		}
	}
}
</style>
