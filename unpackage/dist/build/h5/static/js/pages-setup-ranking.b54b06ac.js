(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setup-ranking"],{"14d2":function(t,e,a){var i=a("cd92");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("18551401",i,!0,{sourceMap:!1,shadowMode:!1})},1679:function(t,e,a){"use strict";a.r(e);var i=a("4e34"),n=a("7017");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("8fb2");var s,o=a("f0c5"),u=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"088ba5b2",null,!1,i["a"],s);e["default"]=u.exports},"4e34":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uLoadmore:a("6c4f").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni_box ranking"},[a("v-uni-view",{staticClass:"title"},[a("v-uni-view",{staticClass:"code"},[t._v("排名")]),a("v-uni-view",{staticClass:"phone"},[t._v("手机号")]),a("v-uni-view",{staticClass:"number"},[t._v("邀请人数")])],1),a("v-uni-view",{staticClass:"list"},[t._l(t.list,(function(e,i){return a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"code"},[a("v-uni-view",{staticClass:"radio"}),a("v-uni-view",[t._v(t._s(i+1))])],1),e.user?a("v-uni-view",{staticClass:"phone"},[t._v(t._s(e.user.show_phone))]):t._e(),a("v-uni-view",{staticClass:"number"},[t._v(t._s(e.number))])],1)})),a("u-loadmore",{attrs:{status:t.status,loadText:t.$store.state.loadText},on:{loadmore:function(e){arguments[0]=e=t.$handleEvent(e),t.loadmore.apply(void 0,arguments)}}})],2)],1)},r=[]},7017:function(t,e,a){"use strict";a.r(e);var i=a("bb03"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"8fb2":function(t,e,a){"use strict";var i=a("14d2"),n=a.n(i);n.a},bb03:function(t,e,a){"use strict";var i=a("4ea4");a("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("2909"));a("96cf");var r=i(a("1da1")),s={data:function(){return{list:[],page:1,limit:10,last_page:1,status:"loadmore"}},onLoad:function(){this.getList()},onReachBottom:function(){this.triggerPage()},methods:{getList:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$u.api.ranking({page:t.page,limit:t.limit});case 2:a=e.sent,i=a.list,t.last_page=i.last_page,t.list=[].concat((0,n.default)(t.list),(0,n.default)(i.list)),t.last_page==t.page&&(t.status="nomore");case 7:case"end":return e.stop()}}),e)})))()},loadmore:function(){this.triggerPage()},triggerPage:function(){var t=this.page,e=this.last_page;t<e&&(this.page++,this.getList())},routerTo:function(t){uni.navigateTo({url:t})}}};e.default=s},cd92:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"*[data-v-088ba5b2]{font-family:Source Han Sans CN-Medium,Source Han Sans CN}.uni_box[data-v-088ba5b2]{width:100vw;min-height:100%;background:#f7f8fa}uni-image[data-v-088ba5b2]{pointer-events:none}.test[data-v-088ba5b2]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.ranking[data-v-088ba5b2]{padding:%?100?% %?40?% 0;box-sizing:border-box}.ranking .title[data-v-088ba5b2]{width:100%;height:%?100?%;line-height:%?100?%;color:#000;font-size:%?28?%;padding:0 %?40?%;box-sizing:border-box;display:flex;justify-content:space-between;position:fixed;left:0;top:var(--window-top);z-index:999;background:#f7f8fa}.ranking .title .code[data-v-088ba5b2],\n.ranking .title .number[data-v-088ba5b2]{flex:0 0 %?160?%;text-align:center}.ranking .title .phone[data-v-088ba5b2]{flex:1;text-align:center}.ranking .list .item[data-v-088ba5b2]{height:%?70?%;line-height:%?70?%;display:flex;justify-content:space-between}.ranking .list .item .code[data-v-088ba5b2]{flex:0 0 %?160?%;display:flex;align-items:center;justify-content:center}.ranking .list .item .code .radio[data-v-088ba5b2]{width:%?8?%;height:%?8?%;border-radius:50%;background-color:#000;margin-right:%?10?%}.ranking .list .item .phone[data-v-088ba5b2]{flex:1;text-align:center;font-weight:400;font-size:%?24?%;color:#000}.ranking .list .item .number[data-v-088ba5b2]{flex:0 0 %?160?%;text-align:center;font-weight:400;font-size:%?28?%;color:#aaa}",""]),t.exports=e}}]);