(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{375:function(t,e,s){"use strict";s.r(e);var a=s(1),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("在编辑文章的时候，经常都会有使用数学公式的需求。我查找到一篇文章，总结的比较好，在这里跟你们分享。")]),t._v(" "),s("blockquote",[s("p",[t._v("需要注意的是，想要在 Markdown 中使用这些数学公式，需要你的编辑器支持这个功能。这里介绍的就是其中一种：Latex。\n我的博客对数学公式的支持也不是很好，跟 Markdown 的编译插件有所冲突，大家可以查看我的 CSDN 上的文章：\n"),s("a",{attrs:{href:"https://blog.csdn.net/destinytaoer/article/details/78761520",target:"_blank",rel:"noopener noreferrer"}},[t._v("\nMarkdown 添加 Latex 数学公式"),s("OutboundLink")],1)])]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("行内公式")]),t._v(" "),t._m(2),s("p",[t._v("行间公式")]),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),s("p",[t._v("上下标命令用来放在需要插入上下标的地方，花括弧内为上下标的内容，当角标为单个字符时候，可以不使用花括号；如果角标为多字符或者多层次的时候，必须要使用花括号。")]),t._v(" "),s("p",[t._v("比如：")]),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),s("p",[t._v("比如：")]),t._v(" "),t._m(17),s("p",[t._v("$$\n\\partial f_{\\mbox{\\tiny 极大值}}\n$$")]),t._v(" "),t._m(18),t._v(" "),t._m(19),s("p",[t._v("比如：")]),t._v(" "),t._m(20),t._m(21),t._v(" "),s("p",[t._v("第一种输出为正常输出，但输出效果不明显；第二种是将一级角标改为二级角标，字体也自动变为二级角标字体；第三种将一级角标改为二级角标，但是强制字体改为一级角标字体。")]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),s("p",[t._v("比如：")]),t._v(" "),t._m(25),s("p",[t._v("行内分式：$\\frac{x+y}{y+z}$\n行间分式：$$\\frac{x+y}{y+z}$$")]),t._v(" "),t._m(26),t._v(" "),t._m(27),s("p",[t._v("$\\displaystyle\\frac{x+y}{y+z}$")]),t._v(" "),t._m(28),t._v(" "),t._m(29),s("p",[t._v("$$\nx_0+\\frac{1}{x_1+\\frac{1}{x_2+\\frac{1}{x_3+\\frac{1}{x_4}}}}\n$$")]),t._v(" "),s("p",[t._v("可以通过强制改变字体大小使得分子分母字体大小一致：")]),t._v(" "),t._m(30),t._m(31),t._v(" "),s("p",[t._v("分数线长度值是预设为分子分母的最大长度，如果想要使分数线再长一点，可以在分子或分母两端添加一些间隔")]),t._v(" "),t._m(32),s("p",[t._v("$$\n\\frac{1}{2},\\frac{;1;}{;2;}\n$$")]),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),s("p",[t._v("被开方表达式字符高度不一致时，根号上面的横线可能不是在同一条直线上")]),t._v(" "),t._m(40),t._v(" "),t._m(41),s("p",[t._v("$$\n\\sqrt{a}+\\sqrt{b}+\\sqrt{c},\\qquad \\sqrt{\\mathstrut a}+\\sqrt{\\mathstrut b}+\\sqrt{\\mathstrut c}\n$$")]),t._v(" "),t._m(42),t._v(" "),t._m(43),s("p",[t._v("注意比较两个根式开方次数的显示位置")]),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._m(47),t._v(" "),t._m(48),s("p",[t._v("比如：")]),t._v(" "),s("p",[t._v("无穷级数 $\\sum_{k=1}^\\infty\\frac{x^n}{n!}$ 可以化为积分 $\\int_0^\\infty e^x$ 也即是：$\\sum_{k=1}^\\infty\\frac{x^n}{n!} = \\int_0^\\infty e^x$")]),t._v(" "),t._m(49),t._v(" "),t._m(50),s("p",[t._v("比如：")]),t._v(" "),t._m(51),s("p",[t._v("$\\sum\\limits_{k=1}^n$ 和 $\\sum\\nolimits_{k=1}^n$")]),t._v(" "),t._m(52),s("p",[t._v("$\\int\\limits_0^\\infty e^x$ 和 $\\int\\nolimits_0^\\infty e^x$")]),t._v(" "),t._m(53),t._v(" "),t._m(54),t._v(" "),t._m(55),t._m(56),t._v(" "),t._m(57),s("p",[t._v("比如：")]),t._v(" "),t._m(58),s("p",[t._v("$$\\overline{\\overline{a^2}+\\underline{ab}+\\bar{a}^3}$$")]),t._v(" "),t._m(59),t._v(" "),t._m(60),t._v(" "),t._m(61),t._m(62),t._v(" "),t._m(63),s("p",[t._v("比如：")]),t._v(" "),t._m(64),s("p",[t._v("$$\\underbrace{a+\\overbrace{b+\\dots+b}^{m\\mbox{\\tiny 个}}}_{20\\mbox{\\scriptsize 个}}$$")]),t._v(" "),t._m(65),t._v(" "),t._m(66),t._v(" "),t._m(67),s("p",[t._v("$$\n\\hat{a}\n\\check{a}\n\\breve{a}\n\\tilde{a}\n\\bar{a}\n\\vec{a}\n\\acute{a}\n\\grave{a}\n\\mathring{a}\n\\dot{a}\n\\ddot{a}\n$$")]),t._v(" "),t._m(68),t._v(" "),t._m(69),t._v(" "),s("p",[t._v("比如：")]),t._v(" "),t._m(70),s("p",[t._v("$$\n\\vec{x}\\stackrel{\\mathrm{def}}{=}{x_1,\\dots,x_n}\\ {n+1 \\choose k}={n \\choose k}+{n \\choose k-1}\\ \\sum_{k_0,k_1,\\ldots>0 \\atop k_0+k_1+\\cdots=n}A_{k_0}A_{k_1}\\cdots\n$$")]),t._v(" "),t._m(71),t._v(" "),t._m(72),s("p",[t._v("$$\n()\\big(\\big) \\Big(\\Big) \\bigg(\\bigg) \\Bigg(\\Bigg)\n\\big(\\Big) \\bigg(\\Bigg)\n$$")]),t._v(" "),t._m(73),t._v(" "),t._m(74),s("p",[t._v("放在左右定界符前，自动随着公式内容大小调整符号大小")]),t._v(" "),s("p",[t._v("比如：")]),t._v(" "),t._m(75),s("p",[t._v("$$\n(x)\\left(x^{y^z}\\right)\n$$")]),t._v(" "),t._m(76),t._v(" "),t._m(77),t._v(" "),t._m(78),t._v(" "),t._m(79),t._v(" "),t._m(80),t._v(" "),t._m(81),s("p",[t._v("$${ ...}$$")]),t._v(" "),t._m(82),t._v(" "),t._m(83),s("p",[t._v("$$\\in$$")]),t._v(" "),t._m(84),t._v(" "),t._m(85),s("p",[t._v("$$\n\\not\\in\n$$")]),t._v(" "),t._m(86),t._v(" "),t._m(87),s("p",[t._v("$$\nA\\subset B\n$$")]),t._v(" "),t._m(88),t._v(" "),t._m(89),s("p",[t._v("$$\nA \\subsetneqq B\n$$")]),t._v(" "),t._m(90),t._v(" "),t._m(91),s("p",[t._v("$$\nA \\supset B\n$$")]),t._v(" "),t._m(92),t._v(" "),t._m(93),s("p",[t._v("$$\nA \\supsetneqq B\n$$")]),t._v(" "),t._m(94),t._v(" "),t._m(95),s("p",[t._v("$$\nA \\not \\subset B\n$$")]),t._v(" "),t._m(96),t._v(" "),t._m(97),s("p",[t._v("$$\nA \\cap B\n$$")]),t._v(" "),t._m(98),t._v(" "),t._m(99),s("p",[t._v("$$\nA \\cup B\n$$")]),t._v(" "),t._m(100),t._v(" "),t._m(101),s("p",[t._v("$$\n\\overline{A}\n$$")]),t._v(" "),t._m(102),t._v(" "),t._m(103),s("p",[t._v("$$\nA\\setminus B\n$$")]),t._v(" "),t._m(104),t._v(" "),t._m(105),s("p",[t._v("$$\n\\mathbb{R}\n$$")]),t._v(" "),t._m(106),t._v(" "),t._m(107),s("p",[t._v("$$\n\\emptyset\n$$")]),t._v(" "),t._m(108),t._v(" "),s("blockquote",[s("p",[t._v("引自："),s("a",{attrs:{href:"https://www.cnblogs.com/peaceWang/p/Markdown-tian-jia-Latex-shu-xue-gong-shi.html#toc_1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Markdown 添加 Latex 数学公式"),s("OutboundLink")],1)])]),t._v(" "),s("common-Quote",[t._v("生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。")])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("#")]),this._v(" 前言")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"markdown-中添加公式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-中添加公式","aria-hidden":"true"}},[this._v("#")]),this._v(" Markdown 中添加公式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$行内公式$\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$$\n行间公式\n$$\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"latex-数学公式语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#latex-数学公式语法","aria-hidden":"true"}},[this._v("#")]),this._v(" Latex 数学公式语法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"角标（上下标）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#角标（上下标）","aria-hidden":"true"}},[this._v("#")]),this._v(" 角标（上下标）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("上标")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("^{}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("下标")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("_{}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("x^2, x_1^2, x^{(n)}_{22}, ^{16}O^{2-}_{32}, x^{y^{z^a}}, x^{y_z}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("$$\nx^2, x_1^2, x^{(n)}"),e("em",[this._v("{22}, ^{16}O^{2-}")]),this._v("{32}, x^{y^{z^a}}, x^{y_z}\n$$")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("使用文字作为角标")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("文字模式")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\mbox{}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("改变文字大小的命令")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\tiny\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\partial f_{\\mbox{\\tiny 极大值}}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("强制改变角标大小或层次命令")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\scriptstyle\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("y_N, y_{_N}, y_{_{\\scriptstyle N}}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("$$\ny_N, y_{"),e("em",[this._v("N}, y")]),this._v("{_{\\scriptstyle  N}}\n$$")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"分式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分式","aria-hidden":"true"}},[this._v("#")]),this._v(" 分式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("分式命令")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\frac{分子}{分母}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\frac{x+y}{y+z}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("表明"),e("strong",[this._v("行内分式字体比行间字体小")]),this._v("，因为行内分式使用的是角标字体\n可以人工改变行内分式的字体大小，")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\displaystyle\\frac{x+y}{y+z}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("连分式")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("x_0+\\frac{1}{x_1+\\frac{1}{x_2+\\frac{1}{x_3+\\frac{1}{x_4}}}}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\newcommand{\\FS}[2]{\\displaystyle\\frac{#1}{#2}}x0+\\FS{1}{X_1+\\FS{1}{X_2+\\FS{1}{X_3+\\FS{1}{X_4}}}}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("第一行命令定义了一个新的分式命令，规定每个调用该命令的分式都按 "),e("code",[this._v("\\displaystyle")]),this._v(" 的格式显示分式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\frac{1}{2},\\frac{\\;1\\;}{\\;2\\;}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("其中第一个显示是正常的显示，第二个显示是分子分母前后都放入一个间隔命令 "),e("code",[this._v("\\;")]),this._v(" 中")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"根式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#根式","aria-hidden":"true"}},[this._v("#")]),this._v(" 根式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("二次根式命令")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\sqrt{表达式}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果表达式是个单个字符，则不需要花括号，但需要在字符和 "),e("code",[this._v("sqrt")]),this._v(" 之间加入一个空格")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("$n$ 次根式命令")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\sqrt[n]{表达式}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("为了使横线在同一条直线上，可以在被开方表达式插入一个只有高度没有宽度的数学支柱 "),e("code",[this._v("\\mathstut")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\sqrt{a}+\\sqrt{b}+\\sqrt{c},\\qquad \\sqrt{\\mathstrut a}+\\sqrt{\\mathstrut b}+\\sqrt{\\mathstrut c}\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("当被开方表达式高时，开方次数的位置显得略低，解决方法为：将开方此时改为上标，并拉近与根式的水平距离，即显示将命令中的 "),s("code",[t._v("[n]")]),t._v(" 改为 "),s("code",[t._v("[^n\\!]")]),t._v(",其中 "),s("code",[t._v("^")]),t._v(" 表示是上标，"),s("code",[t._v("\\!")]),t._v(" 表示缩小间隔")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\sqrt{1+\\sqrt[^p\\!]{1+\\sqrt[^q\\!]{1+a}}}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"求和与积分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#求和与积分","aria-hidden":"true"}},[this._v("#")]),this._v(" 求和与积分")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("求和命令")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\sum_{k=1}^n表达式（求和项紧随其后,下同）\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("积分命令")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\int_a^b表达式\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("改变上下限位置的命令")]),this._v("：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\limits(强制上下限在上下侧) \n\\nolimits(强制上下限在左右侧)\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\sum\\limits_{k=1}^n\n\\sum\\nolimits_{k=1}^n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\int\\limits_0^\\infty e^x\n\\int\\nolimits_0^\\infty e^x\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"上、下划线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上、下划线","aria-hidden":"true"}},[this._v("#")]),this._v(" 上、下划线")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("上划线命令")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\overline{公式}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("下划线命令")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\underline{公式}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\overline{\\overline{a^2}+\\underline{ab}+\\bar{a}^3}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"上、下括弧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上、下括弧","aria-hidden":"true"}},[this._v("#")]),this._v(" 上、下括弧")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("上花括弧命令")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\overbrace{公式}{说明}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("下花括弧命令")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\underbrace{公式}_{说明}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\underbrace{a+\\overbrace{b+\\dots+b}^{m\\mbox{\\tiny 个}}}_{20\\mbox{\\scriptsize 个}}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"数学重音符号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数学重音符号","aria-hidden":"true"}},[this._v("#")]),this._v(" 数学重音符号")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("这里以 "),s("code",[t._v("a")]),t._v(" 为例，如果是字母 "),s("code",[t._v("i")]),t._v(" 或 "),s("code",[t._v("j")]),t._v(" 带有重音，应该替换为"),s("code",[t._v("\\imath")]),t._v("、"),s("code",[t._v("\\jmath")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\hat{a}\n\\check{a}\n\\breve{a}\n\\tilde{a}\n\\bar{a}\n\\vec{a}\n\\acute{a}\n\\grave{a}\n\\mathring{a}\n\\dot{a}\n\\ddot{a}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"堆积符号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#堆积符号","aria-hidden":"true"}},[this._v("#")]),this._v(" 堆积符号")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("\\stacrel{上位符号}{基位符号}")]),t._v(" 基位符号大，上位符号小")]),t._v(" "),s("li",[s("code",[t._v("{上位公式\\atop 下位公式}")]),t._v(" 上下符号一样大")]),t._v(" "),s("li",[s("code",[t._v("{上位公式\\choose 下位公式}")]),t._v(" 上下符号一样大；上下符号被包括在圆弧内")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\vec{x}\\stackrel{\\mathrm{def}}{=}{x_1,\\dots,x_n}\\\\ {n+1 \\choose k}={n \\choose k}+{n \\choose k-1}\\\\ \\sum_{k_0,k_1,\\ldots>0 \\atop k_0+k_1+\\cdots=n}A_{k_0}A_{k_1}\\cdots \n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"定界符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定界符","aria-hidden":"true"}},[this._v("#")]),this._v(" 定界符")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("()\\big(\\big) \\Big(\\Big) \\bigg(\\bigg) \\Bigg(\\Bigg)\n\\big(\\Big) \\bigg(\\Bigg)\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("自适应放大命令")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\left\n\\right\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("(x)\\left(x^{y^z}\\right)\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"占位宽度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#占位宽度","aria-hidden":"true"}},[this._v("#")]),this._v(" 占位宽度")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("两个 quad 空格 "),s("code",[t._v("\\qquad")]),t._v("， 两个 m 的宽度：$a \\qquad b$")]),t._v(" "),s("li",[t._v("一个 quad 空格 "),s("code",[t._v("\\quad")]),t._v("， 一个m的宽度：$a \\quad b$")]),t._v(" "),s("li",[t._v("大空格 "),s("code",[t._v("\\")]),t._v("， 1/3m 宽度：$a\\ b$")]),t._v(" "),s("li",[t._v("中等空格 "),s("code",[t._v("\\;")]),t._v(" 2/7m 宽度：$a;b$")]),t._v(" "),s("li",[t._v("小空格 "),s("code",[t._v("\\,")]),t._v(" 1/6m 宽度：$a,b$")]),t._v(" "),s("li",[t._v("没有空格：$ab$")]),t._v(" "),s("li",[t._v("紧贴 "),s("code",[t._v("\\!")]),t._v(" ，缩进1/6m宽度：$a!b$")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("\\quad")]),this._v(' 代表当前字体下接近字符‘M’的宽度（approximately the width of an "M" in the current font）')])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"集合相关的运算命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集合相关的运算命令","aria-hidden":"true"}},[this._v("#")]),this._v(" 集合相关的运算命令")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("集合的大括号")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(" \\{ ...\\}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("属于")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\in\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("不属于")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\not\\in \n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("包含于")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("A\\subset B\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("真包含于")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("A \\subsetneqq B\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("包含")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("A \\supset B\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("真包含")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("A \\supsetneqq B\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("A不包含于B")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("A \\not \\subset B\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("A交B")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("A \\cap B\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("A并B")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("A \\cup B\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("A的闭包")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\overline{A}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("A减去B")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("A\\setminus B\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("实数集合")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\mathbb{R}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("空集")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\\emptyset\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"引自"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引自","aria-hidden":"true"}},[this._v("#")]),this._v(" 引自")])}],!1,null,null,null);e.default=r.exports}}]);