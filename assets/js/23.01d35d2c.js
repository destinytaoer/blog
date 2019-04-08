(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{469:function(t,a,e){"use strict";e.r(a);var r=e(8),s=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("Hexo博客的Yilia主题中评论系统只提供了畅言、网易云跟帖、多说和Disqus。\n由于多说评论、网易云跟帖已经关闭系统，畅言需要域名备案，而github是国外的，没有备案，所以尝试了其他第三方评论系统————"),e("strong",[t._v("友言")]),t._v("。")]),t._v(" "),e("p",[t._v("友言使用极其简单，本地成功实现，但是"),e("strong",[t._v("上传上github后发现无法出现评论")]),t._v("。")]),t._v(" "),e("p",[t._v("在多次查找与尝试下，终于成功，下面与大家分享我的方法。")]),t._v(" "),e("blockquote",[e("p",[t._v("注意：本文是在前面都配置好的情况下进行的，如果最初并没有配置好，请查看：\n"),e("a",{attrs:{href:"https://destinytaoer.cn/2017/09/githubpages-hexo-%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("hexo+gitHubPages 快速搭建个人博客"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"一、注册友言id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、注册友言id","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、注册友言id")]),t._v(" "),e("h3",{attrs:{id:"_1-注册"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-注册","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 注册")]),t._v(" "),e("p",[t._v("在"),e("a",{attrs:{href:"https://www.uyan.cc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("友言官网"),e("OutboundLink")],1),t._v("上直接使用qq登录，注册成功直接出来代码\n"),e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/7295449-37980e74302972eb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_2-获取你的id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取你的id","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 获取你的id")]),t._v(" "),e("p",[t._v("进入后台管理，你会看到：\n"),e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/7295449-e5dd6750141f186e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}}),t._v("\n获取到你的id")]),t._v(" "),e("h2",{attrs:{id:"二、博客文件配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、博客文件配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、博客文件配置")]),t._v(" "),e("h3",{attrs:{id:"_1-创建uyan-ejs文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建uyan-ejs文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 创建uyan.ejs文件")]),t._v(" "),e("p",[t._v("在"),e("code",[t._v("hexo\\themes\\yilia\\layout_partial\\post\\")]),t._v("下新建一个"),e("code",[t._v("uyan.ejs")]),t._v("的文件\n将上述代码copy到该文件中。")]),t._v(" "),e("h3",{attrs:{id:"_2-修改article-ejs文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改article-ejs文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 修改article.ejs文件")]),t._v(" "),e("p",[t._v("修改"),e("code",[t._v("hexo\\themes\\yilia\\layout\\_partial\\article.ejs")]),t._v(",找到")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<% if (!index && post.comments){ %>\n")])])]),e("p",[t._v("在此下方添加下列代码：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" <% if (theme.uyan){ %>\n  <%- partial('post/uyan', {\n  \t\tkey: post.slug,\n  \t\ttitle: post.title,\n  \t\turl: config.url+url_for(post.path)\n  \t}) %>\n  <% } %>\n")])])]),e("h3",{attrs:{id:"_3-修改yilia主题配置文件-config-yml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改yilia主题配置文件-config-yml","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 修改yilia主题配置文件_config.yml")]),t._v(" "),e("p",[t._v("修改"),e("code",[t._v("hexo\\themes\\yilia")]),t._v("下的"),e("code",[t._v("_config.yml")]),t._v(",在空白处,添加如下配置:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("uyan: '你的友言id'\n")])])]),e("blockquote",[e("p",[t._v("注意：\n要用"),e("strong",[t._v("引号")]),t._v("包含你的id\nuyan: 后面必须添加一个"),e("strong",[t._v("空格")]),t._v("，这是Hexo博客的配置要求")])]),t._v(" "),e("p",[t._v("这样友言已经配置好了,重新编译，运行:\nhexo clean\nhexo g\nhexo s\n访问： https://localhost:4000\n"),e("strong",[t._v("本地实现评论系统成功！")])]),t._v(" "),e("h2",{attrs:{id:"三、解决github发生错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、解决github发生错误","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、解决Github发生错误")]),t._v(" "),e("p",[t._v("上传到github上后，打开你的github页面，发现评论并没有出现。按F12，发现报错：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("The page at 'https...' was loaded over HTTPS,\n but requested an insecure stylesheet 'https://..../css/1_6/background.css'. \nThis request has been blocked; the content must be served over HTTPS.\n")])])]),e("p",[t._v("原因："),e("strong",[t._v("https下的http加载会被阻塞")]),t._v("，也就是无法加载友言的那个js文件")]),t._v(" "),e("p",[t._v("查明之后，发现友言并不支持https，但是仍然有人实现了，并没有详细的解说。而我注意到域名的更改，如果改了域名，那么就不是https下了。实践证明，是可行的。")]),t._v(" "),e("h3",{attrs:{id:"_1-域名注册"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-域名注册","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 域名注册")]),t._v(" "),e("p",[t._v("这里不详细说明，没有域名可自行百度：腾讯云、阿里云、万网等注册。\n域名不贵，基本就几块、十几块一年，毫无问题")]),t._v(" "),e("h3",{attrs:{id:"_2-github绑定域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-github绑定域名","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. Github绑定域名")]),t._v(" "),e("h4",{attrs:{id:"添加cname文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加cname文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加CNAME文件")]),t._v(" "),e("blockquote",[e("p",[t._v("注意，"),e("code",[t._v("CNAME")]),t._v("文件必须放进博客目录"),e("code",[t._v("source")]),t._v("文件夹下，不然会被"),e("code",[t._v("hexo clean")]),t._v("命令清除")])]),t._v(" "),e("p",[t._v("在文件内写入你的域名，"),e("strong",[t._v("不加www")])]),t._v(" "),e("h3",{attrs:{id:"_3-域名解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-域名解析","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 域名解析")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/7295449-bad38ddb5a3b23c8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),e("p",[t._v("按下图添加记录：\n"),e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/7295449-9caf93d06edab157.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),e("p",[t._v("现在基本已经成功，你可以访问你的域名来查看你的博客")]),t._v(" "),e("h2",{attrs:{id:"四、修改配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、修改配置文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 四、修改配置文件")]),t._v(" "),e("p",[t._v("查看你的博客后，你会发现，头像无法显示，链接发生错误的情况。")]),t._v(" "),e("blockquote",[e("p",[t._v("原因：\n"),e("strong",[t._v("根链接发生错误")]),t._v("，在不添加域名的时候，你的"),e("code",[t._v("root")]),t._v("会添加"),e("code",[t._v("/仓库名/")]),t._v(",各种链接都会自动添加这个根，而在添加域名后，域名直接指向你的仓库，此时链接仍然会自行添加根而发生链接错误。")])]),t._v(" "),e("h3",{attrs:{id:"博客目录下的-config-yml文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#博客目录下的-config-yml文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 博客目录下的_config.yml文件")]),t._v(" "),e("p",[t._v("修改根为'/'")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("root: /\n")])])]),e("h3",{attrs:{id:"主题目录下的-config-yml文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主题目录下的-config-yml文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 主题目录下的_config.yml文件")]),t._v(" "),e("p",[t._v("修改根同上，并去掉头像等链接的仓库名")]),t._v(" "),e("p",[e("strong",[t._v("此时就大功告成了！")])]),t._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://www.jianshu.com/p/4729e92fddbe",target:"_blank",rel:"noopener noreferrer"}},[t._v("为next添加友言评论支持"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://jingyan.baidu.com/article/4b52d702c8eb8dfc5d774b71.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("hexo yilia 添加友言评论支持"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://help.github.com/articles/using-a-custom-domain-with-github-pages/",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用GitHub页面的自定义域"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://www.zhihu.com/question/31377141",target:"_blank",rel:"noopener noreferrer"}},[t._v("github怎么绑定自己的域名？"),e("OutboundLink")],1)])]),t._v(" "),e("Quote",[t._v("生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。")])],1)},[],!1,null,null,null);a.default=s.exports}}]);