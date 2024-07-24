<template>
	<div class="app-header">
		<AppHeader></AppHeader>
	</div>
	<div class="app-content">
		<router-view></router-view>
	</div>
	<el-backtop :bottom="50" :right="50" :visibility-height="50">
		<svg-icon name="backToTop" width="25px" height="25px" color="#2546ff"></svg-icon>
	</el-backtop>
</template>

<script setup lang='ts'>
import AppHeader from "./components/AppHeader.vue";
</script>

<style scoped lang="scss">
.app-header {
	width: 100%;
	height: 60px;
}

.app-content {
	margin: 0 auto;
	max-width: 1300px;
	// height: calc(100% - 80px);
	// overflow: hidden;
}
</style>