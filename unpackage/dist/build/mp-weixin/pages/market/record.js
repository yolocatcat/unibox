(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/market/record"],{"0aef":function(t,n,e){},1273:function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}));var u=function(){var t=this,n=t.$createElement;t._self._c},a=[]},3250:function(t,n,e){"use strict";var r=e("0aef"),u=e.n(r);u.a},"36db":function(t,n,e){"use strict";(function(t){e("04da");r(e("66fd"));var n=r(e("5462"));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},5462:function(t,n,e){"use strict";e.r(n);var r=e("1273"),u=e("ef5d");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e("3250");var c,o=e("f0c5"),i=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,"6c1ec682",null,!1,r["a"],c);n["default"]=i.exports},8920:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(e("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t,n,e,r,u,a,c){try{var o=t[a](c),i=o.value}catch(f){return void e(f)}o.done?n(i):Promise.resolve(i).then(r,u)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(r,u){var c=t.apply(n,e);function o(t){a(c,r,u,o,i,"next",t)}function i(t){a(c,r,u,o,i,"throw",t)}o(void 0)}))}}var o={data:function(){return{list:[]}},onLoad:function(t){var n=this;return c(r.default.mark((function e(){var u,a;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$u.api.orderSellOld({id:t.id});case 2:u=e.sent,a=u.data,n.list=a;case 5:case"end":return e.stop()}}),e)})))()},methods:{}};n.default=o},ef5d:function(t,n,e){"use strict";e.r(n);var r=e("8920"),u=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=u.a}},[["36db","common/runtime","common/vendor"]]]);