---
title: Canvas 画时钟
layout: post
category: 前端技术
tags:
  - Canvas
  - JavaScript
date: 2017-11-06 10:24
update: 2017-11-06 10:24
comments: true
copyright: true
---

![](http://upload-images.jianshu.io/upload_images/7295449-0b71f1c1a9625a0a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 前言
不管学习什么，不动手去做，永远不能熟练掌握。学习了 canvas API，会觉得只要按照直线、圆等画法去画，canvas 太简单了。可是，当你真正去画的时候，会遇到许多的问题。

下面介绍的是 canvas 时钟，主要是与大家分享我的学习过程。

> 不懂 canvas 的同学，请先学习：[Canvas 画布](http://www.jianshu.com/p/587381056df4)

<!-- more -->

## 一、相关几何知识
钟面是一个圆，主要包含每个小时数字、以及刻度，它们的位置坐标应该如何计算呢？


![](http://upload-images.jianshu.io/upload_images/7295449-44ac3e997d2266ea.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


从上图很容易得到：
- x = r * cos(角度)
- y = r * sin(角度)

由于 `Math` 对象里面的 `sin()` 和 `cos()` 方法使用的是弧度，所以需要进行转换

![](http://upload-images.jianshu.io/upload_images/7295449-568575d3788690f3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

但是，在这次的使用中，实际上并没有用到，因为钟面刻度等都是等比例划分的，只要将 2 PI 除以刻度数等就可以得到相应弧度。

时针、分针、秒针，都是直线通过旋转一定的角度得到


## 二、画钟面函数
使用 canvas 画布，首先都应该先获取它的绘图上下文环境。
```javascript
var canvas = document.getElementById('clock');
var cxt = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;
var r = width / 2;
```

获取了 canvas 元素的宽高，同时定义半径 r 为最大的半径，即宽度的一半。

```javascript
function drawBg() {
  //重置原点
  cxt.save();
  cxt.translate(r,r);

  // 画时钟外圈
  cxt.beginPath();
  cxt.arc(0, 0, r - 5, 0, 2*Math.PI, true);
  cxt.lineWidth = 8;
  cxt.stroke();

  //画小时数
  var hour = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];

  hour.forEach(function(num,i){
	var rad = 2 * Math.PI / 12 * i;
	var x = Math.cos(rad) * (r - 30);
	var y = Math.sin(rad) * (r - 30);
	cxt.font = "18px sans-serif"
	cxt.textAlign = "center";
	cxt.textBaseline = "middle";
	cxt.fillText(num, x, y);
  });

  // 画刻度
  for (var i = 0; i < 60; i++) {
	var rad = 2 * Math.PI / 60 * i;
	var x = Math.cos(rad) * (r - 18);
	var y = Math.sin(rad) * (r - 18);

	cxt.beginPath();
	if(i%5 == 0){
	  cxt.fillStyle = "#000";
	  cxt.arc(x, y, 2, 0, 2*Math.PI, true);
	}
	else {
	  cxt.fillStyle = "#bbb";
	  cxt.arc(x, y, 2, 0, 2*Math.PI, true);
	}	
	cxt.fill();
  }
}
```
**重点**：
- `cxt.save()` 这里保存了原来的原点位置，是为了在清除 canvas 的时候方便调用 `cxt.clearRect()` 方法

- `cxt.translate(r,r)`，将原点放置在 （r，r）位置，因为所有的刻度数等都是围绕同心圆来进行的，原点放置在圆心上，是为了方便计算位置坐标。注意，使用了这个方法，后面的绘图都会基于这个原点绘制

- 注意每画一个图形，都应该保持开启一条新的路径，避免画笔等的重复

- 小时数字从 3 画起，并按顺时针画，是因为 canvas 的坐标系，向右为 x 正轴，向下为 y 正轴，为避免 `sin()` 和 `cos()` 的正负值与 `x`、 `y`的正负值不对应。

- `cxt.textAlign = "center"` 和 `cxt.textBaseline = "middle"`，这是文本的对齐方法，不设置将会导致小时数字的偏移

## 三、画时针

```javascript
// 画时针
function drawHour(hour, minute) {
  cxt.save();
  var rad = 2 * Math.PI / 12 * hour + 2 * Math.PI / 12 * minute / 60;
  cxt.beginPath();
  cxt.rotate(rad);
  cxt.moveTo(0, 15);
  cxt.lineTo(0, -r/2);
  cxt.lineWidth = 5;
  cxt.lineCap = "round";
  cxt.stroke();
  cxt.restore();
}
```
**重点**：
- 由于每次都旋转都会影响后面的绘图，所以要在这里保存绘图环境，在绘制时针结束后，重置回到原来的绘图环境

- 千万不要忘记，时针的旋转要受到分钟数的影响

## 四、画分针、秒针、中心点函数
```javascript
// 画分针
function drawMinute(minute) {
  cxt.save();
  var rad = 2 * Math.PI / 60 * minute;
  cxt.beginPath();
  cxt.rotate(rad);
  cxt.moveTo(0, 18);
  cxt.lineTo(0, -r + 40);
  cxt.lineWidth = 3;
  cxt.lineCap = "round";
  cxt.stroke();
  cxt.restore();
}
// 画秒针
function drawSecond(second) {
  cxt.save();
  var rad = 2 * Math.PI / 60 * second;
  cxt.beginPath();
  cxt.rotate(rad);
  cxt.moveTo(0, 25);
  cxt.lineTo(2, 25);
  cxt.lineTo(-2, 25);
  cxt.lineTo(-1, -r + 25);
  cxt.lineTo(1, -r + 25);
  cxt.lineTo(2, 25);
  cxt.lineWidth = 1;
  cxt.fillStyle = "#f00";
  cxt.fill();
  cxt.restore();
}
// 画中心点
function drawDot() {
  cxt.beginPath();
  cxt.arc(0, 0, 4, 0, 2*Math.PI,true);
  cxt.fillStyle = "#fff";
  cxt.fill();
}
```
`重点`：
- 保存绘图环境，同上面的时针

## 五、绘制真实时间
```javascript
// 绘制真实时间
function draw() {
  cxt.clearRect(0, 0, width, height);
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  drawBg();
  drawHour(hour,minute);
  drawMinute(minute);
  drawSecond(second);
  drawDot();
  cxt.restore();
}

draw();
setInterval(function(){	
  draw();	
},1000);
```
**重点**：
- `cxt.restore()` 这里重置的是画钟面的时候保存的绘图环境，目的是将原点重置回默认，才能使用清除矩形区域方法

- `cxt.clearRect(0, 0, width, height)` 清除 canvas 区域，然后进行重新绘制。因为每次画的时针、分针等，都会保留，所以要清空

- 调用 `setInterval()` 方法之前，应该调用一次绘制，否则会出现延迟一秒的展现

## 六、优化
现在的时针是基于 `200px` 的正方形绘制的。那么，如果将宽高变大，会出现什么情况？
600px：

![](http://upload-images.jianshu.io/upload_images/7295449-52e58fad727d2e67.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


时针会变丑，**大小不成比例**，也就是失真。

那么怎样才能不失真呢？

>**由于时钟是一个正方形区域，是一个圆的体现，那么所有有关大小只需要与半径或者宽度成比例，就可以实现。**

我们先来计算它们的比例关系：
```
200 / width = 13 / length
```
也就是说，如果在 `200px` 的宽度下，表现为 `13px` 的大小，那么在 `width` 下，应该表现为 `length` 大小。

即：`length = 13 * width/200`
可得**比例关系**就是：`width/200`

定义一个比例：
```javascript
var rem = width / 200;
```

只要在后面的各个函数中，有关联的大小乘以这个比例关系，就可以实现，不管多大宽度的时钟，都能完美的展现。

<Quote>生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</Quote>