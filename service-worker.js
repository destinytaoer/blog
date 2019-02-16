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
    "revision": "bc11217d62785129e19b48d0152efbb2"
  },
  {
    "url": "about/index.html",
    "revision": "2709d7cb6248da6f8f43d81ec04fc15d"
  },
  {
    "url": "archives/index.html",
    "revision": "385659de06001680e9967f1f6db1a436"
  },
  {
    "url": "assets/css/0.styles.73c5cef6.css",
    "revision": "8e1676813f1089950a18ec1bfe961f50"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3934b5e8.js",
    "revision": "14398b4db74f46c35a913e652f5b7e98"
  },
  {
    "url": "assets/js/11.1742992c.js",
    "revision": "272c8cc9bca2261f84c6c1fa1ca6b975"
  },
  {
    "url": "assets/js/12.f6bd95e9.js",
    "revision": "4f419c01418c44b5449c8303a2d97103"
  },
  {
    "url": "assets/js/13.a7fe982a.js",
    "revision": "d5605a1a1722fa522d3bd8482de6d0cf"
  },
  {
    "url": "assets/js/14.c6217052.js",
    "revision": "bb471f1824d7e55488d273c3cd88a4dc"
  },
  {
    "url": "assets/js/15.cbc5ee96.js",
    "revision": "970587fc00438daea2b9a8d460857a7b"
  },
  {
    "url": "assets/js/16.16689bfe.js",
    "revision": "912b8ade6280f8bc4a67543a79e795e6"
  },
  {
    "url": "assets/js/17.f4d0ff70.js",
    "revision": "ef3254e079ad7bc0d066b42d9f7fffc3"
  },
  {
    "url": "assets/js/18.ad23364a.js",
    "revision": "145ed1e433aeb53a05fa8cf85da176f4"
  },
  {
    "url": "assets/js/19.163cee42.js",
    "revision": "f2a901a2a10cdab13e030deda79818c5"
  },
  {
    "url": "assets/js/2.6e650ea0.js",
    "revision": "409a740f07206487395d42a19a1dd41d"
  },
  {
    "url": "assets/js/20.f3fd0686.js",
    "revision": "37c62804764057dcb30dbfec7b3c4476"
  },
  {
    "url": "assets/js/21.64251608.js",
    "revision": "552288c9ff8865c8426563d06ef481f0"
  },
  {
    "url": "assets/js/22.d930bc0a.js",
    "revision": "c0d5f4a91edea62a9f984bc577604ed0"
  },
  {
    "url": "assets/js/23.68180339.js",
    "revision": "594f0643c7224fbc7100d879675a0d55"
  },
  {
    "url": "assets/js/24.4730d5ea.js",
    "revision": "ae7afaaa05828cfffe875fef09d145fb"
  },
  {
    "url": "assets/js/25.67abe5cf.js",
    "revision": "3ba3252c429a54b400fd9ba92bfddf74"
  },
  {
    "url": "assets/js/26.80c1b1d3.js",
    "revision": "2ed4ae7f18ad63cedca7e49c0999b42d"
  },
  {
    "url": "assets/js/27.711e8a4a.js",
    "revision": "2fe29aaa4131827833437ca1cb2135a2"
  },
  {
    "url": "assets/js/28.9d7b04e9.js",
    "revision": "157fdb14c402ead3df41b791478037e7"
  },
  {
    "url": "assets/js/29.404acdf7.js",
    "revision": "d009ab4884877aaf55fde45372bbbee8"
  },
  {
    "url": "assets/js/3.7c4c2339.js",
    "revision": "bc4d40e203b2533aa8e2763850ef6ad7"
  },
  {
    "url": "assets/js/30.81e65e9f.js",
    "revision": "6ea2699a2f06b4a99dffd7f6ecc677c5"
  },
  {
    "url": "assets/js/31.062fcfcf.js",
    "revision": "b306af6faf0b187290a087fa5e1dcd07"
  },
  {
    "url": "assets/js/32.ffb62053.js",
    "revision": "dfbc811ec250669ccc6d1dbefea977e9"
  },
  {
    "url": "assets/js/33.f7700489.js",
    "revision": "42fac58865ee96a5911d478dd5f461fd"
  },
  {
    "url": "assets/js/34.15075236.js",
    "revision": "96b83eb001091b8cd201f683f93f8f5c"
  },
  {
    "url": "assets/js/35.f20cb9a4.js",
    "revision": "b369e68c0cd068812fbce45595adbddc"
  },
  {
    "url": "assets/js/36.1a818871.js",
    "revision": "ac3c7646df00b6b7bcd92a8e92bc81ad"
  },
  {
    "url": "assets/js/37.00b68ade.js",
    "revision": "5aa74889a101f3e9edc0eda1d82dfbf4"
  },
  {
    "url": "assets/js/38.99c5c619.js",
    "revision": "64b921f31d6547b69b4092be4526e0ee"
  },
  {
    "url": "assets/js/39.a8afc009.js",
    "revision": "ec7ff1687ef23826052137002c231c30"
  },
  {
    "url": "assets/js/4.cac9a86c.js",
    "revision": "48de251a6d04288bcaddabfa797af3e7"
  },
  {
    "url": "assets/js/40.9b764544.js",
    "revision": "125b51e63a08a7eb79e6236fff385309"
  },
  {
    "url": "assets/js/41.15912819.js",
    "revision": "99c442ac407d5a418461606cd753652f"
  },
  {
    "url": "assets/js/42.aa4b32c4.js",
    "revision": "fd1fde11ac640b47fe1e446562be2098"
  },
  {
    "url": "assets/js/43.ceb2a90f.js",
    "revision": "a992c5b72636c84f86b8c984b8f1f34f"
  },
  {
    "url": "assets/js/44.cde9478b.js",
    "revision": "2c3826ecd67f05e7f91e46171aee9a41"
  },
  {
    "url": "assets/js/45.c3599aa4.js",
    "revision": "a24cebbcc458a000e8e998e0225ce332"
  },
  {
    "url": "assets/js/46.6945cbeb.js",
    "revision": "d6908dfc36f9a9d9200581a9e34f91b7"
  },
  {
    "url": "assets/js/47.53838f6e.js",
    "revision": "cd200d093220a13946739c389d70ba54"
  },
  {
    "url": "assets/js/48.61ef18f8.js",
    "revision": "226ef755beae75ac8af866917978ab55"
  },
  {
    "url": "assets/js/49.cdfce1f0.js",
    "revision": "7497059820c5a1394907f0c9307a1218"
  },
  {
    "url": "assets/js/5.bd1da312.js",
    "revision": "d0c40326296ea59ca03dd26d07347a26"
  },
  {
    "url": "assets/js/50.5c1e55e3.js",
    "revision": "25acc6ab9c047a0995fd884b9042a762"
  },
  {
    "url": "assets/js/51.5630afb7.js",
    "revision": "c962ecc0dfeaf64dedc1acc3a09da74a"
  },
  {
    "url": "assets/js/52.44469c02.js",
    "revision": "a74a872df471a7ec595b6e06700b3940"
  },
  {
    "url": "assets/js/53.d768a73f.js",
    "revision": "2dd818e37f3ae215d23b496b334084df"
  },
  {
    "url": "assets/js/54.a7ac6a32.js",
    "revision": "c586d67a41b34b12e0e7e617b378b36a"
  },
  {
    "url": "assets/js/6.cd93f38c.js",
    "revision": "b72401d93eae987a4530d5494586eeae"
  },
  {
    "url": "assets/js/7.0094e8c9.js",
    "revision": "b7888cb3c11a2522119386e828cb80c7"
  },
  {
    "url": "assets/js/8.a4d04c9c.js",
    "revision": "142778983805c6449cf767ec686afa2a"
  },
  {
    "url": "assets/js/9.f927b57c.js",
    "revision": "f6aea9c704fda3a4c1d2acbcb81de463"
  },
  {
    "url": "assets/js/app.ee2e2c4d.js",
    "revision": "baa714249242cedea7bfa3667e8d178e"
  },
  {
    "url": "author.jpg",
    "revision": "df2fc7455cc5663043df50d78c9329ef"
  },
  {
    "url": "blog/_posts/CSS实现元素的居中显示.html",
    "revision": "a882e829c8a05012fe031d6a10dbb95a"
  },
  {
    "url": "blog/_posts/DOM的映射机制.html",
    "revision": "4002d1187e6af9b30962bf830c37d603"
  },
  {
    "url": "blog/_posts/ESLint-（一）简介与安装.html",
    "revision": "59a25a4596c24ecf5423be1cbfd06743"
  },
  {
    "url": "blog/_posts/ESLint-（二）配置文件.html",
    "revision": "b6eed2cca49f9a22e35f49141c881e49"
  },
  {
    "url": "blog/_posts/githubpages-hexo-搭建个人博客.html",
    "revision": "3aabc00c960aa867ffac2fa772c45597"
  },
  {
    "url": "blog/_posts/gulp-自动化构建工具.html",
    "revision": "5d07df6c19185cae9b5d925090d9f305"
  },
  {
    "url": "blog/_posts/hello-world.html",
    "revision": "2f02b96b64dff10d0a9623bba5f143ab"
  },
  {
    "url": "blog/_posts/hexo-next主题高级配置.html",
    "revision": "b766b82e13df07a520c7905203099af4"
  },
  {
    "url": "blog/_posts/Hexo-yilia主题-githubpages博客添加友言评论功能.html",
    "revision": "a15e73d74bdabfe74aeb2b5b2e432386"
  },
  {
    "url": "blog/_posts/html语义化.html",
    "revision": "ff2b14a66d2d85d0d1bb94f48de5430f"
  },
  {
    "url": "blog/_posts/JavaScript-面向对象编程.html",
    "revision": "5c6b356bb505147575d098c353819f8a"
  },
  {
    "url": "blog/_posts/JS变量提升.html",
    "revision": "5daa017ac0d3d83b3c9c560d1797cb3b"
  },
  {
    "url": "blog/_posts/JS变量的创建机制.html",
    "revision": "af12702283f3bedcaf7a74df7adb9081"
  },
  {
    "url": "blog/_posts/JS堆栈内存.html",
    "revision": "19c80b8eab5867e0ba8886c54cf275d6"
  },
  {
    "url": "blog/_posts/JS类型转换总结.html",
    "revision": "6f14a15e51b780586cf7feaecd370e72"
  },
  {
    "url": "blog/_posts/Markdown添加Latex数学公式.html",
    "revision": "bacddb1babaa2ac9720073e20de751d7"
  },
  {
    "url": "blog/_posts/markdown语法.html",
    "revision": "8ea34329005e879bed928a3b3752c58d"
  },
  {
    "url": "blog/_posts/sass的使用.html",
    "revision": "7c28f1bbe381be0c89704142633993e6"
  },
  {
    "url": "blog/_posts/sublimetext-实用插件介绍.html",
    "revision": "ee6145f337f6c56dbfc99a4e2110a622"
  },
  {
    "url": "blog/_posts/Transform-引起的-z-index-失效‘.html",
    "revision": "883aa4153bd0e88a3e9fa60b6a899c25"
  },
  {
    "url": "blog/_posts/像素与viewport概念.html",
    "revision": "790b7637b71b2191bd0e77cfb4828fdb"
  },
  {
    "url": "blog/_posts/关于Flex布局.html",
    "revision": "432fd0c66cc381b85250a29190e26bf7"
  },
  {
    "url": "blog/_posts/关于inline-block问题.html",
    "revision": "6c3c26f4059cb52a865771d11e2f9b43"
  },
  {
    "url": "blog/_posts/初学者资源推荐.html",
    "revision": "5d19b866c67b75caa283c28339ee3fe4"
  },
  {
    "url": "blog/_posts/前端学习历程.html",
    "revision": "7f8f6474722661d43209c9e8fb5d60d5"
  },
  {
    "url": "blog/_posts/去除inline-block元素间间距的N种方法.html",
    "revision": "ec3436fa55d764608cb26d5bdd9ce57e"
  },
  {
    "url": "blog/_posts/浅谈响应式.html",
    "revision": "5124d44b67b01f0d37a773458a43ede6"
  },
  {
    "url": "blog/_posts/浏览器设置不保存缓存.html",
    "revision": "d3be7f92f1ffc5e7dc6903a82a50bba4"
  },
  {
    "url": "blog/_posts/深入理解层叠上下文和层叠顺序.html",
    "revision": "997ca9f842038a62f2bdc4a18253ccce"
  },
  {
    "url": "blog/_posts/给不了解前端的同学讲前端.html",
    "revision": "15ab36f5fafb0b181098d46364ca4920"
  },
  {
    "url": "blog/_posts/编码规范-（一）HTML.html",
    "revision": "36fcdbc9183636f895e2d82975e6e892"
  },
  {
    "url": "blog/_posts/编码规范（二）CSS.html",
    "revision": "127a52f31831cb8f3a981ad133c67ce3"
  },
  {
    "url": "blog/_posts/记第一次博客改版更新.html",
    "revision": "908d269cb9c2c0da898c49ff3b656f05"
  },
  {
    "url": "blog/_posts/说说CSS学习中的瓶颈.html",
    "revision": "0d38c2e36d5ff4fec61a56a84cebb0ae"
  },
  {
    "url": "blog/index.html",
    "revision": "d6ef6df0752ab198ba2afd272446e15b"
  },
  {
    "url": "categories/index.html",
    "revision": "19c1b42c63e2f85681d85ad29a9db655"
  },
  {
    "url": "font/iconfont.css",
    "revision": "61b204cf953c3a2666eed3f83ce8e4c8"
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
    "revision": "cdd1cd303d5828d17626ebbe95966b50"
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
    "revision": "fad0bb1b534068ad997d10f9bbdd5790"
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
