<template>
	<div class="main-container">
		<div class="top">
			<img src="@/assets/layout/home.png" alt="" class="title-pic">
			<span class="title-name">首页</span>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { onMounted,ref } from 'vue';

const number = ref(12345678.9)

onMounted(() => {
	// console.log(number.value.toLocaleString());
})
</script>

<style scoped lang="scss">
.main-container {
	.top {
		display: inline-flex;
		align-items: center;
		width: 100%;
		height: 120px;
		// background-color: #fff;

		.title-pic {
			width: 140px;
			height: 120px
		}

		.title-name {
			position: relative;
			margin-left: 30px;
			color: #2546FF;
			font-style: italic;
			font-size: 20px;
			font-weight: bold;
			letter-spacing: 3px;

			&::before {
				content: "";
				position: absolute;
				top: -1px;
				left: -20px;
				width: 5px;
				height: 30px;
				background-color: #2546FF
			}
		}
	}
}
</style>