<template>
	<div class="header-class">
		<div class="wrap-class">
			<!-- logo -->
			<div class="header-logo" @click="jumpRoute('home')">
				<img src="../../assets/layout/logo.png" alt="" title="For Freedom 首页" />
			</div>
			<!-- nav -->
			<div class="header-nav">
				<div
					class="nav-item"
					v-for="item in arr_nav"
					:key="item.name"
					@click="jumpRoute(item.pathRouterName)"
					:class="item.active ? 'active' : ''"
				>
					{{ item.name }}
				</div>
			</div>
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
	</div>
</template>

<script setup lang="ts">
type Nav = {
	name: string;
	pathRouterName: string;
	active: boolean;
};
type UserInfo = {
	number: number;
	name: string;
};
type ListInfo = {
	name: string;
	component: any;
};

import { onMounted, reactive, ref, Ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import avatarUrl from "@/assets/layout/james.jpg";
import useFullScreenStore from "@/store/fullScreen.ts";
import useThemeStore from "@/store/theme.ts";

const router = useRouter();
const route = useRoute();
const keyword: Ref<string> = ref("");
const userName: Ref<string> = ref("落笔成念");
const isLight: Ref<boolean> = ref(true);

const arr_nav: Array<Nav> = reactive([
	{
		name: "首页",
		pathRouterName: "home",
		active: true,
	},
	{
		name: "热点",
		pathRouterName: "focus",
		active: false,
	},
	{
		name: "活动",
		pathRouterName: "activity",
		active: false,
	},
	{
		name: "社区",
		pathRouterName: "community",
		active: false,
	},
	{
		name: "测试",
		pathRouterName: "test",
		active: false,
	},
]);

const userInfo: Array<UserInfo> = reactive([
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

const listInfo: Array<ListInfo> = reactive([
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

watch(
	route,
	(route: any) => {
		arr_nav.forEach((item: Nav) => {
			if (item.pathRouterName === route.name) {
				item.active = true;
			} else {
				item.active = false;
			}
		});
	},
	{ immediate: true }
);

// 跳转路由
const jumpRoute = (name: string) => {
	router.push({ name });
};

// 查询
const search = () => {};

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
	display: inline-flex;
	justify-content: space-between;
	width: 100%;
	height: 60px;
	background-color: $base-background-color;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
	z-index: 9999;

	.wrap-class {
		min-width: 1300px;
		margin: 0 auto;
		display: inline-flex;
		align-items: center;

		.header-logo {
			margin-right: 50px;
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
			height: 100%;

			.nav-item {
				padding: 0 16px;
				border-bottom: 2px solid #fff;
				box-sizing: border-box;
				height: 100%;
				line-height: 60px;
				cursor: pointer;
				// transition: all 0.5s ease-in-out;

				&:hover {
					background-color: $base-background-gray-color;
				}
			}

			.active {
				border-bottom: 2px solid $blue-color;
				background-color: $base-background-gray-color;
			}
		}

		.header-search {
			margin-right: 30px;
			margin-left: auto;
			display: inline-flex;

			::v-deep(.el-input__wrapper) {
				border-radius: 16px 0 0 16px;
			}

			::v-deep(.el-button) {
				border-radius: 0 16px 16px 0;
				font-size: 16px;
			}
		}

		.header-theme {
			margin-right: 30px;
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

					.item-name {
						// color: $base-color;
					}
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

	.fullScreen {
		position: absolute;
		right: 20px;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
	}
}
</style>
