import{S as z,P as y,W as j,O as R,c as u,T as h,d as p,a as _}from"./OrbitControls-BkIo_RYE.js";import{a as b,k as B,n as C,H as D,o as E,c as P,h as w,_ as S}from"./index-CZgHeNru.js";const W="/qzj_test/assets/earth-DjYqMKyF.jpeg",k="/qzj_test/assets/moon-D4pY2e7s.jpeg",q={class:"main-container flex-box flex-column"},F={class:"bottom"},H=b({__name:"index",setup(L){const e=B(null);let i=null,n=null,t=null,r=null,o=null,l=null,c;C(()=>{v(),window.addEventListener("resize",m)}),D(()=>{window.removeEventListener("resize",m),c&&cancelAnimationFrame(c),t&&t.dispose()});const v=()=>{if(e.value){i=new z,n=new y(75,e.value.clientWidth/e.value.clientHeight,.1,1e3),t=new j({antialias:!0}),t.setPixelRatio(window.devicePixelRatio),t.setSize(e.value.clientWidth,e.value.clientHeight),e.value.appendChild(t.domElement),l=new R(n,t.domElement),l.enableDamping=!0;const a=new u(8),s=new u(2),f=new h().load(W),x=new h().load(k),M=new p({map:f}),g=new p({map:x});r=new _(a,M),o=new _(s,g),o.position.x=15,i.add(r,o),n.position.set(0,0,20),d()}},d=()=>{l.update(),r.rotation.y+=.01,o.position.x=Math.cos(1*Date.now()/1e3)*15,o.position.z=Math.sin(1*Date.now()/1e3)*15,o.rotation.y+=.03,c=requestAnimationFrame(d),t.render(i,n)},m=()=>{if(e.value&&t&&n){const a=e.value.clientWidth,s=e.value.clientHeight;t.setSize(a,s),n.aspect=a/s,n.updateProjectionMatrix()}};return(a,s)=>(E(),P("div",q,[w("div",F,[w("div",{class:"three-content",ref_key:"earthMoonRef",ref:e},null,512)])]))}}),G=S(H,[["__scopeId","data-v-d5d1e967"]]);export{G as default};
