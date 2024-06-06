---
title: BuffSystem 效果
tags:
 - BuffSystem
category: 'docs'
---

# 效果

### 自定义效果

于 **plugins/BuffSystem/effects** 文件夹下任意一个**YAML 文件**

```yaml
#效果key
example-attribute:
  #效果类型
  type: attribute
  attributes:
    ##             字符串内联函数
    - "移动速度: {calculate '1000+100 * {level}'}"
```

接下来逐一讲解

### 效果 key [example-attribute]

**效果**的**唯一标识符**, **id**

### 效果类型 [type]

**BuffSystem**默认提供了 **3** 种**效果类型**

- attribute **属性**
- potion **原版药水**
- permissions **权限**

具体如何使用见下三节

### 其它

**BuffSystem**自带的 3 个**效果类型**的参数，
支持所有**占位符**，**字符串内联函数**，**数字运算**
甚至支持**传参**

### 使用

见 [Buff](https://../buff/intro)
