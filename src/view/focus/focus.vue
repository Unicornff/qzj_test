<template>
	<div class="main-container">
		<div class="top">
			<img src="@/assets/layout/focus.png" title="" class="title-pic">
			<span class="title-name">热点</span>
		</div>
		<div class="content">
			<div class="item" v-for="item in 12" :key="item">
				<div class="item-left">
					<div class="item-title nowrap">谷歌在中国推出Web.dev和Chrome for Developers网站</div>
					<div class="item-content more-nowrap">
						3 月 5 日，据谷歌“谷歌开发者”官方公众号报道，谷歌现已推出针对中国开发者的 Web.dev 和 Chrome for
						Developers 网站，用户可通过.cn 域名直接访问。这一举措旨在为中国开发者提供更为便捷的资源获取渠道，并推动 Web 技术和 Chrome 浏览器的持续发展。
					</div>
					<div class="item-describe">
						<div class="desc-time">
							{{ Utils.dateFormatString('2024-04-27', 'YYYY-MM-DD') }}
						</div>
						<div class="desc-view">
							<el-icon size="16">
								<View />
							</el-icon>
							<span>741</span>
						</div>
						<div class="desc-tag">
							<el-tag type="primary">Chrome</el-tag>
							<el-tag type="primary">浏览器</el-tag>
							<el-tag type="primary">AI</el-tag>
						</div>
					</div>
				</div>
				<div class="item-right">
					<img src="https://static.extfans.com/sites-resource/extfans/article/4787/headpic0_1709717323184.png"
						alt="" class="item-pic">
				</div>
			</div>
		</div>
		<div class="page-class">
			<el-pagination background layout="->, prev, pager, next" :total="20" />
		</div>
	</div>
</template>

<script setup lang='ts'>
import Utils from '@/utils/utils';
</script>

<style scoped lang='scss'>
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

	.content {
		// margin-top: 20px;
		display: flex;
		flex-wrap: wrap;
		width: 100%;

		.item {
			display: inline-flex;
			align-items: center;
			justify-content: space-between;
			margin-right: 20px;
			margin-bottom: 20px;
			padding: 16px;
			box-sizing: border-box;
			border-radius: 16px;
			width: calc((100% - 20px)/2);
			height: 200px;
			background-color: #fff;
			cursor: pointer;

			&:nth-child(2n) {
				margin-right: 0;
			}

			&:hover {
				box-shadow: 0px 0px 12px rgba(0, 0, 0, .12)
			}

			.item-left {
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				margin-right: 25px;
				width: calc(100% - 155px);
				height: 100%;

				.item-title {
					font-weight: bold;
					font-size: 17px;
				}

				.item-content {
					color: #8E8F9B;
					font-size: 13px;
				}

				.item-describe {
					display: inline-flex;
					color: #8E8F9B;
					font-size: 12px;

					.desc-time {
						line-height: 24px;
					}

					.desc-view {
						margin-left: 20px;
						display: inline-flex;
						align-items: center;

						span {
							margin-left: 3px;
						}
					}

					.desc-tag {
						margin-right: 0;
						margin-left: auto;

						::v-deep(.el-tag) {
							margin-left: 3px;
						}
					}
				}
			}

			.item-right {
				width: 130px;
				height: 120px;

				.item-pic {
					width: 100%;
					height: 100%;
					border-radius: 8px;
				}
			}
		}
	}

	.page-class {
		padding-bottom: 20px;
	}
}
</style>