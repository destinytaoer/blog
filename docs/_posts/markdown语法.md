---
title: Markdown学习总结
layout: post
category: 博客建站
tags:
  - markdown
date: 2017-07-28 18:10:24
update: 2017-07-28 18:10:24
comments: true
copyright: true
---

## 一、 markdown简介

Markdown 是一种用来写作的轻量级标记语言，创始人为约翰·格鲁伯（John Gruber）

### 优点

1. 纯文本，所以兼容性极强，可以用所有文本编辑器打开
2. 它用简洁的语法代替排版，使我们专心于码字
3. 格式转换方便，Markdown 的文本你可以轻松转换为 html、PDF等
4. Markdown 的标记语法有极好的可读性

>对于从事写作、文字编辑以及想写博客的人来说，非常有学习的必要。

<!-- more -->

### 编辑器

1. [sublime text](https://www.sublimetext.com/)、VSCode 等 IDE
2. 很多网站也支持了 Markdown 的文字录入，如[简书](https://www.jianshu.com "https://www.jianshu.com")
3. 其他功能强大的笔记软件：马克飞象、小书匠、有道云等，推荐前两个

## 二、 markdown语法

这里只是简单介绍 markdown 经常用到的语法标记，也只是个人觉得最简单实用、能够快速入门，如果您想深入学习、了解更多的 markdown 功能，请点击下面的文档：

>[Markdown 语法说明 (简体中文版)](https://github.com/riku/Markdown-Syntax-CN/blob/master/syntax.md "https://github.com/riku/Markdown-Syntax-CN/blob/master/syntax.md")

**********************************************************************

### 标题

在行首插入 1 到 6 个 # ，对应到标题 1 到 6 ：

```
# 这是 H1
## 这是 H2
###### 这是 H6
```

*****************************************************************

### 列表

#### 1.无序列表
加号“+”或减号“-”都可以作为列表标记，注意后面要跟一个空格。

```
- Red

- Green

- Blue
```

或者
```
+ Red

+ Green

+ Blue
```
或者
```
* Red

* Green

* Blue
```
效果都是一样的：

* Red

* Green

* Blue

#### 2.有序列表

使用数字、一个英文句号和一个空格即可。

```
1. Red

2. Green

3. Blue
```

*****************************************************************

## 链接

在方括号写下链接文字，圆括号写下网址即可。也可以在右边加上空格，再用引号加上 title 属性。（这个 title 属性可能有些人不知道，就是鼠标移动到链接上会显示的文本）

```
[好中文的样子](https://www.jianshu.com/p/d409bb2b5d6c "https://www.jianshu.com/p/d409bb2b5d6c")
```
效果：

[好中文的样子](https://www.jianshu.com/p/d409bb2b5d6c "https://www.jianshu.com/p/d409bb2b5d6c")

还有一种在文章最后参考式的链接，在链接文字的括号后面再接上另一个方括号，而在第二个方括号里面要填入用以辨识链接的标记：
```
This is [an example][id] reference-style link.
```
你也可以选择性地在两个方括号中间加上一个空格：
```
This is [an example] [] reference-style link.
```
接着，在文件的任意处，你可以把这个标记的链接内容定义出来：
```
[id]: https://example.com/  "Optional Title Here"
```
当第二个方括号里面为空格时，定义时应当取第一个方括号
同样，可以在定义时，写上title属性

*****************************************************************************

### 图片
Markdown 中可以插入图片，比链接的语法多了一个感叹号。

```
![Alt text](/path/to/img.jpg "Alt text")
```

![Alt text](/path/to/img.jpg "Alt text")

有些 Markdown 编辑器也支持拖拽插入图片，这就简单多了。例如简书 或者 Ulysses 就有这种功能。不过，在不同的环境下显示效果可能会有差异。

*******************************************************

### 引用

可以使用">" 标记来引用其他人的言论、书籍或报纸的内容。只需要在段落的第一行最前面加上 > 即可：
```
> We believe that writing is about content, about what you want to say – not about fancy formatting. 
我们坚信写作写的是内容，所思所想，而不是花样格式。
— Ulysses for Mac
```
> We believe that writing is about content, about what you want to say – not about fancy formatting. 
我们坚信写作写的是内容，所思所想，而不是花样格式。
— Ulysses for Mac

引用可以嵌套，只要根据层次的不同，加上不同数量的 > 即可：
```
>  这是第一级引用。
>>  这是第二级引用。
>  现在回到第一级引用。
```

>  这是第一级引用。
>>  这是第二级引用。
>  现在回到第一级引用。

在引用的区域内，也可以使用其他的 Markdown 语法，包括标题、列表等

*****************************************************************

### 代码
标记一小段行内代码，用反引号`左右把它包起来
```
Use the `printf()` function.
```
效果：Use the `printf()` function.

如果要标记代码区段，你可以用多于三个反引号来开启和结束代码区段，注意开始和结束的反引号数量必须一致。
\```
There is a literal backtick (`) here.
\```

*******************************************************************************

### 强调

在Markdown中，可以使用 * 和 _ 来表示斜体和加粗。需要注意的是，“_”是下划线

1. 在需要斜体的文本左右各加一个“*”或“_” 

2. 在需要加粗的文本左右各加两个“*”或“_” 

3. 在需要加粗并且斜体的文本左右各加三个“*”或“_” 

******************************************************************************

### 表格

```
|  Tables  |  Are   |  Cool  |
| ---------- |:-------:| --------:|
| col 3 is | right-aligned | $1600 |
| col 2 is | centered | $12 |
| zebra stripes | are neat | $1 |
```
显示效果

|  Tables  |  Are   |  Cool  |
| ---------- |:-------:| --------:|
| col 3 is | right-aligned | $1600 |
| col 2 is | centered | $12 |
| zebra stripes | are neat | $1 |

***************************************************************************

### 分割线

在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号或是减号中间插入空格。

<Quote>生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</Quote>