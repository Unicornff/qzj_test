<template>
	<div class="main-container">
		<div class="item">哈哈哈</div>
		<div class="item"></div>
		<div class="item"></div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.main-container {
	display: inline-flex;
}
.item {
	width: 200px;
	height: 200px;
	background-color: blue;
	margin-right: 20px;
	font-size: clamp(1rem, 0.8rem + 1vw, 3rem); // 确保字体大小永远不会低于 1rem，随视口缩放，并且永远不会超过 3rem。
}
@media screen and (max-width: 1000px) {
	.item {
		width: 200px;
		height: 200px;
		background-color: red;
	}
}
</style>
