<template>
	<div class="main-container"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import selfLog from "./prettyLog";

onMounted(() => {
	selfLog.info("这是普通信息", "普通信息");
	selfLog.error("这是错误信息", "错误信息");
	selfLog.warning("这是警告信息", "警告信息");
	selfLog.success("这是成功信息", "成功信息");
});
</script>

<style scoped lang="scss"></style>
