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
    "revision": "35e31bf8e1d830f89fa90281e315fd1f"
  },
  {
    "url": "2017/07/gulp-自动化构建工具/index.html",
    "revision": "33df177dbdb980c803267446e8d25330"
  },
  {
    "url": "2017/07/markdown语法/index.html",
    "revision": "682afac0272b73eb4a4ff3e833d2b2ef"
  },
  {
    "url": "2017/08/初学者资源推荐/index.html",
    "revision": "03ebd4ea582a10d3fe22cd15cb725058"
  },
  {
    "url": "2017/08/去除inline-block元素间间距的n种方法/index.html",
    "revision": "47a8b95d98d61d89b5e62fcd5553bff3"
  },
  {
    "url": "2017/09/githubpages-hexo-搭建个人博客/index.html",
    "revision": "a0e3f49e8f1b67fed2052f2df05af8d3"
  },
  {
    "url": "2017/09/hello-world/index.html",
    "revision": "9ca7b6159cfa1725d55f0a002c6fbc84"
  },
  {
    "url": "2017/09/hexo-next主题高级配置/index.html",
    "revision": "69d12e3df10bc7c7fe9e0657d6338898"
  },
  {
    "url": "2017/09/hexo-yilia主题-githubpages博客添加友言评论功能/index.html",
    "revision": "4952bdba1a49d619dfe126b7a583f0ce"
  },
  {
    "url": "2017/09/javascript-面向对象编程/index.html",
    "revision": "979b7b61aa85ae85de6cdcac1578ed76"
  },
  {
    "url": "2017/09/sublimetext-实用插件介绍/index.html",
    "revision": "88ed803e81507ffaacdf27e36fbda486"
  },
  {
    "url": "2017/10/canvas画布/index.html",
    "revision": "9ebb80c5c906bb4b03a81f12d92c7c58"
  },
  {
    "url": "2017/10/css实现元素的居中显示/index.html",
    "revision": "0639a59b12ddcaa10cc342beb2ce751f"
  },
  {
    "url": "2017/10/css渐变的简单使用/index.html",
    "revision": "63cbce9924e129132477587995e5ba1f"
  },
  {
    "url": "2017/10/sass的使用/index.html",
    "revision": "d3fc92fbf7734614c2f94492faebbe48"
  },
  {
    "url": "2017/10/transform-引起的-z-index-失效‘/index.html",
    "revision": "fc4c66e00dfae086046b630669c6cfca"
  },
  {
    "url": "2017/10/像素与viewport概念/index.html",
    "revision": "d5ce535c4a41c454bbc2aec833afb5d7"
  },
  {
    "url": "2017/10/关于flex布局/index.html",
    "revision": "b1636da08da91eafb9f00ba3cd189050"
  },
  {
    "url": "2017/10/关于inline-block问题/index.html",
    "revision": "6fa861ea79badaf8bfe6a7e605f026c2"
  },
  {
    "url": "2017/10/浅谈响应式/index.html",
    "revision": "8377ecc6bcb740bc7d96467edf998908"
  },
  {
    "url": "2017/10/深入理解层叠上下文和层叠顺序/index.html",
    "revision": "3664267b4e3682afc57791938d177021"
  },
  {
    "url": "2017/10/给不了解前端的同学讲前端/index.html",
    "revision": "aea4b4bf60f64df3aac71ffcfba6970b"
  },
  {
    "url": "2017/10/编码规范-（一）html/index.html",
    "revision": "416c1894272512e8bf748578c371c4f4"
  },
  {
    "url": "2017/10/编码规范（二）css/index.html",
    "revision": "1fabf97aabecbe2d1bd4ffec8f314bd5"
  },
  {
    "url": "2017/10/说说css学习中的瓶颈/index.html",
    "revision": "970d69e670b4b390532a9ac66db2630c"
  },
  {
    "url": "2017/11/canvas画五角星/index.html",
    "revision": "5d598977c6a788bce256374f1c1debab"
  },
  {
    "url": "2017/11/canvas画时钟/index.html",
    "revision": "0dc11d92587006fad97767ab86e1dfe8"
  },
  {
    "url": "2017/11/js类型转换总结/index.html",
    "revision": "a7a8cf430a8915804380aa8470d67bed"
  },
  {
    "url": "2017/12/eslint-（一）简介与安装/index.html",
    "revision": "cfe52474eab28dd7c8566499bc50b569"
  },
  {
    "url": "2017/12/eslint-（二）配置文件/index.html",
    "revision": "ab196dc932aade99e5972d788df70508"
  },
  {
    "url": "2017/12/markdown添加latex数学公式/index.html",
    "revision": "54e2e9eae1079eac3d113bb18f61144d"
  },
  {
    "url": "2017/12/前端学习历程/index.html",
    "revision": "cf7b0cd55f18efd9e075e3e384ece170"
  },
  {
    "url": "2018/06/荔园的浪漫/index.html",
    "revision": "3bcbf0bce5a9f89ddb4e2593c2226d74"
  },
  {
    "url": "2018/07/js变量的创建机制/index.html",
    "revision": "c79c14cf05f4b50ed8ac5807f0d17528"
  },
  {
    "url": "2018/08/dom的映射机制/index.html",
    "revision": "7fa39ab75c59a55e4e95eeb8d0ef8010"
  },
  {
    "url": "2018/08/js作用域与作用域链/index.html",
    "revision": "71ea5bd20d9c52ec6df68238e079d1f4"
  },
  {
    "url": "2018/08/js变量提升/index.html",
    "revision": "d68c59be099f514cea43044675f166a9"
  },
  {
    "url": "2018/08/js堆栈内存/index.html",
    "revision": "2048c01cf0558013ad387518b4316343"
  },
  {
    "url": "2018/08/记第一次博客改版更新/index.html",
    "revision": "a34a497a6f99587cb3316676b91a699e"
  },
  {
    "url": "2018/09/js函数/index.html",
    "revision": "dee2d0773f38a005bc8889840c4c04c3"
  },
  {
    "url": "2018/09/js函数的执行机制/index.html",
    "revision": "0e36962c99842722c33288dd8f17b2d0"
  },
  {
    "url": "2018/10/js运算符的优先级/index.html",
    "revision": "6ee307ecb965b227be4f731e60703666"
  },
  {
    "url": "2018/12/前端工程师的未来在哪里/index.html",
    "revision": "1f943c3334aefd4e2042ab9588815dcd"
  },
  {
    "url": "2019/02/chrome插件英雄榜/index.html",
    "revision": "b09543ed4e130759cce33adbe4b4d3bc"
  },
  {
    "url": "2019/02/js中扯不完的分号问题/index.html",
    "revision": "15e3b4d05233d53fbf1f31e52d123354"
  },
  {
    "url": "2019/02/mvc-mvp-mvvm-图示（转）/index.html",
    "revision": "4390d20544a69314f715481cf8d07c0f"
  },
  {
    "url": "2019/02/vscode插件之polaroid/index.html",
    "revision": "5838f98f81cb1f8162be29916207c22b"
  },
  {
    "url": "2019/02/vuepress入门/index.html",
    "revision": "f9282898d017bc3c8a5eda1771fba181"
  },
  {
    "url": "2019/02/前端学习知识图谱/index.html",
    "revision": "56be163e9363ce7cc15a3294b88ad1c2"
  },
  {
    "url": "2019/02/浅谈fc/index.html",
    "revision": "30a78fb327bcbe91952e98024ce7b21b"
  },
  {
    "url": "2019/03/机械键盘介绍/index.html",
    "revision": "5ed25494326b291092265dd9b6bfcbe1"
  },
  {
    "url": "404.html",
    "revision": "95a8512db7fbd3d74cffef33165070a8"
  },
  {
    "url": "about/index.html",
    "revision": "f88e53b427d6ac3a7da35171976ca96d"
  },
  {
    "url": "assets/css/0.styles.ac0ead7c.css",
    "revision": "5581d4008febf50b1048b20e227fd48d"
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
    "url": "assets/js/14.dc043a81.js",
    "revision": "1b4f011d7f6541704604e7d3198b1762"
  },
  {
    "url": "assets/js/15.25ee5071.js",
    "revision": "edf6948062cc8d77664b585b51792be7"
  },
  {
    "url": "assets/js/16.797eed80.js",
    "revision": "ba2d421e8c0fe61a2a07b8e4b3ee0fcd"
  },
  {
    "url": "assets/js/17.f19003c6.js",
    "revision": "0d6fd7671c6dc7afde30dc78bfa1bc23"
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
    "url": "assets/js/26.15eb3241.js",
    "revision": "4f4ffbe2feff8b755ef4385d6a8aec67"
  },
  {
    "url": "assets/js/27.95843651.js",
    "revision": "d7c19432662a4e8be75c0dd3a3d3b9eb"
  },
  {
    "url": "assets/js/28.014ded84.js",
    "revision": "6ff55adcb5d4365be455c553c1332374"
  },
  {
    "url": "assets/js/29.95cc5dfc.js",
    "revision": "8149700138251bb3be020f8575932dc1"
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
    "url": "assets/js/35.1d4f1c80.js",
    "revision": "0962773e681c1aa1fa468232504ad632"
  },
  {
    "url": "assets/js/36.81f757b5.js",
    "revision": "3ff186f6d984f7140b63fd4319d17a6a"
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
    "url": "assets/js/46.1c286370.js",
    "revision": "8d284644bc5537f5ba019e1952c0f37e"
  },
  {
    "url": "assets/js/47.34951ff6.js",
    "revision": "997df48d1a2d7126436f9ae6e656b606"
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
    "url": "assets/js/66.d12f9a4f.js",
    "revision": "3558ad1ee160ac4bce63e52d7b5495db"
  },
  {
    "url": "assets/js/67.bc758099.js",
    "revision": "05307ca6b99cab5c415a2ff337b40200"
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
    "url": "assets/js/app.ccfd2bda.js",
    "revision": "96a068bc298ebff8aef3f420132c0f67"
  },
  {
    "url": "author.jpg",
    "revision": "df2fc7455cc5663043df50d78c9329ef"
  },
  {
    "url": "blog/index.html",
    "revision": "9466125493cffb4926a02a13122b7f10"
  },
  {
    "url": "blog/page/10/index.html",
    "revision": "65a4b7836b76beef27d7664d1629774f"
  },
  {
    "url": "blog/page/11/index.html",
    "revision": "c9db2acbf5751037476f541880e90ada"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "42cc4ae115ed86979416f56ef92e0fd2"
  },
  {
    "url": "blog/page/3/index.html",
    "revision": "993fa81cc527b226d47fb211aee19355"
  },
  {
    "url": "blog/page/4/index.html",
    "revision": "66805ae8793be8cf54ac6827ab5ef113"
  },
  {
    "url": "blog/page/5/index.html",
    "revision": "89eef13b57cece298077a8f5aa4f2fbc"
  },
  {
    "url": "blog/page/6/index.html",
    "revision": "7982414902f0dabbde8eabfde4969efb"
  },
  {
    "url": "blog/page/7/index.html",
    "revision": "2c7ee4e986e3708b72fa609699d82bc2"
  },
  {
    "url": "blog/page/8/index.html",
    "revision": "d1ab6fc31ffa92d781a25992322cf2e8"
  },
  {
    "url": "blog/page/9/index.html",
    "revision": "713c4fd495c3d003fb76e7d1de400fff"
  },
  {
    "url": "book/index.html",
    "revision": "53e29551001eca5a89119892c8a3b922"
  },
  {
    "url": "categories/index.html",
    "revision": "8077b592831ebb5504b72ff819333d9a"
  },
  {
    "url": "categories/个人随笔.html",
    "revision": "a897ccc9b3730b0b6c37208f275d962e"
  },
  {
    "url": "categories/前端技术.html",
    "revision": "e646f23cb5a02c50c68aa6d1aff7877c"
  },
  {
    "url": "categories/前端视角.html",
    "revision": "39d3159e44681a900a079b1990d38170"
  },
  {
    "url": "categories/前端资源.html",
    "revision": "21630cd50f09ebdae99d8103d40ec9e4"
  },
  {
    "url": "categories/博客建站.html",
    "revision": "9e22a9f393e5916d2ae777aa2982e060"
  },
  {
    "url": "categories/资源分享.html",
    "revision": "3d91cda8d151f7f45770c472ba258d37"
  },
  {
    "url": "index.html",
    "revision": "339b9586541451e9b243796607f53497"
  },
  {
    "url": "logo.jpg",
    "revision": "3befeabc1b55916802dbc080530c2179"
  },
  {
    "url": "tags/Canvas.html",
    "revision": "05c179ceed8d178552e32d871c620b3a"
  },
  {
    "url": "tags/CSS.html",
    "revision": "ed162d633d5c4f22b1edab50df5be50e"
  },
  {
    "url": "tags/css预处理器.html",
    "revision": "7931b7ceb46d1089eb89810d5ce5c62b"
  },
  {
    "url": "tags/DOM.html",
    "revision": "9286e5dd4cb0f7d8baff3073704792d2"
  },
  {
    "url": "tags/github.html",
    "revision": "c028f3bb8f90485614b0041d2c9949ba"
  },
  {
    "url": "tags/gulp.html",
    "revision": "f5b8b9d3978497cda32c730d5b27028f"
  },
  {
    "url": "tags/hexo.html",
    "revision": "3133aea976282b5823330a1715671843"
  },
  {
    "url": "tags/html.html",
    "revision": "5a0c504d3253c4264c1c95b1b5069a7f"
  },
  {
    "url": "tags/index.html",
    "revision": "b8d56ab0b442c9fe004c126b39a38c7c"
  },
  {
    "url": "tags/JavaScript.html",
    "revision": "be5d059316a888e7e81a29a69baf4809"
  },
  {
    "url": "tags/markdown.html",
    "revision": "7e6e62b663b2fa5ebe80dae09bc93331"
  },
  {
    "url": "tags/next.html",
    "revision": "b7340c8cf22cb8b11d18feaf668306ea"
  },
  {
    "url": "tags/sass.html",
    "revision": "6d1b581fcc03a62ad5b6deb9b6bb9733"
  },
  {
    "url": "tags/sublimetext.html",
    "revision": "e07cbbf5048873720c715c4219e3b985"
  },
  {
    "url": "tags/VSCode.html",
    "revision": "2991cbbeb47f3f544e201183d9534388"
  },
  {
    "url": "tags/VuePress.html",
    "revision": "c1f1ed806bd72f48cb8dc86c878af308"
  },
  {
    "url": "tags/web前端.html",
    "revision": "128c283b7d4784949394a2fcf68a7c84"
  },
  {
    "url": "tags/yilia.html",
    "revision": "82b0a50a23bfbf5097c006a9c9ccdeee"
  },
  {
    "url": "tags/人生历程.html",
    "revision": "493e308f20a96b7b49e42ac0f6946b50"
  },
  {
    "url": "tags/博客前言.html",
    "revision": "f0bf7edae9bb7b830baeab5bddd9496b"
  },
  {
    "url": "tags/博客版本更迭.html",
    "revision": "23956d0b2cb4a4886665b93ca974b33a"
  },
  {
    "url": "tags/响应式.html",
    "revision": "1f5c2aff499cb01935b13f87d049dc75"
  },
  {
    "url": "tags/开发工具.html",
    "revision": "af3beeb636b67828cba612dac52dd576"
  },
  {
    "url": "tags/插件.html",
    "revision": "81edd7f32b10ae21e0152050c99c459f"
  },
  {
    "url": "tags/搭建博客.html",
    "revision": "83c56c2a202f8cff062f6fb55ef4de3b"
  },
  {
    "url": "tags/框架原理.html",
    "revision": "4e2efc061ae0245f81a0fabf475d7dc0"
  },
  {
    "url": "tags/浏览器.html",
    "revision": "918ac26ef4fd35e470641045124eb987"
  },
  {
    "url": "tags/移动端.html",
    "revision": "ec320f15b7cf981e2bb345624f64b1bc"
  },
  {
    "url": "tags/编码规范.html",
    "revision": "f4d75cb4d416e6444f74d43fdd7e8eb3"
  },
  {
    "url": "tags/编辑器.html",
    "revision": "edb9319e99f2801105b9bc4fe5d1a145"
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
