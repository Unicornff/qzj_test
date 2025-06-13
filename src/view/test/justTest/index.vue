<template>
	<div class="full-size box-padding box-bg-color">
		<!-- 测试 v-size-ob 自定义指令 -->
		<div v-size-ob="sizeObserver" class="size-ob-class"></div>
		<!-- 宽度适应内容 -->
		<div class="width-fit-content">宽度适应内容</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const userInfoArray: any[] = [
	['name', '张三'],
	['age', 18],
	['sex', '男'],
];

const obj = {
	name: '张三',
	age: 18,
	sex: '男',
};

onMounted(() => {
	// 键值对数组转对象
	const userObject = Object.fromEntries(userInfoArray);
	console.log(userObject);

	// 对象操作
	const keys = Object.keys(obj);
	const values = Object.values(obj);
	const entries = Object.entries(obj);
	console.log(keys, 'keys——键');
	console.log(values, 'values——值');
	console.log(entries, 'entries——键值对');

	console.time('代码执行时间');
	for (let i = 0; i < 1000000; i++) {}
	console.timeEnd('代码执行时间');
	// 分组输出日志，方便整理调试信息
	console.group('重要逻辑');
	console.log('步骤1');
	console.log('步骤2');
	console.groupEnd();
});

const sizeObserver = (size: any) => {
	console.log(size);
};
</script>

<style scoped lang="scss">
.size-ob-class {
	width: 10%;
	height: 10%;
	background-color: red;
}
.width-fit-content {
	width: fit-content;
	height: auto;
	padding: 2px 5px;
	background-color: blue;
	color: #fff;
	display: inline-flex;
	align-items: center;
}
</style>
