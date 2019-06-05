(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{499:function(t,a,s){"use strict";s.r(a);var n=s(8),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("这在我们平常操作 DOM 的时候司空见惯。就比如：我通过获取一个元素来改变其样式，自然而然的反映到 HTML 页面中。")]),t._v(" "),s("p",[t._v("但是，我们操作 JS 对象的时候，本质上操作的是 JS 堆内存，为什么会反映到页面中呢？就是因为浏览器存在这个 DOM 的映射机制。")]),t._v(" "),s("h2",{attrs:{id:"_1-什么是-dom-的映射机制？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是-dom-的映射机制？","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 什么是 DOM 的映射机制？")]),t._v(" "),s("p",[t._v("我们使用 JS 从页面获取到的元素对象，或者自己手动创建的已经插入页面的元素对象，与页面中的 HTML 元素是绑定在一起的。也就是说修改其中一个，另一个也会跟着自动修改。这就是 DOM 的映射机制。")]),t._v(" "),s("h2",{attrs:{id:"_2-形成映射的几种情形"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-形成映射的几种情形","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 形成映射的几种情形")]),t._v(" "),s("h3",{attrs:{id:"改变元素对象的属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#改变元素对象的属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 改变元素对象的属性")]),t._v(" "),s("p",[t._v("这是我们最常用到的一种情形。当我们需要为元素添加自定义属性、或者修改属性等，就可以从页面中获取到元素对象，然后对其进行修改，就能够自动反映到 HTML 页面元素上。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 修改从页面中获取的元素样式")]),t._v("\nDiv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 修改已经插入页面的元素的属性")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("这两种方式得到的元素对象，修改其属性，都能够直接反映到页面中，不需要再次插入页面中。")]),t._v(" "),s("h3",{attrs:{id:"在元素内部继续添加元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在元素内部继续添加元素","aria-hidden":"true"}},[t._v("#")]),t._v(" 在元素内部继续添加元素")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 在其内部插入标签或文本")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Div"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'li'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 空的元素集合")]),t._v("\nDiv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("innerHTML")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<li></li>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 有一个元素集合")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 添加自己创建的元素对象，同样原理")]),t._v("\nDiv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("在容器中的数据绑定前，我们获取容器中元素，得到一个空的元素集合，容器数据绑定后，我们不需要重新获取，DOM 的映射机制会帮我们把新增加的元素映射到之前获取的空集合中，让其变为有元素的集合。")]),t._v(" "),s("h3",{attrs:{id:"在页面中追加已有元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在页面中追加已有元素","aria-hidden":"true"}},[t._v("#")]),t._v(" 在页面中追加已有元素")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Div"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'li'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDiv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("code",[t._v("appendChild")]),t._v(" 在追加元素对象的时候，如果这个元素在容器中已经存在，此时"),s("strong",[t._v("并不是克隆一份新的追加到末尾，而是把原有的元素移动到末尾。")])]),t._v(" "),s("blockquote",[s("p",[t._v("其根本原因在于，同一个元素在页面中，只能够有一个位置。把 JS 元素对象插入页面中某个位置，实际上就是把其绑定的 HTML 元素移动到那个位置上。")])]),t._v(" "),s("p",[t._v("这里的元素已经存在有两种情形：")]),t._v(" "),s("ul",[s("li",[t._v("元素是从页面中获取到的")]),t._v(" "),s("li",[t._v("创建的元素已经添加过一次，再次添加时")])]),t._v(" "),s("p",[t._v("因此，就无需手动移除原先的元素，再进行添加。直接插入即可。")]),t._v(" "),s("h2",{attrs:{id:"_3-特殊情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-特殊情况","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 特殊情况")]),t._v(" "),s("p",[s("code",[t._v("querySelectAll")]),t._v(" 获取的集合是静态集合（staticNodeList），不存在上述所谓的映射机制，基于这个方法，数据绑定完成后需要重新获取一次才可以。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" box "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelectorAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#box'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" box1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'box'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 获取到的是 NodeList 对象")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("box1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 而这里获取到的是 HTMLElement 的实例")]),t._v("\n")])])]),s("p",[t._v("这个特殊的 NodeList 不存在与 HTML 页面元素的映射，而且没有很多 HTMLElement 实例才拥有的方法。因此，使用这个方法的时候每次操作时，都应该重新获取。")]),t._v(" "),s("p",[t._v("另外，jQuery 中获取的元素同样不存在这些映射，实现映射需要使用其内部的方法，而且要使用原生 HTMLElement 实例的方法，需要通过后面加 "),s("code",[t._v("[0]")]),t._v(" 的方法转换为原生元素对象。")]),t._v(" "),s("p",[t._v("另外，由于存在这种映射机制，在使用循环 DOM 中，改变了 DOM 的顺序，那么循环原本的顺序也就改变了。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forEach"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("children"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 这样做你会发现，循环完成后 children 改变了，不符合预期")]),t._v("\n")])])]),s("p",[t._v("因此，真实项目中，不应该过分依赖于 DOM 的映射机制。")]),t._v(" "),s("Quote",[t._v("生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。")])],1)},[],!1,null,null,null);a.default=e.exports}}]);