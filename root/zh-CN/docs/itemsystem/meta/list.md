---
title: ItemSystem 物品元列表
tags:
 - ItemSystem
 - MythicMobs
category: 'docs'
---

# 物品元列表


## 物品[Bukkit]

### display

##### 参数

1. `物品展示名`

##### 作用

设置物品展示名

---

### material

##### 参数

1. `材质 id`

##### 作用

设置物品材质

---

### damage

##### 参数

1. `损坏值`

##### 作用

设置物品损坏值(损失了多少耐久)

---

### spawn-type

##### 参数

1. `实体 ID`
   `

##### 作用

设置刷怪蛋类型(?)

---

### can-be-placed

##### 参数

1. `是否能被放置`

##### 作用

设置方块是否可被放置(打掉会掉落原物品)

---

### can-craft

##### 参数

1. `是否参与合成`

##### 作用

设置物品是否能参与原版合成

---

### data

##### 参数

1. `模型数据值`

##### 作用

设置物品的自定义模型数据`CustomModelData`

---

### skull-owner

##### 参数

1. `玩家名`

##### 作用

设置头颅的拥有者

---

### skull-texture

##### 参数

1. `texture: Base64, uuid: 玩家UUID`

##### 作用

设置头颅图案

例:

```yaml
skull-texture:
  texture: ewogICJ0aW1lc3RhbXAiIDogMTY2MTQyMTU4OTYwMywKICAicHJvZmlsZUlkIiA6ICIyZGQxODUwMDQyOWM0MjNiYmY4M2Q3MDVjYTkyNzI4ZCIsCiAgInByb2ZpbGVOYW1lIiA6ICJHbG9tXyIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS8xODMwMDBiNDVmMGNiMmFmOWM1ZDkwOGMyOGQyYzNiM2Y5Mjc1MmZiZGJhMzJiNDE1YTIxMjYwYTQ3NjJhNzgxIiwKICAgICAgIm1ldGFkYXRhIiA6IHsKICAgICAgICAibW9kZWwiIDogInNsaW0iCiAgICAgIH0KICAgIH0sCiAgICAiQ0FQRSIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMjM0MGMwZTAzZGQyNGExMWIxNWE4YjMzYzJhN2U5ZTMyYWJiMjA1MWIyNDgxZDBiYTdkZWZkNjM1Y2E3YTkzMyIKICAgIH0KICB9Cn0=
  uuid: 2dd18500-429c-423b-bf83-d705ca92728d
```

---

### color

##### 参数

1. `RED,GREEN,BLUE`

> 例如: `color: 255,0,255`

##### 作用

设置皮革护甲颜色

---

### glow-color

##### 参数

1. `颜色代码/颜色ID`

##### 作用

设置物品掉落物的发光颜色`GlowColor`

[颜色 ID 列表](https://bukkit.windit.net/javadoc/net/md_5/bungee/api/ChatColor.html)

---

### lore

##### 参数

1. `描述列表`

##### 作用

添加物品描述

---

### shiny

##### 参数

1. `是否光泽`

##### 作用

设置物品是否有光泽(其实就是加了个附魔)

---

### unique

##### 参数

1. `是否唯一`

##### 作用

设置物品是否唯一（不可堆叠）

---

### unbreakable

##### 参数

1. `是否不可破坏`

##### 作用

设置物品是否不可破坏

---

### flags

##### 参数

1. `物品隐藏值列表`

##### 作用

添加**物品隐藏值**

[物品隐藏值 ID 列表](https://bukkit.windit.net/javadoc/org/bukkit/inventory/ItemFlag.html)

---

### pattern

##### 参数

1. `旗帜图案列表`

##### 作用

设置旗帜图案

例:

```yaml
pattern:
  - dye: "BLACK" #DyeColor 颜料颜色ID
    pattern: "GRADIENT_UP" #PatternType 图案类型ID
  - dye: "BLUE"
    pattern: "FLOWER"
```

[DyeColor 列表](https://bukkit.windit.net/javadoc/org/bukkit/DyeColor.html)
[PatternType 列表](https://bukkit.windit.net/javadoc/org/bukkit/block/banner/PatternType.html)

---

### potion

##### 参数

1. `type: {药水类型id}`
2. `extended: {是否有时长延长状态}`
3. `upgraded: {是否可升级}`

##### 作用

设置药水数据

[药水类型 id](https://bukkit.windit.net/javadoc/org/bukkit/potion/PotionType.html)

---

### enchantments

##### 参数

`附魔id: 等级`...

##### 作用

添加物品附魔

例:

```yaml
enchantments:
  infinity: 5
  damage_all: 10
```

---

### nbt

##### 参数

1. `Key1: value1,Key2: value2`

##### 作用

添加物品 NBT

例:

```yaml
nbt:
  a: "1"
  b: "(int) 1"
```

---

## 物品动作[Action]

### action

##### 参数

1. `type: {动作类型}, run: {执行内容}`

##### 作用

添加物品动作
详细请见[物品动作](https://../further/actions)
例:

```yaml
action:
  #动作类型，[ left / right / shift_left / shift_right / click_item / attack / build / consume / swap_to_main_hand / swap_to_offhand / right_click_entity /  break_block /  drop /  pick_up / damage ] 可通过脚本拓展
  type: left
  #执行内容
  #- 直接填内联函数  -  执行内联函数
  #- js_eval::js代码  -  执行js代码
  #- js_invoke::js文件名::函数名 - 执行js函数
  run: |-
    set loc to &player location add listOf [ 0 3 0 ]
    set diamond to item material DIAMOND
    &diamond drop at &loc
    effect particle 'REDSTONE' at &loc data particleData dust [ color [ 255 0 255 ] in 10 ]
```

---

## 定义变量[Define]

### define

##### 参数

1. `key: {变量id}`
2. `type: {变量类型}`
3. `save: {是否保存至NBT}` - 可选，默认 true
4. `cache: {是否缓存}` - 可选，默认 true
5. `override: {是否覆盖}` - 可选，默认 false

##### 作用

定义变量
详见:
[变量](https://../variable/intro)
[变量类型列表](https://../variable/types)

例:

```yaml
meta: define
key: "变量1号"
type: "strings"
values:
  - "第一行"
  - "第二行"
```

或者你可以省略`meta: define`

```yaml
key: "变量1号"
type: "strings"
values:
  - "第一行"
  - "第二行"
```

在之后的元数据中，你可以这么调用: `&变量1号`
因为它的类型是`strings`,所以类型是`List`,
你可以通过 `&变量1号 get at 0` 来获取第一行，以此类推
具体见[动作列表](https://../further/actions)

---

## 执行[Eval]

### run

##### 参数

1. `内联函数段`

##### 作用

执行内联函数

---

### script

##### 参数

1. `JavaScript段`

##### 作用

执行 `js` 代码

可用变量:

`this.data` = [过程数据](https://doc.skillw.com/itemsystem/com/skillw/itemsystem/internal/core/builder/ProcessData.html)

---

## 属性引擎[AttributeSystem]

### attributes

##### 参数

1. `属性数据Key: 属性数据`...

##### 作用

给物品添加 NBT 属性

例:

```yaml
attributes:
  ExampleAtt:
    PhysicalDamage:
      value: 100
    MovementSpeed:
      percent: 20
  ExampleAtt2:
    PhysicalDefense:
      value: 100
```

---

### conditions

##### 参数

1. `属性数据路径: 条件数据`...

##### 作用

添加物品 NBT 属性的条件

例:

```yaml
conditions:
  "ExampleAtt":
    level:
      value: 100
  "ExampleAtt$PhysicalDamage":
    level:
      value: 200
```

---

## 效果引擎[BuffSystem]

### buffs

##### 参数

1. `Buff Key: Buff数据`...

##### 作用

添加物品 Buff

例:

```yaml
buffs:
  example-buff:
    level: 2
```

---

## 怪物插件[MythicMobs]

### drop-skills

##### 参数

1. 技能 id 列表

##### 作用

物品掉落时触发 **MM 技能**

例:

```yaml
drop-skills:
  - "mm技能id1"
  - "mm技能id2"
```

---
