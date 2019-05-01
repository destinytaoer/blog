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
    "revision": "04146f7e6542dcf1d6ff14d09665b220"
  },
  {
    "url": "2017/07/gulp-自动化构建工具/index.html",
    "revision": "27fe218c4cd8a58a2097b250a5bac79f"
  },
  {
    "url": "2017/07/markdown语法/index.html",
    "revision": "1146b0ea0577e4e9a3176a0057e5dc4b"
  },
  {
    "url": "2017/08/初学者资源推荐/index.html",
    "revision": "7f1036573e29abf919c030f6d0c99628"
  },
  {
    "url": "2017/08/去除inline-block元素间间距的n种方法/index.html",
    "revision": "8f153e997c4e922c5a4d875a982f99b4"
  },
  {
    "url": "2017/09/githubpages-hexo-搭建个人博客/index.html",
    "revision": "860bc9e20f603fa416bed8408004f198"
  },
  {
    "url": "2017/09/hello-world/index.html",
    "revision": "62582236d56411ffb129bf1292b1c263"
  },
  {
    "url": "2017/09/hexo-next主题高级配置/index.html",
    "revision": "f0f882a6a711f5886e2556619f3a3a3c"
  },
  {
    "url": "2017/09/hexo-yilia主题-githubpages博客添加友言评论功能/index.html",
    "revision": "208c01d50b34959c67f1b84d14d85e23"
  },
  {
    "url": "2017/09/javascript-面向对象编程/index.html",
    "revision": "5ff91199ea7fe6a7cf454bc08f603d7a"
  },
  {
    "url": "2017/09/sublimetext-实用插件介绍/index.html",
    "revision": "cc8f71b6ce35d31447364396fcdb4f85"
  },
  {
    "url": "2017/10/canvas画布/index.html",
    "revision": "a8b468fc16cc10edc35245b813bc7f9b"
  },
  {
    "url": "2017/10/css实现元素的居中显示/index.html",
    "revision": "1a36fd9ec5171c0b47fc5fdf248af3ea"
  },
  {
    "url": "2017/10/css渐变的简单使用/index.html",
    "revision": "ca22339af9be8ceb7fb530f6949b2363"
  },
  {
    "url": "2017/10/sass的使用/index.html",
    "revision": "a17fb2fe40420650873dfd706ab7c9a1"
  },
  {
    "url": "2017/10/transform-引起的-z-index-失效‘/index.html",
    "revision": "8c41afcae39aafc3af8f44b00243a213"
  },
  {
    "url": "2017/10/像素与viewport概念/index.html",
    "revision": "d8d5cc78c9b4f2d46aed7ce99adb5b57"
  },
  {
    "url": "2017/10/关于flex布局/index.html",
    "revision": "d4999866fd9ac2a4515a497901f07ffe"
  },
  {
    "url": "2017/10/关于inline-block问题/index.html",
    "revision": "59c1223d01b96e3831028a56c007f285"
  },
  {
    "url": "2017/10/浅谈响应式/index.html",
    "revision": "a7f594aa32a6e99d6360168886827058"
  },
  {
    "url": "2017/10/深入理解层叠上下文和层叠顺序/index.html",
    "revision": "acf25b71f7fa38be4326b1184ac564fa"
  },
  {
    "url": "2017/10/给不了解前端的同学讲前端/index.html",
    "revision": "12cdb6c177b8d2f5670726a66063dc0b"
  },
  {
    "url": "2017/10/编码规范-（一）html/index.html",
    "revision": "bc5e235d9e13120a4b2a955cce391884"
  },
  {
    "url": "2017/10/编码规范（二）css/index.html",
    "revision": "a15e99d14d7f2688a3a0f4f13ebb087d"
  },
  {
    "url": "2017/10/说说css学习中的瓶颈/index.html",
    "revision": "69d27d11d35af5a93c0e8b41bd0dd1a5"
  },
  {
    "url": "2017/11/canvas画五角星/index.html",
    "revision": "4ad1b8b9c7d805e65df178431091b4a0"
  },
  {
    "url": "2017/11/canvas画时钟/index.html",
    "revision": "6c7db0c7ccdb4e0f70a1fad11b495443"
  },
  {
    "url": "2017/11/js类型转换总结/index.html",
    "revision": "3db333626f3632daf39140dbdf644cbf"
  },
  {
    "url": "2017/12/eslint-（一）简介与安装/index.html",
    "revision": "3eb9beb35422cd04fce80d2e62e355d1"
  },
  {
    "url": "2017/12/eslint-（二）配置文件/index.html",
    "revision": "d53fd6d01e5c904da6a5b1d113ffca1e"
  },
  {
    "url": "2017/12/markdown添加latex数学公式/index.html",
    "revision": "31524a6d4adcf6ef6a08aa23d510c9a1"
  },
  {
    "url": "2017/12/前端学习历程/index.html",
    "revision": "9f1c6db3a1519996909a48bf4236dcbb"
  },
  {
    "url": "2018/06/荔园的浪漫/index.html",
    "revision": "6e6bdd18229358348a79d5667fcfbb77"
  },
  {
    "url": "2018/07/js变量的创建机制/index.html",
    "revision": "87163f9f466a2ee3f5f6df9289cf0731"
  },
  {
    "url": "2018/08/dom的映射机制/index.html",
    "revision": "bde25158c81ffea68818832e28606908"
  },
  {
    "url": "2018/08/js作用域与作用域链/index.html",
    "revision": "f440991be3197a191d8376d590851787"
  },
  {
    "url": "2018/08/js变量提升/index.html",
    "revision": "78020064ff5ce5fde791117c603b38f9"
  },
  {
    "url": "2018/08/js堆栈内存/index.html",
    "revision": "55d320fc0103958ce81be922989ba64e"
  },
  {
    "url": "2018/08/记第一次博客改版更新/index.html",
    "revision": "9112433fb644b7eb13eefb3eba4fd6fa"
  },
  {
    "url": "2018/09/js函数/index.html",
    "revision": "f0ee002c61db2714f9a14b0489be5d41"
  },
  {
    "url": "2018/09/js函数的执行机制/index.html",
    "revision": "489fa43726f9d04f1507620fabdeb008"
  },
  {
    "url": "2018/10/js运算符的优先级/index.html",
    "revision": "3cf092c9e09d153c40117c3adbd180af"
  },
  {
    "url": "2018/12/前端工程师的未来在哪里/index.html",
    "revision": "c8adf374a09e0fa8deb6c162603c27ff"
  },
  {
    "url": "2019/02/chrome插件英雄榜/index.html",
    "revision": "5cc59244788a9dfac4f26a61233365da"
  },
  {
    "url": "2019/02/js中扯不完的分号问题/index.html",
    "revision": "3e8d01df324538f5f35352f322018a9a"
  },
  {
    "url": "2019/02/mvc-mvp-mvvm-图示（转）/index.html",
    "revision": "465ec26f85c133284dd1eea78d2ecc9e"
  },
  {
    "url": "2019/02/vscode插件之polaroid/index.html",
    "revision": "be54f859e4af4ec0ea3d9222ac868837"
  },
  {
    "url": "2019/02/vuepress入门/index.html",
    "revision": "d1632076d2e122d7efd31d2d14b782e6"
  },
  {
    "url": "2019/02/前端学习知识图谱/index.html",
    "revision": "297b9746ddc83f40e5a4f7f78dd45a6c"
  },
  {
    "url": "2019/02/浅谈fc/index.html",
    "revision": "e842bf6e0d60b8a80e084ce382ea7835"
  },
  {
    "url": "2019/03/机械键盘介绍/index.html",
    "revision": "e0b627262e6a805cc447d5d23443d0a5"
  },
  {
    "url": "404.html",
    "revision": "f91bcb144374a7f65ba49c2e6460bb65"
  },
  {
    "url": "about/index.html",
    "revision": "4c9db0c4406a1d2905c270e763f00990"
  },
  {
    "url": "assets/css/0.styles.addef09d.css",
    "revision": "6b7ae51166297b03649b4ac1da59ff23"
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
    "url": "assets/js/1.b858c17d.js",
    "revision": "4be27317e44afcdfb421864ec5c97b3b"
  },
  {
    "url": "assets/js/10.03d6c3d9.js",
    "revision": "34360e43a64924d92eba50eee50721df"
  },
  {
    "url": "assets/js/11.1eb27b75.js",
    "revision": "7780992cd803f52c1388160c66d85d3a"
  },
  {
    "url": "assets/js/12.237ff193.js",
    "revision": "59e995bbe27186096a23613c0c34219d"
  },
  {
    "url": "assets/js/13.1bdfd86c.js",
    "revision": "70131ac64f570b9a7b1c5dc65790abdc"
  },
  {
    "url": "assets/js/14.89f7d4a5.js",
    "revision": "9fb382c23be7df4c6b25de3c47f8001b"
  },
  {
    "url": "assets/js/15.4d0ffd7d.js",
    "revision": "c98ecefa30464a768907cf35b13cf9df"
  },
  {
    "url": "assets/js/16.8907a74b.js",
    "revision": "03acd02aac6c06b7b8c25b6a5b50b922"
  },
  {
    "url": "assets/js/17.cac258f6.js",
    "revision": "2cef0e1004fee621f211d2fbdba6f17a"
  },
  {
    "url": "assets/js/18.873840aa.js",
    "revision": "a755c1eadb85d5b69ed348636134777a"
  },
  {
    "url": "assets/js/19.03eeb744.js",
    "revision": "827d0e1f267e6f07f0d0371d522199b8"
  },
  {
    "url": "assets/js/2.ab4e59f5.js",
    "revision": "257e91bab091bb02e9bbf58667dd3378"
  },
  {
    "url": "assets/js/20.db21d709.js",
    "revision": "0b7a54f7153de0a394a66df2e639ae9b"
  },
  {
    "url": "assets/js/21.50d3b8a1.js",
    "revision": "fcdf894f6ab927af3fdb5b5e75cefd22"
  },
  {
    "url": "assets/js/22.433a2e15.js",
    "revision": "1a33dc6cf92f8dfe57d7c46dfb9b287a"
  },
  {
    "url": "assets/js/23.757cf53e.js",
    "revision": "3a8c926b8fef53e75a36a5e34f488518"
  },
  {
    "url": "assets/js/24.72e6b862.js",
    "revision": "8b7f2a087793b4730de77df96586d808"
  },
  {
    "url": "assets/js/25.9ed82548.js",
    "revision": "0bf6cdca290afd9c6ff91f52bbb84314"
  },
  {
    "url": "assets/js/26.0c34861f.js",
    "revision": "7e913375c992fce62154234b85916c40"
  },
  {
    "url": "assets/js/27.ae3339a6.js",
    "revision": "fb1c20704d2e82ec19d87062d6ee1ff3"
  },
  {
    "url": "assets/js/28.0ab90091.js",
    "revision": "e500b61b6fc516ed107bcbfc1dd6b758"
  },
  {
    "url": "assets/js/29.1574c985.js",
    "revision": "6ae2512f0148ed01b5acae8ff38affae"
  },
  {
    "url": "assets/js/30.ae718bb3.js",
    "revision": "35e9bcffdf1b5ba89775ef15c4c7ce67"
  },
  {
    "url": "assets/js/31.a0d7a370.js",
    "revision": "1dfa49b389c1d7df06941d691d4f7973"
  },
  {
    "url": "assets/js/32.5c5263d9.js",
    "revision": "e2f39b0973e0d4919b7bed83105364b5"
  },
  {
    "url": "assets/js/33.8d210e4e.js",
    "revision": "6234a969fd5991131126032532aca15f"
  },
  {
    "url": "assets/js/34.d43699a8.js",
    "revision": "db7d9b97bf291250622310637139c056"
  },
  {
    "url": "assets/js/35.9219619b.js",
    "revision": "ce4b38d7bccf5c3c567863c89cc4162d"
  },
  {
    "url": "assets/js/36.b6d4233a.js",
    "revision": "c9aa08d22eb0e3b842a4fd0bafcedc3f"
  },
  {
    "url": "assets/js/37.93cac827.js",
    "revision": "5a4fa3c3b9b3e7104140d77fc7b38f90"
  },
  {
    "url": "assets/js/38.717c6a30.js",
    "revision": "64811dd5735909e87942fe416345ab4f"
  },
  {
    "url": "assets/js/39.15394dd4.js",
    "revision": "e5e7eedf1c26172a5ab3844bc63db7c6"
  },
  {
    "url": "assets/js/4.b18b3d4f.js",
    "revision": "38b70ce221f603334b3c243e52c879e0"
  },
  {
    "url": "assets/js/40.fde4fad2.js",
    "revision": "1cbd209459c318948c026575e568d4a9"
  },
  {
    "url": "assets/js/41.812a540a.js",
    "revision": "a8c8d0bef94f9114c69ad5abc69e1780"
  },
  {
    "url": "assets/js/42.bd82fad6.js",
    "revision": "aea5ef5ddf082c0bf3030e9e7a7fa3c8"
  },
  {
    "url": "assets/js/43.84fdc75d.js",
    "revision": "005cf2f876f022b1a194a77a52f2b111"
  },
  {
    "url": "assets/js/44.d70af4b3.js",
    "revision": "de9a5baaa286fc64858828bc6c604375"
  },
  {
    "url": "assets/js/45.6a551888.js",
    "revision": "8c7ee583abfffe871e0e1965907f2c4c"
  },
  {
    "url": "assets/js/46.72db3310.js",
    "revision": "2a9b06e4a7095b68581421e7dbf58cf3"
  },
  {
    "url": "assets/js/47.846edb08.js",
    "revision": "346454996df92bfc2251b5803c1cce85"
  },
  {
    "url": "assets/js/48.7047de5d.js",
    "revision": "9ccdfa0589b4b27dff4695ecf506c26a"
  },
  {
    "url": "assets/js/49.40ef5ab7.js",
    "revision": "282f9dd34877f9378c0a2059e14e9024"
  },
  {
    "url": "assets/js/5.cd7a0dab.js",
    "revision": "09b831fa028b7b7b6e47e8a9c871d0b8"
  },
  {
    "url": "assets/js/50.75cfaaa2.js",
    "revision": "34c713fd96b7b8615884ef5cb60c5a5c"
  },
  {
    "url": "assets/js/51.5401a951.js",
    "revision": "b7be824c5089c6238af7a7c1c1d6a182"
  },
  {
    "url": "assets/js/52.6ffdd8cc.js",
    "revision": "2f67d75188ab571b91c631e01f70fee5"
  },
  {
    "url": "assets/js/53.a5e04509.js",
    "revision": "52bac8f028face973b45815fd63d54d5"
  },
  {
    "url": "assets/js/54.483fa2d6.js",
    "revision": "06f3d33532f6e9dfe5e06a30a7dde79f"
  },
  {
    "url": "assets/js/55.fcc37e8a.js",
    "revision": "33d5f241d3a82e8b9f43bc0c4d870497"
  },
  {
    "url": "assets/js/56.c1ecf1ad.js",
    "revision": "742909acc587518496176535fb1f95f0"
  },
  {
    "url": "assets/js/57.bbd5ce47.js",
    "revision": "4c6f02d00e4457aa64bd750118c8f5ea"
  },
  {
    "url": "assets/js/58.e40853e3.js",
    "revision": "738e705f75a97d0a60afdbb3d588a02b"
  },
  {
    "url": "assets/js/59.aebb9a44.js",
    "revision": "5fae4f360457c650586981fd065a935b"
  },
  {
    "url": "assets/js/6.5eaa86a8.js",
    "revision": "117d843f496e77a7a0de9dc7b3c4dd2d"
  },
  {
    "url": "assets/js/60.c2f0b9dd.js",
    "revision": "59680807126d233562a6050e98a54a19"
  },
  {
    "url": "assets/js/61.aa0f9206.js",
    "revision": "d453e27afd3bb6fe53fda50463c5891d"
  },
  {
    "url": "assets/js/62.6895fcf8.js",
    "revision": "61e5056a06c876e5217b70408ede46b4"
  },
  {
    "url": "assets/js/63.2b6f6510.js",
    "revision": "c467d3193e80b74c0d0c07f9a5e55add"
  },
  {
    "url": "assets/js/64.71beefdb.js",
    "revision": "57f83d147cff3843e28a38ae66a3b741"
  },
  {
    "url": "assets/js/65.e5ea262d.js",
    "revision": "3782c84c8c17d3f8fe7e484bb7662d47"
  },
  {
    "url": "assets/js/66.a0dfca44.js",
    "revision": "20d197101fc0432e834775b439e64c2f"
  },
  {
    "url": "assets/js/67.fbf3e16d.js",
    "revision": "4dbf1b37cff9113538e70e40bc106bed"
  },
  {
    "url": "assets/js/68.027db42c.js",
    "revision": "fd8f8d85c47fb61d29cb6dbbb654d34d"
  },
  {
    "url": "assets/js/7.d62c88b5.js",
    "revision": "96993bb0e43bcf9ba9cb242537580d70"
  },
  {
    "url": "assets/js/8.bd1488e8.js",
    "revision": "316b59672b3085efb64f2bccd8f9f40a"
  },
  {
    "url": "assets/js/9.62dd6bc7.js",
    "revision": "89ce45bb41a43b627cf97a8c17b8cf82"
  },
  {
    "url": "assets/js/app.4704ad04.js",
    "revision": "e66b8ebb43104a26fa9da6c5c5089131"
  },
  {
    "url": "author.jpg",
    "revision": "33b1dc93ce007567bbd021abf6b89e6b"
  },
  {
    "url": "blog/index.html",
    "revision": "707b5a8eb0819d4d7fb98a8112db2b59"
  },
  {
    "url": "blog/page/10/index.html",
    "revision": "b41d27b15a3f59e1c82a1bc0d6611064"
  },
  {
    "url": "blog/page/11/index.html",
    "revision": "d338ff44c2456669abf3eef5e292c5c1"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "1718664763468070eb73db6d8bbeddaf"
  },
  {
    "url": "blog/page/3/index.html",
    "revision": "a7826e36a400b8ba0146352da1029b1a"
  },
  {
    "url": "blog/page/4/index.html",
    "revision": "6535d9cb1adbef0e6d3c45b9b9669b7a"
  },
  {
    "url": "blog/page/5/index.html",
    "revision": "14563cdf6e4675157fe6ae4094f2a38d"
  },
  {
    "url": "blog/page/6/index.html",
    "revision": "a34691845973e18d620408b7d7969349"
  },
  {
    "url": "blog/page/7/index.html",
    "revision": "f8a7f08cdc304a8c9007cdef11da7d64"
  },
  {
    "url": "blog/page/8/index.html",
    "revision": "19d9a49da065bec227a9ad91641dc2aa"
  },
  {
    "url": "blog/page/9/index.html",
    "revision": "1717452f86b891b75f6ec1cfd3a931f8"
  },
  {
    "url": "book/index.html",
    "revision": "b0362c57037a48121669f645cf7262b0"
  },
  {
    "url": "categories/index.html",
    "revision": "4b7a645585a49fe689712c5718e888f2"
  },
  {
    "url": "categories/个人随笔.html",
    "revision": "8f6450afaadc9e0de5bb2540d3f6abc1"
  },
  {
    "url": "categories/前端技术.html",
    "revision": "e23b8b0b1346e98133b573b0baa644e7"
  },
  {
    "url": "categories/前端视角.html",
    "revision": "2100104cc39bacaa3f82bf019464ef11"
  },
  {
    "url": "categories/前端资源.html",
    "revision": "982650ad705d698d0f1f2a01e1f14262"
  },
  {
    "url": "categories/博客建站.html",
    "revision": "b5a0e6ac85f6fbc8120919a0e36fdfd0"
  },
  {
    "url": "categories/资源分享.html",
    "revision": "f3522a3e87bb8c6d137f8fc460742004"
  },
  {
    "url": "index.html",
    "revision": "927f8678f227e4bc08dd50c0b0fb0ee4"
  },
  {
    "url": "logo.jpg",
    "revision": "3befeabc1b55916802dbc080530c2179"
  },
  {
    "url": "tags/Canvas.html",
    "revision": "f39aeb5607550ec43a522d64b8739d46"
  },
  {
    "url": "tags/CSS.html",
    "revision": "1277769fcb050908b5b088f4899ff8a3"
  },
  {
    "url": "tags/css预处理器.html",
    "revision": "b914204372318b6c5e147c23e1fca33a"
  },
  {
    "url": "tags/DOM.html",
    "revision": "9df2198d8835bf10c2d7ce2a170d1994"
  },
  {
    "url": "tags/github.html",
    "revision": "4c9ed92380d2a529de78e1de98dad2a0"
  },
  {
    "url": "tags/gulp.html",
    "revision": "83555237f9dfeb78081fa73f7c4e882d"
  },
  {
    "url": "tags/hexo.html",
    "revision": "5f7c17a2eac2e03df7aaaa19022471c1"
  },
  {
    "url": "tags/html.html",
    "revision": "ba1adf7d168893228b0081f4be9f6562"
  },
  {
    "url": "tags/index.html",
    "revision": "5f2e27589b1b66dd6e8170c7453a38e0"
  },
  {
    "url": "tags/JavaScript.html",
    "revision": "5593ca729170b6807c4017fb856bf25f"
  },
  {
    "url": "tags/markdown.html",
    "revision": "93cbc2f583e318a60d05c98cd0ec2ef5"
  },
  {
    "url": "tags/next.html",
    "revision": "ce614e3803eac6c4c0778d2d9f48780e"
  },
  {
    "url": "tags/sass.html",
    "revision": "7dab9e1a49e6cb1d29b886c14e1ca461"
  },
  {
    "url": "tags/sublimetext.html",
    "revision": "87b49d3ed6c52678923168507e7ef647"
  },
  {
    "url": "tags/VSCode.html",
    "revision": "8d2fef548162ba0a6dd9d0df317bbbba"
  },
  {
    "url": "tags/VuePress.html",
    "revision": "5e331ba1001aae30283b4296c22f9889"
  },
  {
    "url": "tags/web前端.html",
    "revision": "bc967cba85584243521c0f936e6a5b50"
  },
  {
    "url": "tags/yilia.html",
    "revision": "7ddbc52965226d20ef575801feceea33"
  },
  {
    "url": "tags/人生历程.html",
    "revision": "04535f5383cba04863da237ae9cf79c8"
  },
  {
    "url": "tags/博客前言.html",
    "revision": "cb74bb2fe3578cde089b68eded8292a9"
  },
  {
    "url": "tags/博客版本更迭.html",
    "revision": "812988520615bf9a6e47e33323b2ce96"
  },
  {
    "url": "tags/响应式.html",
    "revision": "666157d68a4f3ac11982f5de30fa87fb"
  },
  {
    "url": "tags/开发工具.html",
    "revision": "5759aa27d2e0c10dd4d072a6a9d465e4"
  },
  {
    "url": "tags/插件.html",
    "revision": "5084581ffe0572dd9b03562e81a8c756"
  },
  {
    "url": "tags/搭建博客.html",
    "revision": "45ad3559c59cd5641ac0b62af236eb77"
  },
  {
    "url": "tags/框架原理.html",
    "revision": "d1e68aa996311eaa3c75594ae4d44c05"
  },
  {
    "url": "tags/浏览器.html",
    "revision": "fb0889143abd4b5b2da5a133f91d6a7c"
  },
  {
    "url": "tags/移动端.html",
    "revision": "380e8cc5267c81133b901dc27cf926f7"
  },
  {
    "url": "tags/编码规范.html",
    "revision": "1cca28e56dd28a6dd295865a9b864c90"
  },
  {
    "url": "tags/编辑器.html",
    "revision": "189736635587e446b3fdd69e5d64160c"
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
