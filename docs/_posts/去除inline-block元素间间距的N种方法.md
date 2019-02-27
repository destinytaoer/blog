---
title: 去除inline-block元素间间距的N种方法（转）
layout: post
category: 前端技术
tags:
  - css
  - web前端
date: 2017-08-09 15:54:38
update: 2017-08-09 15:54:38
comments: true
copyright: false
---

## 一、现象描述
真正意义上的 inline-block 水平呈现的元素间，换行显示或空格分隔的情况下会有间距，很简单的个例子：
```html
<input /> <input type="submit" />
```

<!-- more -->

间距就来了~
我们使用CSS更改非inline-block水平元素为inline-block水平，也会有该问题：
```css
.space a {
    display: inline-block; 
    padding: .5em 1em;
    background-color: #cad5eb;
}
```
```html
<div class="space">
   <a href="##">惆怅</a> 
   <a href="##">淡定</a>
   <a href="##">热血</a>
</div>
```

![](https://upload-images.jianshu.io/upload_images/7295449-8ae114fa31419b20.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>点击这里看示例：[inline-block元素间间距demo](https://www.zhangxinxu.com/study/201204/inline-block-space-example.html)

这种表现是符合规范的应该有的表现。
不过，这类间距有时会对我们布局，或是兼容性处理产生影响，需要去掉它，该怎么办呢？以下展示N种方法（欢迎补充）！

## 二、方法之移除空格

元素间留白间距出现的原因就是标签段之间的空格，因此，去掉HTML中的空格，自然间距就木有了。考虑到代码可读性，显然连成一行的写法是不可取的，我们可以：
```html
<div class="space">
    <a href="##">
    惆怅</a><a href="##">
    淡定</a><a href="##">
    热血</a>
</div>
```
或者是：
```html
<div class="space">
    <a href="##">惆怅</a
    ><a href="##">淡定</a
    ><a href="##">热血</a>
</div>
```
或者是借助HTML注释：
```html
<div class="space">
    <a href="##">惆怅</a><!--
    --><a href="##">淡定</a><!--
    --><a href="##">热血</a>
</div>
```
等。

## 三、使用margin负值
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

## 四、让闭合标签吃胶囊

如下处理：
```html
<div class="space">
    <a href="##">惆怅
    <a href="##">淡定
    <a href="##">热血</a>
</div>
```

注意，为了向下兼容IE6/IE7等喝蒙牛长大的浏览器，最后一个列表的标签的结束（闭合）标签不能丢。

在HTML5中，我们直接：
```html
<div class="space">
    <a href="##">惆怅
    <a href="##">淡定
    <a href="##">热血
</div>
```

好吧，虽然感觉上有点怪怪的，但是，这是OK的。

>点击这里查看示例：[无闭合标签去除inline-block元素间距demo](https://www.zhangxinxu.com/study/201204/inline-block-space-skip-close-tag.html)

![无闭合标签与inline-block水平元素间距的去除](https://upload-images.jianshu.io/upload_images/7295449-cf2cd33ac8a958a9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 五、使用font-size:0
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

**补充：**根据小杜在评论中中的说法，目前Chrome浏览器已经取消了最小字体限制。因此，上面的-webkit-text-size-adjust:none;代码估计时日不多了。

## 六、使用letter-spacing
类似下面的代码：
```css
.space {
    letter-spacing: -3px;
}
.space a {
    letter-spacing: 0;
}
```

根据我去年的测试，该方法可以搞定基本上所有浏览器，包括吃“东鞋”、“西毒(胶囊)”、“南地(沟油)”、“北钙(三鹿)”的IE6/IE7浏览器，不过Opera浏览器下有蛋疼的问题：最小间距1像素，然后，`letter-spacing`再小就还原了。

## 七、使用word-spacing
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

## 八、其他成品方法
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

## 引自

- 原文地址：[去除inline-block元素间间距的N种方法](https://www.zhangxinxu.com/wordpress/?p=2357)

<Quote>生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</Quote>
