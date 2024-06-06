---
title: JavaScript-Nashorn
tags:
 - Pouvoir
 - JavaScript
category: 'docs'

---

# Nashorn

Nashorn 是一个基于 JVM 的轻量级高性能的 JavaScript 运行环境。

以下是其特性

```javascript
//查看包类型
print(java);
print(java.lang);
print(typeof java.lang);
print(typeof java.lang.System);
print(typeof java.lang.System == 'function');


//创建Java对象
var HashMap = Java.type("java.util.HashMap");
var mapDef = new HashMap();
var map100 = new HashMap(100);
print(Java.type("java.util.Map").Entry);
print('内部类：' + Java.type("java.util.Map$Entry")); //存取内部类


//JavaString測试
var StringCls = Java.type("java.lang.String");
var str = new StringCls("Hello");
str = str.toUpperCase();
print('Upper: ' + str);


//測试输出
Java.type("java.lang.System").out.println(10);
Java.type("java.lang.System").out["println(double)"](https://10.92929);


//日期
var Date = Java.type('java.util.Date');
var date = new Date();
print('year:' + date.year);
date.year += 1000;
print('new year:' + date.year);


//字符串处理
print("   hehe".trimLeft());            // hehe
print("hehe    ".trimRight() + "he");   // hehehe


//简单函数的定义
function sqr(x) x * x;
print(sqr(3));    // 9


//把不同对象的属性绑定
var o1 = {age: 15};
var o2 = {name: 'bar'};
Object.bindProperties(o1, o2);   //绑定o2到o1上
print('对象的o1属性：' + o1.name + ', ' + o1.age);    //对象的o1属性：bar, 15
print('对象的o2属性：' + o2.name + ', ' + o2.age);    //对象的o2属性：bar, undefined
o1.name = 'BAM';
print('对象的o2属性：' + o2.name);    //BAM


//load命令
load('http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js');
var odds = _.filter([1, 2, 3, 4, 5, 6], function (num) {
    return num % 2 == 1;
});
print('underscore结果：' + odds);  // 1, 3, 5


//Lamda表达式
var map = Array.prototype.map;
var names = ["john", "jerry", "bob"];
//调用匿名函数。输入參数是names，匿名函数自己主动遍历names的内容name，并计算其长度
var a = map.call(names, function(name) { return name.length() });
print('Lamda表达式：' + a);


//Java数组
var IntArray = Java.type("int[]");
var iarr = new IntArray(10);
iarr[1] = 5;
iarr[2] = 3;
iarr[3] = iarr[1] + iarr[2];
print('5 + 3 = ' + iarr[3]);
print('iarr.length= ' + iarr.length);
print(iarr[0]);
for (var i in iarr) print(i);  //取得索引下标
for each(var i in iarr) print(i); //取得值


//try...catch使用方法
try {
  iarr[10] = 5;
}
catch (e) {
  print('try...catch...使用方法：' + e.message);
  print(e.lineNumber)
  print(e.columnNumber)
  print(e.fileName)
}


//Java.to实现javascript到java数组类型的转换
var jsVals = ["a", "bc", "de"];
var JString = Java.type("java.lang.String[]");
var jVals = Java.to(jsVals, JString);


//数据类型转换
var ival = 10;
print(ival.class);
ival = Number(ival);
print(ival.class);


//Java集合使用
var ArrayList = Java.type("java.util.ArrayList");
var list = new ArrayList();
list.add("zhang");
list.add("wang");
for each(var i in list) print(i);


//HashMap
print();
print('HashMap demo');
var HashMap = Java.type("java.util.HashMap");
var hm = new HashMap();
hm.put('zhangsan', 133992);
hm.put('lisi', {name:'martin', sex:'male'});
for each (key in hm.keySet()) print('key: ' + key);
for each (val in hm.values()) print('val: ' + val + ' ' + typeof val);


//存取类及事实上例成员
print('pi:' + Java.type("java.lang.Math").PI);
print('time:' + Java.type("java.lang.System").currentTimeMillis())
print('ok');




//继承和扩展线程类
var Run = Java.type("java.lang.Runnable");
var MyRun = Java.extend(Run, {
    run: function() {
        print("I am running in separate thread");
    }
});
//构造
var Thread = Java.type("java.lang.Thread");
var th = new Thread(new MyRun());
th.run();


var th1 = new Thread(new MyRun());
th1.run();


//super调用父类方法
var SuperRunner = Java.type('java.lang.Thread');
var Runner = Java.extend(SuperRunner);
var runner = new Runner() {
    run: function() {
        Java.super(runner).run();
        print('on my run');
    }
}
runner.run();




//用Javascript定义一个类Dog
function Dog(name) {
  this.name = name;
  this.bark = function() {
    return "Hello, " + this.name;
  }
}


var dog = new Dog("martin");
print("dog bark function: " + dog.bark());


//怎样继承Object类
//from: wiki.openjdk.java.net/display/Nashorn/Nashorn+extensions
/*没模仿成功
var Object = Java.type("java.lang.Object");
var Dog = Java.extend(Object);
var dog = new Dog() {
  bark : function(name) {
    return "hello, " + name;
  }
}
print('狗叫：' + dog.bark('martin'));
*/


//Packages使用方法
var Vector = Packages.java.util.Vector;
// but short-cuts defined for important package prefixes like
//    Packages.java, Packages.javax, Packages.com
//    Packages.edu, Packages.javafx, Packages.org
var JFrame = javax.swing.JFrame;  // javax == Packages.javax
var List = java.util.List;        // java == Packages.java


//exit(1);  //告诉引擎代码运行到这里
//quit(1);




//导入范围---集中一次导入--JavaImporter和with使用方法
var imports = new JavaImporter(java.io, java.lang);
with (imports) {
    var file = new File(__FILE__);  //查找我在哪里？
    System.out.println('哪里: ' + file.getAbsolutePath());   //内容比較古怪
    // /path/to/my/script.js
}


var CollectionsAndFiles = new JavaImporter(
    java.util,
    java.io,
    java.nio);
with (CollectionsAndFiles) {
  var files = new LinkedHashSet();
  files.add(new File("Plop"));
  files.add(new File("Foo"));
  files.add(new File("w00t.js"));
}


//__LINE__显示当前代码行数，用于调试比較好
print(__FILE__, __LINE__, __DIR__);

```
