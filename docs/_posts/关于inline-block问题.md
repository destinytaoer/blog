---
title: 关于inline-block问题
layout: post
category: 前端技术
tags:
  - css
  - web前端
date: 2017-10-10 19:44:14
update: 2017-10-10 19:44:14
comments: true
copyright: true
---

## 前言

在重新学习css，做自己的学习demo时，设置一堆div在一行显示，呈现对比。
![](https://upload-images.jianshu.io/upload_images/7295449-645cd42dd9f41dea.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

结果如图，设置了`display:inline-block`之后，出现了部分下沉现象。
改为`float`之后，又恢复正常对齐。

不过，很快就得到了解决。于是，就写了这篇关于inline-block问题的文章，包含了以前分享过的间距问题，在这里与大家分享。

<!-- more -->

## 一、下沉问题
### 原因
#### 1. 行内元素有一个基线，所有在这一行中的元素都以这条基线为准对齐。
如文字：
![](https://upload-images.jianshu.io/upload_images/7295449-4952b99592ab7302.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
而行内块元素，如图片等，会以底部为准对齐：
![](https://upload-images.jianshu.io/upload_images/7295449-8ca4720b6246b9de.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 2. 文本在容器中默认是上对齐的，且不能设置其他垂直对齐方式
要设置垂直居中之类的，只能用p标签或者其他标签包含之后，设置这些标签的对齐方式

#### 3. 文本是老大，它不迁就别人，只有容器靠下来迁就它。
这是个很奇怪的现象，行内块元素的基线原本是底部，在有文本之后，该元素的基线就变成了文本的基线，为了与其他元素对齐，才导致下沉。

### 解决方案
#### 1. 设置`vertical-align`
元素的默认`vertical-align`为`baseline`，也就是基线。把它的值设置为其他值，就能实现其他方式的对齐，如`top`、`bottom`、`text-bottom`、`text-top`、`middle`等，同高度下，效果相同。
```css
display: inline-block;
verticla-align: top;
```
>[CSS vertical-align 属性](https://www.w3school.com.cn/cssref/pr_pos_vertical-align.asp)


#### 2. 使用``float``等其他方法替换`inline-block`
当然，在这里说到用其他方法还有很多，已经与`inline-block`无关了，所以也不多说。

## 二、间距问题

### 原因
行内块元素或者设置成`inline-block`的元素之间，会自动存在间距。

![](https://upload-images.jianshu.io/upload_images/7295449-0a1875e35ac9b536.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
这种表现是符合规范的应该有的表现。但是，在某些情况却会对我们的布局造成影响。

### 解决方法
#### 1. 使用margin负值
```css
.space a { 
    display: inline-block;
    margin-right: -3px;
}
```

margin负值的大小与上下文的字体和文字大小相关，其中，间距对应大小值可以参见“[基于display:inline-block的列表布局](https://www.zhangxinxu.com/wordpress/?p=1194)”一文part 6的统计表格：
![inline-block元素间间隔大小与字体和文字大小之前的关系表截图](https://upload-images.jianshu.io/upload_images/7295449-31a1fde60a029299.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

例如，对于12像素大小的上下文，Arial字体的`margin`负值为`-3`像素，Tahoma和Verdana就是`-4`像素，而Geneva为`-6`像素。
由于外部环境的不确定性，以及最后一个元素多出的父margin值等问题，这个方法不适合大规模使用。

#### 2. 使用font-size:0
类似下面的代码：
```css
.space {
    font-size: 0;
}
.space a {
    font-size: 12px;
}
```

这个方法，基本上可以解决大部分浏览器下inline-block元素之间的间距(IE7等浏览器有时候会有1像素的间距)。不过有个浏览器，就是Chrome, 其默认有**最小字体大小限制**，因为，考虑到兼容性，我们还需要添加：类似下面的代码：
```css
.space {
    font-size: 0;
    -webkit-text-size-adjust:none;
}
```

>点击这里查看示例：[font-size:0清除换行符间隙demo](https://www.zhangxinxu.com/study/201011/img-font-size-clear-blank.html)

**补充：**目前Chrome浏览器已经取消了最小字体限制。因此，上面的-webkit-text-size-adjust:none;代码估计时日不多了。

#### 3. 使用letter-spacing
类似下面的代码：
```css
.space {
    letter-spacing: -3px;
}
.space a {
    letter-spacing: 0;
}
```

该方法可以搞定基本上所有浏览器，不过Opera浏览器下有蛋疼的问题：最小间距1像素，然后，`letter-spacing`再小就还原了。

#### 4. 使用word-spacing
类似下面代码：
```css
.space {
    word-spacing: -6px;
}
.space a {
    word-spacing: 0;
}
```

一个是字符间距`letter-spacing`,一个是单词间距`word-spacing`，大同小异。据我测试，`word-spacing`的负值只要大到一定程度，其兼容性上的差异就可以被忽略。因为，貌似，word-spacing即使负值很大，也不会发生重叠。

>点击这里查看示例：[word-spacing与元素间距去除demo](https://www.zhangxinxu.com/study/201204/inline-block-space-word-spacing.html)

您使用Chrome浏览器，可能看到的是间距依旧存在。确实是有该问题，原因我是不清楚，不过我知道，可以添加`display: table;`或`display:inline-table;`让Chrome浏览器也变得乖巧。
```css
.space {
    display: inline-table;
    word-spacing: -6px;
}
```
#### 5. 其他成品方法
下面展示的是[YUI 3 CSS Grids ](https://yuilibrary.com/yui/docs/cssgrids/)使用`letter-spacing`和`word-spacing`去除格栅单元见间隔方法（注意，其针对的是block水平的元素，因此对IE8-浏览器做了hack处理）：
```css
.yui3-g {
    letter-spacing: -0.31em;/* webkit */
    *letter-spacing: normal; /* IE < 8 重置 */
    word-spacing: -0.43em; /* IE < 8 && gecko */
}
.yui3-u {
    display: inline-block;
    zoom: 1;
    *display: inline; /* IE < 8: 伪造 inline-block */
    letter-spacing: normal;
    word-spacing: normal;
    vertical-align: top;
}
```

以下是一个名叫[RayM](https://raym31.home.comcast.net/)的人提供的方法：
```css
li {
    display:inline-block;
    background: orange;
    padding:10px;
    word-spacing:0;
}
ul {
    width:100%;
    display:table; /* 调教webkit*/
    word-spacing:-1em;
}
.nav li {
    *display:inline;
}
```

也就是上面一系列CSS方法的组组合合。

## 感谢
>[去除inline-block元素间间距的N种方法](https://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/)
[inline-block之后意外发现块下沉](https://blog.csdn.net/qq_27545151/article/details/48598397)

<Quote>生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</Quote>
