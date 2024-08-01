<template>
	<div class="main-container box-padding box-bg-color">
		<el-button type="primary" @click="exportExcel">导出文件</el-button>
		<el-table :data="tableData" border stripe style="margin-top: 10px">
			<el-table-column v-for="(col, index) in columnData" :prop="col.value" :label="col.label" :key="index">
			</el-table-column>
		</el-table>
	</div>
</template>

<script setup lang="ts">
defineOptions({
	name: "ExportExcel"
});
import { ref } from "vue";
import exportArrayToExcel from "./exportExcel";

const tableData = ref([
	{
		date: "2016-05-03",
		name: "Tom",
		state: "California",
		city: "Los Angeles",
		address: "No. 189, Grove St, Los Angeles",
		zip: "CA 90036",
		tag: "Home",
	},
	{
		date: "2016-05-02",
		name: "Tom",
		state: "California",
		city: "Los Angeles",
		address: "No. 189, Grove St, Los Angeles",
		zip: "CA 90036",
		tag: "Office",
	},
	{
		date: "2016-05-04",
		name: "Tom",
		state: "California",
		city: "Los Angeles",
		address: "No. 189, Grove St, Los Angeles",
		zip: "CA 90036",
		tag: "Home",
	},
	{
		date: "2016-05-01",
		name: "Tom",
		state: "California",
		city: "Los Angeles",
		address: "No. 189, Grove St, Los Angeles",
		zip: "CA 90036",
		tag: "Office",
	},
	{
		date: "2016-05-01",
		name: "Tom",
		state: "California",
		city: "Los Angeles",
		address: "No. 189, Grove St, Los Angeles",
		zip: "CA 90036",
		tag: "Office",
	},
	{
		date: "2016-05-01",
		name: "Tom",
		state: "California",
		city: "Los Angeles",
		address: "No. 189, Grove St, Los Angeles",
		zip: "CA 90036",
		tag: "Office",
	},
	{
		date: "2016-05-01",
		name: "Tom",
		state: "California",
		city: "Los Angeles",
		address: "No. 189, Grove St, Los Angeles",
		zip: "CA 90036",
		tag: "Office",
	},
	{
		date: "2016-05-01",
		name: "Tom",
		state: "California",
		city: "Los Angeles",
		address: "No. 189, Grove St, Los Angeles",
		zip: "CA 90036",
		tag: "Office",
	},
]);
const columnData = ref([
	{
		label: "时间",
		value: "date",
	},
	{
		label: "姓名",
		value: "name",
	},
	{
		label: "州",
		value: "state",
	},
	{
		label: "城市",
		value: "city",
	},
	{
		label: "地址",
		value: "address",
	},
	{
		label: "邮编",
		value: "zip",
	},
	{
		label: "标签",
		value: "tag",
	},
]);

const exportExcel = () => {
	// 表头
	let title: any = [];
	let key: any = [];
	title = columnData.value.map((item: any) => {
		return item.label;
	});
	key = columnData.value.map((item: any) => {
		return item.value;
	});
	// 文件名
	let fileName = "导出文件";

	const params = {
		title,
		key,
		data: tableData.value,
		autoWidth: true,
		fileName,
	};
	exportArrayToExcel(params);
};
</script>

<style scoped lang="scss"></style>
