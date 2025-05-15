<template>
	<div class="full-size box-padding box-bg-color">
		<VirtualList :data="listData">
			<template #item="{ item, index }">
				<div class="list-item">
					<div class="item-index">{{ index + 1 }}.</div>
					<div class="item-text">{{ item.text }}</div>
				</div>
			</template>
		</VirtualList>
	</div>
</template>

<script setup lang="ts">
import VirtualList from './VirtualList.vue';

const listData = Array.from({ length: 500 }, (_, i) => ({ id: i, text: `Item ${i + 1}` }));
</script>

<style scoped lang="scss">
.list-item {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	border-radius: 8px;
	cursor: pointer;
	&:hover {
		background-color: #2546ff;
		color: #fff;
	}

	.item-index {
		margin-right: 10px;
		font-weight: bold;
	}
	.item-text {
		font-style: italic;
	}
}

::v-deep(.virtual-list) {
	border-color: #f1f1f1;
	.virtual-list-item {
		border-color: #f1f1f1;
	}
}
</style>
