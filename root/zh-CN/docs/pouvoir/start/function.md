---
title: JavaScript-函数
tags:
 - Pouvoir
 - JavaScript
category: 'docs'

---

# JavaScript-函数

## 第一个函数-函数的定义

JavaScript 函数是被设计为执行特定任务的代码块。
JavaScript 函数会在某代码调用它时被执行。

```javascript
//        函数名     参数
function myFunction(p1, p2) {
  //代码块
  return p1 * p2; // 该函数返回 p1 和 p2 的乘积
}
```

JS 函数的定义一般遵循以下格式

```javascript
function 函数名(参数1, 参数2, 参数3) {
  //要执行的代码
}
```

让我们像上一节一样，将函数的定义拆开来讲

### 定义方式

#### 函数方式(命名函数)

利用函数关键字 function 自定义函数方式。

```javascript
// 定义方式
//        函数名     参数
function myFunction(p1, p2) {
  //代码块
  return p1 * p2; // 该函数返回 p1 和 p2 的乘积
}

var a = 114;
var b = 514;
// 调用
myFunction(a, b);
```

因为有名字，所以也被称为命名函数

调用函数的代码既可以放到定义函数的前面，也可以放在定义函数的后面

#### 函数表达式方式(匿名函数）

JavaScript 函数也可以使用表达式来定义。

函数表达式可以在变量中存储：

```javascript
// 这是函数表达式写法，匿名函数后面跟分号结束
var myFunction = function (p1, p2) {
  return p1 * p2;
};

//在变量中保存函数表达式之后，此变量可用作函数：
var a = 114;
var b = 514;
// 调用
myFunction(a, b);
```

上面的函数实际上是一个匿名函数（没有名称的函数）。

存放在变量中的函数不需要函数名。他们总是使用变量名调用。

上面的函数使用分号结尾，因为它是可执行语句的一部分。

在 Pouvoir 中，JDK9+支持 **箭头函数**

##### 箭头函数

箭头函数允许使用简短的语法来编写函数表达式。

您不需要 function 关键字、return 关键字和花括号。

> 像我这样的 lambda 疯狂者真的狂喜

```javascript
// ES5 (jdk8)
var x = function (x, y) {
  return x * y;
};
// ES6 (jdk9+)
const x = (x, y) => x * y;
```

#### Function() 构造器

正如您在之前的例子中看到的，JavaScript 函数是通过 function 关键词定义的。

函数也可以通过名为 Function() 的内建 JavaScript 函数构造器来定义。

```javascript
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
```

### 函数名

函数名可包含字母、数字、下划线和美元符号（规则与变量名相同）。

### 参数

圆括号可包括由逗号分隔的参数：

(参数 1, 参数 2, ...)

在函数中，参数是局部变量，也就是说代码块外，函数参数就不存在了。

### 代码块

由函数执行的代码被放置在花括号中：{}

---

多提一嘴，
**函数参数**（Function parameters）是在函数定义中所列的名称。
**函数参数**（Function arguments）是当调用函数时由函数接收的真实的值。
之后讲到 脚本注解的运用 会涉及到。

## 函数调用

一般遵循以下格式：

```javascript
var a = 114;
var b = 514;
myFunction(a, b);
```

<br/>

---

本节部分摘录自 [www.w3school.com.cn/js/js_functions.asp](https://www.w3school.com.cn/js/js_functions.asp)
