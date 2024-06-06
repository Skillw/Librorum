---
title: AttributeSystem 槽位系统
tags:
 - AttributeSystem
category: 'docs'
---

# 槽位系统

### 介绍

**AttributeSystem **自带的**槽位系统** 支持 **原版玩家背包 ** **实体的原版装备栏** **萌芽槽位** **龙核槽位**

### 配置

> AttributeSystem/slot.yml

```yaml
#左ID 右槽位
player:
  #左AS内部槽位key 右原版槽位
  "头盔": "HAED"
  #你可以这么写来限制槽位物品
  #"头盔":
  ## slot: "HEAD"
  ## #必须含的lore
  ## requirements:
  ##   - "头盔"
  #可节点形式/字符串形式
  "胸甲": "CHEST"
  "护腿": "LEGS"
  "靴子": "FEET"
  "主手": "HAND"
  "副手": "OFFHAND"
  #读取槽位20的装备 以20th为id存入装备栏
  "20th": "20"
entity:
  "头盔": "HEAD"
  "胸甲": "CHEST"
  "护腿": "LEGS"
  "靴子": "FEET"
  "主手": "HAND"
  "副手": "OFFHAND"
## 萌芽槽位 会读取萌芽example槽位中的装备
germ-slots:
  - "example"
```

### 获取

#### 用户

通过变量`%as_equipment:装备组id_槽位key_属性名_占位符key%`获取某装备属性值
（也可以通过指令 `/as itemstats`）

#### 开发者

```kotlin
val compound = uuid.getEquipData()
val data = compound["BASE-EQUIPMENT"]
val value = data["HEAD"]
```
