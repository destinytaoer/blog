---
title: CSS 渐变的简单使用
layout: post
category: 前端技术
tags:
  - CSS
date: 2017-10-09 21:31
update: 2017-10-09 21:31
comments: true
copyright: true
---

# 前言
重拾css后的文章，在观看了慕课网上的视频《重拾CSS的乐趣》中，看到了一些有意思的css效果。想起当初自己初学CSS3时画的[哆啦A梦](http://blog.sina.com.cn/s/blog_16b6763d10102ywcz.html)，总结了一番css制作的各种图形。渐变效果是在实现弧边三角的时候学习的。

>分享一下CodePen中的代码效果：
[弧形demo](https://codepen.io/destiny0904/pen/zEWmvW)
[三角形demo](https://codepen.io/destiny0904/pen/yzKZaX)
[多重边框demo](https://codepen.io/destiny0904/pen/ZXxwLa)

<!-- more -->

# 一、渐变简介

渐变是两种或多种颜色之间的平滑过渡。在创建渐变的过程中，可以指定多个中间颜色值，这个值称为色标。每个色标包含一种颜色和一个位置，浏览器从每个色标的颜色淡出到下一个，以创建平滑的渐变。

![](http://upload-images.jianshu.io/upload_images/7295449-cadb5b434c9fc216.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



渐变可以应用于任何使用背景图片的地方。这意味着在CSS样式中，渐变相当于背景图片，在理论上可在任何使用url() 值的地方采用，比如最常见的background-image、list-style-type以及前面介绍的CSS3的图像边框属性border-image。但直到目前为止，仅在背景图片中得到最完美的支持。


# 二、线性渐变

沿着一条直线的颜色过渡效果：从左侧到右侧、从右侧到左侧、从顶部到底部、从底部到顶部或着沿任何任意轴：![](http://upload-images.jianshu.io/upload_images/7295449-daa08b7b0eed80a0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 1. 基础语法
最新的浏览器都已经支持标准写法
``` css
-webkit-linear-gradient([<point>||<angle>,]?<stop>,<stop>[,<stop>]*)  //webkit引擎Chrome
-moz-linear-gradient([<point>||<angle>,]?<stop>,<stop>[,<stop>]*) //Gecko引擎Firefox
-o-linear-gradient([<point>||<angle>,]?<stop>,<stop>[,<stop>]*) //Presto引擎Opera
-ms-linear-gradient([<point>||<angle>,]?<stop>,<stop>[,<stop>]*) //Trident引擎IE
linear-gradient([[<angle> | to <side-or-corner> ],]?<color-stop>[,<color-stop>]+)//w3c标准
```
其中，point指向、angle角度代表方向，stop、color-stop代表各个颜色。

**关键字写法**：

```css
background-image: -webkit-linear-gradient(left,blue,white);
background-image: -moz-linear-gradient(left,blue,white);
background-image: -o-linear-gradient(left,blue,white);
background-image: -ms-linear-gradient(left,blue,white);
background-image: linear-gradient(to right,blue,white);
```

有前缀的，第一个参数表示起点，第二个参数表示起点颜色，第三个参数表示终点颜色
标准写法，第一个参数表示方向，第二个参数表示起点颜色，第三个参数表示终点颜色

关键字有：left、right、top、bottom 对两者都有效
left top、left bottom、right top、right bottom等组合只对标准有效

**角度写法**：

有前缀的：
1. 0deg、360deg、-360deg→left 
2. 90deg、-270deg →bottom
3. 180deg -180deg → right
4. 270deg -90deg → top

标准写法：
1. 0deg、360deg、-360deg→to top
2. 90deg、-270deg →to right
3. 180deg -180deg → to bottom
4. 270deg -90deg → to left

**多色渐变**：

在第二与第三个参数之间，即起点颜色与终点颜色之间，添加多个颜色参数
```css
background-image: -webkit-linear-gradient(left,blue,red,white);
background-image: -moz-linear-gradient(left,blue,red,white);
background-image: -o-linear-gradient(left,blue,red,white);
background-image: -ms-linear-gradient(left,blue,red,white);
background-image: linear-gradient(to right,blue,red,white);
```

## 2. 渐变长度

### 语法
只需在你定义的颜色后面加上空格，再加上长度，如百分比、px等。
```css
background-image: linear-gradient(270deg,blue 0%,red 14%,green 100%);
```
效果如下：
![](http://upload-images.jianshu.io/upload_images/7295449-c93a2919706b74aa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
0%到14%是蓝到红的渐变，14%到100%是红到绿的渐变。

>**注意**：如果定义的长度没有占满整个宽度或高度，那么起点或终点位置的空缺会由最近的颜色的**纯色**填满。

如：
```css
background-image: linear-gradient(270deg,blue 10%,red 14%,green 80%);
```
效果如下：

![](http://upload-images.jianshu.io/upload_images/7295449-ad889ea87b2bcb13.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 3. 特殊思考
颜色点被称为色标。
- 如果两个色标颜色是一样的，那么，就不会发生渐变，而是纯色。
- 如果两个不同颜色的点，不断接近，直至重叠，渐变也就逐渐消失了。

由此，得出了类似斑马线的彩色条纹，中间没有渐变效果。
```css
background-image: linear-gradient(
  270deg,
  blue 0%,blue 20%,
  red 20%,red 40%,
  green 40%,green 60%,
  orange 60%,orange 80%,
  yellow 80%,yellow 100%
);
```
效果如下：

![](http://upload-images.jianshu.io/upload_images/7295449-a7d80dc2fb754492.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


> 实践CodePen例子：[线性渐变](https://codepen.io/destiny0904/pen/PJRxJO)

# 三、径向渐变
CSS3径向渐变是圆形或椭圆形渐变。颜色不再沿着一条直线轴变化，而是从一个起点朝所有方向混合。比线性渐变更复杂。

## 1. 基础语法
最新的浏览器都已经支持标准写法
```css
-webkit-radial-gradient([<position> || <angle>,]?[<shape> || <size>,]?<color-stop>,<color-stop>[,<color-stop>]*);//webkit引擎Chrome
-moz-radial-gradient([<position> || <angle>,]?[<shape> || <size>,]?<color-stop>,<color-stop>[,<color-stop>]*);//Gecko引擎Firefox
-o-radial-gradient([<position> || <angle>,]?[<shape> || <size>,]?<color-stop>,<color-stop>[,<color-stop>]*); //Presto引擎Opera
-ms-radial-gradient([<position> || <angle>,]?[<shape> || <size>,]?<color-stop>,<color-stop>[,<color-stop>]*);  //Trident引擎IE
radial-gradient([[<shape> || <size>] [at <position>]?,| at <position>,]?<color-stop>[,<color-stop>]+);//w3c标准
```
其中，postion、angle代表方向，shape、size代表形状大小，color-stop代表各个颜色。

### 参数
- **position**
  <length>：用长度值指定径向渐变圆心的横坐标或纵坐标。可以为负值。
  <percentage>：用百分比指定径向渐变圆心的横坐标或纵坐标。可以为负值。
  left：设置左边为径向渐变圆心的横坐标值。
  center：设置中间为径向渐变圆心的横坐标值或纵坐标。
  right：设置右边为径向渐变圆心的横坐标值。
  top：设置顶部为径向渐变圆心的纵标值。
  bottom：设置底部为径向渐变圆心的纵标值。

- **shape**
  没有默认值，会根据容器选择。
  circle：如果<size>和<length>大小相等，那么径向渐变是一个圆形，也就是用来指定圆形的径向渐变。
  ellipse：如果<size>和<length>大小不相等，那么径向渐变是一个椭圆形，也就是用来指定椭圆形的径向渐变。

- **size**
  closest-side：指定径向渐变的半径长度为从圆心到离圆心最近的边；
  closest-corner：指定径向渐变的半径长度为从圆心到离圆心最近的角；
  farthest-side：指定径向渐变的半径长度为从圆心到离圆心最远的边；
  farthest-corner：指定径向渐变的半径长度为从圆心到离圆心最远的角；默认值
  <length>：指定圆的直径或椭圆的水平和垂直直径。

### 用法

- **最简单**
标准写法与加前缀一样
```css
  background-image: radial-gradient(red,blue);
```
**注意**：此时形状会根据你的容器来选择圆形或者椭圆。

- **加上形状**
标准写法与加前缀一样
```css
  background-image: radial-gradient(circle,red,blue);//圆形
  background-image: radial-gradient(ellipse,red,blue);//椭圆
```
**注意**：只加形状的话，在**正方形容器**中都会显示为圆形

- **加上大小**
加前缀写法测试无法添加长度或百分比大小，会与position设置位置的方式冲突，只能添加关键字。
下面以标准写法为例，大小可以使用长度，百分比，关键字。
```css
  background-image: radial-gradient(20px,red,blue);
  background-image: radial-gradient(20px 50px,red,blue);
```
一个值表示圆形直径，两个值表示水平和垂直直径。

**注意**：这时，添加关键字circle和ellipse的话，在大小的前面后面是一样的，但是必须以空格形式，如`ellipse 20px 50px`，且circle对应一个值和ellipse两个值，不然会出错。个人认为没必要添加。

- **加上方向**
标准写法与加前缀写法有所差别，方向可以使用长度，百分比，关键字。
```css
  background-image:-webkit-radial-gradient(20px 20px,red,blue);
  background-image: radial-gradient(20px at 20px 20px,red,blue);
```
**注意**：加前缀写法的形状要写在方向的后面，如：`20px 20px,circle`，以逗号隔开。标准写法的形状大小写在方向的前面，如：`ellipse 20px 50px at 20px 20px`，以空格隔开。

![位置图](http://upload-images.jianshu.io/upload_images/7295449-5463602048b279ea.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- **多色渐变**
标准写法与加前缀写法一样
```css
  background-image: radial-gradient(circle,red,blue,yellow,orange,green);
```

### 渐变长度
同前面的线性渐变。

### 特殊的思考
如前面的线性渐变，通过设置色标的距离，能够做出特别的效果。

- 同心彩环
```css
background-image: radial-gradient(
  circle,
  red 0%,red 20%,
  blue 20%,blue 40%,
  yellow 40%,yellow 60%,
  orange 60%,orange 80%,
  green 80%,green 100%
);
```
效果如下：
![](http://upload-images.jianshu.io/upload_images/7295449-0976c9861913dcd3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 挖掉圆
```css
background-image: radial-gradient(
  circle,
  rgba(255,255,255,0) 0%,rgba(255,255,255,0) 50%,
  rgba(0,255,0,1) 50%,rgba(0,255,0,1) 100%
);
```
设置透明度使得其不会覆盖其他元素。

效果如下：
![](http://upload-images.jianshu.io/upload_images/7295449-3baa085e0bf82030.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 弧边三角形
```css
background-image: radial-gradient(
  at top right,
  rgba(0,0,0,0) 71%,rgba(0,0,0,0) 71%,
  blue 0,blue 0
);
```
效果如下：
![](http://upload-images.jianshu.io/upload_images/7295449-e427938f11db5313.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


> 实践CodePen例子：[径向渐变](https://codepen.io/destiny0904/pen/pWKRwV)

# 四、重复渐变

通过`repeating-linear-gradient`和`repeating-radial-gradient`可以直接实现重复的渐变效果。

在没有重复渐变的属性之前，主要通过重复背景图像（使用background-repeat）创建线性重复渐变，但是没有创建重复的径向渐变的类似方式。

## 1. 重复线性渐变
语法跟线性渐变是一样的，但是使用百分比设置色标的位置没有多大的意义，但使用像素和其他的单位，重复线性渐变可以创建一些很酷的效果。
```css
  background-image: repeating-linear-gradient(red,green 40px, orange 80px); 
```

效果如下图所示：
![](http://upload-images.jianshu.io/upload_images/7295449-4203a5cc44ed8dc1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 2. 重复径向渐变
```css
  background-image: repeating-radial-gradient(red,green 40px, orange 80px);
```
效果如下图所示：
![](http://upload-images.jianshu.io/upload_images/7295449-54e8902bce4477b7.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 3. 实例——制作记事本纸张效果
每张纸都有横线条，左边有两条竖线从顶部延伸到底部。
```css
html,
body { 
  margin: 0; 
  padding: 0; 
  height: 100%;
}
body {
  background: -webkit-repeating-linear-gradient(to top, #f9f9f9, #f9f9f9 29px, #ccc 30px);
  background: repeating-linear-gradient( to top, #f9f9f9, #f9f9f9 29px, #ccc 30px ); 
  background-size: 100% 30px; 
  position: relative;
}
body:before {
  content: "";
  display: inline-block;
  height: 100%;
  width: 4px;
  border-left: 4px double #FCA1A1;
  position: absolute;
  left: 30px;
}
```

效果如下：

![](http://upload-images.jianshu.io/upload_images/7295449-c4114fbf7b8c3c40.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


# 参考
>  大漠老师的文章：1. [再说CSS3渐变——线性渐变](http://www.w3cplus.com/css3/new-css3-linear-gradient.html)  2. [再说CSS3渐变——径向渐变](http://www.w3cplus.com/css3/new-css3-radial-gradient.html)

**说明**：原文年代较为久远，有部分不符合实践，已经在本文中修改，望采纳。

<Quote>生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</Quote>