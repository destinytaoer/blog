(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{461:function(t,e,l){"use strict";l.r(e);var a=l(8),i=Object(a.a)({},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("p",[t._v("运算符的优先级决定了表达式中运算执行的先后顺序，优先级高的运算符最先被执行。")]),t._v(" "),l("h2",{attrs:{id:"结合性"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#结合性","aria-hidden":"true"}},[t._v("#")]),t._v(" 结合性")]),t._v(" "),l("p",[t._v("结合性决定了拥有相同优先级的运算符的执行顺序。考虑下面这个表达式：")]),t._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("a OP b OP c\n")])])]),t._v(" "),l("p",[t._v("左结合（左到右）相当于把左边的子表达式加上小括号 "),l("code",[t._v("(a OP b) OP c")]),t._v("，右关联（右到左）相当于 "),l("code",[t._v("a OP (b OP c)")]),t._v("。")]),t._v(" "),l("p",[t._v("赋值运算符是右关联的，所以你可以这么写：")]),t._v(" "),l("div",{staticClass:"language-javascript extra-class"},[l("pre",{pre:!0,attrs:{class:"language-javascript"}},[l("code",[t._v("a "),l("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b "),l("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),l("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),l("p",[t._v("结果 a 和 b 的值都会成为5。这是因为赋值运算符的返回结果就是赋值运算符右边的那个值，具体过程是：b 被赋值为 5，然后 a 也被赋值为 b=5 的返回值，也就是 5。")]),t._v(" "),l("h2",{attrs:{id:"汇总表"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#汇总表","aria-hidden":"true"}},[t._v("#")]),t._v(" 汇总表")]),t._v(" "),l("p",[t._v("下面的表将所有运算符按照优先级的不同从高到低排列。")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("优先级")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("运算类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("关联性")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("运算符")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("20")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("圆括号")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("n/a")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("( … )")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("19")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("成员访问")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从左到右")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… . …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("需计算的成员访问")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从左到右")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… [ … ]")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("new (带参数列表)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("n/a")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("new … ( … )")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("函数调用")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从左到右")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… ( … )")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("18")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("new (无参数列表)\t从右到左\tnew …")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("17")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("后置递增(运算符在后)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("n/a")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… ++")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("后置递减(运算符在后)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… --")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("16")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("逻辑非")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从右到左")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("! …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("按位非")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("~ …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("一元加法")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("+ …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("一元减法")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("- …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("前置递增")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("++ …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("前置递减")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-- …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("typeof")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("typeof …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("void")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("void …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("delete")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("delete …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("await")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("await …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("15")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("幂")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从右到左")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… ** …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("14")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("乘法")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从左到右")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… * …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("除法")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… / …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("取模")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… % …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("13")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("加法")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从左到右")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… + …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("减法")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… - …")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("12")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("按位左移")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从左到右")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… << …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("按位右移")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… >> …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("无符号右移")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… >>> …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("11")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("小于")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从左到右")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… < …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("小于等于")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… <= …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("大于")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… > …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("大于等于")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… >= …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("in")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… in …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("instanceof")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… instanceof …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("10")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("等号")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从左到右")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… == …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("非等号")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… != …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("全等号")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… === …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("非全等号")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… !== …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("9")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("按位与")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从左到右")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… & …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("按位异或")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从左到右")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… ^ …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("7")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("按位或")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从左到右")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("…")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("6")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("逻辑与")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从左到右")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… && …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("逻辑或")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从左到右")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("…")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("条件运算符")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从右到左")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… ? … : …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("赋值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从右到左")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… = …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… += …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… -= …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… *= …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… /= …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… %= …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… <<= …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… >>= …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… >>>= …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… &= …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… ^= …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("…")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("yield")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从右到左")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("yield …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("yield*")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("yield* …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("展开运算符")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("n/a")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("... …")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("0")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("逗号")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从左到右")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("… , …")])])])]),t._v(" "),l("div",{staticClass:"language-javascript extra-class"},[l("pre",{pre:!0,attrs:{class:"language-javascript"}},[l("code",[l("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),l("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x"),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),l("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),l("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),l("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nb"),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c "),l("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),l("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("y"),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),l("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),l("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 点的优先级高于 = 的优先级")]),t._v("\n\na "),l("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> {y:1}")]),t._v("\nb "),l("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> {x:1, c: {y:1}}")]),t._v("\n")])])]),l("h2",{attrs:{id:"关于-new"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#关于-new","aria-hidden":"true"}},[t._v("#")]),t._v(" 关于 new")]),t._v(" "),l("div",{staticClass:"language-javascript extra-class"},[l("pre",{pre:!0,attrs:{class:"language-javascript"}},[l("code",[l("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> new 后面构造函数没有括号，优先级低于点，相当于 new 一个 Foo.getName 函数，以构造函数的形式执行")]),t._v("\n"),l("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),l("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo"),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getName")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n"),l("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=>有括号，优先级相当，先执行 new，相当于(new Foo()).getName()，返回新实例，调用原型上的 getName() 方法")]),t._v("\n"),l("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),l("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),l("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n"),l("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 先执行 new Foo()，返回一个新实例")]),t._v("\n"),l("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 然后由于实例后面没有括号，相当于 new 一个实例的 getName 函数，以构造函数的形式执行")]),t._v("\n"),l("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),l("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("new")]),t._v(" "),l("span",{pre:!0,attrs:{class:"token function"}},[t._v("Foo")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),l("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),l("Quote",[t._v("生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。")])],1)},[],!1,null,null,null);e.default=i.exports}}]);