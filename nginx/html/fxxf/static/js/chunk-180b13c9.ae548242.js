(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-180b13c9"],{"1b49":function(e,t,r){"use strict";r.d(t,"f",(function(){return i})),r.d(t,"e",(function(){return o})),r.d(t,"a",(function(){return n})),r.d(t,"g",(function(){return s})),r.d(t,"c",(function(){return u})),r.d(t,"d",(function(){return c})),r.d(t,"b",(function(){return d}));var a=r("b775"),l=r("c38a");function i(e){return console.info(e),Object(a["a"])({url:"/fcs/device/hives/page",method:"get",params:e})}function o(e){return Object(a["a"])({url:"/fcs/device/hives/"+Object(l["g"])(e),method:"get"})}function n(e){return Object(a["a"])({url:"/fcs/device/hives",method:"post",data:e})}function s(e){return Object(a["a"])({url:"/fcs/device/hives/"+Object(l["g"])(e.hiveId),method:"PUT",data:e})}function u(e){return Object(a["a"])({url:"/fcs/device/hives/"+Object(l["g"])(e),method:"delete"})}function c(){return Object(a["a"])({url:"/fcs/device/hives",method:"get"})}function d(e){return Object(a["a"])({url:"/fcs/device/hives/unbindSite/"+Object(l["g"])(e),method:"patch",data:{}})}},"79d4":function(e,t,r){"use strict";r.d(t,"e",(function(){return l})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return o})),r.d(t,"f",(function(){return n})),r.d(t,"b",(function(){return s})),r.d(t,"d",(function(){return u}));var a=r("b775");r("c38a");function l(e){return Object(a["a"])({url:"/auth/ProjectManage/ProjectInfoList",method:"get",params:e})}function i(e){return Object(a["a"])({url:"/auth/ProjectManage/projectDetail?projectID="+e,method:"get"})}function o(e){return Object(a["a"])({url:"/auth/ProjectManage/insertProjectInfo",method:"post",data:e})}function n(e){return Object(a["a"])({url:"/auth/ProjectManage/updateProjectInfo",method:"post",data:e})}function s(e){return Object(a["a"])({url:"/auth/ProjectManage/deleteProject?projectID="+e,method:"get"})}function u(e){return Object(a["a"])({url:"/fcs/sites",method:"get",params:e})}},bb5e:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0}},[r("el-form-item",{attrs:{label:"站点名称",prop:"menuName"}},[r("el-input",{attrs:{placeholder:"请输入站点名称",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.siteName,callback:function(t){e.$set(e.queryParams,"siteName",t)},expression:"queryParams.siteName"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),r("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),r("el-row",{staticClass:"mb8",attrs:{gutter:10}},[r("el-col",{attrs:{span:1.5}},[r("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),r("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),e.refreshTable?r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.siteList,"row-key":"menuId","default-expand-all":e.isExpandAll,"tree-props":{children:"children",hasChildren:"hasChildren"}}},[r("el-table-column",{attrs:{prop:"siteName",width:"180",label:"名称",align:"center"}}),r("el-table-column",{attrs:{prop:"siteLongitude",align:"center",label:"经度"}}),r("el-table-column",{attrs:{prop:"siteLatitude",align:"center",label:"纬度"}}),r("el-table-column",{attrs:{prop:"siteHeight",width:"50",align:"center",label:"高度"}}),r("el-table-column",{attrs:{prop:"siteAltitude",width:"50",label:"海拔高度",align:"center"}}),r("el-table-column",{attrs:{prop:"bindMultipleUav",width:"50",formatter:e.getBindMultipleUav,align:"center",label:"多无人机"}}),r("el-table-column",{attrs:{prop:"siteMode",align:"center",label:"模式",formatter:e.getSiteMode}}),r("el-table-column",{attrs:{prop:"flightControlMode",align:"center",label:"飞行控制模式",formatter:e.getFlightControlMode}}),r("el-table-column",{attrs:{label:"创建时间",prop:"createTime"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}],null,!1,3078210614)}),r("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(r){return e.handleUpdate(t.row)}}},[e._v("修改")]),r("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(r){return e.handleDelete(t.row)}}},[e._v("删除")]),r("el-dropdown",{attrs:{size:"mini"},on:{command:function(r){return e.handleCommand(r,t.row)}}},[r("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-d-arrow-right"}},[e._v("更多")]),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{attrs:{command:"handleUnbHive",icon:"el-icon-circle-check"}},[e._v(" "+e._s(null===t.row.hiveIds?"绑定机库":"解绑机库"))]),r("el-dropdown-item",{attrs:{command:"handleUnbUav",icon:"el-icon-circle-check"}},[e._v(e._s(null===t.row.uavIds?"绑定无人机":"解绑无人机"))])],1)],1)]}}],null,!1,2423145147)})],1):e._e(),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),r("el-dialog",{attrs:{title:e.title,visible:e.open,width:"1080px","append-to-body":"","close-on-click-modal":!1},on:{"update:visible":function(t){e.open=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"200px"}},[r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"站点名称",prop:"siteName"}},[r("el-input",{attrs:{placeholder:"请输入站点名称"},model:{value:e.form.siteName,callback:function(t){e.$set(e.form,"siteName",t)},expression:"form.siteName"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"站点地址",prop:"siteAddress"}},[r("el-input",{attrs:{placeholder:"请输入站点地址"},model:{value:e.form.siteAddress,callback:function(t){e.$set(e.form,"siteAddress",t)},expression:"form.siteAddress"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"站点背景URL",prop:"siteBkgUrl"}},[r("el-input",{attrs:{placeholder:"请输入站点背景URL"},model:{value:e.form.siteBkgUrl,callback:function(t){e.$set(e.form,"siteBkgUrl",t)},expression:"form.siteBkgUrl"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"飞行控制模式",prop:"flightControlMode"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择飞行控制模式"},model:{value:e.form.flightControlMode,callback:function(t){e.$set(e.form,"flightControlMode",t)},expression:"form.flightControlMode"}},e._l(e.flightControlModeOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"是否多无人机模式",prop:"bindMultipleUav"}},[r("el-select",{staticStyle:{width:"100%"},model:{value:e.form.bindMultipleUav,callback:function(t){e.$set(e.form,"bindMultipleUav",t)},expression:"form.bindMultipleUav"}},e._l(e.bindMultipleUavOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"媒体资源上传模式",prop:"mediaUploadMode"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择媒体资源上传模式"},model:{value:e.form.mediaUploadMode,callback:function(t){e.$set(e.form,"mediaUploadMode",t)},expression:"form.mediaUploadMode"}},e._l(e.mediaUploadModeOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"站点经度坐标",prop:"siteLongitude"}},[r("el-input",{attrs:{placeholder:"121.12345"},model:{value:e.form.siteLongitude,callback:function(t){e.$set(e.form,"siteLongitude",t)},expression:"form.siteLongitude"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"站点纬度坐标",prop:"siteLatitude"}},[r("el-input",{attrs:{placeholder:"121.12345"},model:{value:e.form.siteLatitude,callback:function(t){e.$set(e.form,"siteLatitude",t)},expression:"form.siteLatitude"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"站点高度",prop:"siteHeight"}},[r("el-input",{attrs:{placeholder:"请输入站点高度"},model:{value:e.form.siteHeight,callback:function(t){e.$set(e.form,"siteHeight",t)},expression:"form.siteHeight"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"站点海拔高度",prop:"siteAltitude"}},[r("el-input",{attrs:{placeholder:"请输入站点海拔高度"},model:{value:e.form.siteAltitude,callback:function(t){e.$set(e.form,"siteAltitude",t)},expression:"form.siteAltitude"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"站点椭球高度",prop:"siteEllipsAltitude"}},[r("el-input",{attrs:{type:"number",placeholder:"请输入站点椭球高度"},model:{value:e.form.siteEllipsAltitude,callback:function(t){e.$set(e.form,"siteEllipsAltitude",t)},expression:"form.siteEllipsAltitude"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"站点模式",prop:"siteMode"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择站点模式"},model:{value:e.form.siteMode,callback:function(t){e.$set(e.form,"siteMode",t)},expression:"form.siteMode"}},e._l(e.siteModeOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"无人机入航高度",prop:"takeOffHeight"}},[r("el-input",{attrs:{type:"number",placeholder:"请输入无人机入航高度"},model:{value:e.form.takeOffHeight,callback:function(t){e.$set(e.form,"takeOffHeight",t)},expression:"form.takeOffHeight"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"无人机返航高度",prop:"siteReturnHeight"}},[r("el-input",{attrs:{type:"number",placeholder:"请输入无人机返航高度，单位（米）"},model:{value:e.form.siteReturnHeight,callback:function(t){e.$set(e.form,"siteReturnHeight",t)},expression:"form.siteReturnHeight"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"无人机悬停高度",prop:"siteHoverHeight"}},[r("el-input",{attrs:{type:"number",placeholder:"请输入无人机悬停高度"},model:{value:e.form.siteHoverHeight,callback:function(t){e.$set(e.form,"siteHoverHeight",t)},expression:"form.siteHoverHeight"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"无人机降落机头朝向",prop:"siteLandHeading"}},[r("el-input",{attrs:{type:"number",placeholder:"请输入无人机降落机头朝向"},model:{value:e.form.siteLandHeading,callback:function(t){e.$set(e.form,"siteLandHeading",t)},expression:"form.siteLandHeading"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"备降点经度坐标",prop:"alternateLongitude"}},[r("el-input",{attrs:{placeholder:"121.12345"},model:{value:e.form.alternateLongitude,callback:function(t){e.$set(e.form,"alternateLongitude",t)},expression:"form.alternateLongitude"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"备降点纬度坐标",prop:"alternateLatitude"}},[r("el-input",{attrs:{placeholder:"121.12345"},model:{value:e.form.alternateLatitude,callback:function(t){e.$set(e.form,"alternateLatitude",t)},expression:"form.alternateLatitude"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"备降点高度",prop:"alternateHeight"}},[r("el-input",{attrs:{type:"number",placeholder:"请输入备降点高度"},model:{value:e.form.alternateHeight,callback:function(t){e.$set(e.form,"alternateHeight",t)},expression:"form.alternateHeight"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"备降点海拔高度",prop:"alternateAltitude"}},[r("el-input",{attrs:{type:"number",placeholder:"请输入备降点椭球高度"},model:{value:e.form.alternateAltitude,callback:function(t){e.$set(e.form,"alternateAltitude",t)},expression:"form.alternateAltitude"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"备降点椭球高度",prop:"alternateEllipsAlt"}},[r("el-input",{attrs:{type:"number",placeholder:"请输入备降点高度"},model:{value:e.form.alternateEllipsAlt,callback:function(t){e.$set(e.form,"alternateEllipsAlt",t)},expression:"form.alternateEllipsAlt"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"无人机返航备降点高度",prop:"alternateReturnHeight"}},[r("el-input",{attrs:{type:"number",placeholder:"请输入无人机返航备降点高度"},model:{value:e.form.alternateReturnHeight,callback:function(t){e.$set(e.form,"alternateReturnHeight",t)},expression:"form.alternateReturnHeight"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"无人机返航备降点悬停高度",prop:"alternateHoverHeight"}},[r("el-input",{attrs:{type:"number",placeholder:"请输入无人机返航备降点悬停高度"},model:{value:e.form.alternateHoverHeight,callback:function(t){e.$set(e.form,"alternateHoverHeight",t)},expression:"form.alternateHoverHeight"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"安全点经度坐标",prop:"safeLongitude"}},[r("el-input",{attrs:{placeholder:"121.12345"},model:{value:e.form.safeLongitude,callback:function(t){e.$set(e.form,"safeLongitude",t)},expression:"form.safeLongitude"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"安全点纬度坐标",prop:"safeLatitude"}},[r("el-input",{attrs:{placeholder:"121.12345"},model:{value:e.form.safeLatitude,callback:function(t){e.$set(e.form,"safeLatitude",t)},expression:"form.safeLatitude"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"无人机降落备降点机头朝向",prop:"alternateLandHeading"}},[r("el-input",{attrs:{type:"number",placeholder:"请输入无人机降落备降点机头朝向"},model:{value:e.form.alternateLandHeading,callback:function(t){e.$set(e.form,"alternateLandHeading",t)},expression:"form.alternateLandHeading"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"推流域名",prop:"livePushDomain"}},[r("el-input",{attrs:{placeholder:"请输入推流域名"},model:{value:e.form.livePushDomain,callback:function(t){e.$set(e.form,"livePushDomain",t)},expression:"form.livePushDomain"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"拉流域名",prop:"livePullDomain"}},[r("el-input",{attrs:{placeholder:"请输入拉流域名"},model:{value:e.form.livePullDomain,callback:function(t){e.$set(e.form,"livePullDomain",t)},expression:"form.livePullDomain"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"站点视角播流地址",prop:"siteLiveUrl"}},[r("el-input",{attrs:{placeholder:"请输入站点视角播流地址"},model:{value:e.form.siteLiveUrl,callback:function(t){e.$set(e.form,"siteLiveUrl",t)},expression:"form.siteLiveUrl"}})],1)],1)],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),r("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1),r("el-dialog",{attrs:{title:e.title,visible:e.openUav,width:"400px","append-to-body":"","close-on-click-modal":!1},on:{"update:visible":function(t){e.openUav=t}}},[r("el-form",{ref:"formUav",attrs:{model:e.formUav,rules:e.rulesUav,"label-width":"100px"}},[r("el-row",[r("el-col",[r("el-form-item",{attrs:{label:"无人机",prop:"uaId"}},[r("el-select",{staticStyle:{width:"100%"},model:{value:e.formUav.uaId,callback:function(t){e.$set(e.formUav,"uaId",t)},expression:"formUav.uaId"}},e._l(e.uavOptions,(function(e){return r("el-option",{key:e.uavId,attrs:{label:e.uavName,value:e.uavId}})})),1)],1)],1)],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.updateUav}},[e._v("确 定")]),r("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1),r("el-dialog",{attrs:{title:e.title,visible:e.openHiv,width:"400px","append-to-body":"","close-on-click-modal":!1},on:{"update:visible":function(t){e.openHiv=t}}},[r("el-form",{ref:"formHiv",attrs:{model:e.formHiv,rules:e.rulesHiv,"label-width":"100px"}},[r("el-row",[r("el-col",[r("el-form-item",{attrs:{label:"机场",prop:"hiveId"}},[r("el-select",{staticStyle:{width:"100%"},model:{value:e.formHiv.hiveId,callback:function(t){e.$set(e.formHiv,"hiveId",t)},expression:"formHiv.hiveId"}},e._l(e.hivOptions,(function(e){return r("el-option",{key:e.hiveId,attrs:{label:e.hiveName,value:e.hiveId}})})),1)],1)],1)],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.updateHiv}},[e._v("确 定")]),r("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},l=[],i=(r("ac1f"),r("00b4"),r("d9e2"),r("d3b7"),r("159b"),r("14d9"),r("b8ad")),o=r("5575"),n=r("1b49"),s=r("eecf"),u=r("79d4"),c={name:"Project",components:{OperationCenter:i["default"]},data:function(){var e=function(e,t,r){var a=/^(([1-9]{1}\d*)|(0{1}))((.\d{0,20})?)$/;a.test(t)?r():r(new Error("坐标例:121.3245671"))};return{showOperationCenter:!1,loading:!0,showSearch:!0,siteList:[],siteId:"",hivId:"",uavId:"",formUav:{},formHiv:{},projectOptions:[],total:0,title:"",open:!1,isExpandAll:!1,refreshTable:!0,queryParams:{pageIndex:1,pageSize:10,hiveNumber:null,status:null,modelId:null},openUav:!1,openHiv:!1,siteModeOptions:[{label:"机场模式",value:1},{label:"遥控器模式",value:4}],flightControlModeOptions:[{label:"地面站模式",value:1},{label:"其他模式",value:2}],bindMultipleUavOptions:[{label:"是",value:1},{label:"否",value:2}],mediaUploadModeOptions:[{label:"手动上传",value:1},{label:"自动上传",value:2}],form:{siteMode:4,siteOptionHeading:0},uavOptions:[],hivOptions:[],rules:{siteName:[{required:!0,message:"组织名字不能为空",trigger:"blur"}],siteAddress:[{required:!0,message:"组织地址不能为空",trigger:"blur"}],siteLatitude:[{required:!0,message:"站点纬度坐标不能为空",trigger:"blur"},{validator:e,trigger:["blur","change"]}],siteLongitude:[{required:!0,message:"站点经度坐标不能为空",trigger:"blur"},{validator:e,trigger:["blur","change"]}],takeOffHeight:[{required:!0,message:"无人机入航高度不能为空",trigger:"blur"}],siteReturnHeight:[{required:!0,message:"无人机返航高度不能为空",trigger:"blur"}],alternateLatitude:[{required:!0,message:"备降点纬度坐标不能为空",trigger:"blur"},{validator:e,trigger:["blur","change"]}],alternateLongitude:[{required:!0,message:"备降点经度坐标不能为空",trigger:"blur"},{validator:e,trigger:["blur","change"]}],alternateAltitude:[{required:!0,message:"备降点海拔高度不能为空",trigger:"blur"}],alternateHeight:[{required:!0,message:"备降点高度不能为空",trigger:"blur"}],siteHeight:[{required:!0,message:"站点高度不能为空",trigger:"blur"}],siteAltitude:[{required:!0,message:"站点海拔高度不能为空",trigger:"blur"}],flightControlMode:[{required:!0,message:"飞行控制模式不能为空",trigger:"blur"}],siteMode:[{required:!0,message:"站点模式不能为空",trigger:"blur"}],siteRHAltitude:[{required:!0,message:"无人机返航高度不能为空",trigger:"blur"}],siteRHHoverAltitude:[{required:!0,message:"无人机返航组织悬停高度不能为空",trigger:"blur"}],siteRHHeading:[{required:!0,message:"无人机降落朝向不能为空",trigger:"blur"}],UAVSTAltitude:[{required:!0,message:"无人机起飞高度不能为空",trigger:"blur"}],flightWay:[{required:!0,message:"无人机飞行模式不能为空",trigger:"blur"}]},rulesHiv:{hiveId:[{required:!0,message:"请选择机场",trigger:"blur"}]},rulesUav:{uaId:[{required:!0,message:"请选择无人机",trigger:"blur"}]}}},created:function(){this.getList()},methods:{operaClose:function(){this.showOperationCenter=!1},selected:function(e){this.form.icon=e},handleCommand:function(e,t){switch(e){case"handleUnbHive":this.handleUnbHive(t);break;case"handleUnbUav":this.handleUnbUav(t);break;default:break}},handleDataScope:function(e){},handleUnbUav:function(e){var t=this;null!==e.uavIds?this.$modal.confirm("是否确认解绑无人机").then((function(){return Object(o["E"])(e.siteId,e.uavIds[0],2)})).then((function(){t.getList(),t.$modal.msgSuccess("解绑成功")})).catch((function(){})):(this.openUav=!0,this.siteId=e.siteId,this.title="绑定无人机",this.getUavSelect())},updateUav:function(){var e=this;this.$refs["formUav"].validate((function(t){t&&(e.uavId=e.formUav.uaId,Object(o["E"])(e.siteId,e.uavId,1).then((function(t){e.$modal.msgSuccess("绑定成功"),e.cancel(),e.getList()})))}))},handleUnbHive:function(e){var t=this;null!==e.hiveIds?this.$modal.confirm("是否确认解绑机场").then((function(){return Object(o["C"])(e.siteId,e.hiveIds[0],2)})).then((function(){t.getList(),t.$modal.msgSuccess("解绑成功")})).catch((function(){})):(this.openHiv=!0,this.siteId=e.siteId,this.title="绑定机场",this.getHivSelect())},updateHiv:function(){var e=this;this.$refs["formHiv"].validate((function(t){t&&(e.hivId=e.formHiv.hiveId,Object(o["C"])(e.siteId,e.hivId,1).then((function(t){e.$modal.msgSuccess("绑定成功"),e.cancel(),e.getList()})))}))},getHivSelect:function(){var e=this;Object(n["d"])().then((function(t){var r=t.data;e.hivOptions=r.list}))},getUavSelect:function(){var e=this;Object(s["d"])().then((function(t){var r=t.data;e.uavOptions=r.list}))},getList:function(){var e=this;this.loading=!0,Object(o["z"])(this.queryParams).then((function(t){var r=t.data;e.siteList=r.list,e.total=r.total,e.loading=!1}))},prejcetSelectList:function(){var e=this;Object(u["d"])(this.queryParams).then((function(t){e.projectOptions=t.data}))},cancel:function(){this.open=!1,this.openUav=!1,this.openHiv=!1,this.siteId="",this.hivId="",this.uavId="",this.reset()},reset:function(){this.form={projectName:void 0,projectaddress:void 0},this.resetForm("form")},handleQuery:function(){this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},getStieFMode:function(e,t){return 1===e.siteFMode?"MSDK（地面遥控器）":"OSDK（边缘计算机）"},getBindMultipleUav:function(e,t){return 1===e.bindMultipleUav?"是":"否"},getFlightControlMode:function(e,t){return 1===e.flightControlMode?"地面站模式":"其他模式"},getSiteMode:function(e,t){return 1===e.stieMode?"机场模式":"遥控器模式"},handleUpdate:function(e){var t=this;this.reset(),Object(o["n"])(e.siteId).then((function(e){t.form=e.data,t.open=!0,t.title="修改站点"}))},handleAdd:function(){this.reset(),this.open=!0,this.title="添加站点"},stringToNumber:function(e){var t=[];return e.forEach((function(e){t.push(+e)})),t},numberToString:function(e){var t=[];return e.forEach((function(e){t.push(+e)})),t},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){if(t){var r={siteName:e.form.siteName,siteAddress:e.form.siteAddress,siteBkgUrl:e.form.siteBkgUrl,siteMode:parseInt(e.form.siteMode),flightControlMode:parseInt(e.form.flightControlMode),mediaUploadMode:parseInt(e.form.mediaUploadMode),bindMultipleUav:parseInt(e.form.bindMultipleUav),siteLongitude:parseFloat(e.form.siteLongitude),siteLatitude:parseFloat(e.form.siteLatitude),siteHeight:parseFloat(e.form.siteHeight),siteAltitude:parseFloat(e.form.siteAltitude),siteEllipsAltitude:parseFloat(e.form.siteEllipsAltitude),takeOffHeight:parseFloat(e.form.takeOffHeight),siteReturnHeight:parseFloat(e.form.siteReturnHeight),siteHoverHeight:parseFloat(e.form.siteHoverHeight),siteLandHeading:parseFloat(e.form.siteLandHeading),alternateLongitude:parseFloat(e.form.alternateLongitude),alternateLatitude:parseFloat(e.form.alternateLatitude),alternateHeight:parseFloat(e.form.alternateHeight),alternateAltitude:parseFloat(e.form.alternateAltitude),alternateEllipsAlt:parseFloat(e.form.alternateEllipsAlt),alternateReturnHeight:parseFloat(e.form.alternateReturnHeight),alternateHoverHeight:parseFloat(e.form.alternateHoverHeight),alternateLandHeading:parseFloat(e.form.alternateLandHeading),safeLongitude:parseFloat(e.form.safeLongitude),safeLatitude:parseFloat(e.form.safeLatitude),livePushDomain:e.form.livePushDomain,livePullDomain:e.form.livePullDomain,siteLiveUrl:e.form.siteLiveUrl};void 0!=e.form.siteId?(r.siteId=e.form.siteId,Object(o["B"])(r).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()}))):Object(o["a"])(r).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()}))}}))},handleDelete:function(e){var t=this;this.$modal.confirm('是否确认删除站点名称为"'+e.siteName+'"的数据项？').then((function(){return Object(o["j"])(e.siteId)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(e){}))}}},d=c,f=(r("fcc5"),r("2877")),m=Object(f["a"])(d,a,l,!1,null,"46cda037",null);t["default"]=m.exports},c4bb:function(e,t,r){},eecf:function(e,t,r){"use strict";r.d(t,"n",(function(){return i})),r.d(t,"r",(function(){return o})),r.d(t,"p",(function(){return n})),r.d(t,"d",(function(){return s})),r.d(t,"c",(function(){return u})),r.d(t,"i",(function(){return c})),r.d(t,"j",(function(){return d})),r.d(t,"h",(function(){return f})),r.d(t,"e",(function(){return m})),r.d(t,"a",(function(){return p})),r.d(t,"q",(function(){return h})),r.d(t,"b",(function(){return v})),r.d(t,"m",(function(){return g})),r.d(t,"s",(function(){return b})),r.d(t,"o",(function(){return H})),r.d(t,"f",(function(){return O})),r.d(t,"l",(function(){return k})),r.d(t,"g",(function(){return L})),r.d(t,"k",(function(){return w}));var a=r("b775"),l=r("c38a");r("bc3a");function i(e){return Object(a["a"])({url:"/fcs/device/uavs/page",method:"get",params:e})}function o(e,t){return Object(a["a"])({url:"/fcs/device/uavs/"+Object(l["g"])(e)+"/"+Object(l["g"])(t),method:"PATCH"})}function n(e){return Object(a["a"])({url:"/fcs/device/uavs/unbindSite/"+Object(l["g"])(e),method:"PATCH"})}function s(){return Object(a["a"])({url:"/fcs/device/uavs",method:"get"})}function u(e){return Object(a["a"])({url:"/fcs/device/uavs/"+Object(l["g"])(e),method:"get"})}function c(e){return Object(a["a"])({url:"/fcs/control/live/live_start",method:"POST",data:e})}function d(e){return Object(a["a"])({url:"/fcs/control/live/live_stop",method:"post",data:e})}function f(e){return Object(a["a"])({url:"/fcs/control/live/live_lens",method:"POST",data:e})}function m(e){return Object(a["a"])({url:"/fcs/control/uavs/gimbal_reset",method:"POST",data:e})}function p(e){return Object(a["a"])({url:"/fcs/device/uavs",method:"post",data:e})}function h(e){return Object(a["a"])({url:"/fcs/device/uavs/"+Object(l["g"])(e.uavId),method:"put",data:e})}function v(e){return Object(a["a"])({url:"/fcs/device/uavs/"+Object(l["g"])(e),method:"delete"})}function g(e){return Object(a["a"])({url:"/fcs/police_case/page",method:"get",params:e})}function b(){return Object(a["a"])({url:"/fcs/warn_history_statistical/info",method:"get"})}function H(){return Object(a["a"])({url:"/fcs/uav_state_statisticals",method:"get"})}function O(){return Object(a["a"])({url:"/fcs/hive_state_statisticals",method:"get"})}function k(){return Object(a["a"])({url:"/fcs/monitor_police_cases",method:"get"})}function L(e){return Object(a["a"])({url:"/fcs/task_manage/uav_task/ir_dect_result_page",method:"get",params:e})}function w(e){return Object(a["a"])({url:"/fcs/mandatory_exec_flight_mission",method:"post",data:e})}},fcc5:function(e,t,r){"use strict";r("c4bb")}}]);