(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/setup/about"],{"00b9":function(n,t,e){"use strict";var u=e("7203"),r=e.n(u);r.a},"123f":function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return u}));var u={uParse:function(){return Promise.all([e.e("common/vendor"),e.e("uview/components/u-parse/u-parse")]).then(e.bind(null,"366e"))}},r=function(){var n=this,t=n.$createElement;n._self._c},a=[]},"19af":function(n,t,e){"use strict";(function(n){e("04da");u(e("66fd"));var t=u(e("1e8b"));function u(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])},"1e8b":function(n,t,e){"use strict";e.r(t);var u=e("123f"),r=e("45de");for(var a in r)"default"!==a&&function(n){e.d(t,n,(function(){return r[n]}))}(a);e("00b9");var o,c=e("f0c5"),i=Object(c["a"])(r["default"],u["b"],u["c"],!1,null,"71c9348a",null,!1,u["a"],o);t["default"]=i.exports},"45de":function(n,t,e){"use strict";e.r(t);var u=e("c6f9"),r=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,(function(){return u[n]}))}(a);t["default"]=r.a},7203:function(n,t,e){},c6f9:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(e("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function a(n,t,e,u,r,a,o){try{var c=n[a](o),i=c.value}catch(f){return void e(f)}c.done?t(i):Promise.resolve(i).then(u,r)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(u,r){var o=n.apply(t,e);function c(n){a(o,u,r,c,i,"next",n)}function i(n){a(o,u,r,c,i,"throw",n)}c(void 0)}))}}var c={data:function(){return{content:"",style:{img:"width:max-width:100%;height:auto"}}},onLoad:function(n){var t=this;return o(u.default.mark((function n(){var e,r,a;return u.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$u.api.setting({key:"about"});case 2:e=n.sent,r=e.setting,a=r,t.content=null===a||void 0===a?void 0:a.content;case 6:case"end":return n.stop()}}),n)})))()}};t.default=c}},[["19af","common/runtime","common/vendor"]]]);