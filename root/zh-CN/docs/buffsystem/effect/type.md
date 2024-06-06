---
title: BuffSystem 效果类型
tags:
 - BuffSystem
category: 'docs'
---

# 效果类型

**BuffSystem**默认提供了 **3** 种**效果类型**

- attribute **属性**
- potion **原版药水**
- permissions **权限**

你可以通过编写 **脚本**/**代码** 拓展效果类型

### 拓展

需要用到 [`BuffData`](https://doc.skillw.com/buffsystem/com/skillw/buffsystem/api/data/BuffData.html)

> JavaScript

```javascript
//@EffectType(boss_bar)
//文件注解顶头写

//这个Effect的作用是： 给玩家显示BossBar

Player = find("org.bukkit.entity.Player");
BarStyle = org.bukkit.boss.BarStyle;
BarColor = org.bukkit.boss.BarColor;
BarFlag = org.bukkit.boss.BarFlag;
Coerce = static("Coerce");

function realize(entity, data, map) {
  if (!(entity instanceof Player)) return;
  const handled = data.handle(map);
  const title = handled.getOrDefault("title", "你妹填title");
  // PINK,
  // BLUE,
  // RED,
  // GREEN,
  // YELLOW,
  // PURPLE,
  // WHITE
  const color = BarColor.valueOf(handled.getOrDefault("color", "BLUE"));
  //  SOLID,
  // SEGMENTED_6,
  // SEGMENTED_10,
  // SEGMENTED_12,
  // SEGMENTED_20
  const style = BarStyle.valueOf(handled.getOrDefault("style", "SOLID"));
  // progress∈[0,1]
  const progress = handled.getOrDefault("progress", "0.75");
  const isVisible = Coerce.toBoolean(handled.getOrDefault("visible", "true"));
  const flags = handled.getOrDefault("flags", listOf("PLAY_BOSS_MUSIC"));
  const key = data.uniqueId + "bossbar-effect";
  var bossBar = Data.get(key);
  if (bossBar == null) {
    bossBar = PlayerUtils.sendBossBar(entity, title, color, style, progress);
  }
  bossBar.setTitle(title);
  bossBar.color = color;
  bossBar.style = style;
  bossBar.progress = progress;
  bossBar.isVisible = isVisible;

  var allFlags = BarFlag.values;
  for (index in allFlags) {
    let flag = allFlags.get(index);
    if (flags.contains(flag.name)) {
      bossBar.addFlag(flag);
    } else {
      bossBar.removeFlag(flag);
    }
  }
  Data.put(key, bossBar);
}

function unrealize(entity, data, map) {
  const bossBar = Data.get(data.uniqueId + "bossbar-effect");
  if (bossBar == null) return;
  bossBar.removeAll();
}
```

> Kotlin

```kotlin
class AttributeEffect(key: String, val attributes: List<String>) : BaseEffect(key),
    ConfigurationSerializable {


    private fun getSource(data: BuffData): String {
        return "attribute-effect-$key-source-${data.key}}"
    }

    override fun realize(entity: LivingEntity, data: BuffData) {
        var attributes = data.handle(this.attributes)
        if (entity is Player) {
            attributes = attributes.map { it.replacePlaceholder(entity) }
        }
        attributes = attributes.map { it.placeholder(entity) }
        attrProvider.addAttribute(entity, getSource(data), attributes)
    }

    override fun unrealize(entity: LivingEntity, data: BuffData) {
        attrProvider.removeAttribute(entity, getSource(data))
    }


    override fun serialize(): MutableMap<String, Any> {
        return linkedMapOf("type" to "attribute", "attributes" to attributes)
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as AttributeEffect

        if (key != other.key) return false
        if (attributes != other.attributes) return false

        return true
    }

    override fun hashCode(): Int {
        var result = key.hashCode()
        result = 31 * result + attributes.hashCode()
        return result
    }

}
```

### 使用

```yaml
#效果key
example-attribute:
  #效果类型
  type: attribute
  attributes:
    ##             字符串内联函数
    - "移动速度: {calculate '1000+100 * {level}'}"
```
