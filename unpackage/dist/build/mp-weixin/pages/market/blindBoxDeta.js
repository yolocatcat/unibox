(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/market/blindBoxDeta"],{4875:function(n,t,e){"use strict";var r=e("ec5d"),a=e.n(r);a.a},"48ff":function(n,t,e){"use strict";(function(n){e("04da");r(e("66fd"));var t=r(e("a04f"));function r(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])},"6a58":function(n,t,e){"use strict";e.r(t);var r=e("7983"),a=e.n(r);for(var i in r)"default"!==i&&function(n){e.d(t,n,(function(){return r[n]}))}(i);t["default"]=a.a},7983:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(e("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function i(n,t,e,r,a,i,o){try{var u=n[i](o),c=u.value}catch(d){return void e(d)}u.done?t(c):Promise.resolve(c).then(r,a)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var o=n.apply(t,e);function u(n){i(o,r,a,u,c,"next",n)}function c(n){i(o,r,a,u,c,"throw",n)}u(void 0)}))}}var u={data:function(){return{list:[],id:null,cover:"",name:"",code:"",nickname:"",avata:null,price:"",content:"",notice:""}},onLoad:function(n){this.id=n.id,this.orderInfo()},methods:{backTo:function(t){n.navigateBack()},orderInfo:function(){var n=this;return o(r.default.mark((function t(){var e,a,i,o,u,c,d,f;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.$u.api.orderInfo({id:n.id});case 2:i=t.sent,o=i.order,u=i.blind_box_product,i.avata,c=o.blindbox,n.cover=c.cover,n.name=c.name,n.price=c.price,n.content=c.content,d=null===c||void 0===c||null===(e=c.content)||void 0===e?void 0:e.replace(/<img/gi,'<img style="max-width:100%;height:auto"'),n.content=d,f=null===c||void 0===c||null===(a=c.notice)||void 0===a?void 0:a.replace(/<img/gi,'<img style="max-width:100%;height:auto"'),n.notice=f,n.nickname=o.user.nickname,n.code=o.product_number.number,n.list=u;case 18:case"end":return t.stop()}}),t)})))()},routerTo:function(){var t="/pages/market/marketBuy?type=2&id=".concat(this.id);n.navigateTo({url:t})}}};t.default=u}).call(this,e("543d")["default"])},a04f:function(n,t,e){"use strict";e.r(t);var r=e("f0ab"),a=e("6a58");for(var i in a)"default"!==i&&function(n){e.d(t,n,(function(){return a[n]}))}(i);e("4875");var o,u=e("f0c5"),c=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"56630c9c",null,!1,r["a"],o);t["default"]=c.exports},ec5d:function(n,t,e){},f0ab:function(n,t,e){"use strict";var r;e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return r}));var a=function(){var n=this,t=n.$createElement;n._self._c},i=[]}},[["48ff","common/runtime","common/vendor"]]]);