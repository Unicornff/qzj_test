<template>
	<div class="full-size">
		<div class="content-table">
			<el-table ref="refTable" stripe :data="data" v-loading="loading">
				<slot />
			</el-table>
		</div>
		<div class="content-page" v-if="showPagination">
			<el-pagination
				@size-change="(pageSize: number) => handlePaginationChange(1, pageSize)"
				@current-change="(currentPage: number) => handlePaginationChange(currentPage, page.pageSize)"
				:current-page="page.pageNum"
				:page-sizes="[10, 20, 50, 100, 200]"
				:page-size="page.pageSize"
				:total="page.total"
				layout="total, ->, sizes, prev, pager, next"
			></el-pagination>
		</div>
	</div>
</template>

<script setup lang="ts">
type pageType = {
	pageNum: number;
	pageSize: number;
	total: number;
};

const emit = defineEmits(['pagination-change']);
const props = defineProps({
	data: {
		type: Array,
		default: () => [],
	},
	page: {
		type: Object as () => pageType,
		default: () => {
			return {
				pageNum: 1,
				pageSize: 20,
				total: 0,
			};
		},
	},
	loading: {
		type: Boolean,
		default: false,
	},
	showPagination: {
		type: Boolean,
		default: true,
	},
});

const handlePaginationChange = (pageNum: number, pageSize: number) => {
	emit('pagination-change', pageNum, pageSize);
};
</script>

<style scoped lang="scss">
.full-size {
	flex: 1;
	height: 0;
	border-radius: 8px;
	background: transparent;
	display: flex;
	flex-direction: column;
	position: relative;
	.content-table {
		flex: 1;
		height: 0;
		// margin: 0 16px;
		// width: calc(100% - 32px) !important;
		// display: flex;
		// flex-direction: column;
		// position: relative;
	}

	.content-page {
		padding: 16px;
	}
}

// 表格
::v-deep(.el-table) {
	height: 100% !important;
	// background-color: transparent !important;
	background-color: #1a3257 !important;

	thead {
		color: rgb(215, 215, 230) !important;

		th {
			background-color: #061b3b !important;
			height: 48px;
		}

		.el-table__cell {
			border-color: transparent !important;
		}
	}

	tbody {
		color: rgb(171, 184, 194) !important;

		tr {
			background-color: #031022 !important;

			.el-table__cell {
				padding: 5px 0;
			}

			&:hover {
				background-image: linear-gradient(90deg, #1a7be6 0%, transparent 100%) !important;

				.el-table__cell {
					background-color: transparent !important;
					color: #fff !important;

					.file-class {
						color: #00aeff !important;
					}
				}
			}
		}
	}

	.el-table__row--striped {
		background: repeating-linear-gradient(
			-70deg,
			transparent 0px,
			transparent 3px,
			#08263d 3px,
			#08263d 6px
		) !important;

		.el-table__cell {
			background-color: transparent !important;
		}
	}

	.el-table__cell {
		border-color: transparent !important;
	}

	&:before {
		background-color: #06357a !important;
	}

	.el-table__body-wrapper {
		height: calc(100% - 48px) !important;
		overflow-y: scroll;
		.el-scrollbar__bar.is-vertical,
		.el-scrollbar__bar.is-horizontal {
			.el-scrollbar__thumb {
				background-color: #003a92;
				opacity: 1;
			}
		}
	}

	// 表格中的按钮样式
	.el-button--text {
		color: #0c98ff;
	}
}

// 分页器
::v-deep(.el-pagination) {
	color: #222;
	font-family: PingFang SC;
	font-weight: 400;

	span:not([class*='suffix']),
	button,
	.el-input__inner {
		height: 32px;
		line-height: 32px;
	}

	.el-input__inner {
		background-color: #072341;
		border-color: #0e5199;
		color: #fff;
	}

	button {
		background-color: #072341 !important;
		border-color: #0e5199 !important;
		color: #fff !important;
	}

	.el-pagination__total {
		// color: #fff;
		color: #000;
	}

	.el-pager {
		li {
			min-width: 32px;
			height: 32px;
			line-height: 32px;
			margin: 0 4px;
			background-color: #072341;
			border-color: #0e5199;
			color: #fff !important;
		}

		li.more {
			border: none;
		}

		.is-active {
			color: #fff;
			border-radius: 2px;
			background-color: #2b7fec;
			border: 1px solid #2b7fec;
		}
	}

	.el-select .el-input {
		width: 100px !important;
		margin: 0 5px;

		.el-input__inner {
			width: 100px !important;
		}
	}
}
</style>
