import{_ as P}from"./index.9fa6ecce.js";/* empty css              *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css                *//* empty css               *//* empty css                *//* empty css               */import{f as m,aJ as e,b9 as K,bW as z,aZ as k,aS as B,aG as y,aN as E,bS as M,aL as F,C as g,D as w,G as T,aI as o,aO as G,aK as N,aE as O,aF as q,b5 as R,bT as J,bU as W,bG as Z,be as j,b6 as H,bN as Q,bO as X,bI as Y,bb as h,b2 as $}from"./arco.35cd4a57.js";import{e as b}from"./edge.device.62da2f45.js";import{f as S,E as L,a as ee}from"./index.571baf06.js";import{g as le}from"./vue.1515c820.js";import"./chart.c690dcf1.js";const ae={setup(){const U=le(),t=m(""),D=m(!1),l=m(!1),v=m(null),A=m(S(L,["0","\u672A\u77E5"])),s=m(S(ee)),c=m({current:1,pageSize:20,total:0}),f=m({ECID:"",EName:"",brand:"",model:"",mac:"",ipAddr:"",system:"",password:"",deviceType:1,context:"",state:""}),d=m([]),p=async({pageSize:n=20,current:i=1}={})=>{console.log(t.value);const r=await b.get({page:i,size:n,ECID:t.value});console.log(r);const{data:{list:_,total:a}}=r;d.value=_,c.value.total=a||c.value.total},C=n=>{c.value.current=n,p(c.value)},I=[{title:"\u7F16\u53F7",dataIndex:"ECID",ellipsis:!0,tooltip:!0,render:({record:n})=>e(K,{onClick:()=>U.push({path:`edge-device-details/${n.ECID}`})},{default:()=>[n.ECID]})},{title:"\u540D\u79F0",dataIndex:"EName"},{title:"\u63A7\u5236\u8BBE\u5907\u7C7B\u578B",align:"center",dataIndex:"deviceType",render({record:n}){return e(z,{color:n.deviceType===0?"red":"green"},{default:()=>[L[n.deviceType]]})}},{title:"\u6700\u540E\u4E00\u6B21\u5728\u7EBF\u65F6\u95F4",align:"center",dataIndex:"lastOnlineTime"},{title:"\u6700\u540E\u4E00\u6B21\u767B\u5F55\u65F6\u95F4",align:"center",dataIndex:"lastLoginTime"},{title:"\u521B\u5EFA\u65F6\u95F4",align:"center",dataIndex:"createTime"},{title:"\u64CD\u4F5C",align:"center",width:220,dataIndex:"operation",render({record:n}){return e(F,null,[e(k,{class:"mr-2",type:"primary",size:"small",onClick:async()=>{const{code:i,data:r,reason:_}=await b.findOneEdgeByID(n.ECID);i!==0&&B.error(_),f.value=r,l.value=!0,D.value=!0}},{default:()=>[e("span",{class:"arco-btn-icon"},[e(y("icon-edit"),null,null)]),E("\u7F16\u8F91")]}),e(M,{content:"\u786E\u8BA4\u5220\u9664\u6B64\u8FB9\u7F18\u7F51\u5173\uFF1F",type:"warning",onBeforeOk:async()=>{const{code:i,reason:r}=await b.deleteEdgeByID(n.ECID);i!==0?B.error(r):p()}},{default:()=>[e(k,{status:"danger",size:"small"},{default:()=>[e("span",{class:"arco-btn-icon"},[e(y("icon-delete"),null,null)]),E("\u5220\u9664")]})]})])}}],x=async()=>(console.log(1),!1),u=async()=>{l.value=!1,await v.value.resetFields()},V=async()=>{const n=await v.value.validate();if(n)return console.log(n),!1;const{code:i,reason:r}=l.value?await b.updateEdgeInformation(f.value):await b.insert(f.value);if(i!==0)return B.success(r),!1;p();const _=await v.value.resetFields();return console.log(_),B.success("\u8BF7\u6C42\u6210\u529F"),!0};return p(),{columns:I,source:d,model:f,ECID:t,visible:D,isEdit:l,edgeDeviceOptions:A,edgeDeviceStatuOptions:s,refEdgeModel:v,pagination:c,fetchEdgeList:p,handleBeforeOK:V,handleOK:x,handleCancel:u,onChangeCurrentPage:C}}},oe={class:"container h-full w-full"},te=T("span",{class:"text-1xl"},"\u8FB9\u7F18\u7F51\u5173",-1),ne={class:"mb-5"};function de(U,t,D,l,v,A){const s=R,c=y("icon-search"),f=k,d=J,p=y("icon-plus-circle"),C=W,I=Z,x=j,u=H,V=Q,n=X,i=Y,r=h,_=$;return g(),w(F,null,[T("div",oe,[e(x,{class:"w-full"},{title:o(()=>[te]),default:o(()=>[T("div",ne,[e(C,null,{default:o(()=>[e(d,{flex:"auto"},{default:o(()=>[e(s,{modelValue:l.ECID,"onUpdate:modelValue":t[0]||(t[0]=a=>l.ECID=a),class:"w-72",placeholder:"\u8BF7\u8F93\u5165ECID","allow-clear":""},null,8,["modelValue"]),e(f,{class:"ml-4",type:"primary",onClick:t[1]||(t[1]=a=>l.fetchEdgeList(l.pagination))},{icon:o(()=>[e(c)]),default:o(()=>[E(" \u67E5\u8BE2 ")]),_:1})]),_:1}),e(d,{flex:"100px",class:"text-right"},{default:o(()=>[e(f,{type:"primary",onClick:t[2]||(t[2]=a=>l.visible=!0)},{icon:o(()=>[e(p)]),default:o(()=>[E(" \u65B0\u589E ")]),_:1})]),_:1})]),_:1})]),e(I,{bordered:{wrapper:!0,cell:!0},columns:l.columns,data:l.source,pagination:l.pagination,onPageChange:l.onChangeCurrentPage},null,8,["columns","data","pagination","onPageChange"])]),_:1})]),e(_,{visible:l.visible,"onUpdate:visible":t[14]||(t[14]=a=>l.visible=a),"title-align":"start",width:800,"on-before-ok":l.handleBeforeOK,onOk:l.handleOK,onCancel:l.handleCancel},{title:o(()=>[E(G(`${l.isEdit?"\u4FEE\u6539":"\u65B0\u589E"}\u8FB9\u7F18\u7F51\u5173`),1)]),default:o(()=>[e(r,{ref:"refEdgeModel",model:l.model,layout:"vertical"},{default:o(()=>[e(C,{gutter:20},{default:o(()=>[e(d,{span:12},{default:o(()=>[e(u,{label:"\u7F16\u53F7",field:"ECID"},{default:o(()=>[e(s,{modelValue:l.model.ECID,"onUpdate:modelValue":t[3]||(t[3]=a=>l.model.ECID=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:o(()=>[e(u,{label:"\u540D\u79F0",field:"EName"},{default:o(()=>[e(s,{modelValue:l.model.EName,"onUpdate:modelValue":t[4]||(t[4]=a=>l.model.EName=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:o(()=>[e(u,{label:"\u751F\u4EA7\u5546",field:"brand"},{default:o(()=>[e(s,{modelValue:l.model.brand,"onUpdate:modelValue":t[5]||(t[5]=a=>l.model.brand=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:o(()=>[e(u,{label:"\u578B\u53F7",field:"model"},{default:o(()=>[e(s,{modelValue:l.model.model,"onUpdate:modelValue":t[6]||(t[6]=a=>l.model.model=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:o(()=>[e(u,{label:"\u7269\u7406\u5730\u5740",field:"mac"},{default:o(()=>[e(s,{modelValue:l.model.mac,"onUpdate:modelValue":t[7]||(t[7]=a=>l.model.mac=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:o(()=>[e(u,{label:"IP\u5730\u5740",field:"ipAddr"},{default:o(()=>[e(s,{modelValue:l.model.ipAddr,"onUpdate:modelValue":t[8]||(t[8]=a=>l.model.ipAddr=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:o(()=>[e(u,{label:"\u64CD\u4F5C\u7CFB\u7EDF",field:"system"},{default:o(()=>[e(s,{modelValue:l.model.system,"onUpdate:modelValue":t[9]||(t[9]=a=>l.model.system=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:o(()=>[e(u,{label:"\u5BC6\u7801",field:"password"},{default:o(()=>[e(s,{modelValue:l.model.password,"onUpdate:modelValue":t[10]||(t[10]=a=>l.model.password=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:o(()=>[e(u,{label:"\u8BBE\u5907\u7C7B\u578B",field:"deviceType",rules:[{required:!0,message:"\u8BBE\u5907\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A"}],"validate-trigger":["change"]},{default:o(()=>[e(n,{modelValue:l.model.deviceType,"onUpdate:modelValue":t[11]||(t[11]=a=>l.model.deviceType=a)},{default:o(()=>[(g(!0),w(F,null,N(l.edgeDeviceOptions,a=>(g(),O(V,{key:a.title,value:a.value,label:a.title},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),l.isEdit?(g(),O(d,{key:0,span:12},{default:o(()=>[e(u,{label:"\u8BBE\u5907\u7C7B\u578B",field:"state",rules:[{required:!0,message:"\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A"}],"validate-trigger":["change"]},{default:o(()=>[e(n,{modelValue:l.model.state,"onUpdate:modelValue":t[12]||(t[12]=a=>l.model.state=a)},{default:o(()=>[(g(!0),w(F,null,N(l.edgeDeviceStatuOptions,a=>(g(),O(V,{key:a.title,value:a.value,label:a.title},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})):q("",!0)]),_:1}),e(u,{label:"\u5907\u6CE8",field:"context"},{default:o(()=>[e(i,{modelValue:l.model.context,"onUpdate:modelValue":t[13]||(t[13]=a=>l.model.context=a),"allow-clear":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","on-before-ok","onOk","onCancel"])],64)}const we=P(ae,[["render",de]]);export{we as default};
