(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{387:function(t,e,r){"use strict";r.r(e);var a=r(1),n=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[t._v("博客很久没有更新文章了，主要是自身处于就业、学习的双重焦虑状态。")]),t._v(" "),r("p",[t._v("另外一个原因，是我在捣鼓上一个主题 next 的过程中，由于电脑的恢复出厂和一系列失误的原因，丢失了自己更改很久的版本。后来想再去重新做一遍已经失去了耐心。")]),t._v(" "),r("p",[t._v("最近，也是在这一系列的压力之下，却是想通了，有种豁然开朗的感觉。于是又再一次的踏上征程。仅以此次改版纪念这一次重生。")]),t._v(" "),r("p",[t._v("感谢一直以来都在默默支持我的你们。\n")]),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("没有太多的时间去研究模板引擎这类的东西，又不想花钱购买服务器。于是，还是选择了使用 hexo + GitHub page 帮我实现这个博客。")]),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("在 hexo 的"),r("a",{attrs:{href:"https://hexo.io/themes/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网主题"),r("OutboundLink")],1),t._v("页，总共也不是很多，就一个个查看。")]),t._v(" "),r("p",[t._v("最终比较满意的只有三个：")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.haomwei.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maupassant"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://tomotoes.com/blog/",target:"_blank",rel:"noopener noreferrer"}},[t._v("tomotoes"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://staunchkai.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("staunch"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("最终选定的是最花哨的 tomotoes。说实话，我看中的就是他的动画，以及布局。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),r("p",[t._v("valine：\n主题作者把 appid 和 appkey 的名称，在模板和主题配置中不一致，导致了评论系统出不来。")]),t._v(" "),r("p",[t._v("index：\n要实现文章的排序，插件 hexo-generator-index 的 JS 文件中，把 order_by 的值写死了，导致无法通过博客配置更改文章顺序。")]),t._v(" "),t._m(6),r("common-Quote",[t._v("生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。")])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("#")]),this._v(" 前言")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"主题变更"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主题变更","aria-hidden":"true"}},[this._v("#")]),this._v(" 主题变更")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("next 主题是我最喜欢的一个主题之一，比较喜欢它的简约以及功能的齐全和可扩展性。\n后来一想，其实没有必要，够用就行。花太多的时间捣鼓，还不如多写写文章。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"插件选用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件选用","aria-hidden":"true"}},[this._v("#")]),this._v(" 插件选用")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("abbrlink：用于生成页面的唯一码")]),t._v(" "),r("li",[t._v("valine 评论")]),t._v(" "),r("li",[t._v("jsonContent 搜索")]),t._v(" "),r("li",[t._v("不蒜子访问量统计")]),t._v(" "),r("li",[t._v("leanclound 阅读量统计")]),t._v(" "),r("li",[t._v("wordcount：文章字数统计")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"记录一些坑"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#记录一些坑","aria-hidden":"true"}},[this._v("#")]),this._v(" 记录一些坑")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-javascript extra-class"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=>在 node_modules/hexo-generator-index/index.js 进行修改")]),t._v("\norder_by"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" hexo"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("order_by "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-date'")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hexo"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("order_by\n")])])])}],!1,null,null,null);e.default=n.exports}}]);