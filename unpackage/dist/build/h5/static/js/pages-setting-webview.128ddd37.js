(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setting-webview"],{"0db3":function(n,t,e){"use strict";e.r(t);var c=e("e19a"),r=e.n(c);for(var a in c)"default"!==a&&function(n){e.d(t,n,(function(){return c[n]}))}(a);t["default"]=r.a},"173f":function(n,t,e){"use strict";e.r(t);var c=e("ff2c"),r=e("0db3");for(var a in r)"default"!==a&&function(n){e.d(t,n,(function(){return r[n]}))}(a);var u,o=e("f0c5"),i=Object(o["a"])(r["default"],c["b"],c["c"],!1,null,"c50fb2ca",null,!1,c["a"],u);t["default"]=i.exports},e19a:function(n,t,e){"use strict";e("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=e("d8db"),r={data:function(){return{src:""}},onLoad:function(n){var t=uni.getStorageSync("token");this.src="".concat(c.webview,"?id=").concat(n.id,"&pay_mode=").concat(n.pay_mode,"&token=").concat(t,"&formal=").concat(c.formal)}};t.default=r},ff2c:function(n,t,e){"use strict";var c;e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return c}));var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("v-uni-web-view",{ref:"webview",attrs:{src:n.src}})],1)},a=[]}}]);