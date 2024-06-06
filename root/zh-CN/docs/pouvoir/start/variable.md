---
title: JavaScript-变量
tags:
 - Pouvoir
 - JavaScript
category: 'docs'

---

# JavaScript-变量

###### 本章将会简单地讲解 JavaScript 的语法基础

###### 部分[www.runoob.com/js/js-tutorial.html](https://www.runoob.com/js/js-tutorial.html)摘录，如有错误欢迎指正。

###### 如果你有 JavaScript 基础，可以跳过本章，开始 "进阶" 的学习

## 第一个变量

在 `JavaScript`中创建变量被称为“定义”变量。
您可以通过 `var` 关键词来定义 `JavaScript` 变量：

```javascript
//变量定义方式
var a;
```

定义之后，变量是没有值的。（实际上上，它的值是 undefined。）

如需赋值给变量，需要使用等号：

```javascript
a = "Hello Wolrd!";
```

你可以在定义变量时向它赋值：

```javascript
var a = "Hello Wolrd!";
```

这便是你的第一个变量了，它是用来存放数据的容器。

我们来把上面这个语句拆分来讲

### 变量定义方式

共有四种

- var
- let
- const
- function

这四种定义变量的方式彼此之间的区别体现在：

##### 重复定义

- var 能重复定义，后者覆盖前者
- let 和 const 和 function 则不能重复定义

##### 作用域的范围

- var 的作用域是以函数/整个文件为作用域
- let, function 和 const 是块作用域

##### const 的特殊之处

- 经过 const 方式进行定义，之后赋值完毕，则不可以进行改变。

##### function 的特殊之处

- 与其他三种方式存放数据不同，function 是专门用来定义"函数"的(js 中函数也是变量)
- 不能重复定义

上述四点区别只是概念上的，具体还需你在编写脚本过程中体会

### 变量名

所有 JavaScript 变量必须以唯一的名称的标识。

这些唯一的名称称为标识符。

##### 构造变量名称（唯一标识符）的通用规则是：

- 名称可包含字母、数字、下划线和美元符号
- 名称必须以字母开头
- 名称也可以 $ 和 \_ 开头（但是在本教程中我们不会这么做）
- 名称对大小写敏感（y 和 Y 是不同的变量）
- 保留字（比如 JavaScript 的关键词）无法用作变量名称

> JavaScript 语句和 JavaScript 变量都对大小写敏感。

### 综上所述

可以通过以下方法判断一个变量是否被赋值：

```javascript
//注意 只定义不赋值
var a;

function a() {
  if (typeof a == "undefined") {
    //如没有则赋值
    a = "Hello Wolrd!";
  }
}
```

你也可以省略定义.

```javascript
function a() {
  if (typeof a == "undefined") {
    //如没有则赋值
    a = "Hello Wolrd!";
  }
}
```

在`Pouvoir`中，以上方式可以用来定义全局变量

### 数据类型

变量`a`的类型是 字符串，是**基本类型**之一

有关数据类型，请看 [www.runoob.com/js/js-datatypes.html](https://www.runoob.com/js/js-datatypes.html)
