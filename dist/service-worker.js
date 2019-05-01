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
    "revision": "da312d6af45c4de81776b549d5ba37d1"
  },
  {
    "url": "2017/07/gulp-自动化构建工具/index.html",
    "revision": "080499a5887eacf5aff2b33b6e3b6fbe"
  },
  {
    "url": "2017/07/markdown语法/index.html",
    "revision": "e71e87976e2ff5a915135051d1468625"
  },
  {
    "url": "2017/08/初学者资源推荐/index.html",
    "revision": "b8b8e8b8d1c7fdf663e23c57ae10b8f4"
  },
  {
    "url": "2017/08/去除inline-block元素间间距的n种方法/index.html",
    "revision": "a91a98add1bc4c0a551a2a217ffb8b63"
  },
  {
    "url": "2017/09/githubpages-hexo-搭建个人博客/index.html",
    "revision": "0b46c00a8b9832400ef49daec0350b87"
  },
  {
    "url": "2017/09/hello-world/index.html",
    "revision": "1b91e7a86aa50c9a547596cdaae9967b"
  },
  {
    "url": "2017/09/hexo-next主题高级配置/index.html",
    "revision": "56e7ac96987553c2d316fad103811819"
  },
  {
    "url": "2017/09/hexo-yilia主题-githubpages博客添加友言评论功能/index.html",
    "revision": "b554dbcaa15987256941c1ebf26ba00d"
  },
  {
    "url": "2017/09/javascript-面向对象编程/index.html",
    "revision": "87bd104158b4cda252cd1357a0618be7"
  },
  {
    "url": "2017/09/sublimetext-实用插件介绍/index.html",
    "revision": "ff12e5a9b28471fb9517e67586c46bf1"
  },
  {
    "url": "2017/10/canvas画布/index.html",
    "revision": "91e41dad7691616f6b4a78234ac4641b"
  },
  {
    "url": "2017/10/css实现元素的居中显示/index.html",
    "revision": "024e466595a1c5d6f9b63683028e280f"
  },
  {
    "url": "2017/10/css渐变的简单使用/index.html",
    "revision": "9ecd77e05c74a8a7d02d398613ad4392"
  },
  {
    "url": "2017/10/sass的使用/index.html",
    "revision": "03a14d52931d5ad9065bd60dc5cf1106"
  },
  {
    "url": "2017/10/transform-引起的-z-index-失效‘/index.html",
    "revision": "62631e9a889796aa9e2c906b2190e7b9"
  },
  {
    "url": "2017/10/像素与viewport概念/index.html",
    "revision": "c12fd2a20ed14d7efe2a3dd089e14bac"
  },
  {
    "url": "2017/10/关于flex布局/index.html",
    "revision": "bf0dd7c2208553794923888dad065552"
  },
  {
    "url": "2017/10/关于inline-block问题/index.html",
    "revision": "f733315e7c16ead278c9a903c324967c"
  },
  {
    "url": "2017/10/浅谈响应式/index.html",
    "revision": "77570476ed5ed91775bff5198c86e298"
  },
  {
    "url": "2017/10/深入理解层叠上下文和层叠顺序/index.html",
    "revision": "f1eb163b71c208927eccc67a3159f4bd"
  },
  {
    "url": "2017/10/给不了解前端的同学讲前端/index.html",
    "revision": "d5ddecc93cebd7cad4af7a2e88425e6b"
  },
  {
    "url": "2017/10/编码规范-（一）html/index.html",
    "revision": "6ecfc56ed573732f4c8b32a33d029d95"
  },
  {
    "url": "2017/10/编码规范（二）css/index.html",
    "revision": "c0a46fc3915d0499d3bb594f5b1d9d21"
  },
  {
    "url": "2017/10/说说css学习中的瓶颈/index.html",
    "revision": "e2414e6ca08787307b24b942b847eab4"
  },
  {
    "url": "2017/11/canvas画五角星/index.html",
    "revision": "f70e557ee3b9350acc6375f34b03373c"
  },
  {
    "url": "2017/11/canvas画时钟/index.html",
    "revision": "e0ab6e28c50cf8106d257312ed185f48"
  },
  {
    "url": "2017/11/js类型转换总结/index.html",
    "revision": "911d329f39fcedd8be030f1be13e2fd8"
  },
  {
    "url": "2017/12/eslint-（一）简介与安装/index.html",
    "revision": "68fe3de7f3d2449e390518a5122c1c48"
  },
  {
    "url": "2017/12/eslint-（二）配置文件/index.html",
    "revision": "aca57cb13156deb698c84c32febb417c"
  },
  {
    "url": "2017/12/markdown添加latex数学公式/index.html",
    "revision": "c7aa1901f20bbd8357df2042f96c507f"
  },
  {
    "url": "2017/12/前端学习历程/index.html",
    "revision": "b5d6ff7188d5eed8a2f0741b5247eb13"
  },
  {
    "url": "2018/06/荔园的浪漫/index.html",
    "revision": "6ed3e0ce9ada17371ce1d4c5d891eb15"
  },
  {
    "url": "2018/07/js变量的创建机制/index.html",
    "revision": "b8bba725bd2c43ea14689a9a3f7daf4e"
  },
  {
    "url": "2018/08/dom的映射机制/index.html",
    "revision": "c27777b0af138a19df6894a02e857a9c"
  },
  {
    "url": "2018/08/js作用域与作用域链/index.html",
    "revision": "5e4c7742c19899de14d51e5369e4c7dd"
  },
  {
    "url": "2018/08/js变量提升/index.html",
    "revision": "81685c0d8e27bf1d1eac6ce3210bbee5"
  },
  {
    "url": "2018/08/js堆栈内存/index.html",
    "revision": "3afdd63c533040066ea2aed447988adc"
  },
  {
    "url": "2018/08/记第一次博客改版更新/index.html",
    "revision": "ac0288a4e795d91135ef0c92aef567d1"
  },
  {
    "url": "2018/09/js函数/index.html",
    "revision": "6441f3a3fe59beb3b70bae3cd60bfb9b"
  },
  {
    "url": "2018/09/js函数的执行机制/index.html",
    "revision": "2bfccedef188139ee873d9ff91236dd2"
  },
  {
    "url": "2018/10/js运算符的优先级/index.html",
    "revision": "6f393daae65812501245cf5009341d7e"
  },
  {
    "url": "2018/12/前端工程师的未来在哪里/index.html",
    "revision": "b551e8d0634b75b103184415636ddad8"
  },
  {
    "url": "2019/02/chrome插件英雄榜/index.html",
    "revision": "b900caf1ad2b652d38462d829b5599d1"
  },
  {
    "url": "2019/02/js中扯不完的分号问题/index.html",
    "revision": "fe0b83760fa5166c420ad187dfdbbc3f"
  },
  {
    "url": "2019/02/mvc-mvp-mvvm-图示（转）/index.html",
    "revision": "1f935c061ce577fdb242c25db5fdb91d"
  },
  {
    "url": "2019/02/vscode插件之polaroid/index.html",
    "revision": "4b8bb112bdf7a5bf237a17f3f30ddccd"
  },
  {
    "url": "2019/02/vuepress入门/index.html",
    "revision": "464157429d14bb890df9cdd7f342dc12"
  },
  {
    "url": "2019/02/前端学习知识图谱/index.html",
    "revision": "45a1f50dbe55f86b878af7c1bd73f1a0"
  },
  {
    "url": "2019/02/浅谈fc/index.html",
    "revision": "a9f34b12d8837792dad7de75cc389ac2"
  },
  {
    "url": "2019/03/机械键盘介绍/index.html",
    "revision": "f276e02e4d7cf4976faa592dc9bbe8e5"
  },
  {
    "url": "2019/04/观察者模式与发布订阅模式的区别/index.html",
    "revision": "ad97b174db333b2568560d1db1d08772"
  },
  {
    "url": "2019/05/grid-网格布局（转）/index.html",
    "revision": "93b7e5b4c70cf756ec00e7dc6a200262"
  },
  {
    "url": "404.html",
    "revision": "323b9e4830d2e8323f037e23af214db7"
  },
  {
    "url": "about/index.html",
    "revision": "f02feaa8ffc98aed89dec7703afd22ae"
  },
  {
    "url": "assets/css/0.styles.addef09d.css",
    "revision": "6b7ae51166297b03649b4ac1da59ff23"
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
    "url": "assets/js/1.b858c17d.js",
    "revision": "4be27317e44afcdfb421864ec5c97b3b"
  },
  {
    "url": "assets/js/10.03d6c3d9.js",
    "revision": "34360e43a64924d92eba50eee50721df"
  },
  {
    "url": "assets/js/11.1eb27b75.js",
    "revision": "7780992cd803f52c1388160c66d85d3a"
  },
  {
    "url": "assets/js/12.237ff193.js",
    "revision": "59e995bbe27186096a23613c0c34219d"
  },
  {
    "url": "assets/js/13.4d2fad65.js",
    "revision": "80fdbc44a5348d163b2748dd05a18321"
  },
  {
    "url": "assets/js/14.a3fc77c4.js",
    "revision": "8bc63faf054ce833c97a1b0d67760eb5"
  },
  {
    "url": "assets/js/15.277069ee.js",
    "revision": "c1c0eb28e8969de5c7a51270b14fed4e"
  },
  {
    "url": "assets/js/16.5295485d.js",
    "revision": "c7d81cc950a3c061af543a15f7bbfc89"
  },
  {
    "url": "assets/js/17.67fee327.js",
    "revision": "4f52bf7810d832913868ac1ed100ef09"
  },
  {
    "url": "assets/js/18.d59fa060.js",
    "revision": "6325813cde90537a54acdf518d081ca8"
  },
  {
    "url": "assets/js/19.651a4974.js",
    "revision": "603af3b9df5e8ee0415de1f21ba09b27"
  },
  {
    "url": "assets/js/2.ab4e59f5.js",
    "revision": "257e91bab091bb02e9bbf58667dd3378"
  },
  {
    "url": "assets/js/20.0383ec06.js",
    "revision": "038501d1d8d0fdfb3c93a2b468bd6990"
  },
  {
    "url": "assets/js/21.a5c2f2e1.js",
    "revision": "dd57a8ecfbabc29faac79c5e53371c99"
  },
  {
    "url": "assets/js/22.f34dd660.js",
    "revision": "b5b28777518107c3c057bfb57577b183"
  },
  {
    "url": "assets/js/23.62b34c9e.js",
    "revision": "d2755a5ba37a2755a0735c2a69d1896d"
  },
  {
    "url": "assets/js/24.fceac874.js",
    "revision": "6fe0662c2b3b6ad710db768ef30d8e33"
  },
  {
    "url": "assets/js/25.59a3e46f.js",
    "revision": "0af89e1d61dbdb65938e61131519e6d2"
  },
  {
    "url": "assets/js/26.28891320.js",
    "revision": "6048838b08f50b94ef8872c7091c5e7c"
  },
  {
    "url": "assets/js/27.9283ccb6.js",
    "revision": "e3669e29407e1877bd0393669b7618da"
  },
  {
    "url": "assets/js/28.88182806.js",
    "revision": "474d3c4cd8858dd8183a86e83eee4f4b"
  },
  {
    "url": "assets/js/29.55ff5de8.js",
    "revision": "748775cecf918a557eb20a0ab5b653cd"
  },
  {
    "url": "assets/js/30.043a4ffd.js",
    "revision": "55fbb243cd67cd64553956bbcdd1c731"
  },
  {
    "url": "assets/js/31.3baa63d7.js",
    "revision": "9cbca8ed7d81860ee365d98712ca13d4"
  },
  {
    "url": "assets/js/32.834cd4b9.js",
    "revision": "b6765fd66b3859e3280e7052cc2b5f61"
  },
  {
    "url": "assets/js/33.16a60ca7.js",
    "revision": "4584435ed0994a9309bed907d69f80e6"
  },
  {
    "url": "assets/js/34.2d02a7ef.js",
    "revision": "6ae9a89622cf07384a3bca8b34e5645a"
  },
  {
    "url": "assets/js/35.c7e1059d.js",
    "revision": "cd4a8e8aecf89b3fc689f5fc51be91fd"
  },
  {
    "url": "assets/js/36.43c97b3f.js",
    "revision": "5145b41794813d18cd8678ab6ce6e343"
  },
  {
    "url": "assets/js/37.93c9ad3a.js",
    "revision": "f3f0f8b304544d6854a84471717624ab"
  },
  {
    "url": "assets/js/38.b72a1e1a.js",
    "revision": "4ee46cbaf2c8e5678dd87b6a177fec10"
  },
  {
    "url": "assets/js/39.f81183b8.js",
    "revision": "6cbd538d33138edc3d811cac095139f4"
  },
  {
    "url": "assets/js/4.b18b3d4f.js",
    "revision": "38b70ce221f603334b3c243e52c879e0"
  },
  {
    "url": "assets/js/40.ea372a04.js",
    "revision": "6aadc49e75d07c4d48811b98ffc95051"
  },
  {
    "url": "assets/js/41.b8f948bb.js",
    "revision": "387bad275ec446f553bc8c933e2005a7"
  },
  {
    "url": "assets/js/42.048f075a.js",
    "revision": "4748dfcaf78efe8c8a8c60b0f0306a1c"
  },
  {
    "url": "assets/js/43.8e78f7cd.js",
    "revision": "abf5f062a82619ce3972f623ff585a8a"
  },
  {
    "url": "assets/js/44.c38c2d6d.js",
    "revision": "efd5b743c8472207818e3010104ced0e"
  },
  {
    "url": "assets/js/45.af42ffb9.js",
    "revision": "e94afda2e1e77758d03b69729b511570"
  },
  {
    "url": "assets/js/46.e6c204f3.js",
    "revision": "09d71d5d912c604333d8cd7fa87d8ab1"
  },
  {
    "url": "assets/js/47.6bd039da.js",
    "revision": "1908dda0f5ece9f67e43a92addb0a7a4"
  },
  {
    "url": "assets/js/48.3fd6f0ff.js",
    "revision": "41302979e093952897fe7356a10b5df8"
  },
  {
    "url": "assets/js/49.24f7795c.js",
    "revision": "6bf5cc9945457eccab433e7e52b368f1"
  },
  {
    "url": "assets/js/5.499ab4e0.js",
    "revision": "d256830419affb537571a47221a43d34"
  },
  {
    "url": "assets/js/50.93ad6b5c.js",
    "revision": "f55787086133cd60cd25e126ee7c4159"
  },
  {
    "url": "assets/js/51.6acec95a.js",
    "revision": "44facc4ed646b880945db1e77afcb2d7"
  },
  {
    "url": "assets/js/52.1fbada5f.js",
    "revision": "a15700db8c3fe7e8d2c8fa07b574fc05"
  },
  {
    "url": "assets/js/53.d647ff10.js",
    "revision": "97a28bcc4f009cb4394a158b9ceae87a"
  },
  {
    "url": "assets/js/54.f5bceffd.js",
    "revision": "4030759d75e91376ca793aa1be1457d6"
  },
  {
    "url": "assets/js/55.565d32f6.js",
    "revision": "5395b4835094c88efab23dec3fe0132b"
  },
  {
    "url": "assets/js/56.db340907.js",
    "revision": "3d5283a4f1126d8aee340585947caada"
  },
  {
    "url": "assets/js/57.ec04cec7.js",
    "revision": "2b802d10f262d99ab7063286c25c88a5"
  },
  {
    "url": "assets/js/58.ecc8139e.js",
    "revision": "1d35856531a792961922bcb23cb29c15"
  },
  {
    "url": "assets/js/59.6ff958c1.js",
    "revision": "2a7f9961dc7d540a99d3ae3d2c6f6f46"
  },
  {
    "url": "assets/js/6.5d7337cc.js",
    "revision": "fdd2f7ea1d0b12f495f599797446eb36"
  },
  {
    "url": "assets/js/60.5d8abbc2.js",
    "revision": "320fefe0d53bc862bf79d5c4a2853bba"
  },
  {
    "url": "assets/js/61.fed0847e.js",
    "revision": "db6be79d5f96f5d2bb05b2094edb036e"
  },
  {
    "url": "assets/js/62.d1199b9b.js",
    "revision": "5b9f6bdac64be53cc802f7bf2c827ad0"
  },
  {
    "url": "assets/js/63.79b8fdd0.js",
    "revision": "5b1d094f1e353f529264b1956d4230ae"
  },
  {
    "url": "assets/js/64.14f41723.js",
    "revision": "e8f6326c8dd5332aae8f54805bb88a49"
  },
  {
    "url": "assets/js/65.5d3e5b8f.js",
    "revision": "a9f469a0a1122be4cc5cf2a80edc93d8"
  },
  {
    "url": "assets/js/66.5776ede1.js",
    "revision": "d06e8c5e1308cb483472cfaa148ebd80"
  },
  {
    "url": "assets/js/67.1829b787.js",
    "revision": "7376cf8c8c3d1dda4175b969d8d822e9"
  },
  {
    "url": "assets/js/68.9bb33651.js",
    "revision": "89fbed23f5d4590805434bf868c42cb8"
  },
  {
    "url": "assets/js/69.4f606f92.js",
    "revision": "036e0225d700be1db26d1bea3e37808a"
  },
  {
    "url": "assets/js/7.d62c88b5.js",
    "revision": "96993bb0e43bcf9ba9cb242537580d70"
  },
  {
    "url": "assets/js/70.01c1bd46.js",
    "revision": "b106873afdc196640abf98239e7d965e"
  },
  {
    "url": "assets/js/8.bd1488e8.js",
    "revision": "316b59672b3085efb64f2bccd8f9f40a"
  },
  {
    "url": "assets/js/9.62dd6bc7.js",
    "revision": "89ce45bb41a43b627cf97a8c17b8cf82"
  },
  {
    "url": "assets/js/app.82bdd821.js",
    "revision": "729f940b524e53d1fe360839b977cd2d"
  },
  {
    "url": "author.jpg",
    "revision": "33b1dc93ce007567bbd021abf6b89e6b"
  },
  {
    "url": "blog/index.html",
    "revision": "b61ab517781f4afe83046691f69a2224"
  },
  {
    "url": "blog/page/10/index.html",
    "revision": "d2edb9be2d318d306b9a9ed9dd0de6c8"
  },
  {
    "url": "blog/page/11/index.html",
    "revision": "dd7b5ff78b1c0892e9b1ed28b72f1685"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "ffdb7c368948f8a9355f00ed7977e216"
  },
  {
    "url": "blog/page/3/index.html",
    "revision": "3358cd1b16f4240b87320337e708ca21"
  },
  {
    "url": "blog/page/4/index.html",
    "revision": "03c2bf64ab5abdbdacf72929ff82fa50"
  },
  {
    "url": "blog/page/5/index.html",
    "revision": "46de459f62fcfa102700c34704694b8f"
  },
  {
    "url": "blog/page/6/index.html",
    "revision": "edf82e5925f25c25748155349c00adaf"
  },
  {
    "url": "blog/page/7/index.html",
    "revision": "245da819212d7283b96c80eae8c3ac7b"
  },
  {
    "url": "blog/page/8/index.html",
    "revision": "7a350555b57536b491be35dce91ab84c"
  },
  {
    "url": "blog/page/9/index.html",
    "revision": "39d92e2ec2831cd6dd0aeaacc68e0f02"
  },
  {
    "url": "book/index.html",
    "revision": "c5591dc2427a37c6435dfc1d114b592a"
  },
  {
    "url": "categories/index.html",
    "revision": "4a7e41d3ec46bfaf25ab167248ec2000"
  },
  {
    "url": "categories/个人随笔.html",
    "revision": "25962c92318a4268aad2b63daff90afe"
  },
  {
    "url": "categories/前端技术.html",
    "revision": "ef3c1100386b8f445f9c2d6d58e45189"
  },
  {
    "url": "categories/前端视角.html",
    "revision": "57aa037276936b92883af724a3b0766f"
  },
  {
    "url": "categories/前端资源.html",
    "revision": "48267afc07214c107e5bbb9d052dc3e2"
  },
  {
    "url": "categories/博客建站.html",
    "revision": "22b151445b407e24f05b0ac2f68deb3a"
  },
  {
    "url": "categories/资源分享.html",
    "revision": "00f92f10fcb7a332fa4261459f6d1755"
  },
  {
    "url": "index.html",
    "revision": "96161960598a1de2bd210230f005e843"
  },
  {
    "url": "logo.jpg",
    "revision": "3befeabc1b55916802dbc080530c2179"
  },
  {
    "url": "tags/Canvas.html",
    "revision": "830171e61e724c2943fa3401f7f98cfb"
  },
  {
    "url": "tags/CSS.html",
    "revision": "52af1ccad3d2fad370c9985a3f468967"
  },
  {
    "url": "tags/CSS3.html",
    "revision": "7064122033a1740c86d4d594c98a7fb5"
  },
  {
    "url": "tags/css预处理器.html",
    "revision": "2c9ea6c11781ee37b91e3cb0edc5bbc6"
  },
  {
    "url": "tags/DOM.html",
    "revision": "58ab0addc6632e20a9c97f93c154d9df"
  },
  {
    "url": "tags/github.html",
    "revision": "f7f45b7005a6807fa04a30cb0419675e"
  },
  {
    "url": "tags/gulp.html",
    "revision": "41028cfa852fa9aa0ec6df2abc240c35"
  },
  {
    "url": "tags/hexo.html",
    "revision": "53bc12231641192d5ccfc1627f737d45"
  },
  {
    "url": "tags/html.html",
    "revision": "d96ac9c5b01fef7bd21b20cba5ceecbe"
  },
  {
    "url": "tags/index.html",
    "revision": "04ed373d2241b616ebe72b9c2be331b7"
  },
  {
    "url": "tags/JavaScript.html",
    "revision": "3a584c849fe211617c7d647c56dc53ba"
  },
  {
    "url": "tags/markdown.html",
    "revision": "8c58b782045d1a2105865118331642c8"
  },
  {
    "url": "tags/next.html",
    "revision": "2d4d8eeb06eb6d0b5896d2db021f7315"
  },
  {
    "url": "tags/sass.html",
    "revision": "a1c708538562fde59fef5b88be35ff9e"
  },
  {
    "url": "tags/sublimetext.html",
    "revision": "0e27ec631b34c2a3f5ec3bfd378cc265"
  },
  {
    "url": "tags/VSCode.html",
    "revision": "cf95c72c931f57932c55f01dcf0b2cd6"
  },
  {
    "url": "tags/VuePress.html",
    "revision": "6cbd6c1f2da1f97be99ea03654e90fda"
  },
  {
    "url": "tags/web前端.html",
    "revision": "51eb9ac80a01d6ad89c119c38a252fec"
  },
  {
    "url": "tags/yilia.html",
    "revision": "f68b6a832a279d8d08636851e607ef31"
  },
  {
    "url": "tags/人生历程.html",
    "revision": "82fb74935c044e9604802bec54fcc0c8"
  },
  {
    "url": "tags/博客前言.html",
    "revision": "3f848d0b1e2646ea344a5c9d4e731588"
  },
  {
    "url": "tags/博客版本更迭.html",
    "revision": "f4bf51c18ce66dddf259b6b24bdacd39"
  },
  {
    "url": "tags/响应式.html",
    "revision": "1c6f6108cccd78995c9891471d438547"
  },
  {
    "url": "tags/开发工具.html",
    "revision": "dcb4e29081bec7ebf5464e807fddda53"
  },
  {
    "url": "tags/插件.html",
    "revision": "2832c7ba8323749c525fc1a8e8f41f09"
  },
  {
    "url": "tags/搭建博客.html",
    "revision": "9450acb27ca3405b778977c6f5ad6cd1"
  },
  {
    "url": "tags/框架原理.html",
    "revision": "3a77130946ba53e0702da170de434c0f"
  },
  {
    "url": "tags/浏览器.html",
    "revision": "5906de0d7a6425824c897a1e9ecfe0ad"
  },
  {
    "url": "tags/移动端.html",
    "revision": "ffb3a8ab5c899b93423cd7740799336c"
  },
  {
    "url": "tags/编码规范.html",
    "revision": "89756ad5f0f953caf3d1330ba536e3e0"
  },
  {
    "url": "tags/编辑器.html",
    "revision": "026e6a369c72ea0660fae99ec804606e"
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
