---
title: ESLint （一）简介与安装
layout: post
category: 前端技术
tags:
  - web前端
  - javascript
  - 编码规范
date: 2017-11-30 22:25:05
update: 2017-11-30 22:25:05
comments: true
copyright: true
---

![](https://upload-images.jianshu.io/upload_images/7295449-fc178e0811917b85.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 一、关于
ESLint 是一个由 Nicholas C. Zakas 于 2013 年 6 月创建的开源 JavaScript linting 实用程序。codelinting 是一种静态分析，常用于查找不符合某些样式指南的有问题的模式或代码。

JavaScript是一种动态和松散类型的语言，特别容易出现开发人员错误。如果没有编译过程的好处，通常会执行 JavaScript 代码以查找语法或其他错误。像 ESLint 这样的 Linting 工具允许开发人员在不执行 JavaScript 代码的情况下发现问题。

ESLint 创建的主要原因是允许开发人员创建自己的 LINTING 规则。ESLint 旨在使所有规则完全可自定义。默认的规则可以改变。他们都可以遵循相同的模式，无论是规则本身还是测试。虽然 ESLint 将附带一些内置的规则，使其从一开始就非常有用，但您可以随时动态加载规则。

ESLint 是使用 Node.js 编写的，通过 npm 提供了一个快速的运行环境和简单的安装。

>[关于ESLint](https://eslint.org/docs/about/)

<!-- more -->

## 二、安装
全局与局部安装
```git
npm install eslint --save-dev
npm install -g eslint
```

创建配置文件
```git
./node_modules/.bin/eslint --init
```

对某个文件运行 ESLint
```git
./node_modules/.bin/eslint yourfile.js
```

## 参考

- [ESLint（二）配置文件](https://destinytaoer.cn/b0fbee66)
- [起步](https://eslint.org/docs/user-guide/getting-started)

<common-Quote>生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</common-Quote>