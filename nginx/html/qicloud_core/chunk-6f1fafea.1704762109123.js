(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f1fafea"],{ba45:function(e,t,l){"use strict";l("f57e")},e8d0:function(e,t,l){"use strict";l.r(t);var a,o,r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"roles-wrapper has-padding"},[t("el-card",[t("el-title",{attrs:{slot:"header"},slot:"header"},[e._v(" 角色管理 ")]),t("el-form",{attrs:{inline:!0,"label-position":"left",size:"small"}},[t("el-form-item",[t("el-input",{attrs:{placeholder:"填写角色名称"},model:{value:e.tableConfig.roleName,callback:function(t){e.$set(e.tableConfig,"roleName",t)},expression:"tableConfig.roleName"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"}},[e._v(" 搜索 ")])],1),t("el-form-item",{staticClass:"float-right"},[t("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:function(t){e.dialogVisible=!0}}},[e._v(" 新建 ")])],1)],1),t("el-table",{attrs:{data:e.dataSource,height:"0"}},[t("el-table-column",{attrs:{label:"序号",type:"index"}}),t("el-table-column",{attrs:{label:"角色名称",prop:"name"}}),t("el-table-column",{attrs:{label:"角色编号",prop:"code"}}),t("el-table-column",{attrs:{label:"角色类型",prop:"type"},scopedSlots:e._u([{key:"default",fn:function({row:l}){return[t("el-tag",{attrs:{size:"mini"}},[e._v(" "+e._s(l.type?"31231":"211")+" ")])]}}])}),t("el-table-column",{attrs:{label:"创建时间",prop:"createUser"}}),t("el-table-column",{attrs:{label:"备注",prop:"createUser"}}),t("el-table-column",{attrs:{label:"状态",prop:"remark"},scopedSlots:e._u([{key:"default",fn:function({row:l}){return[t("el-button",{attrs:{icon:"el-icon-setting",type:"text"}},[e._v(" 修改 ")]),t("TableButton",{attrs:{status:l.status,icons:["el-icon-circle-check","el-icon-circle-close"],titles:["启用","禁用"],"class-names":["sky-success","sky-warning"]},on:{click:function(e){}}}),t("el-button",{staticClass:"sky-danger",attrs:{type:"text",icon:"el-icon-delete"}},[e._v(" 删除 ")])]}}])})],1),t("el-row",{staticClass:"sorter-wrap position-right"},[t("el-pagination",{attrs:{background:"",layout:"prev, pager, next","current-page":e.tableConfig.page,"page-size":e.tableConfig.size,total:e.tableConfig.total}})],1)],1),t("el-dialog",{staticClass:"protective-line",attrs:{visible:e.dialogVisible,center:""},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("el-title",{attrs:{slot:"title"},slot:"title"},[e._v(" 新增角色 ")]),t("el-form",{ref:"RoleForm",attrs:{model:e.roleInformation,"label-position":"left","label-width":"60px",rules:e.rules}},[t("el-form-item",{attrs:{label:"名称",prop:"roleName"}},[t("el-input",{model:{value:e.roleInformation.roleName,callback:function(t){e.$set(e.roleInformation,"roleName",t)},expression:"roleInformation.roleName"}})],1),t("el-form-item",{attrs:{label:"类型",prop:"type"}},[t("el-select",{model:{value:e.roleInformation.type,callback:function(t){e.$set(e.roleInformation,"type",t)},expression:"roleInformation.type"}},e._l(e.roleTypes,(function(e){return t("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1)],1),t("el-form-item",{attrs:{label:"状态",prop:"status"}},[t("el-switch",{attrs:{"active-text":"启用","inactive-text":"禁用"},model:{value:e.roleInformation.status,callback:function(t){e.$set(e.roleInformation,"status",t)},expression:"roleInformation.status"}})],1)],1),t("span",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.submit("RoleForm")}}},[e._v("确认")]),t("el-button",{attrs:{size:"small"},on:{click:function(t){return e.resetForm("RoleForm")}}},[e._v("取消")])],1)],1)],1)},s=[],i=(l("14d9"),{name:"TableButton",functional:!0,props:{status:{type:Number,default:0},icons:{type:Array,default:()=>[]},titles:{type:Array,default:()=>[]},classNames:{type:Array,default:()=>[]}},render(e,t){const{status:l,icons:a,titles:o,classNames:r}=t.props,s=[];return s.push(e("el-button",{attrs:{type:"text",icon:a[l]},class:r[l]},[o[l]])),s}}),n=i,c=(l("ba45"),l("2877")),u=Object(c["a"])(n,a,o,!1,null,"1fa91ea7",null),p=u.exports,m={nmae:"Roles",components:{TableButton:p},data(){const e=[{value:1,label:"普通角色"},{value:2,label:"特殊角色"}];return{dialogVisible:!0,roleTypes:e,dataSource:[],roleInformation:{roleName:"",status:!0,type:""},tableConfig:{roleName:"",total:0,page:1,size:20},rules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],status:[{required:!0,message:"请选择角色状态",trigger:"change"}],type:[{required:!0,message:"请选择角色类型",trigger:"change"}]}}},computed:{buttonTitle(){return e=>{let t;switch(e){case 0:t="启用";break;case 1:t="禁用";break;default:t="禁用";break}return t}}},created(){this.getRoleManage(this.tableConfig)},methods:{submit(e){this.$refs[e].validate(t=>(t&&this.$store.dispatch("role/createRoleModel",{...this.roleInformation,status:this.roleInformation.status?1:0}).then(t=>{const{data:l}=t;console.log(l),this.resetForm(e)}).catch(this.$message.error),!1))},resetForm(e){this.$refs[e].resetFields(),this.dialogVisible=!1},getRoleManage({roleName:e,page:t,size:l}){this.$store.dispatch("role/getRoleManage",{roleName:e,page:t,size:l}).then(e=>{const{data:{list:t,total:l}}=e;this.dataSource=t,this.tableConfig.total=l})}}},f=m,b=Object(c["a"])(f,r,s,!1,null,null,null);t["default"]=b.exports},f57e:function(e,t,l){}}]);
//# sourceMappingURL=chunk-6f1fafea.1704762109123.js.map