---
title: 'AttributeSystem MythicMobs'
tags:
 - AttributeSystem
 - MythicMobs
category: 'docs'
---

## MythicMobs

### MM 技能

让**MM 技能伤害**支持 AS 的**战斗机制组**

```yaml
Skills:
  - att-damage{key="战斗机制组id"} @Target
```

MM 的属性伤害机制支持以下参数
|标签(缩写) |描述 |默认设置|
|:--:|:--:|:--:|
|amount(a) |造成的伤害值 |1|
|ignoreArmor(ia) |是否无视防御,为 false 时,若伤害の目标为自身,则无法伤害自身 |false|
|preventknockback(pkb,pk) |是否不造成击退 |false|
|preventimmunity(pi) |是否无视伤害硬直 |false|
|element(仅限付费版) |伤害类型(MMOItems) |无|

且支持参数传递，例:
`att-damage{key="战斗机制组id";test=1} @Target`
则可以在战斗机制组中通过`{test}`调用参数值

### MM 怪属性

让**MM 怪**拥有 AS 的**属性**

```yaml
SkeletalKnight:
  Type: WITHER_SKELETON
  Display: "&aSkeletal Knight"
  Health: 40
  Damage: 8
  Equipment:
    - IRON_HELMET HEAD
    - IRON_CHESTPLATE CHEST
    - IRON_LEGGINGS LEGS
    - IRON_BOOTS FEET
    - IRON_SWORD HAND
    - SHIELD OFFHAND
  Drops:
    - GOLD_NUGGET{display="Gold Coin"} 1to2 0.5
  LevelModifiers:
    - health 5
    - damage 0.5
  Attributes:
    #同样支持条件 乃至单行条件
    - "Lv.100"
    - "移动速度: 100"
 Options: {}
#这里的原版属性不能和AS的属性冲突 所以注释掉了
##   MovementSpeed: 0.1
```

配置下加 **Attributes** 节点即可
