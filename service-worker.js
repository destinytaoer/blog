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
    "revision": "57d26ea9d6d31ca12dd5d1c236732d2b"
  },
  {
    "url": "about/index.html",
    "revision": "02c43c138008cf8936219f67bebaa998"
  },
  {
    "url": "archives/index.html",
    "revision": "7f1b7ec8eb3cf107ec1376570befd754"
  },
  {
    "url": "assets/css/0.styles.c809d126.css",
    "revision": "5f31c86c00e6c02d3327249b9c7c51fb"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/10.9a8b4d90.js",
    "revision": "6c5d2ae5e5bd76fc4aa563fe25dffbc5"
  },
  {
    "url": "assets/js/11.05d52705.js",
    "revision": "675795d358984cb93a7977ae95f220f4"
  },
  {
    "url": "assets/js/12.915f0a88.js",
    "revision": "6442653a8c3f78fb5b584e284f343de2"
  },
  {
    "url": "assets/js/13.fc171b5c.js",
    "revision": "b60b69f68088d5d4cb53e5f957a1cb29"
  },
  {
    "url": "assets/js/14.6431afe6.js",
    "revision": "f001097db0e85674c8d0ab69ca38fbb3"
  },
  {
    "url": "assets/js/15.94fae7d7.js",
    "revision": "bc986f3faa2fb60ae5ad3e8dc0abc039"
  },
  {
    "url": "assets/js/16.7e1184ff.js",
    "revision": "c1c67a832e7c6cc983b80a758393afea"
  },
  {
    "url": "assets/js/17.e0ab413b.js",
    "revision": "f378b6c97004a88dd2d667680af58568"
  },
  {
    "url": "assets/js/18.00545af9.js",
    "revision": "333ed85d57f050c9b5468334cfedd96c"
  },
  {
    "url": "assets/js/19.3aebff99.js",
    "revision": "7360090b5a6453b0e99f6f2a21a127b3"
  },
  {
    "url": "assets/js/2.8f431860.js",
    "revision": "7bef6e69a6e5dae1da587c996cefa65d"
  },
  {
    "url": "assets/js/20.be3eaeb7.js",
    "revision": "e1e2cccf7a5db8eb5d939105cec2a809"
  },
  {
    "url": "assets/js/21.116b9116.js",
    "revision": "955017517dddb1a6e489de090ac6ff70"
  },
  {
    "url": "assets/js/22.06e64f9d.js",
    "revision": "4bf69595a0060b8152f81a2b636a42a6"
  },
  {
    "url": "assets/js/23.0c5c8d73.js",
    "revision": "9494cf204685c1e789d3c9eb5735394b"
  },
  {
    "url": "assets/js/24.773d81e5.js",
    "revision": "e824331bd94700428cb7e9a4508a6090"
  },
  {
    "url": "assets/js/25.8f2ad6f5.js",
    "revision": "d845551c0ffd45c57009e7a7c48cc317"
  },
  {
    "url": "assets/js/26.b2d8f4cc.js",
    "revision": "598dfb51b564ca71db714922859b62c6"
  },
  {
    "url": "assets/js/27.9bcc3ee8.js",
    "revision": "70ea827e5608090d0b18bb9c0110bc98"
  },
  {
    "url": "assets/js/28.0578a1d5.js",
    "revision": "80fec90112d2038df51832e351e69339"
  },
  {
    "url": "assets/js/29.ee77ff32.js",
    "revision": "0a72f266f85e08ee3a67d6dfd40e2a47"
  },
  {
    "url": "assets/js/3.7f0aa437.js",
    "revision": "8d8c31f8bdc6657fed5379f021222c35"
  },
  {
    "url": "assets/js/30.49a43090.js",
    "revision": "0a134ff2f3ef7b43464df496506fc4a5"
  },
  {
    "url": "assets/js/31.6ebe7b49.js",
    "revision": "752d04f50debfec3ce6707793bf2fc2c"
  },
  {
    "url": "assets/js/32.c3b36a76.js",
    "revision": "9c49efea6941c5b581a07be2c7e6a6ac"
  },
  {
    "url": "assets/js/33.51288f47.js",
    "revision": "467e9ff404f35a44849ec3a84163c496"
  },
  {
    "url": "assets/js/34.b5e242cc.js",
    "revision": "a94b29bbe73ffb5c35efe5a29bd1a0ae"
  },
  {
    "url": "assets/js/35.121369a4.js",
    "revision": "2b93dabcf325270041161431a6dca9ab"
  },
  {
    "url": "assets/js/36.a056d0a9.js",
    "revision": "f7d35be7aa889d99ab23b49a0f90b6c5"
  },
  {
    "url": "assets/js/37.0b71e232.js",
    "revision": "282324b01023318da8d2bd7328eb171f"
  },
  {
    "url": "assets/js/38.032d256c.js",
    "revision": "7efc601faab5c83a5cc7b2a7510d05ec"
  },
  {
    "url": "assets/js/39.5f6585c6.js",
    "revision": "ed3c65d317825f4d94799cf3b05aa05e"
  },
  {
    "url": "assets/js/4.65bc9f06.js",
    "revision": "af81438a1ec26e0bc8b68e45b8ec4182"
  },
  {
    "url": "assets/js/40.14a6405b.js",
    "revision": "4a328a1006aecf9852d55f19f907bc35"
  },
  {
    "url": "assets/js/41.1cf62ee0.js",
    "revision": "fd0b14456f12b2b9868066005950fb5f"
  },
  {
    "url": "assets/js/42.e7639cee.js",
    "revision": "9a2ba9aca75c2a059ccd3daed96729d2"
  },
  {
    "url": "assets/js/43.536ec85d.js",
    "revision": "0e18baefb89e159b297aff269e9eb181"
  },
  {
    "url": "assets/js/44.ba66dcc1.js",
    "revision": "046b80fcad451ad68dcc492892576de4"
  },
  {
    "url": "assets/js/45.c6104187.js",
    "revision": "b69a7411c5f63cba28d1789c0297da70"
  },
  {
    "url": "assets/js/46.c292ed00.js",
    "revision": "2878230e821105f4ddc6daa742928cce"
  },
  {
    "url": "assets/js/47.efbbfd5c.js",
    "revision": "7cbf4a923318467d3c7c8af277fbb1eb"
  },
  {
    "url": "assets/js/48.660142ef.js",
    "revision": "4a3b844222471570b51b94285317fc82"
  },
  {
    "url": "assets/js/49.1ea8cf34.js",
    "revision": "06b985f366f2f095648032c3469a25ef"
  },
  {
    "url": "assets/js/5.f0f14f8e.js",
    "revision": "90198c32a212997e084774cd3622d72d"
  },
  {
    "url": "assets/js/50.28e1667d.js",
    "revision": "43353c88412527febdedf1c2cb721534"
  },
  {
    "url": "assets/js/51.86030a2e.js",
    "revision": "a951dad5959e435e83044a74066eb3e4"
  },
  {
    "url": "assets/js/52.ec43fbbc.js",
    "revision": "8049f8d7dc4d1b21e993c3ede2233a52"
  },
  {
    "url": "assets/js/53.136c590d.js",
    "revision": "71c99adf5013c0ac6ec2786334cefaef"
  },
  {
    "url": "assets/js/6.bad66979.js",
    "revision": "ac5fc096fb9a14702a938b256f746b25"
  },
  {
    "url": "assets/js/7.3d3402dd.js",
    "revision": "e0e4679bed8e2414e9569af1dd157178"
  },
  {
    "url": "assets/js/8.3ed05582.js",
    "revision": "70a483251f9f92392d2f46880f7954d7"
  },
  {
    "url": "assets/js/9.84ce6458.js",
    "revision": "d7789bb3f08778b1d02a1facabf9f1b6"
  },
  {
    "url": "assets/js/app.ffa51721.js",
    "revision": "633a1fd961ddf7f6fd7aae1d7c659328"
  },
  {
    "url": "author.jpg",
    "revision": "df2fc7455cc5663043df50d78c9329ef"
  },
  {
    "url": "blog/CSS实现元素的居中显示.html",
    "revision": "bc911c1a60663279c5507f205b1721e5"
  },
  {
    "url": "blog/DOM的映射机制.html",
    "revision": "b363547d8581591af00695d82817882f"
  },
  {
    "url": "blog/ESLint-（一）简介与安装.html",
    "revision": "c87a29a21a1c83e672e2c1c3c3fba556"
  },
  {
    "url": "blog/ESLint-（二）配置文件.html",
    "revision": "fe7281dad2866616ce1d241b1409c7d5"
  },
  {
    "url": "blog/githubpages-hexo-搭建个人博客.html",
    "revision": "51c961778de0328f0d429971b4e67b62"
  },
  {
    "url": "blog/gulp-自动化构建工具.html",
    "revision": "76b794733638f0de7a54f7ce1031273b"
  },
  {
    "url": "blog/hello-world.html",
    "revision": "491f4bbf41664518e7190a7345523ddf"
  },
  {
    "url": "blog/hexo-next主题高级配置.html",
    "revision": "223c1832dd52718afbd2f10971047775"
  },
  {
    "url": "blog/Hexo-yilia主题-githubpages博客添加友言评论功能.html",
    "revision": "a6fd23140d23c1e8d9d588ff2a61e92f"
  },
  {
    "url": "blog/html语义化.html",
    "revision": "0c2c6ad4d9bc4c9b92bb4cdedffceb3a"
  },
  {
    "url": "blog/index.html",
    "revision": "dbadb470f5f40d84893087dfb6f1e414"
  },
  {
    "url": "blog/JavaScript-面向对象编程.html",
    "revision": "09896787b8462eb6b7db0eb1f1fce092"
  },
  {
    "url": "blog/JS变量提升.html",
    "revision": "405d82efab8df90d5d174f5088ed7bb6"
  },
  {
    "url": "blog/JS变量的创建机制.html",
    "revision": "f1c8cf88a8f905374582388b18e4e7d0"
  },
  {
    "url": "blog/JS堆栈内存.html",
    "revision": "c131c40523355e16d4ba6fd2e10d6cbe"
  },
  {
    "url": "blog/JS类型转换总结.html",
    "revision": "43add411d8ece457902c1d4e52d6ea5f"
  },
  {
    "url": "blog/Markdown添加Latex数学公式.html",
    "revision": "eecd75252d9b2a4fe62b39bfaa4bfd3f"
  },
  {
    "url": "blog/markdown语法.html",
    "revision": "bbac38a88e08e5408646487500baa450"
  },
  {
    "url": "blog/sass的使用.html",
    "revision": "d9176c060d03ffdc7c645948e1bc701f"
  },
  {
    "url": "blog/sublimetext-实用插件介绍.html",
    "revision": "62b37154766d3c92390a25928b72a2e2"
  },
  {
    "url": "blog/Transform-引起的-z-index-失效‘.html",
    "revision": "9b296e257d1e17a1bac54c7f92424dfb"
  },
  {
    "url": "blog/像素与viewport概念.html",
    "revision": "44a7f0a4d40569156afbe893ca8e291a"
  },
  {
    "url": "blog/关于Flex布局.html",
    "revision": "8a9a62c4f989684f14b96a7fa4071834"
  },
  {
    "url": "blog/关于inline-block问题.html",
    "revision": "c13f1cadd8d510e95437e14478e3cffb"
  },
  {
    "url": "blog/初学者资源推荐.html",
    "revision": "7475da7c4287987b2a838252321c706c"
  },
  {
    "url": "blog/前端学习历程.html",
    "revision": "37621578a250abd208e03b4ebe70a66d"
  },
  {
    "url": "blog/去除inline-block元素间间距的N种方法.html",
    "revision": "6020e8b72f7143dfca563afa3928671b"
  },
  {
    "url": "blog/浅谈响应式.html",
    "revision": "048be64ec8b6a89e054bc191be0f8087"
  },
  {
    "url": "blog/浏览器设置不保存缓存.html",
    "revision": "e2b02730f9c92d4b47e200e15bf673c6"
  },
  {
    "url": "blog/深入理解层叠上下文和层叠顺序.html",
    "revision": "e809517eab253dbfdbf5bc82438d1cac"
  },
  {
    "url": "blog/给不了解前端的同学讲前端.html",
    "revision": "784296e57c5087215f35ffcc92b40687"
  },
  {
    "url": "blog/编码规范-（一）HTML.html",
    "revision": "819cfde3e84676541a8ae3c80798861b"
  },
  {
    "url": "blog/编码规范（二）CSS.html",
    "revision": "9fdd59407fb63d88393b1f1be5e1523e"
  },
  {
    "url": "blog/记第一次博客改版更新.html",
    "revision": "f11aafeda63a75d69f1727c9df32a7ad"
  },
  {
    "url": "blog/说说CSS学习中的瓶颈.html",
    "revision": "93ae1fcb9c29cc8e9b73e8559c8790b7"
  },
  {
    "url": "categories/index.html",
    "revision": "c959400d103900fdc81f8d6912777e76"
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
    "revision": "cc912554fcf73249da9da61a291b9d72"
  },
  {
    "url": "logo.jpg",
    "revision": "3befeabc1b55916802dbc080530c2179"
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
