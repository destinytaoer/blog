(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{461:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("VuePress 是一款使用 Vue 驱动的静态网站生成器，是 Vue 的作者 Evan You 为了方便文档的编写而开发的。")]),t._v(" "),a("ul",[a("li",[t._v("默认主题与 Vue 官方文档一致")]),t._v(" "),a("li",[t._v("简洁，少配置，高性能")]),t._v(" "),a("li",[t._v("Markdown 专为技术文档提供拓展")]),t._v(" "),a("li",[t._v("自带 PWA")]),t._v(" "),a("li",[t._v("自定义主题，可定制程度完全由自己决定")])]),t._v(" "),a("blockquote",[a("p",[t._v("官方文档：由于 1.x 还处于测试阶段，可能随时变更，所以建议选用 0.x 版本")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://v0.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("0.x 版本"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.x 版本"),a("OutboundLink")],1)])])]),t._v(" "),a("h2",{attrs:{id:"_1-初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-初始化","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 初始化")]),t._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("首先需要安装 vuepress")]),t._v(" "),a("p",[t._v("可以使用全局安装：（选一个版本安装即可，使用 yarn 或 npm 都可以）")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("yarn add global vuepress "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 0.x 版本")]),t._v("\nyarn add global vuepress@next "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1.x 版本")]),t._v("\n")])])]),a("p",[t._v("也可以使用局部安装，在你的项目根目录下：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("yarn add -D vuepress\nyarn add -D vuepress@next\n")])])]),a("p",[t._v(":::danger\n注意有一个坑，我遇到过，安装 vuepress@next 以及其他插件时，默认会安装 alpha 0 版本，需要修改 package.json 文件，更改版本号，再重新使用 yarn 安装一下。")]),t._v(" "),a("p",[t._v("另外，全局安装与局部安装在后面的部署命令中会有些差别。\n:::")]),t._v(" "),a("h3",{attrs:{id:"结构目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结构目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 结构目录")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".\n├── docs\n│   ├── .vuepress\n│   │   ├── public\n│   │   └── config.js\n│   │ \n│   └── README.md\n│ \n└── package.json\n")])])]),a("p",[t._v("可详细查看："),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/directory-structure.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("目录结构"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"_2-配置-config-js-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置-config-js-文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 配置 config.js 文件")]),t._v(" "),a("h3",{attrs:{id:"基础配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 基础配置")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"destiny\'Note"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 项目根路径")]),t._v("\n  dest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/dist/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打包后的文件夹路径，为了方便，我把 dist 文件夹放到了根目录上")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// head 标签中的额外内容")]),t._v("\n  head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" rel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'icon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/favicon.ico'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个是标签页 logo")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 语言配置")]),t._v("\n  locales"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 键名是该语言所属的子路径")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 作为特例，默认语言可以使用 '/' 作为其路径。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      lang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zh-CN'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将会被设置为 <html> 的 lang 属性")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("可详细查看："),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"主题配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主题配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 主题配置")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主题配置")]),t._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 顶部导航")]),t._v("\n    nav"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'首页'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'归档'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/archives/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'分类'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/categories/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'标签'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/tags/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'关于我'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/about/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 侧边栏")]),t._v("\n    sidebar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sidebarDepth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认 1 提取到 h2，0 为禁用，2 为 h2，h3")]),t._v("\n    displayAllHeaders"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认值：false 侧边栏只会显示由当前活动页面的标题组成的链接")]),t._v("\n    activeHeaderLinks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认值：true 滚动时通过 hash 高亮侧边栏标题")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Git 仓库和编辑链接")]),t._v("\n    repo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'username/repo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 你的仓库")]),t._v("\n    repoLabel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GitHub'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导航栏上的文本")]),t._v("\n\n    editLinks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 默认为 "Edit this page"')]),t._v("\n    editLinkText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'编辑此页面'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("可详细查看："),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5",target:"_blank",rel:"noopener noreferrer"}},[t._v("默认主题配置"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"_3-首页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-首页","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 首页")]),t._v(" "),a("p",[t._v("配置 docs 下的 README.md 文件即可：")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token hr punctuation"}},[t._v("---")]),t._v("\nhome: true\nheroImage: /hero.jpg\nheroText: Hero\ntagline: Hero 副标题\nactionText: 快速上手 →\nactionLink: /zh/guide/\nfeatures:\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" title: 简洁至上\n  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" title: Vue驱动\n  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" title: 高性能\n  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[t._v("footer: MIT Licensed | Copyright © 2018-present Evan You\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])])]),a("p",[t._v("首页必须设置 home 为 true。默认样式与官方文档首页一致。")]),t._v(" "),a("h2",{attrs:{id:"_4-开发和部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-开发和部署","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 开发和部署")]),t._v(" "),a("h3",{attrs:{id:"定义脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义脚本","aria-hidden":"true"}},[t._v("#")]),t._v(" 定义脚本")]),t._v(" "),a("p",[t._v("初始化 package.json，如果是局部安装的话，这个文件已经存在，不需要执行这个命令")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("yarn init\n")])])]),a("p",[t._v("编辑 package.json 文件，添加如下脚本：（这里需要注意）")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ...\n  // 全局安装\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  // 局部安装\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npx vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npx vuepress build docs"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("个人不喜欢官方的写法，就把名称写的简洁一些。")])]),t._v(" "),a("p",[t._v("运行脚本命令：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("yarn dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开发")]),t._v("\nyarn build "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包")]),t._v("\n")])])]),a("h3",{attrs:{id:"部署到-github-pages-上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署到-github-pages-上","aria-hidden":"true"}},[t._v("#")]),t._v(" 部署到 GitHub Pages 上")]),t._v(" "),a("p",[t._v("部署到 GitHub 上，首先要在 GitHub 上建立仓库，这里省略。")]),t._v(" "),a("p",[t._v("然后再本地初始化仓库，并关联远程仓库")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote add origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 你的远程仓库")]),t._v("\n")])])]),a("p",[t._v("打包之后把整个项目上传到 master 分支上，方便管理")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" add -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'init blog'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 首次提交需要 --set-upstream，后续可以去掉")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --set-upstream origin master "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所有代码推送到远程仓库的 master 分支上")]),t._v("\n")])])]),a("p",[t._v("单独将打包好的文件上传到 gh-pages 分支上，自动会生成 GitHub Pages，在仓库设置里可以查看到相应地址。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" subtree push --prefix dist origin gh-pages "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只将 dist 上传到 gh-pages 分支")]),t._v("\n")])])]),a("p",[t._v("注意，最好配置一个 .gitignore 文件，去掉不需要上传的文件和文件夹。")]),t._v(" "),a("h3",{attrs:{id:"自动化部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动化部署","aria-hidden":"true"}},[t._v("#")]),t._v(" 自动化部署")]),t._v(" "),a("p",[t._v("每一次更新完文章之后，都需要敲一大串代码，才能重新部署，显得很繁琐。那么我们来让这些命令合并成一个命令吧。")]),t._v(" "),a("p",[t._v("项目根目录下创建 deploy.sh 文件：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/env sh")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确保脚本抛出遇到的错误")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" -e\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成静态文件")]),t._v("\nyarn build\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交到历史区，$1 为运行 sh 时的第一个参数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" add -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交到 master 分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将 dist 文件提交到 gh-pages 分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" subtree push --prefix dist origin gh-pages\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 退出命令")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exit")]),t._v(" 0\n")])])]),a("p",[t._v("然后在 package.json 文件中配置脚本：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    //...\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deploy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bash deploy.sh"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("后续部署直接使用命令：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("yarn deploy "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"updatedBlog"')]),t._v("\n")])])]),a("p",[t._v("需要注意的是，后面带的消息，不能使用空格隔开（本人对 shell 脚本不熟悉，查找了也没明白，希望有大神指点一下），使用了空格，就会导致只提交了空格前的消息")]),t._v(" "),a("p",[t._v("另外，这个命令需要在 git bash 中使用，不能在 Windows 的命令行中使用。")]),t._v(" "),a("h2",{attrs:{id:"_5-后续"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-后续","aria-hidden":"true"}},[t._v("#")]),t._v(" 5. 后续")]),t._v(" "),a("p",[t._v("太喜欢 VuePress 了，因为后面都托管给 Vue 了，所以速度飞快。")]),t._v(" "),a("p",[t._v("后续会出一个如何修改默认主题的文章。")]),t._v(" "),a("Quote",[t._v("生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。")])],1)},[],!1,null,null,null);s.default=e.exports}}]);