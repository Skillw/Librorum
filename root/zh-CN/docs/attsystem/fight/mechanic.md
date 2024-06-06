---
title: 'AttributeSystem 机制'
tags:
 - AttributeSystem
category: 'docs'
---

# 机制

### 介绍

**机制** 是 **AttributeSystem** 的一大特色，你可以通过编写**机制**并在**战斗机制组**中使用来操纵**战斗过程**

 **AttributeSystem** 自带的机制详见[机制列表](https://mechanics)

### 定义

```javascript
var Coerce = static("Coerce");
var Player = find("org.bukkit.entity.Player");
var ProxyParticle = find(">taboolib.common.platform.ProxyParticle");
var Plus = static("com.skillw.attsystem.internal.operation.Plus").INSTANCE;

//@Mechanic(my_mechanic)
function exec(fightData, context, damageType) {
  var attacker = fightData.attacker;
  var defender = fightData.defender;
  var power = attacker instanceof Player ? attacker.level : 0;
  var damage = calculate([context.get("formula"), attacker, null]);
  var location = defender.location;
  var particle = ProxyParticle.EXPLOSION_LARGE;
  Tool.sendParticle(particle, location, 36.0, 100, 1.0);
  fightData.damageSources.put(
    "my_mechanic_damage",
    Plus.element(power * 10 + damage)
  );
  return true;
}
```

```kotlin
@AutoRegister
object MyMechanic : Mechanic("my_mechanic") {
    override fun exec(fightData: FightData, context: Map<String, Any>, damageType: DamageType): Any? {
        val attacker = fightData.attacker ?: return false
        val defender = fightData.defender
        val power = max(if (attacker is Player) attacker.level else 0, 0)
        val damage = Coerce.toDouble(context["formula"])
        val players = attacker.getNearbyEntities(10.0, 10.0, 10.0).filterIsInstance<Player>().map { adaptPlayer(it) }
        val location = adaptLocation(defender.location)
        ProxyParticle.EXPLOSION_LARGE.sendTo(location, range = 10.0)
        fightData.damageSources["my_mechanic_damage"] = Plus.element(power * 10 + damage)
        return true
    }
}
```

#### 效果

在将`my_mechanic`加入**战斗机制组**`attack-damage`后

![mechanic](https:///assets/docs/attsystem/fight/my_mechanic.gif)
