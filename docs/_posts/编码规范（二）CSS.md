---
title: 编码规范（二）CSS（转）
layout: post
category: 前端技术
tags:
  - css
  - web前端
date: 2017-10-26 09:34:18
update: 2017-10-26 09:34:18
comments: true
copyright: false
---
## 前言
统一的编码规范，有助于编写高质量、可读性强、易于维护的代码。

CSS 代码的编写，应该尽量简洁、高性能、高可维护性，达到三者的一个最佳平衡。不能为了简洁牺牲可维护性。

>本文引自：[编码规范 by @mdo](https://codeguide.bootcss.com/#html-syntax)
>
>**黄金定律**
不管有多少人共同参与同一项目，一定要确保每一行代码都像是同一个人编写的。

<!-- more -->

## 一、语法

- 用两个空格来代替 tab
- 单独的选择器单独放在一行
- 左花括号前添加一个空格
- 声明块的右花括号应当单独成行
- `:` 后插入一个空格
- 每条声明都应该独占一行
- 所有声明语句都应当以分号结尾
- 以逗号分隔的属性值，逗号后面插入一个空格
- 不要在 `rgb()`、`rgba()`、`hsl()`、`hsla()` 或 `rect()` 值的内部的逗号后面插入空格。这样利于从多个属性值（既加逗号也加空格）中区分多个颜色值（只加逗号，不加空格）。
- `.5` 代替 `0.5`；`-.5px` 代替 `-0.5px`
- 十六进制值应该全部小写
- 尽量使用简写形式的十六进制值
- 为选择器中的属性添加双引号
- 避免为 0 值指定单位

```css
/* Bad CSS */
.selector, .selector-secondary, .selector[type=text] {
  padding:15px;
  margin:0px 0px 15px;
  background-color:rgba(0, 0, 0, 0.5);
  box-shadow:0px 1px 2px #CCC,inset 0 1px 0 #FFFFFF
}

/* Good CSS */
.selector,
.selector-secondary,
.selector[type="text"] {
  padding: 15px;
  margin-bottom: 15px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
}
```

## 二、属性声明

### 2.1 顺序

相关的属性声明应当归为一组，并按照下面的顺序排列：
- 定位
- 盒模型
- 版式
- 视觉

由于定位可以从正常的文档流中移除元素，并且还能覆盖盒模型相关的样式，因此排在首位。盒模型排在第二位，因为它决定了组件的尺寸和位置。

其他属性只是影响组件的内部或者是不影响前两组属性，因此排在后面。

```css
.declaration-order {
  /* 定位 */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* 盒模型 */
  display: block;
  float: right;
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  
  /* 版式 */
  font: normal 13px "Helvetica Neue", sans-serif;
  line-height: 1.5;
  color: #333;
  text-align: center;

  /* 视觉 */
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  box-shadow: 0 0 10px #000;
  
  /* 杂项 */
  opacity: 1;
}
```

### 2.2 简写形式的属性声明
在需要显示地设置所有值的情况下，应当**尽量限制**使用简写形式的属性声明。
- padding
- margin
- font
- background
- border
- border-radius

大部分情况下，我们不需要为简写形式的属性声明指定所有值。例如 `header` 元素只需要设置上、下边距的值，因此，在必要的时候，只需覆盖这两个值就可以。

过度使用简写形式的属性声明
- 导致代码混乱
- 对属性值带来不必要的覆盖从而引起意外的副作用
- 重新的渲染造成浏览器资源的消耗

```css
/* Bad example */
.element {
  margin: 0 0 10px;
  background: red;
  background: url("image.jpg");
  border-radius: 3px 3px 0 0;
}

/* Good example */
.element {
  margin-bottom: 10px;
  background-color: red;
  background-image: url("image.jpg");
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
```

### 2.3 带前缀的属性
当使用特定厂商的带有前缀的属性时，通过缩进的方式，让每个属性的值在垂直方向对齐，这样便于多行编辑。
```css
/* Prefixed properties */
.selector {
  -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.15);
          box-shadow: 0 1px 2px rgba(0,0,0,.15);
}
```

### 2.4 单行规则声明
对于只包含一条声明的样式，为了易读性和便于快速编辑，建议将语句放在同一行。对于带有多条声明的样式，还是应当将声明分为多行。
```css
/* Single declarations on one line */
.span1 { width: 60px; }

/* Multiple declarations, one per line */
.sprite {
  display: inline-block;
  width: 16px;
  height: 15px;
  background-image: url(../img/sprite.png);
}
```

### 2.5 媒体查询（Media query）的位置
将媒体查询尽可能**放在相关规则的附近**。不要将他们打包放在一个单一样式文件中或者放在文档底部。如果你把他们分开了，将来只会被大家遗忘。

## 三、class 命名

- class 名称中只能出现小写字符和破折号，破折号应当用于相关 class 的命名
- 避免过度任意的简写
- class 名称应当尽可能短，并且意义明确
- 使用有意义的名称。使用有组织的或目的明确的名称，不要使用表现形式的名称
- 基于最近的父 class 或基本 class 作为新 class 的前缀
- 使用 `.js-*` class 来标识行为（与样式相对），并且不要将这些 class 包含到 CSS 文件中

## 四、选择器

- 对于通用元素使用 class ，这样利于渲染性能的优化。
- 对于经常出现的组件，避免使用属性选择器
- 选择器要尽可能短，并且尽量限制组成选择器的元素个数，建议不要超过 3 
- 只有在必要的时候才将 class 限制在最近的父元素内（也就是后代选择器）

## 五、代码组织

- 以组件为单位组织代码段
- 制定一致的注释规范
- 使用一致的空白符将代码分隔成块，这样利于扫描较大的文档
- 如果使用了多个 CSS 文件，将其按照组件而非页面的形式分拆，因为页面会被重组，而组件只会被移动

### 5.1 不要使用原生 @import

与 `<link>` 标签相比，`@import` 指令要慢很多，不光增加了额外的请求次数，还会导致不可预料的问题。

- 使用 Sass 或 Less 等 CSS 预处理器的 `@import` 指令，将多个 CSS 文件编译为一个文件
- 通过 Rails、Jekyll 或其他系统中提供过 CSS 文件合并功能

## 六、注释
确保你的代码能够自描述、注释良好并且易于他人理解，可以很大程度地提高可维护性。

好的代码注释能够传达**上下文关系**和**代码目的**。不要简单地重申组件或 class 名称。

对于较长的注释，务必书写完整的句子；对于一般性注解，可以书写简洁的短语。


## 七、Less 和 Sass

### 7.1 操作符
为了提高可读性，在圆括号中的数学计算表达式的数值、变量和操作符之间均添加一个空格。

### 7.2 嵌套
避免不必要的嵌套。这是因为虽然你可以使用嵌套，但是并不意味着应该使用嵌套。只有在必须将样式限制在父元素内（也就是后代选择器），并且存在多个需要嵌套的元素时才使用嵌套。

## 八、编辑器配置
将你的编辑器按照下面的配置进行设置，以避免常见的代码不一致和差异：

- 用两个空格代替制表符（soft-tab 即用空格代表 tab 符）。
- 保存文件时，删除尾部的空白符。
- 设置文件编码为 UTF-8。
- 在文件结尾添加一个空白行。

将这些配置信息添加到项目的 `.editorconfig` 文件中

<Quote>生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</Quote>
