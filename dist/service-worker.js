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
    "url": "404.html",
    "revision": "ffe856a51c6e491714b747c61300b5cb"
  },
  {
    "url": "about/index.html",
    "revision": "7b6d3857e580fd8b6f26fb06b37509d0"
  },
  {
    "url": "archives/index.html",
    "revision": "f84fd7c15541998f3959666f0b3311f9"
  },
  {
    "url": "assets/css/0.styles.aeedd813.css",
    "revision": "36f612ea7decabe90c155c99c28cfd2c"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/10.559bc0d1.js",
    "revision": "320b13419f42f3e745787335d6414950"
  },
  {
    "url": "assets/js/11.6b3d528d.js",
    "revision": "b6319bc6e47ad23e02f27544015afb22"
  },
  {
    "url": "assets/js/12.59985332.js",
    "revision": "50b96f3b12d0da0c5bb4b21882807d15"
  },
  {
    "url": "assets/js/13.e267da32.js",
    "revision": "21ccf2f93c6fa86ff78497f2424b9c4e"
  },
  {
    "url": "assets/js/14.cde6208e.js",
    "revision": "f944e1fdca0b4e1f89b2e8a434a86513"
  },
  {
    "url": "assets/js/15.73939856.js",
    "revision": "acce9cd1f38d63680a276607284c1b22"
  },
  {
    "url": "assets/js/16.c1f8c3e8.js",
    "revision": "f2df71e8113a12c8ed1abd77a0832a0a"
  },
  {
    "url": "assets/js/17.1436faed.js",
    "revision": "3873e2b4ffa9ffeb3b1964ae7ef6578e"
  },
  {
    "url": "assets/js/18.f8c7d590.js",
    "revision": "d45f027b67c86501e8805d7a12a856c9"
  },
  {
    "url": "assets/js/19.3f8356fa.js",
    "revision": "a5f4decbcd3880c057628b1da33f91eb"
  },
  {
    "url": "assets/js/2.39b0c024.js",
    "revision": "6b72ab5f2571997825dd542d4cfe8838"
  },
  {
    "url": "assets/js/20.e6f8c04c.js",
    "revision": "0d1c91a3b86ff6c685fb5a6ad883da64"
  },
  {
    "url": "assets/js/21.cc472f4c.js",
    "revision": "9f372c2d600a9748bea65212a9588787"
  },
  {
    "url": "assets/js/22.e0feedfd.js",
    "revision": "d6f104c8cfc39c2d6017fc6331d9b317"
  },
  {
    "url": "assets/js/23.a3fa1376.js",
    "revision": "a94d706fbd4b43b3ad23b7cd9531749d"
  },
  {
    "url": "assets/js/24.21f8836d.js",
    "revision": "336f01b758f74d10d3ea2a8c401b9ca7"
  },
  {
    "url": "assets/js/25.8f2ad6f5.js",
    "revision": "d845551c0ffd45c57009e7a7c48cc317"
  },
  {
    "url": "assets/js/26.c36e611d.js",
    "revision": "40ac680bea6cbd1169cccc856fc8a81f"
  },
  {
    "url": "assets/js/27.62455642.js",
    "revision": "bac3cdd29bd2c83351a32fc6afb86f41"
  },
  {
    "url": "assets/js/28.b81403b4.js",
    "revision": "e7db2526b4a09e1b32c62c700e953a5f"
  },
  {
    "url": "assets/js/29.408287d1.js",
    "revision": "d452fcf3aebab584d6585ae513eb1884"
  },
  {
    "url": "assets/js/3.cad3df8e.js",
    "revision": "77b63f860b8fb53059ff941f8b4f8cbb"
  },
  {
    "url": "assets/js/30.3deaedf8.js",
    "revision": "f407ada5c87d0bba18cd060c58e375aa"
  },
  {
    "url": "assets/js/31.aff9ae76.js",
    "revision": "410949c0519294261330bf7f3367a057"
  },
  {
    "url": "assets/js/32.245d7255.js",
    "revision": "7a0e12f3863593cd6ce26ce9b642b061"
  },
  {
    "url": "assets/js/33.a53b298e.js",
    "revision": "aaa48e53a7a1e9542ff8dc8a030e07d7"
  },
  {
    "url": "assets/js/34.91844814.js",
    "revision": "f3c54275874e2d7ffd56df08dc0b8305"
  },
  {
    "url": "assets/js/35.038031b7.js",
    "revision": "52d5aeac173e5f2d88ac43c3a8e7f428"
  },
  {
    "url": "assets/js/36.e33c1044.js",
    "revision": "8dd2432d91333930b0cfb15bc27a763d"
  },
  {
    "url": "assets/js/37.38dd1221.js",
    "revision": "67b07f6c5c2f6b7cd8e04bf3526db55f"
  },
  {
    "url": "assets/js/38.609beddd.js",
    "revision": "71062faa4d346f75beb2077370def113"
  },
  {
    "url": "assets/js/39.c5ebf47a.js",
    "revision": "0bd32a920adc0589da30f5bfe1d71f68"
  },
  {
    "url": "assets/js/4.4e467800.js",
    "revision": "80aaf65cadd2a9a252ec072df0c49c4a"
  },
  {
    "url": "assets/js/40.33e3cb09.js",
    "revision": "68b13c2e38c6c2b1d398835e415c73df"
  },
  {
    "url": "assets/js/41.9a3c7402.js",
    "revision": "497f322ee866b90061c9cdbfd8429bb9"
  },
  {
    "url": "assets/js/42.189de7ec.js",
    "revision": "f3f3ae337d956b25ec05a0f142a95948"
  },
  {
    "url": "assets/js/43.f09d6096.js",
    "revision": "e65b1942339e01982aaf66040357a5a5"
  },
  {
    "url": "assets/js/44.85ae037f.js",
    "revision": "287a8f8774f92c491a502f666ba5debc"
  },
  {
    "url": "assets/js/45.c027006f.js",
    "revision": "b93264b6d7c4a2f828502c21af87999a"
  },
  {
    "url": "assets/js/46.204cd641.js",
    "revision": "3d09968051107c4ca247e296335f4e83"
  },
  {
    "url": "assets/js/47.caddb5a6.js",
    "revision": "64efe0333974ef00c92f57cc32d85998"
  },
  {
    "url": "assets/js/48.da316fd1.js",
    "revision": "30a078b9e37c4f3c83e9ced749260199"
  },
  {
    "url": "assets/js/49.1ea8cf34.js",
    "revision": "06b985f366f2f095648032c3469a25ef"
  },
  {
    "url": "assets/js/5.09a080a8.js",
    "revision": "8efdeb58e5f6781ca057b509a2a17b52"
  },
  {
    "url": "assets/js/50.a4eb229e.js",
    "revision": "235977e27734b036ee654532055982cd"
  },
  {
    "url": "assets/js/51.00e5f317.js",
    "revision": "05801b274ef8e1b1b5d9f3b9033315e2"
  },
  {
    "url": "assets/js/52.0ff063a8.js",
    "revision": "94a6d6bf4f0a2e135af87cdf822f129b"
  },
  {
    "url": "assets/js/53.e37c304c.js",
    "revision": "4af44a03d69b4dbe6816db2b717fd0d5"
  },
  {
    "url": "assets/js/54.f7b09576.js",
    "revision": "840f14a0ba62b248cb9a19b7bcc01075"
  },
  {
    "url": "assets/js/6.077373f5.js",
    "revision": "aeacb59831c098446cd3bb5ed0ee8851"
  },
  {
    "url": "assets/js/7.a59b7b51.js",
    "revision": "affebfed2deacdb5227179c667056f4a"
  },
  {
    "url": "assets/js/8.37fc8448.js",
    "revision": "dbc6890d2e6a206ae7b2022b9e95b2df"
  },
  {
    "url": "assets/js/9.38b349fb.js",
    "revision": "4434bc9429776608f2eff9d48831d9d8"
  },
  {
    "url": "assets/js/app.dcb4cc71.js",
    "revision": "b697edce2eb6d198e93bfdcced8ad910"
  },
  {
    "url": "author.jpg",
    "revision": "df2fc7455cc5663043df50d78c9329ef"
  },
  {
    "url": "blog/CSS实现元素的居中显示.html",
    "revision": "745670aa4fbab1877d5b730919b7c6e4"
  },
  {
    "url": "blog/DOM的映射机制.html",
    "revision": "55f473757781b83f817aa55c5fe14930"
  },
  {
    "url": "blog/ESLint-（一）简介与安装.html",
    "revision": "02063d5d3101663d7ace1ca200c6e2c4"
  },
  {
    "url": "blog/ESLint-（二）配置文件.html",
    "revision": "bfb399f0888febd82518dadeb4d6f514"
  },
  {
    "url": "blog/githubpages-hexo-搭建个人博客.html",
    "revision": "fb56a2df09e7da35406dc81615d8c85f"
  },
  {
    "url": "blog/gulp-自动化构建工具.html",
    "revision": "7e7d86f89795c3947fd91d49da9f9b13"
  },
  {
    "url": "blog/hello-world.html",
    "revision": "30166567f1e51bec9f1663f74575d4ed"
  },
  {
    "url": "blog/hexo-next主题高级配置.html",
    "revision": "a4bdfe7d4b49ffc344ad41671a9803ee"
  },
  {
    "url": "blog/Hexo-yilia主题-githubpages博客添加友言评论功能.html",
    "revision": "4627243b2f2632400c421f2ee2936cfe"
  },
  {
    "url": "blog/html语义化.html",
    "revision": "687f641e01c340285c2583c83d799fa9"
  },
  {
    "url": "blog/index.html",
    "revision": "5bfeb038e58e0f758cfad68c459d823a"
  },
  {
    "url": "blog/JavaScript-面向对象编程.html",
    "revision": "bfd2a79385d6de298e217c8c9470bae9"
  },
  {
    "url": "blog/JS变量提升.html",
    "revision": "468d24a6278be7202abd68fcd278a4d1"
  },
  {
    "url": "blog/JS变量的创建机制.html",
    "revision": "2cc1b7b884704c0978b104705b1409e7"
  },
  {
    "url": "blog/JS堆栈内存.html",
    "revision": "ab40bdad442d17dfc31d801ed0432ed3"
  },
  {
    "url": "blog/JS类型转换总结.html",
    "revision": "e4df5808cb7e1c809a647bf1a0548ca3"
  },
  {
    "url": "blog/Markdown添加Latex数学公式.html",
    "revision": "c333244fa6717d52a0214436ead48cff"
  },
  {
    "url": "blog/markdown语法.html",
    "revision": "9d940d7192ff83e54d40e2462a3d3c32"
  },
  {
    "url": "blog/sass的使用.html",
    "revision": "616e0330eda250e1588bd7327a179e52"
  },
  {
    "url": "blog/sublimetext-实用插件介绍.html",
    "revision": "80e16eba760c6cf529e396a28302cdef"
  },
  {
    "url": "blog/Transform-引起的-z-index-失效‘.html",
    "revision": "ac781c93cc6d4a18334bf218effbbd8c"
  },
  {
    "url": "blog/像素与viewport概念.html",
    "revision": "7acb6290d05f8ee3bccf7a9af0eae67c"
  },
  {
    "url": "blog/关于Flex布局.html",
    "revision": "f88c1d2fde0530252c7e0d92de61ec70"
  },
  {
    "url": "blog/关于inline-block问题.html",
    "revision": "8efa2d6fc8a15446f56fdc57996f5467"
  },
  {
    "url": "blog/初学者资源推荐.html",
    "revision": "193a66771045ddd3cc5f6ccb70d5532a"
  },
  {
    "url": "blog/前端学习历程.html",
    "revision": "3a43aa911e373484c5f941a5d6df9c90"
  },
  {
    "url": "blog/去除inline-block元素间间距的N种方法.html",
    "revision": "e509a31b8f8ae4b454ab25d277bc75b4"
  },
  {
    "url": "blog/浅谈响应式.html",
    "revision": "d1c31ce073cb1b97ce6c5c2e6b062daf"
  },
  {
    "url": "blog/浏览器设置不保存缓存.html",
    "revision": "eba3e702d5e7b2d24ffa3786d28b4ea0"
  },
  {
    "url": "blog/深入理解层叠上下文和层叠顺序.html",
    "revision": "d04765e49d36b4dda01621692eaad9a9"
  },
  {
    "url": "blog/给不了解前端的同学讲前端.html",
    "revision": "ac4742c6827ce1cc66a1c8133737a75e"
  },
  {
    "url": "blog/编码规范-（一）HTML.html",
    "revision": "d84fd5e4296fd317a7a3e1901a479374"
  },
  {
    "url": "blog/编码规范（二）CSS.html",
    "revision": "32578b73ecc4156d5349feb4bf4688e8"
  },
  {
    "url": "blog/记第一次博客改版更新.html",
    "revision": "8f15e3b97f25051551e801f55e8949ac"
  },
  {
    "url": "blog/说说CSS学习中的瓶颈.html",
    "revision": "b153c79ce1f4e8e56bb4e556f3ef1b00"
  },
  {
    "url": "categories/index.html",
    "revision": "5c33ca5ed4d8f1ee44d711f91f497486"
  },
  {
    "url": "font/iconfont.css",
    "revision": "fa0a78deb30aef5fb5617ad0f69320a5"
  },
  {
    "url": "font/iconfont.eot",
    "revision": "f8c2ea3313bd7a516c2287097a7cc9e2"
  },
  {
    "url": "font/iconfont.js",
    "revision": "5d5e053e2b2646ea2835006989ec2b62"
  },
  {
    "url": "font/iconfont.svg",
    "revision": "f16f19f652a8c7c21b386a65d8376d18"
  },
  {
    "url": "font/iconfont.ttf",
    "revision": "c01e90c4739410fb1e2860f6f7b1e248"
  },
  {
    "url": "font/iconfont.woff",
    "revision": "a77ff8ff6cae44a838f261b9dfa8b5c7"
  },
  {
    "url": "font/iconfont.woff2",
    "revision": "922eace549826930702c5342c25603ba"
  },
  {
    "url": "index.html",
    "revision": "aa267ebca6563d38776cd8620a7aeedb"
  },
  {
    "url": "logo.jpg",
    "revision": "3befeabc1b55916802dbc080530c2179"
  },
  {
    "url": "tags/index.html",
    "revision": "71b2176440c074814a058fce77d836c3"
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
