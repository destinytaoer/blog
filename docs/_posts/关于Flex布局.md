---
title: 关于Flex布局
layout: post
category: 前端技术
tags:
  - web前端
  - css
date: 2017-10-16 11:42:24
update: 2017-10-16 11:42:24
comments: true
copyright: false
---

## 前言

![](https://upload-images.jianshu.io/upload_images/7295449-38044c92f204f8f7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

讲讲布局，传统的布局，是基于盒子模型，依赖 `display` + `position` + `float`属性。它对于特殊的布局非常不方便，如：垂直居中。

Flex 布局是 W3C 在 2009 年提出的新方案，可以简便、完整、响应式地实现各种页面布局。已经得到所有浏览器的支持。是未来布局的首选方案。下面就跟大家介绍Flex布局。

<!-- more -->

## 一、Flex布局是什么
Flex是Flexible Box的缩写，意为“弹性布局”，用来给盒子模型提供最大的灵活性。

任何一个容器都可以指定为Flex布局：
```css
.box {
   display: flex;
}
```
行内元素也可以使用Flex布局：
```css
.box {
   display: inline-flex;
}
```
Webkit 内核的浏览器，必须加上`-webkit`前缀：
```css
.box {
  display: -webkit-flex;
  display: flex;
```
>**注意**：设为Flex布局以后，其子元素的`float`、`clear`、`vertical-align`属性将失效

## 二、基本概念

![](https://upload-images.jianshu.io/upload_images/7295449-b39f755f51fc1c12.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- **设置flex的元素，称为Flex容器（flex container），它的所有子元素自动成为容器成员，称为Flex项目（flex item）**

- **容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）**
主轴的开始位置（与边框的交叉点）叫做`main start`，结束位置叫做`main end`；交叉轴的开始位置叫做`cross start`，结束位置叫做`cross end`。**主轴和交叉轴必定垂直。**

- **项目默认沿主轴排列**
单个项目所占据的主轴空间叫做`mian size`，占据的交叉轴空间叫做`cross size`。

## 三、容器的属性
- **flex-direction**
- **flex-wrap**
- **flex-flow**
- **justify-content**
- **align-items**
- **align-content**

### 1. flex-direction
`flex-direction`属性决定项目的排列方向，即主轴的方向。
```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```
![](https://upload-images.jianshu.io/upload_images/7295449-c0e2ad4cc2a1f840.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- `row`（默认值）：主轴为水平方向，起点在左端。
- `row-reverse`：主轴为水平方向，起点在右端。
- `column`：主轴为垂直方向，起点在上沿。
- `column-reverse`：主轴为垂直方向，起点在下沿。

### 2. flex-wrap
默认情况下，项目都排在一条线（又称"轴线"）上。`flex-wrap`属性定义，如果一条轴线排不下，如何换行。
```css
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```
- `nowrap`（默认）：不换行
![](https://upload-images.jianshu.io/upload_images/7295449-b4a678bc75ad110d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- `wrap`：换行，第一行在上方，正常顺序
![](https://upload-images.jianshu.io/upload_images/7295449-42d39422afd501b3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- `wrap-reverse`：换行：第一行在下方，相反顺序
![](https://upload-images.jianshu.io/upload_images/7295449-054925da3f14dcd1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>**注意**：`wrap-reverse`会使交叉轴的方向改变

### 3. flex-flow
`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`
```css
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```
### 4. justify-content
`justify-content`属性定义了项目在**主轴**上的对齐方式。
```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```
![](https://upload-images.jianshu.io/upload_images/7295449-3161e773beaa8a3f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

它可能取5个值，**具体对齐方式与轴的方向有关**。下面假设主轴为从左到右。
- `flex-start`（默认值）：左对齐，与主轴开始位置对齐
- `flex-end`：右对齐，与主轴结束位置对齐
- `center`： 居中，与主轴中心对齐
- `space-between`：两端对齐，项目之间的间隔都相等。
- `space-around`：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。 

### 5. align-items
`align-items`属性定义项目在**交叉轴**上如何对齐。
```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

![](https://upload-images.jianshu.io/upload_images/7295449-8e4cb62f3df11610.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

它可能取5个值。**具体的对齐方式与交叉轴的方向有关**，下面假设交叉轴从上到下。
- `flex-start`：交叉轴的起点对齐。
- `flex-end`：交叉轴的终点对齐。
- `center`：交叉轴的中点对齐。
- `baseline`: 项目的第一行文字的基线对齐。
- `stretch`（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

### 6. align-content
`align-content`属性定义了多根轴线的对齐方式。**如果项目只有一根轴线，就是只有一行，该属性不起作用**。
```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```
![](https://upload-images.jianshu.io/upload_images/7295449-aaba23b87456a372.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

该属性可能取6个值。
- `flex-start`：与交叉轴的起点对齐。
- `flex-end`：与交叉轴的终点对齐。
- `center`：与交叉轴的中点对齐。
- `space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布。
- `space-around`：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- stretch（默认值）：轴线占满整个交叉轴。

## 四、项目的属性
- **order**
- **flex-grow**
- **flex-shrink**
- **flex-basis**
- **flex**
- **align-self**

### 1. order
`order`属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
```css
.item {
  order: <integer>;
}
```

![](https://upload-images.jianshu.io/upload_images/7295449-3e4caf2cc2056a96.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 2. flex-grow
`flex-grow`属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
```css
.item {
  flex-grow: <number>; /* default 0 */
}
```

![](https://upload-images.jianshu.io/upload_images/7295449-2a4ee76e08936ddf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

如果所有项目的`flex-grow`属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的`flex-grow`属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

### 3. flex-shrink
`flex-shrink`属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```

![](https://upload-images.jianshu.io/upload_images/7295449-9b2f8f4fdff2f8bf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

如果所有项目的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小。如果一个项目的`flex-shrink`属性为0，其他项目都为1，则空间不足时，前者不缩小。**负值对该属性无效。**

### 4. flex-basis
`flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```
它可以设为跟`width`或`height`属性一样的值（比如350px），则项目将占据固定空间。

### 5. flex
`flex`属性是`flex-grow`, `flex-shrink`和`flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。
```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```
该属性有两个快捷值：`auto` (`1 1 auto`) 和 `none` (`0 0 auto`)。
建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

### 6. align-self
`align-self`属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。
```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```
![](https://upload-images.jianshu.io/upload_images/7295449-bced512271d25819.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

该属性可能取6个值，除了`auto`，其他都与`align-items`属性完全一致。

## 引自
> 本文引自阮一峰的网络日志：[Flex 布局教程：语法篇](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

<Quote>生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</Quote>