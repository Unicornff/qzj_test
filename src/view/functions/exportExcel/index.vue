<template>
	<div class="main-container box-padding box-bg-color">
		<el-button type="primary" @click="exportExcel">导出下列表格</el-button>
		<el-button type="primary" @click="exportStaticFile">下载public下的静态文件</el-button>
		<el-table :data="tableData" border stripe style="margin-top: 10px" id="table-export">
			<template v-for="(col, index) in columnData" :key="index">
				<el-table-column v-if="!col.children" :label="col.label" :prop="col.value"></el-table-column>
				<el-table-column v-else :label="col.label">
					<template v-for="(child, childIndex) in col.children" :key="childIndex">
						<column-template :column="child"></column-template>
					</template>
				</el-table-column>
			</template>
		</el-table>
	</div>
</template>

<script setup lang="ts">
defineOptions({
	name: 'ExportExcel',
});
import { ref } from 'vue';
// import exportArrayToExcel from "./exportExcel";
import * as XLSX from 'xlsx';
import columnTemplate from './columnTemplate.vue';

const tableData = ref([
	{
		date: '2016-05-03',
		name: 'Tom',
		state: 'California',
		city: 'Los Angeles',
		address: 'No. 189, Grove St, Los Angeles',
		zip: 'CA 90036',
		tag: 'Home',
	},
	{
		date: '2016-05-02',
		name: 'Tom',
		state: 'California',
		city: 'Los Angeles',
		address: 'No. 189, Grove St, Los Angeles',
		zip: 'CA 90036',
		tag: 'Office',
	},
	{
		date: '2016-05-04',
		name: 'Tom',
		state: 'California',
		city: 'Los Angeles',
		address: 'No. 189, Grove St, Los Angeles',
		zip: 'CA 90036',
		tag: 'Home',
	},
	{
		date: '2016-05-01',
		name: 'Tom',
		state: 'California',
		city: 'Los Angeles',
		address: 'No. 189, Grove St, Los Angeles',
		zip: 'CA 90036',
		tag: 'Office',
	},
	{
		date: '2016-05-01',
		name: 'Tom',
		state: 'California',
		city: 'Los Angeles',
		address: 'No. 189, Grove St, Los Angeles',
		zip: 'CA 90036',
		tag: 'Office',
	},
	{
		date: '2016-05-01',
		name: 'Tom',
		state: 'California',
		city: 'Los Angeles',
		address: 'No. 189, Grove St, Los Angeles',
		zip: 'CA 90036',
		tag: 'Office',
	},
	{
		date: '2016-05-01',
		name: 'Tom',
		state: 'California',
		city: 'Los Angeles',
		address: 'No. 189, Grove St, Los Angeles',
		zip: 'CA 90036',
		tag: 'Office',
	},
	{
		date: '2016-05-01',
		name: 'Tom',
		state: 'California',
		city: 'Los Angeles',
		address: 'No. 189, Grove St, Los Angeles',
		zip: 'CA 90036',
		tag: 'Office',
	},
]);
const columnData = ref([
	{
		label: '时间',
		value: 'date',
	},
	{
		label: 'test',
		value: 'test',
		children: [
			{
				label: 'test1',
				value: 'test1',
			},
			{
				label: 'test2',
				value: 'test2',
			},
		],
	},
	{
		label: '资料',
		value: '',
		children: [
			{
				label: '姓名',
				value: 'name',
			},
			{
				label: '地址信息',
				value: '',
				children: [
					{
						label: '州',
						value: 'state',
					},
					{
						label: '城市',
						value: 'city',
					},
					{
						label: '地址',
						value: 'address',
					},
					{
						label: '邮编',
						value: 'zip',
					},
				],
			},
		],
	},
	{
		label: '标签',
		value: 'tag',
	},
]);

const exportExcel = () => {
	// 表头
	// let title: any = [];
	// let key: any = [];
	// title = columnData.value.map((item: any) => {
	// 	return item.label;
	// });
	// key = columnData.value.map((item: any) => {
	// 	return item.value;
	// });
	// // 文件名
	// let fileName = "导出文件";

	// const params = {
	// 	title,
	// 	key,
	// 	data: tableData.value,
	// 	autoWidth: true,
	// 	fileName,
	// };
	// exportArrayToExcel(params);

	const wb = XLSX.utils.table_to_book(document.getElementById('table-export'), {
		raw: true,
	});
	XLSX.writeFile(wb, 'test' + '.xlsx');
};

const exportStaticFile = () => {
	let a = document.createElement('a');
	let fileName = 'test';
	let fileType = '.xlsx';
	const { origin, pathname } = window.location;
	a.href = `${origin}${pathname}static/test.xlsx`;
	a.download = fileName + fileType;
	a.click();
};
</script>

<style scoped lang="scss"></style>
