(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{507:function(e,t,r){"use strict";r.r(t);var i=r(8),l=Object(i.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("blockquote",[r("p",[e._v("原文来自阮一峰的博客："),r("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MVC，MVP 和 MVVM 的图示"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("复杂的软件必须有清晰合理的架构，否则无法开发和维护。")]),e._v(" "),r("p",[e._v("MVC（Model-View-Controller）是最常见的软件架构之一，业界有着广泛应用。它本身很容易理解，但是要讲清楚，它与衍生的 MVP 和 MVVM 架构的区别就不容易了。")]),e._v(" "),r("h2",{attrs:{id:"一、mvc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、mvc","aria-hidden":"true"}},[e._v("#")]),e._v(" 一、MVC")]),e._v(" "),r("p",[e._v("MVC模式的意思是，软件可以分成三个部分。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2019/02/25/5c740f9d8eb7f.jpg",alt:"enter description here"}})]),e._v(" "),r("ul",[r("li",[e._v("视图（View）：用户界面。")]),e._v(" "),r("li",[e._v("控制器（Controller）：业务逻辑")]),e._v(" "),r("li",[e._v("模型（Model）：数据保存")])]),e._v(" "),r("p",[e._v("各部分之间的通信方式如下。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2019/02/25/5c740fc53142d.jpg",alt:"enter description here"}})]),e._v(" "),r("ol",[r("li",[e._v("View 传送指令到 Controller")]),e._v(" "),r("li",[e._v("Controller 完成业务逻辑后，要求 Model 改变状态")]),e._v(" "),r("li",[e._v("Model 将新的数据发送到 View，用户得到反馈")])]),e._v(" "),r("p",[e._v("所有通信都是单向的。")]),e._v(" "),r("h2",{attrs:{id:"二、互动模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、互动模式","aria-hidden":"true"}},[e._v("#")]),e._v(" 二、互动模式")]),e._v(" "),r("p",[e._v("接受用户指令时，MVC 可以分成两种方式。一种是通过 View 接受指令，传递给 Controller。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2019/02/25/5c74100c130fa.jpg",alt:"enter description here"}})]),e._v(" "),r("p",[e._v("另一种是直接通过controller接受指令。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2019/02/25/5c74101b1f6bf.jpg",alt:"enter description here"}})]),e._v(" "),r("h2",{attrs:{id:"三、实例：backbone"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、实例：backbone","aria-hidden":"true"}},[e._v("#")]),e._v(" 三、实例：Backbone")]),e._v(" "),r("p",[e._v("实际项目往往采用更灵活的方式，以 Backbone.js 为例。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2019/02/25/5c7410397739a.jpg",alt:"enter description here"}})]),e._v(" "),r("ol",[r("li",[e._v("用户可以向 View 发送指令（DOM 事件），再由 View 直接要求 Model 改变状态。")]),e._v(" "),r("li",[e._v("用户也可以直接向 Controller 发送指令（改变 URL 触发 hashChange 事件），再由 Controller 发送给 View。")]),e._v(" "),r("li",[e._v("Controller 非常薄，只起到路由的作用，而 View 非常厚，业务逻辑都部署在 View。所以，Backbone 索性取消了 Controller，只保留一个 Router（路由器） 。")])]),e._v(" "),r("h2",{attrs:{id:"四、mvp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、mvp","aria-hidden":"true"}},[e._v("#")]),e._v(" 四、MVP")]),e._v(" "),r("p",[e._v("MVP 模式将 Controller 改名为 Presenter，同时改变了通信方向。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2019/02/25/5c74106fa3b3b.jpg",alt:"enter description here"}})]),e._v(" "),r("ol",[r("li",[e._v("各部分之间的通信，都是双向的。")]),e._v(" "),r("li",[e._v("View 与 Model 不发生联系，都通过 Presenter 传递。")]),e._v(" "),r("li",[e._v('View 非常薄，不部署任何业务逻辑，称为"被动视图"（Passive View），即没有任何主动性，而 Presenter非常厚，所有逻辑都部署在那里。')])]),e._v(" "),r("h2",{attrs:{id:"五、mvvm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#五、mvvm","aria-hidden":"true"}},[e._v("#")]),e._v(" 五、MVVM")]),e._v(" "),r("p",[e._v("MVVM 模式将 Presenter 改名为 ViewModel，基本上与 MVP 模式完全一致。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2019/02/25/5c7410921e7eb.jpg",alt:"enter description here"}})]),e._v(" "),r("p",[e._v("唯一的区别是，它采用双向绑定（data-binding）：View的变动，自动反映在 ViewModel，反之亦然。Angular 和 Ember 都采用这种模式。")]),e._v(" "),r("Quote",[e._v("生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。")])],1)},[],!1,null,null,null);t.default=l.exports}}]);