import{P as Y}from"./prism-tomorrow-B9mlpXvP.js";import{U as t,a as B,n as N,k as v,o as s,c as n,h as a,i as r,w as h,v as S,F as y,b as _,e as E,g as u,r as c,x as P,q as l,t as p,y as j,_ as A}from"./index-DvHHLLkF.js";const F=""+new URL("img1-CjiyZke0.png",import.meta.url).href,$=""+new URL("img2-CY3v75Ft.png",import.meta.url).href,z=""+new URL("img3-C8qBPgRs.png",import.meta.url).href,O=""+new URL("img4-DhCc55sr.png",import.meta.url).href,W=`
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
`,Z=`
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
`,G=`
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
`,J=`
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
`,K=["https://juejin.cn/post/6898630134530752520?searchId=20241225134540153E161EBA9DF8ACB408"],Q=["一、典型的 session 登陆/验证流程："],X=["① 浏览器登录发送账号密码，服务端查用户库，校验用户","② 服务端把用户登录状态存为 Session，生成一个 sessionId","③ 通过登录接口返回，把 sessionId set 到 cookie 上","④ 此后浏览器再请求业务接口，sessionId 随 cookie 带上","⑤ 服务端查 sessionId 校验 session","⑥ 成功后正常做业务处理，返回结果"],ee=["二、token 流程："],te=["① 用户登录，服务端校验账号密码，获得用户信息","② 把用户信息、token 配置编码成 token，通过 cookie set 到浏览器","③ 此后用户请求业务接口，通过 cookie 携带 token","④ 接口校验 token 有效性，进行正常业务接口处理"],se=["refresh token 流程："],oe=[{noteId:t.getRandomUniqueId(),title:"解构赋值、map、filter、空值合并运算符（??）",date:"2024-12-10",data:[{dataId:t.getRandomUniqueId(),type:"ts",code:W}]},{noteId:t.getRandomUniqueId(),title:"虚拟列表",date:"2024-12-13",data:[{dataId:t.getRandomUniqueId(),type:"html",code:Z},{dataId:t.getRandomUniqueId(),type:"ts",code:G},{dataId:t.getRandomUniqueId(),type:"scss",code:J}]},{noteId:t.getRandomUniqueId(),title:"提交代码规范",date:"2024-12-16",data:[{dataId:t.getRandomUniqueId(),type:"img",img:F}]},{noteId:t.getRandomUniqueId(),title:"单点登录",date:"2024-12-25",data:[{dataId:t.getRandomUniqueId(),type:"text",text:K,class:["link-class","title-class"]},{dataId:t.getRandomUniqueId(),type:"text",text:Q,class:["title-class"]},{dataId:t.getRandomUniqueId(),type:"img",img:$},{dataId:t.getRandomUniqueId(),type:"text",text:X},{dataId:t.getRandomUniqueId(),type:"text",text:ee,class:["title-class"]},{dataId:t.getRandomUniqueId(),type:"img",img:z},{dataId:t.getRandomUniqueId(),type:"text",text:te},{dataId:t.getRandomUniqueId(),type:"text",text:se},{dataId:t.getRandomUniqueId(),type:"img",img:O}]}],ne={class:"main-container"},le={class:"filter-class"},ae={style:{margin:"0 0 0 auto"}},ie={class:"flex-row flex-between fullWidth"},de={class:"flex-row flex-center"},re={class:"flex-row flex-center"},ue={key:0,class:"line-numbers"},ce={key:0,class:"language-ts"},pe={key:1,class:"language-html"},me=["innerHTML"],ge={key:2,class:"language-scss"},ve={key:1,class:"text-class"},ye={key:0},fe={key:1},xe=["href"],Ie={key:2,class:"img-class"},he=["src"],_e=B({__name:"index",setup(ke){N(async()=>{await k()});const m=v(),U=()=>{m.value=[...oe].reverse()},g=v({title:"",date:""}),f=v(!1),x=v(null),k=()=>{try{U(),f.value=!0,setTimeout(()=>{m.value=m.value.filter(d=>d.title.includes(g.value.title||"")&&d.date.includes(g.value.date||"")),f.value=!1,Y.highlightAll()},500)}catch(d){console.log(d)}finally{x.value&&(x.value.scrollTop=0)}},q=d=>d.replace(/<[^>]*>/g,function(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")});return(d,e)=>{const w=c("el-input"),C=c("el-date-picker"),H=c("el-button"),D=c("Memo"),b=c("el-icon"),V=c("Calendar"),L=c("el-empty"),M=P("loading");return s(),n("div",ne,[a("div",le,[e[3]||(e[3]=a("label",null,"标题：",-1)),r(w,{modelValue:g.value.title,"onUpdate:modelValue":e[0]||(e[0]=i=>g.value.title=i),placeholder:"请输入关键字",clearable:"",style:{width:"230px"}},null,8,["modelValue"]),e[4]||(e[4]=a("label",null,"日期：",-1)),r(C,{modelValue:g.value.date,"onUpdate:modelValue":e[1]||(e[1]=i=>g.value.date=i),type:"date",placeholder:"请选择日期",editable:!1,clearable:"",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",style:{width:"230px"}},null,8,["modelValue"]),a("div",ae,[r(H,{type:"primary",onClick:k},{default:h(()=>e[2]||(e[2]=[l("查询")])),_:1})])]),S((s(),n("div",{class:"code-class",ref_key:"codeRef",ref:x},[(s(!0),n(y,null,_(m.value,i=>(s(),n("div",{key:i.noteId},[a("h3",ie,[a("span",de,[r(b,null,{default:h(()=>[r(D)]),_:1}),l(" "+p(i.title||"------"),1)]),a("span",re,[r(b,null,{default:h(()=>[r(V)]),_:1}),l(" "+p(i.date||"------"),1)])]),(s(!0),n(y,null,_(i.data,o=>(s(),n(y,{key:o.dataId},[o.type!=="img"&&o.type!=="text"?(s(),n("pre",ue,[e[11]||(e[11]=l("                        ")),a("h4",null,p(o.type),1),e[12]||(e[12]=l(`
                        `)),o.type==="ts"?(s(),n("code",ce,[e[5]||(e[5]=l(`
                            `)),a("div",null,p(o.code),1),e[6]||(e[6]=l(`
                        `))])):u("",!0),e[13]||(e[13]=l(`
                        `)),o.type==="html"?(s(),n("code",pe,[e[7]||(e[7]=l(`
                            `)),a("div",{innerHTML:q(o.code)},null,8,me),e[8]||(e[8]=l(`
                        `))])):u("",!0),e[14]||(e[14]=l(`
                        `)),o.type==="scss"?(s(),n("code",ge,[e[9]||(e[9]=l(`
                            `)),a("div",null,p(o.code),1),e[10]||(e[10]=l(`
                        `))])):u("",!0),e[15]||(e[15]=l(`
                    `))])):u("",!0),o.type==="text"?(s(),n("div",ve,[(s(!0),n(y,null,_(o.text,(I,T)=>{var R;return s(),n("p",{key:T,class:j(o.class)},[(R=o.class)!=null&&R.includes("link-class")?(s(),n("span",fe,[e[16]||(e[16]=l("参考链接：")),a("a",{href:I,target:"_blank"},p(I),9,xe)])):(s(),n("span",ye,p(I),1))],2)}),128))])):u("",!0),o.type==="img"?(s(),n("div",Ie,[a("img",{src:o.img,alt:""},null,8,he)])):u("",!0)],64))),128)),e[17]||(e[17]=a("br",null,null,-1))]))),128)),m.value&&m.value.length===0?(s(),E(L,{key:0,description:"暂无数据"})):u("",!0)])),[[M,f.value]])])}}}),Ue=A(_e,[["__scopeId","data-v-44c61d58"]]);export{Ue as default};
