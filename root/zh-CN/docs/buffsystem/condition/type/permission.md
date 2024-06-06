---
title: BuffSystem 权限条件
tags:
 - BuffSystem
category: 'docs'
---

# 权限条件


### 条件

给 **Buff** 限制权限

### 用法

#### 参数(JSON)

1. `permissions` (必填)

#### 例子

```yaml
example:
  name: "示例Buff"
  #这个buff有permission条件
  conditions:
    - "permission"
  effects:
    - "example-attribute"
```

指令`/buff add Glom_ 任意key example {permissions:["a.b.c"]}`
亦或者[**MM 机制**](https://../other/mythic-mobs)
