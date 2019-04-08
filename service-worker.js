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
    "revision": "2db2dbd6bc2335f1e76f6162ed9c37e4"
  },
  {
    "url": "2017/07/gulp-自动化构建工具/index.html",
    "revision": "d8419b44a9a52c3834039d7524915cd5"
  },
  {
    "url": "2017/07/markdown语法/index.html",
    "revision": "b70691c010d17141aee7b0e78a126e5d"
  },
  {
    "url": "2017/08/初学者资源推荐/index.html",
    "revision": "e593a1a375fd46132b993965b3db3a88"
  },
  {
    "url": "2017/08/去除inline-block元素间间距的n种方法/index.html",
    "revision": "d32bc4d28e2d02ba225f799caf3214b3"
  },
  {
    "url": "2017/09/githubpages-hexo-搭建个人博客/index.html",
    "revision": "1eb79a3e5e2e41c430ac1089e6ab099a"
  },
  {
    "url": "2017/09/hello-world/index.html",
    "revision": "fc4c0bb007b458c8a351a2d7c87143ad"
  },
  {
    "url": "2017/09/hexo-next主题高级配置/index.html",
    "revision": "a257756894a7e81e9154253913cefed2"
  },
  {
    "url": "2017/09/hexo-yilia主题-githubpages博客添加友言评论功能/index.html",
    "revision": "6c1c5614a973e7a9c18d05aa31a8e9a2"
  },
  {
    "url": "2017/09/javascript-面向对象编程/index.html",
    "revision": "8a20ca14d67bb74b3570c560dd1bab05"
  },
  {
    "url": "2017/09/sublimetext-实用插件介绍/index.html",
    "revision": "6002c584a3d5daa1f0523a7d8dc8f5bf"
  },
  {
    "url": "2017/10/canvas画布/index.html",
    "revision": "15abb26a4128b16acae51f46a7fba46a"
  },
  {
    "url": "2017/10/css实现元素的居中显示/index.html",
    "revision": "e339b55148e0eecd386ece02558c2567"
  },
  {
    "url": "2017/10/css渐变的简单使用/index.html",
    "revision": "2e60df6a7b7474bde7fb5e20206ee505"
  },
  {
    "url": "2017/10/sass的使用/index.html",
    "revision": "c901965ad1b7b0b50717b4e19a110970"
  },
  {
    "url": "2017/10/transform-引起的-z-index-失效‘/index.html",
    "revision": "eaf61b47faa4ffaa093d7041d80c01bd"
  },
  {
    "url": "2017/10/像素与viewport概念/index.html",
    "revision": "fa1b90b2557c433929f905360a65f458"
  },
  {
    "url": "2017/10/关于flex布局/index.html",
    "revision": "75c47b44573608ddd935463fdeb9a63e"
  },
  {
    "url": "2017/10/关于inline-block问题/index.html",
    "revision": "68c91919e2c43847fea2b3da38d17641"
  },
  {
    "url": "2017/10/浅谈响应式/index.html",
    "revision": "3f62222e5650a9673139a582e8ddec30"
  },
  {
    "url": "2017/10/深入理解层叠上下文和层叠顺序/index.html",
    "revision": "7ade43378c562afa84bba3e9cfa0f5f1"
  },
  {
    "url": "2017/10/给不了解前端的同学讲前端/index.html",
    "revision": "e1e5bfb8f22889ce78874a774cdbbc23"
  },
  {
    "url": "2017/10/编码规范-（一）html/index.html",
    "revision": "7ca0c319b69e1376b3ac9408cbdcbf24"
  },
  {
    "url": "2017/10/编码规范（二）css/index.html",
    "revision": "62b8a9a96af7d7a42e928c9db3413b04"
  },
  {
    "url": "2017/10/说说css学习中的瓶颈/index.html",
    "revision": "c99ae53786138bc5e8e593981f571fee"
  },
  {
    "url": "2017/11/canvas画五角星/index.html",
    "revision": "3f107161ae750651363334a3b6b82806"
  },
  {
    "url": "2017/11/canvas画时钟/index.html",
    "revision": "bd4419f4d1d8d0bbf7f9e1cee0219413"
  },
  {
    "url": "2017/11/js类型转换总结/index.html",
    "revision": "f8a817c550c7dd188cbc840aececdcff"
  },
  {
    "url": "2017/12/eslint-（一）简介与安装/index.html",
    "revision": "d033c4a5b40aa034784d9606b779d0ec"
  },
  {
    "url": "2017/12/eslint-（二）配置文件/index.html",
    "revision": "1a7a97f6023ab29e75e52aaa6ea1bae0"
  },
  {
    "url": "2017/12/markdown添加latex数学公式/index.html",
    "revision": "909540ab0fdbc20636c0ef61c0764121"
  },
  {
    "url": "2017/12/前端学习历程/index.html",
    "revision": "a499ad0031317dda7a7cf7118c8f9302"
  },
  {
    "url": "2018/06/荔园的浪漫/index.html",
    "revision": "28e3fafd5aef4597333c0cbcb4a1a6d8"
  },
  {
    "url": "2018/07/js变量的创建机制/index.html",
    "revision": "8528a83fbea8c076897fe225a5ce17e6"
  },
  {
    "url": "2018/08/dom的映射机制/index.html",
    "revision": "29e89f831a03dfefd4a4e0d336d98b8e"
  },
  {
    "url": "2018/08/js作用域与作用域链/index.html",
    "revision": "39160d18464c21f00b08caf6511cc591"
  },
  {
    "url": "2018/08/js变量提升/index.html",
    "revision": "537b339d88bc9b70956c2ea878b8882b"
  },
  {
    "url": "2018/08/js堆栈内存/index.html",
    "revision": "953573634e5241629cd5d99100aaa955"
  },
  {
    "url": "2018/08/记第一次博客改版更新/index.html",
    "revision": "a277ae88cc815f5ddcf07bef44a8085f"
  },
  {
    "url": "2018/09/js函数/index.html",
    "revision": "4030bc8c9bbfbf3dda640d72e21b9b2d"
  },
  {
    "url": "2018/09/js函数的执行机制/index.html",
    "revision": "ccbdc880a182aad71d180d5777a94b36"
  },
  {
    "url": "2018/10/js运算符的优先级/index.html",
    "revision": "fbcfa670afa156f6612d02b023c6390e"
  },
  {
    "url": "2018/12/前端工程师的未来在哪里/index.html",
    "revision": "0627db4cf24e195e68c738784e2d1fe6"
  },
  {
    "url": "2019/02/chrome插件英雄榜/index.html",
    "revision": "fd2f8c6eb46d0746b66515ca72dd2e46"
  },
  {
    "url": "2019/02/js中扯不完的分号问题/index.html",
    "revision": "616efea1381f32a75f03901add98658a"
  },
  {
    "url": "2019/02/mvc-mvp-mvvm-图示（转）/index.html",
    "revision": "288ca5ed756d5aacc8da56699be1a327"
  },
  {
    "url": "2019/02/vscode插件之polaroid/index.html",
    "revision": "0e060b355fa045615e7b07d90c8d99de"
  },
  {
    "url": "2019/02/vuepress入门/index.html",
    "revision": "c3e1a1989e334918331d6be4ea64c352"
  },
  {
    "url": "2019/02/前端学习知识图谱/index.html",
    "revision": "5a754accd9dcb9c085d18eb915860d7f"
  },
  {
    "url": "2019/02/浅谈fc/index.html",
    "revision": "915c2fad39f424700e520655082f97eb"
  },
  {
    "url": "2019/03/机械键盘介绍/index.html",
    "revision": "a3d79a4418eedeb41e0814784a2ae286"
  },
  {
    "url": "404.html",
    "revision": "2e3d75518a21612e4793ee33880085aa"
  },
  {
    "url": "about/index.html",
    "revision": "ef61aa23c5a08e9493875d28354b98f2"
  },
  {
    "url": "assets/css/0.styles.88bd9336.css",
    "revision": "88b95ea525ecbdff416b8d4a142a01cf"
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
    "url": "assets/js/1.c75208ac.js",
    "revision": "46fb2019b517288319102caf96f5148e"
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
    "url": "assets/js/15.86ad8721.js",
    "revision": "8c2534d521761a4c74ab74553b4d867e"
  },
  {
    "url": "assets/js/16.d4da88fe.js",
    "revision": "bdf102bcce375268ce16998d3f91becb"
  },
  {
    "url": "assets/js/17.1789fd47.js",
    "revision": "27a1bd296b996f1b5a6647fc0e87c15b"
  },
  {
    "url": "assets/js/18.51bc1a55.js",
    "revision": "38f86f049adf7ad2d69e56b7c775f093"
  },
  {
    "url": "assets/js/19.f7060b5c.js",
    "revision": "53fa6fe65cfe615a2326c54f75752988"
  },
  {
    "url": "assets/js/2.faf997a9.js",
    "revision": "e951ff56cead6eb72503771acb547fa3"
  },
  {
    "url": "assets/js/20.bedbb96e.js",
    "revision": "b7837658a70e4152992039a61b1081d1"
  },
  {
    "url": "assets/js/21.48aff5f2.js",
    "revision": "89a3a311a9c080e79637b7f11074f047"
  },
  {
    "url": "assets/js/22.e27af33d.js",
    "revision": "37e9a574d22ea5c5a2c55e577a4689ab"
  },
  {
    "url": "assets/js/23.01d35d2c.js",
    "revision": "fbb183ab4c009830d3358dd6418610b9"
  },
  {
    "url": "assets/js/24.c473df31.js",
    "revision": "3b2e63e3e8373b32f628c19f47cd48d7"
  },
  {
    "url": "assets/js/25.88a5bb7d.js",
    "revision": "ee302b1ba6984dc888439f9b20d47382"
  },
  {
    "url": "assets/js/26.98118518.js",
    "revision": "2348dea1989c7ffcfad2b27e759fd40f"
  },
  {
    "url": "assets/js/27.95843651.js",
    "revision": "d7c19432662a4e8be75c0dd3a3d3b9eb"
  },
  {
    "url": "assets/js/28.068ad012.js",
    "revision": "267f2860b7c0829d00e88edc78571e0a"
  },
  {
    "url": "assets/js/29.a5806427.js",
    "revision": "ed3cf733d86b838a3b0c0167efd1a774"
  },
  {
    "url": "assets/js/30.16f66c69.js",
    "revision": "905ac8628daddce6dcfb221e7c4328dc"
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
    "url": "assets/js/33.63dfa639.js",
    "revision": "f2baf7628263e7dcf2bcd6c17f3c1d76"
  },
  {
    "url": "assets/js/34.d43699a8.js",
    "revision": "db7d9b97bf291250622310637139c056"
  },
  {
    "url": "assets/js/35.1c64cf8d.js",
    "revision": "ecdb894c74baff898004e6d3e80004f1"
  },
  {
    "url": "assets/js/36.22b63fd4.js",
    "revision": "97fabe4db7021e236a986f58e5438aed"
  },
  {
    "url": "assets/js/37.97218b9f.js",
    "revision": "0e1981588609665e130a99e417ef7ac9"
  },
  {
    "url": "assets/js/38.7039f1e7.js",
    "revision": "26fb5898ca7fe3972bdca2a2915bea86"
  },
  {
    "url": "assets/js/39.d0392c21.js",
    "revision": "3c8a0aae9b1b74a41c731724e06d86c1"
  },
  {
    "url": "assets/js/4.1e32c6dd.js",
    "revision": "eabf7972049a4c4647d5f7bb8fe2a5d8"
  },
  {
    "url": "assets/js/40.652a3a6a.js",
    "revision": "55b8db86e2ad86ec05b93bb395ab4ab5"
  },
  {
    "url": "assets/js/41.2ca0d670.js",
    "revision": "ce0d0e11e11bb53b6467a905d6af3ba4"
  },
  {
    "url": "assets/js/42.e1252cc3.js",
    "revision": "e55e2998202605d50b6f9c1fc5cdfe9f"
  },
  {
    "url": "assets/js/43.105769e5.js",
    "revision": "22790e084caec3cf7582719fe0116e82"
  },
  {
    "url": "assets/js/44.6343c0bc.js",
    "revision": "356577573909e44effa3b80515a408f4"
  },
  {
    "url": "assets/js/45.d50783d7.js",
    "revision": "a5f36586730d2ad44ad62939c59be897"
  },
  {
    "url": "assets/js/46.80c0f259.js",
    "revision": "7930f43475b72131b8447bc95fa3bb74"
  },
  {
    "url": "assets/js/47.94d01f0a.js",
    "revision": "c4ce6a3ef0c7cc74e9527917d1124cde"
  },
  {
    "url": "assets/js/48.6ddffd43.js",
    "revision": "154585c7c7094e5cbc29cd3e76543c06"
  },
  {
    "url": "assets/js/49.0dc33fa8.js",
    "revision": "c23ba9e671d349d04f5babc5ff410950"
  },
  {
    "url": "assets/js/5.7c8730d9.js",
    "revision": "577bdb6cc84ab3a1a0a7d5da445a1acf"
  },
  {
    "url": "assets/js/50.689e44f5.js",
    "revision": "71aadf0acd239bb1783dd1f98b334aa3"
  },
  {
    "url": "assets/js/51.52df0adc.js",
    "revision": "b70b7f84ae3198ea18d7715862de54c0"
  },
  {
    "url": "assets/js/52.8bef5aae.js",
    "revision": "4f1effef1b9f9387208921c4529ee8bf"
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
    "url": "assets/js/55.978ebe0b.js",
    "revision": "9bd7a250868517d937c15eb683687c6d"
  },
  {
    "url": "assets/js/56.8f2381b0.js",
    "revision": "779aaee97ad19a9b9c6bf390f3c85ffc"
  },
  {
    "url": "assets/js/57.58da1079.js",
    "revision": "a46921f5f3dd5df6ab50169bd0341095"
  },
  {
    "url": "assets/js/58.e40853e3.js",
    "revision": "738e705f75a97d0a60afdbb3d588a02b"
  },
  {
    "url": "assets/js/59.971b9d36.js",
    "revision": "6aaae02d15e7e4d21b1248252750d844"
  },
  {
    "url": "assets/js/6.c71f681a.js",
    "revision": "ff5d49dfadaca6be872e8e94cbbdd595"
  },
  {
    "url": "assets/js/60.7c4d38d2.js",
    "revision": "e796f8b204bdb766b64806eba4437de1"
  },
  {
    "url": "assets/js/61.e86b4348.js",
    "revision": "1d8a414ad12afd7218e9238c5c3b42ff"
  },
  {
    "url": "assets/js/62.13f88d5f.js",
    "revision": "0a33d9c28be889ffd67dc68f4874aea2"
  },
  {
    "url": "assets/js/63.f240216e.js",
    "revision": "44a45e59bf9da5d18bdb2fa0b0a6bf7e"
  },
  {
    "url": "assets/js/64.b571832c.js",
    "revision": "2691a3ed8d950b22815f9b82531ceecd"
  },
  {
    "url": "assets/js/65.8ccb2153.js",
    "revision": "3096d0c9746b5f67ea33e96bfbef63af"
  },
  {
    "url": "assets/js/66.815e54a2.js",
    "revision": "7973b10b0fd71269660a2a3e8271d6f9"
  },
  {
    "url": "assets/js/67.58597ed3.js",
    "revision": "c8e69eae171b476adfc23f7884fba327"
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
    "url": "assets/js/app.3b96665e.js",
    "revision": "dfaf5ecf2c30ac5277783972218ba16d"
  },
  {
    "url": "author.jpg",
    "revision": "df2fc7455cc5663043df50d78c9329ef"
  },
  {
    "url": "blog/index.html",
    "revision": "6221c720e559046c67c9f21c9da812cf"
  },
  {
    "url": "blog/page/10/index.html",
    "revision": "ee48c56eb6fe3780ceb7f9b8bb9d9299"
  },
  {
    "url": "blog/page/11/index.html",
    "revision": "498e839f6156dcb9249d78b22b943864"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "a70d538d8651e6a18d094524b970a5b9"
  },
  {
    "url": "blog/page/3/index.html",
    "revision": "05ce016a6cacaaf8fd891fe2d8ce217f"
  },
  {
    "url": "blog/page/4/index.html",
    "revision": "d4e8935aaf1df91f40abb34078183b2b"
  },
  {
    "url": "blog/page/5/index.html",
    "revision": "50afa2463bf346feaa20fb7b22c9a7ed"
  },
  {
    "url": "blog/page/6/index.html",
    "revision": "0e728ff77a087dfecbcb93d0411eb2ad"
  },
  {
    "url": "blog/page/7/index.html",
    "revision": "132a75d9817423fed14e568af8994342"
  },
  {
    "url": "blog/page/8/index.html",
    "revision": "1d6c7d0fef09051ac679d5706296b14d"
  },
  {
    "url": "blog/page/9/index.html",
    "revision": "b409c98b2a10bc797183a28cf27a8e81"
  },
  {
    "url": "book/index.html",
    "revision": "7825aaaa2edd7f46990bd7dc2c20caeb"
  },
  {
    "url": "categories/index.html",
    "revision": "c43d8aae7e29c7e84b3f22e070d6bb32"
  },
  {
    "url": "categories/个人随笔.html",
    "revision": "d475609e843aeb7edad60f993f21957f"
  },
  {
    "url": "categories/前端技术.html",
    "revision": "c7519a2325e5cef87f3aff09cb0545e2"
  },
  {
    "url": "categories/前端视角.html",
    "revision": "b1ff0df326e77d2f942e3600fb45c4fc"
  },
  {
    "url": "categories/前端资源.html",
    "revision": "726859dee40041f8332181e1b9be69c2"
  },
  {
    "url": "categories/博客建站.html",
    "revision": "36f502a2731909f288ab21708583ca8b"
  },
  {
    "url": "categories/资源分享.html",
    "revision": "c4cc0bd7f9e0754cd84e27b55ec714fd"
  },
  {
    "url": "index.html",
    "revision": "7dd6b11fa3933830ad8c23037a1c63d9"
  },
  {
    "url": "logo.jpg",
    "revision": "3befeabc1b55916802dbc080530c2179"
  },
  {
    "url": "tags/Canvas.html",
    "revision": "2ab357fa6e404ef7dd15abc80417c212"
  },
  {
    "url": "tags/CSS.html",
    "revision": "9de3318cd52242af3e9027603bee996e"
  },
  {
    "url": "tags/css预处理器.html",
    "revision": "3b729016f1fa46333172e2101737f93f"
  },
  {
    "url": "tags/DOM.html",
    "revision": "545fe79a218166358965d336cf2e3b37"
  },
  {
    "url": "tags/github.html",
    "revision": "d9e86a07f88cacc66bf59f8b73e805df"
  },
  {
    "url": "tags/gulp.html",
    "revision": "0a56fff30a84d8395d99e5509a3f610f"
  },
  {
    "url": "tags/hexo.html",
    "revision": "9a6575b373f11bfe1304e1cea46a3084"
  },
  {
    "url": "tags/html.html",
    "revision": "f4adc02154789b4fe08bd1a498216adc"
  },
  {
    "url": "tags/index.html",
    "revision": "a23500a3b9b67b4b39030c873a62deb6"
  },
  {
    "url": "tags/JavaScript.html",
    "revision": "287b96069b291c5b30a3d38d2d6cabf0"
  },
  {
    "url": "tags/markdown.html",
    "revision": "25d367dccfd2d15c9a8b5f12b638db0e"
  },
  {
    "url": "tags/next.html",
    "revision": "0754a4bc75c4ff836152e675da272990"
  },
  {
    "url": "tags/sass.html",
    "revision": "403106c3a4ceebc3bf937721ec10381d"
  },
  {
    "url": "tags/sublimetext.html",
    "revision": "3daae8dabeaa3717882b0a57e0906a7f"
  },
  {
    "url": "tags/VSCode.html",
    "revision": "3252711ff060c1753accdff4afa5941f"
  },
  {
    "url": "tags/VuePress.html",
    "revision": "b781fa221bd895cbd581d8d5249f7ebe"
  },
  {
    "url": "tags/web前端.html",
    "revision": "dfdce87987d35ca365407b66e8da9650"
  },
  {
    "url": "tags/yilia.html",
    "revision": "866e35aecf2b92bd2944317668dc7592"
  },
  {
    "url": "tags/人生历程.html",
    "revision": "c0a4ccc2a38f3a9ae11940cbf154240c"
  },
  {
    "url": "tags/博客前言.html",
    "revision": "b4235eaedf0a6d462eddd9b35482d967"
  },
  {
    "url": "tags/博客版本更迭.html",
    "revision": "244584b652637252fca70a265f0b1e5d"
  },
  {
    "url": "tags/响应式.html",
    "revision": "dbcbd75c56f01bea8038e553c19175c8"
  },
  {
    "url": "tags/开发工具.html",
    "revision": "d247e3ea80fdaa42736e7660ec8afe4d"
  },
  {
    "url": "tags/插件.html",
    "revision": "c190a2f8803389d1dad27ed8ddd2f97b"
  },
  {
    "url": "tags/搭建博客.html",
    "revision": "3e5069056e3a76a338becefb8cd67fe5"
  },
  {
    "url": "tags/框架原理.html",
    "revision": "30b536662a775ce349361d2a94cb4439"
  },
  {
    "url": "tags/浏览器.html",
    "revision": "d95b564aa001a28d1830f416287b53d3"
  },
  {
    "url": "tags/移动端.html",
    "revision": "2d81731d9f1ae70770b9a606217674bc"
  },
  {
    "url": "tags/编码规范.html",
    "revision": "217d1edc9133f3c0f9a55f495daca067"
  },
  {
    "url": "tags/编辑器.html",
    "revision": "e9b06ac21c48623fc091532d7e9ba996"
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
