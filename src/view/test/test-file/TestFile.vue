<template>
	<div class="main-container">
		<div class="operate-btn">
			<el-button type="primary" size="default" @click="editFile">编辑文件</el-button>
			<el-button type="primary" size="default" @click="saveFile">保存文件</el-button>
		</div>
		<div class="file-content">
			<el-input v-model="fileContent" type="textarea" :rows="20" clearable></el-input>
		</div>
	</div>
</template>

<script setup lang="ts">
// 此读取文件并保存替换文件的方法只能在https和localhost环境下使用
import { ref, Ref } from "vue";

const fileContent: Ref<string> = ref("");

// 编辑文件
const editFile = async () => {
	const options = {
		types: [
			{
				description: "默认类型为.txt",
				accept: { "text/plain": [".txt"] },
			},
		],
	};
	const [fileHandle] = await (window as any).showOpenFilePicker(options);
	fileHandle.getFile().then((blob: any) => {
		blob.text().then((fileData: any) => {
			fileContent.value = fileData;
		});
	});
};

// 保存文件
const saveFile = async () => {
	const options = {
		suggestedName: "测试文件",
		types: [
			{
				description: "默认类型为.txt",
				accept: { "text/plain": [".txt"] },
			},
		],
	};
	const fileHandle = await (window as any).showSaveFilePicker(options);
	const writable = await fileHandle.createWritable();
	await writable.write(fileContent.value);
	await writable.close();
	fileContent.value = "";
};
</script>

<style scoped lang="scss">
.main-container {
	.operate-btn {
		width: 100%;
		display: inline-flex;
		justify-content: center;
	}
	.file-content {
		margin-top: 10px;
	}
}
</style>
