<template>
	<div class="full-size box-padding box-bg-color">
		<PaginatedTable :data="tableData" :loading="loading" :page="page" @pagination-change="handlePaginationChange">
			<el-table-column prop="name" label="姓名"> </el-table-column>
			<el-table-column prop="age" label="年龄"> </el-table-column>
			<el-table-column prop="address" label="地址"></el-table-column>
		</PaginatedTable>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PaginatedTable from './PaginatedTable.vue';

const tableData = ref([]);
const loading = ref(false);
const page = ref({
	pageNum: 1,
	pageSize: 20,
	total: 0,
});
const staticData = [
	{ name: '张三', age: 18, address: '北京市' },
	{ name: '李四', age: 20, address: '上海市' },
	{ name: '王五', age: 22, address: '广州市' },
	{ name: '赵六', age: 24, address: '深圳市' },
	{ name: '钱七', age: 26, address: '杭州市' },
	{ name: '孙八', age: 28, address: '南京市' },
	{ name: '周九', age: 30, address: '武汉市' },
	{ name: '吴十', age: 32, address: '成都市' },
	{ name: '郑十一', age: 34, address: '重庆市' },
	{ name: '王十二', age: 36, address: '天津市' },
];

onMounted(() => {
	getTableData();
});

const handlePaginationChange = (pageNum: number, pageSize: number) => {
	page.value.pageNum = pageNum;
	page.value.pageSize = pageSize;
	getTableData();
};

const getTableData = async () => {
	tableData.value = [];
	loading.value = true;

	try {
		let res: any = await new Promise((resolve: any) => {
			setTimeout(() => {
				resolve(staticData);
			}, 300);
		});
		tableData.value = res;
		page.value.total = tableData.value.length;
	} catch (e) {
		console.log(e);
	} finally {
		loading.value = false;
	}
};
</script>

<style scoped lang="scss">
.full-size {
	display: flex;
	flex-direction: column;
}
</style>
