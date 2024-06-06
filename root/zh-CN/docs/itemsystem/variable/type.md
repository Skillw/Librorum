---
title: ItemSystem 变量类型
tags:
 - ItemSystem
category: 'docs'
---

# 变量类型

狭义的变量类型，仅限`define 物品元`中使用

### 既然有了内联函数，为什么要提供`define 物品元`乃至变量类型?

1. 一些情况下，比内联函数声明更方便
2. 为了给其它物品插件的用户过渡
3. ~~继承 RI2/3~~

### 变量类型

不同的变量类型需要填入**不同的参数**来定义，
不同的变量类型也有**不同的返回值**与使用方法

### 都有哪些变量类型?

见[变量类型列表](https://types)

### 拓展

拓展的物品元与普通物品元的使用无异

需要用到 [Memory](https://doc.skillw.com/itemsystem/com/skillw/itemsystem/api/meta/data/Memory.html)

#### JavaScript

```javascript
//@VarType(costom-var-type)
function myType(memory) {
  //获取str参数
  const str = memory.getString("str");
  return str;
}
```

#### Kotlin

你可以去[**Github**](https://github.com/Skillw/ItemSystem)借鉴源码

```kotlin
@AutoRegister
object VarTypeNumber : VariableType("number", "num") {
    override fun createVar(memory: Memory): Any {
        with(memory) {
            val number = getDouble("value", 0.0)
            val format = getString("format", "#.##")
            val max = getDouble("max", number)
            val min = getDouble("min", number)
            return max(min(number, max), min).format(format)
        }
    }
}
```
