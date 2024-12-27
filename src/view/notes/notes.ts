import Utils from '@/utils/utils'
import img1 from '@/assets/notes/img1.png'
import img2 from '@/assets/notes/img2.png'
import img3 from '@/assets/notes/img3.png'
import img4 from '@/assets/notes/img4.png'

const code1_ts = `
// 解构赋值数组
const [a, b] = [1, 2, 3, 4];
console.log(a, b); // 输出：1 2

// 解构赋值对象
const person: any = {
    name: '张三',
    age: 18,
    sex: '男'
}
const { name, age, sex } = person
console.log(name, age, sex); // 输出：张三 18 男

const numbers = [1, 2, 3, 4, 5];

// map方法用来变换数组
const doubleResult = numbers.map((item) => item * 2);
console.log(doubleResult); // 输出：[2, 4, 6, 8, 10]

// filter方法用来过滤数组
const evenResult = numbers.filter((item) => item % 2 === 0);
console.log(evenResult); // 输出：[2, 4]

// 空值合并运算符 (??)
const value = null;
const result1 = value !== null && value !== undefined ? value : '默认值' //传统写法
console.log(result1); // 输出：默认值
const result2 = value ?? '默认值'
console.log(result2); // 输出：默认值
`
const code2_html = `
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
`
const code2_ts = `
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
`
const code2_scss = `
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
`
const text1 = ['https://juejin.cn/post/6898630134530752520?searchId=20241225134540153E161EBA9DF8ACB408']
const text2 = ['一、典型的 session 登陆/验证流程：']
const text3 = ['① 浏览器登录发送账号密码，服务端查用户库，校验用户',
	'② 服务端把用户登录状态存为 Session，生成一个 sessionId',
	'③ 通过登录接口返回，把 sessionId set 到 cookie 上',
	'④ 此后浏览器再请求业务接口，sessionId 随 cookie 带上',
	'⑤ 服务端查 sessionId 校验 session',
	'⑥ 成功后正常做业务处理，返回结果']
const text4 = ['二、token 流程：']
const text5 = ['① 用户登录，服务端校验账号密码，获得用户信息',
	'② 把用户信息、token 配置编码成 token，通过 cookie set 到浏览器',
	'③ 此后用户请求业务接口，通过 cookie 携带 token',
	'④ 接口校验 token 有效性，进行正常业务接口处理']
const text6 = ['refresh token 流程：']


const notes: any = [
	{
		noteId: Utils.getRandomUniqueId(),
		title: '解构赋值、map、filter、空值合并运算符（??）',
		date: "2024-12-10",
		data: [
			{
				dataId: Utils.getRandomUniqueId(),
				type: 'ts',
				code: code1_ts,
			},
		]
	},
	{
		noteId: Utils.getRandomUniqueId(),
		title: '虚拟列表',
		date: "2024-12-13",
		data: [
			{
				dataId: Utils.getRandomUniqueId(),
				type: 'html',
				code: code2_html,
			},
			{
				dataId: Utils.getRandomUniqueId(),
				type: 'ts',
				code: code2_ts,
			},
			{
				dataId: Utils.getRandomUniqueId(),
				type: 'scss',
				code: code2_scss,
			},
		]
	},
	{
		noteId: Utils.getRandomUniqueId(),
		title: '提交代码规范',
		date: "2024-12-16",
		data: [
			{
				dataId: Utils.getRandomUniqueId(),
				type: 'img',
				img: img1
			},
		]
	},
	{
		noteId: Utils.getRandomUniqueId(),
		title: '单点登录',
		date: "2024-12-25",
		data: [
			{
				dataId: Utils.getRandomUniqueId(),
				type: 'text',
				text: text1,
				class: ['link-class', 'title-class']
			},
			{
				dataId: Utils.getRandomUniqueId(),
				type: 'text',
				text: text2,
				class: ['title-class']
			},
			{
				dataId: Utils.getRandomUniqueId(),
				type: 'img',
				img: img2,
			},
			{
				dataId: Utils.getRandomUniqueId(),
				type: 'text',
				text: text3,
			},
			{
				dataId: Utils.getRandomUniqueId(),
				type: 'text',
				text: text4,
				class: ['title-class']
			},
			{
				dataId: Utils.getRandomUniqueId(),
				type: 'img',
				img: img3,
			},
			{
				dataId: Utils.getRandomUniqueId(),
				type: 'text',
				text: text5,
			},
			{
				dataId: Utils.getRandomUniqueId(),
				type: 'text',
				text: text6,
			},
			{
				dataId: Utils.getRandomUniqueId(),
				type: 'img',
				img: img4,
			},
		]
	},
	// {
	// 	noteId: Utils.getRandomUniqueId(),
	// 	title: '',
	// 	date: "2024-12-26",
	// 	data: [
	// 		{
	// 			dataId: Utils.getRandomUniqueId(),
	// 			type: 'img',
	// 			img: img1
	// 		},
	// 	]
	// },
]

export default notes