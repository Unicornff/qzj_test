<template>
	<!-- 网格布局 -->
	<div class="main-container">
		<ul class="list-content">
			<li v-for="(i, index) in 9" :key="index" class="item-content">{{ i }}</li>
		</ul>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.list-content {
	padding: 0;
	list-style: none;
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(3, auto);
	grid-template-rows: repeat(3, auto);
	gap: 20px;
	.item-content {
		background-color: #fff;
	}
}
</style>
