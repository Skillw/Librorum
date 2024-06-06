---
title: BuffSystem Buff
tags:
 - BuffSystem
category: 'docs'
---

# Buff

### 自定义

于 **plugins/BuffSystem/buff** 文件夹下任意一个**YAML 文件**

```yaml
#Buff key (id)
example:
  name: "示例Buff"
  #默认Buff数据
  #就是自带的 Data Json，默认参数
  data:
    #均可修改，自定义
    level: 1
    debuff: true
    duration: 400
    name: 攻击力
    value: 100
  conditions:
    - "time"
  effects:
    #可以直接用已有的效果
    - "example-attribute"
    #也可以直接定义一个
    - type: attribute
      attributes:
        #通过动态参数来做到动态属性动态值
        - "{name}: {value}"
    - type: attribute
      attributes:
        - "防御力: 100"

    - type: permission
      permissions:
        - "cmi.command.fly:true"

    - type: potion
      potions:
        - "SPEED:10"
```

### 使用

指令`/buff add Glom_ 任意key example {}`
亦或者[**MM 机制**](https://../other/mythic-mobs)
