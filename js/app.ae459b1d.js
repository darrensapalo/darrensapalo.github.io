(function(e){function t(t){for(var r,i,s=t[0],u=t[1],l=t[2],c=0,f=[];c<s.length;c++)i=s[c],o[i]&&f.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"3889440f"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e),a=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},3047:function(e,t,n){"use strict";var r=n("d132"),o=n.n(r);o.a},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){},"759b":function(e,t,n){"use strict";var r=n("d42b"),o=n.n(r);o.a},cd49:function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=(n("5c0b"),n("2877")),s={},u=Object(i["a"])(s,o,a,!1,null,null,null),l=u.exports,c=n("8c4f"),p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"named section"},[e._v("\n    Darren Sapalo\n  ")]),n("div",{staticClass:"welcome section"},[n("label",[e._v("\n      Tech Consultant\n    ")]),n("p",[e._v("\n      I help you solve problems, design solutions, and realize them.\n    ")]),n("div",{staticClass:"button"},[e._v("\n      Let's talk!\n    ")])]),n("div",{staticClass:"professional section"},[n("h1",[e._v("\n      Solve Problems\n    ")]),n("p",[e._v("\n      I perform user research to identify what problems you encounter\n      and to evaluate their different priorities, so we can tackle them\n      in the most effective sequence.\n    ")]),n("h1",[e._v("\n      Design Solutions\n    ")]),n("p",[e._v("\n      Having analyzed your situation with technical expertise, I enumerate\n      different options that your business can choose to go for, allowing\n      you to decide what strategy is best for your current context.\n    ")]),n("h1",[e._v("\n      Realize Ideas into Actuality\n    ")]),n("p",[e._v("\n      I build different kinds of things: websites, mobile apps, cross-platform\n      solutions, desktop apps, software integrations, computer vision-based \n      applications, language processing apps, data analysis and machine learning\n      apps integrated into your workflow.\n    ")])]),n("div",{staticClass:"portfolio section"},[n("h1",[e._v("Portfolio")]),n("p",[e._v("\n      I do quite a few things: I write tech articles, I build open source projects.\n    ")]),n("div",{staticClass:"portfolio-list"},[n("div",{staticClass:"portfolio-item"},[n("h2",[n("a",{attrs:{href:"https://hub.packtpub.com/reactive-programming-rxswift/"}},[e._v("\n          Reactive Programming with RxSwift\n        ")])]),n("label",[e._v("\n          May 13, 2016\n        ")]),n("p",[e._v("\n          In a previous article, Building an iPhone app Using Swift, Ryan Loomba showed us how to build iOS apps using Swift, starting from a new project (Building an iPhone app Using Swift Part 1), and how to create lists using a table view and present a map using map view (Building an iPhone app Using Swift Part 2). In this article, we’ll discuss what RxSwift is and how it can be used to improve our Swift code.\n        ")])]),n("div",{staticClass:"portfolio-item"},[n("h2",[n("a",{attrs:{href:"https://hub.packtpub.com/rxswift-operators/"}},[e._v("\n          RxSwift Operators\n        ")])]),n("label",[e._v("\n          April 22, 2016\n        ")]),n("p",[e._v("\n          In the previous article, we talked about how the Rx framework for Swift could help in performing asynchronous tasks, creating an observable from a network request, dealing with streams of data,\n        ")])])])]),n("div",{staticClass:"contact screen"})])}],v=n("9ab4"),h=n("60a3"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),e._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[e._v("typescript")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest",target:"_blank",rel:"noopener"}},[e._v("unit-jest")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return v["b"](t,e),v["a"]([Object(h["b"])()],t.prototype,"msg",void 0),t=v["a"]([h["a"]],t),t}(h["c"]),g=m,_=g,w=(n("759b"),Object(i["a"])(_,d,b,!1,null,"386adf3e",null)),y=w.exports,j=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return v["b"](t,e),t=v["a"]([Object(h["a"])({components:{HelloWorld:y}})],t),t}(h["c"]),k=j,x=k,S=(n("3047"),Object(i["a"])(x,p,f,!1,null,"bce62ffc",null)),C=S.exports;r["a"].use(c["a"]);var P=new c["a"]({routes:[{path:"/",name:"home",component:C},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),O=n("2f62");r["a"].use(O["a"]);var I=new O["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:P,store:I,render:function(e){return e(l)}}).$mount("#app")},d132:function(e,t,n){},d42b:function(e,t,n){}});
//# sourceMappingURL=app.ae459b1d.js.map