---
title: 'AttributeSystem 战斗机制组'
tags:
 - AttributeSystem
category: 'docs'
---

# 战斗机制组

### 介绍

战斗机制组，由 **伤害类型** 及其 **机制组** 构成

### 定义

于 **plugins/AttributeSystem/fight_group** 文件夹下定义

```yaml
#战斗机制组ID
## attack-damage 普通攻击
## skill-api-技能id-标识符 SkillAPI技能
## damage-cause-id小写 伤害事件（会覆盖）
## bukkit.windit.net/javadoc/org/bukkit/event/entity/EntityDamageEvent.DamageCause.html
## 这3个是固定的
attack-damage:
  #伤害类型
  Physical:
    #是否启用
    enable: true
    mechanics:
      #机制id
      - mechanic: damage
        #战斗数据
        #攻击者变量: {a.PAPI变量/PouPAPI变量}
        #防御者变量: {d.PAPI变量/PouPAPI变量}
        #PouPAPI支持存活实体
        #AS提供的变量
        ## origin AS处理前的伤害 一般是原版伤害 (全局)
        ## force 蓄力程度  弓箭蓄力程度 或 普攻蓄力程度 (仅attack-damage)
        ## type 攻击类型 PVP PVE EVE (全局)
        ## projectile 是否是远程攻击 true / false (全局)
        enable: |-
          check random 0 to 1 < calculate '{a.as_att:PhysicalHitChance}-{d.as_att:PhysicalDodgeChance}'
        value: |-
          set pvpDamage to if check {type} == 'PVP' then '{a.as_att:PVPDamage} - {d.as_att:PVPDefense}' else pass
          set pveDamage to if check {type} == 'PVE' then '{a.as_att:PVEDamage} - {d.as_att:PVEDefense}' else pass
          set projectile to if check {projectile} == true then '{a.as_att:ProjectileDamage} - {d.as_att:ProjectileDefense}' else pass
          set damage to '{a.as_att:PhysicalDamage} + {origin}'
          set defense to if check random 0 to 1 < {a.as_att:PhysicalDefenseIgnore} then 0 else '{d.as_att:PhysicalDefense} - {a.as_att:PhysicalPenetration}'
          calculate '( {&damage} + {&pvpDamage} + {&pveDamage} + {&projectile} - {&defense} ) * {force}'
      #机制从上到下按顺序执行
      #下面的机制数据可以调用上面已执行机制的执行结果 格式为{id}
      - mechanic: crit
        enable: "check random 0 to 1 < {a.as_att:PhysicalCriticalChance}"
        multiplier: |-
          calculate '{a.as_att:PhysicalCriticalMultiple} - {d.as_att:PhysicalCriticalDefense}'

      - mechanic: vampire
        enable: "check random 0 to 1 < calculate {a.as_att:VampireChance}"
        value: |-
          calculate '{a.as_att:VampireMultiple} - {d.as_att:VampireDefense}'

      - mechanic: flame
        enable: "check random 0 1 < {a.as_att:燃烧几率}"
        damage: |-
          max 1 {a.as_att:燃烧伤害}
        duration: |-
          max 20 calculate '{a.as_att:燃烧伤害}*3'

      - mechanic: frozen
        enable: "check random 0 1 < {a.as_att:冰冻几率}"
        value: |-
          max 1 {a.as_att:冰冻强度}
        duration: |-
          max 20 calculate '{a.as_att:冰冻强度}*3'

      - mechanic: thunder
        enable: "check random 0 1 < {a.as_att:雷击几率}"
        damage: "max 1 {a.as_att:雷击伤害}"

      - mechanic: rebound
        enable: "check random 0 1 < {d.as_att:反弹几率}"
        multiplier: "max 0.1 {d.as_att:反弹倍率}"

      - mechanic: shield
        enable: "check random 0 1 < calculate '1-{a.as_att:BlockingIgnore}'"
        reduce: "{d.as_att:Blocking}"
        #tick
        ## {reduced}是实际减伤
        cooldown: "calculate '({reduced}/4)*20'"
  Real:
    enable: "check {a.as_att:RealDamage} != 0.0"
    mechanics:
      - mechanic: damage
        enable: |-
          check random 0 to 1 < calculate '{a.as_att:PhysicalHitChance}-{d.as_att:PhysicalDodgeChance}'
        value: "{a.as_att:RealDamage}"
```

按照惯例，我们分开来逐一讲解

#### 战斗机制组 key [attack-damage]

用于开发人员调用，**AttributeSystem** 默认提供了几个固定触发的:

- `attack-damage` 普通攻击
- `skill-api-技能id-标识`符 SkillAPI 技能
- `damage-cause-id小写` 任意伤害事件（会覆盖原版处理机制）
  > bukkit.windit.net/javadoc/org/bukkit/event/entity/EntityDamageEvent.DamageCause.html

补充一句，自`1.3.2`支持不同权限不同普攻战斗机制组
见`config.yml`的`options.fight.attack-fight`

#### 伤害类型 [Physical / Real]

填入**伤害类型 id**，用于显示

#### 伤害类型启用 [Physical / Real.enable]

此伤害类型是否启用，支持 **占位符**，**字符串内联函数**

#### 机制组 [Physical / Real .mechanics]

需要填入**机制**及其参数:

```yaml
- mechanic: 机制id
  参数1: "ababab"
  参数2: "abababa"
```

#### 机制参数

每个机制有每个机制的参数，具体由开发者自定义

详见[机制列表](https://mechanics)

如果你想实现属于你的伤害逻辑，可以拓展[机制](https://mechanic)
