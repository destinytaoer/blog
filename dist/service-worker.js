/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2016/12/html语义化/index.html",
    "revision": "c83783611d54b2350d1417ae1016b6c6"
  },
  {
    "url": "2017/07/gulp-自动化构建工具/index.html",
    "revision": "74315da332e28c1b3f7b653fe9446f6a"
  },
  {
    "url": "2017/07/markdown语法/index.html",
    "revision": "f0a0c78ad343686836b9301e230b366e"
  },
  {
    "url": "2017/08/初学者资源推荐/index.html",
    "revision": "ab3e19f118862eb81cad2796dc4e87b3"
  },
  {
    "url": "2017/08/去除inline-block元素间间距的n种方法/index.html",
    "revision": "780b69768ef123b4ddb6fcb18feb6040"
  },
  {
    "url": "2017/09/githubpages-hexo-搭建个人博客/index.html",
    "revision": "b7626d7f32b39f5eaa0054dedcbc3f12"
  },
  {
    "url": "2017/09/hello-world/index.html",
    "revision": "84d3985cf0b5e773eb10f87a9660837c"
  },
  {
    "url": "2017/09/hexo-next主题高级配置/index.html",
    "revision": "ce4bb2bc0446c40c40e1056fe54d4d80"
  },
  {
    "url": "2017/09/hexo-yilia主题-githubpages博客添加友言评论功能/index.html",
    "revision": "da5b09f19629c26518be4974abc068a6"
  },
  {
    "url": "2017/09/javascript-面向对象编程/index.html",
    "revision": "d42a8feb553bde45ca13fa76c2131398"
  },
  {
    "url": "2017/09/sublimetext-实用插件介绍/index.html",
    "revision": "b52c124a669b06e180f56d15cf4d7a96"
  },
  {
    "url": "2017/10/canvas画布/index.html",
    "revision": "02947578e1a4b1cd94398c007590fc59"
  },
  {
    "url": "2017/10/css实现元素的居中显示/index.html",
    "revision": "53c9d94c61dd3d6e810eda0f10911ab2"
  },
  {
    "url": "2017/10/css渐变的简单使用/index.html",
    "revision": "349d640da4d65e42f78c26a52a69f13e"
  },
  {
    "url": "2017/10/sass的使用/index.html",
    "revision": "9177bdbcd1fd26316b2f4b50cb7824c0"
  },
  {
    "url": "2017/10/transform-引起的-z-index-失效‘/index.html",
    "revision": "c0cc3d7a438cabdf031cccc597131681"
  },
  {
    "url": "2017/10/像素与viewport概念/index.html",
    "revision": "3180cbbb71af49e6f03a9e154283db36"
  },
  {
    "url": "2017/10/关于flex布局/index.html",
    "revision": "365de3d1c28dda8424228d4e4f4f8ed5"
  },
  {
    "url": "2017/10/关于inline-block问题/index.html",
    "revision": "737120e15f0ca1725bab5da7717eb4b0"
  },
  {
    "url": "2017/10/浅谈响应式/index.html",
    "revision": "f3a3d893bdaa0f6a43c748677825edff"
  },
  {
    "url": "2017/10/深入理解层叠上下文和层叠顺序/index.html",
    "revision": "3dfa1413d700fd31b5296726b6dcdae4"
  },
  {
    "url": "2017/10/给不了解前端的同学讲前端/index.html",
    "revision": "295299b98e017d7a8d4560fa82b08798"
  },
  {
    "url": "2017/10/编码规范-（一）html/index.html",
    "revision": "f2e512c00c754ddd7c2c049812313df1"
  },
  {
    "url": "2017/10/编码规范（二）css/index.html",
    "revision": "c20c3bf11a083d2378f6fc606dc533a2"
  },
  {
    "url": "2017/10/说说css学习中的瓶颈/index.html",
    "revision": "edf21f7feb901904eb9410c6e5c56d44"
  },
  {
    "url": "2017/11/canvas画五角星/index.html",
    "revision": "a272e2c82aeee8f28cd21c213e9ac3d5"
  },
  {
    "url": "2017/11/canvas画时钟/index.html",
    "revision": "c3758f6ba8514fee185b791af1785725"
  },
  {
    "url": "2017/11/js类型转换总结/index.html",
    "revision": "12bee3201f6d92014ebd0d0fdf1d192e"
  },
  {
    "url": "2017/12/eslint-（一）简介与安装/index.html",
    "revision": "4732835e1ae5db2027821d2a9145de44"
  },
  {
    "url": "2017/12/eslint-（二）配置文件/index.html",
    "revision": "763e3698f45a993c810532cfa035a991"
  },
  {
    "url": "2017/12/markdown添加latex数学公式/index.html",
    "revision": "05345b7b02fef65c3fb38a83bc6defd0"
  },
  {
    "url": "2017/12/前端学习历程/index.html",
    "revision": "5fba22f8d1dfe20b657e01e8f63dbbae"
  },
  {
    "url": "2018/06/荔园的浪漫/index.html",
    "revision": "3317b0a2cf0dd7d908c1951f8ec52009"
  },
  {
    "url": "2018/07/js变量的创建机制/index.html",
    "revision": "0973ebee04a97f6046cdc4293e2301a6"
  },
  {
    "url": "2018/08/dom的映射机制/index.html",
    "revision": "b1dccc2071909d218d7a453e2d8ae5c0"
  },
  {
    "url": "2018/08/js作用域与作用域链/index.html",
    "revision": "3f7abf5664a3832812fd18e472b6cc64"
  },
  {
    "url": "2018/08/js变量提升/index.html",
    "revision": "f118143457429cef9d9bba3415a8dbb0"
  },
  {
    "url": "2018/08/js堆栈内存/index.html",
    "revision": "7ff0a0ab0147d57130b8cd62be92b9eb"
  },
  {
    "url": "2018/08/记第一次博客改版更新/index.html",
    "revision": "2fb9f4587a423e2c4c21bb926ce141e9"
  },
  {
    "url": "2018/09/js函数/index.html",
    "revision": "88035bc6f62824534538e295e19fe87b"
  },
  {
    "url": "2018/09/js函数的执行机制/index.html",
    "revision": "041b98e0116abf28b53f56d6094d62dc"
  },
  {
    "url": "2018/10/js运算符的优先级/index.html",
    "revision": "90ddfc690b8e5ff80f75b7ee0151eb3a"
  },
  {
    "url": "2018/12/前端工程师的未来在哪里/index.html",
    "revision": "5e8440ccd943b4d58781e27b137be0b8"
  },
  {
    "url": "2019/02/chrome插件英雄榜/index.html",
    "revision": "29943600164a24c7994ba6e73c2cb4e7"
  },
  {
    "url": "2019/02/js中扯不完的分号问题/index.html",
    "revision": "9bba86d4efc3f3fd74ded16958ab440f"
  },
  {
    "url": "2019/02/mvc-mvp-mvvm-图示（转）/index.html",
    "revision": "6728cea2030cb1a9240f9e0ccb68c98e"
  },
  {
    "url": "2019/02/vscode插件之polaroid/index.html",
    "revision": "9d6b6c9544bc3a219480f3b818e4eb60"
  },
  {
    "url": "2019/02/vuepress入门/index.html",
    "revision": "318dc44d724c19435ce78ee7791d7ce3"
  },
  {
    "url": "2019/02/前端学习知识图谱/index.html",
    "revision": "669198b461f19eff33d7b9303f2164de"
  },
  {
    "url": "2019/02/浅谈fc/index.html",
    "revision": "21ca8102ec779496e894548fd8391616"
  },
  {
    "url": "2019/03/机械键盘介绍/index.html",
    "revision": "a228e015ae4022216a575280fbdffe6e"
  },
  {
    "url": "404.html",
    "revision": "19ba6e1fac9e19938cbc8f776b3c750e"
  },
  {
    "url": "about/index.html",
    "revision": "18c8ff0982f4cbf224a1bba2738fae00"
  },
  {
    "url": "assets/css/0.styles.f0ee6d87.css",
    "revision": "c856fb501db6c8f03894ee36e689f28f"
  },
  {
    "url": "assets/img/iconfont.f16f19f6.svg",
    "revision": "f16f19f652a8c7c21b386a65d8376d18"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.4683c509.js",
    "revision": "fe52f9b5a4414b1a4d7018eeac6b1931"
  },
  {
    "url": "assets/js/10.d86e2b8d.js",
    "revision": "78bcda7b4efa525b3688a5bf5c513fa7"
  },
  {
    "url": "assets/js/11.a752c041.js",
    "revision": "2a1771c6ae459aedfafc82ca6b2a2052"
  },
  {
    "url": "assets/js/12.c6984d07.js",
    "revision": "106a43be30f77c21a572c2029794669a"
  },
  {
    "url": "assets/js/13.d8832ed5.js",
    "revision": "cc22ea21b4152f631b309e32185a11ae"
  },
  {
    "url": "assets/js/14.42785a91.js",
    "revision": "6037586573c36f3423264f76bba4d8d1"
  },
  {
    "url": "assets/js/15.28b490a0.js",
    "revision": "c17a3deefb6d310a6698b719d11c4e18"
  },
  {
    "url": "assets/js/16.d4da88fe.js",
    "revision": "bdf102bcce375268ce16998d3f91becb"
  },
  {
    "url": "assets/js/17.dff08d49.js",
    "revision": "925c13c9b6ce6b860e7534f6c5974e6e"
  },
  {
    "url": "assets/js/18.53f7fe43.js",
    "revision": "a725e5b5640f306a8a8cf44f4a259eb8"
  },
  {
    "url": "assets/js/19.3f05c9f0.js",
    "revision": "5ab8d5e553d159e4d5951ca69196390a"
  },
  {
    "url": "assets/js/2.2b67a1a8.js",
    "revision": "3bbd4f456966e5afe1152dfa80ef2a8d"
  },
  {
    "url": "assets/js/20.01a3f265.js",
    "revision": "7ba3394668118352195edc312242fa1d"
  },
  {
    "url": "assets/js/21.4b210380.js",
    "revision": "f9dba0fab616db3fd98389fdff0ee024"
  },
  {
    "url": "assets/js/22.2606b83d.js",
    "revision": "ce706fb0559cfa4d8ce6ae3d06b1359b"
  },
  {
    "url": "assets/js/23.21640982.js",
    "revision": "b95837809411cbd330f90b74fba5a869"
  },
  {
    "url": "assets/js/24.72e6b862.js",
    "revision": "8b7f2a087793b4730de77df96586d808"
  },
  {
    "url": "assets/js/25.75de80ce.js",
    "revision": "81aeb7413fc7b7b53d17d6515aa2e87e"
  },
  {
    "url": "assets/js/26.15eb3241.js",
    "revision": "4f4ffbe2feff8b755ef4385d6a8aec67"
  },
  {
    "url": "assets/js/27.95843651.js",
    "revision": "d7c19432662a4e8be75c0dd3a3d3b9eb"
  },
  {
    "url": "assets/js/28.014ded84.js",
    "revision": "6ff55adcb5d4365be455c553c1332374"
  },
  {
    "url": "assets/js/29.95cc5dfc.js",
    "revision": "8149700138251bb3be020f8575932dc1"
  },
  {
    "url": "assets/js/30.fe33c62e.js",
    "revision": "d4f14e2eae7cfa6af9df353d60f93fe5"
  },
  {
    "url": "assets/js/31.5ba22b53.js",
    "revision": "df8d8c691e05a71327ee3bdb5b5cd41d"
  },
  {
    "url": "assets/js/32.25f6ae6c.js",
    "revision": "ad636bd8b992d45b2ff4b40c5147bb12"
  },
  {
    "url": "assets/js/33.11d2e97a.js",
    "revision": "b72f99a5f02a7b49524131c59242267c"
  },
  {
    "url": "assets/js/34.d43699a8.js",
    "revision": "db7d9b97bf291250622310637139c056"
  },
  {
    "url": "assets/js/35.4477967c.js",
    "revision": "c409d39564a562f53c7b29c5fcb64a78"
  },
  {
    "url": "assets/js/36.106b6324.js",
    "revision": "67d083b9b2f46a2a6320a77b90a6635d"
  },
  {
    "url": "assets/js/37.93cac827.js",
    "revision": "5a4fa3c3b9b3e7104140d77fc7b38f90"
  },
  {
    "url": "assets/js/38.1c850403.js",
    "revision": "5c3dcc1c8453d8e87471940661714c9b"
  },
  {
    "url": "assets/js/39.0ce4c401.js",
    "revision": "663e487a5854c2cdd0ab9ff778b84441"
  },
  {
    "url": "assets/js/4.ddf30a91.js",
    "revision": "a89f40d22c721c22af3a315ae14281b8"
  },
  {
    "url": "assets/js/40.5b0f4e6a.js",
    "revision": "d1b4ab7aa5957ff84a0292d864575869"
  },
  {
    "url": "assets/js/41.00550dd2.js",
    "revision": "8d7644db97db7bbe3f86ee5993647ff1"
  },
  {
    "url": "assets/js/42.4426988e.js",
    "revision": "28c505ee265cd22bb18375c27086a43a"
  },
  {
    "url": "assets/js/43.47300f7f.js",
    "revision": "f7260c3f1ecdab8e3aff59d5e39c0aa7"
  },
  {
    "url": "assets/js/44.1a878856.js",
    "revision": "fc7b1796042f8eefcc4ef2b6a0094b28"
  },
  {
    "url": "assets/js/45.f5de3a94.js",
    "revision": "1d230fe4b9bc54f3982ca40f0df8b1d8"
  },
  {
    "url": "assets/js/46.bafc447f.js",
    "revision": "a23db9fbb3f6ef1c985de7fc401d636a"
  },
  {
    "url": "assets/js/47.ac818ced.js",
    "revision": "39f74e9c8841417d8b82ef6be5904f7c"
  },
  {
    "url": "assets/js/48.7cb36d38.js",
    "revision": "1e0ea1f9a4edd9689bfb092e7faa51fc"
  },
  {
    "url": "assets/js/49.4eb01fed.js",
    "revision": "11ce3fbe58066a294f55873e8c135d36"
  },
  {
    "url": "assets/js/5.26dec2eb.js",
    "revision": "c3100979f4cf937f90e776b9e6c161a8"
  },
  {
    "url": "assets/js/50.508e3cf0.js",
    "revision": "121c4ef97d205c7782a6d81e3706be45"
  },
  {
    "url": "assets/js/51.afda1cb8.js",
    "revision": "fbea101b31b911b667db18628c188ea6"
  },
  {
    "url": "assets/js/52.f174f37c.js",
    "revision": "37bc56271dc1770aa89d2e81739d9364"
  },
  {
    "url": "assets/js/53.33e4de5f.js",
    "revision": "53ae2be2979d8613bc58dbcb2e51b72c"
  },
  {
    "url": "assets/js/54.c29fae21.js",
    "revision": "81bb217613785b2e2d4aa41cc55dbd2a"
  },
  {
    "url": "assets/js/55.31b8d463.js",
    "revision": "6d877dd569fa404cd33bf2e242302f6e"
  },
  {
    "url": "assets/js/56.3f3ce601.js",
    "revision": "ea6760b3c5c68d23fbef83bee901778e"
  },
  {
    "url": "assets/js/57.82948aae.js",
    "revision": "fe8de8ad3ee67ba715085bd4e8c0b166"
  },
  {
    "url": "assets/js/58.e40853e3.js",
    "revision": "738e705f75a97d0a60afdbb3d588a02b"
  },
  {
    "url": "assets/js/59.a0fd4858.js",
    "revision": "4b92bc856a4c05bd862ed6bb465b0194"
  },
  {
    "url": "assets/js/6.f631682b.js",
    "revision": "bbb7cc0e064bacd917ab30f7cbfc4160"
  },
  {
    "url": "assets/js/60.83e4b736.js",
    "revision": "a63a0e573469f28b3c37ebeb79a0e4ee"
  },
  {
    "url": "assets/js/61.1956513d.js",
    "revision": "a8902db4a89f4da15bb4cda1c81f9f63"
  },
  {
    "url": "assets/js/62.365e29bc.js",
    "revision": "f02e6d65810a68d5beb3cae95084c51f"
  },
  {
    "url": "assets/js/63.f240216e.js",
    "revision": "44a45e59bf9da5d18bdb2fa0b0a6bf7e"
  },
  {
    "url": "assets/js/64.bbf34c9e.js",
    "revision": "d2ce34f5f49d0b95b003b8008522e95c"
  },
  {
    "url": "assets/js/65.8ccb2153.js",
    "revision": "3096d0c9746b5f67ea33e96bfbef63af"
  },
  {
    "url": "assets/js/66.d12f9a4f.js",
    "revision": "3558ad1ee160ac4bce63e52d7b5495db"
  },
  {
    "url": "assets/js/67.bc758099.js",
    "revision": "05307ca6b99cab5c415a2ff337b40200"
  },
  {
    "url": "assets/js/68.46f93e76.js",
    "revision": "9a748b4b0bc77e56276ad5263ad45b8e"
  },
  {
    "url": "assets/js/7.0c011446.js",
    "revision": "9fc9034fe15e07ec4764f7223c64fc3a"
  },
  {
    "url": "assets/js/8.da300eff.js",
    "revision": "34f900969b03f77571d037f60d4fea7d"
  },
  {
    "url": "assets/js/9.15ca111c.js",
    "revision": "fa8c2db25912653048822704c4fc0010"
  },
  {
    "url": "assets/js/app.378e2a05.js",
    "revision": "ea3a507ddadb025904780221efb06cce"
  },
  {
    "url": "author.jpg",
    "revision": "df2fc7455cc5663043df50d78c9329ef"
  },
  {
    "url": "blog/index.html",
    "revision": "446f51cfa873838d327ac014aa83950e"
  },
  {
    "url": "blog/page/10/index.html",
    "revision": "a1d2ae1ce74d986890d6ca8921c6fcf6"
  },
  {
    "url": "blog/page/11/index.html",
    "revision": "d32e4e9cae77a38e49fd728646763f2b"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "8f63c514d85ea7d6dffb6aa8c2ebfd49"
  },
  {
    "url": "blog/page/3/index.html",
    "revision": "099e338205aebd343422260bb280cd90"
  },
  {
    "url": "blog/page/4/index.html",
    "revision": "d3f794944296a7f1f7d77943b06d3c8f"
  },
  {
    "url": "blog/page/5/index.html",
    "revision": "0c7f161d649aabda54b05d7b4f41f993"
  },
  {
    "url": "blog/page/6/index.html",
    "revision": "df6d17e8a4119e05b7c7d88223664136"
  },
  {
    "url": "blog/page/7/index.html",
    "revision": "69ce05086e98bd6e6771542b4d0512e9"
  },
  {
    "url": "blog/page/8/index.html",
    "revision": "47e4e02ebc0430333ab284e5e69afe5e"
  },
  {
    "url": "blog/page/9/index.html",
    "revision": "ce757debdc2e2dd03db30496a9564eb7"
  },
  {
    "url": "book/index.html",
    "revision": "2a838322d068c592f38933d369dd6c4a"
  },
  {
    "url": "categories/index.html",
    "revision": "ec8aeb0bb3b583840a5e318b31a3181b"
  },
  {
    "url": "categories/个人随笔.html",
    "revision": "49ff6f60a8c49e7ce4adb2175e307d43"
  },
  {
    "url": "categories/前端技术.html",
    "revision": "2b701efef2039f4450a2eef7b3a021ff"
  },
  {
    "url": "categories/前端视角.html",
    "revision": "6328cae00452d9efeadf6488cf6411ef"
  },
  {
    "url": "categories/前端资源.html",
    "revision": "57be9273857272b4186b885e36e69847"
  },
  {
    "url": "categories/博客建站.html",
    "revision": "fda73f5ffe480545921a2954f5dfe491"
  },
  {
    "url": "categories/资源分享.html",
    "revision": "043103b75ead0ec8ea7801851cde9de0"
  },
  {
    "url": "index.html",
    "revision": "fc6a3a9756cd59fee027070a12be86cc"
  },
  {
    "url": "logo.jpg",
    "revision": "3befeabc1b55916802dbc080530c2179"
  },
  {
    "url": "tags/Canvas.html",
    "revision": "9e4e5c4b580f9e75504ef8972a31d8b6"
  },
  {
    "url": "tags/CSS.html",
    "revision": "128aafa353696dde1eb3f8835eda263c"
  },
  {
    "url": "tags/css预处理器.html",
    "revision": "1ea0fc4030c4d6860ce8cb38448ea576"
  },
  {
    "url": "tags/DOM.html",
    "revision": "9b63040f9cae2dd4b19ac00f6cacf8c6"
  },
  {
    "url": "tags/github.html",
    "revision": "0edd057bb3e768396aff7cbaa44b651c"
  },
  {
    "url": "tags/gulp.html",
    "revision": "0f3f6c9480aa539a072c4c8f58f22fd0"
  },
  {
    "url": "tags/hexo.html",
    "revision": "9b32d6327bdb66cbdfbd5b762ad54084"
  },
  {
    "url": "tags/html.html",
    "revision": "4806d34ad066f6d307ee0b32b61ab99c"
  },
  {
    "url": "tags/index.html",
    "revision": "bb6416f35923a1a44958b5fd466e3465"
  },
  {
    "url": "tags/JavaScript.html",
    "revision": "34c002cced59fea867a4536a522fecd6"
  },
  {
    "url": "tags/markdown.html",
    "revision": "f33abe1d9296bb7784a2519757865eeb"
  },
  {
    "url": "tags/next.html",
    "revision": "721ee081c15ef5bc42000dca35d5fdaa"
  },
  {
    "url": "tags/sass.html",
    "revision": "49e5fe46a29c64d6d4d817ea09dc2668"
  },
  {
    "url": "tags/sublimetext.html",
    "revision": "c52da35f4e9401df9315fc876f0134bc"
  },
  {
    "url": "tags/VSCode.html",
    "revision": "14a9910e7439d138d54bf23afd19d0d6"
  },
  {
    "url": "tags/VuePress.html",
    "revision": "aa90f3d92fd5b0f7cb6f77d1f6913e0e"
  },
  {
    "url": "tags/web前端.html",
    "revision": "c07325561cea1ba36c9ba5fc589b1653"
  },
  {
    "url": "tags/yilia.html",
    "revision": "7463aaaffb061b1f65d97ee974d0d851"
  },
  {
    "url": "tags/人生历程.html",
    "revision": "47695b0f5dc30e31b4b71a543e498dbc"
  },
  {
    "url": "tags/博客前言.html",
    "revision": "b26197adcb288a1a7e564c16ab8d2828"
  },
  {
    "url": "tags/博客版本更迭.html",
    "revision": "d5a4fb526b0d617f3cd1ba63d6988176"
  },
  {
    "url": "tags/响应式.html",
    "revision": "e2b57e134a271d7ac0590b7c28f92585"
  },
  {
    "url": "tags/开发工具.html",
    "revision": "eed0920240bbce4be868e67721794470"
  },
  {
    "url": "tags/插件.html",
    "revision": "c246cf5c2e9c605384845de12daf4a3b"
  },
  {
    "url": "tags/搭建博客.html",
    "revision": "8db1a8a417cdc8063441395dc578e46f"
  },
  {
    "url": "tags/框架原理.html",
    "revision": "3158e584cfb788a9d51899ca3b947dcc"
  },
  {
    "url": "tags/浏览器.html",
    "revision": "8f0018b3ec1c669ee63cbe1d3b921d87"
  },
  {
    "url": "tags/移动端.html",
    "revision": "372a5b80914cceda87c4089fee358288"
  },
  {
    "url": "tags/编码规范.html",
    "revision": "2e504266211aa4f370a1cf91e6af79de"
  },
  {
    "url": "tags/编辑器.html",
    "revision": "63335e8be7f0939765a3d5aa8de15c62"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
