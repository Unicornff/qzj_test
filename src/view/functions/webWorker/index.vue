<template>
	<div class="full-size box-bg-color box-padding">
		WebWorker是浏览器提供的一个多线程技术，允许JavaScript在后台线程中运行，不阻塞主线程。（JavaScript是单线程的，所以如果耗时任务长时间占用，页面会完全卡死）
		<br />
		适用场景：大数据量计算、大文件读写与处理等等
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// 下面是不使用webWorker的代码(页面直接卡死)
// const sum = (n: number) => {
// 	let result = 0;
// 	for (let i = 0; i < n; i++) {
// 		for(let j = 0; j < n; j++) {
// 			result += i;
// 		}
// 	}
// 	return result;
// };

// onMounted(() => {
// 	console.log(sum(100000));
// });

// 下面是使用webWorker的代码(不会阻塞页面,但是计算速度依旧是相同的)
onMounted(() => {
	const worker = new Worker(new URL('./worker.ts', import.meta.url));

	worker.postMessage(100000);
	worker.onmessage = (e) => {
		console.log(e.data);
		console.log(Date.now());
	};
});
</script>

<style scoped lang="scss"></style>
