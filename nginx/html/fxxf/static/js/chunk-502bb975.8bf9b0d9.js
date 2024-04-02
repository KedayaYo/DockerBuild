(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-502bb975","chunk-7d47f274","chunk-2d230c18","chunk-2d0b6974"],{"1e8b":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",attrs:{model:e.user,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"用户名称",prop:"userName"}},[r("el-input",{attrs:{maxlength:"30",disabled:""},model:{value:e.user.userName,callback:function(t){e.$set(e.user,"userName",t)},expression:"user.userName"}})],1),r("el-form-item",{attrs:{label:"手机号码",prop:"userMobile"}},[r("el-input",{attrs:{maxlength:"11"},model:{value:e.user.userMobile,callback:function(t){e.$set(e.user,"userMobile",t)},expression:"user.userMobile"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"userEmail"}},[r("el-input",{attrs:{maxlength:"50"},model:{value:e.user.userEmail,callback:function(t){e.$set(e.user,"userEmail",t)},expression:"user.userEmail"}})],1),r("el-form-item",{attrs:{label:"真实姓名",prop:"idcardName"}},[r("el-input",{attrs:{maxlength:"50"},model:{value:e.user.idcardName,callback:function(t){e.$set(e.user,"idcardName",t)},expression:"user.idcardName"}})],1),r("el-form-item",{attrs:{label:"身份证号",prop:"idcardNum"}},[r("el-input",{attrs:{maxlength:"50"},model:{value:e.user.idcardNum,callback:function(t){e.$set(e.user,"idcardNum",t)},expression:"user.idcardNum"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.submit}},[e._v("保存")]),r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:e.close}},[e._v("关闭")])],1)],1)},a=[],i=r("c0c7"),n={props:{user:{type:Object}},data:function(){return{rules:{userName:[{required:!0,message:"用户名称不能为空",trigger:"blur"}],userEmail:[{required:!0,message:"邮箱地址不能为空",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],userMobile:[{required:!0,message:"手机号码不能为空",trigger:"blur"},{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]}}},methods:{submit:function(){var e=this;this.$refs["form"].validate((function(t){if(t){var r={};r.userMobile=e.user.userMobile,r.userId=e.user.userId,r.userEmail=e.user.userEmail,r.idcardName=e.user.idcardName,r.isValid=e.user.isValid,r.idcardNum=e.user.idcardNum,console.log(r),Object(i["o"])(r).then((function(t){e.$modal.msgSuccess("修改成功")}))}}))},close:function(){this.$tab.closePage()}}},o=n,l=r("2877"),u=Object(l["a"])(o,s,a,!1,null,null,null);t["default"]=u.exports},"4c1b":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6,xs:24}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("个人信息")])]),r("div",[r("div",{staticClass:"text-center"},[r("userAvatar",{attrs:{user:e.user}})],1),r("ul",{staticClass:"list-group list-group-striped"},[r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"user"}}),e._v("用户名称 "),r("div",{staticClass:"pull-right"},[e._v(e._s(e.user.userName||"-"))])],1),r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"phone"}}),e._v("手机号码 "),r("div",{staticClass:"pull-right"},[e._v(e._s(e.user.userMobile||"-"))])],1),r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"email"}}),e._v("用户邮箱 "),r("div",{staticClass:"pull-right"},[e._v(e._s(e.user.userEmail||"-"))])],1),r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"peoples"}}),e._v("所属角色 "),r("div",{staticClass:"pull-right"},[e._v(e._s(e.roleName||"-"))])],1)])])])],1),r("el-col",{attrs:{span:18,xs:24}},[r("el-card",[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("基本资料")])]),r("el-tabs",{model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[r("el-tab-pane",{attrs:{label:"基本资料",name:"userinfo"}},[r("userInfo",{attrs:{user:e.user}})],1),r("el-tab-pane",{attrs:{label:"修改密码",name:"resetPwd"}},[r("resetPwd",{attrs:{userInfo:e.user}})],1)],1)],1)],1)],1)],1)},a=[],i=(r("d3b7"),r("159b"),r("b0c0"),r("9429")),n=r("1e8b"),o=r("ee46"),l=r("7ded"),u={name:"Profile",components:{userAvatar:i["default"],userInfo:n["default"],resetPwd:o["default"]},data:function(){return{user:{},roleGroup:{},postGroup:{},activeTab:"userinfo",roleName:""}},created:function(){this.getUser()},methods:{getUser:function(){var e=this,t=this;Object(l["c"])().then((function(r){t.user=r.data,t.roleName="",t.user.roles.forEach((function(r,s){t.roleName=0==s?r.name:e.name+","+r.name}))}))}}},c=u,d=r("2877"),p=Object(d["a"])(c,s,a,!1,null,null,null);t["default"]=p.exports},9429:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"user-info-head",on:{click:function(t){return e.editCropper()}}},[r("img",{staticClass:"img-circle img-lg",attrs:{src:e.options.img,title:"点击上传头像"}})]),r("el-dialog",{attrs:{title:e.title,visible:e.open,width:"800px","append-to-body":""},on:{"update:visible":function(t){e.open=t},opened:e.modalOpened,close:e.closeDialog}},[r("el-row",[r("el-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[e.visible?r("vue-cropper",{ref:"cropper",attrs:{img:e.options.img,info:!0,autoCrop:e.options.autoCrop,autoCropWidth:e.options.autoCropWidth,autoCropHeight:e.options.autoCropHeight,fixedBox:e.options.fixedBox,outputType:e.options.outputType},on:{realTime:e.realTime}}):e._e()],1),r("el-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[r("div",{staticClass:"avatar-upload-preview"},[r("img",{style:e.previews.img,attrs:{src:e.previews.url}})])])],1),r("br"),r("el-row",[r("el-col",{attrs:{lg:2,sm:3,xs:3}},[r("el-upload",{attrs:{action:"#","http-request":e.requestUpload,"show-file-list":!1,"before-upload":e.beforeUpload}},[r("el-button",{attrs:{size:"small"}},[e._v(" 选择 "),r("i",{staticClass:"el-icon-upload el-icon--right"})])],1)],1),r("el-col",{attrs:{lg:{span:1,offset:2},sm:2,xs:2}},[r("el-button",{attrs:{icon:"el-icon-plus",size:"small"},on:{click:function(t){return e.changeScale(1)}}})],1),r("el-col",{attrs:{lg:{span:1,offset:1},sm:2,xs:2}},[r("el-button",{attrs:{icon:"el-icon-minus",size:"small"},on:{click:function(t){return e.changeScale(-1)}}})],1),r("el-col",{attrs:{lg:{span:1,offset:1},sm:2,xs:2}},[r("el-button",{attrs:{icon:"el-icon-refresh-left",size:"small"},on:{click:function(t){return e.rotateLeft()}}})],1),r("el-col",{attrs:{lg:{span:1,offset:1},sm:2,xs:2}},[r("el-button",{attrs:{icon:"el-icon-refresh-right",size:"small"},on:{click:function(t){return e.rotateRight()}}})],1),r("el-col",{attrs:{lg:{span:2,offset:6},sm:2,xs:2}},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.uploadImg()}}},[e._v("提 交")])],1)],1)],1)],1)},a=[],i=r("4360"),n=r("7e79"),o=r("c0c7"),l=r("ed08"),u={components:{VueCropper:n["VueCropper"]},props:{user:{type:Object}},data:function(){return{open:!1,visible:!1,title:"修改头像",options:{img:i["a"].getters.avatar,autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedBox:!0,outputType:"png"},previews:{},resizeHandler:null}},methods:{editCropper:function(){this.open=!0},modalOpened:function(){var e=this;this.visible=!0,this.resizeHandler||(this.resizeHandler=Object(l["b"])((function(){e.refresh()}),100)),window.addEventListener("resize",this.resizeHandler)},refresh:function(){this.$refs.cropper.refresh()},requestUpload:function(){},rotateLeft:function(){this.$refs.cropper.rotateLeft()},rotateRight:function(){this.$refs.cropper.rotateRight()},changeScale:function(e){e=e||1,this.$refs.cropper.changeScale(e)},beforeUpload:function(e){var t=this;if(-1==e.type.indexOf("image/"))this.$modal.msgError("文件格式错误，请上传图片类型,如：JPG，PNG后缀的文件。");else{var r=new FileReader;r.readAsDataURL(e),r.onload=function(){t.options.img=r.result}}},uploadImg:function(){var e=this;this.$refs.cropper.getCropBlob((function(t){var r=new FormData;r.append("avatarfile",t),Object(o["q"])(r).then((function(t){e.open=!1,e.options.img=""+t.imgUrl,i["a"].commit("SET_AVATAR",e.options.img),e.$modal.msgSuccess("修改成功"),e.visible=!1}))}))},realTime:function(e){this.previews=e},closeDialog:function(){this.options.img=i["a"].getters.avatar,this.visible=!1,window.removeEventListener("resize",this.resizeHandler)}}},c=u,d=(r("f83f"),r("2877")),p=Object(d["a"])(c,s,a,!1,null,"1aec6248",null);t["default"]=p.exports},de81:function(e,t,r){},ed08:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"e",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return n})),r.d(t,"f",(function(){return o})),r.d(t,"d",(function(){return l}));r("53ca"),r("ac1f"),r("5319"),r("14d9"),r("a15b"),r("d81d"),r("b64b"),r("d3b7"),r("159b"),r("fb6a"),r("d9e2"),r("a630"),r("3ca3"),r("6062"),r("ddb0"),r("25f0"),r("466d"),r("4d63"),r("c607"),r("2c3e"),r("00b4"),r("c38a");function s(e,t,r){var s,a,i,n,o,l=function l(){var u=+new Date-n;u<t&&u>0?s=setTimeout(l,t-u):(s=null,r||(o=e.apply(i,a),s||(i=a=null)))};return function(){for(var a=arguments.length,u=new Array(a),c=0;c<a;c++)u[c]=arguments[c];i=this,n=+new Date;var d=r&&!s;return s||(s=setTimeout(l,t)),d&&(o=e.apply(i,u),i=u=null),o}}function a(e,t){for(var r=Object.create(null),s=e.split(","),a=0;a<s.length;a++)r[s[a]]=!0;return t?function(e){return r[e.toLowerCase()]}:function(e){return r[e]}}var i="export default ",n={html:{indent_size:"2",indent_char:" ",max_preserve_newlines:"-1",preserve_newlines:!1,keep_array_indentation:!1,break_chained_methods:!1,indent_scripts:"separate",brace_style:"end-expand",space_before_conditional:!0,unescape_strings:!1,jslint_happy:!1,end_with_newline:!0,wrap_line_length:"110",indent_inner_html:!0,comma_first:!1,e4x:!0,indent_empty_lines:!0},js:{indent_size:"2",indent_char:" ",max_preserve_newlines:"-1",preserve_newlines:!1,keep_array_indentation:!1,break_chained_methods:!1,indent_scripts:"normal",brace_style:"end-expand",space_before_conditional:!0,unescape_strings:!1,jslint_happy:!0,end_with_newline:!0,wrap_line_length:"110",indent_inner_html:!0,comma_first:!1,e4x:!0,indent_empty_lines:!0}};function o(e){return e.replace(/( |^)[a-z]/g,(function(e){return e.toUpperCase()}))}function l(e){return/^[+-]?(0|([1-9]\d*))(\.\d+)?$/g.test(e)}},ee46:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",attrs:{model:e.user,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"旧密码",prop:"oldPassword"}},[r("el-input",{attrs:{placeholder:"请输入旧密码",type:"password","show-password":""},model:{value:e.user.oldPassword,callback:function(t){e.$set(e.user,"oldPassword",t)},expression:"user.oldPassword"}})],1),r("el-form-item",{attrs:{label:"新密码",prop:"newPassword"}},[r("el-input",{attrs:{placeholder:"请输入新密码",type:"password","show-password":""},model:{value:e.user.newPassword,callback:function(t){e.$set(e.user,"newPassword",t)},expression:"user.newPassword"}})],1),r("el-form-item",{attrs:{label:"确认密码",prop:"confirmPassword"}},[r("el-input",{attrs:{placeholder:"请确认新密码",type:"password","show-password":""},model:{value:e.user.confirmPassword,callback:function(t){e.$set(e.user,"confirmPassword",t)},expression:"user.confirmPassword"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.submit}},[e._v("保存")]),r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:e.close}},[e._v("关闭")])],1)],1)},a=[],i=(r("d9e2"),r("c0c7")),n={props:{userInfo:{type:Object}},data:function(){var e=this,t=function(t,r,s){e.user.newPassword!==r?s(new Error("两次输入的密码不一致")):s()};return{user:{oldPassword:void 0,newPassword:void 0,confirmPassword:void 0},rules:{oldPassword:[{required:!0,message:"旧密码不能为空",trigger:"blur"}],newPassword:[{required:!0,message:"新密码不能为空",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}],confirmPassword:[{required:!0,message:"确认密码不能为空",trigger:"blur"},{required:!0,validator:t,trigger:"blur"}]}}},methods:{submit:function(){var e=this;this.$refs["form"].validate((function(t){t&&Object(i["p"])(e.user.oldPassword,e.user.newPassword,e.userInfo.userName).then((function(t){e.$modal.msgSuccess("修改成功")}))}))},close:function(){this.$tab.closePage()}}},o=n,l=r("2877"),u=Object(l["a"])(o,s,a,!1,null,null,null);t["default"]=u.exports},f83f:function(e,t,r){"use strict";r("de81")}}]);