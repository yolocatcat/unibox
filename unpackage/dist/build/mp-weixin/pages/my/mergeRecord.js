(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/mergeRecord"],{"40df":function(t,e,n){"use strict";n.r(e);var r=n("9caa"),a=n("9ea1");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("51ac");var i,u=n("f0c5"),c=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"1259ff5b",null,!1,r["a"],i);e["default"]=c.exports},"51ac":function(t,e,n){"use strict";var r=n("fd2b"),a=n.n(r);a.a},"546b":function(t,e,n){"use strict";(function(t){n("04da");r(n("66fd"));var e=r(n("40df"));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"56f9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t){return f(t)||c(t)||u(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){if(t){if("string"===typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function c(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function f(t){if(Array.isArray(t))return s(t)}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(t,e,n,r,a,o,i){try{var u=t[o](i),c=u.value}catch(f){return void n(f)}u.done?e(c):Promise.resolve(c).then(r,a)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){l(o,r,a,i,u,"next",t)}function u(t){l(o,r,a,i,u,"throw",t)}i(void 0)}))}}var p={data:function(){return{list:[],page:1,limit:10,last_page:1,status:"loadmore"}},onLoad:function(){this.getList()},onReachBottom:function(){this.triggerPage()},methods:{getList:function(){var t=this;return d(r.default.mark((function e(){var n,a;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$u.api.composeMy({page:t.page,limit:t.limit});case 2:n=e.sent,a=n.list,t.list=[].concat(o(t.list),o(a.list)),t.last_page=a.last_page,t.last_page==t.page&&(t.status="nomore");case 7:case"end":return e.stop()}}),e)})))()},loadmore:function(){this.triggerPage()},triggerPage:function(){var t=this.page,e=this.last_page;t<e&&(this.page++,this.getList())}}};e.default=p},"9caa":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={uLoadmore:function(){return n.e("uview/components/u-loadmore/u-loadmore").then(n.bind(null,"6c4f"))}},a=function(){var t=this,e=t.$createElement;t._self._c},o=[]},"9ea1":function(t,e,n){"use strict";n.r(e);var r=n("56f9"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},fd2b:function(t,e,n){}},[["546b","common/runtime","common/vendor"]]]);