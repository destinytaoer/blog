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
    "revision": "5bb582a2e12e3f88048f8996500705eb"
  },
  {
    "url": "2017/07/gulp-自动化构建工具/index.html",
    "revision": "924efdfbecc0ea45a48e7caf17abfafb"
  },
  {
    "url": "2017/07/markdown语法/index.html",
    "revision": "d50cb14efaab5d36dd941df089024dd6"
  },
  {
    "url": "2017/08/初学者资源推荐/index.html",
    "revision": "4e06fe862d73070e141560c9d7af8c56"
  },
  {
    "url": "2017/08/去除inline-block元素间间距的n种方法/index.html",
    "revision": "bdff8b95c2dd9584954207039176ff80"
  },
  {
    "url": "2017/09/githubpages-hexo-搭建个人博客/index.html",
    "revision": "679ed3c23df3b5e4f797c65424c41807"
  },
  {
    "url": "2017/09/hello-world/index.html",
    "revision": "bc2a1dc2d677f1de792a4aac2957cec6"
  },
  {
    "url": "2017/09/hexo-next主题高级配置/index.html",
    "revision": "a750ad63c613691f3ba0057b4a624b2b"
  },
  {
    "url": "2017/09/hexo-yilia主题-githubpages博客添加友言评论功能/index.html",
    "revision": "965bd70b27fd7b2a027dba42d7e79c6a"
  },
  {
    "url": "2017/09/javascript-面向对象编程/index.html",
    "revision": "576874910526062ff462e19c7e2a4d97"
  },
  {
    "url": "2017/09/sublimetext-实用插件介绍/index.html",
    "revision": "6d38694981521a86644eb2d4524aa3df"
  },
  {
    "url": "2017/10/canvas画布/index.html",
    "revision": "6805eafb1d409d5e8e2ebcfdd9f82539"
  },
  {
    "url": "2017/10/css实现元素的居中显示/index.html",
    "revision": "cdf9d84979b0185e0846ebfffceffc23"
  },
  {
    "url": "2017/10/css渐变的简单使用/index.html",
    "revision": "47b35ff3c3fa8f1334086bd5f97d3784"
  },
  {
    "url": "2017/10/sass的使用/index.html",
    "revision": "85c332cfb6eda8f6b015b754a1af9da8"
  },
  {
    "url": "2017/10/transform-引起的-z-index-失效‘/index.html",
    "revision": "128a00eb94101fc9335424dc58ba7705"
  },
  {
    "url": "2017/10/像素与viewport概念/index.html",
    "revision": "23ea84eb375c8bcc80f299ee749a4521"
  },
  {
    "url": "2017/10/关于flex布局/index.html",
    "revision": "fa21a4a3257c3b05dcb3382ca0eaefc6"
  },
  {
    "url": "2017/10/关于inline-block问题/index.html",
    "revision": "00fc1185432f5260b69dae831a246c16"
  },
  {
    "url": "2017/10/浅谈响应式/index.html",
    "revision": "8810ca7897045a4a78279b7faa43588a"
  },
  {
    "url": "2017/10/深入理解层叠上下文和层叠顺序/index.html",
    "revision": "b6ce2949e20444a09e9bfdb983feb057"
  },
  {
    "url": "2017/10/给不了解前端的同学讲前端/index.html",
    "revision": "d2fb5fd6271d48830167b951525a6835"
  },
  {
    "url": "2017/10/编码规范-（一）html/index.html",
    "revision": "f76c872bbd17a82ec189cc88d85092a9"
  },
  {
    "url": "2017/10/编码规范（二）css/index.html",
    "revision": "57ccc01f561784bbbe6b6b75dd2b3efa"
  },
  {
    "url": "2017/10/说说css学习中的瓶颈/index.html",
    "revision": "23bc3b75859ca17a78181f4869cd2c68"
  },
  {
    "url": "2017/11/canvas画五角星/index.html",
    "revision": "d2969a6c605f554ae890504ba920b6e9"
  },
  {
    "url": "2017/11/canvas画时钟/index.html",
    "revision": "d29aeb2030542c5c26791455fe354e94"
  },
  {
    "url": "2017/11/js类型转换总结/index.html",
    "revision": "8259bb14cb687406df805f377be3c264"
  },
  {
    "url": "2017/12/eslint-（一）简介与安装/index.html",
    "revision": "f75e921d466f494c7ad012eae33678d6"
  },
  {
    "url": "2017/12/eslint-（二）配置文件/index.html",
    "revision": "462fc3136e9929597590a5b49140d563"
  },
  {
    "url": "2017/12/markdown添加latex数学公式/index.html",
    "revision": "b63b53c18aaa815902f3b3c49a533d1b"
  },
  {
    "url": "2017/12/前端学习历程/index.html",
    "revision": "13609417f9d5e8eecd0c1ca4294ce678"
  },
  {
    "url": "2018/06/荔园的浪漫/index.html",
    "revision": "2bca2dfbdfec8cbd8ad3e8a83f26844e"
  },
  {
    "url": "2018/07/js变量的创建机制/index.html",
    "revision": "527e1aa1d60a0d5555a254957073f496"
  },
  {
    "url": "2018/08/dom的映射机制/index.html",
    "revision": "768a80568ce23ab332d5e2edbf5a1f84"
  },
  {
    "url": "2018/08/js作用域与作用域链/index.html",
    "revision": "3214662c7b31330f3ab311ed87c398b0"
  },
  {
    "url": "2018/08/js变量提升/index.html",
    "revision": "17c07d5a1c34f79e2f67181039e3d845"
  },
  {
    "url": "2018/08/js堆栈内存/index.html",
    "revision": "fede9199fb8c755319e9428d2db39b5a"
  },
  {
    "url": "2018/08/记第一次博客改版更新/index.html",
    "revision": "cf5b5a3b9951c72f48c1a04549c27b99"
  },
  {
    "url": "2018/09/js函数/index.html",
    "revision": "ac8bf87655b8c920f1f1d19b9f331882"
  },
  {
    "url": "2018/09/js函数的执行机制/index.html",
    "revision": "974bc703f2cb682fab10c6dd0c2ea041"
  },
  {
    "url": "2018/10/js运算符的优先级/index.html",
    "revision": "3a1970d695bfda8d57f61c7605ecc90b"
  },
  {
    "url": "2018/12/前端工程师的未来在哪里/index.html",
    "revision": "d0261b47abc85304ba6e68f7591258b1"
  },
  {
    "url": "2019/02/chrome插件英雄榜/index.html",
    "revision": "0900754fe88014503af318538d60140e"
  },
  {
    "url": "2019/02/js中扯不完的分号问题/index.html",
    "revision": "bec89c09b840120fd74aa4025f37df81"
  },
  {
    "url": "2019/02/mvc-mvp-mvvm-图示（转）/index.html",
    "revision": "10d1bfab9d9afcaface10c3c29540c9c"
  },
  {
    "url": "2019/02/vscode插件之polaroid/index.html",
    "revision": "5c496ebf9022a1d1ec9c0117ae6804b4"
  },
  {
    "url": "2019/02/vuepress入门/index.html",
    "revision": "242012cf86658bce7d46045688f8344f"
  },
  {
    "url": "2019/02/前端学习知识图谱/index.html",
    "revision": "2821c1f13c1d300ebd3223a58ec39616"
  },
  {
    "url": "2019/02/浅谈fc/index.html",
    "revision": "54dbee05e66862d100318ab5ebff0639"
  },
  {
    "url": "2019/03/机械键盘介绍/index.html",
    "revision": "b197ac919cecb67f7a0dfa4811350bbf"
  },
  {
    "url": "404.html",
    "revision": "56e6562d8a29063727e4b3b0e4a809c1"
  },
  {
    "url": "about/index.html",
    "revision": "0b542e8629601695bc2d8f2c5813b35c"
  },
  {
    "url": "assets/css/0.styles.f1f0d29b.css",
    "revision": "c3fb44afd5ee83e0950fb6db70014e86"
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
    "url": "assets/js/1.15c48e55.js",
    "revision": "4eefa17e5f77b4b8178de4914e9fbd03"
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
    "url": "assets/js/15.86ad8721.js",
    "revision": "8c2534d521761a4c74ab74553b4d867e"
  },
  {
    "url": "assets/js/16.797eed80.js",
    "revision": "ba2d421e8c0fe61a2a07b8e4b3ee0fcd"
  },
  {
    "url": "assets/js/17.260268c6.js",
    "revision": "8691aa3d86b5a287f40266fa448daef4"
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
    "url": "assets/js/2.faf997a9.js",
    "revision": "e951ff56cead6eb72503771acb547fa3"
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
    "url": "assets/js/36.22b63fd4.js",
    "revision": "97fabe4db7021e236a986f58e5438aed"
  },
  {
    "url": "assets/js/37.2cadccce.js",
    "revision": "58382b50e8b8c3f79b30b077e2122176"
  },
  {
    "url": "assets/js/38.7039f1e7.js",
    "revision": "26fb5898ca7fe3972bdca2a2915bea86"
  },
  {
    "url": "assets/js/39.d444c0e5.js",
    "revision": "97a741a2edee1b1f73125d1d1a20a21f"
  },
  {
    "url": "assets/js/4.320f3f5b.js",
    "revision": "9e9a1266d15753afc25d9d88ad0b5960"
  },
  {
    "url": "assets/js/40.98ae8096.js",
    "revision": "b8b33742745dce3551ce60e2bcf3755d"
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
    "url": "assets/js/5.26dec2eb.js",
    "revision": "c3100979f4cf937f90e776b9e6c161a8"
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
    "url": "assets/js/52.b02000f5.js",
    "revision": "3fc06c27db2eb947e57ca8c8bf229fbd"
  },
  {
    "url": "assets/js/53.4f175407.js",
    "revision": "9bb19a19019ee29141a471011bf8375d"
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
    "url": "assets/js/57.58da1079.js",
    "revision": "a46921f5f3dd5df6ab50169bd0341095"
  },
  {
    "url": "assets/js/58.e40853e3.js",
    "revision": "738e705f75a97d0a60afdbb3d588a02b"
  },
  {
    "url": "assets/js/59.971b9d36.js",
    "revision": "6aaae02d15e7e4d21b1248252750d844"
  },
  {
    "url": "assets/js/6.f631682b.js",
    "revision": "bbb7cc0e064bacd917ab30f7cbfc4160"
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
    "url": "assets/js/app.f65e8895.js",
    "revision": "439ccae483eae87b4c92c9226098c6c7"
  },
  {
    "url": "author.jpg",
    "revision": "df2fc7455cc5663043df50d78c9329ef"
  },
  {
    "url": "blog/index.html",
    "revision": "163fcbaa0a67d4b207475b83826415c4"
  },
  {
    "url": "blog/page/10/index.html",
    "revision": "e82807f4baeee74c9d765fa829c1f1d6"
  },
  {
    "url": "blog/page/11/index.html",
    "revision": "7cecdc06a9be3a91616391e5c6b6d88c"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "6ae078ff74bb729cc8c397b7e6302418"
  },
  {
    "url": "blog/page/3/index.html",
    "revision": "4c281647ead5fdb4c9972f271d3e01f8"
  },
  {
    "url": "blog/page/4/index.html",
    "revision": "27979075f96e88d23cff8aaa40a4793f"
  },
  {
    "url": "blog/page/5/index.html",
    "revision": "9312848a040e413c905bfa499318a88f"
  },
  {
    "url": "blog/page/6/index.html",
    "revision": "6d5318a1fe1c125e5fe12797a9d69f9b"
  },
  {
    "url": "blog/page/7/index.html",
    "revision": "896cc0d223c6c403caca291bc88f8761"
  },
  {
    "url": "blog/page/8/index.html",
    "revision": "012fa607616acd7e55f423a5bd5282ee"
  },
  {
    "url": "blog/page/9/index.html",
    "revision": "ddebc1c6a83fcfceafe7a9879edf6788"
  },
  {
    "url": "book/index.html",
    "revision": "c6b12b41f9627874313936e1a6516144"
  },
  {
    "url": "categories/index.html",
    "revision": "39065d49599a0a02d53fc528f5345d69"
  },
  {
    "url": "categories/个人随笔.html",
    "revision": "327b0dcf5756ea887c6f2d2db01e6940"
  },
  {
    "url": "categories/前端技术.html",
    "revision": "58f5057fcc3d0db1fdd346776db77c2f"
  },
  {
    "url": "categories/前端视角.html",
    "revision": "3205596caa43d7745df0876159eeb793"
  },
  {
    "url": "categories/前端资源.html",
    "revision": "b01beb2aa58028665e13a5e27df8dc5d"
  },
  {
    "url": "categories/博客建站.html",
    "revision": "411859e4fc2feacd1d40c9d7599240de"
  },
  {
    "url": "categories/资源分享.html",
    "revision": "c9b28845b64118a2edd0ce4e8cc3a783"
  },
  {
    "url": "index.html",
    "revision": "fc993e9752f5d02d83f7fa600ecdc0ce"
  },
  {
    "url": "logo.jpg",
    "revision": "3befeabc1b55916802dbc080530c2179"
  },
  {
    "url": "tags/Canvas.html",
    "revision": "f924f8b9595fb89608f82e5abc4596e4"
  },
  {
    "url": "tags/CSS.html",
    "revision": "b04443c8b0fbc707e12e9b4e5c684856"
  },
  {
    "url": "tags/css预处理器.html",
    "revision": "5bb1c645dbf6e62cbb0b282e40e45e9a"
  },
  {
    "url": "tags/DOM.html",
    "revision": "2b546ae15563b2491f1c5916605bba90"
  },
  {
    "url": "tags/github.html",
    "revision": "a596b379f875faa706b91eeb52e8ef06"
  },
  {
    "url": "tags/gulp.html",
    "revision": "bf83880d84f5e10696d40b3134d8a895"
  },
  {
    "url": "tags/hexo.html",
    "revision": "238734c25b89f022a9e5e0723fb2019c"
  },
  {
    "url": "tags/html.html",
    "revision": "17724798c4b7fe359ca21918d318c648"
  },
  {
    "url": "tags/index.html",
    "revision": "90fc3c6430f75562ee99bbe5a41d73ba"
  },
  {
    "url": "tags/JavaScript.html",
    "revision": "6b1fa47ed5363a7b9783187d066097ad"
  },
  {
    "url": "tags/markdown.html",
    "revision": "be0d6a9d718465a1ffa059c0dc5a8ec2"
  },
  {
    "url": "tags/next.html",
    "revision": "6976d6fc9d223a7aa82ced1c709463dd"
  },
  {
    "url": "tags/sass.html",
    "revision": "88c1b69f3fca7b5a603d7bb80cc4eeff"
  },
  {
    "url": "tags/sublimetext.html",
    "revision": "4b29114c971ece327f94ec37bef96f3d"
  },
  {
    "url": "tags/VSCode.html",
    "revision": "73db0c566a1602d4d3a4aadc4062b56c"
  },
  {
    "url": "tags/VuePress.html",
    "revision": "c241af2b35a4fb0532736db8fc2382f1"
  },
  {
    "url": "tags/web前端.html",
    "revision": "292863fb3f5996a76a7250488489bb47"
  },
  {
    "url": "tags/yilia.html",
    "revision": "151c075d0469a5827cd72ac266a4f544"
  },
  {
    "url": "tags/人生历程.html",
    "revision": "23bcc1950493d3326c666d1f715f0e76"
  },
  {
    "url": "tags/博客前言.html",
    "revision": "8b6532b6d31b2e29e4a155545e6ebabd"
  },
  {
    "url": "tags/博客版本更迭.html",
    "revision": "0587dacecedc74d59b67b1b7cd3558e9"
  },
  {
    "url": "tags/响应式.html",
    "revision": "0176dbf2b6f9c4d15214341f5c801fcc"
  },
  {
    "url": "tags/开发工具.html",
    "revision": "0314dbcfd70e55d1110086e0e7c0b66c"
  },
  {
    "url": "tags/插件.html",
    "revision": "afeb54174e1b074effcafa5b309a2cbe"
  },
  {
    "url": "tags/搭建博客.html",
    "revision": "390b9ade160e4b02831a33e6c4bb251e"
  },
  {
    "url": "tags/框架原理.html",
    "revision": "81a78493383e33c6195e73e0b6430d55"
  },
  {
    "url": "tags/浏览器.html",
    "revision": "fde2559ce30c0d39c6516c439ef4a2cf"
  },
  {
    "url": "tags/移动端.html",
    "revision": "de2553d7304a414fc741c6f18009e18f"
  },
  {
    "url": "tags/编码规范.html",
    "revision": "89786aa69fa969dd8e25137978604e54"
  },
  {
    "url": "tags/编辑器.html",
    "revision": "a283fb2a8ac61422ccb546793c0556d1"
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
