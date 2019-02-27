---
title: gulp 自动化构建工具
layout: post
category: 前端技术
tags:
  - gulp
  - web前端
date: 2017-07-26 14:59:17
update: 2017-07-26 14:59:17
comments: true
copyright: true
---

## 前言

### gulp简介

gulp是一款常用的自动化构建工具，用于压缩、打包你的项目代码与文件。其他的类似的工具有grunt、webpack等。

### gulp的优点

- **易于使用**
通过代码优于配置的策略，Gulp 让简单的任务简单，复杂的任务可管理。

- **构建快速**
利用 Node.js 流的威力，你可以快速构建项目并减少频繁的 IO 操作。

- **插件高质**
Gulp 严格的插件指南确保插件如你期望的那样简洁高质得工作。

- **易于学习**
通过最少的 API，掌握 Gulp 毫不费力，构建工作尽在掌握：如同一系列流管道。

>下面只是介绍gulp的基本用法和常用插件。
详情查看：[gulp中文网](https://www.gulpjs.com.cn/)

<!-- more -->
## 安装与使用

### 1. 全局安装 gulp

``` git
$ npm install --global gulp
```
### 2. 开发依赖安装

``` git
$ npm install --save-dev gulp
```

### 3. gulpfile.js 文件
在项目根目录下创建一个名为 `gulpfile.js` 的文件

``` javascript
var gulp = require('gulp');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});
```

### 4. 运行 gulp

``` git
$ gulp
```
默认的名为 `default` 的任务（task）将会被执行，一般都把所有需要执行的放进`default`任务中
想要单独执行特定的任务（task），请输入 `gulp 任务名`,就会运行`gulpfile.js`文件中指定的任务。


## 插件

gulp本身并没有什么作用，需要依赖于插件来完成压缩、打包等功能。
插件在gulpfile.js中配置好后，通过`gulp 任务名`执行

### gulp-rev

给文件添加版本号，在文件内容修改后，同时修改版本号，使得浏览器识别出来而不是用缓存里的文件，从而使用户看到最新的效果。

###	gulp-rev-replace

在文件名改变后，在index文件里改变替换文件的引用

###	gulp-useref

在`html`里面可以通过注释的方法，告诉gulp哪些文件要合并，合并后叫什么文件
格式：

``` html
<!-- build:css css/combined.css -->
<link href="css/one.css" rel="stylesheet">
<link href="css/two.css" rel="stylesheet">
<!-- endbuild -->
<!-- build:js scripts/combined.js -->
<script type="text/javascript" src="scripts/one.js"></script> 
<script type="text/javascript" src="scripts/two.js"></script> 
<!-- endbuild -->
```

### gulp-filter

过滤器，两种操作，筛选、恢复

### gulp-uglify

压缩js代码

### gulp-csso

压缩css代码

### gulp-watch

监听文件的改变，自动执行任务，修改了文件之后，自动打包，不用我们手动执行任务

### gulp-postcss

与autoprefixer插件进行结合，来自动添加前缀

###	gulp-concat

直接把多个文件合并成一个文件

### gulp-responsive

把大图片按照一定规则生成一系列的响应式图片

## gulpfile.js基本设置

``` javascript
//所有的依赖项
var gulp = require('gulp');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var useref = require('gulp-useref');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');

//执行的任务
gulp.task('default', function() {

var jsFilter = filter('**/*.js',{restore:true}); //过滤出js文件的变量

var cssFilter = filter('**/*.css',{restore:true}); //过滤出css文件的变量

var indexHtmlFilter = filter(['**/*','!**/index.html'],{restore:true}); //过滤出所有文件的变量，但是防止了改变index的文件名

//返回到压缩文件

return gulp.src('src/index.html')//执行任务的源文件，也就是水流
    .pipe(useref())//找到所有需要合并压缩的文件，并扔到流里
    .pipe(jsFilter)///找出js文件
    .pipe(uglify())//压缩js代码
    .pipe(jsFilter.restore)//把js文件扔回水流里
    .pipe(cssFilter)//找到css文件
    .pipe(csso())//压缩css代码
    .pipe(cssFilter.restore)//把css文件扔回流里
    .pipe(indexHtmlFilter)//找到所有文件
    .pipe(rev())//添加版本号
    .pipe(indexHtmlFilter.restore)//再扔回流里
	 .pipe(revReplace())//替换文件引用
    .pipe(gulp.dest('dist'));//最后把所有文件放到dist文件夹
});
```
当然，你也可以把不同的操作分开，最终再放入`default`任务中

``` javascript
// 压缩 public 目录 css
gulp.task('minify-css', function() {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./public'));
});
// 压缩 public 目录 html
gulp.task('minify-html', function() {
  return gulp.src('./public/**/*.html')
    .pipe(htmlclean())
    .pipe(htmlmin({
         removeComments: true,
         minifyJS: true,
         minifyCSS: true,
         minifyURLs: true,
    }))
    .pipe(gulp.dest('./public'))
});
// 压缩 public/js 目录 js
gulp.task('minify-js', function() {
    return gulp.src('./public/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});
// 执行 gulp 命令时执行的任务
gulp.task('default', [
    'minify-html','minify-css','minify-js'
]);
```

>注释写成/\*! 的形式，就不会被压缩，可以用来写版权声明等信息


<Quote>生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</Quote>