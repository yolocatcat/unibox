(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/nickname"],{"0ec4":function(t,e,n){"use strict";n.r(e);var a=n("b5d6"),r=n("6f9e");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("7895");var u,c=n("f0c5"),o=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"3721a784",null,!1,a["a"],u);e["default"]=o.exports},2372:function(t,e,n){"use strict";(function(t){n("04da");a(n("66fd"));var e=a(n("0ec4"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"6f9e":function(t,e,n){"use strict";n.r(e);var a=n("cf9a"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},7895:function(t,e,n){"use strict";var a=n("fcd6"),r=n.n(a);r.a},b5d6:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement;t._self._c},i=[]},cf9a:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("a34a")),r=n("d8db");function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,a,r,i,u){try{var c=t[i](u),o=c.value}catch(s){return void n(s)}c.done?e(o):Promise.resolve(o).then(a,r)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var i=t.apply(e,n);function c(t){u(i,a,r,c,o,"next",t)}function o(t){u(i,a,r,c,o,"throw",t)}c(void 0)}))}}var o={data:function(){return{action:r.baseUrl+"/upload",nickname:"",head_portrait:"",isClick:!1}},onLoad:function(){this.nickname=this.$store.state.info.nickname,this.head_portrait=this.$store.state.info.head_portrait},methods:{upload:function(){var e=this;t.chooseImage({count:1,success:function(t){var n=t.tempFilePaths;e.head_portrait=n[0],e.isClick=!0}})},userEdit:function(e){var n=this;return c(a.default.mark((function r(){var i;return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i={nickname:n.nickname},e&&(i.head_portrait=e),a.next=4,n.$u.api.userEdit(i);case 4:a.sent,n.$store.commit("changeNickname",i),n.$u.toast("修改成功"),setTimeout((function(){t.switchTab({url:"/pages/tabbar/my"})}),1e3);case 8:case"end":return a.stop()}}),r)})))()},uploadImage:function(){var e=this;t.uploadFile({url:r.baseUrl+"/upload",filePath:this.head_portrait,name:"file",header:{ApiToken:t.getStorageSync("token")},success:function(){var t=c(a.default.mark((function t(n){var r,i,u,c,o;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=JSON.parse(n.data),i=r.code,u=r.data,c=r.msg,0==i?(o=u.src,e.userEdit(o)):vm.$u.toast(c);case 2:case"end":return t.stop()}}),t)})));function n(e){return t.apply(this,arguments)}return n}()})},onSubmit:function(){this.isClick?this.uploadImage():this.userEdit()}}};e.default=o}).call(this,n("543d")["default"])},fcd6:function(t,e,n){}},[["2372","common/runtime","common/vendor"]]]);