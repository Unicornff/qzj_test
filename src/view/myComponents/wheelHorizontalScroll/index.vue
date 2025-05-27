<template>
	<div class="full-size box-bg-color box-padding">
		<div style="width: 500px; height: 200px">
			<WheelHorizontalScroll>
				<div class="list-item" v-for="item in 20" :key="item"></div>
			</WheelHorizontalScroll>
		</div>
	</div>
</template>

<script setup lang="ts">
import WheelHorizontalScroll from './WheelHorizontalScroll.vue';
</script>

<style scoped lang="scss">
.list-item {
    display: inline-block;
	margin-right: 10px;
	width: 150px;
	height: 100%;
	background-color: #ccc;
	&:last-child {
		margin-right: 0;
	}
}
</style>
