(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{464:function(t,a,s){"use strict";s.r(a);var n=s(8),r=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("JS 怎么创建变量？相信大家都会：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("那么它们具体存储在哪里，又是怎么运行的呢？")]),t._v(" "),s("p",[t._v("这次，就聊一聊 JS 的堆栈内存和变量的创建机制。（这里只介绍 ES5 的机制）")]),t._v(" "),s("h2",{attrs:{id:"_1-堆栈内存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-堆栈内存","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 堆栈内存")]),t._v(" "),s("p",[t._v("在了解变量创建机制之前，先来了解一下变量的存储空间。")]),t._v(" "),s("p",[t._v("存储空间分为栈内存和堆内存。")]),t._v(" "),s("p",[t._v("栈内存：作用域")]),t._v(" "),s("ul",[s("li",[t._v("提供一个供 JS 代码自上而下执行的环境（代码都是在栈内存中执行的）")]),t._v(" "),s("li",[t._v("存储基本类型值。由于基本类型比较简单，它们都是直接在栈内存中开辟一个位置，直接把值存储进去的")])]),t._v(" "),s("p",[t._v("堆内存：引用值对应的空间")]),t._v(" "),s("ul",[s("li",[t._v("对象：键值对")]),t._v(" "),s("li",[t._v("函数：代码字符串")])]),t._v(" "),s("p",[t._v("由于引用类型的值可能过于复杂，所以需要另外开辟空间来存储，而变量中存储的只是指向这个空间的地址。")]),t._v(" "),s("h2",{attrs:{id:"_2-变量的创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-变量的创建","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 变量的创建")]),t._v(" "),s("p",[t._v("（1）创建作用域\n当浏览器（内核/引擎）渲染和解析 JS 代码的时候，会提供一个供 JS 代码运行的环境，这个环境称为“全局作用域”（global / window scope），是一个栈内存")]),t._v(" "),s("p",[t._v("（2）进行变量提升\n将在作用域中使用 var / function 声明的变量进行提升。其中")]),t._v(" "),s("ul",[s("li",[t._v("var 声明的变量只提升声明，不定义")]),t._v(" "),s("li",[t._v("function 声明的变量，既提升声明，也提升定义")])]),t._v(" "),s("p",[t._v("所以，函数在当前作用域的任何地方都可以使用。")]),t._v(" "),s("p",[t._v("（2）代码自上而下执行\n基本数据类型的值会存储在当前作用域下，以 "),s("code",[t._v("var a = 12")]),t._v(" 为例")]),t._v(" "),s("ul",[s("li",[t._v("首先在当前作用域中声明一个变量 a（这一步会在变量提升阶段完成，执行时会忽略这个声明）")]),t._v(" "),s("li",[t._v("然后开辟一个空间存储值 12")]),t._v(" "),s("li",[t._v("最后让声明的变量与存储的值进行关联（就是赋值操作，也叫做定义）")])]),t._v(" "),s("p",[t._v("基本数据类型（也叫做值类型），是按照值来操作的：把原有的值赋值一份放到新的空间或者位置上，和原来的值没有关系")]),t._v(" "),s("p",[t._v("引用数据类型的值，我们需要开辟一个新的空间（理解为仓库），把内容存储到这个空间中")]),t._v(" "),s("ul",[s("li",[t._v("首先声明一个变量（同样，这一步是在变量提升阶段完成，执行时会忽略这个声明）")]),t._v(" "),s("li",[t._v("然后开辟一个新的内存空间，把对象中的键值对依次存储起来（此空间有个 16 进制的地址）")]),t._v(" "),s("li",[t._v("让变量与空间地址关联起来（把空间地址赋值给变量）")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> Uncaught TypeError: Cannot read property 'n' of undefined")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("原因分析")]),t._v(" "),s("ol",[s("li",[t._v("形成一个全局作用域（栈内存）")]),t._v(" "),s("li",[t._v("代码自上而下执行")])]),t._v(" "),s("ul",[s("li",[t._v("首先开辟一个新的堆内存，把键值对存储到对内存中 "),s("code",[t._v("n: 10")]),t._v(", "),s("code",[t._v("m: obj.n * 10")])]),t._v(" "),s("li",[t._v("此时堆内存信息还没有存储完成，空间地址还没有与变量 "),s("code",[t._v("obj")]),t._v(" 关联，此时的 "),s("code",[t._v("obj")]),t._v(" 是 "),s("code",[t._v("undefined")]),t._v("，"),s("code",[t._v("obj.n <=> undefined.n")]),t._v("，所以报错")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("m "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时的 obj 已经有值了")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 100")]),t._v("\n")])])]),s("p",[t._v("引用类型不是按照值来操作，它操作的是空间的地址：把原有空间地址赋值给新的变量，但是原来的空间没有被克隆，还是同一个空间，这样就会出现多个变量关联的是相同的空间，相互之间就会存在影响。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\narr2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\narr2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\narr2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\narr1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arr2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 1, 0, 4, 2")]),t._v("\n")])])]),s("p",[t._v("原因分析：")]),t._v(" "),s("ol",[s("li",[t._v("数组也是对象，属于引用类型，会开辟一个新的堆内存保存 "),s("code",[t._v("[3,4]")])]),t._v(" "),s("li",[t._v("往下，"),s("code",[t._v("arr2 = arr1")]),t._v("，此时两个变量同时保存一个堆内存的地址")]),t._v(" "),s("li",[t._v("改变 arr2 会反映到 arr1，此时 arr1: "),s("code",[t._v("[1,4]")]),t._v(" arr2: "),s("code",[t._v("[1,4]")])]),t._v(" "),s("li",[t._v("新开辟一个堆内存，保存 "),s("code",[t._v("[4,5]")]),t._v("，然后再把地址赋值给 arr2")]),t._v(" "),s("li",[t._v("此时两个变量关联的内存不再一样，对其的操作不再相互影响，此时 arr1: "),s("code",[t._v("[1,4]")]),t._v(" arr2:"),s("code",[t._v("[4,5]")])]),t._v(" "),s("li",[t._v("再次赋值后，arr1: "),s("code",[t._v("[1,0]")]),t._v(" arr2: "),s("code",[t._v("[4,2]")])])]),t._v(" "),s("Quote",[t._v("生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。")])],1)},[],!1,null,null,null);a.default=r.exports}}]);