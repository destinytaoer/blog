(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{348:function(t,s,e){"use strict";e.r(s);var n=e(1),a=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("函数作为引用类型，也是按照引用地址来操作的。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("函数执行的时候，都会形成一个全新的私有作用域（私有栈内存），目的是：")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),e("p",[t._v("构造函数的创建与普通函数是一样的。")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),e("p",[t._v("再次执行构造函数，就是把上面的操作再重复一次，会形成新的实例，所以实例之间是独立分开的。")]),t._v(" "),t._m(15),t._m(16),t._v(" "),e("p",[t._v("（1）构造函数执行，不写 return，会默认返回创建的实例，但是如果我们自己写了 return？")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),e("p",[t._v("（2）在构造函数执行的时候，如果不需要传入实参，可以省略后面的小括号，不会有影响")]),t._v(" "),t._m(19),e("common-Quote",[t._v("生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。")])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-普通函数的创建执行机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-普通函数的创建执行机制","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 普通函数的创建执行机制")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("【创建函数】")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("首先开辟一个新的堆内存，"),s("strong",[this._v("把函数体中的代码当作字符串存储")]),this._v("在内存中（对象存储的是键值对）")]),this._v(" "),s("li",[this._v("在当前上下文中声明函数（变量），函数声明和定义会提升到最前面")]),this._v(" "),s("li",[this._v("把开辟的堆内存地址赋值给函数名（变量名）")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("此时输出函数名 "),s("code",[this._v("fn")]),this._v("（不是 "),s("code",[this._v("fn()")]),this._v("），代表当前函数本身，如果我们要执行函数，就要加上小括号即 "),s("code",[this._v("fn()")]),this._v("。这是两种不同本质的操作。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("【函数执行】")]),this._v("\n目的：把之前存储到堆内存中的代码字符串变为真正的 JS 代码自上而下执行，从而实现应有的功能。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ol",[e("li",[t._v("函数执行，首先会形成一个私有的作用域（一个供代码执行的环境，也是一个栈内存）")]),t._v(" "),e("li",[t._v("把之前在堆内存中存储的字符串复制一份到新开辟的栈内存中变为真正的 JS 代码")]),t._v(" "),e("li",[t._v("然后再进行变量提升 （var function 提前声明， 先形参赋值， 再变量提升）")]),t._v(" "),e("li",[t._v("最后在这个新开辟的作用域中自上而下执行")]),t._v(" "),e("li",[t._v("栈内存是否销毁")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("把原有堆内存中存储的字符串变成真正的 JS 代码执行")]),this._v(" "),s("li",[this._v("保护里面的私有变量不受外界的干扰（和外界隔离）")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("我们把函数执行的这种保护机制，称之为“闭包”")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-构造函数的执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-构造函数的执行","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 构造函数的执行")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("构造函数的执行，可以使用 "),s("code",[this._v("new")]),this._v(" 操作符，也可以像普通函数一样。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用 "),s("code",[this._v("new")]),this._v(" 操作符执行时：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("像普通函数执行一样，形成一个私有作用域（栈内存）")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("代码复制到栈内存中")]),this._v(" "),s("li",[this._v("形参赋值和变量提升")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("【构造函数执行独有】在 JS 代码执行之前，首先在当前形成的私有作用域中新建一个空对象（堆内存），并且让函数中的执行主体（this）指向这个新的堆内存，即 this === 新创建的对象")]),this._v(" "),s("li",[this._v("代码自上而下执行")]),this._v(" "),s("li",[this._v("【构造函数执行独有】代码执行完成，把之前创建的堆内存地址返回")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("也就是开始创建的对象其实就是当前函数的一个实例，我们让 this 指向这个实例，代码执行汇总的 this.xxx = xxx 都是给实例设置 "),s("strong",[this._v("私有属性")]),this._v("，最后会把默认创建的实例返回。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fn")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" n "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" age "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fn")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fn")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aaa'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 其中只有 this.xxx = xx 才和实例有关系，而 n 只是私有作用域中的一个私有变量，不直接影响实例。")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"构造函数的细节"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构造函数的细节","aria-hidden":"true"}},[this._v("#")]),this._v(" 构造函数的细节")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("return 的是一个基本值或者没有值，返回结果依然是类的实例，没有受到影响")]),this._v(" "),s("li",[this._v("如果返回的是引用值，则会把默认返回的实例覆盖，此时接受到的结果就不再是当前类的实例了")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("所以，在构造函数执行时，尽量不要使用 "),s("code",[this._v("return")]),this._v(" 返回值，防止覆盖实例")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fn")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 等同于 new Fn()")]),t._v("\n")])])])}],!1,null,null,null);s.default=a.exports}}]);