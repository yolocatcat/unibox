(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/order"],{2907:function(t,e,n){},"6f64":function(t,e,n){"use strict";n.r(e);var a=n("c7ce"),r=n("c7f2");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("c380");var o,s=n("f0c5"),u=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"1b824dfe",null,!1,a["a"],o);e["default"]=u.exports},7995:function(t,e,n){"use strict";(function(t){n("04da");a(n("66fd"));var e=a(n("6f64"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"7a47":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t){return c(t)||u(t)||s(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){if(t){if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function u(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function c(t){if(Array.isArray(t))return l(t)}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function f(t,e,n,a,r,i,o){try{var s=t[i](o),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(a,r)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var i=t.apply(e,n);function o(t){f(i,a,r,o,s,"next",t)}function s(t){f(i,a,r,o,s,"throw",t)}o(void 0)}))}}var p={data:function(){return{active:2,list:[],showList:[1,2],type:1,title:"",typeList:[],typeObj:{},page:1,limit:10,last_page:1,status:"loadmore"}},onShow:function(){this.getList()},onHide:function(){this.list=[],this.page=1,this.last_page=1,this.status="loadmore"},onReachBottom:function(){this.triggerPage()},methods:{getList:function(){var t=this;return d(a.default.mark((function e(){var n,r,o;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={page:t.page,limit:t.limit},n.pay_status=2!=t.active?t.active:"",e.next=4,t.$u.api.order(n);case 4:r=e.sent,o=r.list,t.last_page=o.last_page,o=o.list,t.list=1==t.page?o:[].concat(i(t.list),i(o)),t.last_page==t.page&&(t.status="nomore");case 10:case"end":return e.stop()}}),e)})))()},loadmore:function(){this.triggerPage()},triggerPage:function(){var t=this.page,e=this.last_page;t<e&&(this.page++,this.getList())},changeActive:function(t){this.active=t,this.list=[],this.page=1,this.last_page=1,this.status="loadmore",this.getList()},purchase:function(e){if(!(1!=e.type&&2!=e.type||1!=e.status&&1!=e.pay_status)){var n=2,a=e.blind_box_id,r=e.id;e.product&&(a=e.product_id,n=1);var i="/pages/setting/orderDeta?type=".concat(n,"&id=").concat(a,"&orderId=").concat(r,"&isBack=1");t.navigateTo({url:i})}},lockList:function(e){if(0==e.status&&0==e.pay_status){var n=e.id,a=e.product?1:2,r=e.product?e.product:e.blindbox,i=r.id,o="/pages/setting/lockList?type=".concat(a,"&id=").concat(i,"&orderId=").concat(n);t.navigateTo({url:o})}},cancelPayment:function(t){var e=this;return d(a.default.mark((function n(){var r;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.id,n.next=3,e.$u.api.orderCancel({id:r});case 3:n.sent,e.$u.toast("取消订单成功"),setTimeout((function(){e.list=[],e.page=1,e.last_page=1,e.status="loadmore",e.getList()}),1e3);case 6:case"end":return n.stop()}}),n)})))()}}};e.default=p}).call(this,n("543d")["default"])},c380:function(t,e,n){"use strict";var a=n("2907"),r=n.n(a);r.a},c7ce:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={uLoadmore:function(){return n.e("uview/components/u-loadmore/u-loadmore").then(n.bind(null,"6c4f"))}},r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.list,(function(e,n){var a=t.__get_orig(e),r=1==e.pay_status&&t.showList.includes(e.type),i=1==e.pay_status&&t.showList.includes(e.type),o=2==e.pay_status&&t.showList.includes(e.type);return{$orig:a,g0:r,g1:i,g2:o}})));t.$mp.data=Object.assign({},{$root:{l0:n}})},i=[]},c7f2:function(t,e,n){"use strict";n.r(e);var a=n("7a47"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a}},[["7995","common/runtime","common/vendor"]]]);