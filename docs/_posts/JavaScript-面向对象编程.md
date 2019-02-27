---
title: JavaScript 面向对象编程（转）
layout: post
category: 前端技术
tags:
  - web前端
  - javascript
date: 2017-09-14 18:53:43
update: 2017-09-14 18:53:43
copyright: false
comments: true
---

>引自：阮一峰的博客
>[Javascript面向对象编程（一）：封装](https://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html)
>[Javascript面向对象编程（二）：构造函数的继承](https://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html)
>[Javascript面向对象编程（三）：非构造函数的继承](https://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance_continued.html)

本篇博文是摘自上面的博客，进行了一定的精简，直接呈现最理想的实现方法。

<!-- more -->

## JavaScript 对象封装

### 一、构造函数

``` javascript
	function Cat(name,color){
		this.name = name;
		this.color = color;
	}
```
每个实例特有的属性与方法放在构造函数内,在创建实例时同时创建

#### 1.  constructor属性

指向它们的构造函数。

``` javascript
　　alert(cat1.constructor == Cat); //true
　　alert(cat2.constructor == Cat); //true
```
#### 2.  instanceof运算符

验证原型对象与实例对象之间的关系。

``` javascript
　　alert(cat1 instanceof Cat); //true
　　alert(cat2 instanceof Cat); //true
```

### 二、prototype

实例所共有的属性和方法都指向同一内存地址：prototype对象，节省内存，提高效率

``` javascript
	Cat.prototype.type = " 猫科";
	Cat.prototype.eat = function(){alert('吃老鼠');
```

Prototype模式的验证方法
 
#### 1. isPrototypeOf()

用来判断，某个proptotype对象和某个实例之间的关系。

``` javascript
　　alert(Cat.prototype.isPrototypeOf(cat1)); //true
　　alert(Cat.prototype.isPrototypeOf(cat2)); //true
```

#### 2. hasOwnProperty()

用来判断某一个属性到底是本地属性，还是继承自prototype对象的属性。

``` javascript
　　alert(cat1.hasOwnProperty("name")); // true
　　alert(cat1.hasOwnProperty("type")); // false
```

#### 3. in运算符

可以用来判断，某个实例是否含有某个属性，不管是不是本地属性。

``` javascript
　　alert("name" in cat1); // true
　　alert("type" in cat1); // true
```
还可以用来遍历某个对象的所有属性。

``` javascript
　　for(var prop in cat1) { alert("cat1["+prop+"]="+cat1[prop]); }
```

### 三、创建实例

``` javascript
	var cat1 = new Cat("小白","黄色");
```

## javascript 对象构造函数的继承

### 一、 构造函数绑定

第一种方法也是最简单的方法，使用`call`或`apply`方法，将父对象的构造函数绑定在子对象上，即在子对象构造函数中加一行：

``` javascript
　　function Cat(name,color){
　　　　Animal.apply(this, arguments);
　　　　this.name = name;
　　　　this.color = color;
　　}
　　var cat1 = new Cat("大毛","黄色");
　　alert(cat1.species); // 动物
```

### 二、 prototype模式

 直接继承父类的prototype对象，但是，直接将子类prototype指向父类的prototype对象，会导致父类prototype对象的constructor属性被改掉，所以利用空对象作为中介

由于Animal对象中，不变的属性都可以直接写入Animal.prototype。所以，我们也可以让Cat()跳过 Animal()，直接继承Animal.prototype。
现在，我们先将Animal对象改写：

``` javascript
　　function Animal(){ }
　　Animal.prototype.species = "动物";

　　var F = function(){};
　　F.prototype = Animal.prototype;
　　Cat.prototype = new F();
　　Cat.prototype.constructor = Cat;
```
F是空对象，所以几乎不占内存。

封装成一个函数，便于使用。

``` javascript
　　function extend(Child, Parent) {
　　　　var F = function(){};
　　　　F.prototype = Parent.prototype;
　　　　Child.prototype = new F();
　　　　Child.prototype.constructor = Child;
　　　　Child.uber = Parent.prototype;
　　}
```
使用的时候，方法如下

``` javascript
　　extend(Cat,Animal);
　　var cat1 = new Cat("大毛","黄色");
　　alert(cat1.species); // 动物
```
函数体最后一行

	　　Child.uber = Parent.prototype;

意思是为子对象设一个uber属性，这个属性直接指向父对象的prototype属性。这等于在子对象上打开一条通道，可以直接调用父对象的方法。这一行放在这里，只是为了实现继承的完备性，纯属备用性质。

### 三、 拷贝继承

应当分为浅拷贝和深拷贝

纯粹采用"拷贝"方法实现继承。把父对象的所有属性和方法，拷贝进子对象

``` javascript
　　function extend2(Child, Parent) {
　　　　var p = Parent.prototype;
　　　　var c = Child.prototype;
　　　　for (var i in p) {
　　　　　　c[i] = p[i];
　　　　　　}
　　　　c.uber = p;
　　}
```
使用的时候，这样写：

``` javascript
　　extend2(Cat, Animal);
　　var cat1 = new Cat("大毛","黄色");
　　alert(cat1.species); // 动物
```

## javascript 对象非构造函数的继承

### 一、object()方法

json格式的发明人Douglas Crockford，提出了一个object()函数，可以做到这一点。

``` javascript
　　function object(o) {
　　　　function F() {}
　　　　F.prototype = o;
　　　　return new F();
　　}
```
把子对象的prototype属性，指向父对象，从而使得子对象与父对象连在一起。

使用的时候，第一步先在父对象的基础上，生成子对象：

	　　var Doctor = object(Chinese);

然后，再加上子对象本身的属性：

	　　Doctor.career = '医生';

这时，子对象已经继承了父对象的属性了。

### 二、浅拷贝
把父对象的属性，全部拷贝给子对象，也能实现继承。
下面这个函数，就是在做拷贝：

``` javascript
　　function extendCopy(p) {
　　　　var c = {};
　　　　for (var i in p) { 
　　　　　　c[i] = p[i];
　　　　}
　　　　c.uber = p;
　　　　return c;
　　}
```
使用的时候，这样写：

``` javascript
　　var Doctor = extendCopy(Chinese);
　　Doctor.career = '医生';
　　alert(Doctor.nation); // 中国
```
但是，这样的拷贝有一个问题。那就是，如果父对象的属性等于数组或另一个对象，那么实际上，子对象获得的只是一个内存地址，而不是真正拷贝，因此存在父对象被篡改的可能。

所以，**extendCopy()只是拷贝基本类型的数据**，我们把这种拷贝叫做"浅拷贝"。

### 三、深拷贝

所谓"深拷贝"，就是能够**实现真正意义上的数组和对象的拷贝**。它的实现并不难，只要**递归调用**"浅拷贝"就行了。

``` javascript
　　function deepCopy(p, c) {
　　　　var c = c || {};
　　　　for (var i in p) {
　　　　　　if (typeof p[i] === 'object') {
　　　　　　　　c[i] = (p[i].constructor === Array) ? [] : {};
　　　　　　　　deepCopy(p[i], c[i]);
　　　　　　} else {
　　　　　　　　　c[i] = p[i];
　　　　　　}
　　　　}
　　　　return c;
　　}
```

使用的时候这样写：

	　　var Doctor = deepCopy(Chinese);


<Quote>生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</Quote>