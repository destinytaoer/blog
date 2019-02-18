---
title: Hexo + yilia主题 + githubpages博客添加友言评论功能
category: 博客建站
tags:
  - hexo
  - github
  - yilia
date: 2017-09-19 12:48:41
update: 2017-09-20 22:48:41
copyright: true
comments: true
---

## 前言

Hexo博客的Yilia主题中评论系统只提供了畅言、网易云跟帖、多说和Disqus。
由于多说评论、网易云跟帖已经关闭系统，畅言需要域名备案，而github是国外的，没有备案，所以尝试了其他第三方评论系统————**友言**。

友言使用极其简单，本地成功实现，但是**上传上github后发现无法出现评论**。

在多次查找与尝试下，终于成功，下面与大家分享我的方法。

>注意：本文是在前面都配置好的情况下进行的，如果最初并没有配置好，请查看：
[hexo+gitHubPages 快速搭建个人博客](https://destinytaoer.cn/2017/09/githubpages-hexo-%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/)

<!-- more -->

## 一、注册友言id

### 1. 注册
在[友言官网](https://www.uyan.cc/)上直接使用qq登录，注册成功直接出来代码
![](https://upload-images.jianshu.io/upload_images/7295449-37980e74302972eb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 2. 获取你的id
进入后台管理，你会看到：
![](https://upload-images.jianshu.io/upload_images/7295449-e5dd6750141f186e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
获取到你的id

## 二、博客文件配置
### 1. 创建uyan.ejs文件
在`hexo\themes\yilia\layout_partial\post\`下新建一个`uyan.ejs`的文件
将上述代码copy到该文件中。
### 2. 修改article.ejs文件
修改`hexo\themes\yilia\layout\_partial\article.ejs`,找到
```
<% if (!index && post.comments){ %>
```
在此下方添加下列代码：
```
 <% if (theme.uyan){ %>
  <%- partial('post/uyan', {
  		key: post.slug,
  		title: post.title,
  		url: config.url+url_for(post.path)
  	}) %>
  <% } %>
```

### 3. 修改yilia主题配置文件_config.yml
修改`hexo\themes\yilia`下的`_config.yml`,在空白处,添加如下配置:
```
uyan: '你的友言id'
```
>注意：
要用**引号**包含你的id
uyan: 后面必须添加一个**空格**，这是Hexo博客的配置要求

这样友言已经配置好了,重新编译，运行:
hexo clean
hexo g
hexo s
访问： https://localhost:4000
**本地实现评论系统成功！**

## 三、解决Github发生错误
上传到github上后，打开你的github页面，发现评论并没有出现。按F12，发现报错：
```
The page at 'https...' was loaded over HTTPS,
 but requested an insecure stylesheet 'https://..../css/1_6/background.css'. 
This request has been blocked; the content must be served over HTTPS.
```
原因：**https下的http加载会被阻塞**，也就是无法加载友言的那个js文件

查明之后，发现友言并不支持https，但是仍然有人实现了，并没有详细的解说。而我注意到域名的更改，如果改了域名，那么就不是https下了。实践证明，是可行的。

### 1. 域名注册

这里不详细说明，没有域名可自行百度：腾讯云、阿里云、万网等注册。
域名不贵，基本就几块、十几块一年，毫无问题

### 2. Github绑定域名

#### 添加CNAME文件

>注意，`CNAME`文件必须放进博客目录`source`文件夹下，不然会被`hexo clean`命令清除

在文件内写入你的域名，**不加www**



### 3. 域名解析

![](https://upload-images.jianshu.io/upload_images/7295449-bad38ddb5a3b23c8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

按下图添加记录：
![](https://upload-images.jianshu.io/upload_images/7295449-9caf93d06edab157.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


现在基本已经成功，你可以访问你的域名来查看你的博客

## 四、修改配置文件
查看你的博客后，你会发现，头像无法显示，链接发生错误的情况。

>原因：
**根链接发生错误**，在不添加域名的时候，你的`root`会添加`/仓库名/`,各种链接都会自动添加这个根，而在添加域名后，域名直接指向你的仓库，此时链接仍然会自行添加根而发生链接错误。

### 博客目录下的_config.yml文件

修改根为'/'
```
root: /
```
### 主题目录下的_config.yml文件

修改根同上，并去掉头像等链接的仓库名

**此时就大功告成了！**

## 参考

>[为next添加友言评论支持](https://www.jianshu.com/p/4729e92fddbe)
[hexo yilia 添加友言评论支持](https://jingyan.baidu.com/article/4b52d702c8eb8dfc5d774b71.html)
[使用GitHub页面的自定义域](https://help.github.com/articles/using-a-custom-domain-with-github-pages/)
[github怎么绑定自己的域名？](https://www.zhihu.com/question/31377141)


<blockquote class="blockquote-center">生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</blockquote>