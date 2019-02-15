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
    "revision": "9214f4a9b1930924d7bf97af990ca67f"
  },
  {
    "url": "about/index.html",
    "revision": "579874c3ebf08190ea2d980069d81c24"
  },
  {
    "url": "archives/index.html",
    "revision": "40fedbf9c8869be0a51a3f1757696e16"
  },
  {
    "url": "assets/css/0.styles.5861ff9f.css",
    "revision": "13de43d691b691ef9e247525e0371594"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8b290093.js",
    "revision": "506a4685aacaf3c93288dbafa637499c"
  },
  {
    "url": "assets/js/11.16e92ceb.js",
    "revision": "0f6fc7d2881c5c33d4c82e7a04407d33"
  },
  {
    "url": "assets/js/12.6a11b112.js",
    "revision": "63dd670e49ea775952b4d574de7846b2"
  },
  {
    "url": "assets/js/13.23ec8aa4.js",
    "revision": "5e75fc52e94666a2878fb216d5a59094"
  },
  {
    "url": "assets/js/14.ff63ba86.js",
    "revision": "bcfddcf8c78c3a93972e20fa6f704e15"
  },
  {
    "url": "assets/js/15.192771c0.js",
    "revision": "fb423f4542d2cbd6b1fcda7097d0006a"
  },
  {
    "url": "assets/js/16.3ac18160.js",
    "revision": "1f50ea3c0c3c53e42c5c5fb07db0e428"
  },
  {
    "url": "assets/js/17.9dc8b290.js",
    "revision": "9697cda7c727df4488cec75fa6caa236"
  },
  {
    "url": "assets/js/18.ad9a37a5.js",
    "revision": "9be149d40c5a05c1c3e7ca4aa624fce6"
  },
  {
    "url": "assets/js/19.19ea5c05.js",
    "revision": "252eae886964e4904bf36394c1b3cca2"
  },
  {
    "url": "assets/js/2.e37246a3.js",
    "revision": "0383189c23cbb58fdd44017a17314274"
  },
  {
    "url": "assets/js/20.4842ab10.js",
    "revision": "3630fdc215757bfd50a5dd4bfc991408"
  },
  {
    "url": "assets/js/21.88726e72.js",
    "revision": "34ac345a6436b63219e614e3cd6ae7cc"
  },
  {
    "url": "assets/js/22.478e498b.js",
    "revision": "097386d3c03601c4917422aae5df9912"
  },
  {
    "url": "assets/js/23.c5d056d5.js",
    "revision": "d640738bf558365b924c27a89671810c"
  },
  {
    "url": "assets/js/24.5fc24a3b.js",
    "revision": "49daabe4c12c711dd2ae4975c4f01eea"
  },
  {
    "url": "assets/js/25.54845fa0.js",
    "revision": "02f68ad8981a530e11f85ec59bfc0abf"
  },
  {
    "url": "assets/js/26.a05ce332.js",
    "revision": "62a24cd455abef6afac368fe41a8ed5e"
  },
  {
    "url": "assets/js/27.f7b9b826.js",
    "revision": "f69965e61e029c210cbfaa56b81a37bf"
  },
  {
    "url": "assets/js/28.cc412225.js",
    "revision": "48bafb8d5721058394815a22942dbdf3"
  },
  {
    "url": "assets/js/29.4766d636.js",
    "revision": "997bd6debc81f7eaefed5adad1336d03"
  },
  {
    "url": "assets/js/3.b31fd940.js",
    "revision": "229dd2c9e78f00131ba8432bec2bc0d0"
  },
  {
    "url": "assets/js/30.64eb613e.js",
    "revision": "71db03a4a5652ec2fef412712645027b"
  },
  {
    "url": "assets/js/31.c42550d0.js",
    "revision": "179e11f0d97a38a541d23bc97af1f166"
  },
  {
    "url": "assets/js/32.ca383da0.js",
    "revision": "b847ee79e7c1e2b8253a7e610a5f9d23"
  },
  {
    "url": "assets/js/33.28811e02.js",
    "revision": "1ce63d4115cf054ec37bb4c7d23589c1"
  },
  {
    "url": "assets/js/34.899616bf.js",
    "revision": "49910f3d1c374e71199d6cc4fe7d0da7"
  },
  {
    "url": "assets/js/35.87a36c50.js",
    "revision": "e83c2962e9f766323a32ff1de213e974"
  },
  {
    "url": "assets/js/36.18c57655.js",
    "revision": "58200197b665fdbb07fd4f4f790ec0af"
  },
  {
    "url": "assets/js/37.0710f16c.js",
    "revision": "43b5c1a366957c51ab2952a3883548af"
  },
  {
    "url": "assets/js/38.13b52301.js",
    "revision": "619cecf7a20ecbdc944283111d286f23"
  },
  {
    "url": "assets/js/39.ddcf309d.js",
    "revision": "f62023e49e63ffe31b8b28a34f6df3cb"
  },
  {
    "url": "assets/js/4.2a0f1346.js",
    "revision": "52103c4dd0d4fdbae3bc5b31c01f277e"
  },
  {
    "url": "assets/js/40.54f9694c.js",
    "revision": "4be39b647b2427dc23266c1cd5a5848a"
  },
  {
    "url": "assets/js/41.f3f635b3.js",
    "revision": "b0c949944dd0f85029b885e1b8f4f0d5"
  },
  {
    "url": "assets/js/42.caa9ecfc.js",
    "revision": "12f1e84222ebda19bfdb6449f6f53ba2"
  },
  {
    "url": "assets/js/43.29599f5d.js",
    "revision": "890737f5752c852439dcb93529108f35"
  },
  {
    "url": "assets/js/44.21f94a9d.js",
    "revision": "1546f427db2be42b1a269fddd65c96fa"
  },
  {
    "url": "assets/js/45.7ed66e28.js",
    "revision": "0ba5e479419b939ab2cbfd367edae8b4"
  },
  {
    "url": "assets/js/46.eb56f051.js",
    "revision": "d85b24e45f53e7424d31d4cc573e5f5d"
  },
  {
    "url": "assets/js/47.8c75f1e7.js",
    "revision": "0c32136e5780e79270d16afa3a05362b"
  },
  {
    "url": "assets/js/48.3d15a015.js",
    "revision": "bae3edc3a7e3c9eb4080f05da27440c8"
  },
  {
    "url": "assets/js/49.5bf50294.js",
    "revision": "19ddffe41353bd0ade32d8c37fd91606"
  },
  {
    "url": "assets/js/5.bc6a2a19.js",
    "revision": "64ce4ade43f5a768db36b92ac4768587"
  },
  {
    "url": "assets/js/50.6804470f.js",
    "revision": "468119451455800c0731a8bf09a62c12"
  },
  {
    "url": "assets/js/51.3b2c2dc6.js",
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
    "url": "assets/js/7.524645ef.js",
    "revision": "d2137a012284ebd83d82e86cb9ea3da2"
  },
  {
    "url": "assets/js/8.a6ae0652.js",
    "revision": "abe1f695cf3ec33f92e33925b9e3fd4e"
  },
  {
    "url": "assets/js/9.31e8c3d1.js",
    "revision": "fbdfb64d04157bd3f0745f7d43c93f97"
  },
  {
    "url": "assets/js/app.cfe56186.js",
    "revision": "c0c29d10661cb6b459de55b06a08d0c3"
  },
  {
    "url": "author.jpg",
    "revision": "df2fc7455cc5663043df50d78c9329ef"
  },
  {
    "url": "blog/_posts/CSS实现元素的居中显示.html",
    "revision": "270b5ed098dfd2f5f99b7aea1463399b"
  },
  {
    "url": "blog/_posts/DOM的映射机制.html",
    "revision": "05156eb8eeb50d2ade1142b2c7f67847"
  },
  {
    "url": "blog/_posts/ESLint-（一）简介与安装.html",
    "revision": "9568182778d05a5e027c651098e728fd"
  },
  {
    "url": "blog/_posts/ESLint-（二）配置文件.html",
    "revision": "a4c05266d6ab6df06bc731215cb2a0f5"
  },
  {
    "url": "blog/_posts/githubpages-hexo-搭建个人博客.html",
    "revision": "0e7e999acf3f0331ae719f4b1dbc7689"
  },
  {
    "url": "blog/_posts/gulp-自动化构建工具.html",
    "revision": "dd9ebb19370bb2e3d44ec74733d22c8e"
  },
  {
    "url": "blog/_posts/hello-world.html",
    "revision": "e37b93a4a5acafe642a45cd98c5e6331"
  },
  {
    "url": "blog/_posts/hexo-next主题高级配置.html",
    "revision": "9772c0febb7fe146d04aaab87c7522de"
  },
  {
    "url": "blog/_posts/Hexo-yilia主题-githubpages博客添加友言评论功能.html",
    "revision": "be1868911bd17d3eb43f0f9fc7d9783c"
  },
  {
    "url": "blog/_posts/html语义化.html",
    "revision": "32ce1a2c25b344c3ae2e207280fac95f"
  },
  {
    "url": "blog/_posts/JavaScript-面向对象编程.html",
    "revision": "0e31285af8de8d6d1f7f1ef9cb6f3b36"
  },
  {
    "url": "blog/_posts/JS变量提升.html",
    "revision": "d5c7d5e03bb4cb99527a5f5faacc9cb4"
  },
  {
    "url": "blog/_posts/JS变量的创建机制.html",
    "revision": "2bd75f65287d421359bffa64013aab41"
  },
  {
    "url": "blog/_posts/JS堆栈内存.html",
    "revision": "a653d6093569afb3b43d7adc84a1b66d"
  },
  {
    "url": "blog/_posts/JS类型转换总结.html",
    "revision": "8c03f3f19df4c329afebf86485efa3f3"
  },
  {
    "url": "blog/_posts/Markdown添加Latex数学公式.html",
    "revision": "639904d7ff8be005146207c0516cbedb"
  },
  {
    "url": "blog/_posts/markdown语法.html",
    "revision": "a43917019c26498341b6b71129126bd5"
  },
  {
    "url": "blog/_posts/sass的使用.html",
    "revision": "6fa5e611e75665ad8f72bd643250ac32"
  },
  {
    "url": "blog/_posts/sublimetext-实用插件介绍.html",
    "revision": "f6a15bfb88de0fa154d2254720ed3377"
  },
  {
    "url": "blog/_posts/Transform-引起的-z-index-失效‘.html",
    "revision": "32e5b717859bf93f0369301c8260ae02"
  },
  {
    "url": "blog/_posts/像素与viewport概念.html",
    "revision": "1be0e4974eeb3ffb14560ca3323709d1"
  },
  {
    "url": "blog/_posts/关于Flex布局.html",
    "revision": "24205d3470dd8b290076319693a1322c"
  },
  {
    "url": "blog/_posts/关于inline-block问题.html",
    "revision": "2a799e7e07603e88d1cf8e4ea6e030ee"
  },
  {
    "url": "blog/_posts/初学者资源推荐.html",
    "revision": "c12ff466e631888dd164f3a7d3b6bd5c"
  },
  {
    "url": "blog/_posts/前端学习历程.html",
    "revision": "846de7163e53b76a207180d31d29fdda"
  },
  {
    "url": "blog/_posts/去除inline-block元素间间距的N种方法.html",
    "revision": "769533e05198f1c124c75e58808661f4"
  },
  {
    "url": "blog/_posts/浅谈响应式.html",
    "revision": "68f6ae2f005d8c214bbb1fb468e9cd34"
  },
  {
    "url": "blog/_posts/浏览器设置不保存缓存.html",
    "revision": "1537efec63c37cbef99888a9251a559d"
  },
  {
    "url": "blog/_posts/深入理解层叠上下文和层叠顺序.html",
    "revision": "b794dce4388f799477d70cd2b473fb34"
  },
  {
    "url": "blog/_posts/给不了解前端的同学讲前端.html",
    "revision": "516dffbfe51ce9e11ca2375b33cf4d4a"
  },
  {
    "url": "blog/_posts/编码规范-（一）HTML.html",
    "revision": "3aac704c2b69b5b9f3e36277773cc22e"
  },
  {
    "url": "blog/_posts/编码规范（二）CSS.html",
    "revision": "b5a4d1b12554574ac75983ce93643d66"
  },
  {
    "url": "blog/_posts/记第一次博客改版更新.html",
    "revision": "8a6d6548cc5cd009320126af5f526a6b"
  },
  {
    "url": "blog/_posts/说说CSS学习中的瓶颈.html",
    "revision": "c44a2be00b1c29dbf1db7b468770d867"
  },
  {
    "url": "blog/index.html",
    "revision": "8c070e16292febd7765344d0041e7e28"
  },
  {
    "url": "categories/index.html",
    "revision": "70d64c651efca44fa0b4342b39b85576"
  },
  {
    "url": "index.html",
    "revision": "39047df1dc9ec7ad4de38d613eeb50d5"
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
