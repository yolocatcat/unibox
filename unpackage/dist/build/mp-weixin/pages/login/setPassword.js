(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/setPassword"],{"019d":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t,n,e,r,a,o,u){try{var s=t[o](u),i=s.value}catch(c){return void e(c)}s.done?n(i):Promise.resolve(i).then(r,a)}function u(t){return function(){var n=this,e=arguments;return new Promise((function(r,a){var u=t.apply(n,e);function s(t){o(u,r,a,s,i,"next",t)}function i(t){o(u,r,a,s,i,"throw",t)}s(void 0)}))}}var s={data:function(){return{is:!1,old_password:"",password:"",confirm_password:""}},onLoad:function(t){this.is=t.is},methods:{setPassword:function(){var n=this;return u(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$u.api.setPassword({old_password:n.old_password,password:n.password,confirm_password:n.confirm_password});case 2:e.sent,n.$u.toast("登录密码设置成功"),setTimeout((function(){t.redirectTo({url:"/pages/login/setLock?is=1"})}),1e3);case 5:case"end":return e.stop()}}),e)})))()}}};n.default=s}).call(this,e("543d")["default"])},"01a4":function(t,n,e){"use strict";e.r(n);var r=e("73e8"),a=e("3291");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("6d5f");var u,s=e("f0c5"),i=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"91e179ac",null,!1,r["a"],u);n["default"]=i.exports},3291:function(t,n,e){"use strict";e.r(n);var r=e("019d"),a=e.n(r);for(var o in r)"default"!==o&&function(t){e.d(n,t,(function(){return r[t]}))}(o);n["default"]=a.a},"6d5f":function(t,n,e){"use strict";var r=e("e5ea"),a=e.n(r);a.a},"73e8":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return r}));var a=function(){var t=this,n=t.$createElement;t._self._c},o=[]},a417:function(t,n,e){"use strict";(function(t){e("04da");r(e("66fd"));var n=r(e("01a4"));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},e5ea:function(t,n,e){}},[["a417","common/runtime","common/vendor"]]]);