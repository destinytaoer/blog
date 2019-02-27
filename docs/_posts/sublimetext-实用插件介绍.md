---
title: Sublime Text 实用插件介绍
layout: post
category: 资源分享
tags:
  - web前端
  - sublimetext
  - 编辑器
date: 2017-09-23 19:09:24
update: 2017-09-23 19:09:24
comments: true
copyright: true
---

## 前言

这是一款个人特别喜欢的编辑器，用来写前端代码。特别棒的是最新版本的文件栏中，中文不再出现乱码

本文主要是为自己做笔记以及备份的，介绍自己使用的sublime text插件。希望对大家也有所帮助。

> 官网地址：[Sublime Text](https://www.sublimetext.com/)

<!-- more -->

> 插件官网：[packageControl](https://packagecontrol.io/)
大神文章：[详细插件介绍](https://github.com/jikeytang/sublime-text)

## 插件介绍

- ### packageControl
最新版本的sublimetext不再需要复制代码到控制台下载packagecontrol了。而是直接打开命令面板，快捷键`ctrl+shift+p`，输入`ipc`选中`install packagecontrol`，就会自行安装。

- ### emmet
快速生成HTML代码段的插件，强大到无与伦比，必备。

- ### ConvertToUTF8
支持 GBK, BIG5, EUC-KR, EUC-JP, Shift_JIS 等编码的插件，解决编辑中文乱码。

- ### SideBar Enhancements
这个插件改进了侧边栏，增加了许多功能

- ### ChineseLocalizations
使菜单栏等支持中文

- ### [DocBlockr](https://github.com/spadgos/sublime-jsdocs)
自动生成PHPDoc风格的注释，用于增强注释功能

- ### Bracket Highlighte
用于匹配括号，引号和html标签。

- ### Vue Syntax Highlight
vue的高亮显示

- ### AutoFileName
文件路径自动提示

- ### [AdvancedNewFile](https://github.com/skuroda/Sublime-AdvancedNewFile)
允许在项目中更快的创建文件

- ### FileDiffs
用来比较文件差异

- ### Alignment
等号对齐 `Ctrl+Alt+A`
**添加冒号对齐**
在`Preferences -> package settings -> Alignment -> Settings User`中添加下面代码：

```json
{
 "align_indent": false,
 "alignment_chars": ["=", ":"],
 "alignment_space_chars": ["=", ":"]
}
```

- ### [SublimeTmpl](https://github.com/kairyou/SublimeTmpl)
新建文件的模版插件

>详情请见：[SublimeTmpl](https://github.com/kairyou/SublimeTmpl)


- ### [markdown preview](https://github.com/revolunet/sublimetext-markdown-preview)
markdown编辑

- ### [AllAutocomplete](https://github.com/alienhard/SublimeAllAutocomplete)
SublimeText默认的Autocomplete功能只考虑当前的文件，而AllAutocomplete插件会搜索所有打开的文件来寻找匹配的提示词。

- ### ColorPicker
颜色选择器`Ctrl+Shift+C`

- ### sublimeLint
代码错误提示

- ### cssComb
css属性排序

- ### jsformat
js格式化 `Ctrl+Alt+F`

- ### SublimeCodeIntel
代码提示插件，支持多种编程语言

- ### css3
css3代码提示

- ### sass
sass语法编译高亮、代码提示


<Quote>生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</Quote>