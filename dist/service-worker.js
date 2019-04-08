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
    "revision": "46e18c038d4bd810d263cb07618e54b1"
  },
  {
    "url": "2017/07/gulp-自动化构建工具/index.html",
    "revision": "7bbffbc4b03c717a16a89770fa311271"
  },
  {
    "url": "2017/07/markdown语法/index.html",
    "revision": "5ed2ae44866d71258b47d15d014791ca"
  },
  {
    "url": "2017/08/初学者资源推荐/index.html",
    "revision": "3bea038a6afc10c6d9d478ef0db2e919"
  },
  {
    "url": "2017/08/去除inline-block元素间间距的n种方法/index.html",
    "revision": "55a31780f6f66b759887ee7a9c1e0a99"
  },
  {
    "url": "2017/09/githubpages-hexo-搭建个人博客/index.html",
    "revision": "5fecda339d8f9ef1f2f348ec9ffddd3d"
  },
  {
    "url": "2017/09/hello-world/index.html",
    "revision": "c2af601a98b8a6f82383de80239e51ce"
  },
  {
    "url": "2017/09/hexo-next主题高级配置/index.html",
    "revision": "43c0e547669c84e17b146ec15dcd5de3"
  },
  {
    "url": "2017/09/hexo-yilia主题-githubpages博客添加友言评论功能/index.html",
    "revision": "e9ff08aceef5dc9539f96e2bdaffde8c"
  },
  {
    "url": "2017/09/javascript-面向对象编程/index.html",
    "revision": "ff1fe6242b50f78f2c78aeef0776ec93"
  },
  {
    "url": "2017/09/sublimetext-实用插件介绍/index.html",
    "revision": "4a7cd2c591ec6f668f50d413bcf6e151"
  },
  {
    "url": "2017/10/canvas画布/index.html",
    "revision": "6930d3476ade55055494fd64d9b3968f"
  },
  {
    "url": "2017/10/css实现元素的居中显示/index.html",
    "revision": "3938f2181e973b7a2b219080d4fdde5e"
  },
  {
    "url": "2017/10/css渐变的简单使用/index.html",
    "revision": "0acb0293a48a994fe31c134ca6362eea"
  },
  {
    "url": "2017/10/sass的使用/index.html",
    "revision": "979bfd5bc6410893436d5feff0495f6d"
  },
  {
    "url": "2017/10/transform-引起的-z-index-失效‘/index.html",
    "revision": "6732cdaefd27913fdc3031256abdb986"
  },
  {
    "url": "2017/10/像素与viewport概念/index.html",
    "revision": "8cc272dda6d4f599ebe36500bebd0801"
  },
  {
    "url": "2017/10/关于flex布局/index.html",
    "revision": "a8da7e16e81f9836231e6745c8535e72"
  },
  {
    "url": "2017/10/关于inline-block问题/index.html",
    "revision": "76cbfefa9dc53ef97f0e46552fafa196"
  },
  {
    "url": "2017/10/浅谈响应式/index.html",
    "revision": "26d4a11a627a1040c36a8a8fa3fc6f4f"
  },
  {
    "url": "2017/10/深入理解层叠上下文和层叠顺序/index.html",
    "revision": "76ed7e49b02e08bf6d986894ceddf49f"
  },
  {
    "url": "2017/10/给不了解前端的同学讲前端/index.html",
    "revision": "c31b6b756a5a8a7c25d2842783d4b696"
  },
  {
    "url": "2017/10/编码规范-（一）html/index.html",
    "revision": "2eb74cade62bd8c4c40cc560bc0cd397"
  },
  {
    "url": "2017/10/编码规范（二）css/index.html",
    "revision": "81783802b720a8af9fef6ff084b3325f"
  },
  {
    "url": "2017/10/说说css学习中的瓶颈/index.html",
    "revision": "bfb64243341953e95912068f093204bd"
  },
  {
    "url": "2017/11/canvas画五角星/index.html",
    "revision": "1602d86875be736dc3941e494265549a"
  },
  {
    "url": "2017/11/canvas画时钟/index.html",
    "revision": "c0fadb271efae22097e5633450c13552"
  },
  {
    "url": "2017/11/js类型转换总结/index.html",
    "revision": "00e95dc713154cbaaae8a3283a020274"
  },
  {
    "url": "2017/12/eslint-（一）简介与安装/index.html",
    "revision": "f05a468b154302edaad0109671a6933b"
  },
  {
    "url": "2017/12/eslint-（二）配置文件/index.html",
    "revision": "c1762a58722ab65e7813342f06620ec4"
  },
  {
    "url": "2017/12/markdown添加latex数学公式/index.html",
    "revision": "e7e8d2ec121773e935704e196bd70166"
  },
  {
    "url": "2017/12/前端学习历程/index.html",
    "revision": "02be2b2ff661de394ee65b22960c95f2"
  },
  {
    "url": "2018/06/荔园的浪漫/index.html",
    "revision": "73e74f12c85340d2b504c0daec4f1aac"
  },
  {
    "url": "2018/07/js变量的创建机制/index.html",
    "revision": "5987ee06d347d76dfdcb52161441efb3"
  },
  {
    "url": "2018/08/dom的映射机制/index.html",
    "revision": "07d73fe50ad1d8e3283b289acdd8bd07"
  },
  {
    "url": "2018/08/js作用域与作用域链/index.html",
    "revision": "534e3f37f9b326b48ffef70d7a193d46"
  },
  {
    "url": "2018/08/js变量提升/index.html",
    "revision": "0845a5c203e0212fa0234af5e429b269"
  },
  {
    "url": "2018/08/js堆栈内存/index.html",
    "revision": "1837d7a90530f747cf19d51a74ac83e9"
  },
  {
    "url": "2018/08/记第一次博客改版更新/index.html",
    "revision": "4d0ae1888112777f6fb408926264034b"
  },
  {
    "url": "2018/09/js函数/index.html",
    "revision": "30c1e9f938cc6e32c48c0abfafb0f59a"
  },
  {
    "url": "2018/09/js函数的执行机制/index.html",
    "revision": "4974605e1381939620e0cd5d70c86471"
  },
  {
    "url": "2018/10/js运算符的优先级/index.html",
    "revision": "8fcebc28fd547c55dc198596611217c6"
  },
  {
    "url": "2018/12/前端工程师的未来在哪里/index.html",
    "revision": "8fd1659e2ba1c629b9bd127c68aedcc2"
  },
  {
    "url": "2019/02/chrome插件英雄榜/index.html",
    "revision": "8e21f5af7b726515d5df31eda8784a25"
  },
  {
    "url": "2019/02/js中扯不完的分号问题/index.html",
    "revision": "acdbc3fd235fe4a5368403d36a8d546a"
  },
  {
    "url": "2019/02/mvc-mvp-mvvm-图示（转）/index.html",
    "revision": "ff148659a6b0a5e1cc65d6fc6bb65db4"
  },
  {
    "url": "2019/02/vscode插件之polaroid/index.html",
    "revision": "5be826492eca295b5b62247403d2b026"
  },
  {
    "url": "2019/02/vuepress入门/index.html",
    "revision": "9e8f7361b5cebe056f87c87b7c8ff021"
  },
  {
    "url": "2019/02/前端学习知识图谱/index.html",
    "revision": "3e89d54b07e38fc7ddf62007969d2b36"
  },
  {
    "url": "2019/02/浅谈fc/index.html",
    "revision": "99c1826a697f0c24372e61f09975a6d9"
  },
  {
    "url": "2019/03/机械键盘介绍/index.html",
    "revision": "721840eb28c91acf34a39f057df9882e"
  },
  {
    "url": "404.html",
    "revision": "fd67119273327e9901f3edcb4916b000"
  },
  {
    "url": "about/index.html",
    "revision": "788f57fd27b8e08cfa5a081ddfc47e9c"
  },
  {
    "url": "assets/css/0.styles.88bd9336.css",
    "revision": "88b95ea525ecbdff416b8d4a142a01cf"
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
    "url": "assets/js/15.86ad8721.js",
    "revision": "8c2534d521761a4c74ab74553b4d867e"
  },
  {
    "url": "assets/js/16.d4da88fe.js",
    "revision": "bdf102bcce375268ce16998d3f91becb"
  },
  {
    "url": "assets/js/17.dff08d49.js",
    "revision": "925c13c9b6ce6b860e7534f6c5974e6e"
  },
  {
    "url": "assets/js/18.85d1b053.js",
    "revision": "c6af2308c4ced96823af95290660020d"
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
    "url": "assets/js/25.75de80ce.js",
    "revision": "81aeb7413fc7b7b53d17d6515aa2e87e"
  },
  {
    "url": "assets/js/26.77b7f167.js",
    "revision": "03e2cf8061f3c428a632c252a0079af0"
  },
  {
    "url": "assets/js/27.7bf16e08.js",
    "revision": "e6bdd212d986438004881067b73f4717"
  },
  {
    "url": "assets/js/28.014ded84.js",
    "revision": "6ff55adcb5d4365be455c553c1332374"
  },
  {
    "url": "assets/js/29.dae4f246.js",
    "revision": "5b3dc8d050b6152e4662d1c5a2dd5f98"
  },
  {
    "url": "assets/js/30.d8e72402.js",
    "revision": "145442ae66d2753854255442a67ae3ee"
  },
  {
    "url": "assets/js/31.77e72d6d.js",
    "revision": "356e5e0bac1bc656b073040792153a2c"
  },
  {
    "url": "assets/js/32.df52bddb.js",
    "revision": "7bf903fc9a8b6d4673387be4e02fc1fa"
  },
  {
    "url": "assets/js/33.11d2e97a.js",
    "revision": "b72f99a5f02a7b49524131c59242267c"
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
    "url": "assets/js/42.e1252cc3.js",
    "revision": "e55e2998202605d50b6f9c1fc5cdfe9f"
  },
  {
    "url": "assets/js/43.3976d34f.js",
    "revision": "f7ef63ae4007718cbab191c04e36840b"
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
    "url": "assets/js/49.4eb01fed.js",
    "revision": "11ce3fbe58066a294f55873e8c135d36"
  },
  {
    "url": "assets/js/5.7c8730d9.js",
    "revision": "577bdb6cc84ab3a1a0a7d5da445a1acf"
  },
  {
    "url": "assets/js/50.689e44f5.js",
    "revision": "71aadf0acd239bb1783dd1f98b334aa3"
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
    "url": "assets/js/53.33e4de5f.js",
    "revision": "53ae2be2979d8613bc58dbcb2e51b72c"
  },
  {
    "url": "assets/js/54.c29fae21.js",
    "revision": "81bb217613785b2e2d4aa41cc55dbd2a"
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
    "url": "assets/js/61.fc54751c.js",
    "revision": "a36236199ecc03ce2cf53b73666d5b5c"
  },
  {
    "url": "assets/js/62.fc25e027.js",
    "revision": "c6879a7ab695c0160734053413eb00b8"
  },
  {
    "url": "assets/js/63.32f8da72.js",
    "revision": "a84d6be3d1b989d02a95dfa4ab8ae4a9"
  },
  {
    "url": "assets/js/64.fa60541c.js",
    "revision": "069f591d9351dd0a37d6389edef999b2"
  },
  {
    "url": "assets/js/65.071b63b0.js",
    "revision": "181e67e9c0b04a17daa72cca023ba768"
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
    "url": "assets/js/app.980fcd85.js",
    "revision": "868c0f0be10f67e039c172d2d4d6b202"
  },
  {
    "url": "author.jpg",
    "revision": "df2fc7455cc5663043df50d78c9329ef"
  },
  {
    "url": "blog/index.html",
    "revision": "d1e124641ad86ee14a0e181877569bfc"
  },
  {
    "url": "blog/page/10/index.html",
    "revision": "45ac1617cba4c8fee0b428edf1d1c200"
  },
  {
    "url": "blog/page/11/index.html",
    "revision": "0d146a8a75a095eb9daa7aeeb0de480c"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "895c59c0f90321e28f6fdcbd7872cebe"
  },
  {
    "url": "blog/page/3/index.html",
    "revision": "542f262b336505cea2f5b1443e9113cf"
  },
  {
    "url": "blog/page/4/index.html",
    "revision": "de8c4be05c09c41458778cee2afc7d59"
  },
  {
    "url": "blog/page/5/index.html",
    "revision": "50632c5e2cc3a509e3b170f62321a00b"
  },
  {
    "url": "blog/page/6/index.html",
    "revision": "186c6d4facc57383e46896385260527c"
  },
  {
    "url": "blog/page/7/index.html",
    "revision": "9aab2fec78d4f2b6f9944fce8c39c3b2"
  },
  {
    "url": "blog/page/8/index.html",
    "revision": "ef549a3c24b128951c7a631a6343fc02"
  },
  {
    "url": "blog/page/9/index.html",
    "revision": "32852529b1fb2fb139f09311128eb76b"
  },
  {
    "url": "book/index.html",
    "revision": "d824d9bd1cc65f4c0f4ebe431a2b09c7"
  },
  {
    "url": "categories/index.html",
    "revision": "4b695db8b26a57abced4bb86a3dfd242"
  },
  {
    "url": "categories/个人随笔.html",
    "revision": "9df7b883aeb696fdf3535599707c768c"
  },
  {
    "url": "categories/前端技术.html",
    "revision": "76881caca166ad1e4435a684c9dab6d0"
  },
  {
    "url": "categories/前端视角.html",
    "revision": "b8bb288a6dfccd8b4a73e99d98867d13"
  },
  {
    "url": "categories/前端资源.html",
    "revision": "51c1be1fde8c54990611df8cacb6a320"
  },
  {
    "url": "categories/博客建站.html",
    "revision": "b03870c6fb1e4c5cce9e976997f278aa"
  },
  {
    "url": "categories/资源分享.html",
    "revision": "9d88d6881b6ffd304bc9c928de6e1c73"
  },
  {
    "url": "index.html",
    "revision": "88bdf14cf0bfae24ff0ceb6c62e2ffc4"
  },
  {
    "url": "logo.jpg",
    "revision": "3befeabc1b55916802dbc080530c2179"
  },
  {
    "url": "tags/Canvas.html",
    "revision": "cf07e022bf331c82906f266ea8ae618b"
  },
  {
    "url": "tags/CSS.html",
    "revision": "c37c3d5498385507785b42aaea23d227"
  },
  {
    "url": "tags/css预处理器.html",
    "revision": "069cb871c54a992b0a1155cef8169e0b"
  },
  {
    "url": "tags/DOM.html",
    "revision": "10ad10b51fdeed8a6b9a3bb130a70a22"
  },
  {
    "url": "tags/github.html",
    "revision": "0676ca6abd68c4b96a6fd9695c8eaa76"
  },
  {
    "url": "tags/gulp.html",
    "revision": "efbc9cc775f4f4082feccc4224028f1e"
  },
  {
    "url": "tags/hexo.html",
    "revision": "758172a2963230e45162a1e7587a4475"
  },
  {
    "url": "tags/html.html",
    "revision": "b4935e34f131810f71adc92791069c42"
  },
  {
    "url": "tags/index.html",
    "revision": "4004c4877c8c5fc46bd174019ba8cbfb"
  },
  {
    "url": "tags/JavaScript.html",
    "revision": "b47723d3b3d90648f61b9151ffdd40b7"
  },
  {
    "url": "tags/markdown.html",
    "revision": "d9339ee4d8b2990795e2376611ec9a2e"
  },
  {
    "url": "tags/next.html",
    "revision": "4cf67bdad353b75de4eed582a57c2b52"
  },
  {
    "url": "tags/sass.html",
    "revision": "836303c804bca3464d9aa6804020ad8a"
  },
  {
    "url": "tags/sublimetext.html",
    "revision": "44b54555e90efabc7289376488d02b22"
  },
  {
    "url": "tags/VSCode.html",
    "revision": "18f3fb1d3118fde3bb5c67d9acf8a203"
  },
  {
    "url": "tags/VuePress.html",
    "revision": "28cf25cc674865e7fd7ef0ec2a910200"
  },
  {
    "url": "tags/web前端.html",
    "revision": "ca040e86896e58ab90d794c555481f96"
  },
  {
    "url": "tags/yilia.html",
    "revision": "a20e9b9f628a2f96b3f69c1f54265854"
  },
  {
    "url": "tags/人生历程.html",
    "revision": "3b961f4ceb18aa213f742e6906b5d3cb"
  },
  {
    "url": "tags/博客前言.html",
    "revision": "1503bfdb3720eb5be6287215040cb183"
  },
  {
    "url": "tags/博客版本更迭.html",
    "revision": "ff2846ef83fa76d6897cb5632baeae5c"
  },
  {
    "url": "tags/响应式.html",
    "revision": "7f78f860b414889d5f710da9b1c0d0f2"
  },
  {
    "url": "tags/开发工具.html",
    "revision": "22d92d66b515a1172805db05100ec685"
  },
  {
    "url": "tags/插件.html",
    "revision": "bf16e078d6a03e8f0491dc9d2c53c3f3"
  },
  {
    "url": "tags/搭建博客.html",
    "revision": "a102bdce4f20643423c3552bbcb5a797"
  },
  {
    "url": "tags/框架原理.html",
    "revision": "f58b7217abdce18e7f519cf7c497d8f3"
  },
  {
    "url": "tags/浏览器.html",
    "revision": "fe1ff2d383f474f520ef7659ed110429"
  },
  {
    "url": "tags/移动端.html",
    "revision": "37ac675001e8c3563a45d53a3c1c03a1"
  },
  {
    "url": "tags/编码规范.html",
    "revision": "6a433266bafcf56a3d461abfbd9efe49"
  },
  {
    "url": "tags/编辑器.html",
    "revision": "9bdfc26100c1aad51e658fc3438161c2"
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
