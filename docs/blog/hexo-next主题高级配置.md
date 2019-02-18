---
title: hexo + next主题高级配置
layout: post
category: 博客建站
tags:
  - hexo
  - next
  - github
date: 2017-09-20 18:20:55
update: 2017-10-14 14:30:55
comments: true
copyright: true
---

## 前言

配置完yilia后，发现缺少一些东西，百度之下，找到了特别喜欢的主题——next。跟大家分享配置经验。

- 首先，本文是根据我自己的博客配置而写的，并不全面，其他美化配置在文末提供了相应的参考链接。欢迎浏览我的博客：[destiny'Note](https://destinytaoer.cn)
- 其次，本文中有部分自己的改进方案，并非全部摘自他文，所以转载请注明版权
- 最后，有不懂的或者有其他方案，欢迎联系本人


<!-- more -->

## 一、主题下载

```git
git clone https://github.com/iissnan/hexo-theme-next.git themes/next
```

在<span id="inline-yellow">根目录</span>`_config.yml`文件中：

```yaml
theme: next
```

>注意：所有配置文件内，每一项配置的冒号后面都要加上空格

## 二、综合设置

### 1. 语言设置

在根目录`_config.yml`文件中：

```yaml
language: zh-Hans
```

编辑主题目录下`language/zh-Hans.yml`中英文的对应关系

### 2. 修改字体大小、样式

在主题目录配置文件下，查找`font`：

```yaml
font:
  enable: true

  # Uri of fonts host. E.g. //fonts.googleapis.com (Default).
  host:

  # body元素的字体设置
  global:
    external: true
    family: Lato
    size: 18

  # 标题的基础字体设置
  headings:
    external: true
    family:
    size: 30

  # 文章字体设置
  posts:
    external: true
    family: 18

  # logo字体设置
  logo:
    external: true
    family:
    size: 30

  # 代码块字体设置
  codes:
    external: true
    family:
    size: 13
```
把false改为true，并修改了size的数值，单位是像素。如有需要可自行改变字体。

另外提供一种方法，供会前端的小伙伴参考：
打开`\themes\next\source\css\ _variables\base.styl`文件，修改里面的字体大小

### 3. 主题选择

在主题配置文件中，查找`scheme`：

```yaml
# 主题中的主题
# scheme: Muse
scheme: Mist
# scheme: Pisces
# scheme: Gemini
```

选择你喜欢的，去掉前面的`#`号，其他加上`#`号。即注释掉的意思。

### 4. 背景的设置
在主题配置文件中，查找`canvas`：

```yaml
# Canvas-nest
canvas_nest: false
# three_waves
three_waves: false
# canvas_lines
canvas_lines: false
# canvas_sphere
canvas_sphere: false
# Only fit scheme Pisces
# Canvas-ribbon
canvas_ribbon: true
```
开启相应的背景，只要把对应的`false`设置为`true`，记得把其他都改为`false`


### 5. 修改内容区域宽度

Next 对内容的宽度的设定如下：

- 700px，当屏幕宽度 < 1600px
- 900px，当屏幕宽度 >= 1600px
- 移动设备下，宽度自适应

在主题目录下的 `source\css_variables\custom.styl` 文件，新增变量：

```scss
// 修改成你期望的宽度
$content-desktop = 700px
// 当视窗超过 1600px 后的宽度
$content-desktop-large = 900px
```

此方法不适用于 `Pisces Scheme `， `Pisces Scheme` 编辑`themes\next\source\css\_schemes\Picses\_layout.styl `文件，更改以下 css 选项定义值：

```css
.header {width: 1150px;}
.container .main-inner {width: 1150px;}
.content-wrap {width: calc(100% - 260px);}
```

## 三、文章模块的美化

### 1. 文章中添加居中模块

文章的Markdown文件中写上：

```html
<!-- HTML方式: 直接在 Markdown 文件中编写 HTML 来调用 -->
<blockquote class="blockquote-center">优秀的人，不是不合群，而是他们合群的人里面没有你</blockquote>

<!-- 标签 方式，要求版本在0.4.5或以上 -->
{% fullimage /image-url, alt, title %}

<!-- 别名 -->
{% fi /image-url, alt, title %}
```

### 2. 文章内链接样式美化
在主题目录下，将`source/css/_custom/custom.styl`文件修改如下：
```scss
// 文章内链接文本样式
.post-body a{
  color: #0593d3;
  border-bottom: none;
  border-bottom: 1px solid #0593d3;
  &:hover {
    color: #fc6423;
    border-bottom: none;
    border-bottom: 1px solid #fc6423;
  }
}
```

### 3. 文章内代码美化

- 行内代码
在主题目录下，将`source/css/_custom/custom.styl`文件修改如下：
```css
//行内代码样式
code {
	color: #c7254e;
	background: #f9f2f4;
	border: 1px solid #d6d6d6;
	padding:1px 4px;
	word-break: break-all;
	border-radius:4px;
}
```

- 区块代码
在主题目录下，修改`config.yml`文件：
```yaml
#   样式可选： normal | night | night eighties | night blue | night bright
highlight_theme: night
```

### 4. 文章结束语

- **添加模板文件**

在主题目录下`\layout\_macro `中新建 `passage-end-tag.swig `文件,并添加以下内容：

```html
<div>
    {% if not is_index %}
        <div style="text-align:center;color: #ccc;font-size:14px;">
              -------------本文结束<i class="fa fa-paw"></i>感谢您的阅读-------------
        </div>
    {% endif %}
</div>
```
- **导入模板文件**

在`\layout\_macro\post.swig`文件中，找到：

```
{#####################}
{### END POST BODY ###}
{#####################}
```

在上面代码之前添加：

```swig
<div>
      {% if not is_index %}
          {% include 'passage-end-tag.swig' %}
      {% endif %}
</div>
```

- **配置**

在主题配置文件中添加：
```yaml
# 文章末尾添加“本文结束”标记
passage_end_tag:
  enabled: true
```

上述步骤是主题编写的基本步骤，值得参考。

### 5. 增强文章底部版权信息

- 增加文章md文件的头部信息中添加`copyright: true`时，添加版权声明
- 增加文章标题、发布时间、更新时间等信息

在目录`next/layout/_macro/`下找到`post-copyright.swig`，进行部分修改：

```swig
{% if page.copyright %}
<ul class="post-copyright">
  <li class="post-copyright-author">
  	<strong>本文标题:</strong>
  	<a href="{{ url_for(page.path) }}">{{ page.title }}</a>
  </li>
  <li class="post-copyright-author">
    <strong>{{ __('post.copyright.author') + __('symbol.colon') }}</strong>
    {{ config.author }}
  </li>
  <li class="post-copyright-author">
    <strong>发布时间:</strong>
    {{ page.date.format("YYYY年MM月DD日 - HH:MM") }}
  </li>
  <li class="post-copyright-author">
    <strong>最后更新:</strong>
    {{ page.updated.format("YYYY年MM月DD日 - HH:MM") }}
  </li>
  <li class="post-copyright-link">
    <strong>{{ __('post.copyright.link') + __('symbol.colon') }}</strong>
    <a href="{{ post.permalink }}" title="{{ post.title }}">{{ post.permalink }}</a>
  </li>
  <li class="post-copyright-license">
    <strong>{{ __('post.copyright.license_title') + __('symbol.colon') }} </strong>
    {{ __('post.copyright.license_content', theme.post_copyright.license_url, theme.post_copyright.license) }}
  </li>
</ul>
{% endif %}
```

### 6. 自定义文章的默认头部信息

在根目录的`/scaffolds/post.md`文件中添加：

```yaml
---
title: {{ title }}
date: {{ date }}
tags:             #标签
categories:       #分类
copyright: true   #版权声明
permalink: 01     #文章链接，有默认值
top: 0            #置顶优先级
password:         #密码保护
---
```

### 7. 文章加密访问（没有太大意义）

打开主题目录下`layout/_partials/head.swig`文件,在`meta`标签后面插入这样一段代码：

```javascript
<script>
    (function(){
        if('{{ page.password }}'){
            if (prompt('请输入文章密码') !== '{{ page.password }}'){
                alert('密码错误！');
                history.back();
            }
        }
    })();
</script>
```

然后文章头部信息中添加password：

```yaml
password: 你设置的密码
```
如果password后面为空，则表示不用密码。

### 8. 博文置顶

- **安装`hexo-generator-index `插件**

``` git
npm install hexo-generator-index --save
```
- **替换代码**

把`node_modules/hexo-generator-index/lib/generator.js `内的代码替换为：

```javascript
'use strict';
var pagination = require('hexo-pagination');
module.exports = function(locals){
  var config = this.config;
  var posts = locals.posts;
    posts.data = posts.data.sort(function(a, b) {
        if(a.top && b.top) { // 两篇文章top都有定义
            if(a.top == b.top) return b.date - a.date; // 若top值一样则按照文章日期降序排
            else return b.top - a.top; // 否则按照top值降序排
        }
        else if(a.top && !b.top) { // 以下是只有一篇文章top有定义，那么将有top的排在前面（这里用异或操作居然不行233）
            return -1;
        }
        else if(!a.top && b.top) {
            return 1;
        }
        else return b.date - a.date; // 都没定义按照文章日期降序排
    });
  var paginationDir = config.pagination_dir || 'page';
  return pagination('', posts, {
    perPage: config.index_generator.per_page,
    layout: ['index', 'archive'],
    format: paginationDir + '/%d/',
    data: {
      __index: true
    }
  });
};
```

- **设置top值**

在文章头部信息中添加` top` 值，数值越大文章越靠前:

```yaml
---
top: 100
---
```

### 9. 增强文章底部标签

修改模板`/themes/next/layout/_macro/post.swig`，搜索 `rel=”tag”>#`，将 `# `换成

```html
<i class="fa fa-tag"></i>
```

### 10. 修改打赏

- **修改文字与图片**

```yaml
# 打赏设置
reward_comment: 坚持原创技术分享，您的支持将鼓励我继续创作！
wechatpay: /assets/img/weixin.jpg
alipay: /assets/img/alipay.jpg
# bitcoin: /images/bitcoin.png
```

文字、图片位置可自行修改

- **字体不闪动设置**

修改文件`next/source/css/_common/components/post/post-reward.styl`，然后注释其中的函数`wechat:hover`和`alipay:hover`，如下：

```css
/* 注释文字闪动函数
#wechat:hover p{
animation: roll 0.1s infinite linear;
-webkit-animation: roll 0.1s infinite linear;
-moz-animation: roll 0.1s infinite linear;
}
#alipay:hover p{
animation: roll 0.1s infinite linear;
-webkit-animation: roll 0.1s infinite linear;
-moz-animation: roll 0.1s infinite linear;
}
*/
```

## 四、区块美化

### 1. 添加顶部加载条

在主题配置文件`_config.yml`中，找到`pace`并修改：

```yaml
pace: true
pace_theme: pace-theme-minimal
```
加载条样式有许多，在你找到的位置中可自行更换

### 2. 主页文章添加阴影效果

打开`/themes/next/source/css/_custom/custom.styl`,添加：

```css
 .post {
   margin-top: 60px;
   margin-bottom: 60px;
   padding: 25px;
   -webkit-box-shadow: 0 0 5px rgba(202, 203, 203, .5);
   -moz-box-shadow: 0 0 5px rgba(202, 203, 204, .5);
  }
```

### 3. 鼠标点击小红心的设置

将 [love.js](https://github.com/Neveryu/Neveryu.github.io/blob/master/js/src/love.js)文件添加到主题目录的`\source\js\src` 下。找到 `\layout\_layout.swing`文件， 在文件的后面， `body`标签之前 添加以下代码：

```html
<!-- 页面点击小红心 -->
<script type="text/javascript" src="/js/src/love.js"></script>
```

### 4. 搜索功能


- **安装**

```git
npm install hexo-generator-searchdb --save
```

- **配置**

在主题配置文件下，查找`local_search`:

```yaml
local_search:
  enable: false
  trigger: auto
  top_n_per_article: 1
```

`enable`修改为`true`

在根目录配置文件中，添加以下代码：

```yaml
search:
  path: search.xml
  field: post
  format: html
  limit: 10000
```
### 5. 页脚美化

- **隐藏网页底部powered By Hexo / 强力驱动**

在主题配置文件`_config.yml`中修改：
```yaml
copyright: false
```
- **添加文字或者链接**

在主题目录下的`layout/_partials/footer`，查找`powered-by`：

```swig
{% if theme.copyright %}
  <div class="powered-by">{#
  #}{{ __('footer.powered', '<a class="theme-link" href="https://hexo.io">Hexo</a>') }}{#
#}</div>
```
在上面代码之前添加你的文字，或者增加链接：

```html
<p>best for best!</p>    <!--文字-->
<a href="www.baidu.com">百度</a>   <!--链接-->
```
至于样式，这里不多介绍。需要了解html、css知识。
还可以设置访问量等信息，在文末参考文章中有介绍。

### 6. 侧边栏添加访问量等信息

- **获取不蒜子代码**

在[不蒜子](https://busuanzi.ibruce.info/)上获取代码：

```html
<script async src="//dn-lbstatics.qbox.me/busuanzi/2.3/busuanzi.pure.mini.js"></script>
```

- **添加js文件**

在主题目录下，找到`\layout\_layout.swing`文件， 在文件的后面， `</body>`标签之前，添加上面代码。

- **安装wordcount**

```git
npm install hexo-wordcount --save
```

 - **修改布局**

在主题目录下，找到`\layout\_macro\sidebar.swing`文件，查找`/nav`，在`</nav>`标签之前，添加下面代码：

```html
<br>
<br>
<div class="site-state-item site-state-posts" style="border-left:none;">
       <span class="site-state-item-count" id="busuanzi_value_site_pv"></span>
       <span class="site-state-item-name">浏览量</span>
</div>
<div class="site-state-item site-state-posts">
      <span class="site-state-item-count" id="busuanzi_value_site_uv"></span>
     <span class="site-state-item-name">访客量</span>
</div>
<div class="site-state-item site-state-posts">
      <span class="site-state-item-count">{{totalcount(site)}}</span>
      <span class="site-state-item-name">总字数</span>
</div>
```

### 7. 文章标签显示设置

在主题配置文件中，查找`post_meta`：
```yaml
# 文章标签显示设置
post_meta:
  item_text: true
  created_at: true  # 发表时间
  updated_at: false  # 更新时间
  categories: true  # 分类

# 文章字数显示设置（需要wordcount，前面已经下载）
post_wordcount:
  item_text: true
  wordcount: true  # 显示字数
  min2read: false   # 所需时间
  totalcount: false  # 总字数
  separated_meta: true # 分割符
```

- **文章阅读量**

注册[leancloud统计](https://leancloud.cn/)账号，按照next官方推荐文档 [为NexT主题添加文章阅读量统计功能](https://notes.wanghao.work/2015-10-21-%E4%B8%BANexT%E4%B8%BB%E9%A2%98%E6%B7%BB%E5%8A%A0%E6%96%87%E7%AB%A0%E9%98%85%E8%AF%BB%E9%87%8F%E7%BB%9F%E8%AE%A1%E5%8A%9F%E8%83%BD.html#%E9%85%8D%E7%BD%AELeanCloud)，
获取`AppID`以及`AppKey`并在主题的`_config.yml`文件中填写：

```yaml
leancloud_visitors:
  enable: true
  app_id: joaeuuc4hsqudUUwx4gIvGF6-gzGzoHsz
  app_key: E9UJsJpw1omCHuS22PdSpKoh
```

### 8. 添加友言评论

在[友言评论](https://www.uyan.cc/)中注册，并进入管理来获取你的id。
修改主题配置文件的友言id：
```yaml
# youyan 评论
youyan_uid: "2144889"
```

### 9. 添加jiathis分享按钮

将你的友言Id添加进去：
```yaml
# jiathis分享按钮
jiathis:
  uid: '2144889'
```

## 参考
>[next官网：第三方服务集成](https://theme-next.iissnan.com/third-party-services.html)
[hexo的next主题个性化教程:打造炫酷网站](https://shenzekun.cn/hexo%E7%9A%84next%E4%B8%BB%E9%A2%98%E4%B8%AA%E6%80%A7%E5%8C%96%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B.html)
>[Hexo-NexT搭建个人博客](https://neveryu.github.io/categories/Hexo/)

<blockquote class="blockquote-center">生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</blockquote>