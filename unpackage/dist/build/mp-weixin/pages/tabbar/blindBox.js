(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/blindBox"],{"06d6":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t){return s(t)||c(t)||u(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){if(t){if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function c(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t){if(Array.isArray(t))return l(t)}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e,n,r,a,i,o){try{var u=t[i](o),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,a)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){f(i,r,a,o,u,"next",t)}function u(t){f(i,r,a,o,u,"throw",t)}o(void 0)}))}}var p={data:function(){return{swiperList:[],list:[],page:1,last_page:1,limit:10,status:"loadmore",timer:null}},onShow:function(){this.getList()},onHide:function(){this.list=[],this.page=1,this.last_page=1,this.status="loadmore",clearInterval(this.timer)},onUnload:function(){clearInterval(this.timer)},onReachBottom:function(){this.triggerPage()},methods:{handerTime:function(){var t=this.list,e=(new Date).getTime();t.forEach((function(t){if(0==t.status){var n=t.start_date;n=new Date(n.replace(/-/g,"/"));var r=new Date(n).getTime();if(e>=r)t.status=1;else{var a=r-e,i=parseInt(a/1e3/60/60);i=i<10?"0"+i:i;var o=parseInt(a/1e3/60%60);o=o<10?"0"+o:o;var u=parseInt(a/1e3%60);u=u<10?"0"+u:u,t.timer="".concat(i,":").concat(o,":").concat(u)}}}))},getList:function(){var t=this;return d(r.default.mark((function e(){var n,a,o;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$u.api.blindboxList({page:t.page,limit:t.limit});case 2:n=e.sent,a=n.list,o=n.position,t.last_page=a.last_page,a=a.list,a.forEach((function(t){t.timer=""})),t.list=1==t.page?a:[].concat(i(t.list),i(a)),t.last_page==t.page&&(t.status="nomore"),clearInterval(t.timer),t.handerTime(),t.timer=setInterval(t.handerTime,1e3),o.forEach((function(t){t.image=t.img})),t.swiperList=o;case 15:case"end":return e.stop()}}),e)})))()},loadmore:function(){this.triggerPage()},triggerPage:function(){var t=this.page,e=this.last_page;t<e&&(this.page++,this.getList())},routerTo:function(e){var n="/pages/blindBox/blindBoxDeta?id=".concat(e);t.navigateTo({url:n})}}};e.default=p}).call(this,n("543d")["default"])},"3b18":function(t,e,n){"use strict";n.r(e);var r=n("7ad9"),a=n("54f3");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("8045");var o,u=n("f0c5"),c=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"298a02fc",null,!1,r["a"],o);e["default"]=c.exports},"54f3":function(t,e,n){"use strict";n.r(e);var r=n("06d6"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},"7ad9":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={uSwiper:function(){return n.e("uview/components/u-swiper/u-swiper").then(n.bind(null,"8bb4"))},uLoadmore:function(){return n.e("uview/components/u-loadmore/u-loadmore").then(n.bind(null,"6c4f"))}},a=function(){var t=this,e=t.$createElement;t._self._c},i=[]},8045:function(t,e,n){"use strict";var r=n("8911"),a=n.n(r);a.a},8911:function(t,e,n){},cb7f:function(t,e,n){"use strict";(function(t){n("04da");r(n("66fd"));var e=r(n("3b18"));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])}},[["cb7f","common/runtime","common/vendor"]]]);