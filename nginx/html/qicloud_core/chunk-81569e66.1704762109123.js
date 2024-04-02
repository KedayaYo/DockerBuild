(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81569e66"],{"19cf":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"computer-list-wrap has-padding"},[t("el-card",[t("el-title",{attrs:{slot:"header"},slot:"header"},[e._v(" 边缘计算机 ")]),t("el-form",{attrs:{size:"small",model:e.query,inline:!0},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",[t("el-input",{attrs:{clearable:"",placeholder:"请输入机身号"},model:{value:e.query.sn,callback:function(t){e.$set(e.query,"sn",t)},expression:"query.sn"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleQuery}},[e._v(" 查询 ")])],1),t("el-form-item",{directives:[{name:"permission",rawName:"v-permission",value:"computer/computer/add",expression:"'computer/computer/add'"}],staticClass:"float-right"},[t("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:function(t){e.dialogVisible=!0}}},[e._v(" 新建 ")])],1)],1),t("el-table",{attrs:{data:e.computerList,"header-cell-style":e.headStyle,"row-class-name":e.tableRowClassName,"cell-style":e.rowStyle,height:"100px"}},[t("template",{slot:"empty"},[t("NoResult",{attrs:{"has-margin":!1}})],1),t("el-table-column",{attrs:{label:"序号",type:"index",width:"60"}}),t("el-table-column",{attrs:{label:"机身号(SN)",prop:"ECID"}}),t("el-table-column",{attrs:{label:"型号",prop:"model",width:"80"}}),t("el-table-column",{attrs:{label:"制造商",prop:"brand"}}),t("el-table-column",{attrs:{label:"物理（mac）地址",prop:"mac",width:"140"}}),t("el-table-column",{attrs:{label:"IP地址",prop:"ipAddr",width:"140"}}),t("el-table-column",{attrs:{label:"无人机编号",prop:"UAVID",width:"160"}}),t("el-table-column",{attrs:{label:"创建时间",prop:"createTime",width:"180"}}),t("el-table-column",{attrs:{label:"创建人",prop:"createUser"}}),t("el-table-column",{attrs:{label:"更新时间",prop:"updateTime",width:"180"}}),t("el-table-column",{attrs:{label:"更新人",prop:"updateUser"}}),t("el-table-column",{attrs:{label:"状态时间",prop:"lastOnlineTime"}}),t("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"computer/computer/update",expression:"'computer/computer/update'"}],staticClass:"el-icon-edit",attrs:{type:"text"},on:{click:function(t){return e.handleEdit(a.row)}}},[e._v(" 修改 ")]),t("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"computer/computer/delete",expression:"'computer/computer/delete'"}],staticClass:"el-icon-delete sky-danger",attrs:{type:"text"},on:{click:function(t){return e.handleRemove(a.row)}}},[e._v(" 删除 ")]),t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleEdit(a.row,!0)}}},[e._v(" 详情 "),t("i",{staticClass:"el-icon-search"})])]}}])})],2),t("el-row",{staticClass:"sorter-wrap"},[t("el-pagination",{staticClass:"x-pagination float-right",attrs:{background:"",layout:"total, prev, pager, next, jumper","page-size":e.tableConfig.size,total:e.tableConfig.total},on:{"current-change":e.handleChangeCPage}})],1)],1),t("el-dialog",{staticClass:"protective-line",attrs:{center:"",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t},close:function(t){return e.handleClose("OnboarComputer")},open:e.handleOpen}},[t("el-title",{attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(e.isEdit?e.disabled?"详情":"编辑":"新建")+" ")]),t("el-form",{ref:"OnboarComputer",attrs:{disabled:e.disabled,"label-position":"right","label-width":"120px",size:"small",rules:e.rules,model:e.onboardComputerDetails}},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"名称",prop:"EName"}},[t("el-input",{attrs:{placeholder:"请填写名称"},model:{value:e.onboardComputerDetails.EName,callback:function(t){e.$set(e.onboardComputerDetails,"EName",t)},expression:"onboardComputerDetails.EName"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"序列号",prop:"ECID"}},[t("el-input",{attrs:{placeholder:"请填写序列号"},model:{value:e.onboardComputerDetails.ECID,callback:function(t){e.$set(e.onboardComputerDetails,"ECID",t)},expression:"onboardComputerDetails.ECID"}})],1)],1)],1),t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"IP地址"}},[t("el-input",{attrs:{placeholder:"请填写IP地址"},model:{value:e.onboardComputerDetails.ipAddr,callback:function(t){e.$set(e.onboardComputerDetails,"ipAddr",t)},expression:"onboardComputerDetails.ipAddr"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"物理(mac)地址",prop:"mac"}},[t("el-input",{attrs:{placeholder:"请填写mac地址"},model:{value:e.onboardComputerDetails.mac,callback:function(t){e.$set(e.onboardComputerDetails,"mac",t)},expression:"onboardComputerDetails.mac"}})],1)],1)],1),t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"型号",prop:"model"}},[e._e(),t("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择型号"},model:{value:e.onboardComputerDetails.model,callback:function(t){e.$set(e.onboardComputerDetails,"model",t)},expression:"onboardComputerDetails.model"}},e._l(e.models,(function(e){return t("el-option",{key:e.label,attrs:{value:e.value,label:e.label}})})),1)],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"制造商",prop:"brand"}},[t("el-input",{attrs:{placeholder:"请填写制造商"},model:{value:e.onboardComputerDetails.brand,callback:function(t){e.$set(e.onboardComputerDetails,"brand",t)},expression:"onboardComputerDetails.brand"}})],1)],1)],1),t("el-form-item",{attrs:{label:"操作系统",prop:"system"}},[t("el-select",{staticStyle:{width:"100%"},model:{value:e.onboardComputerDetails.system,callback:function(t){e.$set(e.onboardComputerDetails,"system",t)},expression:"onboardComputerDetails.system"}},e._l(e.systems,(function(e){return t("el-option",{key:e.label,attrs:{value:e.value,label:e.label}})})),1)],1),t("el-form-item",{attrs:{label:"备注"}},[t("el-input",{attrs:{type:"textarea",maxlength:"200","show-word-limit":""},model:{value:e.onboardComputerDetails.context,callback:function(t){e.$set(e.onboardComputerDetails,"context",t)},expression:"onboardComputerDetails.context"}})],1)],1),t("span",{attrs:{slot:"footer"},slot:"footer"},[e.disabled?e._e():t("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:function(t){return e.submit("OnboarComputer")}}},[e._v(" 确 定 ")]),t("el-button",{attrs:{size:"small",icon:"el-icon-circle-close","el-icon-circle-close":""},on:{click:function(t){e.dialogVisible=!1}}},[e._v(" 取消 ")])],1)],1)],1)},r=[],s=(a("d9e2"),a("514b")),o={name:"Computer",data(){const e=(e,t,a)=>{const l=/^((([a-f0-9]{2}:){5})|(([a-f0-9]{2}-){5}))[a-f0-9]{2}$/i;""===t?a(new Error("请输入mac物理地址")):l.test(t)?a():a(new Error("物理地址格式错误"))},t=(e,t,a)=>{const l=/^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/;""===t?a(new Error("请输入IP地址")):l.test(t)?a():a(new Error("IP地址格式错误,例：127.0.0.1"))};return{disabled:!1,dialogVisible:!1,isEdit:!1,computerList:[],uavs:[],systems:[{value:"windows",label:"windows"},{value:"android",label:"android"},{value:"linux",label:"linux"}],models:[{value:"天枢",label:"天枢"},{value:"遥控器",label:"遥控器"}],states:[{value:1,label:"库存"},{value:2,label:"使用中"},{value:3,label:"报废"}],query:{sn:""},tableConfig:{total:0,page:1,size:20},onboardComputerDetails:{},rules:{EName:[{required:!0,message:"请填写设备名称",trigger:"blur"}],CPID:[{required:!0,message:"请选择企业",trigger:"change"}],ECID:[{required:!0,message:"请输入设备机身（SN）号",trigger:"blur"},{min:10,max:30,message:"长度在 10 到 30 个字符",trigger:"blur"}],brand:[{required:!0,message:"请输入制造商",trigger:"blur"},{min:2,max:15,message:"长度在 2 到 15 个字符",trigger:"blur"}],model:[{required:!0,message:"请选择设备型号",trigger:"change"}],mac:[{required:!0,validator:e,trigger:"blur"}],ipAddr:[{required:!0,validator:t,trigger:"blur"}],state:[{required:!0,message:"请选择状态",trigger:"change"}],system:[{required:!0,message:"请选择操作系统",trigger:"change"}],UAVID:[{required:!0,message:"请选择无人机",trigger:"change"}]}}},created(){this.getComputerList(1,13),this.getDroneList()},methods:{headStyle(){return"text-align:center;background:#F4F7FD"},rowStyle(){return"text-align:center"},tableRowClassName({rowIndex:e}){return e%2===0?"even-number":"uneven-number"},handleChangeCPage(e){this.tableConfig.page=e;const{page:t,size:a}=this.tableConfig;this.getComputerList(t,a)},handleQuery(){const{sn:e}=this.query;this.tableConfig.page=1,this.tableConfig.size=13,this.getComputerList(1,13,e)},handleEdit(e,t){this.disabled=t,this.isEdit=!0,this.onboardComputerDetails=this.$deepClone(e),this.dialogVisible=!0},handleRemove({ECID:e}){this.$confirm("删除边缘计算机, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{const{code:t,reason:a}=await this.$store.dispatch("computer/cancelComputer",{ECID:e});return Object(s["a"])(t)?(this.getComputerList(1,13),this.$message({type:"success",message:"删除成功!"}),""):this.$message.error("删除失败:"+a)}).catch(()=>{this.$message({type:"info",message:"已取消删除"})})},handleClose(e="OnboarComputer"){this.isEdit=!1,this.onboardComputerDetails={},this.resetForm(e)},handleOpen(){},submit(e){this.$refs[e].validate(async e=>{if(console.log(this.onboardComputerDetails),e){const{code:e,reason:t}=await this.$store.dispatch("computer/"+(this.isEdit?"editComputer":"writeOnboardComputer"),this.onboardComputerDetails);if(!Object(s["a"])(e))return this.$message.error("操作失败："+t);this.$message.success("操作成功"),this.dialogVisible=!1,this.getComputerList(1,13)}})},resetForm(e){this.$refs[e].resetFields()},async getDroneList(){const{code:e,data:t,reason:a}=await this.$store.dispatch("uav/getDroneList",{page:1,size:500});if(!Object(s["a"])(e))return this.$message("请求失败："+a);const{list:l}=t;return this.uavs=l,l},async getComputerList(e,t,a=""){const{code:l,data:r,reason:o}=await this.$store.dispatch("computer/getComputerList",{page:e,size:t,ECID:a});if(!Object(s["a"])(l))return this.$message("请求失败："+o);const{list:i,total:n}=r;return this.computerList=i,this.tableConfig.total=void 0===n?this.tableConfig.total:n||0,i}}},i=o,n=(a("4e52"),a("2877")),u=Object(n["a"])(i,l,r,!1,null,"252be417",null);t["default"]=u.exports},"4e52":function(e,t,a){"use strict";a("b1f0")},b1f0:function(e,t,a){}}]);
//# sourceMappingURL=chunk-81569e66.1704762109123.js.map