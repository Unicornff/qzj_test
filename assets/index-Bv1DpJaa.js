import{a as T,k as g,A as r,U as $,o as a,c as v,h as e,F as L,b as S,C as b,e as V,g as k,p as H,r as M,D as N,_ as w,n as D,i as _,w as A,q as s,t as c}from"./index-CH_O8Qgo.js";import{P as B}from"./prism-tomorrow-BG0NaqMo.js";const U=T({name:"VirtualList",__name:"VirtualList",props:{data:{type:Array,required:!0},itemHeight:{type:Number,default:50},containerHeight:{type:Number,default:500}},setup(d){const i=d,p=g(0),h=r(()=>Math.ceil(i.containerHeight/i.itemHeight)),o=r(()=>Math.floor(p.value/i.itemHeight)),x=r(()=>o.value+h.value),l=r(()=>i.data.slice(o.value,x.value)),t=r(()=>i.data.length*i.itemHeight),u=$.lodashThrottle(n=>{p.value=n.target.scrollTop},30),f=n=>({position:"absolute",top:`${(o.value+n)*i.itemHeight}px`,width:"100%",height:`${i.itemHeight}px`});return(n,y)=>{const C=M("el-empty");return a(),v("div",{class:"virtual-list",style:b({height:`${d.containerHeight}px`,overflowY:"auto"}),onScroll:y[0]||(y[0]=(...m)=>H(u)&&H(u)(...m))},[e("div",{style:b({height:`${t.value}px`,position:"relative"})},[(a(!0),v(L,null,S(l.value,(m,I)=>(a(),v("div",{key:m.id,style:b(f(I)),class:"virtual-list-item"},[N(n.$slots,"item",{item:m,index:o.value+I},void 0,!0)],4))),128))],4),d.data.length?k("",!0):(a(),V(C,{key:0,description:"无数据"}))],36)}}}),q=w(U,[["__scopeId","data-v-4536d96a"]]),E={class:"main-container box-padding"},P={style:{display:"flex","align-items":"center"}},z={class:"code-class"},F={class:"line-numbers"},Y={class:"language-html"},j=["innerHTML"],O={class:"line-numbers"},G={class:"language-ts"},J={class:"line-numbers"},K={class:"language-scss"},W=T({__name:"index",setup(d){const i=Array.from({length:1e5},(l,t)=>({id:t,text:`Item ${t+1}`}));D(()=>{B.highlightAll()});const p=l=>l.replace(/<[^>]*>/g,function(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;")}),h=g(`
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
`),o=g(`
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

`),x=g(`
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
`);return(l,t)=>(a(),v("div",E,[_(q,{data:H(i)},{item:A(({item:u,index:f})=>[e("div",P,[e("strong",null,c(f+1),1),s(". "+c(u.text),1)])]),_:1},8,["data"]),e("div",z,[t[10]||(t[10]=e("h2",null,"虚拟列表关键代码",-1)),t[11]||(t[11]=e("br",null,null,-1)),t[12]||(t[12]=e("h3",null,"html",-1)),e("pre",F,[t[2]||(t[2]=s("                ")),e("code",Y,[t[0]||(t[0]=s(`
                    `)),e("div",{innerHTML:p(h.value)},null,8,j),t[1]||(t[1]=s(`
                `))]),t[3]||(t[3]=s(`
            `))]),t[13]||(t[13]=e("h3",null,"ts",-1)),e("pre",O,[t[6]||(t[6]=s("                ")),e("code",G,[t[4]||(t[4]=s(`
                    `)),e("div",null,c(o.value),1),t[5]||(t[5]=s(`
                `))]),t[7]||(t[7]=s(`
            `))]),t[14]||(t[14]=e("h3",null,"scss",-1)),e("pre",J,[t[8]||(t[8]=s("                ")),e("code",K,`
                    `+c(x.value)+`
                `,1),t[9]||(t[9]=s(`
            `))])])]))}});export{W as default};
