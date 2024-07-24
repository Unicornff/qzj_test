<template>
	<div class="main-container">
		<div class="top">
			<img src="@/assets/layout/community.png" alt="" class="title-pic" />
			<span class="title-name">社区</span>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.main-container {
	min-height: 110vh;

	.top {
		display: inline-flex;
		align-items: center;
		width: 100%;
		height: 120px;
		// background-color: #fff;

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
				content: "";
				position: absolute;
				top: -1px;
				left: -20px;
				width: 5px;
				height: 30px;
				background-color: #2546ff;
			}
		}
	}
}
</style>
