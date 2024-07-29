<template>
	<div class="main-container"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import log from "./prettyLog";

onMounted(() => {
	log.info("这是普通信息", "普通信息");
	log.error("这是错误信息", "错误信息");
	log.warning("这是警告信息", "警告信息");
	log.success("这是成功信息", "成功信息");
});
</script>

<style scoped lang="scss"></style>
