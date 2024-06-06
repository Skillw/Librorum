---
title: 'AttributeSystem 条件'
tags:
 - AttributeSystem
category: 'docs'
---

# 条件

### 介绍

**AttributeSystem** 中 **条件** 负责控制 一组/一行字符串 中的**属性读取与否**

### 使用

请看上一节 [条件用法](https://usage)

### 定义

```javascript
//@Condition()

key = "slot";
type = "ALL";
names = ["槽位: (?<slot>.*)"];

function condition(slot, entity, matcher, text) {
  if (entity == null || !(entity instanceof Player)) return true;
  const requiredSlot = matcher.group("slot");
  return requiredSlot.equalsIgnoreCase(slot);
}

function conditionNBT(slot, entity, map) {
  if (entity == null || !(entity instanceof Player)) return true;
  const requiredSlot = map.get("slot");
  return requiredSlot.equalsIgnoreCase(slot);
}
```

或

`java / kotlin` 中编写`BaseCondition`子类并`register()`
