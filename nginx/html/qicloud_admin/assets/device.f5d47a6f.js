var d=Object.defineProperty;var p=(r,e,t)=>e in r?d(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var s=(r,e,t)=>(p(r,typeof e!="symbol"?e+"":e,t),t);import{H as i}from"./index.9fa6ecce.js";class o{constructor(){s(this,"uri","/device_models")}fetch({page:e,size:t,modelName:u,modelType:c}){return i.get(`${this.uri}`,{page:e,size:t,modelName:u,modelType:c})}delete(e){return i.delete(`${this.uri}/${e}`)}create(e){return i.post(`${this.uri}`,e)}updateDeviceModel(e){return i.put(`${this.uri}`,e)}}const h=new o;export{h as d};
