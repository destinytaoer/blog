---
title: 编码规范 （一）HTML（转）
layout: post
category: 前端技术
tags:
  - HTML
  - 编码规范
date: 2017-10-25 23:46:05
update: 2017-10-25 23:46:05
comments: true
copyright: false
---

## 前言
统一的编码规范，有助于编写高质量、稳定、可维护的代码。

>本文引自：[编码规范 by @mdo](https://codeguide.bootcss.com/#html-syntax)
>
>**黄金定律**
不管有多少人共同参与同一项目，一定要确保每一行代码都像是同一个人编写的。
>
>**实用为王**
尽量遵循 HTML 标准和语义，但是不要以牺牲实用性为代价。任何时候都要尽量使用最少的标签并保持最小的复杂度。

<!-- more -->

## 一、语法
- 使用两个空格来代替制表符
- 嵌套元素应当缩进一次（即两个空格）
- 对于属性的定义，确保全部使用双引号，绝不要使用单引号。
- 不要在自闭合元素的尾部添加斜线 
- 不要省略可选的结束标签

## 二、HTML5 doctype
为每个 HTML 页面的第一行添加标准模式的声明，这样能够确保在每个浏览器中拥有一致的展现。
```html
<!DOCTYPE html>
<html>
  <head>
  </head>
</html>
```

## 三、语言属性
强烈建议为 html 根元素指定 `lang` 属性，从而为文档设置正确的语言。这将有助于语音合成工具确定其所应该采用的发音，有助于翻译工具确定其翻译时所应遵守的规则等等。
```html
<html lang="en-us">

</html>
```

## 四、IE 兼容模式
IE 支持通过特定的 `<meta>` 标签来确定绘制当前页面所应该采用的 IE 版本。除非有强烈的特殊需求，否则最好是设置为 `edge mode`，从而通知 IE 采用其所支持的最新的模式。
```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
```

## 五、字符编码
通过明确声明字符编码，能够确保浏览器快速并容易的判断页面内容的渲染方式。这样做的好处是，可以避免在 HTML 中使用字符实体标记，从而全部与文档编码一致（一般采用 UTF-8 编码）。
```html
  <meta charset="UTF-8">
```

## 六、引入 CSS 和 JavaScript 文件
根据 HTML5 规范，在引入 CSS 和 JavaScript 文件时一般不需要指定 `type` 属性，因为 `text/css` 和 `text/javascript` 分别是它们的默认值。
```html
<!-- link -->
<link rel="stylesheet" href="code-guide.css">

<!-- style -->
<style></style>

<!-- script -->
<script src="code-guide.js"></script>
```

## 七、属性顺序
HTML 属性应当按照以下给出的顺序依次排列，确保代码的易读性。
- class
- id, name
- data-*
- src, for, type, href, value
- title, alt
- role, aria-*

class 用于标识高度可复用组件，因此应该排在首位。id 用于标识具体组件，应当谨慎使用，因此排在第二位。
```html
<a class="..." id="..." data-toggle="modal" href="#"></a>

<input class="form-control" type="text">

![](...)
```

## 八、布尔型属性
布尔型属性可以在声明时不赋值，直接写属性名认为是 `true`，不写认为是 `false`。

```html
<input type="text" disabled required>

<input type="checkbox" value="1" checked>

<select>
  <option value="1" selected>1</option>
</select>
```

## 九、减少标签的数量
编写 HTML 代码时，尽量避免多余的父元素。很多时候，这需要迭代和重构来实现。
```html
<!-- 一般 -->
<span class="avatar">
  ![](...)
</span>

<!-- 更好 -->
![](...)
```

## 十、尽量避免使用 JavaScript 生成的标签
通过 JavaScript 生成的标签让内容变得不易查找、编辑，对搜索引擎不友好，并且降低性能。能避免时尽量避免。

<Quote>生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</Quote>
