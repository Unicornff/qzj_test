<template>
	<div class="full-size"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import selfLog from './prettyLog';
import Utils from '@/utils/utils.ts';

onMounted(() => {
	selfLog.info('这是普通信息', '普通信息');
	selfLog.error('这是错误信息', '错误信息');
	selfLog.warning('这是警告信息', '警告信息');
	selfLog.success('这是成功信息', '成功信息');

	selfLog.info(Utils.getVariableType(1));
	selfLog.info(Utils.getVariableType(false));
	selfLog.info(Utils.getVariableType('1'));
	selfLog.info(Utils.getVariableType([1]));
	selfLog.info(Utils.getVariableType({}));
	selfLog.info(Utils.getVariableType(null));
	selfLog.info(Utils.getVariableType(undefined));
	selfLog.info(Utils.getVariableType(function () {}));
	let obj1 = {
		name: 'zhangsan',
		info: {
			age: 20,
		},
	};
	// let obj2 = {...obj1}; // 浅拷贝
	let obj2 = JSON.parse(JSON.stringify(obj1)); // 深拷贝
	selfLog.info(obj1.info.age);
	selfLog.info(obj2.info.age);
	obj2.info.age = 30;
	selfLog.info(obj1.info.age);
	selfLog.info(obj2.info.age);
});
</script>

<style scoped lang="scss"></style>
