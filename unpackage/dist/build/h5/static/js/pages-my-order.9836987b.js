(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-order"],{"14bf":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"*[data-v-46cd8814]{font-family:Source Han Sans CN-Medium,Source Han Sans CN}.uni_box[data-v-46cd8814]{width:100vw;min-height:100%;background:#f7f8fa}uni-image[data-v-46cd8814]{pointer-events:none}.test[data-v-46cd8814]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.order[data-v-46cd8814]{padding:%?64?% 0}.order .title[data-v-46cd8814]{width:100%;height:%?64?%;line-height:%?64?%;display:flex;justify-content:space-between;position:fixed;left:0;top:var(--window-top);z-index:999;background:#f7f8fa}.order .title .item[data-v-46cd8814]{flex:1;text-align:center;color:#000;font-size:%?24?%;font-weight:400}.order .title .item.active[data-v-46cd8814]{color:#14eaf0}.order .list[data-v-46cd8814]{padding:%?30?% %?30?% 0;box-sizing:border-box;overflow:hidden}.order .list .item[data-v-46cd8814]{display:flex;height:%?120?%;margin-bottom:%?40?%}.order .list .item .item_img[data-v-46cd8814]{width:%?120?%;height:%?120?%;border-radius:%?12?%}.order .list .item .desc[data-v-46cd8814]{flex:1;width:0;display:flex;flex-direction:column;justify-content:space-between;margin-left:%?30?%;box-sizing:border-box}.order .list .item .desc .name[data-v-46cd8814]{height:%?40?%;line-height:%?40?%;font-size:%?30?%;color:#000;display:flex;justify-content:space-between;align-items:center}.order .list .item .desc .name uni-image[data-v-46cd8814]{width:%?48?%;height:%?48?%}.order .list .item .desc .status[data-v-46cd8814]{width:%?120?%;height:%?40?%;border-radius:%?10?%;color:#00cace;font-size:%?20?%;border:1px solid #00cace;display:flex;justify-content:center;align-items:center}.order .list .item .desc .status.cancel[data-v-46cd8814]{color:red;border:1px solid red}.order .list .item .desc .status_text[data-v-46cd8814]{width:100%;height:%?40?%;color:#00cace;font-size:%?20?%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.order .list .item .desc .time[data-v-46cd8814]{height:%?40?%;line-height:%?40?%;display:flex;justify-content:space-between;align-items:center}.order .list .item .desc .time .text[data-v-46cd8814]{color:#333;font-size:%?24?%;font-weight:400}.order .list .item .desc .time .btn[data-v-46cd8814]{display:flex;justify-content:flex-end}.order .list .item .desc .time .btn uni-view[data-v-46cd8814]{width:%?120?%;height:%?40?%;color:#00cace;font-size:%?20?%;font-weight:500;border-radius:%?10?%;margin-right:%?5?%;box-sizing:initial;display:flex;justify-content:center;align-items:center}.order .list .item .desc .time .btn .payment_btn[data-v-46cd8814]{border:1px solid #00cace}.order .list .item .desc .time .btn .cancel_btn[data-v-46cd8814]{background:#000;border:1px solid #000}",""]),t.exports=e},4645:function(t,e,i){"use strict";var a=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(i("2909"));i("96cf");var n=a(i("1da1")),c={data:function(){return{active:2,list:[],showList:[1,2],type:1,title:"",typeList:[],typeObj:{},page:1,limit:10,last_page:1,status:"loadmore"}},onShow:function(){this.getList()},onHide:function(){this.list=[],this.page=1,this.last_page=1,this.status="loadmore"},onReachBottom:function(){this.triggerPage()},methods:{getList:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={page:t.page,limit:t.limit},i.pay_status=2!=t.active?t.active:"",e.next=4,t.$u.api.order(i);case 4:a=e.sent,n=a.list,t.last_page=n.last_page,n=n.list,t.list=1==t.page?n:[].concat((0,s.default)(t.list),(0,s.default)(n)),t.last_page==t.page&&(t.status="nomore");case 10:case"end":return e.stop()}}),e)})))()},loadmore:function(){this.triggerPage()},triggerPage:function(){var t=this.page,e=this.last_page;t<e&&(this.page++,this.getList())},changeActive:function(t){this.active=t,this.list=[],this.page=1,this.last_page=1,this.status="loadmore",this.getList()},purchase:function(t){if(!(1!=t.type&&2!=t.type||1!=t.status&&1!=t.pay_status)){var e=2,i=t.blind_box_id,a=t.id;t.product&&(i=t.product_id,e=1);var s="/pages/setting/orderDeta?type=".concat(e,"&id=").concat(i,"&orderId=").concat(a,"&isBack=1");uni.navigateTo({url:s})}},lockList:function(t){if(0==t.status&&0==t.pay_status){var e=t.id,i=t.product?1:2,a=t.product?t.product:t.blindbox,s=a.id,n="/pages/setting/lockList?type=".concat(i,"&id=").concat(s,"&orderId=").concat(e);uni.navigateTo({url:n})}},cancelPayment:function(t){var e=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=t.id,i.next=3,e.$u.api.orderCancel({id:a});case 3:i.sent,e.$u.toast("取消订单成功"),setTimeout((function(){e.list=[],e.page=1,e.last_page=1,e.status="loadmore",e.getList()}),1e3);case 6:case"end":return i.stop()}}),i)})))()}}};e.default=c},5366:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var a={uLoadmore:i("6c4f").default},s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni_box order"},[a("v-uni-view",{staticClass:"title"},[a("v-uni-view",{staticClass:"item",class:[2==t.active?"active":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeActive(2)}}},[t._v("全部")]),a("v-uni-view",{staticClass:"item",class:[0==t.active?"active":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeActive(0)}}},[t._v("进行中")]),a("v-uni-view",{staticClass:"item",class:[1==t.active?"active":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeActive(1)}}},[t._v("已完成")])],1),a("v-uni-view",{staticClass:"list"},[t._l(t.list,(function(e,s){return a("v-uni-view",{staticClass:"item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.purchase(e)}}},[e.product?a("v-uni-image",{staticClass:"item_img",attrs:{src:e.product.cover}}):a("v-uni-image",{staticClass:"item_img",attrs:{src:e.blindbox.cover}}),a("v-uni-view",{staticClass:"desc"},[a("v-uni-view",{staticClass:"name"},[a("v-uni-view",[t._v(t._s(e.type_name)),e.product?a("v-uni-text",[t._v(t._s(e.product.name))]):a("v-uni-text",[t._v(t._s(e.blindbox.name))]),e.product_number?a("v-uni-text",[t._v("#"+t._s(e.product_number.number))]):t._e()],1),1==e.pay_status&&t.showList.includes(e.type)?a("v-uni-image",{staticClass:"item_img",attrs:{src:i("a165")}}):t._e()],1),1==e.pay_status&&t.showList.includes(e.type)?a("v-uni-view",{staticClass:"status"},[t._v("已支付")]):t._e(),2==e.pay_status&&t.showList.includes(e.type)?a("v-uni-view",{staticClass:"status cancel"},[t._v("已取消")]):t._e(),3==e.type||10==e.type?a("v-uni-view",{staticClass:"status_text"},[t._v(t._s(e.remarks)),e.product_number?a("v-uni-text",[t._v("#"+t._s(e.product_number.number))]):t._e()],1):t._e(),a("v-uni-view",{staticClass:"time"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(e.created_at))]),a("v-uni-view",{staticClass:"btn"},[0==e.status&&0==e.pay_status?a("v-uni-view",{staticClass:"payment_btn",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.lockList(e)}}},[t._v("立即支付")]):t._e(),0==e.status?a("v-uni-view",{staticClass:"cancel_btn",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.cancelPayment(e)}}},[t._v("取消订单")]):t._e()],1)],1)],1)],1)})),a("u-loadmore",{attrs:{status:t.status,loadText:t.$store.state.loadText},on:{loadmore:function(e){arguments[0]=e=t.$handleEvent(e),t.loadmore.apply(void 0,arguments)}}})],2)],1)},n=[]},"6a52":function(t,e,i){"use strict";var a=i("d812"),s=i.n(a);s.a},"6f64":function(t,e,i){"use strict";i.r(e);var a=i("5366"),s=i("c7f2");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("6a52");var c,r=i("f0c5"),o=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"46cd8814",null,!1,a["a"],c);e["default"]=o.exports},a165:function(t,e,i){t.exports=i.p+"static/img/right.23abb4c8.svg"},c7f2:function(t,e,i){"use strict";i.r(e);var a=i("4645"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},d812:function(t,e,i){var a=i("14bf");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("1324e266",a,!0,{sourceMap:!1,shadowMode:!1})}}]);