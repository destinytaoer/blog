---
title: DOM的映射机制
layout: post
category: 前端技术
tags: 
  - web前端
  - JavaScript
  - DOM
date: 2018-08-10 21:15:24
update: 2018-08-27 15:46:24
comments: true
copyright: true
---

## 前言
这在我们平常操作 DOM 的时候司空见惯。就比如：我通过获取一个元素来改变其样式，自然而然的反映到 HTML 页面中。

但是，我们操作 JS 对象的时候，本质上操作的是 JS 堆内存，为什么会反映到页面中呢？就是因为浏览器存在这个 DOM 的映射机制。

<!-- more -->

## 1. 什么是 DOM 的映射机制？
我们使用 JS 从页面获取到的元素对象，或者自己手动创建的已经插入页面的元素对象，与页面中的 HTML 元素是绑定在一起的。也就是说修改其中一个，另一个也会跟着自动修改。这就是 DOM 的映射机制。

## 2. 形成映射的几种情形

### 改变元素对象的属性
这是我们最常用到的一种情形。当我们需要为元素添加自定义属性、或者修改属性等，就可以从页面中获取到元素对象，然后对其进行修改，就能够自动反映到 HTML 页面元素上。
``` javascript
//=> 修改从页面中获取的元素样式
Div.style.color = 'red';

//=> 修改已经插入页面的元素的属性
var p = document.createElement('p');
box.appendChild(p);
p.dataset.index = 1;
```
这两种方式得到的元素对象，修改其属性，都能够直接反映到页面中，不需要再次插入页面中。

### 在元素内部继续添加元素
``` javascript
//=> 在其内部插入标签或文本
var list = Div.getElementsByTagName('li');
console.log(list); // 空的元素集合
Div.innerHTML('<li></li>');
console.log(list); // 有一个元素集合

//=> 添加自己创建的元素对象，同样原理
Div.appendChild(p);
```
在容器中的数据绑定前，我们获取容器中元素，得到一个空的元素集合，容器数据绑定后，我们不需要重新获取，DOM 的映射机制会帮我们把新增加的元素映射到之前获取的空集合中，让其变为有元素的集合。

### 在页面中追加已有元素
``` javascript
list = Div.getElementsByTagName('li')[0];
Div.appendChild(list);
```
`appendChild` 在追加元素对象的时候，如果这个元素在容器中已经存在，此时**并不是克隆一份新的追加到末尾，而是把原有的元素移动到末尾。**

> 其根本原因在于，同一个元素在页面中，只能够有一个位置。把 JS 元素对象插入页面中某个位置，实际上就是把其绑定的 HTML 元素移动到那个位置上。
   
这里的元素已经存在有两种情形：
- 元素是从页面中获取到的
- 创建的元素已经添加过一次，再次添加时

因此，就无需手动移除原先的元素，再进行添加。直接插入即可。

## 3. 特殊情况
`querySelectAll` 获取的集合是静态集合（staticNodeList），不存在上述所谓的映射机制，基于这个方法，数据绑定完成后需要重新获取一次才可以。
``` javascript
var box = document.querySelectorAll('#box');
var box1 = document.getElementById('box');
console.log(box); //=> 获取到的是 NodeList 对象
console.dir(box1); //=> 而这里获取到的是 HTMLElement 的实例
```

这个特殊的 NodeList 不存在与 HTML 页面元素的映射，而且没有很多 HTMLElement 实例才拥有的方法。因此，使用这个方法的时候每次操作时，都应该重新获取。

另外，jQuery 中获取的元素同样不存在这些映射，实现映射需要使用其内部的方法，而且要使用原生 HTMLElement 实例的方法，需要通过后面加 `[0]` 的方法转换为原生元素对象。


另外，由于存在这种映射机制，在使用循环 DOM 中，改变了 DOM 的顺序，那么循环原本的顺序也就改变了。
``` javascript
[].forEach.call(children, (item)=> {
  parent.appendChild(item);
});
//=> 这样做你会发现，循环完成后 children 改变了，不符合预期
```

因此，真实项目中，不应该过分依赖于 DOM 的映射机制。

<Quote>生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</Quote>
