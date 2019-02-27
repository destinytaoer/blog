---
title: JS变量提升
layout: post
category: 前端技术
tags:
  - web前端
  - JavaScript
date: 2018-08-20 19:34:53
update: 2018-08-20 19:34:53
comments: true
copyright: true
---

## 1. 变量提升的概念

变量提升的概念：
当栈内存（作用域）形成，JS 代码自上而下执行之前，浏览器首先会把所有带 `var / function` 关键字开头的进行提前声明或者定义，这种预先处理机制称为“变量提升”。

> 声明（declare）：`var a` （默认 `undefined`）
> 定义（defined）：`a = 12`（定义其实就是赋值操作）

<!-- more -->

在变量提升阶段：
- 带 `var`  是只提升声明未定义（给个默认值 `undefined`）
- 带 `function` 是提升声明和定义都完成了

``` javascript
console.log(a); //=> undefined，如果后面都没有声明，那么就会报错
var a = 12;

b(); //=> 1，可以直接使用，如果后面没有定义，那么会报错
function b() {
  console.log(1);
}
```

> 因为用 `function` 关键字声明的函数 ，在变量提升阶段已经赋好值了，所以我们可以在 JS 文件中的任意位置调用这个函数

### 深入理解变量提升

**变量提升只发生在当前作用域**
开始加载页面的时候只对全局作用域下进行变量提升，因为此时函数中存储的都是字符串而已

在全局作用域下声明的函数或者变量是全局变量，同理，在私有作用域下声明的变量是私有变量[带 `var/function` 的才是声明]

**代码执行时，跳过已提升的声明和定义**
浏览器很懒，做过的事情不会重复执行第二遍，也就是当代码执行遇到创建函数这部分代码后，直接跳过即可。遇到变量声明时，也会直接跳过声明，进行赋值。因为在提升阶段就已经完成变量的声明和函数的赋值操作。

**函数执行，形成私有作用域后，也会进行变量提升**
私有作用域形成后，会先进行形参赋值，然后进行变量提升

**ES5 中的作用域**
在 ES5 语法规范中，只有全局作用域和函数执行的私有作用域，其他大括号不会形成栈内存


## 2. 带 var 和 不带 var 的区别
在全局作用域下声明一个变量，也相当于个 `window` 全局对象设置了一个属性，变量值就是属性值。而私有作用域中声明的私有变量和 `window` 没有关系。
``` javascript
a; //=> undefined
window.a; //=> undefined
'a' in window; //=> true 在变量提升阶段，在全局作用域中声明了一个变量 a，此时就已经把 a 当作属性添加到 window 上了，只不过此时还没有给 a 赋值，默认值为 undefined

var a = 12; 
a; //=> 全局变量 a 12
window.a; //=> window 的属性 a 12

//=> 全局变量和 window 中的属性存在映射机制
a = 13;
window.a; //=> 13
window.a = 14;
a; //=> 14
```

全局作用域中：
不带 `var` 时，本质是给 `window` 添加属性
在读取属性时，首先检测其是否是变量，是变量则读取其值，不是变量，则读取 `window` 中的属性，`window` 也没有这个属性，则报错。
``` javascript
a; //=> 报错
window.a; //=> undefined，这里是对象机制，没有这个属性则返回 undefined
'a' in window; //=> false，说明 window 中没有 a
a = 12; //=> 相当于 window.a = 12，此时的 a 不是变量，而是 window 的属性
a;//=> 12
window.a; //=> 12
```

``` javascript
var a = 12, b = 13; 
//=> 此时 b 是带 var 的，相当于 var a = 12; var b = 13;
var a = b = 12;
//=> 此时 b 不带 var 的，相当于 var a = 12; b = 12;

console.log(a, b); //=> undefined undefined
var a = 12, b = 12;
function fn() {
  console.log(a,b); //=> undefined 12
  var a = b = 13;
  console.log(a, b); //=> 13, 13
}
fn();
console.log(a,b); //=> 12, 13
```

私有作用域中：
- 带 var 的在私有作用域变量提升阶段，都声明为私有变量，和外界没有任何关系
- 不带 var 的不是私有变量，会向它的上级作用域查找，一直找到 window 为止（我们把这种查找机制叫做作用域链）

``` javascript
function fn() {
  b = 12;
  'b' in window;
  //=> true，在作用域链查找过程中，如果知道找到全局作用域 window 中也没有这个变量，则是相当于给 window 设置了一个属性 b
  console.log(b); //=> 12
}
fn();
console.log(b); //=> 12，此时读取的也是 window 的属性
```

具体分析：
``` javascript
a(); //=> f 函数体
var a = 10;
var a = 20;
console.log(a) //=> 20
a(); //=> 报错，此时 a=20，不是函数
function a() {
  console.log(a);
}
/*
 * 变量提升过程：
 * var a; function a = xxxfff000
 * 代码执行
 * a() --> a 执行，里面输出 a，也就是地址对应函数
 * a = 10; --> 这是的变量 a 从地址变成了数字 10
 * a = 20; --> 这时的变量 a 从数字 10 变成数字 20
 * console.log(a); --> 输出变量 20
 * a() --> a 执行，相当于 20()，不是函数，所以直接报错：a is not a function
 */
```

```
fn();// 15
var n = 13;
console.log(n); // 13
fn(); // 15
console.log(n);//15
function fn(){
  n = 15;
  console.log(n);
}
fn(); // 15
alert(n);//15
// 在变量提升阶段   n :undefined
// fn()           n : 15
// n = 13;        n : 13
// fn()           n : 15
```


## 3. 变量提升的特殊情况

（1）等号右边的不会进行变量提升
``` javascript
fn(); //=> 变量提升，可以执行
a(); //=> 变量提升，只提升了声明未定义，报错 a is not a function
f(); //=> 不提升，报错，f is not defined
var a = function f(){}
function fn() {}
```

（2）条件语句中的变量提升
- 对于 `var` 没有影响的，不管条件是否成立，都会进行变量提升
- 对于 `function` 比较特殊：
	- 在老版本浏览器渲染机制下，声明加定义都提升
	- 为了迎合 ES6 中的块级作用域，新版本浏览器对于函数，不管条件是否成立，都只提升声明，没有定义，类似 `var`

``` javascript
console.log(sum2,sum3); //=> undefined undefined
console.log(f,g); //=> undefined undefined
if(1 > 2){
  var f = 12;
  function sum2() {
    console.log(12)
  }
} else {
  var g = 14;
  function sum3() {
    console.log(13);
  }
}
console.log(sum2,sum3); //=> undefined f:function sum3(){}
console.log(f,g); //=> undefined 14
```

当条件成立，进入到判断体中（在 ES6 中它是一个块级作用域，不完整的块级作用域），第一件事并不是代码执行，而是类似于变量提升一样先把函数进行定义，也就是判断体中代码执行之前，函数就已经赋值了。
``` javascript
console.log(fn); //=> undefined
if (1 === 1) {
  console.log(fn); //=> 函数本身
  function fn() {
    console.log(1);
  }
}
```

（3）匿名函数、自执行函数、等号右边函数和 `return` 返回的函数都不会有变量提升，只有开头直接使用 `function` 声明的才会变量提升
```javascript
//=> 即使加上函数名，也不会变量提升
(function(){
  
})()

var a = function() {}

obj.onclick = function(){}

function a() {
  //=> e 不会提升
  return function e() {
  
  }
}
```

（4）函数的形参与变量提升
``` javascript
var a=12;
function fn1(){
  console.log(a);
  var a=13;
}
fn1(); //=> undefined

var n=13;
function fn2(n){
  // 在变量提升之前就有了一个形参赋值的过程，也就是相当于
  // n = 13
  // var n 这里 n 的值不会改变，仍是 13
  // console.log(n); //13
  console.log(n);
  var n=14;
  console.log(n);
}
fn2(n);//=> 13 14
```

## 4. 重名问题的处理

1. `var` 和 `function` 关键字声明的名字，都是变量，只是存储的值不同。取相同的名字，也是重名
2. **关于重名的处理：如果名字重复了，不会重新声明，但是会重新的定义（赋值），不管是变量提升阶段还是代码执行阶段都是如此。**

> 需要注意的是：在变量提升时，如果变量没有值，才会给它默认的值 `undefined`，如果已经有值，那么这一步不会执行

``` javascript
/*
 * 变量提升阶段
 * function a 定义，后面的 var a 重名，不会重新声明，所以被忽略
 */
function a() {
  console.log(a);
}
var a = 12;
```

``` javascript
/*
 * 变量提升阶段
 * 会把函数声明和定义全部提升，重名的时候，也是在这个阶段进行重新定义
 *
 * 后面代码执行会忽略全部变量声明、函数声明和定义
 * 
 */
fn(); //=> 4
function fn() {console.log(1);}
fn(); //=> 4
function fn() {console.log(2);}
fn(); //=> 4
var fn = 100;
fn(); //=> 报错，fn is not a function
function fn() {console.log(3);}
fn();
function fn() {console.log(4);}
fn();
```

<Quote>生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</Quote>
