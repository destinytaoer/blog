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
    "revision": "f0b019cd83b118457b09efa5fbbc75be"
  },
  {
    "url": "about/index.html",
    "revision": "d24df784388e87470b1833070796a25f"
  },
  {
    "url": "archives/index.html",
    "revision": "64e25780947bc2ae5c593c343615f28d"
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
    "url": "assets/js/app.01857b21.js",
    "revision": "ede627b347467e3e872e058de5ff78f3"
  },
  {
    "url": "author.jpg",
    "revision": "df2fc7455cc5663043df50d78c9329ef"
  },
  {
    "url": "blog/_posts/CSS实现元素的居中显示.html",
    "revision": "1fc1f5ea3dfc3bf72493a7f71e10bb21"
  },
  {
    "url": "blog/_posts/DOM的映射机制.html",
    "revision": "5821f47d25f557ef8ef3dc3a04e05171"
  },
  {
    "url": "blog/_posts/ESLint-（一）简介与安装.html",
    "revision": "8bfb9ba9419d1f301f400b0dbe1fd241"
  },
  {
    "url": "blog/_posts/ESLint-（二）配置文件.html",
    "revision": "7f7843bc0036782b6734c163d3545b7c"
  },
  {
    "url": "blog/_posts/githubpages-hexo-搭建个人博客.html",
    "revision": "e077a583bf2a32ef319370bb61feaf54"
  },
  {
    "url": "blog/_posts/gulp-自动化构建工具.html",
    "revision": "a40da54f8d84174c8a9ba952694b06da"
  },
  {
    "url": "blog/_posts/hello-world.html",
    "revision": "cae455242d22f3e0f6695f62a6e76b2c"
  },
  {
    "url": "blog/_posts/hexo-next主题高级配置.html",
    "revision": "785d18ef986121b04e19e81368a7e10b"
  },
  {
    "url": "blog/_posts/Hexo-yilia主题-githubpages博客添加友言评论功能.html",
    "revision": "b584006bd518a8e5e5da5cfedb4d5ca9"
  },
  {
    "url": "blog/_posts/html语义化.html",
    "revision": "25991710140ae8ba1e27dc6585c33a24"
  },
  {
    "url": "blog/_posts/JavaScript-面向对象编程.html",
    "revision": "63af350ec49d025782967876c0c6e646"
  },
  {
    "url": "blog/_posts/JS变量提升.html",
    "revision": "08d30889e585180310924f8aa18f4a12"
  },
  {
    "url": "blog/_posts/JS变量的创建机制.html",
    "revision": "e0dbfd41829337d0a44ae8f9d8e8e490"
  },
  {
    "url": "blog/_posts/JS堆栈内存.html",
    "revision": "39055fbb84412db3d7a1f1f78259818b"
  },
  {
    "url": "blog/_posts/JS类型转换总结.html",
    "revision": "e29a877b0851c03aa89f2bcafd358e11"
  },
  {
    "url": "blog/_posts/Markdown添加Latex数学公式.html",
    "revision": "b5541ad68e06505202629537d2e3ed08"
  },
  {
    "url": "blog/_posts/markdown语法.html",
    "revision": "b812d5a77d5992b0b236980648c2f147"
  },
  {
    "url": "blog/_posts/sass的使用.html",
    "revision": "a27baec4c1c10610a44110c211b273a0"
  },
  {
    "url": "blog/_posts/sublimetext-实用插件介绍.html",
    "revision": "89cfdf6d853e16af08eaf1ac8333179f"
  },
  {
    "url": "blog/_posts/Transform-引起的-z-index-失效‘.html",
    "revision": "68a2cb62a39c12dc595449b03254e372"
  },
  {
    "url": "blog/_posts/像素与viewport概念.html",
    "revision": "d14b3ba14fb9fbde50f642884e2d5bf0"
  },
  {
    "url": "blog/_posts/关于Flex布局.html",
    "revision": "7a9a4bd4992dbedc1382feff0276e470"
  },
  {
    "url": "blog/_posts/关于inline-block问题.html",
    "revision": "e9330eaa263ce35879f41f35b8baad7e"
  },
  {
    "url": "blog/_posts/初学者资源推荐.html",
    "revision": "27ca1f51f9a33f17498d30eb593b838b"
  },
  {
    "url": "blog/_posts/前端学习历程.html",
    "revision": "bc8b83193e97bcbec9061e218d99bc08"
  },
  {
    "url": "blog/_posts/去除inline-block元素间间距的N种方法.html",
    "revision": "037e828edc0ea29ed02604563066dcb6"
  },
  {
    "url": "blog/_posts/浅谈响应式.html",
    "revision": "34fb64064af8507d895560419f5c4691"
  },
  {
    "url": "blog/_posts/浏览器设置不保存缓存.html",
    "revision": "f06d794ce317b4ec2c8f6027115873e7"
  },
  {
    "url": "blog/_posts/深入理解层叠上下文和层叠顺序.html",
    "revision": "4e66fa7d1fefd92f9c2344fe95cf01e3"
  },
  {
    "url": "blog/_posts/给不了解前端的同学讲前端.html",
    "revision": "1cf2b9d70835663d44489973c6dddad7"
  },
  {
    "url": "blog/_posts/编码规范-（一）HTML.html",
    "revision": "8e0feb7a80f7b4b76d4ae2241da698a2"
  },
  {
    "url": "blog/_posts/编码规范（二）CSS.html",
    "revision": "5d2860ab2c38d6b0c68bde40e7e00aa6"
  },
  {
    "url": "blog/_posts/记第一次博客改版更新.html",
    "revision": "45fabdf81d48d00479bd8e6733894c49"
  },
  {
    "url": "blog/_posts/说说CSS学习中的瓶颈.html",
    "revision": "03668da84cac446f798b9e9a9299063a"
  },
  {
    "url": "blog/index.html",
    "revision": "9a06e439e5d9f3fad3af03d9ee09f7ea"
  },
  {
    "url": "categories/index.html",
    "revision": "1f8030ee1d5368240c6e19fb7e32aa6c"
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
    "revision": "ffb00a0dc61c7ac1ff886c59ca8ac2f7"
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
