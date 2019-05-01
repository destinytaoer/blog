---
title: Canvas 画五角星
layout: post
category: 前端技术
tags:
  - Canvas
  - JavaScript
date: 2017-11-07 16:58
update: 2017-11-07 16:58
comments: true
copyright: true
---
![](http://upload-images.jianshu.io/upload_images/7295449-bbc574f24e92599c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 前言

学习 canvas，更多的是需要动手实践，下面就从一个相对简单的例子：五角星开始吧！

> 不懂 canvas 的同学，请先学习：[Canvas 画布](http://www.jianshu.com/p/587381056df4)

<!-- more -->

## 一、几何模型
![](http://upload-images.jianshu.io/upload_images/7295449-8fb47201f54da9f6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


由上图可以清晰的得到大概的思路，大圆和小圆上的点相间相连，就可以的到五角星。

>我的做法是从**右下角开始**画。因为 **canvas 的坐标系的第一象限**，实际上是右下角，而不是右上角。这样，就可以避免纠结于 `sin()` 和 `cos()` 的正负关系。

## 二、绘制
```javascript
var canvas = document.getElementById('canvas');
var cxt = canvas.getContext('2d');

var w = canvas.width;
var h = canvas.height;
var r1 = w / 2;
var r2 = r1 / 2;
var x1,x2,y1,y2;

cxt.translate(r1, r1);
cxt.beginPath();
for (var i = 0; i < 5; i++) {
  x1 = r1 * Math.cos((54 + i*72)/180*Math.PI);
  y1 = r1 * Math.sin((54 + i*72)/180*Math.PI);
  x2 = r2 * Math.cos((18 + i*72)/180*Math.PI);
  y2 = r2 * Math.sin((18 + i*72)/180*Math.PI);

  cxt.lineTo(x2, y2);
  cxt.lineTo(x1, y1);
}
cxt.closePath();

cxt.stroke();
```

- 获取绘图上下文环境
- 获取 `canvas` 的宽高，并由此定义两个圆的半径
- 将原点重置到 `(r, r)` 圆心位置
- 使用 `lineTo()` 绘制路径

>**注意**：
>1. 因为右下角第一个点是小圆上的，所以循环中先画小圆上的点。
>2. 在 `beginPath()` 方法后，可以直接使用 `lineTo()` 代替 `moveTo()`。
>3. 注意闭合路径使得最后一个点与开始的点连成线。


## 三、拓展
这样的五角星太单一，如果想获取其他的五角星形状，该如何处理。

观察下，大圆的半径是由 canvas 的宽高决定的，而小圆的半径则是可以改变的。这里的代码中 `r1 = r2 / 2`。

试着改变这个比例：

`r1 = r2 / 2.5`
![](http://upload-images.jianshu.io/upload_images/7295449-c8c28e3bce7e3ecb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

`r1 = r2 / 3`
![](http://upload-images.jianshu.io/upload_images/7295449-ec0bea1c6f18ad22.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


你还可以继续调整得到了不一样的五角星！

## 四、封装
为了复用，可以将其封装成两个函数：
```javascript
/*****************************
 * cxt 为绘图上下文环境
 * r 为大圆半径
 * x，y 为相对 canvas 原点的坐标位置 
 * rot 为顺时针旋转角度
 ****************************/
function draw_start(cxt, r, x, y, rot) {
  cxt.save();
  cxt.translate(x, y);
  cxt.rotate(rot/180*Math.PI);
  cxt.scale(r, r);
  startPath(cxt);

  cxt.stroke();
  cxt.restore();
}
//五角星标准路径
function startPath(cxt) {
  cxt.beginPath();
  for (var i = 0; i < 5; i++) {
    var x1 = Math.cos((54 + i*72)/180*Math.PI);
    var y1 = Math.sin((54 + i*72)/180*Math.PI);
    var x2 = Math.cos((18 + i*72)/180*Math.PI) * 0.5;
    var y2 = Math.sin((18 + i*72)/180*Math.PI) * 0.5;

    cxt.lineTo(x2, y2);
    cxt.lineTo(x1, y1);
  }
  cxt.closePath();
}
```

<Quote>生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</Quote>