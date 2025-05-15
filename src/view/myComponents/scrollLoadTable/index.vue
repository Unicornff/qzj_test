<template>
	<div class="full-size box-bg-color box-padding">
		<ScrollLoadTable
			:data="tableData"
			:initLoading="initLoading"
			:loadMoreLoading="loadMoreLoading"
			:pageSize="pageSize"
			:hasMore="hasMore"
			@loadMoreData="getTableData"
		>
			<el-table-column prop="name" label="姓名"> </el-table-column>
			<el-table-column prop="age" label="年龄"> </el-table-column>
			<el-table-column prop="address" label="地址"> </el-table-column>
		</ScrollLoadTable>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ScrollLoadTable from './ScrollLoadTable.vue';

const tableData = ref<any[]>([]);
const pageSize = ref<number>(20);
const initLoading = ref<boolean>(false); // 初始加载中
const loadMoreLoading = ref<boolean>(false); // 加载更多中
const hasMore = ref<boolean>(true); // 是否还有更多数据

onMounted(() => {
	getTableData(1, pageSize.value);
});

const getTableData = async (pageNum: number, pageSize: number) => {
	if (pageNum === 1) {
		initLoading.value = true;
	} else {
		loadMoreLoading.value = true;
	}

	try {
		let param = {
			pageNum,
			pageSize,
		};
		let res: any = await mockDataFunc(param);
		// 合并数据
		tableData.value = [...tableData.value, ...res];
		// 判断是否还有更多数据
		if (res.length < pageSize) {
			hasMore.value = false;
		}
	} catch (e) {
		console.log(e);
	} finally {
		initLoading.value = false;
		loadMoreLoading.value = false;
	}
};

const mockDataFunc = (param: any) => {
	const { pageNum, pageSize } = param;
	return new Promise((resolve: any) => {
		setTimeout(
			() => {
				// 模拟请求
				if (pageNum > 5) {
					resolve([{ name: '姓名 101', age: 20, address: '地址 101' }]);
					return;
				}
				const data = Array.from({ length: pageSize }, (_, i) => {
					const index = (pageNum - 1) * pageSize + i + 1;
					return {
						name: `姓名 ${index}`,
						age: 20 + (index % 10),
						address: `地址 ${index}`,
					};
				});
				resolve(data);
			},
			pageNum === 1 ? 300 : 1000,
		);
	});
};
</script>

<style scoped lang="scss"></style>
