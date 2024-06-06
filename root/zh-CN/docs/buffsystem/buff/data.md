---
title: BuffSystem Buff 数据
tags:
 - BuffSystem
category: 'docs'
---

# Buff 数据


你需要了解一下**BuffSystem**中的**Buff 数据**

### 什么是 Buff 数据[BuffData]?

**BuffSystem** 中，**Buff**生效时的环境(变量存储的地方),你可以理解成参数

### 为什么要给用户讲?

因为用户需要调用**Buff 数据**中的**变量**来实现功能

### 怎么调用？

通过`{变量id}`来调用变量

### 传递数据

通过 **JSON** 来进行快速传参

#### 例子

```yaml
example:
  name: "动态属性"
  data:
    duration: 400
    name: 攻击力
    value: 100
  conditions:
    - "time"
  effects:
    - type: attribute
      attributes:
        - "{name}: {value}"
```

指令`/buff add Glom_ 任意key example {name:属性名,value:值}`
亦或者[**MM 机制**](https://../other/mythic-mobs)
