(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setup-exchange"],{1550:function(e,t,a){"use strict";a.r(t);var i=a("e209"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},"1adf":function(e,t,a){"use strict";var i=a("7958"),n=a.n(i);n.a},"6f55":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,"*[data-v-21f789be]{font-family:Source Han Sans CN-Medium,Source Han Sans CN}.uni_box[data-v-21f789be]{width:100vw;min-height:100%;background:#f7f8fa}uni-image[data-v-21f789be]{pointer-events:none}.test[data-v-21f789be]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.exchange .title[data-v-21f789be]{width:100%;height:%?204?%;border-bottom:1px solid #eee;padding:%?40?%;box-sizing:border-box;position:fixed;left:0;top:var(--window-top);z-index:999;background:#f7f8fa}.exchange .title .text[data-v-21f789be]{height:%?44?%;font-weight:400;font-size:%?28?%;color:#000}.exchange .title .code_input[data-v-21f789be]{width:100%;height:%?80?%;padding:0 %?25?%;box-sizing:border-box;border:1px solid #eee;border-radius:%?16?%}.exchange .list[data-v-21f789be]{min-height:100vh;padding:%?204?% %?40?% %?190?%;box-sizing:border-box}.exchange .list .item[data-v-21f789be]{padding:%?20?% 0;display:flex;justify-content:space-between}.exchange .list .item .item_text[data-v-21f789be]{font-size:%?28?%;color:#000}.exchange .list .item .item_time[data-v-21f789be]{font-weight:400;font-size:%?28?%;color:#aaa}.exchange .footer[data-v-21f789be]{width:100%;height:%?190?%;padding:%?20?% %?32?% 0 0;box-sizing:border-box;background:hsla(0,0%,100%,.9);-webkit-backdrop-filter:blur(%?24?%);backdrop-filter:blur(%?24?%);display:flex;justify-content:flex-end;position:fixed;left:0;bottom:0;z-index:2}.exchange .footer .footer_btn[data-v-21f789be]{width:%?184?%;height:%?80?%;line-height:%?80?%;text-align:center;color:#00cace;font-size:%?28?%;border-radius:%?16?%;background:#000}",""]),e.exports=t},7958:function(e,t,a){var i=a("6f55");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("ce493f6e",i,!0,{sourceMap:!1,shadowMode:!1})},"9ee6":function(e,t,a){"use strict";a.r(t);var i=a("f5cd"),n=a("1550");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("1adf");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"21f789be",null,!1,i["a"],r);t["default"]=c.exports},e209:function(e,t,a){"use strict";var i=a("4ea4");a("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("2909"));a("96cf");var o=i(a("1da1")),r={data:function(){return{code:"",list:[],page:1,limit:10,last_page:1,status:"loadmore"}},onLoad:function(){this.getList()},onReachBottom:function(){this.triggerPage()},methods:{getList:function(){var e=this;return(0,o.default)(regeneratorRuntime.mark((function t(){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$u.api.order({type:4,page:e.page,limit:e.limit});case 2:a=t.sent,i=a.list,e.list=[].concat((0,n.default)(e.list),(0,n.default)(i.list)),e.last_page=i.last_page,e.last_page==e.page&&(e.status="nomore");case 7:case"end":return t.stop()}}),t)})))()},loadmore:function(){this.triggerPage()},triggerPage:function(){var e=this.page,t=this.last_page;e<t&&(this.page++,this.getList())},exchange:function(){var e=this;return(0,o.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$u.api.exchange({code:e.code});case 2:t.sent,e.$u.toast("操作成功");case 4:case"end":return t.stop()}}),t)})))()}}};t.default=r},f5cd:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}));var i={uLoadmore:a("6c4f").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"uni_box exchange"},[a("v-uni-view",{staticClass:"title"},[a("v-uni-view",{staticClass:"text"},[e._v("兑换码")]),a("v-uni-input",{staticClass:"code_input",attrs:{type:"text",placeholder:"请输入兑换码"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),a("v-uni-view",{staticClass:"list"},[e._l(e.list,(function(t){return a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"item_text"},[e._v("通过兑换获得"+e._s(t.product.name)+"#"+e._s(t.product_number.number))]),a("v-uni-view",{staticClass:"item_time"},[e._v(e._s(t.created_at))])],1)})),a("u-loadmore",{attrs:{status:e.status,loadText:e.$store.state.loadText},on:{loadmore:function(t){arguments[0]=t=e.$handleEvent(t),e.loadmore.apply(void 0,arguments)}}})],2),a("v-uni-view",{staticClass:"footer"},[a("v-uni-view",{staticClass:"footer_btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.exchange.apply(void 0,arguments)}}},[e._v("兑换")])],1)],1)},o=[]}}]);