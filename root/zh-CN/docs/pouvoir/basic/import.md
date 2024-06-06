---
title: Pouvoir-从导入开始
tags:
 - Pouvoir
category: 'docs'

---

# 从导入开始



## 导入(获取类对象)

在编写 js 脚本时，会有许多不便之处，例如非常冗长的类名，如果需要使用的话要写下完整包名，

为了缓解这种不便，**Pouvoir 1.4** 提供了**顶级成员** `static`与 `find` 供脚本编写者使用

### static

`static`是一个**顶级函数**，你可以直接在脚本中调用以获取静态类对象

它只有一个参数——**类名**

**Pouvoir**在启用时会初始化一个`HashMap`，里面存放着每个类名与其类对象的**键-值对**

而`static`正是在此**HashMap**中通过类名获取到静态类对象，因此**性能很高**

如果**类名不存在**，会返还 null

#### 使用

```javascript
//static是一个顶级函数，可以通过类的SimpleName(类名)来快速获取静态类对象
var Coere = static("Coere");
function isNum(numStr) {
  return Coere.asDouble(numStr).isPresent; //是否是数字
}
```

当有重复类名时，我们一般使用`find`

### find

`find`是一个**顶级函数**，你可以直接在脚本中调用以获取静态类对象

它只有一个参数——**类的完整路径**

`find`是通过常规方法`forClass`来获取静态类的.

如果**类不存在**，后台会给予提示

#### 使用

```javascript
var Coere = find("com.pouvoir.taboolib.common5.Coere");
function isNum(numStr) {
  return Coere.asDouble(numStr).isPresent; //是否是数字
}
```

你可以通过"`>`"来缩短**TabooLib**类路径的方法

```javascript
var Coere = find(">taboolib.common5.Coere");
function isNum(numStr) {
  return Coere.asDouble(numStr).isPresent; //是否是数字
}
```

## 其它方式

### Packages

`Packages` 是一个顶级属性，用来导入**类/包**

```javascript
var Coere = Package.com.pouvoir.taboolib.common5.Coere;
function isNum(numStr) {
  return Coere.asDouble(numStr).isPresent; //是否是数字
}
```

### java

`java` 一般用来导入**类/包**

```javascript
var ArrayList = java.util.ArrayList;
function newList() {
  return new ArrayList();
}
```

不光是 `java`，只要是路径以 `com`, `edu`, `java`, `javax`, 和 `org` 开头的的类都支持

以上两种方法是**Nashorn**提供的，很直观，但是有缺点：

- **性能低**
- 当你用`java`去导入一个不存在的类是，**Nashorn**会将它认作一个"**包**"

为了避免这些缺点，Nashorn 提供了另外一种方法——Java.type

### Java.type

通过**顶级属性** `Java` 中的 `type` 函数

我们可以高效地导入任何一个类，这种方法与**find**区别并不大

```javascript
var Coere = Java.type("com.pouvoir.taboolib.common5.Coere");
function isNum(numStr) {
  return Coere.asDouble(numStr).isPresent; //是否是数字
}
```

但是像这样一个个导入类太繁琐了，**Nashorn**还提供了一位大哥

### JavaImporter

通过`JavaImporter`，我们可以一次性快速导入多个类

```javascript
//导入范围---集中一次导入--JavaImporter和with使用方法
var imports = new JavaImporter(java.io, java.lang);
with (imports) {
  var file = new File(__FILE__); //查找我在哪里？
  print("哪里: " + file.getAbsolutePath());
}
```
