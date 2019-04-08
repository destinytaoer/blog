(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{470:function(t,a,e){"use strict";e.r(a);var i=e(8),v=Object(i.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("HTML是超文本标记（Hyper Text Markup Language）的缩写，在网页设计中又把它称为网页的结构层。它的学习很简单，只要多利用业余时间去记忆、练习，一到两天时间就能掌握，并写出一个简单页面。")]),t._v(" "),e("blockquote",[e("p",[t._v("这里推荐一个快速入门的网址：https://www.w3school.com.cn/")])]),t._v(" "),e("h2",{attrs:{id:"一、对于html的学习"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、对于html的学习","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、对于html的学习")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("首先是对html的整体结构的认识，即<!DOCTYPE html>的声明、html标签、head标签、body标签；")])]),t._v(" "),e("li",[e("p",[t._v("其次是对head里面的标签的认识和使用，如meta、link、title、script、style等，在网页的优化上特别重要；")])]),t._v(" "),e("li",[e("p",[t._v("最后是对body里面的标签的认识和使用，这也是网页上面呈现的内容，学html大部分时间都要花在这上面。要对常用标签的含义、用法、性质以及自带的属性都要熟练掌握，不常用标签能知道含义以及用法。")])])]),t._v(" "),e("p",[t._v("要掌握的精髓就在于在什么样的情况下运用哪个标签才能达到最好的效果。")]),t._v(" "),e("h2",{attrs:{id:"二、标签语义化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、标签语义化","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、标签语义化")]),t._v(" "),e("p",[t._v("其重要作用在于：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("网页结构合理 ；")])]),t._v(" "),e("li",[e("p",[t._v("利于开发调试和后期维护（让自己和别人能够比较容易看懂代码）；")])]),t._v(" "),e("li",[e("p",[t._v("利于搜索引擎SEO优化。搜索引擎不能识别内容，只能识别标签语义从而知道这部分是什么内容（让搜索引擎能看懂）。有了良好的结构和语义你的网页内容自然容易被搜索引擎抓取；")])]),t._v(" "),e("li",[e("p",[t._v("方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）。")])])]),t._v(" "),e("p",[t._v("但是，必须认识到，并不是说我们只能使用有语义的标签，而应当是在需要有语义，需要被SEO识别的情况下才必须使用有语义标签（如自己网页的主题以及重要内容等）。在不需要的情况下，也根据情况使用无语义标签。如div加CSS的页面布局、span添加一些只为实现效果的块或者描述，不需要有语义，不然也容易造成语义混乱。这是因为由标签传达的含义比浏览器显示文本的方式更为重要")]),t._v(" "),e("h3",{attrs:{id:"文字"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文字","aria-hidden":"true"}},[t._v("#")]),t._v(" 文字")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("在有一段文字显示的情况下，必须使p标签来包含。里面可含有无语义标签div/span以及其他有语义的标签。      如：\nblockquote块引用，长引用（要添加cite属性引用地址）、\nq短的行内引用cite定义引用。可使用该标签对参考文献的引用进行定义，比如书籍或杂志的标题著作的标题、\naddress文档作者或拥有者的联系信息、\ncode代码abbr缩写（要添加title标签说明原文）、\ntime时间、mark标注、ruby注释、\nstrong强调 （特别注意，这个标签权重很高，用于特别强调的文本。搜索引擎对其有很高的识别。）、\ndetails可展开样式（details里面使用添加标题，后面接展开内容)\n等等......")])]),t._v(" "),e("li",[e("p",[t._v("标题使用h1,h2,h3,h4标签,其中h5,h6权重太小一般不使用。其中的样式，即字体大小、颜色等都可以用CSS定义重新定义；")])]),t._v(" "),e("li",[e("p",[t._v("标签中应该使用的是有含义的。基于内容的样式标签会告诉浏览器它所包含的文本具有特定的含义、上下文或者用法。是浏览器和搜索引擎所能识别的。不应该使用纯粹为了设定样式而存在的标签。设定样式应当由样式表（CSS）完成。")])])]),t._v(" "),e("h3",{attrs:{id:"图片"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图片","aria-hidden":"true"}},[t._v("#")]),t._v(" 图片")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("如果图片作为HTML的一部分，需要被搜索引擎识别，则用img，不需要，则可以使用背景来显示图片；")])]),t._v(" "),e("li",[e("p",[t._v("img标签中的alt和title属性。其中，alt属性用于图片描述，是给搜索引擎看的，图片无法显示时，显示alt中的文字。title属性也用于图片描述，是给用户看的，鼠标移动到图片时显示title中的文字。对于img标签，两个属性都尽量添加。（对于title值，在很多元素中都可以使用，比如在布局中无法完全显示的一条新闻或者消息等，在鼠标移动到上面时显示完全的内容是很好的一种用户体验）；")])]),t._v(" "),e("li",[e("p",[t._v("figure元素和figcaption元素。figure元素用于包含图片和图注，figurecaption元素用于表示图注文字。在有图片和图注的情况下，使用这两个元素会使页面语义更好。")])])]),t._v(" "),e("h3",{attrs:{id:"表格"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表格","aria-hidden":"true"}},[t._v("#")]),t._v(" 表格")]),t._v(" "),e("p",[t._v("表格中有table、tr、td、th、caption、thead、tbody、tfoot。语义上，th为表头单元格，caption为表格标题，thead、tbody、tfoot把表格分为三部分。这三样在效果上并不需要用到，但在良好的语义上，尽量使用")]),t._v(" "),e("h3",{attrs:{id:"表单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表单","aria-hidden":"true"}},[t._v("#")]),t._v(" 表单")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("lable绑定控件。lable使用于关联控件，解释控件的意义以及有一定点击效果；")])]),t._v(" "),e("li",[e("p",[t._v("placeholder占位符值和value值。表单中文本框的默认值，类似提示文本。在需要用户输入文字的控件中尽量使用；")])]),t._v(" "),e("li",[e("p",[t._v("fieldset表单控件分组。（只在有需要的时候使用，多数表单不分组），legend标签为 fieldset 元素定义标题。")])])]),t._v(" "),e("h3",{attrs:{id:"新增标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新增标签","aria-hidden":"true"}},[t._v("#")]),t._v(" 新增标签")]),t._v(" "),e("p",[t._v("在HTML5中添加了很多结构标签，增强了页面布局结构的语义，下面举例：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("header头部、标题")])]),t._v(" "),e("li",[e("p",[t._v("nav导航")])]),t._v(" "),e("li",[e("p",[t._v("section内容块区")])]),t._v(" "),e("li",[e("p",[t._v("article 文章")])]),t._v(" "),e("li",[e("p",[t._v("aside辅助信息")])]),t._v(" "),e("li",[e("p",[t._v("hgroup标题组合")])]),t._v(" "),e("li",[e("p",[t._v("footer页脚")])]),t._v(" "),e("li",[e("p",[t._v("figure独立的流内容")])])]),t._v(" "),e("Quote",[t._v("生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。")])],1)},[],!1,null,null,null);a.default=v.exports}}]);