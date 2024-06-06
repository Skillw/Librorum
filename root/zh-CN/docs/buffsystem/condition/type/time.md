---
title: BuffSystem 时间条件
tags:
 - BuffSystem
category: 'docs'
---

# 时间条件

### 条件

给 **Buff** 限制时间

### 用法

#### 参数(JSON)

1. `duration` tick (必填)

#### 例子

```yaml
example:
  name: "示例Buff"
  #这个buff有time条件
  conditions:
    - "time"
  effects:
    - "example-attribute"
```

> duration -1 代表永久

指令`/buff add Glom_ 任意key example {duration:-1}`
亦或者[**MM 机制**](https://../other/mythic-mobs)
