<template>
	<div class="main-container box-padding box-bg-color">
		<el-link type="primary" :underline="false" href="https://github.com/javaLuo/vue-puzzle-vcode/tree/vue3"
			target="_blank">
			Vcode (图形验证) 文档链接
		</el-link>

		<div class="vcode-class">
			<Vcode :show="isShow" type="inside" @success="onSuccess" @fail="onFail" />
		</div>
	</div>
</template>

<script setup lang="ts">
defineOptions({
	name: "ImageVerify"
});
import { ref } from "vue";
import Vcode from "vue3-puzzle-vcode";

const isShow = ref(true);

const onFail = () => {
	console.log("验证失败");
};

const onSuccess = () => {
	console.log("验证成功");
};
</script>

<style scoped lang="scss">
.vcode-class {
	margin-top: 20px;
}
</style>
