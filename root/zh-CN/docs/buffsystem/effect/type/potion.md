---
title: BuffSystem 原版药水效果
tags:
 - BuffSystem
category: 'docs'
---

# 原版药水效果

### 效果

给实体药水效果

### 用法

#### 参数

1.  `potions`(必填) [药水效果](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
2.  `ambient`(选填) 是否渲染更多粒子 默认 true
3.  `particles`(选填) 是否具有粒子 默认 true
4.  `icon`(选填) 是否具有图标 默认 true

#### 例子

```yaml
example-potion:
  type: potion
  ambient: false
  particles: false
  icon: true
  potions:
    #格式:
    #原本药水id大写:等级
    - "SPEED:10"
```
