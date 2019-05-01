---
title: Canvas 画布
layout: post
category: 前端技术
tags:
  - Canvas
  - JavaScript
date: 2017-10-31 09:21
update: 2017-10-31 09:21
comments: true
copyright: true
---

## 一、简介
>HTML5 中的定义：“它是依赖分辨率的位图画布，你可以在 canvas 上面绘制任何图形，甚至加载照片。”

- **矩形空白区域**
- **通过 javascript 绘制图形**
- **可以加载图片**

>[canvas 坐标系](https://codepen.io/destiny0904/pen/XzrZrv)

<!-- more -->

## 二、HTML 部分
```
<canvas id="a" width="300" height="300">您的浏览器不支持 canvas</canvas>
```
简单的在 HTML 页面添加一个 `canvas` 元素，设定宽高，添加 `id` 便于 `javascript` 获取。

- 每个 `canvas` 初始都是一个白板。
- 样式除了宽高，尽量写在画布里，而不是使用 CSS
- `canvas` 标签里如果添加文本，那么当浏览器不支持 `canvas` 时显示文本

## 三、绘图上下文环境
```javascript
var a = document.getElementById('a');
var a_context = a.getContext("2d");
```
- 获取到 `canvas` 元素
- 调用它的 `getContext()` 方法获取绘图上下文环境，参数必须为 `2d` ，未来可能会有 `3d`
- 基于上下文环境的方法进行绘图

绘图上下文包含所有绘制方法和属性的定义。

## 四、路径

### 4.1 `beginPath()` 开始新路径
表示重新开始新的路径。

canvas 是基于状态的绘图，开启一条新的路径，就可以设置新的状态。但是 `beginPath()` 不会将状态重置回默认值。

>**同一条路径上的线条和曲线都会是相同的颜色。**所以需要绘制不同颜色的时候，必须开启新的路径。
	
### 4.2 `closePath()` 结束路径

用于结束路径，与 `beginPath()` 并不一定成对出现。

>**注意**：默认结束路径后，图形自动封闭，即首尾相连。所以有些时候不会用到结束路径。

### 4.3 `stroke()` 绘制路径
绘制已定义的路径

### 4.4 `fill()` 填充路径
将准备画的路径块填充

`fill()` 会覆盖描边 `stroke()` 边框的一半。所以，在需要描边的填充色，需要先填充，后描边。

### 4.5 `isPointInPath()`	是否在路径中
如果指定的点位于当前路径中，则返回 true，否则返回 false
```javascript
context.isPointInPath(x,y);
```
- `x` 测试点的 x 坐标
- `y` 测试点的 y 坐标

### 4.6 `clip()` 剪切
从原始画布剪切任意形状和尺寸的区域
```javascript
context.clip();
```
>**注意**：一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内（不能访问画布上的其他区域）。您也可以在使用 `clip()` 方法前通过使用 `save()` 方法对当前画布区域进行保存，并在以后的任意时间通过 `restore()` 方法进行恢复。


## 五、线条以及填充颜色

### 5.1 `fillStyle` 填充样式
设置或返回用于填充绘画的颜色、渐变或模式，需要在填充前声明才有效
```javascript
context.fillStyle=color|gradient|pattern;
```
- `color` 指示绘图填充色的 CSS 颜色值。默认值是 #000000。
- `gradient` 用于填充绘图的渐变对象
- `pattern` 用于填充绘图的 `pattern` 对象

### 5.2 `strokeStyle` 线条样式
设置或返回用于笔触的颜色、渐变或模式，需要在绘制前声明才有效
```javascript
context.strokeStyle=color|gradient|pattern;
```
- `color` 指示绘图笔触颜色的 CSS 颜色值。默认值是 #000000。
- `gradient` 用于填充绘图的渐变对象
- `pattern` 用于创建 `pattern` 笔触的 `pattern` 对象

### 5.3 `lineCap` 线条结束端点样式
设置或返回线条的结束端点样式
```javascript
context.lineCap="butt|round|square";
```
- `butt` 默认。向线条的每个末端添加平直的边缘。
- `round` 向线条的每个末端添加圆形线帽。
- `square` 向线条的每个末端添加正方形线帽。

`round` 和 `square` 会使线条略微变长。

### 5.4 `lineJoin` 线条拐角类型
设置或返回两条线相交时，所创建的拐角类型
```javascript
context.lineJoin="bevel|round|miter";
```
- `bevel` 创建斜角
- `round` 创建圆角
- `miter` 默认。创建尖角


### 5.5 `lineWidth` 线条宽度
设置或返回当前的线条宽度
```javascript
context.lineWidth=number;
```
- `number` 当前线条的宽度，以像素计

### 5.6 `miterLimit` 线条最大斜接长度
设置或返回最大斜接长度
```
context.miterLimit=number;
```
- `number` 正数
如果斜接长度超过 `miterLimit` 的值，边角会以 `lineJoin` 的 `bevel` 类型来显示。

斜接长度指的是在两条线交汇处内角和外角之间的距离。
![](http://upload-images.jianshu.io/upload_images/7295449-362921d854de0641.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

只有当 `lineJoin` 属性为 `miter` 时，`miterLimit` 才有效。

边角的角度越小，斜接长度就会越大。
为了避免斜接长度过长，我们可以使用 miterLimit 属性。
如果斜接长度超过 miterLimit 的值，边角会以 lineJoin 的 "bevel" 类型来显示（图解 3）：
![](http://upload-images.jianshu.io/upload_images/7295449-e3a1557002561d6f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



## 六、直线路径

### 6.1 `moveTo()` 起点坐标
把路径移动到画布中的指定点，不创建线条。声明直线开始的起点坐标。括号里面填写坐标。
```javascript
context.moveTo(100,100);
```

### 6.2 `lineTo()` 终点坐标
声明直线结束的终点坐标。括号里面填写坐标。
```javascript
context.moveTo(100,100);//起点
context.lineTo(700,700);//终点
```
连续出现相当于以前一个为起点继续走向另一个坐标。
```javascript
context.moveTo(100,100);//起点 
context.lineTo(700,700);//终点
context.lineTo(100,700);//以前一个终点为起点坐标
```

当 `lineTo()` 在 `beginPath()` 后面使用时，可以代替 `moveTo()`，和 `moveTo()` 起到相同效果。

### 6.3 多边形
从 `moveTo()` 开始，使用 `lineTo()` 画直线到三个顶点，最终回到起点坐标。

如三角形：
```javascript
//路径描述
context.moveTo(100,100);
context.lineTo(700,700);
context.lineTo(100,700);
context.lineTo(100,100);
//绘制
context.stroke();
```


## 七、贝塞尔曲线

### 7.1 quadraticCurveTo() 二次贝塞尔
通过使用表示二次贝塞尔曲线的指定控制点，向当前路径添加一个点。

二次贝塞尔曲线需要两个点。第一个点是用于二次贝塞尔计算中的控制点，第二个点是曲线的结束点。最后添加的是结束点
![](http://upload-images.jianshu.io/upload_images/7295449-19d53fa232d3041c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


>**注意**：曲线的开始点是当前路径中最后一个点。如果路径不存在，那么请使用 `beginPath()` 和 `moveTo()` 方法来定义开始点。

```javascript
context.quadraticCurveTo(cpx,cpy,x,y);
```
- `cpx`，`cpy` 贝塞尔控制点的坐标
- `x`，`y` 结束点的坐标

### 7.2 bezierCurveTo() 三次贝塞尔
通过使用表示三次贝塞尔曲线的指定控制点，向当前路径添加一个点。

三次贝塞尔曲线需要三个点。前两个点是用于三次贝塞尔计算中的控制点，第三个点是曲线的结束点。
![](http://upload-images.jianshu.io/upload_images/7295449-64bd89bb9ef9ff9f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


```javascript
context.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
```
- `cp1x`，`cp1y` 第一个贝塞尔控制点的坐标
- `cp2x`，`cp2y` 第二个贝塞尔控制点的坐标
- `x`，`y` 结束点的坐标


## 八、画弧线、圆	

### 8.1 `arc()` 创建圆路径
创建弧/曲线（用于创建圆形或部分圆）
```javascript
context.arc(centerX, centerY, radius, startingAngle, endingAngle, anticlockwise=true);
```
- `centerx` , `centery` 表示圆心位置
- `radius`表示半径
- `startingAngle`，`endingAngle`表示开始位置和结束位置
- `anticlockwise` 表示 `true` 时为顺时针绘制，`false` 为逆时针绘制。默认为 `true`

![](http://upload-images.jianshu.io/upload_images/7295449-23af3c75542c56c1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


其中角度参数的值：`0` 表示圆的最右边，`0.5*Math.PI` 表示最下面，`1*Math.PI` 表示最左边，`1.5*Math.PI` 表示最上面，`2*Math.PI` 表示最右边。这些规定是固定的，不会因为顺逆时针改变。

### 8.2 `arcTo()` 两切线弧
创建两切线之间的弧/曲线
```javascript
context.fillRect(x1,y1,x2,y2,r);
```
![](http://upload-images.jianshu.io/upload_images/7295449-86648c65a1bb3be9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


- `x1`，`y1` 弧的起点坐标
- `x2`，`y2` 弧的终点坐标
- `r` 弧的半径

使用 `stroke()` 方法在画布上绘制确切的弧。

### 8.3 绘制
- `lineWidth` 定义线条粗细
- `strokeStyle` 定义描边样式
- `stroke()` 描边
- `fillStyle` 定义填充样式
- `fill()` 填充

### 8.4 圆
```javascript
context.arc(100,100,80,0,2*Math.PI,true);
```
表示从右边（0）开始，顺时针画圆，到右边（2 PI）结束。



## 九、文本
不同于网页中的文本，绘制在 `canvas` 中的文本是没有盒模型的，没有浮动、边距、留白、自动换行等。

### 9.1 `fillText()` 填充文本
```javascript
context.fillText("text",x,y);
```
- `text` 规定在画布上输出的文本
- `x`，`y` 开始绘制文本的坐标位置

### 9.2 `strokeText()` 描边文本
```javascript
context.strokeText(text,x,y,maxWidth);
```
- `text` 规定在画布上输出的文本
- `x`，`y` 开始绘制文本的坐标位置
- `maxWidth` 可选。允许的最大文本宽度，以像素计

### 9.3 `measureText()` 测量文本宽度
`measureText()` 方法返回包含一个对象，该对象包含以像素计的指定字体宽度。
```javascript
context.measureText(text).width;
```
- text 要测量的文本

### 9.4 `font` 字体样式
canvas 中的字体会继承 canvas 元素的字体大小和样式风格。
设置 `font` 属性覆盖继承值。符合 CSS 规则。
```javascript
context.font = "bold 12px sans-serif";
```
属性值里面的每个取值用空格隔开
- font style
- font variant
- font size
- font weight
- lineheight
- font family

>使用相对字体大小，如 `1.5em` 或 `150%`，是基于 `canvas` 元素本身的字体大小。`rem` 仍是基于根元素。

### 9.5 `textAlign` 对齐方式
类似 CSS 中的 `text-align` 。
```
context.textAlign = "start";
```

![](http://upload-images.jianshu.io/upload_images/7295449-48960d8c9f4a2373.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


取值：`start`（默认）、`end`、`left`、`right`、`center`。

### 9.6 `textBaseline` 相对于起点的位置
控制文本相对于起点的位置。
```javascript
context.textBaseline = "top";
```
必须使用引号。

![](http://upload-images.jianshu.io/upload_images/7295449-3419679ba917de7e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


取值：`top`、`bottom`、`hanging`、`middle`、`alphabetic`、`ideographic`


## 十、矩形

### 10.1 `rect()` 创建矩形
```javascript
context.rect(x,y,width,height);
```
- `x`，`y`	矩形左上角的坐标
- `width`，`height` 矩形的宽高

使用 `stroke()` 或 `fill()` 方法在画布上实际地绘制矩形。

### 10.2 `fillRect()` 已填充矩形
```
fillRect(x,y,width,height);
```
- `x`，`y` 表示矩形左上角坐标
- `width`，`height`表示宽高

使用 `fillStyle` 属性来设置用于填充绘图的颜色、渐变或模式。

### 10.3 `strokeRect()` 已描边矩形
```javascript
strokeRect(x,y,width,height);
```
- `x`，`y` 表示矩形左上角坐标
- `width`，`height`表示宽高

使用 `strokeStyle` 属性来设置笔触的颜色、渐变或模式。

### 10.4 `clearRect()` 清空矩形区域
```javascript
context.clearRect(x,y,width,height);
```

- `x`，`y` 表示矩形左上角坐标
- `width`，`height`表示宽高


## 十一、添加图片

### 11.1  `drawImage()` 添加图片
三种用法：
```javascript
context.drawImage(img,x,y);
context.drawImage(img,x,y,width,height);
context.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh)
```

- `image` 为图片对象，必须
- `sx`，`sy` 为裁剪开始位置，左上角坐标，可选
- `sw`，`sh` 为裁剪宽高，可选
- `dx`，`dy` 为绘制起点，左上角坐标，必须
- `dw`，`dh` 为自定义的图片宽高，可选

### 11.2 图片对象
1. 已存在的 `<img>` 元素
```html
//HTML部分
<img id="cat" src="images/cat.png">
//javascript部分
window.onload = function() {
  .
  .
  var cat = document.getElementById('cat');
  context.drawImage(cat,0,0); 
}
```
在 `window.onload` 事件处理器中，获取已有图片对象，然后在 `canvas` 中安全绘制图片。

2. 自己创建的图片对象
```javascript
var cat = new Image();
cat.src = "images/cat.png";
cat.onload = function() {
  context.drawImage(cat,0,0);
};
```
创建图片对象，然后在 cat.onload 事件处理器中安全地把图片绘制在 `canvas` 中。


## 十二、特殊样式
### 12.1 `shadowColor` 阴影颜色
设置或返回用于阴影的颜色
```javascript
context.shadowColor=color;
```
- `color` 用于阴影的 CSS 颜色值。默认值是 #000000。

### 12.2 `shadowBlur` 阴影模糊程度
设置或返回用于阴影的模糊级别
```javascript
context.shadowBlur=number;
```
- `number` 阴影的模糊级数

### 12.3 `shadowOffsetX` 阴影水平偏移
设置或返回阴影距形状的水平距离
```javascript
context.shadowOffsetX=number;
```
- `number` 正值或负值，定义阴影与形状的水平距离。

### 12.4 `shadowOffsetY` 阴影垂直偏移
设置或返回阴影距形状的垂直距离
```javascript
context.shadowOffsetY=number;
```
- `number` 正值或负值，定义阴影与形状的垂直距离


### 12.5 `createPattern()`  重复
在指定的方向内重复指定的元素。

元素可以是图片、视频，或者其他 canvas 元素。
被重复的元素可用于绘制/填充矩形、圆形或线条等等。
```
context.createPattern(image,"repeat|repeat-x|repeat-y|no-repeat");
```
- `image` 规定要使用的图片、画布或视频元素。
- `repeat` 默认。该模式在水平和垂直方向重复。
- `repeat-x` 该模式只在水平方向重复。
- `repeat-y` 该模式只在垂直方向重复。
- `no-repeat` 该模式只显示一次（不重复）。

### 12.6 `createLinearGradient()` 创建线性渐变
调用 `createLinearGradient()` 方法创建线性渐变
```javascript
createLinearGradient(x0,y0,x1,y1);
```
表示沿直线从（x0,y0)到(x1,y1)绘制渐变。

如水平渐变：
```javascript
var my_gradient = context.createLinearGradient(0,0,300,0);
```
设置两个 `y` 值为 0，渐变会沿水平从左到右。

>**注意**：创建渐变需要赋给一个变量，通过这个变量设置色标

### 12.7 `createRadialGradient()` 创建径向渐变

调用 `createRadialGradient()` 方法创建径向渐变

```javascript
createRadialGradient(x0,y0,r0,x1,y1,r1)
```
表示沿着两个圆之间的锥面绘制渐变。
前三个参数代表开始圆，后三个参数表示结束圆。

### 12.8 `addColorStop()` 添加色标
```javascript
addColorStop(index,color);
```
- `index` 渐变位置，可以在 0 - 1 之间取任意值
- `color` 渐变颜色，关键字及十六进制颜色要添加引号

>**注意**：这个方法属于创建的渐变对象，也就是前面创建渐变时的变量。

```javascript
my_gradient.addColorStop(0,"block");
my_gradient.addColorStop(1,"white");
```

### 12.9 绘制渐变
```javascript
context.fillStyle = my_gradient;
context.fillRect(0,0,300,225);
```
- 将填充颜色设置为创建的渐变
- 填充所需要的图形


## 十三、转换

转换都应该放在绘制之前

### 13.1 scale() 缩放
缩放当前绘图至更大或更小

>**注意**：如果您对绘图进行缩放，所有之后的绘图也会被缩放。定位也会被缩放，线条大小也会被缩放。

```javascript
context.scale(scalewidth,scaleheight);
```
- `scalewidth` 缩放当前绘图的宽度 (1=100%, 0.5=50%, 2=200%, 依次类推)
- `scaleheight` 缩放当前绘图的高度 (1=100%, 0.5=50%, 2=200%, etc.)

### 13.2 rotate() 旋转
旋转当前绘图
```javascript
conntext.rotate(angle);
```
- `angle` 旋转角度，以弧度计。

将角度转换为弧度，请使用 `degrees*Math.PI/180` 公式进行计算。

### 13.3 translate() 改变原点坐标
重新映射画布上的 (0,0) 位置，改变坐标原点的位置
```javascript
context.translate(x,y);
```
- `x` 添加到水平坐标上的值
- `y` 添加到垂直坐标上的值

当您在 `translate()` 之后调用诸如 `fillRect()` 之类的方法时，值会添加到 `x` 和 `y` 坐标值上。，即后面的绘图涉及到坐标都会在此基础上增加值。
![](http://upload-images.jianshu.io/upload_images/7295449-8a0b5aa566c0cc89.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### 13.4 transform() 变换矩阵
画布上的每个对象都拥有一个当前的变换矩阵。
`transform()` 方法替换当前的变换矩阵。

它以下面描述的矩阵来操作当前的变换矩阵：
```mathematica
a  c  e
b  d  f
0  0  1
```
也就是说，`transform()` 允许您缩放、旋转、移动并倾斜当前的环境。

>**注意**：该变换只会影响 `transform()` 方法调用之后的绘图。
前面的 `rotate()`, `scale()`, `translate()`, `transform()` 方法都会影响到当前的 `transform()`。
例如：如果您已经将绘图设置为放到两倍，则 `transform()` 方法会把绘图放大两倍，您的绘图最终将放大四倍。

```javascript
context.transform(a,b,c,d,e,f);
```
- `a` 水平缩放绘图
- `b` 水平倾斜绘图
- `c` 垂直倾斜绘图
- `d` 垂直缩放绘图
- `e` 水平移动绘图
- `f` 垂直移动绘图

### 13.5 setTransform()
将当前转换重置为单位矩阵。然后以同样的参数运行 `transform()`，这样就可以不受前面的影响了。
```javascript
context.setTransform(a,b,c,d,e,f);
```
- `a` 水平缩放绘图，默认值为 1
- `b` 水平倾斜绘图，默认值为 0
- `c` 垂直倾斜绘图，默认值为 0
- `d` 垂直缩放绘图，默认值为 1
- `e` 水平移动绘图，默认值为 0
- `f` 垂直移动绘图，默认值为 0

所以矩阵默认为单位矩阵：
```mathematica
1  0  0
0  1  0
0  0  1
```
### 13.6 save()、 restore()
- `save()` 保存当前环境的状态
	- 原点位置
	- 缩放大小
	- 旋转
	- 矩阵变换
	- 裁剪块
- `restore()`	返回之前保存过的路径状态和属性

## 十四 `ImageData` 对象
对于 `ImageData` 对象中的每个像素，都存在着四方面的信息，即 RGBA 值：
- R - 红色 (0-255)
- G - 绿色 (0-255)
- B - 蓝色 (0-255)
- A - alpha 通道 (0-255; 0 是透明的，255 是完全可见的)

因此 ，`transparent black` 表示 `(0,0,0,0)`。

`color/alpha` 以数组形式存在，并且既然数组包含了每个像素的四条信息，数组的大小是 `ImageData` 对象的四倍。获得数组大小的办法，就是使用 `ImageDataObject.data.length`

包含 `color/alpha` 信息的数组存储于 `ImageData` 对象的 `data` 属性中。


### 14.1 `createImageData()` 创建 ImageData 对象
创建新的空白 `ImageData` 对象。

有两个版本的 `createImageData()` 方法：

```javascript
//以指定的尺寸（以像素计）创建新的 ImageData 对象
var imgData=context.createImageData(width,height);
//创建与指定的另一个 ImageData 对象尺寸相同的新 ImageData 对象（不会复制图像数据）
var imgData=context.createImageData(imageData);
```

新对象的默认像素值 `transparent black`。

- `width` ImageData 对象的宽度，以像素计。
- `height` ImageData 对象的高度，以像素计。
- `imageData` 另一个 ImageData 对象。

### 14.2 `getImageData()` 复制画布像素数据
返回 `ImageData` 对象，该对象拷贝了画布指定矩形的像素数据，进行操作后，通过 `putImageData()` 将图像数据放回画布
```javascript
var imgData = context.getImageData(x,y,width,height);
```
- `x`，`y` 开始复制的左上角位置的坐标
- `width`，`height` 将要复制的矩形区域的宽高

### 14.3 `putImageData()` 放入像素数据
将图像数据（从指定的 ImageData 对象）放回画布上。
```javascript
context.putImageData(imgData,x,y,dirtyX,dirtyY,dirtyWidth,dirtyHeight);
```

- `imgData` 规定要放回画布的 ImageData 对象
- `x`，`y` ImageData 对象放置在画布上的位置左上角的坐标，以像素计
- `dirtyX`，`dirtyY` 可选。以像素计，在画布上绘制的图像在 ImageData 对象上的位置坐标
- `dirtyWidth`，`dirtyHeight` 可选。在画布上绘制图像的宽高

后面四个属性相当于裁剪，但是，在画布上，依然是整个 ImageData  对象。
如：
```javascript
var imgData=ctx.getImageData(10,10,50,50);
ctx.putImageData(imgData,10,70,20,40,30,10);
```
在画布上放置裁剪部分的位置就变成了（10+20,70+40)，宽高是 30, 10。
>**注意**：如果裁剪位置加上裁剪宽度，超出了原来的宽高，超出部分不会绘制

### 14.4 `width`、`height`宽高
返回 ImageData 对象的宽高，以像素计。
```javascript
imgData.width;
imgData.height;
```

### 14.5 `data` 图像数据
返回一个对象，该对象包含指定的 ImageData 对象的图像数据。

对于 ImageData 对象中的每个像素，都存在着四方面的信息，即 RGBA 值：
R - 红色 (0-255)
G - 绿色 (0-255)
B - 蓝色 (0-255)
A - alpha 通道 (0-255; 0 是透明的，255 是完全可见的)
color/alpha 以数组形式存在，并存储于 ImageData 对象的 data 属性中。

将 ImageData 对象中的第一个像素变为红色的语法：
```
imgData=ctx.createImageData(100,100);

imgData.data[0]=255;
imgData.data[1]=0;
imgData.data[2]=0;
imgData.data[3]=255;
```

将 ImageData 对象中的第二个像素变为绿色的语法：
```
imgData=ctx.createImageData(100,100);

imgData.data[4]=0;
imgData.data[5]=255;
imgData.data[6]=0;
imgData.data[7]=255;
```


## 十五、合成

### 15.1 `globalAlpha`	透明度
设置或返回绘图的当前 alpha 或透明值
```javascript
context.globalAlpha=number;
```
- `number` 透明值。必须介于 0.0（完全透明） 与 1.0（不透明） 之间。

### 15.2 globalCompositeOperation 
设置或返回新图像如何绘制到已有的图像上

源图像 = 您打算放置到画布上的绘图。
目标图像 = 您已经放置在画布上的绘图。
```javascript
context.globalCompositeOperation="source-in";
```

- `source-over` 默认。在目标图像上显示源图像。
- `source-atop` 在目标图像顶部显示源图像。源图像位于目标图像之外的部分是不可见的。
- `source-in` 在目标图像中显示源图像。只有目标图像内的源图像部分会显示，目标图像是透明的。
- `source-out` 在目标图像之外显示源图像。只会显示目标图像之外源图像部分，目标图像是透明的。
- `destination-over` 在源图像上方显示目标图像。
- `destination-atop` 在源图像顶部显示目标图像。源图像之外的目标图像部分不会被显示。
- `destination-in` 在源图像中显示目标图像。只有源图像内的目标图像部分会被显示，源图像是透明的。
- `destination-out` 在源图像外显示目标图像。只有源图像外的目标图像部分会被显示，源图像是透明的。
- `lighter` 显示源图像 + 目标图像。
- `copy` 显示源图像。忽略目标图像。
- `xor` 使用异或操作对源图像与目标图像进行组合。


## 十六、兼容IE
虽然 IE 浏览器不支持 `canvas API`，但是他有一个叫 `VML` 的技术，可以完成 `canvas` 元素能做的大部分工作。

### 16.1 ExplorerCanvas——excanvas.js
excanvas.js 是一个开源的，采用 Apache license 许可的 javascript 类库，在 IE 中实现了 canvas 的 API。
```html
<!--[if lt IE9]>
  <script src="excanvas.js"></script>
<![endif]-->
```

### 16.2 限制
- 颜色渐变只支持线性渐变
- 模式必须在两个方向上重复
- 不支持裁剪
- 非等比缩放
- 很慢

<Quote>生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</Quote>