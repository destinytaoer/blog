---
title: CSS实现元素的居中显示
layout: post
category: 前端技术
tags:
  - CSS
date: 2017-10-17 23:26:12
update: 2017-10-18 23:18:12
comments: true
copyright: true
---

## 前言
元素的水平及垂直居中是在写CSS样式中最常遇到的问题之一。相信会CSS的同学肯定都有自己的解决方法，但是并不一定都能熟练运用，并且知道其中原理。下面，我就将自己总结的实现方法分享给大家。
ps：重点是第四，疑惑在第三，第一、第二也较常用

>为本文制作的demo：[元素居中显示](https://codepen.io/destiny0904/pen/rGomoB)

<!-- more -->

## 一、单行文本

这里的单行文本不仅是指单行显示的文本以及**行内元素**（设置了`display: inline;`的也是行内元素），当然这些元素也只有包含文本才有意义，才能显示出来。

```css
/* 父元素*/
div {
  text-align: center;//水平居中
  light-height: heightValue;//垂直居中
}
```
**注意**：
- 这里的`heightValue`指的是`height`属性值，即行高值 = 高度值，才能实现垂直居中。
- 另外一种常见的就是不设置高度，直接用行高来撑起高度，这样就不存在行高与高度一致的问题。

>具体原因请参考文章：[对文字和行高的理解](https://www.jianshu.com/p/dc324a36ba84)

## 二、多行文本

这里的多行文本，实际上应该说是**不定行**，这个方法能自适应的居中。

```css
/* 父元素*/
div {
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}
```
这里设置`table-cell`，创建类似表格单元的元素，就可以使用`vertical-align`设置垂直对齐方式。
>**注意**：在一些文章中，我看到还需要设置其子元素的`vertical-align`，但是在实践中发现并不需要。与下面使用`table-cell`的方法有所区别

## 三、图片
这里图片泛指**行内块元素**
- ### table-cell + vertical-align 
```css
/* 父元素*/
div {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
/* 子元素img*/
img{
  vertical-align:middle;
}
```
- 这个方法与上面的有区分，子元素必须加上`vertical-align`，否则不同大小的图片显示效果不一样
- 不支持img的父元素浮动，因为这样`display`会自动变为`block`，所以当多图片显示时需要再在外面嵌套一层标签，不方便

>**注意**：在一些文章中，在父元素上还添加了`font-size`的大小控制，在我的实践中，不添加`font-size`可以实现效果。但是，当`font-size`达到一定程度的时候，会有影响。

- ### vertical-align + font-size
```css
/* 父元素*/
div {
font-size:128px; 
vertical-align: middle;
}
/* 子元素img*/
img{
  vertical-align: middle;
}
```
`font-size`达到一定大小就会影响行内元素的垂直位置，具体是什么原因不明确，但是感觉是跟`vertical-align`以及行高有关。
>**注意**：这个方法的原本是在父元素上加`display: inline-block;`的，实践发现并不需要，只要里面的是行内块元素就可以了。使用这个方法特别注意的是父元素`font-size`与子元素`height`的比例关系，因为不可控，所以**不推荐使用。**

- ### 其他方法参照下面的块元素实现

## 四、盒子
盒子主要指**块元素**和**行内块**，下面分享的是布局中主要用到的。`margin: 0 auto`就不做介绍了。
### 1. position + 负margin
```css
/* 父元素 */
.demo{
  position: relative;
}
/* 子元素 */
.box{
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px; /* img高度的一半*/
  margin-left: -50px;/* img宽度的一半*/
}
```
利用`position`移动父元素宽高的一半，再利用负`margin`往回移动子元素宽高的一半，刚好居中对齐。适合固定宽高的元素。

### 2.position + translate
```css
/* 父元素 */
.demo{
  position: relative;
}
/* 子元素 */
.box{
  position: absolute;
  top: 50%;
  left: 50%;
  transform:translate3d(-50%,-50%,0);
}
```
同上理，这里利用`translate3d`往回移动。子元素不固定宽高也适用。

### 3. table-cell + vertical-align
这就是前面图片提到的方法，只不过要设置子元素为`display: inline-block;`

### 4. flex
这才是真正的布局神器。适用于所有，但也需要灵活应用。
```css
.demo {
  display: flex;
  align-items: center;
  justify-content: center;
}
```
简洁、高效，在低版本IE存在兼容问题，但是现在几乎不用考虑了。
> 详细语法请查看我的博文：[关于Flex布局](https://www.jianshu.com/p/90dbbbecdf3b)

<Quote>生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</Quote>