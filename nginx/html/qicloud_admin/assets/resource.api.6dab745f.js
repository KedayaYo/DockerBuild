var g=Object.defineProperty;var l=(r,e,t)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>(l(r,typeof e!="symbol"?e+"":e,t),t);import{H as i}from"./index.9fa6ecce.js";class h{constructor(){c(this,"uri","/resources")}getAll(e){return i.get(this.uri,{roleID:e})}getOne(e){return i.get(`${this.uri}/${e}`)}create({pid:e,type:t,status:s,name:u,code:n,weight:o,meta:a}){return i.post(this.uri,{pid:e,type:t,status:s,name:u,code:n,weight:o,meta:JSON.stringify(a)})}update({id:e,pid:t,type:s,status:u,name:n,code:o,weight:a,meta:p}){return i.put(this.uri,{id:e,pid:t,type:s,status:u,name:n,code:o,weight:a,meta:JSON.stringify(p)})}delete(e){return i.delete(`${this.uri}/${e}`)}}const $=new h;export{$ as r};