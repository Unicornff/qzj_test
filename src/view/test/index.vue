<template>
	<div class="full-size box-padding box-bg-color">
		<div>{{ msg }}</div>
	</div>
</template>

<script setup lang="ts">
defineOptions({
	name: "",
});
import { ref } from "vue";

const msg = ref("test");
</script>

<style scoped lang="scss"></style>
