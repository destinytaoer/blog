---
title: Grid 网格布局（转）
layout: post
category: 前端技术
tags:
  - CSS
  - CSS3
date: 2019-05-01 11:17:11
update: 2019-05-01 11:17:11
comments: true
copyright: false
---

## 前言

> 本文引自阮一峰的网络日志：[CSS Grid 网格布局教程](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)


网格布局（Grid）是最强大的 CSS 布局方案。

它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。以前，只能通过复杂的 CSS 框架达到的效果，现在浏览器内置了。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983751-91e177b1-1adf-4c01-9c71-909f48b71cba.png#align=left&display=inline&height=357&originHeight=357&originWidth=792&size=0&status=done&width=792)

<!-- more -->

上图这样的布局，就是 Grid 布局的拿手好戏。

Grid 布局与 Flex 布局有一定的相似性，都可以指定容器内部多个项目的位置。但是，它们也存在重大区别。

**Flex 布局是轴线布局**，只能指定"项目"针对轴线的位置，可以看作是**一维布局**。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是**二维布局**。Grid 布局远比 Flex 布局强大。

## 1. 基本概念

学习 Grid 布局之前，需要了解一些基本概念。这些概念与日常用的 execl 表格是一样的，非常容易理解

### 1.1 容器和项目

采用网格布局的区域，称为"**容器**"（container）。容器内部采用网格定位的子元素，称为"**项目**"（item）。

```html
<div>
  <div><p>1</p></div>
  <div><p>2</p></div>
  <div><p>3</p></div>
</div>
```

上面代码中，最外层的 `<div>` 元素就是容器，内层的三个 `<div>` 元素就是项目。

:::warning
**项目只能是容器的顶层子元素**Grid 布局只对项目生效。**
:::

### 1.2 行和列

容器里面的水平区域称为"行"（row），垂直区域称为"列"（column）。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983715-ad8994c3-ef7e-48db-80b0-db15079e52ba.png#align=left&display=inline&height=372&originHeight=372&originWidth=564&size=0&status=done&width=564)

就是表格中的行和列。

### 1.3 单元格

行和列的交叉区域，称为"单元格"（cell）。

正常情况下，n 行和 m 列会产生 n x m 个单元格。比如，3 行 3 列会产生 9 个单元格。

### 1.4 网格线

划分网格的线，称为"网格线"（grid line）。水平网格线划分出行，垂直网格线划分出列。

正常情况下，n 行有 n + 1 根水平网格线，m 列有 m + 1 根垂直网格线，比如三行就有四根水平网格线。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983768-2a5aa75f-00ef-4169-a635-231d7dcde0fb.png#align=left&display=inline&height=462&originHeight=462&originWidth=500&size=0&status=done&width=500)

上图是一个 4 x 4 的网格，共有 5 根水平网格线和 5 根垂直网格线。

## 2. 容器属性

Grid 布局的属性分成两类。一类定义在容器上面，称为容器属性；另一类定义在项目上面，称为项目属性。

### 2.1 display

`display: grid` 指定一个容器采用网格布局。

```css
div {
  display: grid;
}
```

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983782-0254811b-b06f-4f09-a2c3-92332232c509.png#align=left&display=inline&height=311&originHeight=311&originWidth=209&size=0&status=done&width=209)

上图是 `display: grid` 的[效果](https://jsbin.com/guvivum/edit?html,css,output)。

默认情况下，容器元素都是块级元素，但也可以设成行内元素。

```css
div {
  display: inline-grid;
}
```

上面代码指定 `div` 是一个行内元素，该元素内部采用网格布局。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983759-0abb77f4-4a00-4660-b606-7f63ce44e174.png#align=left&display=inline&height=212&originHeight=212&originWidth=341&size=0&status=done&width=341)

上图是 `display: inline-grid` 的[效果](https://jsbin.com/qatitav/edit?html,css,output)。

:::warning
**注意：**设为网格布局以后，容器子元素（项目）的 `float`、`display: inline-block`、`display: table-cell`、`vertical-align` 和 `column-*` 等设置都将失效。
:::

### 2.2 grid-template-columns/rows 定义行列宽

容器指定了网格布局以后，接着就要划分行和列。`grid-template-columns` 属性定义每一列的列宽，`grid-template-rows` 属性定义每一行的行高。

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px; /* 3 列，每列 100px*/
  grid-template-rows: 100px 100px 100px; /* 3 行，每行 100px*/
}
```

[上面代码](https://jsbin.com/qiginur/edit?css,output)指定了一个 3 行 3 列的网格，列宽和行高都是 `100px`。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983751-cc41ee16-3497-4515-a65d-5e9a43ce3eef.png#align=left&display=inline&height=402&originHeight=402&originWidth=390&size=0&status=done&width=390)

除了使用绝对单位，也可以使用百分比。

```css
.container {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 33.33% 33.33% 33.33%;
}
```

另外还有一些辅助的方法。

#### repeat() 重复

有时候，重复写同样的值非常麻烦，尤其网格很多时。这时，可以使用 `repeat` 函数，简化重复的值。

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(3, 33.33%);
}
```

`repeat` 接受两个参数，第一个参数是**重复的次数**，第二个参数是**所要重复的值**。

`repeat` 重复某种模式也是可以的。

```css
grid-template-columns: repeat(2, 100px 20px 80px);
```

[上面代码](https://jsbin.com/cokohu/edit?css,output)定义了6列，第一列和第四列的宽度为`100px`，第二列和第五列为`20px`，第三列和第六列为`80px`。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983787-6d591289-fdd9-4928-a202-9d18f7ddbd53.png#align=left&display=inline&height=276&originHeight=276&originWidth=521&size=0&status=done&width=521)

#### auto-fill 自动充满容器

有时，单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用 `auto-fill` 关键字表示自动填充。

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
}
```

[上面代码](https://jsbin.com/himoku/edit?css,output)表示每列宽度`100px`，然后自动填充，直到容器不能放置更多的列。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983791-a7f49cc5-bc60-44a1-95de-62a536e17d48.png#align=left&display=inline&height=268&originHeight=268&originWidth=647&size=0&status=done&width=647)

#### fr 用于比例关系

为了方便**表示比例关系**，网格布局提供了 `fr` 关键字（fraction 的缩写，意为"片段"）。如果两列的宽度分别为 `1fr`和 `2fr`，就表示后者是前者的两倍。

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

[上面代码](https://jsbin.com/hadexek/edit?html,css,output)表示两个相同宽度的列。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983794-dba768f7-02ed-49a7-9a0f-ec73af1469b4.png#align=left&display=inline&height=585&originHeight=585&originWidth=471&size=0&status=done&width=471)

`fr` 可以与绝对长度的单位结合使用，这时会非常方便。

```css
.container {
  display: grid;
  grid-template-columns: 150px 1fr 2fr;
}
```

[上面代码](https://jsbin.com/remowec/edit?html,css,output)表示，第一列的宽度为150像素，第二列的宽度是第三列的一半。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983765-9d9f62d5-b77b-4f6b-97ef-88406f484327.png#align=left&display=inline&height=366&originHeight=366&originWidth=478&size=0&status=done&width=478)

#### minmax() 长度范围

`minmax()` 函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。

```css
grid-template-columns: 1fr 1fr minmax(100px, 1fr);
```

上面代码中，`minmax(100px, 1fr)` 表示列宽不小于 `100px`，不大于 `1fr`。

#### auto 自适应

`auto` 关键字表示由浏览器自己决定长度。

```css
grid-template-columns: 100px auto 100px;
```

上面代码中，第二列的宽度，基本上等于该列单元格的最大宽度，除非单元格内容设置了 `min-width`，且这个值大于最大宽度。

#### 网格线的名称

`grid-template-columns` 属性和 `grid-template-rows` 属性里面，还可以使用**方括号**，**指定每一根网格线的名字**，方便以后的引用。

```css
.container {
  display: grid;
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
}
```

上面代码指定网格布局为 3 x 3，因此有 4 根垂直网格线和 4 根水平网格线。方括号里面依次是这八根线的名字。

网格布局**允许同一根线有多个名字**，比如 `[fifth-line row-5]`。

#### 布局实例

`grid-template-columns` 属性对于网页布局非常有用。

两栏式布局只需要一行代码。

```css
.wrapper {
  display: grid;
  grid-template-columns: 70% 30%;
}
```

传统的十二网格布局，写起来也很容易。

```css
grid-template-columns: repeat(12, 1fr);
```

### 2.3 grid-gap 定义间隔

`grid-row-gap` 属性设置行与行的间隔（行间距），`grid-column-gap` 属性设置列与列的间隔（列间距）。

```css
.container {
  grid-row-gap: 20px;
  grid-column-gap: 20px;
}
```

[上面代码](https://jsbin.com/mezufab/edit?css,output)中，`grid-row-gap`用于设置行间距，`grid-column-gap`用于设置列间距。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983808-817066fd-23ed-4735-8570-ed06c634f00f.png#align=left&display=inline&height=443&originHeight=443&originWidth=448&size=0&status=done&width=448)

`grid-gap` 属性是 `grid-column-gap` 和 `grid-row-gap` 的合并**简写形式**，语法如下。

```css
grid-gap: <grid-row-gap> <grid-column-gap>;
```

因此，上面一段 CSS 代码等同于下面的代码。

```css
.container {
  grid-gap: 20px 20px;
}
```

如果 `grid-gap` **省略了第二个值，浏览器认为第二个值等于第一个值**。

:::info
根据最新标准，上面三个属性名的 **`grid-` 前缀已经删除**，`grid-column-gap` 和 `grid-row-gap` 写成 `column-gap`和 `row-gap`，`grid-gap` 写成 `gap`。
:::

### 2.4 grid-template-areas 定义区域

网格布局允许指定"**区域**"（area），**一个区域由单个或多个单元格组成**。`grid-template-areas` 属性用于定义区域。这个属性**会给每一个单元格定义名称，只要名称相同，那么它们就是同一区域。**

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-template-areas: 'a b c'
                       'd e f'
                       'g h i';
}
```

上面代码先划分出 9 个单元格，然后将其定名为 a 到 i 的九个区域，分别对应这九个单元格。

多个单元格合并成一个区域的写法如下。

```css
grid-template-areas: 'a a a'
                     'b b b'
                     'c c c';
```

上面代码将9个单元格分成 a、b、c 三个区域。

下面是一个布局实例。

```css
grid-template-areas: "header header header"
                     "main main sidebar"
                     "footer footer footer";
```

上面代码中，顶部是页眉区域 header，底部是页脚区域 footer，中间部分则为 main 和 sidebar。

**如果某些区域不需要利用，则使用"点"（`.`）表示。**

```css
grid-template-areas: 'a . c'
                     'd . f'
                     'g . i';
```

上面代码中，中间一列为点，**表示没有用到该单元格，或者该单元格不属于任何区域**。

:::warning
注意，**区域的命名会影响到网格线**。每个区域的起始网格线，会自动命名为 `区域名-start`，终止网格线自动命名为 `区域名-end`。

比如，区域名为 `header`，则起始位置的水平网格线和垂直网格线叫做 `header-start`，终止位置的水平网格线和垂直网格线叫做 `header-end`。
:::

### 2.5 grid-auto-flow 项目排列顺序

划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。**默认的放置顺序是"先行后列"**，即先填满第一行，再开始放入第二行，即下图数字的顺序。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983824-d6aeee47-47d1-4175-912d-cdeb6a710e68.png#align=left&display=inline&height=402&originHeight=402&originWidth=390&size=0&status=done&width=390)

这个顺序由 `grid-auto-flow` 属性决定，**默认值是 `row`，即"先行后列"。也可以将它设成 `column`，变成"先列后行"。**

```css
grid-auto-flow: column;
```

[上面代码](https://jsbin.com/xutokec/edit?css,output)设置了`column`以后，放置顺序就变成了下图。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983769-3e4519f9-7dc7-4c0d-8828-a3e8b51832ac.png#align=left&display=inline&height=395&originHeight=395&originWidth=398&size=0&status=done&width=398)

`grid-auto-flow` 属性除了设置成 `row` 和 `column`，还可以设成 `row dense` 和 `column dense`。这两个值主要用于，某些项目指定位置以后，剩下的项目怎么自动放置。

[下面的例子](https://jsbin.com/wapejok/edit?css,output)让1号项目和2号项目各占据两个单元格，然后在默认的 `grid-auto-flow: row` 情况下，会产生下面这样的布局。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983747-3f368158-d650-4b72-8603-47f4f2411ca2.png#align=left&display=inline&height=508&originHeight=508&originWidth=389&size=0&status=done&width=389)

上图中，1号项目后面的位置是空的，这是因为3号项目默认跟着2号项目，所以会排在2号项目后面。

现在修改设置，设为 `row dense`，**表示"先行后列"，并且尽可能紧密填满，尽量不出现空格。**

```css
grid-auto-flow: row dense;
```

[上面代码](https://jsbin.com/helewuy/edit?css,output)的效果如下。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983771-14f113a8-5acf-4930-b0b3-05070b2cbddb.png#align=left&display=inline&height=511&originHeight=511&originWidth=401&size=0&status=done&width=401)

如果将设置改为 `column dense`，**表示"先列后行"，并且尽量填满空格。**

```css
grid-auto-flow: column dense;
```

[上面代码](https://jsbin.com/pupoduc/1/edit?html,css,output)的效果如下。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983886-55626a27-031b-42f7-836a-795e46ce49d8.png#align=left&display=inline&height=393&originHeight=393&originWidth=476&size=0&status=done&width=476)

### 2.6 justify-items，align-items，place-items

`justify-items` 属性**设置单元格内容的水平位置**，`align-items`属性**设置单元格内容的垂直位置**。

```css
.container {
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
}
```

这**两个属性的写法完全相同**，都可以取下面这些值。

- start：对齐单元格的起始边缘。
- end：对齐单元格的结束边缘。
- center：单元格内部居中。
- stretch：拉伸，占满单元格的整个宽度（**默认值**）。

```css
.container {
  justify-items: start;
}
```

[上面代码](https://jsbin.com/gijeqej/edit?css,output)表示，单元格的内容左对齐，效果如下图。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983858-67229c62-146b-4776-9441-8b8a23d73d0d.png#align=left&display=inline&height=229&originHeight=229&originWidth=579&size=0&status=done&width=579)

```css
.container {
  align-items: start;
}
```

[上面代码](https://jsbin.com/tecawur/edit?css,output)表示，单元格的内容头部对齐，效果如下图。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983904-2ed2921e-51ea-40f4-aa61-79d376a980cd.png#align=left&display=inline&height=226&originHeight=226&originWidth=569&size=0&status=done&width=569)

`place-items` 属性是 `align-items` 属性和 `justify-items` 属性的**合并简写形式**。

```css
place-items: <align-items> <justify-items>;
```

下面是一个例子。

```css
place-items: start end;
```

**如果省略第二个值，则浏览器认为与第一个值相等。**

### 2.7 justify-content，align-content，place-content

`justify-content` 属性是**整个内容区域在容器里面的水平位置**，`align-content` 属性是**整个内容区域的垂直位置**。

```css
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;  
}
```

这两个属性的写法完全相同，都可以取下面这些值。

下面的图都以`justify-content`属性为例，`align-content`属性的图完全一样，只是将水平方向改成垂直方向。

- start - 对齐容器的起始边框。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983764-04e5b8ad-a3f3-45c5-8431-26693eaedb67.png#align=left&display=inline&height=349&originHeight=349&originWidth=582&size=0&status=done&width=582)

- end - 对齐容器的结束边框。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983770-56c54d31-2e25-4152-b79d-a2d0621204c2.png#align=left&display=inline&height=334&originHeight=334&originWidth=591&size=0&status=done&width=591)

- center - 容器内部居中。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983842-ea7cac80-1972-4028-b792-1a44be57cec2.png#align=left&display=inline&height=331&originHeight=331&originWidth=578&size=0&status=done&width=578)

- stretch - 项目大小没有指定时，拉伸占据整个网格容器。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983749-c7110d3a-7df7-4dca-ab80-f885101b56ab.png#align=left&display=inline&height=343&originHeight=343&originWidth=592&size=0&status=done&width=592)

- space-around - 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983804-a9dbefab-b65f-460d-bf53-be976c478a5b.png#align=left&display=inline&height=338&originHeight=338&originWidth=575&size=0&status=done&width=575)

- space-between - 项目与项目的间隔相等，项目与容器边框之间没有间隔。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983781-66ba9417-126c-4d33-a475-d77fbec9df5c.png#align=left&display=inline&height=340&originHeight=340&originWidth=575&size=0&status=done&width=575)

- space-evenly - 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983853-7c212e1b-9489-420a-8064-7e9865bdb00c.png#align=left&display=inline&height=337&originHeight=337&originWidth=588&size=0&status=done&width=588)

`place-content` 属性是 `align-content` 属性和 `justify-content` 属性的合并简写形式。

```css
place-content: <align-content> <justify-content>
```

下面是一个例子。

```css
place-content: space-around space-evenly;
```

**如果省略第二个值，浏览器就会假定第二个值等于第一个值。**

### 2.8 grid-auto-columns/rows

有时候，一些项目的指定位置，在现有网格的外部。比如网格只有3列，但是某一个项目指定在第5行。这时，浏览器会自动生成多余的网格，以便放置项目。

`grid-auto-columns`属性和`grid-auto-rows`属性用来设置，浏览器自动创建的多余网格的列宽和行高。它们的写法与`grid-template-columns`和`grid-template-rows`完全相同。如果不指定这两个属性，浏览器完全根据单元格内容的大小，决定新增网格的列宽和行高。

[下面的例子](https://jsbin.com/sayuric/edit?css,output)里面，划分好的网格是3行 x 3列，但是，8号项目指定在第4行，9号项目指定在第5行。

```
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-auto-rows: 50px; 
}
```

上面代码指定新增的行高统一为50px（原始的行高为100px）。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983902-d67f23e7-caf1-45e2-bc82-8e2a56f358de.png#align=left&display=inline&height=517&originHeight=517&originWidth=389&size=0&status=done&width=389)

### 2.9 grid-template, grid 属性简写

`grid-template` 属性是 `grid-template-columns`、`grid-template-rows` 和 `grid-template-areas` 这三个属性的合并简写形式。

`grid` 属性是 `grid-template-rows`、`grid-template-columns`、`grid-template-areas`、 `grid-auto-rows`、`grid-auto-columns`、`grid-auto-flow` 这六个属性的合并简写形式。

**从易读易写的角度考虑，还是建议不要合并属性**。

## 3. 项目属性

下面这些属性定义在项目上面。

### 3.1 grid-column/row-start/end 

项目的位置是可以指定的，具体方法就是指定项目的四个边框，分别定位在哪根网格线。

- grid-column-start：左边框所在的垂直网格线
- grid-column-end：右边框所在的垂直网格线
- grid-row-start：上边框所在的水平网格线
- grid-row-end：下边框所在的水平网格线

#### 指定网格线数字

```css
.item-1 {
  grid-column-start: 2;
  grid-column-end: 4;
}
```

上面代码指定，1号项目的左边框是第二根垂直网格线，右边框是第四根垂直网格线。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983860-491b2983-e94b-42c4-8356-a1a49fbdd792.png#align=left&display=inline&height=508&originHeight=508&originWidth=386&size=0&status=done&width=386)

上图中，只指定了1号项目的左右边框，没有指定上下边框，所以会**采用默认位置，即上边框是第一根水平网格线，下边框是第二根水平网格线。**

除了 1 号项目以外，其他项目都没有指定位置，由浏览器自动布局，这时它们的位置由容器的 grid-auto-flow 属性决定，这个属性的默认值是 row，因此会"先行后列"进行排列。读者可以把这个属性的值分别改成 column、row dense 和 column dense，看看其他项目的位置发生了怎样的变化。

[下面的例子](https://jsbin.com/nagobey/edit?html,css,output)是指定四个边框位置的效果。

```
.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
}
```

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676984033-2dbfe88a-3748-476d-954d-4eca2db155fa.png#align=left&display=inline&height=506&originHeight=506&originWidth=388&size=0&status=done&width=388)

#### 指定网格线名称

这四个属性的值，除了指定为第几个网格线，**还可以指定为网格线的名字**。

```css
.item-1 {
  grid-column-start: header-start;
  grid-column-end: header-end;
}
```

上面代码中，左边框和右边框的位置，都指定为网格线的名字。

#### span 跨越网格

这四个属性的值还可以使用 span 关键字，表示"**跨越**"，即**左右边框（上下边框）之间跨越多少个网格。**

```css
.item-1 {
  grid-column-start: span 2;
}
```

[上面代码](https://jsbin.com/hehumay/edit?html,css,output)表示，1 号项目的左边框距离右边框跨越2个网格。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983848-1c06f382-e367-4bbc-84aa-4be8b8d3af26.png#align=left&display=inline&height=504&originHeight=504&originWidth=396&size=0&status=done&width=396)

这与[下面的代码](https://jsbin.com/mujihib/edit?html,css,output)效果完全一样。

```css
.item-1 {
  grid-column-end: span 2;
}
```

使用这四个属性，**如果产生了项目的重叠，则使用 z-index 属性指定项目的重叠顺序。**

### 3.2 grid-column/row 属性简写

grid-column 属性是 grid-column-start 和 grid-column-end 的合并简写形式
grid-row 属性是 grid-row-start 属性和 grid-row-end 的合并简写形式。

```css
.item {
  grid-column:  / ;
  grid-row:  / ;
}
```

下面是一个例子。

```css
.item-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
/* 等同于 */
.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
```

上面代码中，项目 item-1 占据第一行，从第一根列线到第三根列线。

这两个属性之中，也可以使用 span 关键字，表示跨越多少个网格。

```css
.item-1 {
  background: #b03532;
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
/* 等同于 */
.item-1 {
  background: #b03532;
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}
```

[上面代码](https://jsbin.com/volugow/edit?html,css,output)中，项目item-1占据的区域，包括第一行 + 第二行、第一列 + 第二列。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983749-8982b0e1-62ee-4709-ad09-da03a6062327.png#align=left&display=inline&height=509&originHeight=509&originWidth=391&size=0&status=done&width=391)

斜杠以及后面的部分可以省略，默认跨越一个网格。

```css
.item-1 {
  grid-column: 1;
  grid-row: 1;
}
```

上面代码中，项目 item-1 占据左上角第一个网格。

### 3.3 grid-area 指定放置区域

grid-area 属性指定项目放在哪一个区域。

```css
.item-1 {
  grid-area: e;
}
```

[上面代码](https://jsbin.com/qokexob/edit?css,output)中，1号项目位于 e 区域，效果如下图。

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983866-71f2a7f4-6746-4c4b-b177-102808f1938d.png#align=left&display=inline&height=392&originHeight=392&originWidth=387&size=0&status=done&width=387)

grid-area 属性还可用作 grid-row-start、grid-column-start、grid-row-end、grid-column-end 的合并简写形式，直接指定项目的位置。

```css
.item {
  grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
}
```

下面是一个[例子](https://jsbin.com/duyafez/edit?css,output)。

```css
.item-1 {
  grid-area: 1 / 1 / 3 / 3;
}
```

### 3.4 justify-self，align-self，place-self

justify-self 属性设置单元格内容的水平位置（左中右），跟 justify-items 属性的用法完全一致，但只作用于单个项目。

align-self 属性设置单元格内容的垂直位置（上中下），跟 align-items 属性的用法完全一致，也是只作用于单个项目。

```css
.item {
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
}
```

这两个属性都可以取下面四个值。

- start：对齐单元格的起始边缘。
- end：对齐单元格的结束边缘。
- center：单元格内部居中。
- stretch：拉伸，占满单元格的整个宽度（默认值）。

下面是 justify-self: start 的例子。

```css
.item-1  {
  justify-self: start;
}
```

![](https://cdn.nlark.com/yuque/0/2019/png/190267/1556676983779-82fad9e9-74f8-4ff6-8be8-f626d39cc1f5.png#align=left&display=inline&height=224&originHeight=224&originWidth=569&size=0&status=done&width=569)

place-self 属性是 align-self 属性和 justify-self 属性的合并简写形式。

```css
place-self: <align-self> <justify-self>;
```

下面是一个例子。

```css
place-self: center center;
```

如果省略第二个值，place-self 属性会认为这两个值相等。

## 4. 兼容性

> [Can I use](https://caniuse.com/#search=grid)


![image.png](https://cdn.nlark.com/yuque/0/2019/png/190267/1556681336173-9b565dd3-1301-4eb7-b874-0f40b35559d1.png#align=left&display=inline&height=374&name=image.png&originHeight=311&originWidth=601&size=21872&status=done&width=723)

<Quote>生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</Quote>