---
title: 'AttributeSystem 属性功能实现'
tags:
 - AttributeSystem
category: 'docs'
---

# 属性功能实现

### 原版属性

例子:
实现 **附加生命** 属性

效果：给实体多加定值最大生命值

定义一个**属性 key** 为 **AdditionHealth** 的属性

> plugins/AttributeSystem/attributes/addition_health.yml

```yaml
AdditionHealth:
  priority: 20
  oriented: entity
  names:
    - "附加生命值"
  read-pattern: Default
```

> plugins/AttributeSystem/formula.yml

```yaml
#支持 PAPI/PPAPI 字符串内联函数
#会影响实体的原版属性
#若填-1，则表示不修改此原版属性
attribute-formulas:
  max-health: "%as_att:MaxHealth%"
  #这个数值可以实现 %as_att:MovementSpeed%/100 /s
  movement-speed: "%as_att:MovementSpeed% / 2250"
  #默认每10tick(0.5s)恢复一次生命值 (见config.yml  options.attribute.time.health-regain)
  #为了方便实现"每秒回血" %as_att:HealthRegain% /s 故将值除以二
  health-regain: "%as_att:HealthRegain% / 2"
  #击退抗性
  knockback-resistance: "%as_att:Resistance%"
  #下面这些只支持玩家
  #单位为 攻击次数/s
  attack-speed: "%as_att:AttackSpeed%"
  #攻击距离
  #单位为格
  attack-distance: "%as_att:AttackDistance%"
  #幸运值
  luck: "%as_att:Luck%"
skill-api:
  max-mana: "%as_att:MaxMana%"
  ## cooldown : 技能冷却
  skill-cooldown: "{cooldown} * (1- (%as_att:SkillSpeed%/(100-%as_att:SkillSpeed%)))"
  mana-regain: "%as_att:ManaRegain%"
```

##### 效果

不用展示了吧，就是加血。

### 战斗机制组公式

例子:
实现 **附加伤害** 属性

效果：每次攻击会额外造成伤害类型为**Addition**的定值伤害

定义一个**属性**， **AdditionDamage**

> plugins/AttributeSystem/attributes/addition_damage.yml

```yaml
AdditionDamage:
  names:
    - "附加伤害"
  read-pattern: Default
```

> plugins/AttributeSystem/damage_type/Addition.yml

```yaml
#伤害类型id
Addition:
  #名称
  name: "&6附加伤害"
  #伤害显示
  display:
    #攻击者
    attack:
      chat: |-
        set result to number {result}
        set crit to number {crit}
        set vampire to number {vampire}

        set prefix to '&d{name}&5: '
        set common to if check &result > 0.0 then '&6{ format &result #.### }' else '&7&lMISS'
        set crit to if check &crit > 0.0 then '&4✵' else pass
        set vampire to if check &vampire > 0.0 then '&a+{ format &vampire #.### }' else pass
        join [ &prefix &crit &common &vampire ] by ''
```

> plugins/AttributeSystem/fight_group/default.yml

```yaml
attack-damage:
  Physical:
    enable: true
    mechanics:
      - mechanic: damage
        enable: |-
          check random 0 to 1 < calculate '{a.as_att:PhysicalHitChance}-{d.as_att:PhysicalDodgeChance}'
        value: |-
          set pvpDamage to if check {type} == 'PVP' then '{a.as_att:PVPDamage} - {d.as_att:PVPDefense}' else pass
          set pveDamage to if check {type} == 'PVE' then '{a.as_att:PVEDamage} - {d.as_att:PVEDefense}' else pass
          set projectile to if check {projectile} == true then '{a.as_att:ProjectileDamage} - {d.as_att:ProjectileDefense}' else pass
          set damage to '{a.as_att:PhysicalDamage} + {origin}'
          set defense to if check random 0 to 1 < {a.as_att:PhysicalDefenseIgnore} then 0 else '{d.as_att:PhysicalDefense} - {a.as_att:PhysicalPenetration}'
          calculate '( {&damage} + {&pvpDamage} + {&pveDamage} + {&projectile} - {&defense} ) * {force}'
  Real:
    enable: "check {a.as_att:RealDamage} != 0.0"
    mechanics:
      - mechanic: damage
        enable: |-
          check random 0 to 1 < calculate '{a.as_att:PhysicalHitChance}-{d.as_att:PhysicalDodgeChance}'
        value: "{a.as_att:RealDamage}"
  Addition:
    enable: true
    mechanics:
      - mechanic: damage
        #调用Physical伤害类型的enable
        enable: "{type::Physical-enable}"
        value: "{a.as_att:AdditionDamage}"
```

##### 效果

![addition_damage](https:///assets/docs/attsystem/attribute/function/addition_damage.gif)
<br/>

### 脚本监听器

例子:
实现 **跳跃飞升** 属性  
效果：每次跳跃会向上以等额速度冲刺
定义一个**属性 key** 为 **JumpToSky** 的属性

> plugins/AttributeSystem/attributes/damage_pre_sec.yml

```yaml
JumpToSky:
  names: ["跳跃飞升"]
```

> plugins/AttributeSystem/scripts/jump_to_sky.js

```javascript
//Pouvoir的监听器注解 这里需要Paper提供的PlayerJumpEvent
//@Listener(-event com.destroystokyo.paper.event.player.PlayerJumpEvent)
function damagePreSec() {
  const AttributeSystem = Packages.com.skillw.attsystem.AttributeSystem;
  const LivingEntity = Packages.org.bukkit.entity.LivingEntity;
  const Vector = Packages.org.bukkit.util.Vector;
  //获取玩家
  const player = event.player;
  //获取属性
  const dataCompound = AttrAPI.getAttrData(player);
  //属性值
  const value = dataCompound.getAttrValue("跳跃飞升", "total");
  //同步修改玩家Velocity
  task(function (task) {
    player.setVelocity(new Vector(0.0, value, 0.0));
  });
}
```

##### 效果

![jump_to_sky](https:///assets/docs/attsystem/attribute/function/fly_to_sky.gif)

<br/>

### 脚本/代码

例子:
实现 **每秒周围伤害** 属性  
效果：每秒对 5 格内生物造成等额伤害
定义一个**属性 key** 为 **DamagePreSec** 的属性

> plugins/AttributeSystem/attributes/damage_pre_sec.yml

```yaml
DamagePreSec:
  names: ["每秒伤害"]
```

> plugins/AttributeSystem/scripts/damage_pre_sec.js

```javascript
//Pouvoir的JS注解
//@Awake(Enable)
//@Awake(Reload)
function onReload() {
    //获取已有的Task
    var origin = Data.get("damagePreSec")
    //如果有就取消
    if (origin != null) origin.cancel()
    //添加并启动新的Task
    Data.put("damagePreSec", taskAsyncTimer(function () { damagePreSec() }, 0, 20))
}


function damagePreSec() {
    const AttributeSystem = Packages.com.skillw.attsystem.AttributeSystem
    const LivingEntity = Packages.org.bukkit.entity.LivingEntity
    const dataManager = AttributeSystem.attributeDataManager
    for each(var uuid in dataManager.keys) {
        //通过UUID获取LivingEntity
        const entity = EntityUtils.getLivingEntityByUUID(uuid)
        //获取属性数据
        const dataCompound = dataManager.get(uuid)
        //获取属性总值
        const damage = dataCompound.getAttrValue("每秒伤害", "total");
        //同步进行伤害处理
        task(function (task) {
            for each(var other in entity.getNearbyEntities(5, 5, 5)) {
            if (!(other instanceof LivingEntity)) continue
            other.damage(damage)
            AttributeSystem.fightManager.intoFighting(uuid)
         }
        })
    }
}

```

##### 效果

![damage_pre_sec](https:///assets/docs/attsystem/attribute/function/damagePreSec%20.gif)
