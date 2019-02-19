---
title: Transform 引起的 z-index "失效"
layout: post
category: 前端技术
tags:
  - css
  - web前端
date: 2017-10-12 18:31:44
update: 2017-10-12 18:31:44
comments: true
copyright: true
---

## 前言
重新学习CSS后的第三天，学习制作阴影的过程中，发现的问题：
设置了`box-shadow`后展现的阴影：

![](https://upload-images.jianshu.io/upload_images/7295449-470275eaf0d0295a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

添加`transform:rotate(10deg);`后的效果：

![](https://upload-images.jianshu.io/upload_images/7295449-4fc582a383857820.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>查看CodePen例子：[阴影效果](https://codepen.io/destiny0904/pen/mBjRmJ)

一脸懵逼！再修改z-index完全没有效果。

百度之后，找到了问题的答案，也自己摸索着找到了这个问题的解决办法。下面与大家分享。

<!-- more -->

## 一、原因

- 给元素设置transform属性会创建一个新的`stacking context`，译作**层叠上下文**的一个区域。
- 原本的层叠规则就会发生变化，导致了设置了transform的元素变成了一个层叠上下文容器，也就相当于最底层。
- 与其他兄弟元素或者外层元素依然保持原来的层叠规则，影响的只是其子元素。

## 二、什么是层叠上下文

相信大家都知道，css是层叠样式表，层叠上下文就是html文件渲染的时候，各个元素的堆叠规则，是css中非常重要的潜在规则。

>详细规则请点击：[深入理解CSS中的层叠上下文和层叠顺序](https://destinytaoer.cn/2017/10/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E5%B1%82%E5%8F%A0%E4%B8%8A%E4%B8%8B%E6%96%87%E5%92%8C%E5%B1%82%E5%8F%A0%E9%A1%BA%E5%BA%8F/)

## 三、什么情况会创建新的区域
MDN上有相关的介绍：
>- 根元素(HTML)
>- 设置了position为absolute或relative，且z-index不是auto的元素
>- 设置了z-index，且不为auto的流动元素
>- 设置了opacity，且不为1的元素
>- 设置了transform，且不为none的元素
>- 设置了mix-blend-mode值，且不为normal的元素
>- 设置了isolation 为 isolate的元素on mobile WebKit and Chrome 22+, 
>- 设置position为fixed的元素

## 四、解决办法
不使用`transform`是不可能的了，那么该如何解决呢？我想到的办法是再覆盖，覆盖掉不让看见的东西。

**1. 首先在元素里再创建一个标签**
因为元素的before、after伪类都被占用了，只能再创建标签覆盖。

**2. 应用新标签的before伪类**
```css
.shadow5 p::before {
	content: "";
	position: absolute;
	z-index: -1;
	background: #fff;
	box-shadow: 0 0 40px rgba(0, 0, 0, 0.1) inset;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
}
```
设置定位，以原来的元素为基准，top、bottom、right、left为0，以充满整个容器
**注意**：z-index的设置与原来元素的before、after中的z-index有关，必须比它的值大，不然after伪类又会显示在上面。
![](https://upload-images.jianshu.io/upload_images/7295449-90f36940b3b0480d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 参考 
>张鑫旭博文：[深入理解css中的层叠上下文和层叠顺序](https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/)Segmentfault回答：[Transform 引起的 z-index "失效"](https://segmentfault.com/q/1010000002480824)
豆瓣文章：[小心 CSS3 Transform 引起的 z-index "失效"](https://www.douban.com/note/343402554/)

<common-Quote>生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</common-Quote>
