(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35dc9032","chunk-c2e78962"],{"20eb":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{xs:20}},[n("el-form",{directives:[{name:"show",rawName:"v-show",value:t.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:t.queryParams,size:"small",inline:!0,"label-width":"108px"}},[n("el-form-item",{attrs:{label:"团队名称",prop:"teamName"}},[n("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入驾驶员名称",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleQuery(e)}},model:{value:t.queryParams.teamName,callback:function(e){t.$set(t.queryParams,"teamName",e)},expression:"queryParams.teamName"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:t.handleQuery}},[t._v("搜索")]),n("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:t.resetQuery}},[t._v("重置")])],1)],1),n("el-row",{staticClass:"mb8",attrs:{gutter:10}},[n("el-col",{attrs:{span:1.5}},[n("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:t.handleAdd}},[t._v("新增")])],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.userList}},[n("el-table-column",{attrs:{label:"团队编号",width:"250",align:"center",prop:"teamId"}}),n("el-table-column",{attrs:{label:"团队名称",align:"center",prop:"teamName"}}),n("el-table-column",{attrs:{label:"管理员名称",align:"center",prop:"administratorName"}}),n("el-table-column",{attrs:{label:"创建人",align:"center",prop:"creator"}}),n("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t.parseTime(e.row.createTime)))])]}}])}),n("el-table-column",{attrs:{label:"修改人",align:"center",prop:"modifier"}}),n("el-table-column",{attrs:{label:"修改时间",align:"center",prop:"updateTime"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t.parseTime(e.row.createTime)))])]}}])}),n("el-table-column",{attrs:{label:"操作",align:"center",width:"420","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return 1!==e.row.userId?[n("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(n){return t.handleUpdate(e.row)}}},[t._v("修改")]),n("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(n){return t.handleDelete(e.row)}}},[t._v("删除")]),n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){return t.handleUser(e.row)}}},[t._v("人员新增")]),n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){return t.handleSite(e.row)}}},[t._v("分配站点")]),n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){return t.handleAdmin(e.row)}}},[t._v("设置管理员")]),n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){return t.detailAction(e.row)}}},[t._v("详情")])]:void 0}}],null,!0)})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,page:t.queryParams.pageNum,limit:t.queryParams.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryParams,"pageSize",e)},pagination:t.getList}})],1)],1),n("el-dialog",{attrs:{title:t.title,visible:t.open,width:"800px","append-to-body":"","close-on-click-modal":!1},on:{"update:visible":function(e){t.open=e},close:t.cancel}},[n("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"80px"}},[n("el-row",[n("el-col",[n("el-form-item",{attrs:{label:"团队名称",prop:"teamName"}},[n("el-input",{attrs:{placeholder:"请输入团队名称"},model:{value:t.form.teamName,callback:function(e){t.$set(t.form,"teamName",e)},expression:"form.teamName"}})],1)],1)],1),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"站点",prop:"siteIds"}},[n("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:t.form.siteIds,callback:function(e){t.$set(t.form,"siteIds",e)},expression:"form.siteIds"}},t._l(t.siteOptions,(function(t){return n("el-option",{key:t.siteId,attrs:{label:t.siteName,value:t.siteId}})})),1)],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"团队角色",prop:"roleIds"}},[n("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:t.form.roleIds,callback:function(e){t.$set(t.form,"roleIds",e)},expression:"form.roleIds"}},t._l(t.roleOptions,(function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)],1)],1),n("el-row",[n("el-col",[n("el-form-item",{attrs:{label:"备注",prop:"teamDeac"}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.form.teamDeac,callback:function(e){t.$set(t.form,"teamDeac",e)},expression:"form.teamDeac"}})],1)],1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("确 定")]),n("el-button",{on:{click:t.cancel}},[t._v("取 消")])],1)],1),n("el-dialog",{attrs:{title:t.title,visible:t.openUser,width:"600px","append-to-body":"","close-on-click-modal":!1},on:{"update:visible":function(e){t.openUser=e},close:t.cancel}},[n("el-form",{ref:"userform",attrs:{model:t.userform,rules:t.userRules,"label-width":"80px"}},[n("el-row",[n("el-col",[n("el-form-item",{attrs:{label:"团队成员",prop:"userIds"}},[n("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:t.userform.userIds,callback:function(e){t.$set(t.userform,"userIds",e)},expression:"userform.userIds"}},t._l(t.userOptions,(function(t){return n("el-option",{key:t.userId,attrs:{label:t.userName,value:t.userId}})})),1)],1)],1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:t.submitUserForm}},[t._v("确 定")]),n("el-button",{on:{click:t.cancel}},[t._v("取 消")])],1)],1),n("el-dialog",{attrs:{title:t.title,visible:t.openAdmin,width:"600px","append-to-body":"","close-on-click-modal":!1},on:{"update:visible":function(e){t.openAdmin=e},close:t.cancel}},[n("el-form",{ref:"adminform",attrs:{model:t.adminform,rules:t.adminRules,"label-width":"150px"}},[n("el-row",[n("el-col",[n("el-form-item",{attrs:{label:"团队管理员",prop:"administratorId"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.adminform.administratorId,callback:function(e){t.$set(t.adminform,"administratorId",e)},expression:"adminform.administratorId"}},t._l(t.userAdminOptions,(function(t){return n("el-option",{key:t.userId,attrs:{label:t.userName,value:t.userId}})})),1)],1)],1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:t.submitAdminForm}},[t._v("确 定")]),n("el-button",{on:{click:t.cancel}},[t._v("取 消")])],1)],1),n("el-dialog",{attrs:{title:t.title,visible:t.openSite,width:"600px","append-to-body":"","close-on-click-modal":!1},on:{"update:visible":function(e){t.openSite=e},close:t.cancel}},[n("el-form",{ref:"siteform",attrs:{model:t.siteform,rules:t.siteRules,"label-width":"150px"}},[n("el-row",[n("el-col",[n("el-form-item",{attrs:{label:"团队成员",prop:"userId"}},[n("el-select",{attrs:{clearable:"","value-key":"userId",placeholder:"请选择"},on:{change:t.selectUser},model:{value:t.siteform.userId,callback:function(e){t.$set(t.siteform,"userId",e)},expression:"siteform.userId"}},t._l(t.userTyOptions,(function(t){return n("el-option",{key:t.userId,attrs:{label:t.userName,value:t}})})),1)],1)],1)],1),n("el-row",[n("el-col",[n("el-form-item",{attrs:{label:"站点",prop:"siteIds"}},[n("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:t.siteform.siteIds,callback:function(e){t.$set(t.siteform,"siteIds",e)},expression:"siteform.siteIds"}},t._l(t.siteTyOptions,(function(t){return n("el-option",{key:t.siteId,attrs:{label:t.siteName,value:t.siteId}})})),1)],1)],1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:t.submitSiteForm}},[t._v("确 定")]),n("el-button",{on:{click:t.cancel}},[t._v("取 消")])],1)],1),n("PartnerDialog",{ref:"partnerDialog"})],1)},s=[],i=(n("4de4"),n("d3b7"),n("159b"),n("14d9"),n("d81d"),n("c0c7")),o=n("5f87"),a=n("ca17"),l=n.n(a),u=(n("542c"),n("5621")),c=n("5575"),d=n("3fc4"),m={name:"User",dicts:[],components:{Treeselect:l.a,PartnerDialog:u["default"]},data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,adminform:{},total:0,siteOptions:[],userList:[],title:"",deptOptions:void 0,stationOptions:[],userAdminOptions:[],projectOptions:[],open:!1,openUser:!1,openAdmin:!1,editUserId:null,openEdit:!1,deptName:void 0,initPassword:void 0,dateRange:[],postOptions:[],roleOptions:[],userOptions:[],form:{},defaultProps:{children:"children",label:"label"},upload:{open:!1,title:"",isUploading:!1,updateSupport:0,headers:{Authorization:"Bearer "+Object(o["c"])()},url:"/system/user/importData"},queryParams:{pageIndex:1,pageSize:10,userName:void 0,phonenumber:void 0,status:void 0,deptId:void 0},columns:[{key:0,label:"用户编号",visible:!0},{key:1,label:"用户名称",visible:!0},{key:2,label:"用户昵称",visible:!0},{key:3,label:"部门",visible:!0},{key:4,label:"手机号码",visible:!0},{key:5,label:"状态",visible:!0},{key:6,label:"创建时间",visible:!0}],userform:{},siteform:{},openSite:!1,userTyOptions:[],siteTyOptions:[],adminRules:{administratorId:[{required:!0,message:"管理员不能为空",trigger:"blur"}]},siteRules:{userId:[{required:!0,message:"团员不能为空",trigger:"blur"}],siteIds:[{required:!0,message:"站点不能为空",trigger:"blur"}]},userRules:{userIds:[{required:!0,message:"成员不能为空",trigger:"blur"}]},rules:{teamName:[{required:!0,message:"团队名称不能为空",trigger:"blur"},{min:2,max:20,message:"用户名称长度必须介于 2 和 20 之间",trigger:"blur"}]}}},watch:{deptName:function(t){this.$refs.tree.filter(t)}},created:function(){var t=this;this.getList(),Object(i["h"])({}).then((function(e){t.roleOptions=e.data.list})),this.siteSelectList()},methods:{detailAction:function(t){this.$refs.partnerDialog.showDialog(),this.$refs.partnerDialog.handleSite(t.teamId)},siteSelectList:function(){var t=this;Object(c["z"])({pageIndex:1,pageSize:200}).then((function(e){t.siteOptions=e.data.list}))},getList:function(){var t=this;this.loading=!0,Object(d["g"])(this.queryParams).then((function(e){var n=e.data;t.userList=n.list,t.total=n.total,t.loading=!1}))},getDeptTree:function(){var t=this;Object(i["f"])().then((function(e){t.deptOptions=e.data}))},filterNode:function(t,e){return!t||-1!==e.label.indexOf(t)},handleNodeClick:function(t){this.queryParams.deptId=t.id,this.handleQuery()},selectUser:function(t){if(console.info("value========",t),t.assignSites.length>0){var e=[];t.assignSites.forEach((function(t,n){e.push(t.siteId)})),this.siteform.siteIds=e}else this.siteform.siteIds=""},handleAdmin:function(t){var e=this;0===t.administratorId&&(t.administratorId=""),this.adminform=t,Object(d["e"])(t.teamId).then((function(t){e.userAdminOptions=t.data.userIds,e.openAdmin=!0}))},handleSite:function(t){var e=this;this.siteform.teamId=t.teamId,Object(d["e"])(t.teamId).then((function(t){e.userTyOptions=t.data.userIds,e.siteTyOptions=t.data.siteIds,e.openSite=!0}))},handleUser:function(t){var e=this;this.userform=t,Object(d["f"])(t.teamId).then((function(t){e.openUser=!0,e.userOptions=t.data.list}))},handleStatusChange:function(t){var e=this,n="0"===t.status?"启用":"停用";this.$modal.confirm('确认要"'+n+'""'+t.userName+'"用户吗？').then((function(){return Object(i["d"])(t.userId,t.status)})).then((function(){e.$modal.msgSuccess(n+"成功")})).catch((function(){t.status="0"===t.status?"1":"0"}))},cancel:function(){this.open=!1,this.openUser=!1,this.openAdmin=!1,this.openSite=!1,this.reset()},reset:function(){this.userTyOptions=[],this.siteTyOptions=[],this.userAdminOptions=[],this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.dateRange=[],this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(t){this.ids=t.map((function(t){return t.userId})),this.single=1!=t.length,this.multiple=!t.length},handleCommand:function(t,e){switch(t){case"handleResetPwd":this.handleResetPwd(e);break;case"handleAuthRole":this.handleAuthRole(e);break;default:break}},handleAdd:function(){this.reset(),this.open=!0,this.title="团队新增组员",this.form.password=this.initPassword},handleUpdate:function(t){var e=this;this.reset(),Object(d["e"])(t.teamId).then((function(t){e.form=t.data;var n=[];e.form.siteIds.forEach((function(t,e){n.push(t.siteId)}));var r=[];e.form.roleIds.forEach((function(t,e){r.push(t.roleId)})),e.form.siteIds=n,e.form.roleIds=r,console.info("======================",e.form),e.open=!0}))},selectStationList:function(t){var e=this,n=[];this.stationOptions=[],n.push(t);var r={};r.userId=this.editUserId,r.projectIDs=n,this.stationOptions=[],Object(i["i"])(r).then((function(t){t.data.forEach((function(t,n){0!=t.isExist&&e.$set(e.form,"stationID",t.stationID)})),e.stationOptions=t.data}))},handleResetPwd:function(t){var e=this;this.$prompt('请输入"'+t.userName+'"的新密码',"提示",{confirmButtonText:"确定",cancelButtonText:"取消",closeOnClickModal:!1,inputPattern:/^.{5,20}$/,inputErrorMessage:"用户密码长度必须介于 5 和 20 之间"}).then((function(n){var r=n.value;Object(i["l"])(t.userId,r).then((function(t){e.$modal.msgSuccess("修改成功，新密码是："+r)}))})).catch((function(){}))},handleAuthRole:function(t){var e=t.userId;this.$router.push("/system/user-auth/role/"+e)},submitForm:function(){var t=this;t.$refs["form"].validate((function(e){e&&(void 0!=t.form.teamId?Object(d["h"])(t.form).then((function(e){t.$modal.msgSuccess("修改成功"),t.open=!1,t.getList()})):Object(d["a"])(t.form).then((function(e){t.$modal.msgSuccess("新增成功"),t.open=!1,t.getList()})))}))},submitUserForm:function(){var t=this;t.$refs["userform"].validate((function(e){e&&Object(d["b"])(t.userform).then((function(e){t.openUser=!1,t.getList()}))}))},submitAdminForm:function(){var t=this;t.$refs["adminform"].validate((function(e){e&&Object(d["i"])(t.adminform).then((function(e){t.openAdmin=!1,t.userAdminOptions=[],t.getList()}))}))},submitSiteForm:function(){var t=this;t.$refs["siteform"].validate((function(e){e&&Object(d["j"])(t.siteform).then((function(e){t.openSite=!1,t.reset(),t.getList()}))}))},handleDelete:function(t){var e=this;this.$modal.confirm('是否确认删除团队名称为"'+t.teamName+'"的数据项？').then((function(){return Object(d["c"])(t.teamId)})).then((function(){e.getList(),e.$modal.msgSuccess("删除成功")})).catch((function(t){e.$modal.msgSuccess(t)}))}}},f=m,p=n("2877"),h=Object(p["a"])(f,r,s,!1,null,null,null);e["default"]=h.exports},"3fc4":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"g",(function(){return o})),n.d(e,"f",(function(){return a})),n.d(e,"b",(function(){return l})),n.d(e,"e",(function(){return u})),n.d(e,"i",(function(){return c})),n.d(e,"j",(function(){return d})),n.d(e,"h",(function(){return m})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return p}));var r=n("b775"),s=n("c38a");function i(t){return Object(r["a"])({url:"/fcs/teams",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/fcs/teams/page",method:"get",params:t})}function a(t){return Object(r["a"])({url:"/fcs/teams/role_user_list/"+Object(s["g"])(t),method:"get",params:null})}function l(t){return Object(r["a"])({url:"/fcs/teams/relevance_users/"+Object(s["g"])(t.teamId),method:"put",data:t})}function u(t){return Object(r["a"])({url:"/fcs/teams/"+Object(s["g"])(t),method:"GET",data:{}})}function c(t){return Object(r["a"])({url:"/fcs/teams/administrator/"+Object(s["g"])(t.teamId)+"/"+Object(s["g"])(t.administratorId),method:"put",data:t})}function d(t){return Object(r["a"])({url:"/fcs/teams/user_re_sites/"+Object(s["g"])(t.userId.userId),method:"put",data:t})}function m(t){return Object(r["a"])({url:"/fcs/teams/"+Object(s["g"])(t.teamId),method:"put",data:t})}function f(t){return Object(r["a"])({url:"/fcs/teams/"+Object(s["g"])(t),method:"delete"})}function p(t,e){return Object(r["a"])({url:"/fcs/teams/dissociated_user/"+Object(s["g"])(t)+"/"+Object(s["g"])(e),method:"put"})}},5575:function(t,e,n){"use strict";n.d(e,"n",(function(){return i})),n.d(e,"h",(function(){return o})),n.d(e,"z",(function(){return a})),n.d(e,"a",(function(){return l})),n.d(e,"C",(function(){return u})),n.d(e,"E",(function(){return c})),n.d(e,"B",(function(){return d})),n.d(e,"j",(function(){return m})),n.d(e,"w",(function(){return f})),n.d(e,"k",(function(){return p})),n.d(e,"y",(function(){return h})),n.d(e,"t",(function(){return b})),n.d(e,"i",(function(){return g})),n.d(e,"F",(function(){return v})),n.d(e,"u",(function(){return O})),n.d(e,"r",(function(){return j})),n.d(e,"v",(function(){return I})),n.d(e,"q",(function(){return _})),n.d(e,"p",(function(){return y})),n.d(e,"f",(function(){return k})),n.d(e,"c",(function(){return w})),n.d(e,"d",(function(){return x})),n.d(e,"g",(function(){return S})),n.d(e,"e",(function(){return $})),n.d(e,"x",(function(){return N})),n.d(e,"s",(function(){return A})),n.d(e,"b",(function(){return P})),n.d(e,"o",(function(){return T})),n.d(e,"A",(function(){return C})),n.d(e,"D",(function(){return U}));var r=n("b775"),s=n("c38a");n("bc3a");function i(t){return Object(r["a"])({url:"/fcs/sites/"+Object(s["g"])(t),method:"get"})}function o(t){return Object(r["a"])({url:"/fcs/control/uavs/cancel_fly_point",method:"post",data:t})}function a(t){return Object(r["a"])({url:"/fcs/sites/page",method:"get",params:t})}function l(t){return Object(r["a"])({url:"/fcs/sites",method:"post",data:t})}function u(t,e,n){return Object(r["a"])({url:"/fcs/sites/bindHive/"+Object(s["g"])(t)+"/"+Object(s["g"])(e)+"/"+Object(s["g"])(n),method:"PATCH",data:{}})}function c(t,e,n){return Object(r["a"])({url:"/fcs/sites/bindUav/"+Object(s["g"])(t)+"/"+Object(s["g"])(e)+"/"+Object(s["g"])(n),method:"PATCH",data:{}})}function d(t){return Object(r["a"])({url:"/fcs/sites/"+Object(s["g"])(t.siteId),method:"PUT",data:t})}function m(t){return Object(r["a"])({url:"/fcs/sites/"+Object(s["g"])(t),method:"delete"})}function f(t){return Object(r["a"])({url:"/fcs/missions",method:"get",params:t})}function p(t){return Object(r["a"])({url:"/fcs/missions/"+Object(s["g"])(t)+"/"+Object(s["g"])("-1"),method:"PATCH"})}function h(t){return Object(r["a"])({url:"/fcs/missions",method:"post",data:t})}function b(t){return Object(r["a"])({url:"/fcs/missions/"+Object(s["g"])(t),method:"get"})}function g(t){return Object(r["a"])({url:"/fcs/cronmissions/cd/list",method:"get",params:t})}function v(t){return Object(r["a"])({url:"/fcs/cronmissions/validlist",method:"get",params:t})}function O(t,e){return Object(r["a"])({url:t,method:"post",data:e})}function j(t){return Object(r["a"])({url:"/fcs/uavaction/mediasetting",method:"post",params:t})}function I(t){return Object(r["a"])({url:"/fcs/control/uavs/fly_point",method:"post",data:t})}function _(t){return Object(r["a"])({url:"/fcs/uavaction/locationsetting",method:"post",params:t})}function y(t){return Object(r["a"])({url:"/fcs/uavaction/gimbalsetting",method:"post",params:t})}function k(t){return Object(r["a"])({url:"/fcs/control/uavs/camera_set_zoom",method:"post",data:t})}function w(t){return Object(r["a"])({url:"/fcs/control/uavs/camera_aim",method:"post",data:t})}function x(t){return Object(r["a"])({url:"/fcs/control/uavs/camera_mode_switch",method:"post",data:t})}function S(t){return Object(r["a"])({url:"/fcs/control/uavs/camera_take_photo",method:"post",data:t})}function $(t){return Object(r["a"])({url:"/fcs/control/uavs/camera_recording",method:"post",data:t})}function N(t){return Object(r["a"])({url:"/fcs/rcsetting",method:"post",params:t})}function A(t){return Object(r["a"])({url:"/fcs/control/uav_missions/perform_task",method:"post",data:t})}function P(t){return Object(r["a"])({url:"/fcs/task_manage/uav_task/task_progress/"+Object(s["g"])(t),method:"get"})}function T(t){return Object(r["a"])({url:"/fcs/task_manage/uav_task/task_log_info/"+Object(s["g"])(t),method:"get"})}function C(t){return Object(r["a"])({url:"/fcs/control/uavs/uav_manual",method:"post",data:t})}function U(t,e){return Object(r["a"])({url:"/fcs/task_manage/uav_task/ir_dect_results/update_status/"+Object(s["g"])(t)+"/"+Object(s["g"])(e),method:"PATCH"})}},5621:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{"append-to-body":"",title:"团队成员",visible:t.dialog,width:"1300px"},on:{"update:visible":function(e){t.dialog=e}}},[n("div",{staticClass:"div-content"},t._l(t.listContent,(function(e){return n("div",{key:e.id,staticClass:"div-content__box"},[n("div",{staticClass:"div-content__box__avatar"},[n("el-avatar",{attrs:{src:e.imgUrl}})],1),n("div",{staticClass:"div-content__box__avatar"},[n("span",[t._v("姓名：")]),n("span",[t._v(t._s(e.userName))])]),n("div",{staticClass:"div-content__box__item"},[t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.delTeamsUser(e)}}},[t._v("删除成员")])],1)])})),0)])},s=[],i=n("3fc4"),o={components:{},data:function(){return{dialog:!1,listContent:[],teamId:void 0}},computed:{},methods:{showDialog:function(){this.dialog=!0},handleSite:function(t){var e=this;this.teamId=t,Object(i["e"])(t).then((function(t){e.listContent=t.data.userIds}))},delTeamsUser:function(t){var e=this;e.$modal.confirm('是否确认删除团队成员名称为"'+t.userName+'"的数据项？').then((function(){return console.info("99999999999999999999999999",t.userId,e.teamId),Object(i["d"])(e.teamId,t.userId)})).then((function(){e.handleSite(e.teamId),e.$modal.msgSuccess("删除成功")})).catch((function(t){e.$modal.msgSuccess(t)}))}},created:function(){}},a=o,l=(n("b02e"),n("2877")),u=Object(l["a"])(a,r,s,!1,null,"5850f47b",null);e["default"]=u.exports},b02e:function(t,e,n){"use strict";n("ddca")},ddca:function(t,e,n){}}]);