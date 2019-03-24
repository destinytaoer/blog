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
    "revision": "a4c553ab0fc411a6827788bf18d8392a"
  },
  {
    "url": "2017/07/gulp-自动化构建工具/index.html",
    "revision": "c37d91e9ff3bc62bf9cf1d513be4241b"
  },
  {
    "url": "2017/07/markdown语法/index.html",
    "revision": "b5b78606d501561564911bfa3483f8fc"
  },
  {
    "url": "2017/08/初学者资源推荐/index.html",
    "revision": "08d998c5267b622ca877523cf70189f4"
  },
  {
    "url": "2017/08/去除inline-block元素间间距的n种方法/index.html",
    "revision": "c4efb65d74c71df09b3006e37ec1a23a"
  },
  {
    "url": "2017/09/githubpages-hexo-搭建个人博客/index.html",
    "revision": "1bd3f663b592b775cc91d75dc883da10"
  },
  {
    "url": "2017/09/hello-world/index.html",
    "revision": "2e3e2579fed30b5c54859684f68fa53a"
  },
  {
    "url": "2017/09/hexo-next主题高级配置/index.html",
    "revision": "93d8082279d9dea15c91c8a7acb3f63e"
  },
  {
    "url": "2017/09/hexo-yilia主题-githubpages博客添加友言评论功能/index.html",
    "revision": "acc2c78de80b226f39d0e33eddd9135a"
  },
  {
    "url": "2017/09/javascript-面向对象编程/index.html",
    "revision": "8f007f9b4637a6621ca4cf162f521285"
  },
  {
    "url": "2017/09/sublimetext-实用插件介绍/index.html",
    "revision": "547822f87cfbac98bf965f6f43c49621"
  },
  {
    "url": "2017/10/canvas画布/index.html",
    "revision": "6c9400177b91b5062faf9a5b83503150"
  },
  {
    "url": "2017/10/css实现元素的居中显示/index.html",
    "revision": "627a0fb0d09cb6bad680a1e25e7d9c03"
  },
  {
    "url": "2017/10/css渐变的简单使用/index.html",
    "revision": "06402dd473ba097d31db55113692a7fe"
  },
  {
    "url": "2017/10/sass的使用/index.html",
    "revision": "e676b0d82e3977cca80e5f869de70397"
  },
  {
    "url": "2017/10/transform-引起的-z-index-失效‘/index.html",
    "revision": "d48a8d16ea57abb461cb3eb8266b60f3"
  },
  {
    "url": "2017/10/像素与viewport概念/index.html",
    "revision": "c68318c6237aac8d8177456e3f1b149b"
  },
  {
    "url": "2017/10/关于flex布局/index.html",
    "revision": "207a0be3e8fbd17d655fa4e4d1244c5a"
  },
  {
    "url": "2017/10/关于inline-block问题/index.html",
    "revision": "723b4588ba233d2da0d5ce9510e3d80b"
  },
  {
    "url": "2017/10/浅谈响应式/index.html",
    "revision": "46677ff2b9a637af0934992a4ad1b758"
  },
  {
    "url": "2017/10/深入理解层叠上下文和层叠顺序/index.html",
    "revision": "a7dad92d28d3d0afc4929f1167471b4f"
  },
  {
    "url": "2017/10/给不了解前端的同学讲前端/index.html",
    "revision": "fde6b9b6d5f3fb76c96bd1d8848a50d6"
  },
  {
    "url": "2017/10/编码规范-（一）html/index.html",
    "revision": "0b291b06fa6210a453c91bb583f4ac11"
  },
  {
    "url": "2017/10/编码规范（二）css/index.html",
    "revision": "9f62ccf5457cf671b8003d03c748439e"
  },
  {
    "url": "2017/10/说说css学习中的瓶颈/index.html",
    "revision": "428002367e098fc53c9388361f2311e7"
  },
  {
    "url": "2017/11/canvas画五角星/index.html",
    "revision": "e0d38cb736e3281c094183b293f8d6d3"
  },
  {
    "url": "2017/11/canvas画时钟/index.html",
    "revision": "cd79d5ccea1c1ff6594592e9bdd5234c"
  },
  {
    "url": "2017/11/js类型转换总结/index.html",
    "revision": "381748c1afc609d9124bb83d489b7be2"
  },
  {
    "url": "2017/12/eslint-（一）简介与安装/index.html",
    "revision": "d0699bcdd090aa55d646020d93b8aa8b"
  },
  {
    "url": "2017/12/eslint-（二）配置文件/index.html",
    "revision": "fd95dde6de7436792ca8f71a38762e6a"
  },
  {
    "url": "2017/12/markdown添加latex数学公式/index.html",
    "revision": "c2c2fa60248c91c110010f14d3d5d0d7"
  },
  {
    "url": "2017/12/前端学习历程/index.html",
    "revision": "e6bf806575da32390c7712ad3da7dce7"
  },
  {
    "url": "2017/12/前端简历/index.html",
    "revision": "65dcc4adee63fce5ee3e24befc2b7890"
  },
  {
    "url": "2018/06/荔园的浪漫/index.html",
    "revision": "50ad874f8ac1066e0558bef829beda76"
  },
  {
    "url": "2018/07/js变量的创建机制/index.html",
    "revision": "df2e3cd6e556cf3a064e50782e76f6e2"
  },
  {
    "url": "2018/08/dom的映射机制/index.html",
    "revision": "5d845a75af76386040fd0727e9f74913"
  },
  {
    "url": "2018/08/js作用域与作用域链/index.html",
    "revision": "c92db0af42ad6225a9000c4ca6ecb4d4"
  },
  {
    "url": "2018/08/js变量提升/index.html",
    "revision": "c1669cb7ed5c51ad4ed4d2effd91635f"
  },
  {
    "url": "2018/08/js堆栈内存/index.html",
    "revision": "421d2cdec84bec6b002b52b0bf7a50ea"
  },
  {
    "url": "2018/08/记第一次博客改版更新/index.html",
    "revision": "0611a9e6f2d1d2cd65a6b9256530a3ce"
  },
  {
    "url": "2018/09/js函数/index.html",
    "revision": "c514200399f805f8da8cc696a3186ce6"
  },
  {
    "url": "2018/09/js函数的执行机制/index.html",
    "revision": "8470d3cef8c3f41007e1c2c4e4c55dab"
  },
  {
    "url": "2018/10/js运算符的优先级/index.html",
    "revision": "8fdb28f561a423c089688c6eb2658553"
  },
  {
    "url": "2018/12/前端工程师的未来在哪里/index.html",
    "revision": "abe19f77e69d74143bd7f3cbf11b2306"
  },
  {
    "url": "2019/02/chrome插件英雄榜/index.html",
    "revision": "4022c84b464093eac1a3d14c79efd91c"
  },
  {
    "url": "2019/02/js中扯不完的分号问题/index.html",
    "revision": "5317e9e739b61b74c6800818ac17f885"
  },
  {
    "url": "2019/02/mvc-mvp-mvvm-图示（转）/index.html",
    "revision": "a8c54cac9436178863c946bdb54f28fe"
  },
  {
    "url": "2019/02/vscode插件之polaroid/index.html",
    "revision": "b448825b424904e47207f3be0439b4b2"
  },
  {
    "url": "2019/02/vuepress入门/index.html",
    "revision": "f84b5e7e73a8a8a7c9ee56e7ea034176"
  },
  {
    "url": "2019/02/前端学习知识图谱/index.html",
    "revision": "c3b1a2000535358e68fbcdcf67032d84"
  },
  {
    "url": "2019/02/浅谈fc/index.html",
    "revision": "73f389ade0937de09ebc0223856b2e63"
  },
  {
    "url": "2019/03/机械键盘介绍/index.html",
    "revision": "2865ba4d5b4c181098b33297d3247a25"
  },
  {
    "url": "404.html",
    "revision": "50516f092d995bd5a348b9012831c282"
  },
  {
    "url": "about/index.html",
    "revision": "f6c2bb2ff7d6573e64d11830c63e27b4"
  },
  {
    "url": "assets/css/0.styles.a431a862.css",
    "revision": "6bd01c1ce0989843a312cecbf885c438"
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
    "url": "assets/js/1.4364c04d.js",
    "revision": "213e4a2feaf7758139669c8c9015aba8"
  },
  {
    "url": "assets/js/10.9ce50032.js",
    "revision": "d070b0574959a4ed13ca4dc4d7045d5f"
  },
  {
    "url": "assets/js/11.0d3c9b8f.js",
    "revision": "4223127bb709dc6528e1d51a530dfe8e"
  },
  {
    "url": "assets/js/12.4d3c0d04.js",
    "revision": "632d997de7a29e2e5f7d90baf632e48f"
  },
  {
    "url": "assets/js/13.40c52ad1.js",
    "revision": "08a528d4b70e4a3fd2ca7c14aa19fc06"
  },
  {
    "url": "assets/js/14.506bcb30.js",
    "revision": "534a5458c5722090971d1f0e561bd0ba"
  },
  {
    "url": "assets/js/15.61e17262.js",
    "revision": "59ac718f80b89ccdf7f3ef376beb0e3c"
  },
  {
    "url": "assets/js/16.869a09da.js",
    "revision": "0eba7f72c8188a887696b0a87f540781"
  },
  {
    "url": "assets/js/17.474d6fab.js",
    "revision": "f048ff516c6acae491c9d82a7a0fa8f3"
  },
  {
    "url": "assets/js/18.ebcac04e.js",
    "revision": "4c997196a8a2d6dc8ac79eacff1fcf88"
  },
  {
    "url": "assets/js/19.c9fdff50.js",
    "revision": "343167a2d4f4e58f291c7f525bba5a91"
  },
  {
    "url": "assets/js/20.65bd556b.js",
    "revision": "6f1f3c8a94bc84d2704edcb401765c03"
  },
  {
    "url": "assets/js/21.a645e382.js",
    "revision": "47b04821d34f54652b313855813e2557"
  },
  {
    "url": "assets/js/22.e77ceca7.js",
    "revision": "cc5669302a239305c93d46bc54609106"
  },
  {
    "url": "assets/js/23.92dcee73.js",
    "revision": "a1149cea6c36f28ae8f45a87a6759b04"
  },
  {
    "url": "assets/js/24.de241ea9.js",
    "revision": "0fcf77dca85a52f09b70ed334595f8f3"
  },
  {
    "url": "assets/js/25.79da4866.js",
    "revision": "f727abc0a4ea7a8106a77fb4ea33bc43"
  },
  {
    "url": "assets/js/26.c8513ce0.js",
    "revision": "59342d8ea6203fc1cc6f7162d5f6508b"
  },
  {
    "url": "assets/js/27.85076d19.js",
    "revision": "46796da91852e9f6d47fb3e5aea701e9"
  },
  {
    "url": "assets/js/28.bdf07036.js",
    "revision": "5d601c66d4f7f44b10ad4a4f8e09a55f"
  },
  {
    "url": "assets/js/29.651b6d01.js",
    "revision": "e640f32e9196a4612b0dbaa763b2428c"
  },
  {
    "url": "assets/js/3.0473b08a.js",
    "revision": "ba334f2ae80b47e187a79b236c28b42e"
  },
  {
    "url": "assets/js/30.81cfdf5c.js",
    "revision": "de999c80a7c59139a4e55535d156fc78"
  },
  {
    "url": "assets/js/31.b90ab57c.js",
    "revision": "10b964845917b25f86068bbded698d02"
  },
  {
    "url": "assets/js/32.3cc118dc.js",
    "revision": "cc2d589409f6d2b9afa939e64818431d"
  },
  {
    "url": "assets/js/33.695ee033.js",
    "revision": "d5ccad83415a6115f671fdcace7a2716"
  },
  {
    "url": "assets/js/34.5c54ed9e.js",
    "revision": "a4c85e34ae988e3c95880ca37404adc4"
  },
  {
    "url": "assets/js/35.5c420270.js",
    "revision": "d6f4182881034460deb66646a9e13c0a"
  },
  {
    "url": "assets/js/36.e7405a54.js",
    "revision": "ab11b7302b87639b959d946564cd49d0"
  },
  {
    "url": "assets/js/37.58c4f07d.js",
    "revision": "2b41725f670a877e5a6a2f0f599fea67"
  },
  {
    "url": "assets/js/38.d3cac408.js",
    "revision": "ade2a63a804574d099262d33a32d9e58"
  },
  {
    "url": "assets/js/39.2508feb8.js",
    "revision": "4d5fb2c54cb0cc7e3d6aaf9505e9a062"
  },
  {
    "url": "assets/js/4.fa02e4ec.js",
    "revision": "763e6c21f159f717f4366e399f15c307"
  },
  {
    "url": "assets/js/40.e9d087cd.js",
    "revision": "81b2fef0b5562247f0e59680f7ee410f"
  },
  {
    "url": "assets/js/41.22a69163.js",
    "revision": "0c48ac3412e8d0571b175cf624429b7f"
  },
  {
    "url": "assets/js/42.8ef342e4.js",
    "revision": "6043edda93c37f29f77f76af4ef68e9f"
  },
  {
    "url": "assets/js/43.90694da1.js",
    "revision": "7e2461c7dde0e6f24f733e2188679089"
  },
  {
    "url": "assets/js/44.058b14c6.js",
    "revision": "276b0ad712ecff2d81819fe1b26c0bc5"
  },
  {
    "url": "assets/js/45.5549547c.js",
    "revision": "44fad2a0f7389448e34ed8d6d2daa184"
  },
  {
    "url": "assets/js/46.951f5399.js",
    "revision": "c2cdeeeb61b9d048bea4cbe63e60c876"
  },
  {
    "url": "assets/js/47.ab3d1116.js",
    "revision": "67794917657a3421821eb7a67ab8d5aa"
  },
  {
    "url": "assets/js/48.47548f45.js",
    "revision": "9221fe0f1943a026de70ac193c9de38d"
  },
  {
    "url": "assets/js/49.2fd55b24.js",
    "revision": "7e24b8b20800276f16ceea8622e3fbf0"
  },
  {
    "url": "assets/js/5.a11c26a5.js",
    "revision": "fc75dd5f496f25e23fe0ef55ac2d6f6f"
  },
  {
    "url": "assets/js/50.211ffe0b.js",
    "revision": "03d65ad18fab3226bb924a9818780540"
  },
  {
    "url": "assets/js/51.2db4c461.js",
    "revision": "9a99dd793d324190e5ca5b2b9b07e1cd"
  },
  {
    "url": "assets/js/52.547dfe1b.js",
    "revision": "ccf9e2b88a12dc5bd471569043282472"
  },
  {
    "url": "assets/js/53.05a87c04.js",
    "revision": "e916b19eb5e632c32bf2546e88582766"
  },
  {
    "url": "assets/js/54.8219eaa3.js",
    "revision": "06bcd76c3e1857e33845761db890507e"
  },
  {
    "url": "assets/js/55.33bf1f15.js",
    "revision": "ac35a7c8fa067384b766d5def3e09805"
  },
  {
    "url": "assets/js/56.cb29f5a6.js",
    "revision": "fd2bbd73095912fe0f022d907ec7919f"
  },
  {
    "url": "assets/js/57.aa264b8b.js",
    "revision": "74fedcafc554b49072143d2199dfed16"
  },
  {
    "url": "assets/js/58.8be2b871.js",
    "revision": "02999f574f69231a7d01871de1c4be6f"
  },
  {
    "url": "assets/js/59.283b7197.js",
    "revision": "b420f167c02e991760a2fda99f988747"
  },
  {
    "url": "assets/js/6.77d895b6.js",
    "revision": "e5d0ec7a2567184d02b8c6dc1ca2a216"
  },
  {
    "url": "assets/js/60.8103960f.js",
    "revision": "27ed5788b8887e8328008ceae846d8dc"
  },
  {
    "url": "assets/js/61.ddc772f9.js",
    "revision": "96a58dd963470335cbeb7d8d7fc52d12"
  },
  {
    "url": "assets/js/62.6f687524.js",
    "revision": "89222ec748dc5255c1856940497c0a91"
  },
  {
    "url": "assets/js/63.d6c09b4e.js",
    "revision": "a26d9cb4190a08de181d99b9cc1076d8"
  },
  {
    "url": "assets/js/64.a531d97b.js",
    "revision": "905abeb0eae3753450c7a142ab69a880"
  },
  {
    "url": "assets/js/65.ab1c9d6b.js",
    "revision": "6db9c48c99446da9bd907b0f520c397e"
  },
  {
    "url": "assets/js/66.d5ba406e.js",
    "revision": "7c24d4241d5d52bdf4e410e95440399a"
  },
  {
    "url": "assets/js/67.caeb93ae.js",
    "revision": "bd5f2b13de627c9b7dcb346cfd0cf0a0"
  },
  {
    "url": "assets/js/68.59519e4f.js",
    "revision": "a605f2a4d925ab34420abb68bea66a1c"
  },
  {
    "url": "assets/js/7.038f67de.js",
    "revision": "90ff3829031f83d87945e1cb2c6d04a6"
  },
  {
    "url": "assets/js/8.81e723c1.js",
    "revision": "d3d6ad55bc7cbf2b3a8109be70539702"
  },
  {
    "url": "assets/js/9.b260e1c5.js",
    "revision": "f5c098f1674c8c16c5695077d4d4c8f5"
  },
  {
    "url": "assets/js/app.0258ca66.js",
    "revision": "e6c3decc40101f5ecb7c476d403b130a"
  },
  {
    "url": "author.jpg",
    "revision": "df2fc7455cc5663043df50d78c9329ef"
  },
  {
    "url": "blog/index.html",
    "revision": "2ee678aa1bd57b5af718fb37c3bb00ca"
  },
  {
    "url": "blog/page/10/index.html",
    "revision": "671279b9df996213ab3d18f823b29504"
  },
  {
    "url": "blog/page/11/index.html",
    "revision": "c80f4bec1d0f4514b911a9cc2f13851a"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "4357b2c562ff909a6ed4a648c079af87"
  },
  {
    "url": "blog/page/3/index.html",
    "revision": "5b989bd36324c266f71e5e8f95079497"
  },
  {
    "url": "blog/page/4/index.html",
    "revision": "827e85732b182cc1ad5f6854bdf0bccb"
  },
  {
    "url": "blog/page/5/index.html",
    "revision": "67dd8a252fbe4b564440620c6db24e83"
  },
  {
    "url": "blog/page/6/index.html",
    "revision": "7745e8dc75bba21abbd6a98cb9f277aa"
  },
  {
    "url": "blog/page/7/index.html",
    "revision": "4d8bfa464f49c10f7db4134ce9300691"
  },
  {
    "url": "blog/page/8/index.html",
    "revision": "41301c0d2d995ba6703b5e604b8d5223"
  },
  {
    "url": "blog/page/9/index.html",
    "revision": "ee80f5f0116e3d7ee94e63dc8b03391a"
  },
  {
    "url": "book/index.html",
    "revision": "d01f219b32db97a8f979bbbef3279567"
  },
  {
    "url": "categories/index.html",
    "revision": "7b4809ddf53f4db3add0fc73c679bcb2"
  },
  {
    "url": "category/个人随笔.html",
    "revision": "e8760a890e9d7cf929b3b2d5c013ef35"
  },
  {
    "url": "category/前端技术.html",
    "revision": "335d4532710352935474749a6b229e05"
  },
  {
    "url": "category/前端视角.html",
    "revision": "78f2beba07958823488de91e2082ebb3"
  },
  {
    "url": "category/前端资源.html",
    "revision": "98937b1a28e6316b5143b3eddc1ca56f"
  },
  {
    "url": "category/博客建站.html",
    "revision": "53fa076e5e9bb593ae7710ae2703e756"
  },
  {
    "url": "category/资源分享.html",
    "revision": "91eae881c49d0587acb335d6f4c2f6e7"
  },
  {
    "url": "index.html",
    "revision": "e55e500a48f008dee6f568f868edd3b1"
  },
  {
    "url": "logo.jpg",
    "revision": "3befeabc1b55916802dbc080530c2179"
  },
  {
    "url": "tag/Canvas.html",
    "revision": "7402b05de8b18c9404ee0092df1d5567"
  },
  {
    "url": "tag/CSS.html",
    "revision": "3ab689e19d80e80fab939ac5b7e179c5"
  },
  {
    "url": "tag/css预处理器.html",
    "revision": "0667a83f3ec95f981b311c196333783c"
  },
  {
    "url": "tag/DOM.html",
    "revision": "f90d14eeb53722b2ceec0f28f3b7d197"
  },
  {
    "url": "tag/github.html",
    "revision": "3fd36808a1eadfb9a8b6c44f1c57270b"
  },
  {
    "url": "tag/gulp.html",
    "revision": "7861c51578627cf26d60f68c95a12176"
  },
  {
    "url": "tag/hexo.html",
    "revision": "15e30a6d78ef1e6003e8ffef6329a8be"
  },
  {
    "url": "tag/html.html",
    "revision": "96ebf9739537d5e2778afce7f8a8ec64"
  },
  {
    "url": "tag/JavaScript.html",
    "revision": "f8a69dc75b50c1bb267ebdc4732007ae"
  },
  {
    "url": "tag/markdown.html",
    "revision": "9a8eb4b748e225e00ff7d9def8b83425"
  },
  {
    "url": "tag/next.html",
    "revision": "cbaba19aca74fc517ad3987eabe80cf0"
  },
  {
    "url": "tag/sass.html",
    "revision": "e2ba9308321ca8d1af90feeb61f5f630"
  },
  {
    "url": "tag/sublimetext.html",
    "revision": "f74ebf576816925ee3c703d618eca075"
  },
  {
    "url": "tag/VSCode.html",
    "revision": "ea61eb2ccffac922133f59fc9b85ec83"
  },
  {
    "url": "tag/VuePress.html",
    "revision": "bb558abf7d0fb7bf7b4e350f9cc1fdd6"
  },
  {
    "url": "tag/web前端.html",
    "revision": "fe07d684bbd6379a7a036b6a1d09214f"
  },
  {
    "url": "tag/yilia.html",
    "revision": "d8cfaf47511dd2e7a1fac9a165b3b84c"
  },
  {
    "url": "tag/人生历程.html",
    "revision": "0da3c09291ff0013fc4f8d935ec5a3df"
  },
  {
    "url": "tag/博客前言.html",
    "revision": "84d977ccc6e6b898b3f36abf6b8fb5b7"
  },
  {
    "url": "tag/博客版本更迭.html",
    "revision": "1699c3b127e5a6986c07d53473266709"
  },
  {
    "url": "tag/响应式.html",
    "revision": "cd75e8818f020177c966901dbd076b00"
  },
  {
    "url": "tag/开发工具.html",
    "revision": "021d673efa843f38d8ea1586fab5d0e2"
  },
  {
    "url": "tag/插件.html",
    "revision": "e3b207deaade17363ed0ed305168ca5e"
  },
  {
    "url": "tag/搭建博客.html",
    "revision": "5c5ca59d1da4fcdc743914e1b0f07f74"
  },
  {
    "url": "tag/框架原理.html",
    "revision": "d45402249cb1bd62773ba75b872bb781"
  },
  {
    "url": "tag/浏览器.html",
    "revision": "b3b6af318180b5c7663a933f20d72672"
  },
  {
    "url": "tag/移动端.html",
    "revision": "9cd9822562f6c8315b4a1f66c94e20da"
  },
  {
    "url": "tag/编码规范.html",
    "revision": "f09c3afaca09cf4647245f6e9be7f1b7"
  },
  {
    "url": "tag/编辑器.html",
    "revision": "56e057a83d9744b209629812c00d24e0"
  },
  {
    "url": "tags/index.html",
    "revision": "686362046953b266907c89463f229f27"
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
