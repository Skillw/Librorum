---
title: 'AttributeSystem 运算操作'
tags:
 - AttributeSystem
category: 'docs'
---

# 运算操作

### 默认

###### 数字

- **Max** 取最大值
- **Min** 取最小值
- **Plus** 做加法
- **Reduce** 做减法
- **Scalar** 做乘法

###### 字符串

- **skip** 只取第一个捕获到的
- **append** 以`, `为分隔符，进行叠加 (config 里可以改分隔符)
- **roman_num** 将捕获到的罗马数字做加运算

  共 8 种**运算操作**，如有需要，你可以通过编写脚本/代码拓展

### 拓展

#### 数字运算操作

```javascript
//@NumberOperation(pow)
function pos(a, b) {
  return a.pow(b);
}
```

```kotlin
@AutoRegister
object Scalar : NumberOperation("scalar") {
    override fun operate(a: Number, b: Number): Number {
        return a.toDouble() * b.toDouble()
    }
}

```

#### 字符串运算操作

```javascript
lookup = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function toInt(roman) {
  let i,
    num = 0;
  for (i in lookup) {
    while (roman.indexOf(i) === 0) {
      num += lookup[i];
      roman = roman.replace(i, "");
    }
  }
  return num;
}

function toRoman(num) {
  let roman = "";
  for (let i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

//@StringOperation(roman_num)
function romanNum(a, b) {
  return toNum(toInt(a) + toInt(b));
}
```

```kotlin
@AutoRegister
object Skip : StringOperation("skip") {
    override fun operate(a: String, b: String): String {
        return a
    }
}
```
