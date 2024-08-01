<template>
	<div class="main-container">
		<el-menu :default-active="menuIndex" :collapse="isCollapse" mode="horizontal" menu-trigger="click">
			<menuTree :menu="menu" :active="menuIndex" @routeClick="jumpRoute"></menuTree>
		</el-menu>
	</div>
</template>

<script setup lang="ts">
import { Ref, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import menuTree from "./menuTree.vue";
import arr_nav from "./navsList";

const router = useRouter();
const route = useRoute();
const menu = ref(arr_nav);

const isCollapse: Ref<boolean> = ref(false);
const menuIndex: Ref<string> = ref("");

// 递归获取当前路由id，并赋值给menuIndex
const getCurrentRouteIndex = (route: any, menuList: any) => {
	for (const item of menuList) {
		if (item.pathRouterName === route.name) {
			menuIndex.value = item.id;
			return;
		}
		if (item.children) {
			getCurrentRouteIndex(route, item.children);
		}
	}
};

watch(
	route,
	(route: any) => {
		getCurrentRouteIndex(route, menu.value);
	},
	{ immediate: true }
);

// 跳转路由
const jumpRoute = (route: any) => {
	router.push({ name: route.pathRouterName });
};
</script>

<style scoped lang="scss"></style>
