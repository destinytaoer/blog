---
title: githubpages + hexo 搭建个人博客
layout: post
category: 博客建站
tags:
  - hexo
  - github
date: 2017-09-18 21:15:58
update: 2017-10-14 12:15:58
comments: true
copyright: true
---

## 前言

本文仅仅是使用hexo以及gitHubPages 快速搭建个人博客，后续还会分享详细的内容

>官方中文文档：
https://hexo.io/zh-cn/docs/index.html

<!-- more -->
## 一、准备

[Node.js](https://nodejs.org/en)
作用：node.js用来创建hexo博客框架
[Git客户端](http://git-scm.com/download)
作用：把本地的hexo内容提交到github上去

## 二、Hexo

打开下载好的**Git Bash**或者**Git Shell**，作用相当于命令行。

>过程中使用的是cnpm，下载node会自带npm，下面使用的是[淘宝镜像cnpm](https://npm.taobao.org/)

### 1. 安装Hexo

``` 
cnpm install -g hexo
```

-g为全局安装

### 2. 创建博客根文件夹

进入要创建博客的文件夹下（如E:\Hexo），执行以下指令，Hexo 即会自动在目标文件夹建立网站所需要的所有文件。

```
hexo init  "文件夹名"
```

文件夹名称可以不写，那样就会把所有文件放在你先前进入的文件夹

### 3. 安装依赖包

进入到你的博客文件夹下：
```
cnpm install
```
把package.json文件所定义的所有依赖项全部安装

### 4. 运行

常用命令

```
hexo g #完整命令为hexo generate,用于生成静态文件
hexo s #完整命令为hexo server,用于启动服务器，主要用来本地预览
hexo d #完整命令为hexo deploy,用于将本地文件发布到github上
hexo n #完整命令为hexo new,用于新建一篇文章
hexo g -d #两个命令的合成，一般在修改或者添加博文后直接使用这个命令
```

运行下面代码：

```
hexo g
hexo s
```
访问http://localhost:4000， 此时，你就能看到了一个漂亮的博客。
默认主题为：landscape

## 三、注册Github帐号

已经有Github帐号跳过此步

1. 首先进入[Github](https://github.com/)进行注册

2.  然后，创建repository

repository相当于一个仓库，用来放置你的代码文件。首先，登陆进入[Github](https://github.com/)，并进入个人页面
然后New一个repository
    
![](http://upload-images.jianshu.io/upload_images/7295449-fcf3135671c31605.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
]

点进仓库，点击settings设置

![](http://upload-images.jianshu.io/upload_images/7295449-3865d17ea4339e95.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

下拉到GitHub Pages设置

![](http://upload-images.jianshu.io/upload_images/7295449-e6dc1a9a35e0ffa8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

source选中 master bransh ，然后save，就会出现一个网址。

## 四、部署本地文件到github

### 1. 安装依赖
```
cnpm install hexo-deployer-git --save
```
### 2. 编辑配置文件

编辑博客文件夹下的_config.yml文件。

在_config.yml最下方，添加如下配置：
```
deploy: 
    type: git
    repo: https://github.com/用户名/仓库名/
    branch: master
```


### 3. 配置SSH
输入一下命令：

```
ssh -T git@github.com
```

你应该会看到有警告，但是会有选项（yes/no），输入“yes”就好


### 4. 运行
在命令行中运行
```
hexo g -d
```
完成后，打开原先的仓库网址，就能看到你的博客。


## 五、写博文

### 1.  新建博文
```
hexo new "my new post"
```
### 2. 编辑博文

>博文使用的是markdown语言，如果有不会使用的，请参考我的博文：
[mardown学习总结](http://destinytaoer.cn/2017/07/markdown%E8%AF%AD%E6%B3%95/)

在博客目录下\source\_post中打开my-new-post.md，进行编辑

### 3. Front-matter
>博文的头部，官方文档介绍：[Front-matter](https://github.com/hexojs/site/edit/master/source/zh-cn/docs/front-matter.md)

Front-matter 是文件最上方以 ---分隔的区域，用于指定个别文件的变量，如：
``` 
---
title: Hello World   #博文标题名
date: 2013/7/13 20:46:25  #发布时间
update:              #更新时间
categories: blog     #文章文类
tags: [life，travel]  #文章标签 只有一个标签时：tags: travel
comments: true       #是否能够评论
---
#这里是正文，用markdown写
#你可以选择写一段显示在首页的简介后，加上<!--more-->
#在<!--more-->之前的内容会显示在首页，之后的内容会被隐藏，当游客点击Read more才能看到。
```

写完文章后，你可以直接运行hexo g -d 上传到github。

## 六、创建页面

使用命令：
```git
hexo new page "pagename"
```

### 1. 归档页面

```git
hexo new page "archives"
```

进入博客目录的`source/archives/index.md`，添加`type`值：
``` yaml
---
type: archives
---
```

### 2. 分类页面

```git
hexo new page "categories"
```
进入博客目录的`source/categories/index.md`，添加`type`值：
``` yaml
---
type: categories
---
```
### 3. 标签页面

```git
hexo new page "tags"
```
进入博客目录的`source/tags/index.md`，添加`type`值：
``` yaml
---
type: tags
---
```
>**注意**：上述页面都有对应插件生成，只需更改`type`值

### 4. 自定义页面
以上述同样的方法创建页面
1. 需要模板，自行修改对应的`index.md`文件内容
2. 不需要模板，完全自定义
	- 首先，在博客目录下的`_config.yml`文件中，在`skip_render`后面添加页面路径
	- 修改`index.md`文件，或者将`index.md`修改成`index.html`文件，自行添加样式等

## 参考

>胖逆的嘟嘟的博文：
[hexo 的八篇干货](http://www.cnblogs.com/tengj/category/809716.html)

<blockquote class="blockquote-center">生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</blockquote>