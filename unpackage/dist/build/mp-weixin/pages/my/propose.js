(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/propose"],{"0340":function(e,n,t){"use strict";var a=t("4f4b"),r=t.n(a);r.a},"4f4b":function(e,n,t){},"6e49":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,a,r,u,c){try{var i=e[u](c),o=i.value}catch(s){return void t(s)}i.done?n(o):Promise.resolve(o).then(a,r)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var c=e.apply(n,t);function i(e){u(c,a,r,i,o,"next",e)}function o(e){u(c,a,r,i,o,"throw",e)}i(void 0)}))}}var i={data:function(){return{myBalance:0,name:"户主姓名",number:"卡号",bank_name:"开户行名称",money:"",content:"",service_charge:0,service_charge_number:0,balance:0}},onLoad:function(){var e=this;return c(a.default.mark((function n(){var t,r,u,c,i;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$u.api.withdrawal();case 2:t=n.sent,r=t.balance,u=t.realname,c=t.bank,i=t.setting,e.myBalance=r,e.name=u?u.name:"户主姓名",e.number=c?c.number:"卡号",e.bank_name=c?c.bank_name:"开户行名称",e.content=i.content,e.service_charge=i.service_charge;case 13:case"end":return n.stop()}}),n)})))()},methods:{getInfo:function(){var e=this;return c(a.default.mark((function n(){var t,r,u,c;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$u.api.realname();case 2:return t=n.sent,r=t.realname,e.name=r?r.name:"户主姓名",n.next=7,e.$u.api.bank();case 7:u=n.sent,c=u.bank,e.number=c?c.number:"卡号",e.bank_name=c?c.bank_name:"开户行名称";case 11:case"end":return n.stop()}}),n)})))()},setting:function(){var e=this;return c(a.default.mark((function n(){var t;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$u.api.setting({key:"withdrawal"});case 2:t=n.sent,e.content=t.setting.content,e.service_charge=t.setting.service_charge;case 5:case"end":return n.stop()}}),n)})))()},inputChange:function(e){var n=Number(e.target.value);this.service_charge_number=(n*this.service_charge/100).toFixed(4),this.balance=n-this.service_charge_number},withdrawalPost:function(){var e=this;return c(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$u.api.withdrawalPost({money:e.money});case 2:n.sent;case 3:case"end":return n.stop()}}),n)})))()}}};n.default=i},"6eff":function(e,n,t){"use strict";(function(e){t("04da");a(t("66fd"));var n=a(t("d139"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},d139:function(e,n,t){"use strict";t.r(n);var a=t("e73d"),r=t("e667");for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);t("0340");var c,i=t("f0c5"),o=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"1a0fa94c",null,!1,a["a"],c);n["default"]=o.exports},e667:function(e,n,t){"use strict";t.r(n);var a=t("6e49"),r=t.n(a);for(var u in a)"default"!==u&&function(e){t.d(n,e,(function(){return a[e]}))}(u);n["default"]=r.a},e73d:function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return a}));var r=function(){var e=this,n=e.$createElement;e._self._c},u=[]}},[["6eff","common/runtime","common/vendor"]]]);