<template>
	<div class="header-class flex-row flex-center">
		<!-- logo -->
		<div class="header-logo" @click="jumpRoute('home')">
			<img src="@/assets/layout/logo.png" alt="" title="For Freedom 首页" />
		</div>
		<!-- nav -->
		<div class="header-nav">
			<menulist></menulist>
		</div>
		<div class="header-right flex-row flex-center">
			<!-- search -->
			<div class="header-search">
				<el-input v-model="keyword" placeholder="输入关键词搜索"></el-input>
				<el-button type="primary" icon="Search" @click="search"></el-button>
			</div>
			<!-- theme -->
			<div class="header-theme">
				<el-switch
					v-model="isLight"
					size="large"
					active-action-icon="Sunny"
					inactive-action-icon="Moon"
					@change="themeChange"
				></el-switch>
			</div>
			<!-- fullScreen -->
			<svg-icon
				v-if="!fullScreenStore.fullScreen"
				class="fullScreen"
				name="fullScreen"
				color="#2546ff"
				width="25px"
				height="25px"
				@click="fullScreen"
			></svg-icon>
			<svg-icon
				v-else
				class="fullScreen"
				name="cancelFullScreen"
				color="#2546ff"
				width="40px"
				height="40px"
				@click="fullScreen"
			></svg-icon>
			<!-- avatar -->
			<div class="header-avatar">
				<el-popover placement="bottom-end" :width="260" trigger="hover" :teleported="false">
					<template #reference>
						<el-avatar :size="40" :src="avatarUrl" />
					</template>
					<div class="avatar-top">
						<el-avatar :size="45" :src="avatarUrl" />
						<div class="avatar-top-user">{{ userName }}</div>
					</div>
					<el-divider></el-divider>
					<div class="avatar-middle">
						<div class="middle-item" v-for="item in userInfo" :key="item.name">
							<div class="item-number">{{ item.number }}</div>
							<div class="item-name">{{ item.name }}</div>
						</div>
					</div>
					<el-divider></el-divider>
					<div class="avatar-content">
						<div class="content-item" v-for="item in listInfo" :key="item.name">
							<el-icon size="16">
								<component :is="item.component"></component>
							</el-icon>
							<span>{{ item.name }}</span>
						</div>
					</div>
					<el-divider></el-divider>
					<div class="avatar-bottom">
						<el-button type="primary" size="default">退出登录</el-button>
					</div>
				</el-popover>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import avatarUrl from "@/assets/layout/james.jpg";
import useFullScreenStore from "@/store/fullScreen.ts";
import useThemeStore from "@/store/theme.ts";
import menulist from "./menuList.vue";

const router = useRouter();

const keyword = ref("");
const userName = ref("落笔成念");
const isLight = ref(true);

const userInfo = reactive([
	{
		name: "关注",
		number: 28,
	},
	{
		name: "粉丝",
		number: 1,
	},
	{
		name: "收藏",
		number: 35,
	},
]);

const listInfo = reactive([
	{
		name: "个人中心",
		component: "UserFilled",
	},
	{
		name: "我的足迹",
		component: "Promotion",
	},
	{
		name: "我的等级",
		component: "Histogram",
	},
]);

// 查询
const search = () => {};

// 跳转路由
const jumpRoute = (name: any) => {
	router.push({ name: name });
};

// 全屏
const fullScreenStore = useFullScreenStore();
const fullScreen = () => {
	if (fullScreenStore.fullScreen === false) {
		document.documentElement.requestFullscreen();
	} else {
		document.exitFullscreen();
	}
	fullScreenStore.fullScreenAction();
};

// 主题切换
const themeStore = useThemeStore();
const themeChange = () => {
	themeStore.themeChange();
};

onMounted(() => {
	themeStore.getTheme();
	isLight.value = themeStore.isLight;
});
</script>

<style scoped lang="scss">
@import "../../style/variables.scss";

.header-class {
	position: fixed;
	justify-content: space-between;
	width: 100%;
	height: 60px;
	background-color: $base-background-color;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
	z-index: 2;

	.header-logo {
		margin-left: 20px;
		height: 55px;
		display: inline-flex;

		img {
			width: 180px;
			height: 100%;
			cursor: pointer;
		}
	}

	.header-nav {
		display: inline-flex;
		width: 100%;
		height: 100%;
		margin: 0 100px 0 30px;
	}

	.header-right {
		margin-right: 20px;

		.header-search {
			display: inline-flex;

			::v-deep(.el-input__wrapper) {
				border-radius: 16px 0 0 16px;
				width: 150px;
			}

			::v-deep(.el-button) {
				border-radius: 0 16px 16px 0;
				font-size: 16px;
			}
		}

		.header-theme {
			margin: 0 20px;
		}

		.fullScreen {
			margin-right: 20px;
			cursor: pointer;
		}

		.header-avatar {
			::v-deep(.el-avatar) {
				cursor: pointer;
			}

			::v-deep(.el-divider--horizontal) {
				margin: 10px 0;
			}

			.avatar-top {
				display: inline-flex;
				align-items: center;
				width: 100%;
				height: 50px;

				.avatar-top-user {
					margin-left: 20px;
					font-size: 20px;
					font-weight: bold;
					letter-spacing: 5px;
					// font-family: KaiTi
				}
			}

			.avatar-middle {
				display: inline-flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 20px;
				width: calc(100% - 40px);

				.middle-item {
					display: flex;
					flex-direction: column;
					align-items: center;
					padding: 2px 5px;

					.item-number {
						font-size: 16px;
						font-style: italic;
						color: $blue-color;
					}

					// .item-name {
						// color: $base-color;
					// }
				}
			}

			.avatar-content {
				margin-left: -12px;
				width: calc(100% + 24px);
				height: auto;

				.content-item {
					display: inline-flex;
					align-items: center;
					width: 100%;
					box-sizing: border-box;
					padding: 0 30px;
					cursor: pointer;
					height: 36px;
					line-height: 36px;

					&:hover {
						background-color: #f0f0f5;
					}

					span {
						margin-left: 12px;
						font-size: 15px;
					}
				}
			}

			.avatar-bottom {
				display: inline-flex;
				justify-content: flex-end;
				width: 100%;
			}
		}
	}
}
</style>
