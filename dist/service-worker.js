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
    "revision": "0467e4e35d4b27ba5f533958fd7b726e"
  },
  {
    "url": "about/index.html",
    "revision": "5cfe4660486f86c1a90c39c8323b9253"
  },
  {
    "url": "archives/index.html",
    "revision": "678e71f64854b5ff6bbd3b82c026e19b"
  },
  {
    "url": "assets/css/0.styles.6c5df676.css",
    "revision": "0176d46d9c2fea2909cd595e6e5af2c8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.404a1ed3.js",
    "revision": "506a4685aacaf3c93288dbafa637499c"
  },
  {
    "url": "assets/js/11.d96f7dd5.js",
    "revision": "0f6fc7d2881c5c33d4c82e7a04407d33"
  },
  {
    "url": "assets/js/12.c4cb1460.js",
    "revision": "63dd670e49ea775952b4d574de7846b2"
  },
  {
    "url": "assets/js/13.298dcea8.js",
    "revision": "5e75fc52e94666a2878fb216d5a59094"
  },
  {
    "url": "assets/js/14.76e374e9.js",
    "revision": "bcfddcf8c78c3a93972e20fa6f704e15"
  },
  {
    "url": "assets/js/15.cabafc9e.js",
    "revision": "fb423f4542d2cbd6b1fcda7097d0006a"
  },
  {
    "url": "assets/js/16.935fae54.js",
    "revision": "1f50ea3c0c3c53e42c5c5fb07db0e428"
  },
  {
    "url": "assets/js/17.bb6df115.js",
    "revision": "9697cda7c727df4488cec75fa6caa236"
  },
  {
    "url": "assets/js/18.3f30a73a.js",
    "revision": "9be149d40c5a05c1c3e7ca4aa624fce6"
  },
  {
    "url": "assets/js/19.3d3eb31b.js",
    "revision": "252eae886964e4904bf36394c1b3cca2"
  },
  {
    "url": "assets/js/2.f307f678.js",
    "revision": "41bd974775db217d97d4d867ac8c5dbf"
  },
  {
    "url": "assets/js/20.6842d989.js",
    "revision": "3630fdc215757bfd50a5dd4bfc991408"
  },
  {
    "url": "assets/js/21.7d233f43.js",
    "revision": "34ac345a6436b63219e614e3cd6ae7cc"
  },
  {
    "url": "assets/js/22.3937a0d4.js",
    "revision": "097386d3c03601c4917422aae5df9912"
  },
  {
    "url": "assets/js/23.3db3547e.js",
    "revision": "d640738bf558365b924c27a89671810c"
  },
  {
    "url": "assets/js/24.780e473d.js",
    "revision": "49daabe4c12c711dd2ae4975c4f01eea"
  },
  {
    "url": "assets/js/25.b1c68c3b.js",
    "revision": "02f68ad8981a530e11f85ec59bfc0abf"
  },
  {
    "url": "assets/js/26.040427de.js",
    "revision": "62a24cd455abef6afac368fe41a8ed5e"
  },
  {
    "url": "assets/js/27.c2fc1028.js",
    "revision": "f69965e61e029c210cbfaa56b81a37bf"
  },
  {
    "url": "assets/js/28.b2dc56d1.js",
    "revision": "48bafb8d5721058394815a22942dbdf3"
  },
  {
    "url": "assets/js/29.9ba5aa00.js",
    "revision": "997bd6debc81f7eaefed5adad1336d03"
  },
  {
    "url": "assets/js/3.d7fabb17.js",
    "revision": "b58d9b4cf08fa7f8424b3707c64546a1"
  },
  {
    "url": "assets/js/30.8d814049.js",
    "revision": "71db03a4a5652ec2fef412712645027b"
  },
  {
    "url": "assets/js/31.9f4fe891.js",
    "revision": "179e11f0d97a38a541d23bc97af1f166"
  },
  {
    "url": "assets/js/32.b5992aea.js",
    "revision": "b847ee79e7c1e2b8253a7e610a5f9d23"
  },
  {
    "url": "assets/js/33.888ada65.js",
    "revision": "1ce63d4115cf054ec37bb4c7d23589c1"
  },
  {
    "url": "assets/js/34.92c0c121.js",
    "revision": "49910f3d1c374e71199d6cc4fe7d0da7"
  },
  {
    "url": "assets/js/35.b28520ca.js",
    "revision": "e83c2962e9f766323a32ff1de213e974"
  },
  {
    "url": "assets/js/36.b09dd09e.js",
    "revision": "58200197b665fdbb07fd4f4f790ec0af"
  },
  {
    "url": "assets/js/37.91962578.js",
    "revision": "43b5c1a366957c51ab2952a3883548af"
  },
  {
    "url": "assets/js/38.944ce5f2.js",
    "revision": "619cecf7a20ecbdc944283111d286f23"
  },
  {
    "url": "assets/js/39.29f98881.js",
    "revision": "f62023e49e63ffe31b8b28a34f6df3cb"
  },
  {
    "url": "assets/js/4.2b80a5e1.js",
    "revision": "7388d1823ae7ecdbaca37ce19940f8ed"
  },
  {
    "url": "assets/js/40.313a2fb9.js",
    "revision": "4be39b647b2427dc23266c1cd5a5848a"
  },
  {
    "url": "assets/js/41.20262907.js",
    "revision": "b0c949944dd0f85029b885e1b8f4f0d5"
  },
  {
    "url": "assets/js/42.2d40c066.js",
    "revision": "12f1e84222ebda19bfdb6449f6f53ba2"
  },
  {
    "url": "assets/js/43.4e623ee0.js",
    "revision": "890737f5752c852439dcb93529108f35"
  },
  {
    "url": "assets/js/44.d51425ac.js",
    "revision": "1546f427db2be42b1a269fddd65c96fa"
  },
  {
    "url": "assets/js/45.d8b4fa98.js",
    "revision": "0ba5e479419b939ab2cbfd367edae8b4"
  },
  {
    "url": "assets/js/46.b92428bc.js",
    "revision": "d85b24e45f53e7424d31d4cc573e5f5d"
  },
  {
    "url": "assets/js/47.37328091.js",
    "revision": "0c32136e5780e79270d16afa3a05362b"
  },
  {
    "url": "assets/js/48.37c5318b.js",
    "revision": "bae3edc3a7e3c9eb4080f05da27440c8"
  },
  {
    "url": "assets/js/49.8d66a27d.js",
    "revision": "19ddffe41353bd0ade32d8c37fd91606"
  },
  {
    "url": "assets/js/5.ae847d8a.js",
    "revision": "821c4b643b8acfca94334e2baefd75e5"
  },
  {
    "url": "assets/js/50.87e85266.js",
    "revision": "468119451455800c0731a8bf09a62c12"
  },
  {
    "url": "assets/js/51.39657d4b.js",
    "revision": "ed106181c0179f6e5a02c0d5a201ea5a"
  },
  {
    "url": "assets/js/52.cbfd4d25.js",
    "revision": "985d9d6d6bceceb3cbe02d34dae0fffd"
  },
  {
    "url": "assets/js/6.db366183.js",
    "revision": "d839eeacb8454e889f26375cad04fc7f"
  },
  {
    "url": "assets/js/7.ca596fdb.js",
    "revision": "d2137a012284ebd83d82e86cb9ea3da2"
  },
  {
    "url": "assets/js/8.96a57609.js",
    "revision": "abe1f695cf3ec33f92e33925b9e3fd4e"
  },
  {
    "url": "assets/js/9.50ff4134.js",
    "revision": "fbdfb64d04157bd3f0745f7d43c93f97"
  },
  {
    "url": "assets/js/app.f4caab22.js",
    "revision": "1f17473db370b262bd87f9ecd6f9b029"
  },
  {
    "url": "author.jpg",
    "revision": "df2fc7455cc5663043df50d78c9329ef"
  },
  {
    "url": "blog/_posts/CSS实现元素的居中显示.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/DOM的映射机制.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/ESLint-（一）简介与安装.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/ESLint-（二）配置文件.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/githubpages-hexo-搭建个人博客.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/gulp-自动化构建工具.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/hello-world.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/hexo-next主题高级配置.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/Hexo-yilia主题-githubpages博客添加友言评论功能.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/html语义化.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/JavaScript-面向对象编程.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/JS变量提升.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/JS变量的创建机制.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/JS堆栈内存.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/JS类型转换总结.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/Markdown添加Latex数学公式.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/markdown语法.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/sass的使用.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/sublimetext-实用插件介绍.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/Transform-引起的-z-index-失效‘.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/像素与viewport概念.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/关于Flex布局.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/关于inline-block问题.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/初学者资源推荐.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/前端学习历程.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/去除inline-block元素间间距的N种方法.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/浅谈响应式.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/浏览器设置不保存缓存.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/深入理解层叠上下文和层叠顺序.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/给不了解前端的同学讲前端.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/编码规范-（一）HTML.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/编码规范（二）CSS.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/记第一次博客改版更新.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/_posts/说说CSS学习中的瓶颈.html",
    "revision": "6c4da786e7065feab0e3885b889167a9"
  },
  {
    "url": "blog/index.html",
    "revision": "376a21016018da31ad0d6058a653a0f0"
  },
  {
    "url": "categories/index.html",
    "revision": "b511629eb9ca879dfdbe377deb9e54a0"
  },
  {
    "url": "index.html",
    "revision": "f55184c702f0b948cc2545648861ea05"
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
