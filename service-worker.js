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
    "revision": "9709e3e67503278ee585dfbbf83d4f84"
  },
  {
    "url": "about/index.html",
    "revision": "7563dd8b58aaffbade630ba4bc53ae38"
  },
  {
    "url": "archives/index.html",
    "revision": "1347c09354f98b19b80c850c50031b41"
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
    "url": "assets/js/15.e4ba00ca.js",
    "revision": "f200439c7f000094976d81ac20bea6a7"
  },
  {
    "url": "assets/js/16.7e1184ff.js",
    "revision": "c1c67a832e7c6cc983b80a758393afea"
  },
  {
    "url": "assets/js/17.b3992820.js",
    "revision": "d20c66782519334ecd9ccf0f5d63f542"
  },
  {
    "url": "assets/js/18.238a05ee.js",
    "revision": "f6ccc85bd08c3916580d56f57da82fb2"
  },
  {
    "url": "assets/js/19.f883976b.js",
    "revision": "ff2a97514d1d68301ca0aa4809045e5d"
  },
  {
    "url": "assets/js/2.8f431860.js",
    "revision": "7bef6e69a6e5dae1da587c996cefa65d"
  },
  {
    "url": "assets/js/20.51dc2dee.js",
    "revision": "a5a4d2bdb6b0a886ac205265cd21cf92"
  },
  {
    "url": "assets/js/21.796983e0.js",
    "revision": "e320305875698860c0be71777667769b"
  },
  {
    "url": "assets/js/22.d7517b7c.js",
    "revision": "b293d4fc4ca0ab15248c69bbe269b02e"
  },
  {
    "url": "assets/js/23.e06a382b.js",
    "revision": "5c594e404d3665ba31f49d462be6b117"
  },
  {
    "url": "assets/js/24.9333f032.js",
    "revision": "ae46a8912e8872a5fc0ea0a42e7b6961"
  },
  {
    "url": "assets/js/25.1376bbf3.js",
    "revision": "c8ebba11d818a6e4fafd97a489f062a8"
  },
  {
    "url": "assets/js/26.150548e6.js",
    "revision": "b0bbf653a73535923107f57545e26771"
  },
  {
    "url": "assets/js/27.ab9291a9.js",
    "revision": "886d07b53975a444071fbf1fb62feeb6"
  },
  {
    "url": "assets/js/28.8d911f13.js",
    "revision": "7821db2c2167f8ab38a87a5bfa149551"
  },
  {
    "url": "assets/js/29.36d74b48.js",
    "revision": "0a72f266f85e08ee3a67d6dfd40e2a47"
  },
  {
    "url": "assets/js/3.7f0aa437.js",
    "revision": "8d8c31f8bdc6657fed5379f021222c35"
  },
  {
    "url": "assets/js/30.58282bee.js",
    "revision": "0a134ff2f3ef7b43464df496506fc4a5"
  },
  {
    "url": "assets/js/31.640a05cc.js",
    "revision": "752d04f50debfec3ce6707793bf2fc2c"
  },
  {
    "url": "assets/js/32.2ef4d532.js",
    "revision": "9c49efea6941c5b581a07be2c7e6a6ac"
  },
  {
    "url": "assets/js/33.901b42c3.js",
    "revision": "467e9ff404f35a44849ec3a84163c496"
  },
  {
    "url": "assets/js/34.a6b6468a.js",
    "revision": "a94b29bbe73ffb5c35efe5a29bd1a0ae"
  },
  {
    "url": "assets/js/35.85513031.js",
    "revision": "2b93dabcf325270041161431a6dca9ab"
  },
  {
    "url": "assets/js/36.8ceb766e.js",
    "revision": "f7d35be7aa889d99ab23b49a0f90b6c5"
  },
  {
    "url": "assets/js/37.c9ed53d0.js",
    "revision": "282324b01023318da8d2bd7328eb171f"
  },
  {
    "url": "assets/js/38.9f1ce7af.js",
    "revision": "7efc601faab5c83a5cc7b2a7510d05ec"
  },
  {
    "url": "assets/js/39.d74e87db.js",
    "revision": "ed3c65d317825f4d94799cf3b05aa05e"
  },
  {
    "url": "assets/js/4.65bc9f06.js",
    "revision": "af81438a1ec26e0bc8b68e45b8ec4182"
  },
  {
    "url": "assets/js/40.adb5b61b.js",
    "revision": "4a328a1006aecf9852d55f19f907bc35"
  },
  {
    "url": "assets/js/41.ec893b23.js",
    "revision": "fd0b14456f12b2b9868066005950fb5f"
  },
  {
    "url": "assets/js/42.88343829.js",
    "revision": "9a2ba9aca75c2a059ccd3daed96729d2"
  },
  {
    "url": "assets/js/43.4000a133.js",
    "revision": "0e18baefb89e159b297aff269e9eb181"
  },
  {
    "url": "assets/js/44.c480ef02.js",
    "revision": "046b80fcad451ad68dcc492892576de4"
  },
  {
    "url": "assets/js/45.04e14015.js",
    "revision": "b69a7411c5f63cba28d1789c0297da70"
  },
  {
    "url": "assets/js/46.c67c61e2.js",
    "revision": "2878230e821105f4ddc6daa742928cce"
  },
  {
    "url": "assets/js/47.06948df3.js",
    "revision": "7cbf4a923318467d3c7c8af277fbb1eb"
  },
  {
    "url": "assets/js/48.2d1b9277.js",
    "revision": "4a3b844222471570b51b94285317fc82"
  },
  {
    "url": "assets/js/49.8a859f09.js",
    "revision": "06b985f366f2f095648032c3469a25ef"
  },
  {
    "url": "assets/js/5.f0f14f8e.js",
    "revision": "90198c32a212997e084774cd3622d72d"
  },
  {
    "url": "assets/js/50.a62ddf28.js",
    "revision": "43353c88412527febdedf1c2cb721534"
  },
  {
    "url": "assets/js/51.a2c389c6.js",
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
    "url": "assets/js/app.04c81d43.js",
    "revision": "faed36cf5aef5b859cd5d5ef101fc69e"
  },
  {
    "url": "author.jpg",
    "revision": "df2fc7455cc5663043df50d78c9329ef"
  },
  {
    "url": "blog/_posts/CSS实现元素的居中显示.html",
    "revision": "cf335585371bd9cf6709a2ae29f2d0b7"
  },
  {
    "url": "blog/_posts/DOM的映射机制.html",
    "revision": "8a4b17b5fbd649583872578b57a950e4"
  },
  {
    "url": "blog/_posts/ESLint-（一）简介与安装.html",
    "revision": "854f6cf25bfec20eb8bbe6093541ce7f"
  },
  {
    "url": "blog/_posts/ESLint-（二）配置文件.html",
    "revision": "96bc97785737793e461551222dd42d57"
  },
  {
    "url": "blog/_posts/githubpages-hexo-搭建个人博客.html",
    "revision": "46185d94775a55c413967a9bf113abd4"
  },
  {
    "url": "blog/_posts/gulp-自动化构建工具.html",
    "revision": "32426bc3abe26d14825fa381f6172be4"
  },
  {
    "url": "blog/_posts/hello-world.html",
    "revision": "ef1290f569a84085d2cfb90766470a3f"
  },
  {
    "url": "blog/_posts/hexo-next主题高级配置.html",
    "revision": "a78a4aa3f8b8a0e3cb6753d5224cf0a6"
  },
  {
    "url": "blog/_posts/Hexo-yilia主题-githubpages博客添加友言评论功能.html",
    "revision": "22bb29a2d8c6decbc9f337ef0fec37cf"
  },
  {
    "url": "blog/_posts/html语义化.html",
    "revision": "1e12c8b6e23c48eb130f135f494afdac"
  },
  {
    "url": "blog/_posts/JavaScript-面向对象编程.html",
    "revision": "e605d27471da59a498224c0e074f6cf5"
  },
  {
    "url": "blog/_posts/JS变量提升.html",
    "revision": "2de59b521dfc8da73187109cb2cbb60f"
  },
  {
    "url": "blog/_posts/JS变量的创建机制.html",
    "revision": "425fb396bd7e61b890bb7d041a431eda"
  },
  {
    "url": "blog/_posts/JS堆栈内存.html",
    "revision": "980e35252201759b3d7cd23f877efd98"
  },
  {
    "url": "blog/_posts/JS类型转换总结.html",
    "revision": "82370b538758509961a9cc94d024a583"
  },
  {
    "url": "blog/_posts/Markdown添加Latex数学公式.html",
    "revision": "5e1501894fe75ff33f058fc9fa819efa"
  },
  {
    "url": "blog/_posts/markdown语法.html",
    "revision": "8f33e0291b05db8ecfed640739117515"
  },
  {
    "url": "blog/_posts/sass的使用.html",
    "revision": "aad6a13343be4e94dc12d009220f1ef4"
  },
  {
    "url": "blog/_posts/sublimetext-实用插件介绍.html",
    "revision": "b7ea97b28baab612a83b860f20216fe6"
  },
  {
    "url": "blog/_posts/Transform-引起的-z-index-失效‘.html",
    "revision": "48d26a975724a85d47310e5888241b15"
  },
  {
    "url": "blog/_posts/像素与viewport概念.html",
    "revision": "b5749cebc2b48c5c51a77bb99e0c2cfa"
  },
  {
    "url": "blog/_posts/关于Flex布局.html",
    "revision": "e969c7045bdbaf54598e3debdb3862b2"
  },
  {
    "url": "blog/_posts/关于inline-block问题.html",
    "revision": "ced0d39708b5f6e5d16e87b6bf2c4ce2"
  },
  {
    "url": "blog/_posts/初学者资源推荐.html",
    "revision": "bc3900bf3f4119d1ef23dd4857dfa169"
  },
  {
    "url": "blog/_posts/前端学习历程.html",
    "revision": "4335b06f4bbf19e1d8a379abe06103be"
  },
  {
    "url": "blog/_posts/去除inline-block元素间间距的N种方法.html",
    "revision": "8f0f0d24e9bda2b93e21c69f98ec876d"
  },
  {
    "url": "blog/_posts/浅谈响应式.html",
    "revision": "d38b6df48fb45287f44ac2ca805874d8"
  },
  {
    "url": "blog/_posts/浏览器设置不保存缓存.html",
    "revision": "901ffd426db868e3854ab339ca741c43"
  },
  {
    "url": "blog/_posts/深入理解层叠上下文和层叠顺序.html",
    "revision": "9079ad53da7f267abd5ea4bf6820472f"
  },
  {
    "url": "blog/_posts/给不了解前端的同学讲前端.html",
    "revision": "9524afe92b2b7dd071be75534296d42d"
  },
  {
    "url": "blog/_posts/编码规范-（一）HTML.html",
    "revision": "8c27c24992c49f20cc2cc324de525a18"
  },
  {
    "url": "blog/_posts/编码规范（二）CSS.html",
    "revision": "cda6820789e73e4795490c4dd3b8dfac"
  },
  {
    "url": "blog/_posts/记第一次博客改版更新.html",
    "revision": "fbd31a051e68faca30ca7cac942c61a9"
  },
  {
    "url": "blog/_posts/说说CSS学习中的瓶颈.html",
    "revision": "f44aab3130877098cd57cb243928a5ea"
  },
  {
    "url": "blog/index.html",
    "revision": "acb9d6ca460f84b7f93b0be31522bd0f"
  },
  {
    "url": "categories/index.html",
    "revision": "3532221c8120c314e8737d07b6aafb63"
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
    "revision": "973215bcededaae668ed89df8ed64397"
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
