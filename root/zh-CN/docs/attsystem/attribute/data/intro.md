---
title: 'AttributeSystem 属性数据'
tags:
 - AttributeSystem
category: 'docs'
---

# 属性数据

### 初始结构

让我们简单了解一下**AttributeSystem**的**属性数据**是如何存储的:

```yaml
#属性数据集
AttributeDataCompound:
  #属性数据 （包含多个属性状态）
  AttributeData:
    #属性状态1
    Attribute1:
      #属性状态的具体内容
      #捕获组id: 值
      Matcher: value
    #属性状态2
    Attribute2:
      Matcher: value
```

拿一个玩家的`AttributeDataCompound`(**属性数据集**)做例子:

```yaml
AttributeDataCompound:
  #属性数据key
  BASE-ATTRIBUTE:
    #最大生命值属性(状态)key
    MaxHealth:
      #捕获组value = 10
      value: 10
    AttackSpeed:
      value: 1
  #玩家装备栏中所有物品的lore属性都会存在这里
  LORE-ATTRIBUTE:
    MaxHealth:
      value: 25
      percent: 10
    PhysicalDamage:
      value: 100
  #属性数据key
  Buff-Attribute-1:
    #护甲属性(状态)key
    PhysicalDefense:
      #捕获组value = 25
      value: 25
      #捕获组percent = 50
      pecent: 50
```

接下来逐级讲解一下.

#### 属性数据集 (AttributeDataCompound)

一个实体的**属性数据集**，存储 **属性数据**

#### 属性数据 (AttributeData)

由 **属性状态** 组成

#### 属性状态 (AttributeStatus)

由 **捕获组** 及其 **值** 组成
