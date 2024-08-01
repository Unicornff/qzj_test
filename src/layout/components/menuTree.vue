<template>
	<template v-for="item in menu">
		<el-sub-menu v-if="item.children" :index="item.id">
			<template #title>
				<el-icon v-if="item.icon">
					<component :is="item.icon" />
				</el-icon>
				<span>{{ item.name }}</span>
			</template>
			<menuTree :menu="item.children" :active="active" @routeClick="jumpRoute"></menuTree>
		</el-sub-menu>
		<el-menu-item v-else :index="item.id" @click="jumpRoute(item)">
			<template #title>
				<el-icon v-if="item.icon">
					<component :is="resloveIcon(item.icon)"></component>
				</el-icon>
				<span>{{ item.name }}</span>
			</template>
		</el-menu-item>
	</template>
</template>

<script setup lang="ts">
defineOptions({
	name: "MenuTree"
});
defineProps(["menu", "active"]);
const emit = defineEmits(["routeClick"]);
import menuTree from "./menuTree.vue";

const jumpRoute = (route: any) => {
	emit("routeClick", route);
};

const resloveIcon = (icon: any) => {
	return icon;
};
</script>

<style scoped lang="scss">
.menu-tree-class {
	width: auto;
	display: inline-flex;

	::v-deep(.el-menu-item) {
		width: auto;
		padding: 0 20px;
		height: 100%;
	}

	::v-deep(.el-sub-menu__title) {
		width: auto;
		height: 100%;
	}
}
</style>
