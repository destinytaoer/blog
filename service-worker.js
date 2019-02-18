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
    "revision": "055c5d82979b3e1cf1e0d9ec4e6a6b2f"
  },
  {
    "url": "about/index.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "archives/index.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "assets/css/0.styles.f39e54be.css",
    "revision": "b7006a97b2738b6dbfb731e53525b1b3"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/10.3ffc1f17.js",
    "revision": "c8a66e2d2c4c84f112814d1a2de1adc2"
  },
  {
    "url": "assets/js/11.1fd2cea5.js",
    "revision": "2a2b2a8fe67ffadab80a324c85824af1"
  },
  {
    "url": "assets/js/12.7dd3910f.js",
    "revision": "7fec0c5ca08c030a97e02166edd3bed3"
  },
  {
    "url": "assets/js/13.9dfbab85.js",
    "revision": "3254e7f114819d880ce40e4350b588a2"
  },
  {
    "url": "assets/js/14.7fa2eb90.js",
    "revision": "da64dfad2607c01a8c14dc0a96bc8692"
  },
  {
    "url": "assets/js/15.4296bb6b.js",
    "revision": "a894fd39bda7c4218c922d3c572e03b7"
  },
  {
    "url": "assets/js/16.3e6feb3f.js",
    "revision": "c60e8ddb73783115ce3223580cdbe9a0"
  },
  {
    "url": "assets/js/17.0e7b68a4.js",
    "revision": "3c9c1523de00cf195552322ed3267daf"
  },
  {
    "url": "assets/js/18.5e486a05.js",
    "revision": "041bff232420bff86ca9a4f68fb7097a"
  },
  {
    "url": "assets/js/19.24ab7604.js",
    "revision": "cc668b15deb76e4a324e9226ab83a698"
  },
  {
    "url": "assets/js/2.1b003e23.js",
    "revision": "987cbc57c36e1f654f9c8680223900dd"
  },
  {
    "url": "assets/js/20.9200f954.js",
    "revision": "78f50ebbf812f457e46f9fedcdba5d1f"
  },
  {
    "url": "assets/js/21.71a734c3.js",
    "revision": "0061fd629d673d3cf62b04ba9fc1a32b"
  },
  {
    "url": "assets/js/22.e2bbd59c.js",
    "revision": "e294b0174eac2831d518667035f121de"
  },
  {
    "url": "assets/js/23.e3bfd8b1.js",
    "revision": "c4816b75ec98d0c2f57f28f6835bbdb2"
  },
  {
    "url": "assets/js/24.1e925f4e.js",
    "revision": "a269e0d4736aa04690318857ddcf921f"
  },
  {
    "url": "assets/js/25.da71b70d.js",
    "revision": "59a565e15a007929842dd3ae53ba5e0e"
  },
  {
    "url": "assets/js/26.9b14a463.js",
    "revision": "d513f5e159dd72af9e7021354f0769f2"
  },
  {
    "url": "assets/js/27.290e1908.js",
    "revision": "2e9bcbe5e26058bc12a2207059645216"
  },
  {
    "url": "assets/js/28.c4049fc5.js",
    "revision": "be4ec6ce11945cf05d8a7543417a5dbc"
  },
  {
    "url": "assets/js/29.db3e6743.js",
    "revision": "31b31900b2c6335df70b27999cac0f84"
  },
  {
    "url": "assets/js/3.30cfc8e7.js",
    "revision": "995d58c3f1e1804fdb3580814a73c6aa"
  },
  {
    "url": "assets/js/30.fa4f7978.js",
    "revision": "a67116e82512d216c4f2fa606cf615a5"
  },
  {
    "url": "assets/js/31.307fa482.js",
    "revision": "de6558df131f96f1cbbc732dc4b5a47a"
  },
  {
    "url": "assets/js/32.107ec8c7.js",
    "revision": "e5b2e4bb6c808b2ff606c0d95c4c426b"
  },
  {
    "url": "assets/js/33.e25e4013.js",
    "revision": "4326691e895730fcd443545627068f78"
  },
  {
    "url": "assets/js/34.bbb65367.js",
    "revision": "52f2d6baae8298c9d90a495c079f9456"
  },
  {
    "url": "assets/js/35.69266558.js",
    "revision": "5bfde90712d57b380be4980df7dac186"
  },
  {
    "url": "assets/js/36.84e9f227.js",
    "revision": "aa76e069790d801466f6c19dddad5e1a"
  },
  {
    "url": "assets/js/37.ea6d89f2.js",
    "revision": "a790be090d01b80391c37ec9aec0ae75"
  },
  {
    "url": "assets/js/38.99c935e6.js",
    "revision": "57c428356a2540c8d7ab20c925e3400e"
  },
  {
    "url": "assets/js/39.70483290.js",
    "revision": "eefccb63c6bb55ff121eb847449acb5a"
  },
  {
    "url": "assets/js/4.c77b361f.js",
    "revision": "2657b3307c8a895f405c6007f3546918"
  },
  {
    "url": "assets/js/40.2614156d.js",
    "revision": "ca77f35b51031798cbb1d28fe9d4f99a"
  },
  {
    "url": "assets/js/41.28eeb8cc.js",
    "revision": "6cf05b41b2c0da5d0955bbdedfeb27dc"
  },
  {
    "url": "assets/js/42.7d02fa6e.js",
    "revision": "8610e74baa7ffed7e0bc7c7c5260b72e"
  },
  {
    "url": "assets/js/43.72e50f1f.js",
    "revision": "4074f07f514e6592ef44f0cd0e962e63"
  },
  {
    "url": "assets/js/44.dfc98972.js",
    "revision": "afb7c082a6b6db4c64600ba3cd76bd59"
  },
  {
    "url": "assets/js/45.b7e741f3.js",
    "revision": "93fc6bf1d316ba9ca4961321e4ac2899"
  },
  {
    "url": "assets/js/46.871649a9.js",
    "revision": "64c2b658c82d228d911e11e4f73cc437"
  },
  {
    "url": "assets/js/47.21a92dc4.js",
    "revision": "d892de4cf5bc14385db5208cc53e03e5"
  },
  {
    "url": "assets/js/48.c30eab50.js",
    "revision": "eaebb0e98063088af7bcd02883351f2b"
  },
  {
    "url": "assets/js/49.37954f9e.js",
    "revision": "7740416ab4aedd1af09f20bac944fe61"
  },
  {
    "url": "assets/js/5.dc988766.js",
    "revision": "3f91f537080af7429e8a8bbcf979ee19"
  },
  {
    "url": "assets/js/50.73afa37f.js",
    "revision": "6739acbd5285e8d05f048e20f518b4b2"
  },
  {
    "url": "assets/js/51.7e5ebf2d.js",
    "revision": "b89f765a675b5f52d87c576479d77dd3"
  },
  {
    "url": "assets/js/6.161ce3fa.js",
    "revision": "e526be7bd8785bb26012ab8147aa3203"
  },
  {
    "url": "assets/js/7.db54423b.js",
    "revision": "197bade45dee03f7014b9e01586a54c1"
  },
  {
    "url": "assets/js/8.5cd5e8ff.js",
    "revision": "27cac5aa18a2450c227bd66128142789"
  },
  {
    "url": "assets/js/9.c6001b16.js",
    "revision": "40b5fcc960d6ef8d2e3b2f8c693224e0"
  },
  {
    "url": "assets/js/app.6c7b006e.js",
    "revision": "837c49c77aed7fbed6f306480aff14ab"
  },
  {
    "url": "author.jpg",
    "revision": "df2fc7455cc5663043df50d78c9329ef"
  },
  {
    "url": "blog/CSS实现元素的居中显示.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/DOM的映射机制.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/ESLint-（一）简介与安装.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/ESLint-（二）配置文件.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/githubpages-hexo-搭建个人博客.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/gulp-自动化构建工具.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/hello-world.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/hexo-next主题高级配置.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/Hexo-yilia主题-githubpages博客添加友言评论功能.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/html语义化.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/index.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/JavaScript-面向对象编程.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/JS变量提升.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/JS变量的创建机制.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/JS堆栈内存.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/JS类型转换总结.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/Markdown添加Latex数学公式.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/markdown语法.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/sass的使用.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/sublimetext-实用插件介绍.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/Transform-引起的-z-index-失效‘.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/像素与viewport概念.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/关于Flex布局.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/关于inline-block问题.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/初学者资源推荐.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/前端学习历程.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/去除inline-block元素间间距的N种方法.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/浅谈响应式.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/浏览器设置不保存缓存.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/深入理解层叠上下文和层叠顺序.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/给不了解前端的同学讲前端.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/编码规范-（一）HTML.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/编码规范（二）CSS.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/记第一次博客改版更新.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "blog/说说CSS学习中的瓶颈.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "categories/index.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
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
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
  },
  {
    "url": "logo.jpg",
    "revision": "3befeabc1b55916802dbc080530c2179"
  },
  {
    "url": "tags/index.html",
    "revision": "b3795f6553fd8c8d2f1825bbb24d59af"
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
