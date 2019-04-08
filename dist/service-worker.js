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
    "revision": "0042938a9bbc39d3a2194368671e1119"
  },
  {
    "url": "2017/07/gulp-自动化构建工具/index.html",
    "revision": "0d22879b034186bdd3db76080348ac93"
  },
  {
    "url": "2017/07/markdown语法/index.html",
    "revision": "acbd44e900c0f57e0cc366009d6673dd"
  },
  {
    "url": "2017/08/初学者资源推荐/index.html",
    "revision": "9df6bc6f3c1d781866b3da64e2a21d97"
  },
  {
    "url": "2017/08/去除inline-block元素间间距的n种方法/index.html",
    "revision": "9aa1e94c45f858768e41890c07d7737d"
  },
  {
    "url": "2017/09/githubpages-hexo-搭建个人博客/index.html",
    "revision": "3519fda83a383f41942fab4ea1e4e95a"
  },
  {
    "url": "2017/09/hello-world/index.html",
    "revision": "2a5ec702a477ba4476214f3f34749488"
  },
  {
    "url": "2017/09/hexo-next主题高级配置/index.html",
    "revision": "844439cdb6403e8cebd29043f1099420"
  },
  {
    "url": "2017/09/hexo-yilia主题-githubpages博客添加友言评论功能/index.html",
    "revision": "4395f59a32f5052a006aa56399fe8f89"
  },
  {
    "url": "2017/09/javascript-面向对象编程/index.html",
    "revision": "f5b587ec0753feb4c4a14dac8066db61"
  },
  {
    "url": "2017/09/sublimetext-实用插件介绍/index.html",
    "revision": "909c558a157c123c19f3b1fa568be9c9"
  },
  {
    "url": "2017/10/canvas画布/index.html",
    "revision": "2dd2839ba849b02d379a1c789e649e50"
  },
  {
    "url": "2017/10/css实现元素的居中显示/index.html",
    "revision": "d166a4eee93b38bd9d0642f6b22f6cb9"
  },
  {
    "url": "2017/10/css渐变的简单使用/index.html",
    "revision": "6c0f9c046d5470621c3161c70c80aaa3"
  },
  {
    "url": "2017/10/sass的使用/index.html",
    "revision": "4b64fc697f24fc3a87967a5fc68f44a0"
  },
  {
    "url": "2017/10/transform-引起的-z-index-失效‘/index.html",
    "revision": "0edfc6adbd34c467921f6bc031218065"
  },
  {
    "url": "2017/10/像素与viewport概念/index.html",
    "revision": "d918645da2ae835adbfceae6da016894"
  },
  {
    "url": "2017/10/关于flex布局/index.html",
    "revision": "285157d3fdb9ff4412fef923940851d7"
  },
  {
    "url": "2017/10/关于inline-block问题/index.html",
    "revision": "9a0278df483c3a163938ef5f6f462831"
  },
  {
    "url": "2017/10/浅谈响应式/index.html",
    "revision": "16c0e39312562f94e130a0e64cda48ec"
  },
  {
    "url": "2017/10/深入理解层叠上下文和层叠顺序/index.html",
    "revision": "d46db79da0ca9864ba332a9f0c6c4f9e"
  },
  {
    "url": "2017/10/给不了解前端的同学讲前端/index.html",
    "revision": "41d4199bf26c93b3414c4beec1db9b30"
  },
  {
    "url": "2017/10/编码规范-（一）html/index.html",
    "revision": "5c7fc89245a95384aaf889f011100dfb"
  },
  {
    "url": "2017/10/编码规范（二）css/index.html",
    "revision": "d67468380aca21f62549251797b23e95"
  },
  {
    "url": "2017/10/说说css学习中的瓶颈/index.html",
    "revision": "231a5e9eaa064b1c62a6917658f0f815"
  },
  {
    "url": "2017/11/canvas画五角星/index.html",
    "revision": "87320291c72f4c8e0130c7722536f142"
  },
  {
    "url": "2017/11/canvas画时钟/index.html",
    "revision": "ab67c59e93029c11a66b6bc455da1f69"
  },
  {
    "url": "2017/11/js类型转换总结/index.html",
    "revision": "1a73db3a3317bb51b5ccea9446cd3f76"
  },
  {
    "url": "2017/12/eslint-（一）简介与安装/index.html",
    "revision": "4a11d7aa8b30dae1b4ac355f43ab7abc"
  },
  {
    "url": "2017/12/eslint-（二）配置文件/index.html",
    "revision": "d632ba44a2559d4efd66d214f91ce74c"
  },
  {
    "url": "2017/12/markdown添加latex数学公式/index.html",
    "revision": "afff165e8a9ed79b11207f6378280bbf"
  },
  {
    "url": "2017/12/前端学习历程/index.html",
    "revision": "4d456453bedbeca1e46018b3d2156231"
  },
  {
    "url": "2018/06/荔园的浪漫/index.html",
    "revision": "aafd3ab9f4c2efc7fef8b0d902501d96"
  },
  {
    "url": "2018/07/js变量的创建机制/index.html",
    "revision": "ad411df2dfa845da78144ff47f5f43cc"
  },
  {
    "url": "2018/08/dom的映射机制/index.html",
    "revision": "e0d3d44b48410f5efd5d936cef8dc486"
  },
  {
    "url": "2018/08/js作用域与作用域链/index.html",
    "revision": "8e60154bbc40571937b27d97ebd268c1"
  },
  {
    "url": "2018/08/js变量提升/index.html",
    "revision": "22921ec7e7a6bd7fd90828fea9917bd6"
  },
  {
    "url": "2018/08/js堆栈内存/index.html",
    "revision": "ca5d2434bbfdc0e9a2b0a3d537f5458b"
  },
  {
    "url": "2018/08/记第一次博客改版更新/index.html",
    "revision": "ea010b539562ee82c49beb7689c4dc26"
  },
  {
    "url": "2018/09/js函数/index.html",
    "revision": "e0135bf86a3c05cfc3eece6f8f6d8d70"
  },
  {
    "url": "2018/09/js函数的执行机制/index.html",
    "revision": "f7c1dec4a0d168ba5659cf0f71067388"
  },
  {
    "url": "2018/10/js运算符的优先级/index.html",
    "revision": "0c1b3265557bc297f213d4f33cfcd95f"
  },
  {
    "url": "2018/12/前端工程师的未来在哪里/index.html",
    "revision": "a3fff119c5b38c78c6d665ba0aff3921"
  },
  {
    "url": "2019/02/chrome插件英雄榜/index.html",
    "revision": "baedb5d9af87a3f96083817c5f3ec1a3"
  },
  {
    "url": "2019/02/js中扯不完的分号问题/index.html",
    "revision": "292fc30826f8014e42695fdd15c17a54"
  },
  {
    "url": "2019/02/mvc-mvp-mvvm-图示（转）/index.html",
    "revision": "aa4b3c65c803ad39dfc2569ef802efd6"
  },
  {
    "url": "2019/02/vscode插件之polaroid/index.html",
    "revision": "665baef505345419a86e0ee291f1d2be"
  },
  {
    "url": "2019/02/vuepress入门/index.html",
    "revision": "5327cfd316123588beb919cee5ab5a03"
  },
  {
    "url": "2019/02/前端学习知识图谱/index.html",
    "revision": "ec0f054c41dfc7bb0eb0796395f33207"
  },
  {
    "url": "2019/02/浅谈fc/index.html",
    "revision": "41b675c8bc6c18b87467ee5ee078923d"
  },
  {
    "url": "2019/03/机械键盘介绍/index.html",
    "revision": "a242649bee58ec407c4081314cb8e26b"
  },
  {
    "url": "404.html",
    "revision": "6e3a41f98aebd2205d4fd09f56beefc3"
  },
  {
    "url": "about/index.html",
    "revision": "e8854ea004ce1e165b7028bc3d0be73c"
  },
  {
    "url": "assets/css/0.styles.2920447f.css",
    "revision": "efb06e82a2d94bdebb8561cb1903d8e4"
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
    "url": "assets/js/1.4683c509.js",
    "revision": "fe52f9b5a4414b1a4d7018eeac6b1931"
  },
  {
    "url": "assets/js/10.d86e2b8d.js",
    "revision": "78bcda7b4efa525b3688a5bf5c513fa7"
  },
  {
    "url": "assets/js/11.a752c041.js",
    "revision": "2a1771c6ae459aedfafc82ca6b2a2052"
  },
  {
    "url": "assets/js/12.c6984d07.js",
    "revision": "106a43be30f77c21a572c2029794669a"
  },
  {
    "url": "assets/js/13.d8832ed5.js",
    "revision": "cc22ea21b4152f631b309e32185a11ae"
  },
  {
    "url": "assets/js/14.42785a91.js",
    "revision": "6037586573c36f3423264f76bba4d8d1"
  },
  {
    "url": "assets/js/15.ddc321f1.js",
    "revision": "e8f4b12f5735e9dc58aba63d72023f16"
  },
  {
    "url": "assets/js/16.797eed80.js",
    "revision": "ba2d421e8c0fe61a2a07b8e4b3ee0fcd"
  },
  {
    "url": "assets/js/17.1789fd47.js",
    "revision": "27a1bd296b996f1b5a6647fc0e87c15b"
  },
  {
    "url": "assets/js/18.53f7fe43.js",
    "revision": "a725e5b5640f306a8a8cf44f4a259eb8"
  },
  {
    "url": "assets/js/19.f7060b5c.js",
    "revision": "53fa6fe65cfe615a2326c54f75752988"
  },
  {
    "url": "assets/js/2.2b67a1a8.js",
    "revision": "3bbd4f456966e5afe1152dfa80ef2a8d"
  },
  {
    "url": "assets/js/20.bedbb96e.js",
    "revision": "b7837658a70e4152992039a61b1081d1"
  },
  {
    "url": "assets/js/21.48aff5f2.js",
    "revision": "89a3a311a9c080e79637b7f11074f047"
  },
  {
    "url": "assets/js/22.e27af33d.js",
    "revision": "37e9a574d22ea5c5a2c55e577a4689ab"
  },
  {
    "url": "assets/js/23.01d35d2c.js",
    "revision": "fbb183ab4c009830d3358dd6418610b9"
  },
  {
    "url": "assets/js/24.c473df31.js",
    "revision": "3b2e63e3e8373b32f628c19f47cd48d7"
  },
  {
    "url": "assets/js/25.88a5bb7d.js",
    "revision": "ee302b1ba6984dc888439f9b20d47382"
  },
  {
    "url": "assets/js/26.98118518.js",
    "revision": "2348dea1989c7ffcfad2b27e759fd40f"
  },
  {
    "url": "assets/js/27.95843651.js",
    "revision": "d7c19432662a4e8be75c0dd3a3d3b9eb"
  },
  {
    "url": "assets/js/28.068ad012.js",
    "revision": "267f2860b7c0829d00e88edc78571e0a"
  },
  {
    "url": "assets/js/29.a5806427.js",
    "revision": "ed3cf733d86b838a3b0c0167efd1a774"
  },
  {
    "url": "assets/js/30.87e47fd9.js",
    "revision": "1e2c9ad44eff0c2e29fa24352bcd27dd"
  },
  {
    "url": "assets/js/31.77e72d6d.js",
    "revision": "356e5e0bac1bc656b073040792153a2c"
  },
  {
    "url": "assets/js/32.2e853db2.js",
    "revision": "f7556ca1a792e86b6713911949bb1c82"
  },
  {
    "url": "assets/js/33.63dfa639.js",
    "revision": "f2baf7628263e7dcf2bcd6c17f3c1d76"
  },
  {
    "url": "assets/js/34.4b36522a.js",
    "revision": "b36ca95262883aeed66f9cb15cddff85"
  },
  {
    "url": "assets/js/35.14196e62.js",
    "revision": "b5edd03daba48dcc6440f5007183ff07"
  },
  {
    "url": "assets/js/36.106b6324.js",
    "revision": "67d083b9b2f46a2a6320a77b90a6635d"
  },
  {
    "url": "assets/js/37.93cac827.js",
    "revision": "5a4fa3c3b9b3e7104140d77fc7b38f90"
  },
  {
    "url": "assets/js/38.7039f1e7.js",
    "revision": "26fb5898ca7fe3972bdca2a2915bea86"
  },
  {
    "url": "assets/js/39.d0392c21.js",
    "revision": "3c8a0aae9b1b74a41c731724e06d86c1"
  },
  {
    "url": "assets/js/4.ddf30a91.js",
    "revision": "a89f40d22c721c22af3a315ae14281b8"
  },
  {
    "url": "assets/js/40.652a3a6a.js",
    "revision": "55b8db86e2ad86ec05b93bb395ab4ab5"
  },
  {
    "url": "assets/js/41.2ca0d670.js",
    "revision": "ce0d0e11e11bb53b6467a905d6af3ba4"
  },
  {
    "url": "assets/js/42.99cdeb23.js",
    "revision": "79cd9380a714d3a5e1a60b3d2276209d"
  },
  {
    "url": "assets/js/43.47300f7f.js",
    "revision": "f7260c3f1ecdab8e3aff59d5e39c0aa7"
  },
  {
    "url": "assets/js/44.1a878856.js",
    "revision": "fc7b1796042f8eefcc4ef2b6a0094b28"
  },
  {
    "url": "assets/js/45.f5de3a94.js",
    "revision": "1d230fe4b9bc54f3982ca40f0df8b1d8"
  },
  {
    "url": "assets/js/46.bafc447f.js",
    "revision": "a23db9fbb3f6ef1c985de7fc401d636a"
  },
  {
    "url": "assets/js/47.4c6f08e3.js",
    "revision": "8d63df8979e3e77777d6c00ab18b17f7"
  },
  {
    "url": "assets/js/48.69d2c3ec.js",
    "revision": "95c708734a57b9105b6365cc2defb119"
  },
  {
    "url": "assets/js/49.4c340b17.js",
    "revision": "6d8288a97af8ff480e476de87620f2eb"
  },
  {
    "url": "assets/js/5.7c8730d9.js",
    "revision": "577bdb6cc84ab3a1a0a7d5da445a1acf"
  },
  {
    "url": "assets/js/50.34f63c52.js",
    "revision": "9ca5c020d6e8dba5584c1ff47b1bb386"
  },
  {
    "url": "assets/js/51.aa2a0233.js",
    "revision": "d9de10a19d30edd228cab958bbe32e55"
  },
  {
    "url": "assets/js/52.f174f37c.js",
    "revision": "37bc56271dc1770aa89d2e81739d9364"
  },
  {
    "url": "assets/js/53.02644394.js",
    "revision": "04bb4e57fd177f9be756d7e484cce3d9"
  },
  {
    "url": "assets/js/54.dc704ce6.js",
    "revision": "4bd7a6b6cc5b8ce4a4f1c3b234db3e82"
  },
  {
    "url": "assets/js/55.978ebe0b.js",
    "revision": "9bd7a250868517d937c15eb683687c6d"
  },
  {
    "url": "assets/js/56.8f2381b0.js",
    "revision": "779aaee97ad19a9b9c6bf390f3c85ffc"
  },
  {
    "url": "assets/js/57.de220864.js",
    "revision": "cf8804950295cb5af1cb0b31143a6675"
  },
  {
    "url": "assets/js/58.3c39c94d.js",
    "revision": "4b230fdd399ab7d90df4c33440b44519"
  },
  {
    "url": "assets/js/59.971b9d36.js",
    "revision": "6aaae02d15e7e4d21b1248252750d844"
  },
  {
    "url": "assets/js/6.c71f681a.js",
    "revision": "ff5d49dfadaca6be872e8e94cbbdd595"
  },
  {
    "url": "assets/js/60.7c4d38d2.js",
    "revision": "e796f8b204bdb766b64806eba4437de1"
  },
  {
    "url": "assets/js/61.e86b4348.js",
    "revision": "1d8a414ad12afd7218e9238c5c3b42ff"
  },
  {
    "url": "assets/js/62.13f88d5f.js",
    "revision": "0a33d9c28be889ffd67dc68f4874aea2"
  },
  {
    "url": "assets/js/63.f240216e.js",
    "revision": "44a45e59bf9da5d18bdb2fa0b0a6bf7e"
  },
  {
    "url": "assets/js/64.b571832c.js",
    "revision": "2691a3ed8d950b22815f9b82531ceecd"
  },
  {
    "url": "assets/js/65.8ccb2153.js",
    "revision": "3096d0c9746b5f67ea33e96bfbef63af"
  },
  {
    "url": "assets/js/66.815e54a2.js",
    "revision": "7973b10b0fd71269660a2a3e8271d6f9"
  },
  {
    "url": "assets/js/67.58597ed3.js",
    "revision": "c8e69eae171b476adfc23f7884fba327"
  },
  {
    "url": "assets/js/68.46f93e76.js",
    "revision": "9a748b4b0bc77e56276ad5263ad45b8e"
  },
  {
    "url": "assets/js/7.0c011446.js",
    "revision": "9fc9034fe15e07ec4764f7223c64fc3a"
  },
  {
    "url": "assets/js/8.da300eff.js",
    "revision": "34f900969b03f77571d037f60d4fea7d"
  },
  {
    "url": "assets/js/9.15ca111c.js",
    "revision": "fa8c2db25912653048822704c4fc0010"
  },
  {
    "url": "assets/js/app.dfe44ef5.js",
    "revision": "2f2e95e0dcb3dc43a71acde61a8721e3"
  },
  {
    "url": "author.jpg",
    "revision": "df2fc7455cc5663043df50d78c9329ef"
  },
  {
    "url": "blog/index.html",
    "revision": "0a1f6f9f7dd59b23e58860ad93261419"
  },
  {
    "url": "blog/page/10/index.html",
    "revision": "5fc68680c1207fc7d0cc7f11836f7e29"
  },
  {
    "url": "blog/page/11/index.html",
    "revision": "8991a695373f1779ea3c17d8993a9e80"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "ea8514c9d8c0775b0692254d314349d2"
  },
  {
    "url": "blog/page/3/index.html",
    "revision": "f84bc2616f818ae45c7af6f369843e0d"
  },
  {
    "url": "blog/page/4/index.html",
    "revision": "ff175236f5254d0b2b44bfe172b43d37"
  },
  {
    "url": "blog/page/5/index.html",
    "revision": "68954429869c42de4d9c7a9a1cd13a51"
  },
  {
    "url": "blog/page/6/index.html",
    "revision": "eed193f994b43f24f5e20be1d178e0a7"
  },
  {
    "url": "blog/page/7/index.html",
    "revision": "7ae7628468035a7559adafc00cc92102"
  },
  {
    "url": "blog/page/8/index.html",
    "revision": "2ceaf5fb0b0d9683c00ac8db02df0464"
  },
  {
    "url": "blog/page/9/index.html",
    "revision": "4cbaf07ceb8502330fbfad730bfeb464"
  },
  {
    "url": "book/index.html",
    "revision": "96ac696abbc67a25d2f81e177eb6bb49"
  },
  {
    "url": "categories/index.html",
    "revision": "97f6890570f3b5c0bb26e56f56af6901"
  },
  {
    "url": "categories/个人随笔.html",
    "revision": "ebf5eb09e89117a01864b7a9af3822e0"
  },
  {
    "url": "categories/前端技术.html",
    "revision": "3a1b39be48de6eacddb98f8fcce2bf5e"
  },
  {
    "url": "categories/前端视角.html",
    "revision": "203777bf8e962d2cd07f1713fd78110e"
  },
  {
    "url": "categories/前端资源.html",
    "revision": "f544bd936add15a28dee3717b6ea081f"
  },
  {
    "url": "categories/博客建站.html",
    "revision": "69f992cf2b8beeea07b5d6ecdd8c667a"
  },
  {
    "url": "categories/资源分享.html",
    "revision": "f53f8bd724612e246a2d4c0717143011"
  },
  {
    "url": "index.html",
    "revision": "d62a0eb50581790c714bc473c2b7efc5"
  },
  {
    "url": "logo.jpg",
    "revision": "3befeabc1b55916802dbc080530c2179"
  },
  {
    "url": "tags/Canvas.html",
    "revision": "54043e247d5fae113231641a94417c3d"
  },
  {
    "url": "tags/CSS.html",
    "revision": "177d464c9bac5d0ff854cdbafa261744"
  },
  {
    "url": "tags/css预处理器.html",
    "revision": "1512aae8ba29628654d9e33359429b03"
  },
  {
    "url": "tags/DOM.html",
    "revision": "390ac43ba1f314deac659512bdd6a592"
  },
  {
    "url": "tags/github.html",
    "revision": "666a87c4eddb7453ea9cf286f82e4319"
  },
  {
    "url": "tags/gulp.html",
    "revision": "02045fa0059c27289ef1fc4c7fd51fea"
  },
  {
    "url": "tags/hexo.html",
    "revision": "49d6d3d1004ee4618532a7ceef962f2c"
  },
  {
    "url": "tags/html.html",
    "revision": "dd96891c361e7aefd0a4692a54009d7e"
  },
  {
    "url": "tags/index.html",
    "revision": "654a61f1f348b88f3f2e9590b45edf5e"
  },
  {
    "url": "tags/JavaScript.html",
    "revision": "3dc120c0fbdf6ac8410ca34f3e6ddd50"
  },
  {
    "url": "tags/markdown.html",
    "revision": "ae6956c8e2496af3247834dcea48eb71"
  },
  {
    "url": "tags/next.html",
    "revision": "644ee7822f7c85bf079f7188523aee6f"
  },
  {
    "url": "tags/sass.html",
    "revision": "99429cc355a211af44d8ec52d9ab000f"
  },
  {
    "url": "tags/sublimetext.html",
    "revision": "78ede6d305d00c373252dd3f692e155e"
  },
  {
    "url": "tags/VSCode.html",
    "revision": "68d8d064c0bb4fc96b3a8677983148df"
  },
  {
    "url": "tags/VuePress.html",
    "revision": "53b4f597c147046a1cf3669e9f1b44cf"
  },
  {
    "url": "tags/web前端.html",
    "revision": "0c227f6f91af2b8f63e2b5582afea529"
  },
  {
    "url": "tags/yilia.html",
    "revision": "e105681a3f889e95d20c7c04915a5299"
  },
  {
    "url": "tags/人生历程.html",
    "revision": "5d789e340ee9741fb41b2f9def5e3a29"
  },
  {
    "url": "tags/博客前言.html",
    "revision": "7d2d728edb94a5d6600b5333d72d4f7d"
  },
  {
    "url": "tags/博客版本更迭.html",
    "revision": "a0900e287d87b63f5440ffda54db7a59"
  },
  {
    "url": "tags/响应式.html",
    "revision": "3c602a750ac6a8df1e9772fba8571d3f"
  },
  {
    "url": "tags/开发工具.html",
    "revision": "b44623cef5aa8585cbce0d1dcb3e7a7f"
  },
  {
    "url": "tags/插件.html",
    "revision": "69bb8faa8142d54ba0925791106c4b27"
  },
  {
    "url": "tags/搭建博客.html",
    "revision": "62c8d42b54d0ef1daee735d36ad62fe6"
  },
  {
    "url": "tags/框架原理.html",
    "revision": "48bf51093cd5b2fddd78e5c1ac8c5f12"
  },
  {
    "url": "tags/浏览器.html",
    "revision": "0f11b990af8e8cfc8a9c4710810fc6aa"
  },
  {
    "url": "tags/移动端.html",
    "revision": "67ff5cf1e36f6d85c76000c0c3861ed0"
  },
  {
    "url": "tags/编码规范.html",
    "revision": "8f7d4ea9e5fc55e7ffbc80a460d8efa7"
  },
  {
    "url": "tags/编辑器.html",
    "revision": "ea8adf7875017f47c0b1f0210e4a5f99"
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
