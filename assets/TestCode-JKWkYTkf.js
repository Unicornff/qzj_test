import{P as l}from"./prism-tomorrow-DULZKHYe.js";import{a as i,k as p,n as a,o as m,c as d,h as n,q as o}from"./index-tOJRS_5n.js";const u={class:"code-class"},g={class:"line-numbers"},f={class:"language-html"},j=["innerHTML"],M=i({__name:"TestCode",setup(v){const r=p(`
<div>Example</div>
<div>Hello</div>
`);a(()=>{l.highlightAll()});const e=t=>t.replace(/<[^>]*>/g,function(s){return s.replace(/</g,"&lt;").replace(/>/g,"&gt;")});return(t,s)=>(m(),d("div",u,[s[4]||(s[4]=n("h2",null,"页面代码区（使用prismjs）",-1)),s[5]||(s[5]=n("br",null,null,-1)),s[6]||(s[6]=n("h3",null,"html",-1)),n("pre",g,[s[2]||(s[2]=o("			")),n("code",f,[s[0]||(s[0]=o(`
				`)),n("div",{innerHTML:e(r.value)},null,8,j),s[1]||(s[1]=o(`
			`))]),s[3]||(s[3]=o(`
		`))]),s[7]||(s[7]=n("h3",null,"ts",-1)),s[8]||(s[8]=n("pre",{class:"line-numbers"},[o("			"),n("code",{class:"language-ts","data-prismjs-copy":"复制","data-prismjs-copy-error":"复制失败","data-prismjs-copy-success":"复制成功"},`
				import { onMounted } from "vue";
				import Prism from "prismjs";

				/*
				code标签上可以绑定下面的属性来改变toolbar的复制文字
				data-prismjs-copy="复制"
				data-prismjs-copy-error="复制失败"
				data-prismjs-copy-success="复制成功"
				*/
				onMounted(() => {
					Prism.highlightAll();
				});
			`),o(`
		`)],-1))]))}});export{M as default};
