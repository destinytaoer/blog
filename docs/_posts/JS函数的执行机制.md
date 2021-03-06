---
title: JS 函数的执行机制
layout: post
category: 前端技术
tags:
  - JavaScript
date: 2018-09-27 09:54
update: 2018-09-27 09:54
comments: true
copyright: true
---

## 1. 普通函数的创建执行机制
函数作为引用类型，也是按照引用地址来操作的。

**【创建函数】**
1. 首先开辟一个新的堆内存，**把函数体中的代码当作字符串存储**在内存中（对象存储的是键值对）
2. 在当前上下文中声明函数（变量），函数声明和定义会提升到最前面
3. 把开辟的堆内存地址赋值给函数名（变量名）

<!-- more -->

此时输出函数名 `fn`（不是 `fn()`），代表当前函数本身，如果我们要执行函数，就要加上小括号即 `fn()`。这是两种不同本质的操作。

**【函数执行】**
目的：把之前存储到堆内存中的代码字符串变为真正的 JS 代码自上而下执行，从而实现应有的功能。
1. 函数执行，首先会形成一个私有的作用域（一个供代码执行的环境，也是一个栈内存）
2. 把之前在堆内存中存储的字符串复制一份到新开辟的栈内存中变为真正的 JS 代码
3. 然后再进行变量提升 （var function 提前声明， 先形参赋值， 再变量提升）
4. 最后在这个新开辟的作用域中自上而下执行
5. 栈内存是否销毁

函数执行的时候，都会形成一个全新的私有作用域（私有栈内存），目的是：
- 把原有堆内存中存储的字符串变成真正的 JS 代码执行
- 保护里面的私有变量不受外界的干扰（和外界隔离）

**我们把函数执行的这种保护机制，称之为“闭包”**

## 2. 构造函数的执行
构造函数的创建与普通函数是一样的。

构造函数的执行，可以使用 `new` 操作符，也可以像普通函数一样。

使用 `new` 操作符执行时：
1. 像普通函数执行一样，形成一个私有作用域（栈内存）
  - 代码复制到栈内存中
  - 形参赋值和变量提升
2. 【构造函数执行独有】在 JS 代码执行之前，首先在当前形成的私有作用域中新建一个空对象（堆内存），并且让函数中的执行主体（this）指向这个新的堆内存，即 this === 新创建的对象
3. 代码自上而下执行
4. 【构造函数执行独有】代码执行完成，把之前创建的堆内存地址返回

也就是开始创建的对象其实就是当前函数的一个实例，我们让 this 指向这个实例，代码执行汇总的 this.xxx = xxx 都是给实例设置 **私有属性**，最后会把默认创建的实例返回。

再次执行构造函数，就是把上面的操作再重复一次，会形成新的实例，所以实例之间是独立分开的。

``` javascript
function Fn(name, age) {
  var n = 10;
  this.name = name;
  this.age = age + n;
}

var f1 = new Fn('xxx', 20);
var f2 = new Fn('aaa', 30);
//=> 其中只有 this.xxx = xx 才和实例有关系，而 n 只是私有作用域中的一个私有变量，不直接影响实例。
```

### 构造函数的细节
（1）构造函数执行，不写 return，会默认返回创建的实例，但是如果我们自己写了 return？
- return 的是一个基本值或者没有值，返回结果依然是类的实例，没有受到影响
- 如果返回的是引用值，则会把默认返回的实例覆盖，此时接受到的结果就不再是当前类的实例了

所以，在构造函数执行时，尽量不要使用 `return` 返回值，防止覆盖实例

（2）在构造函数执行的时候，如果不需要传入实参，可以省略后面的小括号，不会有影响

``` javascript
var f = new Fn;//=> 等同于 new Fn()
```

<Quote>生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</Quote>
