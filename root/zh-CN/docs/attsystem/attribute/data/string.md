---
title: 'AttributeSystem 字符串'
tags:
 - AttributeSystem
category: 'docs'
---

# 字符串

### 格式

以默认提供的`YourReadGroup`读取组为例

```yaml
YourReadGroup:
  type: number
  matchers:
    percent: plus
    value: plus
  patterns:
    - '{name}: <percent>\(%\)'
    - "{name}: <value>"
  placeholder:
    total: "<value> * (1 + (<percent>/100) )"
    value: <value>
    percent: <percent>/100
```

- `属性名: {属性值}(%)` -> 属性值地方的数字会由捕获组 `percent` **捕获并存储 **
- `属性名: {属性值}` -> 属性值地方的数字会由捕获组 `value` **捕获并存储**

> 字符串中的属性，需要符合此属性读取组的匹配格式
