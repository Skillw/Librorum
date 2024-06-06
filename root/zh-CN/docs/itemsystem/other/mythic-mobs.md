---
title: ItemSystem MythicMobs 兼容
tags:
 - ItemSystem
 - MythicMobs
category: 'docs'
---

# MythicMobs 兼容


> ItemSystem 节点下的值均支持内联函数

```yaml
SkeletalKnight:
  Type: WITHER_SKELETON
  Display: "&aSkeletal Knight"
  Health: 40
  Damage: 8
  Drops:
    - GOLD_NUGGET{display="Gold Coin"} 1to2 0.5
  LevelModifiers:
    - health 5
    - damage 0.5
  #下面这段涵盖所有配置
  ItemSystem:
    Equipment:
      - "HELMET ExampleHelmet -data {quality:传说}"
    Drops:
      - "mob::HELMET"
      - "ExampleItem"
    Effect: true
    offsetX: 0
    offsetY: 1
    offsetZ: 0
```

> []为必填项 , ()为可填项

### Equipment

#### 格式

`[槽位id] [物品id] (-amount 数量公式) (-probable 几率公式) (-data 构造数据)`

例:
`HELMET ExampleHelmet -data {quality:传说}`

### Drops

#### 格式

`[槽位id] (-amount 数量公式) (-probable 几率公式) (-data 构造数据)`
或
`[物品id] (-amount 数量公式) (-probable 几率公式) (-data 构造数据)`

你可以通过在一行前添加`mob::`来把生成物品的对象指向怪物
就像这样:
`mob::HELMET`

例:
`ExampleItem -data {quality:传说}`

### Effect

是否开启特效掉落

### offset

物品掉落在 X Y Z 轴的矢量偏移
