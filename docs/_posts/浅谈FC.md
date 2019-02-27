---
title: 浅谈 CSS 中的 *FC
layout: post
category: 前端技术
tags:
  - CSS
date: 2019-02-18 23:47
update: 2018-02-18 23:47
comments: true
copyright: true
---

## 前言

前端面试中，常常会问到这个问题，什么是 BFC？我们知道如何清除浮动，那为什么这个方法它能够清除浮动呢？

在使用 CSS 处理各种布局的时候，大多人数都是使用经验积累的固定方法，在遇到固定方法失败的时候，往往不知所措，开始效率低下的不断尝试。实际上，当我们了解其背后的原理时，就能很快发现原因，找到解决方案，同时也能了解经验方法的背后原理。在学习中，我们都应该追求：**知其然而知其所以然**。

下面就简单的聊一下，所谓的 *FC。

<!-- more -->

## 1. 盒模型

![enter description here][1]

首先了解一下盒模型。相信大家都非常熟悉了，盒子模型的组成不外乎：content + padding + border + margin。

在 **W3C 标准盒模型**中，width = content。然而，还有另外一种 **IE 盒模型**(IE6 以下)，唯一区别是其 width = content + padding + border，当然现在 IE6 已经被淘汰了。

> 但是有趣的是，在 CSS3 中，又把其纳入了标准中，新增了一个 box-sizing 属性，可以在两种盒模型中进行切换。content-box 表示标准盒模型，border-box 表示 IE 盒模型。在实际使用中，IE 盒模型也为我们还原设计稿提供了很大的便利，免去了许多计算。

## 2. 视觉格式化模型(Visual Formatting Model)

> 视觉格式化模型 (visual formatting model) 是用来处理文档并将它显示在视觉媒体上的机制，根据上述的盒模型，为文档元素生成盒（Box）。通俗的说，视觉格式化模型就是文档里的盒子布局呈现的一种规则。

影响布局的因素：
- 盒的尺寸和类型
- 定位方案（常规流，浮动和绝对定位）
- 文档树中元素之间的关系
- 外部信息（如：视口大小，图片的固有尺寸等）

### FC(Formatting Context)

Formatting context(格式化上下文), 它是 W3C CSS2.1 规范中的一个概念。

**它是页面中的一块渲染区域，并且有一套渲染规则。它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。**

所有的 *FC 都是视觉格式化模型，用来描述盒子布局规则。

### block box 和 inline box

我们来详细了解一下 W3C 中关于 block box 和 inline box 的一些概念：（可以忽略）

- **块级元素(Block-level elements)**：当元素的 CSS 属性 display:block / list-item / table 时，它就是是块级元素 block-level ，视觉上呈现为块，竖直排列。每个块级元素生成一个主要的块级盒 (Principal Block-level Box) 来包含其后代盒和生成的内容，同时参与定位体系 (Positioning Scheme) 。某些块级元素还会在主要盒之外产生额外的盒： list-item 元素。这些额外的盒会相对于主要盒来摆放。

- **块级盒(Block-level boxes)**：由块级元素生成，参与块级格式化上下文(BFC)。描述元素跟它的父元素与兄弟元素之间的表现。

- **块容器盒(Block container box)**：只包含其它块级盒，或生成一个行内格式化上下文(inline formatting context)，只包含行内盒。有些块级盒，比如表格，不是块容器盒。相反，一些块容器盒，比如非替换行内块及非替换表格单元格，不是块级盒。描述元素跟它的后代之间的影响。

- **块盒(Block boxes)**：同时是块容器盒的块级盒。

![enter description here][2]

- **匿名块盒(Anonymous block boxes)**：没有名字，不能被 CSS 选择符选中。块容器盒要么只包含行内级盒，要么只包含块级盒，但通常文档会同时包含两者，在这种情况下，将创建匿名块盒来包含毗邻的行内级盒。

![enter description here][3]

- **行内级元素(Inline-level elements)**：当元素的 CSS 属性 display：inline, inline-block 或 inline-table 时，称它为行内级元素。行内级元素生成行内级盒(inline-level boxes)，参与行内格式化上下文(IFC)。

- **行内级盒(Inline-level boxes)**：所有 display:inline 的非替换元素生成的盒是行内盒。

- **原子行内级盒(Atomic inline-level boxes)**：不参与生成行内格式化上下文的行内级盒称为原子行内级盒(atomic inline-level boxes)。

- **原子行内盒(Atomic inline boxes)**：注意：起初原子行内级盒(atomic inline-level boxes)被称为原子行内盒(atomic inline boxes)。很不幸，它们并非行内盒。规范的勘误表修正了这个错误。不管怎样，当再看到原子行内盒时可以放心的当成原子行内级盒，因为只是改了名字。原子行内盒在行内格式化上下文里不能分成多行。

- **行盒(Line boxes)**：行盒由行内格式化上下文(IFC)产生的盒，用于表示一行。在块盒里面，行盒从块盒一边排版到另一边。 当有浮动时, 行盒从左浮动的最右边排版到右浮动的最左边。

![enter description here][4]

- **匿名行内盒(Anonymous inline boxes)**：匿名行内盒最常见的例子是块盒直接包含文本。

### 定位方案

（1）常规流（标准文档流）

常规流包括块级盒的块格式化，行内盒的行内格式化，以及块级盒和行内级盒的相对定位。

（2）浮动

在浮动模型中，盒子首先根据常规流布局，然后从常规流中脱离并尽可能地向左或向右位移。内容可以布局在浮动周围。

（3）绝对定位

在绝对定位模型中，盒子完全从常规流中脱离（对后面的同胞元素无影响），并根据包含块来分配位置。

## 3. BFC

BFC(Block Formatting Context) 就是块级格式化上下文，是块级元素的渲染显示规则。通俗一点讲，可以把 BFC 理解为一个封闭的大箱子，容器里面的子元素不会影响到外面的元素，反之也如此。

### 布局规则

- 内部的盒子会在垂直方向，一个接一个地放置
- BFC 是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之也如此
- 属于**同一个 BFC** 的两个**相邻 Box** 的**上下 margin 会发生重叠**
- 每个元素的 margin box 的左边， 与包含块 border box 的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此
- BFC 的区域不会与 float box 重叠
- 计算 BFC 的高度时，浮动元素也参与计算

### 触发条件

- 根元素、body
- 浮动元素：float: left/right/inherit
- 绝对定位元素：position: absolute/fixed
- display： display: inline-block、table-cell/table-caption、flex/inline-flex
- 溢出元素 overflow: hidden/scroll/auto/inherit

### 应用

（1）两个相邻块元素垂直方向上 margin 发生重叠

![enter description here][5]
![enter description here][6]

之所以发生外边距折叠，是因为他们同属于 body 这个根元素，所以我们需要让它们不属于同一个 BFC，就能避免外边距折叠：

![enter description here][7]
![enter description here][8]

![enter description here][9]

（2）清除浮动

正常情况下，浮动的元素会脱离普通文档流：

![enter description here][10]

外层的div会无法包含 内部浮动的div

![enter description here][11]

但如果我们 触发外部容器的BFC，根据BFC规范中的第4条：计算BFC的高度时，浮动元素也参与计算，那么外部div容器就可以包裹着浮动元素，所以只要把代码修改如下：

![enter description here][12]
![enter description here][13]

（3）阻止元素被浮动元素覆盖

![enter description here][14]
![enter description here][15]

每个元素的左边，与包含的盒子的左边相接触，即使存在浮动也是如此；

所以要想改变效果，使其互不干扰，就得利用规则 ：BFC 的区域不会与 float 重叠，让 `<div class="main">` 也能触发 BFC 的性质，即：

![enter description here][16]

通过这种方法，就能用来实现两列的自适应布局。

## 4. IFC

IFC(Inline Formatting Context) 行内格式化上下文。

### 布局规则

- 内部的盒子会在水平方向，一个接一个地放置
- 内部盒子垂直方向的起点从包含块盒子的顶部开始
- 摆放这些盒子的时候，它们在水平方向上的 padding、border、margin 所占用的空间都会被考虑在内，垂直方向上无效
- IFC 元素不能指定宽高，其宽高由内部的 line box 决定
- 在垂直方向上，这些框可能会以不同形式来对齐（vertical-align）：它们可能会使用底部或顶部对齐，也可能通过其内部的文本基线（baseline）对齐
- 能把在一行上的框都完全包含进去的一个矩形区域，被称为该行的行框（line box）。行框的宽度是由包含块（containing box）和存在的浮动来决定
- IFC 中的 line box 一般左右边都贴紧其包含块，但是会因为 float 元素的存在发生变化。float 元素会位于 IFC 与 line box 之间，使得 line box 宽度缩短
- IFC 中的 line box 高度由 CSS 行高计算规则来确定，同个 IFC 下的多个 line box 高度可能会不同（比如一行包含了较高的图片，而另一行只有文本）
- 当 inline-level boxes 的总宽度少于包含它们的 line box 时，其水平渲染规则由 text-align 属性来确定，如果取值为 justify，那么浏览器会对 inline-boxes（注意不是 inline-table 和 inline-block boxes）中的文字和空格做出拉伸
- 当一个 inline box 超过 line box 的宽度时，它会被分割成多个 boxes，这些 boxes 被分布在多个 line box 里。如果一个 inline box 不能被分割（比如只包含单个字符，或 word-breaking 机制被禁用，或该行内框受 white-space 属性值为 nowrap 或 pre 的影响），那么这个 inline box 将溢出这个 line box。

### 触发条件

一个块级元素中仅包含内联级别元素

### 应用

（1）水平居中

当一个块要在环境中水平居中时，设置其为 inline-block 则会在外层产生 IFC，通过设置父容器 `text-align:center` 则可以使其水平居中。

（2）垂直居中
创建一个IFC，用其中一个元素撑开父元素的高度，然后设置其 `vertical-align:middle`，其他行内元素则可以在此父元素下垂直居中。

## 5. FFC

FFC(Flex Formatting Context) 是弹性盒子格式化上下文，是 CSS3 新增的一种，由 Flex 弹性盒子而产生。

### 布局规则

- 设置为 flex 的容器被渲染为一个块级元素
- 设置为 inline-flex 的容器则渲染为一个行内元素
- 弹性容器中的每一个子元素都是一个弹性项目。弹性项目可以是任意数量的。弹性容器外和弹性项目内的一切元素都不受影响。简单地说，Flexbox 定义了弹性容器内弹性项目该如何布局。

### 触发条件

当 display 的值为 flex 或 inline-flex 时，将生成弹性容器（Flex Containers）, 一个弹性容器为其内容建立了一个新的弹性格式化上下文环境（FFC）。

## 6. GFC

GFC(GridLayout Formatting Context) 是网格盒子格式化上下文，也是 CSS3 新增的一种，由 Grid 网格盒子产生

### 布局规则

通过在网格容器（grid container）上定义网格定义行（grid definition rows）和网格定义列（grid definition columns）属性各在网格项目（grid item）上定义网格行（grid row）和网格列（grid columns）为每一个网格项目（grid item）定义位置和空间。

### 触发条件

当为一个元素设置display值为grid的时候，此元素将会获得一个独立的渲染区域。

## 参考

- [浅析CSS里的 BFC 和 IFC](https://mp.weixin.qq.com/s?__biz=MzI2NjkxMjAxNQ==&mid=2247484360&idx=1&sn=b2959d733c372784ec9ea27c1fe3e5d0&chksm=ea87aba8ddf022bef0345e22c953a302da860626f4a017230eec9437fd1acd88e8bdff1d665a&mpshare=1&scene=24&srcid=0423ZJ1ddOVnHU1E7SRdjXKP#rd)
- [CSS中各种布局的背后(*FC)](https://mp.weixin.qq.com/s?__biz=MzI2NjkxMjAxNQ==&mid=2247484336&idx=1&sn=73496b402d85e1844a24d01763325365&chksm=ea87abd0ddf022c611242dde56789b44b1446e52c198d4153c01fe6aea62f68284ab3ea6a4c0&mpshare=1&scene=24&srcid=0423Zg8MUi8qiQPisJqRfUG3#rd)

<Quote>生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</Quote>


  [1]: https://i.loli.net/2019/02/19/5c6ad858aa896.jpg "boxModel"
  [2]: https://i.loli.net/2019/02/19/5c6ba2d1e6495.jpg "three block box"
  [3]: https://i.loli.net/2019/02/19/5c6ba3075fc08.jpg "anonymous block"
  [4]: https://i.loli.net/2019/02/19/5c6ba3db10696.jpg "three inline box"
  [5]: https://i.loli.net/2019/02/19/5c6ba784d7a1e.jpg
  [6]: https://i.loli.net/2019/02/19/5c6ba79105c3d.jpg
  [7]: https://i.loli.net/2019/02/19/5c6ba7ba935fb.jpg
  [8]: https://i.loli.net/2019/02/19/5c6ba7c386890.jpg
  [9]: https://i.loli.net/2019/02/19/5c6ba7cd7bde8.jpg
  [10]: https://i.loli.net/2019/02/19/5c6ba801666b9.jpg
  [11]: https://i.loli.net/2019/02/19/5c6ba81115fad.jpg
  [12]: https://i.loli.net/2019/02/19/5c6ba82d113a3.jpg
  [13]: https://i.loli.net/2019/02/19/5c6ba8330fbea.jpg
  [14]: https://i.loli.net/2019/02/19/5c6ba862e377e.jpg
  [15]: https://i.loli.net/2019/02/19/5c6ba86a23b8c.jpg
  [16]: https://i.loli.net/2019/02/19/5c6ba8b1554c3.jpg