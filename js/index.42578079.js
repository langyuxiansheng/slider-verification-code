(function(e){function t(t){for(var o,l,u=t[0],c=t[1],a=t[2],f=0,d=[];f<u.length;f++)l=u[f],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);s&&s(t);while(d.length)d.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={index:0},i=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var s=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("c31f")},aec7:function(e,t,n){},c31f:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._v("\n    "+e._s(e.value)+"\n    "),n("SliderVerificationCode",{model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},i=[],l={data:function(){return{value:!1}}},u=l,c=n("2877"),a=Object(c["a"])(u,r,i,!1,null,null,null),s=a.exports,f=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),d=(n("7f7f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-drag",style:e.style},[n("div",{staticClass:"background"}),n("div",{staticClass:"text",style:{color:e.textColor},attrs:{onselectstart:"return false"}},[e._t("content",[e._v("\n            "+e._s(e.content)+"\n        ")])],2),n("div",{staticClass:"slider",style:{height:e.height,width:e.sliderWidth}},[e.icon?e._t("icon",[e._v("\n            "+e._s(e.icon)+"\n        ")]):e._t("icon",[e._v("\n            >>\n        ")])],2)])}),p=[],h=(n("c5f6"),{name:"SliderVerificationCode",model:{event:"change",prop:"isLock"},props:{isLock:{type:[String,Boolean,Number,Object],required:!0,default:!1},icon:{type:[String],default:null},activeValue:{type:[String,Boolean,Number,Object],default:!0},inactiveValue:{type:[String,Boolean,Number,Object],default:!1},content:{type:[String],default:"请拖动滑块解锁"},height:{type:[String],default:"40px"},sliderWidth:{type:[String],default:"40px"},background:{type:[String],default:"#e8e8e8"},textColor:{type:[String],default:"#fff"}},computed:{style:function(){var e=this.height,t=this.background;return{height:e,"line-height":e,background:t}}},mounted:function(){this.init()},methods:{selector:function(e){return document.querySelector(e)},init:function(){var e=this,t=this.selector(".app-drag"),n=this.selector(".background"),o=this.selector(".text"),r=this.selector(".slider"),i=t.offsetWidth-r.offsetWidth,l=this.inactiveValue;r.onmousedown=function(t){r.style.transition=null,n.style.transition=null;var u=t||window.event,c=u.clientX;document.onmousemove=function(t){var u=t||window.event,a=u.clientX,s=a-c;s>i?s=i:s<0&&(s=0),r.style.left=s+"px",n.style.width=s+"px",s==i&&(o.innerHTML="验证通过",o.style.color="#fff",r.innerHTML="&radic;",r.style.color="green",n.style.backgroundColor="lightgreen",l=e.activeValue,r.onmousedown=null,document.onmousemove=null,setTimeout((function(){e.$emit("change",e.activeValue)}),100))},document.onmouseup=function(){if(l==e.activeValue)return!0;r.style.left=0,n.style.width=0,r.style.transition="left 1s ease",n.style.transition="width 1s ease",document.onmousemove=null,document.onmouseup=null}},r.ontouchstart=function(t){var u=t.changedTouches[0];r.style.transition=null,n.style.transition=null;var c=u.pageX;console.log("downX",c),document.ontouchmove=function(t){var u=t.changedTouches[0],a=u.pageX,s=a-c;s>i?s=i:s<0&&(s=0),r.style.left=s+"px",n.style.width=s+"px",s==i&&(o.innerHTML="验证通过",o.style.color="#fff",r.innerHTML="&radic;",r.style.color="green",n.style.backgroundColor="lightgreen",l=e.activeValue,r.ontouchstart=null,document.ontouchmove=null,setTimeout((function(){e.$emit("change",e.activeValue)}),100))},document.ontouchend=function(){if(l==e.activeValue)return!0;r.style.left=0,n.style.width=0,r.style.transition="left 1s ease",n.style.transition="width 1s ease",document.ontouchmove=null,document.ontouchend=null}}}}}),v=h,y=(n("c700"),Object(c["a"])(v,d,p,!1,null,"25960ee7",null)),g=y.exports;g.install=function(e){e.component(g.name,g)};var m=g;function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){Object(f["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=[m],j=function e(t){if(e.installed)return!1;e.installed=!0,O.map((function(e){t.component(e.name,e)}))};"undefined"!==typeof window&&window.Vue&&j(window.Vue);var x=w({install:j},O);o["a"].use(x),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(s)}}).$mount("#app")},c700:function(e,t,n){"use strict";var o=n("aec7"),r=n.n(o);r.a}});
//# sourceMappingURL=index.42578079.js.map