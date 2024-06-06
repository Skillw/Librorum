---
title: 'AttributeSystem 战斗数据'
tags:
 - AttributeSystem
category: 'docs'
---

### 介绍

在开读**战斗系统**前，你需要了解一下**AttributeSystem**中的**战斗数据**

### 什么是战斗数据[FightData]?

**AttrtibuteSystem** 中，**战斗机制组**执行时环境(变量存储的地方，可调用)

### 为什么要给用户讲?

因为用户需要调用**战斗数据**中的**变量**来实现功能

### 怎么调用？

通过`{变量id}`来调用变量

### 我能调用到哪些？

使用指令 `/as debug` 开启调试模式
随便打一个实体，打开后台，你会看到:

![debug](https:///assets/docs/attsystem/fight/debug.jpg)

找到`可用变量`，

```
       type::Physical-damage : 3.0
       type::Physical-origin : 3.0
       type::Physical-result : 3.0
       type::Physical-defender-name : 村民
       type::Physical-crit : 0.0
       type::Physical-vampire : 0.0
       type::Physical-attacker-name : 僵尸
       type::Physical-force : 1.0
       type::Physical-event : org.bukkit.event.entity.EntityDamageByEntityEvent@4031970d
       type::Physical-projectile : false

       type::Real-damage : 0.0
       type::Real-origin : 3.0
       type::Real-result : 0.0
       type::Real-attacker-name : 僵尸
       type::Real-event : org.bukkit.event.entity.EntityDamageByEntityEvent@731aa0ee
       type::Real-defender-name : 村民
       type::Real-force : 1.0
       type::Real-projectile : false
```

这些便是你可以调用的变量, 当在同一伤害类型下时, `type::伤害类型id-` 可以省略
