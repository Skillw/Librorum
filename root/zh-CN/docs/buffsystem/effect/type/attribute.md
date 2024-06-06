---
title: BuffSystem 属性效果
tags:
 - BuffSystem
category: 'docs'
---

# 属性效果

### 效果

给实体属性

### 用法

#### 参数

1. `attributes` (必填)

#### 例子

```yaml
#效果key
example-attribute:
  #效果类型
  type: attribute
  attributes:
    ##             字符串内联函数
    - "移动速度: {calculate '1000+100 * {level}'}"
```

#### 附

如果是 **AttributeSystem**， `attributes`中支持**属性条件**
