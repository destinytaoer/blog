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
    "revision": "657fe8cbf0531ac113b8997ab82a8acd"
  },
  {
    "url": "about/index.html",
    "revision": "d99150793b4a7b14afd334e085f20c49"
  },
  {
    "url": "archives/index.html",
    "revision": "dfe74a428dedf40c8b6c8a9e2a6a2cdc"
  },
  {
    "url": "assets/css/0.styles.ecd3e0a8.css",
    "revision": "9da6c2a5648e11c8d2f2157c7b83910e"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/10.cc71bea2.js",
    "revision": "86ed94943530f04bf9dba6c6f12da839"
  },
  {
    "url": "assets/js/11.6ed03b38.js",
    "revision": "0e5f0feb76d811c5390563bbeb4cb42d"
  },
  {
    "url": "assets/js/12.21ee65c5.js",
    "revision": "7a838bb2af49982b1222f8b5f0f83e75"
  },
  {
    "url": "assets/js/13.7be3341c.js",
    "revision": "c8ac1c2dfde091fabafe966669218b9b"
  },
  {
    "url": "assets/js/14.0478aaaa.js",
    "revision": "9afed7556de850e01aab9db4fb193a01"
  },
  {
    "url": "assets/js/15.6d0cdf82.js",
    "revision": "4be2b414d19807ae69f6d3f8f3037ee4"
  },
  {
    "url": "assets/js/16.e020dd4d.js",
    "revision": "a7a8f59c36efae57d761c4f7cc8d3d7b"
  },
  {
    "url": "assets/js/17.cf38bb5c.js",
    "revision": "e084cac95fef2f048f7468afe480090e"
  },
  {
    "url": "assets/js/18.7ed89034.js",
    "revision": "8e1ca72ae9c6415852279d4c1f225782"
  },
  {
    "url": "assets/js/19.9ec943d3.js",
    "revision": "d0e33442dc9b86d56824ca907cad2f95"
  },
  {
    "url": "assets/js/2.8bf09d72.js",
    "revision": "aaa7b349d44db8b3fa2d8fe3ed77a062"
  },
  {
    "url": "assets/js/20.71d7f4ad.js",
    "revision": "072e0fb5e206c134d59b763db0ee54ec"
  },
  {
    "url": "assets/js/21.6bfea8aa.js",
    "revision": "ef9c897f46f89a4c81f42518314890c5"
  },
  {
    "url": "assets/js/22.c844c6ae.js",
    "revision": "feeae77d317f35200ac5d9b1566e4525"
  },
  {
    "url": "assets/js/23.2b7d40b9.js",
    "revision": "6350762f9c380afd7294ee8cd765eca5"
  },
  {
    "url": "assets/js/24.a2a295a0.js",
    "revision": "6d01ce7a8edf76d23ed50a8aac25c956"
  },
  {
    "url": "assets/js/25.5acae1cf.js",
    "revision": "64324dc55c0e508d5e123666ff205ec4"
  },
  {
    "url": "assets/js/26.2bc96b6b.js",
    "revision": "465f0d8db43c18fa2794008fb905a336"
  },
  {
    "url": "assets/js/27.b88a9fae.js",
    "revision": "84935b4ac31e3a48c1f04dbcfe657eda"
  },
  {
    "url": "assets/js/28.77bb19bf.js",
    "revision": "c4c07a46820dfdca840030fc0e5f2ac2"
  },
  {
    "url": "assets/js/29.d5691bcf.js",
    "revision": "4de58f6cf2df9a29d0e453d8b610c069"
  },
  {
    "url": "assets/js/3.2c273a05.js",
    "revision": "8fd0f959d7e8e7720f8fd56f9416d0d1"
  },
  {
    "url": "assets/js/30.6ef2740d.js",
    "revision": "a1c858517d05e29db459b4edec287bb3"
  },
  {
    "url": "assets/js/31.2278e614.js",
    "revision": "a06b87b79b64f99e6e35ed39eb03d05b"
  },
  {
    "url": "assets/js/32.cd96b3d4.js",
    "revision": "f83db193396a832b75e8da1ecd451bb1"
  },
  {
    "url": "assets/js/33.dbd14c59.js",
    "revision": "39c64dbbd4101ed814037ed83a4006b2"
  },
  {
    "url": "assets/js/34.8126e0b4.js",
    "revision": "473deee0a32542a92d5079727ad7a920"
  },
  {
    "url": "assets/js/35.bdab9d33.js",
    "revision": "04cd4b340eafc65f70239026b3e385c7"
  },
  {
    "url": "assets/js/36.39bd4266.js",
    "revision": "3f309b3b6603829e44ec3b20af5d613e"
  },
  {
    "url": "assets/js/37.7c20ac6a.js",
    "revision": "d81b72f0280c8c7dce56485cc63086e9"
  },
  {
    "url": "assets/js/38.b1c1b12f.js",
    "revision": "c8afef1cb053e3ea0d7439b4fc20ed35"
  },
  {
    "url": "assets/js/39.42bd6177.js",
    "revision": "f3807dac030d03bdf734d39898aceab5"
  },
  {
    "url": "assets/js/4.d24b966f.js",
    "revision": "9c7fb0f4eecfeda76dd3e2ac2c2eb8c0"
  },
  {
    "url": "assets/js/40.e40ab7e2.js",
    "revision": "c48b78ac6adf25810ae1835c9d1bee61"
  },
  {
    "url": "assets/js/41.786e1487.js",
    "revision": "35c3dc61abcaa3dd4b0a7f1455d533ad"
  },
  {
    "url": "assets/js/42.8d8142e9.js",
    "revision": "ec42d838bfcb72e833dc34da856a033e"
  },
  {
    "url": "assets/js/43.2ea7aebe.js",
    "revision": "2b894dea4ba6fd292237f48168466fd8"
  },
  {
    "url": "assets/js/44.bbebf6a0.js",
    "revision": "326b515c2e595d8c6d058c51f3ad76f4"
  },
  {
    "url": "assets/js/45.d164cf42.js",
    "revision": "eb4b51727bdcc88a7bc8bcc206b9003d"
  },
  {
    "url": "assets/js/46.013f561d.js",
    "revision": "cbdfcf3f6aee4603642571aba6f9829b"
  },
  {
    "url": "assets/js/47.79f11673.js",
    "revision": "7640d840ea2a87e4d4c386f80d94e45f"
  },
  {
    "url": "assets/js/48.773f4149.js",
    "revision": "a01be9f701b926ad269cdcceb65724d4"
  },
  {
    "url": "assets/js/49.99af378d.js",
    "revision": "0c4e0618636292b685edbd219374b2cc"
  },
  {
    "url": "assets/js/5.7196aea4.js",
    "revision": "dde44bbcae97c1cc70a3707c915392e4"
  },
  {
    "url": "assets/js/50.8601c282.js",
    "revision": "ab907149fddc42839961f66324f6193c"
  },
  {
    "url": "assets/js/51.fd3411fa.js",
    "revision": "0fe8d08604ae62c9ea274aa863b6c9c1"
  },
  {
    "url": "assets/js/52.b1865c7e.js",
    "revision": "6c85d4933df67e9c15951f5ffedee9b1"
  },
  {
    "url": "assets/js/53.74863311.js",
    "revision": "43764d0f79cc419f1611e523818e3f1b"
  },
  {
    "url": "assets/js/6.9820b550.js",
    "revision": "5645e3d9b25a306c1823d7e70f345923"
  },
  {
    "url": "assets/js/7.7cef7c03.js",
    "revision": "865ca416c5df5f292138411490ed4c61"
  },
  {
    "url": "assets/js/8.b8578072.js",
    "revision": "3ee667e65994f7a7e49f3f27a164d2eb"
  },
  {
    "url": "assets/js/9.2fb0e83b.js",
    "revision": "3e77f3818169d7fde0d3db8672d95feb"
  },
  {
    "url": "assets/js/app.df6cdd6e.js",
    "revision": "3999efc79a266127348851c7052a0d8e"
  },
  {
    "url": "author.jpg",
    "revision": "df2fc7455cc5663043df50d78c9329ef"
  },
  {
    "url": "blog/_posts/CSS实现元素的居中显示.html",
    "revision": "e8288c4d6ee9384c0a8a112a53c3fcd4"
  },
  {
    "url": "blog/_posts/DOM的映射机制.html",
    "revision": "5b3934f116138199eb6f1a8370f39839"
  },
  {
    "url": "blog/_posts/ESLint-（一）简介与安装.html",
    "revision": "913690e9d33976b7bc431069aa860a2d"
  },
  {
    "url": "blog/_posts/ESLint-（二）配置文件.html",
    "revision": "2f24b7d647e6536be5618e13c9725e5f"
  },
  {
    "url": "blog/_posts/githubpages-hexo-搭建个人博客.html",
    "revision": "6fa0e2dd3ecdb92fb78e0b06a5aec72f"
  },
  {
    "url": "blog/_posts/gulp-自动化构建工具.html",
    "revision": "d3d13015a0a05519df41d22a6acffc1c"
  },
  {
    "url": "blog/_posts/hello-world.html",
    "revision": "c7f2337619e41b1233b3a89a2032980a"
  },
  {
    "url": "blog/_posts/hexo-next主题高级配置.html",
    "revision": "65f975ee703e2cd5ac0841c872d5eda3"
  },
  {
    "url": "blog/_posts/Hexo-yilia主题-githubpages博客添加友言评论功能.html",
    "revision": "659c961364ec5c7eda328d771852991a"
  },
  {
    "url": "blog/_posts/html语义化.html",
    "revision": "d9b6219978d7aac0ee4489d206a5abcc"
  },
  {
    "url": "blog/_posts/JavaScript-面向对象编程.html",
    "revision": "65bc12d078ad0b9b665b9bcff92478a9"
  },
  {
    "url": "blog/_posts/JS变量提升.html",
    "revision": "34e40fc6bcd969a6a0258acc369dcb06"
  },
  {
    "url": "blog/_posts/JS变量的创建机制.html",
    "revision": "0064acd2743e9a995c9795efccd359e5"
  },
  {
    "url": "blog/_posts/JS堆栈内存.html",
    "revision": "7bfe7c89c00ecfef5c61ecaa2f04c10a"
  },
  {
    "url": "blog/_posts/JS类型转换总结.html",
    "revision": "08994f795ef9cf09ac815ed416dcb63d"
  },
  {
    "url": "blog/_posts/Markdown添加Latex数学公式.html",
    "revision": "aa0521299bb1612e3dd9b1cbff320296"
  },
  {
    "url": "blog/_posts/markdown语法.html",
    "revision": "88a06a04050fe2a948d4b70f5a626093"
  },
  {
    "url": "blog/_posts/sass的使用.html",
    "revision": "5cd492e5cb5cc04a67fd7d05afd7a217"
  },
  {
    "url": "blog/_posts/sublimetext-实用插件介绍.html",
    "revision": "3bded32f83db12a4003f4a87f1585383"
  },
  {
    "url": "blog/_posts/Transform-引起的-z-index-失效‘.html",
    "revision": "823d1bfbbaa92ca357b98bb44efa3229"
  },
  {
    "url": "blog/_posts/像素与viewport概念.html",
    "revision": "23f4b9c76b871032b072d9579bb3764d"
  },
  {
    "url": "blog/_posts/关于Flex布局.html",
    "revision": "ef5f0f851c0078fe9d97e37d466b69b9"
  },
  {
    "url": "blog/_posts/关于inline-block问题.html",
    "revision": "9c0e8a156cca5f1e906e6238c146e6d4"
  },
  {
    "url": "blog/_posts/初学者资源推荐.html",
    "revision": "803ff1009af21d185687b3732492d444"
  },
  {
    "url": "blog/_posts/前端学习历程.html",
    "revision": "e62fd8f131a35abd8bdb5f109857e5bd"
  },
  {
    "url": "blog/_posts/去除inline-block元素间间距的N种方法.html",
    "revision": "25c4b05c6f3003d66951677440a1885a"
  },
  {
    "url": "blog/_posts/浅谈响应式.html",
    "revision": "c83fbb43a1a0f1c0fa98b1ef922fa54a"
  },
  {
    "url": "blog/_posts/浏览器设置不保存缓存.html",
    "revision": "015760195a2200fdd1b9ada0f774f58b"
  },
  {
    "url": "blog/_posts/深入理解层叠上下文和层叠顺序.html",
    "revision": "5d38905b3c3e205d03e55688e6867b6d"
  },
  {
    "url": "blog/_posts/给不了解前端的同学讲前端.html",
    "revision": "91597cdc3b4cf104ac5d9ce7af7cb9b9"
  },
  {
    "url": "blog/_posts/编码规范-（一）HTML.html",
    "revision": "c1caf3cc9d64186482b35c34b810e33b"
  },
  {
    "url": "blog/_posts/编码规范（二）CSS.html",
    "revision": "8fe6b47991cb32624e9b60226b4762ef"
  },
  {
    "url": "blog/_posts/记第一次博客改版更新.html",
    "revision": "49f0a2b14df7169d0acbb40efe23b376"
  },
  {
    "url": "blog/_posts/说说CSS学习中的瓶颈.html",
    "revision": "75b1b1a6f9da2e836212ddf2f96a86a2"
  },
  {
    "url": "blog/index.html",
    "revision": "73e7d85db5b8868c1d540d9cc24576f8"
  },
  {
    "url": "categories/index.html",
    "revision": "a1d9f8de52f8014f78d7c4ac5eecdd88"
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
    "revision": "3620020817bcdab578893c813e09fbbe"
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
