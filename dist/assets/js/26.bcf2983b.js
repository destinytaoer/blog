(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{197:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("blockquote",[s("p",[t._v("查看CodePen例子："),s("a",{attrs:{href:"https://codepen.io/destiny0904/pen/mBjRmJ",target:"_blank",rel:"noopener noreferrer"}},[t._v("阴影效果"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("一脸懵逼！再修改z-index完全没有效果。")]),t._v(" "),s("p",[t._v("百度之后，找到了问题的答案，也自己摸索着找到了这个问题的解决办法。下面与大家分享。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("相信大家都知道，css是层叠样式表，层叠上下文就是html文件渲染的时候，各个元素的堆叠规则，是css中非常重要的潜在规则。")]),t._v(" "),s("blockquote",[s("p",[t._v("详细规则请点击："),s("a",{attrs:{href:"http://destinytaoer.cn/2017/10/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E5%B1%82%E5%8F%A0%E4%B8%8A%E4%B8%8B%E6%96%87%E5%92%8C%E5%B1%82%E5%8F%A0%E9%A1%BA%E5%BA%8F/",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解CSS中的层叠上下文和层叠顺序"),s("OutboundLink")],1)])]),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("MDN上有相关的介绍：")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),s("blockquote",[s("p",[t._v("张鑫旭博文："),s("a",{attrs:{href:"http://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解css中的层叠上下文和层叠顺序"),s("OutboundLink")],1),t._v("Segmentfault回答："),s("a",{attrs:{href:"https://segmentfault.com/q/1010000002480824",target:"_blank",rel:"noopener noreferrer"}},[t._v('Transform 引起的 z-index "失效"'),s("OutboundLink")],1),t._v("\n豆瓣文章："),s("a",{attrs:{href:"https://www.douban.com/note/343402554/",target:"_blank",rel:"noopener noreferrer"}},[t._v('小心 CSS3 Transform 引起的 z-index "失效"'),s("OutboundLink")],1)])]),t._v(" "),s("blockquote",{staticClass:"blockquote-center"},[t._v("生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("#")]),this._v(" 前言")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("重新学习CSS后的第三天，学习制作阴影的过程中，发现的问题：\n设置了"),e("code",[this._v("box-shadow")]),this._v("后展现的阴影：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/7295449-470275eaf0d0295a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("添加"),e("code",[this._v("transform:rotate(10deg);")]),this._v("后的效果：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/7295449-4fc582a383857820.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"一、原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、原因","aria-hidden":"true"}},[this._v("#")]),this._v(" 一、原因")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("给元素设置transform属性会创建一个新的"),s("code",[t._v("stacking context")]),t._v("，译作"),s("strong",[t._v("层叠上下文")]),t._v("的一个区域。")]),t._v(" "),s("li",[t._v("原本的层叠规则就会发生变化，导致了设置了transform的元素变成了一个层叠上下文容器，也就相当于最底层。")]),t._v(" "),s("li",[t._v("与其他兄弟元素或者外层元素依然保持原来的层叠规则，影响的只是其子元素。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"二、什么是层叠上下文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、什么是层叠上下文","aria-hidden":"true"}},[this._v("#")]),this._v(" 二、什么是层叠上下文")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"三、什么情况会创建新的区域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、什么情况会创建新的区域","aria-hidden":"true"}},[this._v("#")]),this._v(" 三、什么情况会创建新的区域")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("blockquote",[s("ul",[s("li",[t._v("根元素(HTML)")]),t._v(" "),s("li",[t._v("设置了position为absolute或relative，且z-index不是auto的元素")]),t._v(" "),s("li",[t._v("设置了z-index，且不为auto的流动元素")]),t._v(" "),s("li",[t._v("设置了opacity，且不为1的元素")]),t._v(" "),s("li",[t._v("设置了transform，且不为none的元素")]),t._v(" "),s("li",[t._v("设置了mix-blend-mode值，且不为normal的元素")]),t._v(" "),s("li",[t._v("设置了isolation 为 isolate的元素on mobile WebKit and Chrome 22+,")]),t._v(" "),s("li",[t._v("设置position为fixed的元素")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"四、解决办法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、解决办法","aria-hidden":"true"}},[this._v("#")]),this._v(" 四、解决办法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("不使用"),e("code",[this._v("transform")]),this._v("是不可能的了，那么该如何解决呢？我想到的办法是再覆盖，覆盖掉不让看见的东西。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("1. 首先在元素里再创建一个标签")]),this._v("\n因为元素的before、after伪类都被占用了，只能再创建标签覆盖。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("2. 应用新标签的before伪类")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".shadow5 p::before")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("z-index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fff"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 0 40px "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0, 0, 0, 0.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" inset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("right")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("设置定位，以原来的元素为基准，top、bottom、right、left为0，以充满整个容器\n"),e("strong",[this._v("注意")]),this._v("：z-index的设置与原来元素的before、after中的z-index有关，必须比它的值大，不然after伪类又会显示在上面。\n"),e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/7295449-90f36940b3b0480d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考")])}],!1,null,null,null);e.default=n.exports}}]);