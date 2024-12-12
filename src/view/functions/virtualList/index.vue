<template>
	<div class="main-container box-padding">
		<VirtualList :data="listData">
			<template #item="{ item, index }">
				<div style="display: flex; align-items: center">
					<strong>{{ index + 1 }}</strong
					>. {{ item.text }}
				</div>
			</template>
		</VirtualList>

		<div class="code-class">
			<h2>虚拟列表关键代码</h2>
			<br />
			<h3>html</h3>
			<pre class="line-numbers">
                <code class="language-html">
                    <div v-html="escapeHtmlTags(htmlCode)"></div>
                </code>
            </pre>
			<h3>ts</h3>
			<pre class="line-numbers">
                <code class="language-ts">
                    <div>{{ tsCode }}</div>
                </code>
            </pre>
			<h3>scss</h3>
			<pre class="line-numbers">
                <code class="language-scss">
                    {{ scssCode }}
                </code>
            </pre>
		</div>
	</div>
</template>

<script setup lang="ts">
import VirtualList from "./VirtualList.vue";
import Prism from "prismjs";
import { onMounted, ref } from "vue";

const listData = Array.from({ length: 100000 }, (_, i) => ({ id: i, text: `Item ${i + 1}` }));

onMounted(() => {
	Prism.highlightAll();
});

const escapeHtmlTags = (html: any) => {
	// 使用正则表达式匹配 HTML 标签并将其转义
	return html.replace(/<[^>]*>/g, function (match: any) {
		return match.replace(/</g, "&lt;").replace(/>/g, "&gt;");
	});
};

const htmlCode = ref(`
/* 父组件 */
<VirtualList :data="listData">
    <template #item="{ item, index }">
        <div style="display: flex; align-items: center">
            <strong>{{ index + 1 }}</strong
            >. {{ item.text }}
        </div>
    </template>
</VirtualList>

/* 子组件 */
<template>
	<div class="virtual-list" :style="{ height: \`\${containerHeight}px\`, overflowY: 'auto' }" @scroll="handleScroll">
		<div :style="{ height: \`\${totalHeight}px\`, position: 'relative' }">
			<div
				v-for="(item, index) in visibleData"
				:key="item.id"
				:style="getItemStyle(index)"
				class="virtual-list-item"
			>
				<slot name="item" :item="item" :index="startIndex + index"> </slot>
			</div>
		</div>
		<el-empty description="无数据" v-if="!data.length" />
	</div>
</template>
`);

const tsCode = ref(`
/* 子组件 */
defineOptions({
	name: "VirtualList",
});
import { ref, computed } from "vue";
import Utils from "@/utils/utils.ts";

const props = defineProps({
	data: {
		type: Array,
		required: true,
	},
	itemHeight: {
		type: Number,
		default: 50, // 每个列表项的高度
	},
	containerHeight: {
		type: Number,
		default: 500, // 容器的可见高度
	},
});

const scrollTop = ref(0); // 滚动条距离顶部的偏移量
const visibleCount = computed(() => Math.ceil(props.containerHeight / props.itemHeight)); // 可见的列表项数量
const startIndex = computed(() => Math.floor(scrollTop.value / props.itemHeight)); // 当前滚动位置的起始索引
const endIndex = computed(() => startIndex.value + visibleCount.value); // 当前滚动位置的结束索引

// 可见的数据片段
const visibleData: any = computed(() => props.data.slice(startIndex.value, endIndex.value));

// 总高度
const totalHeight = computed(() => props.data.length * props.itemHeight);

const handleScroll = Utils.lodashThrottle((e: Event) => {
	scrollTop.value = (e.target as HTMLElement).scrollTop;
}, 30);

// 计算每个可见项目的样式（主要用于控制其绝对定位位置）
const getItemStyle = (index: number) => {
	const top = (startIndex.value + index) * props.itemHeight;
	return {
		position: "absolute",
		top: \`\${top}px\`,
		width: "100%",
		height: \`\${props.itemHeight}px\`,
	} as any;
};

`);

const scssCode = ref(`
/* 子组件 */
.virtual-list {
	border: 1px solid #ccc;
	position: relative;
}

.virtual-list-item {
	border: 1px solid #eee;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f9f9f9;
	cursor: pointer;
	box-sizing: border-box;
	&:hover {
		background-color: #2546ff;
		color: #fff;
	}
}

::v-deep(.el-empty) {
	padding: 0;
	width: 100%;
	height: 100%;
}
`);
</script>

<style scoped lang="scss"></style>
