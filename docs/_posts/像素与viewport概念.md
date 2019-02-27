---
title: 像素与viewport概念
layout: post
category: 前端技术
tags:
  - web前端
  - css
  - 响应式
  - 移动端
date: 2017-10-22 23:00:15
update: 2017-10-22 23:00:15
comments: true
copyright: true
---
## 前言

学习移动端、响应式，首先必须明白的就是像素和viewport的概念，才能搞清楚出现各种情况的原因。

本文主要介绍物理像素、逻辑像素的概念以及他们之间的关系，viewport的由来以及设置。下面与大家分享。

<!-- more -->
## 一、像素的概念

- **px** ：逻辑像素 ，浏览器使用的抽象单位
- **dp、pt**：物理像素
- **dpr**：设备像素缩放比
- **ppi**：屏幕每英寸的像素数量，即单位英寸内的像素密度

| ppi | 120 | 160 | 240 | 320 |
|:----:|:-----:|:-----:|:-----:|:-----:|
| **dpr** | **0.75** | **1.0**| **1.5** | **2.0** |

**ppi 越高，像素数越高，图像越清晰。**
**Retina屏即高清屏，dpr 大于等于 2。**

![](https://upload-images.jianshu.io/upload_images/7295449-25570b746afcccd5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 二、viewport 

web初期，网页渲染在手机上，会只显示页面的其中一部分。用户需要通过滑动屏幕才能查看网页的全貌。由于用户体验太差，于是浏览器商就引入了 viewport 的概念。

### 2.1 手机浏览器的默认行为

- 页面默认先渲染在一个980px（ios）或其他的 viewport 里面
- 通过缩放，让用户能看到网页的全貌

>为什么渲染时，要加入 viewport ？
直接渲染在小屏幕会**导致排版布局等的混乱**

### 2.2 viewport 的概念
两个 viewport ：**视口（visual） viewport **和**布局（layout） viewport**

- 视口 viewport 就是**用户查看网页的视口**（可以理解为屏幕），可以通过**缩放**来改变其大小
- 布局 viewport 就是**网页渲染**的一个底层页面，ios 默认 viewport 为980 px 指的就是布局 viewport

>通过调用`document.body.clientWidth`查看默认布局Viewport
`window.innerWidth`查看度量Viewport

### 2.3 不使用默认布局 viewport 的原因

- 不同设备的默认值不同，宽度**不可控制**
- 缩放后连接可能因为太小不能准确触控，又有滚动，**交互差**
- font-size:40px=PC的12px，**不规范**

### 2.4 设置 viewport
在 html 中使用元标签`meta`设置 viewport：
```html
<meta name='viewport' content='width=device-width,initial-scale=1,user-scalabel=no'>
```
#### 相关参数
- width：设置布局viewport的值
- initial-scale：设置页面的初始缩放
- minimum-scale：最少缩放
- maximum-scale：最大缩放
- user-scalable：用户能否缩放 

### 最佳设置
使视口 viewport = 设备宽度 = 布局 viewport

- width = device-width，让布局 viewport 等于设备宽度，也就是说，设置 320px 的元素会铺满 iphone5 的屏幕宽度。
- initial-scale = 1，设置初始缩放比为1，使得缩放比因为网页的大小而改变，让视口 viewport = 布局 viewport
- user-scalable = no，使得视口 viewport = 布局 viewport 保持不变


## 参考
>慕课网教程：[Hello，移动WEB](https://www.imooc.com/learn/494)

<Quote>生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</Quote>