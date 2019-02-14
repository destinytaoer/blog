(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{200:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("JS 令人头疼的一点就是它属于弱类型语言，一个变量存储的值可以是字符串、数值、布尔值或者对象等，可以随时变更。获取一个变量，你不会知道其存储的值是什么类型的，所以很多时候都需要进行类型检测。")]),t._v(" "),s("p",[t._v("除了手动变更类型之外，有些情况下，JS 内部也会自动进行类型转换，以满足部分操作符以及语句等的执行。")]),t._v(" "),s("p",[t._v("下面就是我对 JS 类型转换的一些总结，其中大部分来自《JavaScript 高级程序设计》这本书。")]),t._v(" "),s("h1",{attrs:{id:"_1-boolean-转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-boolean-转换","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. Boolean 转换")]),t._v(" "),s("h2",{attrs:{id:"转换情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换情况","aria-hidden":"true"}},[t._v("#")]),t._v(" 转换情况")]),t._v(" "),s("ul",[s("li",[t._v("调用 "),s("code",[t._v("Boolean()")])]),t._v(" "),s("li",[t._v("在 "),s("code",[t._v("if")]),t._v(" 或 "),s("code",[t._v("while")]),t._v(" 流程控制中，内部执行相应的 "),s("code",[t._v("Boolean()")]),t._v(" 转换")]),t._v(" "),s("li",[t._v("逻辑运算符，主要是 "),s("code",[t._v("!")]),t._v(" 和 "),s("code",[t._v("!!")]),t._v("，内部执行 "),s("code",[t._v("Boolean()")]),t._v(" 转换")])]),t._v(" "),s("h2",{attrs:{id:"转换规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换规则","aria-hidden":"true"}},[t._v("#")]),t._v(" 转换规则")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("数据类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("转换为 "),s("code",[t._v("true")]),t._v(" 的值")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("转换为 "),s("code",[t._v("false")]),t._v(" 的值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("任何非空字符串")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("空字符串"),s("code",[t._v('""')])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("任何非零数字值（包括无穷大）")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("0")]),t._v(" 和 "),s("code",[t._v("NaN")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("任何对象")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("null")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("Undefined")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不适用")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("undefined")])])])])]),t._v(" "),s("p",[t._v("也就是说，只有 "),s("code",[t._v('0 / NaN / "" / null / undefined')]),t._v(" 才会转换为 "),s("code",[t._v("false")]),t._v("，其余都是 "),s("code",[t._v("true")])]),t._v(" "),s("p",[t._v("所以在 "),s("code",[t._v("if")]),t._v(" 判断中，直接写变量有时候是不够严谨的。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 想要在 a 不存在或没定义的时候执行")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 实际上存储的值是 0 或者 '' 等也会执行")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 应该使用 typeof")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> a 不存在或没定义的时候执行")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 或者使用全等")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" undefined"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 使用 == 也不够严谨，因为 null == undefined")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 需要区分 null 或 undefined 的 情况较少")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在真实的项目中还是会经常用到第一种写法，因为其较为简单，而且能满足需求。因为默认情况下，判断的值只有两种情况：第一种是不存在或者未定义、第二种就是约定的值。很少会出现约定的值是转换为 false 的情况，但是使用的时候也要特别的注意。")]),t._v(" "),s("h1",{attrs:{id:"_2-number-转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-number-转换","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. Number 转换")]),t._v(" "),s("h2",{attrs:{id:"转换情况-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换情况-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 转换情况")]),t._v(" "),s("ul",[s("li",[t._v("调用 "),s("code",[t._v("Number()")]),t._v("、"),s("code",[t._v("parseInt()")]),t._v("、"),s("code",[t._v("parseFloat()")])]),t._v(" "),s("li",[t._v("其他情况都是使用 "),s("code",[t._v("Number()")]),t._v(" 的转换机制\n"),s("ul",[s("li",[s("code",[t._v("isNaN()")])]),t._v(" "),s("li",[t._v("一元加或减操作符，注意：这里是一元的，如 "),s("code",[t._v("s = + s")]),t._v("，区别于加法和拼接")]),t._v(" "),s("li",[t._v("递增或递减，以及加法（除了拼接）、减法、乘法、除法、求模等操作符")]),t._v(" "),s("li",[t._v("关系操作符")])])])]),t._v(" "),s("h2",{attrs:{id:"转换规则-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换规则-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 转换规则")]),t._v(" "),s("p",[s("code",[t._v("Number()")]),t._v("：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Boolean 值")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("true")]),t._v(" => "),s("code",[t._v("1")])]),t._v(" "),s("li",[s("code",[t._v("false")]),t._v(" => "),s("code",[t._v("0")])])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("null")]),t._v(" => "),s("code",[t._v("0")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("undefined")]),t._v(" => "),s("code",[t._v("NaN")])])]),t._v(" "),s("li",[s("p",[t._v("String 值")]),t._v(" "),s("ul",[s("li",[t._v("只包含数字（包含正负号），将其"),s("strong",[t._v("转换为十进制数值")]),t._v("，忽略前导零")]),t._v(" "),s("li",[t._v("包含有效的浮点格式，将其转换为对应的浮点数值，忽略前导零")]),t._v(" "),s("li",[t._v("包含有效的十六进制格式，将其转换为相同大小的十进制数值")]),t._v(" "),s("li",[t._v("空字符串 "),s("code",[t._v('""')]),t._v("，空格 "),s("code",[t._v("' '")]),t._v("，换行符"),s("code",[t._v("'\\n'")]),t._v("，制表符"),s("code",[t._v("'\\t'")]),t._v(" => "),s("code",[t._v("'0'")])]),t._v(" "),s("li",[t._v("包含其他格式的字符串，则将其转换为 "),s("code",[t._v("NaN")])])])]),t._v(" "),s("li",[s("p",[t._v("Object 值")]),t._v(" "),s("ul",[s("li",[t._v("调用对象的 "),s("code",[t._v("toString()")]),t._v(" 方法，然后依照上面的规则转换返回的字符串")])])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [普通对象]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[object Object]'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [数组]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12, 23'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [正则]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/^$/'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [函数]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"function a(){}"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),t._v("\n\n")])])]),s("p",[s("code",[t._v("parseInt()")]),t._v("：")]),t._v(" "),s("ul",[s("li",[t._v("第一个参数必须是字符串，如果不是则转换为字符串，使用 "),s("code",[t._v("toString()")]),t._v(" 方法转换为字符串")]),t._v(" "),s("li",[t._v("忽略前面的空格，直至找到第一个非空字符")]),t._v(" "),s("li",[t._v("第一个非空字符不是数字字符或者负号，则返回 "),s("code",[t._v("NaN")])]),t._v(" "),s("li",[t._v("空字符串返回 "),s("code",[t._v("NaN")])]),t._v(" "),s("li",[t._v("第一个是数字字符，会继续解析下一个字符，直至遇到非数字字符，返回前面的数字字符")]),t._v(" "),s("li",[t._v("遇到非数字字符后，后面的字符都是无效的了")]),t._v(" "),s("li",[t._v("传入第二个参数：转换时使用的基数，即多少进制，就可以解析二进制、八进制、十六进制的字符串。指定了第二个参数的，字符串中甚至不用带前面的前缀，如 "),s("code",[t._v('parseInt("AF", 16);//175')])]),t._v(" "),s("li",[t._v("为了避免解析错误，任何情况下都应该明确指定基数，十进制也不例外")])]),t._v(" "),s("p",[s("code",[t._v("parseFloat()")]),t._v("：")]),t._v(" "),s("ul",[s("li",[t._v("第一个参数必须是字符串，如果不是则转换为字符串，使用 "),s("code",[t._v("String()")]),t._v(" 方法")]),t._v(" "),s("li",[t._v("字符串中第一个小数点有效，第二个无效")]),t._v(" "),s("li",[t._v("空字符串返回 "),s("code",[t._v("NaN")])]),t._v(" "),s("li",[t._v("始终忽略前导零")]),t._v(" "),s("li",[t._v("只要遇到非浮点字符或者第二个小数点，后面的字符串都无效")]),t._v(" "),s("li",[t._v("字符串解析为整数，那么返回整数")])]),t._v(" "),s("h1",{attrs:{id:"_3-string-转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-string-转换","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. String 转换")]),t._v(" "),s("h2",{attrs:{id:"转换情况-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换情况-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 转换情况")]),t._v(" "),s("ul",[s("li",[t._v("基于 "),s("code",[t._v("alert / confirm / prompt / document.write")]),t._v(" 等方法输出内容")]),t._v(" "),s("li",[t._v("调用 "),s("code",[t._v("toString()")]),t._v(" 、"),s("code",[t._v("String()")])]),t._v(" "),s("li",[t._v("加号操作符，有一个是字符串时，内部调用 "),s("code",[t._v("toString()")])]),t._v(" "),s("li",[t._v("对象转换成 Number 类型时，内部调用 "),s("code",[t._v("toString()")])])]),t._v(" "),s("h2",{attrs:{id:"转换规则-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换规则-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 转换规则")]),t._v(" "),s("p",[s("code",[t._v("toString()")]),t._v(" 方法")]),t._v(" "),s("ul",[s("li",[t._v("返回相应值的字符串表现")]),t._v(" "),s("li",[t._v("数值、布尔值、对象和字符串值都有一个 "),s("code",[t._v("toString()")]),t._v(" 方法")]),t._v(" "),s("li",[t._v("字符串的 "),s("code",[t._v("toString()")]),t._v(" 方法返回字符串的一个副本")]),t._v(" "),s("li",[s("code",[t._v("null")]),t._v(" => "),s("code",[t._v('"null"')])]),t._v(" "),s("li",[s("code",[t._v("undefined")]),t._v(" => "),s("code",[t._v('"undefined"')])]),t._v(" "),s("li",[s("code",[t._v("NaN")]),t._v(" => "),s("code",[t._v("'NaN'")])]),t._v(" "),s("li",[s("code",[t._v("true")]),t._v(" => "),s("code",[t._v("'true'")]),t._v("，"),s("code",[t._v("false")]),t._v(" => "),s("code",[t._v("'false'")])]),t._v(" "),s("li",[t._v("普通对象只能返回 "),s("code",[t._v("[object Object]")]),t._v("，不能返回字符串形式")]),t._v(" "),s("li",[t._v("数组 "),s("code",[t._v("[]")]),t._v(" => "),s("code",[t._v("''")]),t._v("，"),s("code",[t._v("[12, 23]")]),t._v(" => "),s("code",[t._v("'12,23'")])]),t._v(" "),s("li",[t._v("正则、日期等对象都返回其字符串表现")])]),t._v(" "),s("p",[s("code",[t._v("String()")]),t._v(" 转型函数，你可以认为 "),s("code",[t._v("String")]),t._v(" 和 "),s("code",[t._v("toString")]),t._v(" 转换机制是一样的。")]),t._v(" "),s("h1",{attrs:{id:"_4-特殊转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-特殊转换","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 特殊转换")]),t._v(" "),s("p",[s("strong",[t._v("+ 号操作的特殊情况")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 虽然没有看到字符串，但是引用类型转换为数字时，会先转换为字符串，这样就变成了字符串拼接")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//=> "1210"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '[object Object]10'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 10")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 原因是 {} 会被解析为代码块，最后只是操作了 +10 ")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '[object Object][object Object]'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 非常特殊，不同浏览器解析有差异")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '[object Object][object Object]'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> NaN")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 一行中开头的 {} 才会被解析为代码块，所以用 () 包裹后可以避免被解析为代码块，一行后面的 {} 不会被解析为代码块，而是空对象。")]),t._v("\n")])])]),s("p",[s("strong",[t._v("== 进行比较时")]),t._v("\n对象 == 对象：地址相等才相等")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=>false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> false")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" obj2 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> true")]),t._v("\n")])])]),s("p",[t._v("对象 == 数字：把对象转换为数字\n对象 == 布尔：都转化为数字\n字符串 == 数字：把字符串转换为数字\n字符串 == 布尔：都转化为数字\n布尔 == 数字：把布尔转换为数字\n对象 == 字符串：把对象转换为字符串之后再比较")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> false，都转化为数字")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> true，都转换为数字")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> false，都转换为数字")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> true，先算 ![] 为 false，再比较")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> false，先算 ![] 为 false，再比较")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> true，先算 ![] 为 false，然后都转换为数字再比较")]),t._v("\n")])])]),s("blockquote",{staticClass:"blockquote-center"},[t._v("生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。")])])}],!1,null,null,null);a.default=e.exports}}]);