---
title: sass的使用
layout: post
category: 前端技术
tags:
  - sass
  - css预处理器
  - web前端
date: 2017-10-19 21:07:22
update: 2017-10-19 21:07:22
comments: true
copyright: true
---

## 前言
在介绍之前，请大家先弄清楚下面的问题：
- **什么是 sass**
sass 是 css 的预处理器（css preprocessor）

- **为什么使用 sass**
1、 它能够帮我们更快更高效的编写更好维护的 css 。
2、 它自带很多原生 css 没有的功能，如变量（现在 css 中已经实现）、条件语句等

- **如何使用sass**
1、 [安装 sass](https://www.sasschina.com/install/) ：ruby环境、sass编译
2、 sass的语法

下面要介绍的就是 sass 的基本用法。

<!-- more -->

## 一、安装和使用
### 1.1 安装Ruby
SASS是 Ruby 语言写的，但是两者的语法没有关系。不懂Ruby，照样使用。只是必须先[安装Ruby](https://www.ruby-lang.org/zh_cn/downloads/)

### 1.2 安装SASS
在命令行输入下面的命令（必须先安装Ruby）：
```git
　gem install sass
```

### 1.3 文件后缀
sass 有两种后缀名文件：
- 一种后缀名为 sass，不使用大括号和分号；
- 另一种就是 scss 文件
和我们平时写的 css 文件格式差不多，使用大括号和分号。
```css
//文件后缀名为sass的语法
body
  background: #eee
  font-size:12px
p
  background: #0982c1

//文件后缀名为scss的语法  
body {
  background: #eee;
  font-size:12px;
}
p{
  background: #0982c1;
} 
```
在此也建议使用后缀名为 scss 的文件，以避免 sass 后缀名的严格格式要求报错。后面使用的也都是 scss 文件。

### 1.4 编译
在屏幕上显示.scss文件转化的css代码：
```git
　sass 文件名.scss
```
编译到 css 文件：
```git
　sass test.scss test.css
```
SASS提供四个编译风格的选项：
- nested：嵌套缩进的css代码，它是默认值。
- expanded：没有缩进的、扩展的css代码。
- compact：简洁格式的css代码。
- compressed：压缩后的css代码。

生产环境当中，一般使用最后一个选项。
```git
　sass --style compressed test.sass test.css
```
监听某个文件或目录，一旦源文件有变动，就自动生成编译后的版本。
```git
　　// watch a file
　　sass --watch input.scss:output.css
　　// watch a directory
　　sass --watch app/sass:public/stylesheets
```
如果你不喜欢用命令行，可以使用：
>GUI界面编译工具：[koala](https://koala-app.com/)
教程：[Less/Sass编译工具，koala使用指南](https://www.w3cplus.com/blog/777.html)


## 二、基本语法

### 2.1 嵌套规则
- 选择器嵌套。
```css
//CSS代码
div h1 {
　color : red;
}
//SASS代码
div {
　hi {
　　color:red;
　}
}
```
- 属性嵌套
```css
p {
　border: {
　　color: red;
　}
}
```
**注意**： `border `后面必须加上冒号。

- 使用&引用父元素
```css
a {
　&:hover { color: #ffb3ff; }   //常用写法
    .class & {color:  #fff;}   //在前面加上特殊类或父元素的写法
}
```

### 2.2 变量
- 以$开头声明变量
```css
$blue : #1875e7;　
div {
　color : $blue;//直接使用
}
```
- 变量写在#{}中以镶嵌入字符串
```css
$side : left;
.rounded {
　border-#{$side}-radius: 5px;
}
```
- 变量名用中划线分隔
sass中变量名的分隔并没有要求，而且使用中划线或下划线，会指向同一个变量。
但是，尽量使用中划线来统一规范。

- 变量作用域
sass 中变量声明在某个规则块 { } 中，则只能在那个规则块内使用。定义在规则块外的，即此文件都可以使用。一般将变量声明放在文件最前面或者独立一个文件。

- 其他
>请参考：[sass语法](https://www.w3cplus.com/sassguide/syntax.html)

### 2.3 计算功能
在代码中使用算式：
```css
body {
　margin: (14px/2);
　top: 50px + 100px;
　right: $var * 10%;
}
```
**注意**： 除了`/`之外，其他都应该在符号两边加上空格

### 2.4 注释
SASS共有两种注释风格。
- 标准的CSS注释 /* comment */ ，会保留到编译后的文件。
- 单行注释 // comment，只保留在SASS源文件中，编译后被省略。

在 /* 后面加一个感叹号，表示这是"重要注释"。即使是压缩模式编译，也会保留这行注释，通常可以**用于声明版权信息**。
```css
/*! 
　重要注释！
*/
```
### 2.5 导入文件
@import命令，用来插入外部文件。

- scss文件，编译后会合并到同一个 css 文件中
```css
@import "path/filename.scss";
```
- css 文件，则等同于 css 的 import 命令，编译后依然是导入文件
```css
@import "foo.css";
```
因为 css 中 import 会导致性能问题，所以一般不使用。

### 2.6 继承
SASS允许一个选择器，继承另一个选择器。使用@extend命令：
```css
.class2 {
　@extend .class1;
　font-size:120%;
}
```
### 2.7 mixin
mixin 有点像C语言的宏（macro），是可以重用的代码块。
- 使用@mixin命令，定义一个代码块。
```css
@mixin left {
　float: left;
　margin-left: 10px;
}
```
- 使用@include命令，调用这个mixin。
```css
div {
　@include left;
}
```
mixin的强大之处，在于可以指定参数和缺省值。
```css
@mixin left($value: 10px) {
　float: left;
　margin-right: $value;
}
```
使用的时候，根据需要加入参数：
```css
div {
　@include left(20px);
}
```
mixin 里面不仅可以定义属性，还可以使用 css 规则，包含选择器等

**注意**：mixin 不能滥用，会导致性能问题。详情请查看[Sass中文网](https://www.sasschina.com/)

### 2.8 颜色函数
SASS提供了一些内置的颜色函数，以便生成系列颜色。
```css
lighten(#cc3, 10%) // #d6d65c
darken(#cc3, 10%) // #a3a329
grayscale(#cc3) // #808080
complement(#cc3) // #33c
```

## 三、高级用法

### 3.1 条件语句
@if可以用来判断：
```css
p {
　@if 1 + 1 == 2 { border: 1px solid; }
　@if 5 < 3 { border: 2px dotted; }
}
```
配套的还有@else命令：
```css
@if lightness($color) > 30% {
　background-color: #000;
} @else {
　background-color: #fff;
}
```

### 3.2 循环语句
SASS支持for循环：
```css
@for $i from 1 to 10 {
　.border-#{$i} {
　　border: #{$i}px solid blue;
　}
}
```
也支持while循环：
```css
$i: 6;
@while $i > 0 {
　.item-#{$i} { width: 2em * $i; }
　$i: $i - 2;
}
```

each命令，作用与for类似：
```css
@each $member in a, b, c, d {
　.#{$member} {
　　background-image: url("/image/#{$member}.jpg");
　}
}
```

### 3.3 自定义函数
SASS允许用户编写自己的函数。
```css
@function double($n) {
　@return $n * 2;
}
#sidebar {
　width: double(5px);
}
```

## 参考
>[Sass中文网](https://www.sasschina.com/)
[Sass用法指南](https://www.ruanyifeng.com/blog/2012/06/sass.html)
[Sass Guide](https://www.w3cplus.com/sassguide/syntax.html)

<Quote>生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</Quote>
