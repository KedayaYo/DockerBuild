import"./index.9fa6ecce.js";/* empty css               *//* empty css               *//* empty css              */import{d as m,f as i,aG as x,C as v,D as F,aJ as o,aI as t,aN as r,G as a,aO as g,bT as C,bU as y,be as B}from"./arco.35cd4a57.js";import{e as E}from"./edge.device.62da2f45.js";import"./chart.c690dcf1.js";import"./vue.1515c820.js";const h={class:"container h-full"},w={class:"edge-details-container"},D=a("span",null,"\u7F16\u53F7\uFF1A",-1),j=m({__name:"Details",props:{id:{type:String,default:""}},setup(d){const n=i(d.id),c=i(),p=async e=>{const s=await E.findOneEdgeByID(e);c.value=s.data};return(async()=>{var e;await p(n.value),console.log((e=c.value)==null?void 0:e.EName)})(),(e,s)=>{const l=C,u=x("icon-close"),_=y,f=B;return v(),F("div",h,[o(f,{class:"w-full h-full"},{title:t(()=>[o(_,{flex:""},{default:t(()=>[o(l,{flex:"1"},{default:t(()=>[r(" \u8FB9\u7F18\u7F51\u5173\u8BE6\u7EC6\u4FE1\u606F ")]),_:1}),o(l,{flex:"100px",class:"flex items-center justify-end"},{default:t(()=>[o(u,{class:"cursor-pointer p-1 box-content hover:text-red-500",onClick:s[0]||(s[0]=k=>e.$router.go(-1))})]),_:1})]),_:1})]),default:t(()=>[a("div",w,[a("p",null,[D,r(" "+g(n.value),1)])])]),_:1})])}}});export{j as default};