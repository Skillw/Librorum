---
title: Asahi 解释器
tags:
 - Asahi
category: 'docs'
---

# 破译神迹

以下内容会教会你如何~~手撕源码~~通过查阅源码了解指定解释器的使用方法

---

## 找到对应源码

可根据顶端的@注解判断语法类型
### 公共的基础语法

解释器大都在[com/skillw/asahi/internal/parser](https://github.com/Skillw/Pouvoir/tree/master/src/main/kotlin/com/skillw/asahi/internal/parser)
lang和common命名空间的内容基本在[com/skillw/asahi/internal/namespacing](https://github.com/Skillw/Pouvoir/tree/master/src/main/kotlin/com/skillw/asahi/internal/namespacing)

### 其他语法

大都在[com/skillw/pouvoir/internal/core/asahi](https://github.com/Skillw/Pouvoir/tree/master/src/main/kotlin/com/skillw/pouvoir/internal/core/asahi)
目标选择器在[com/skillw/pouvoir/internal/feature/selector](https://github.com/Skillw/Pouvoir/tree/master/src/main/kotlin/com/skillw/pouvoir/internal/feature/selector)

:::tip提示
目标选择器是什么?

目标选择器是bukkit命名空间下的一种特殊的前缀解释器，可以用于选取特定的目标(可以是实体，可以是位置)集合并对集合整体操作

类似MythicMobs，SkillAPI的Target
:::

## 前缀解释器

以com.skillw.pouvoir.internal.core.asahi.prefix.bukkit.LivingEntity为例
```kotlin
//@AsahiPrefix(["解释器名","解释器别名",...])
@AsahiPrefix(["damage"])
//当注解内括号为空时，以函数名damage为解释器名
private fun damage() = prefixParser { 
    //quest 索取指定对象 即每出现一次quest<类名> 你就要填入一个该类的对象
    val defenderGetter = quest<LivingEntity>()
    val amount = quest<Double>()
    //expect 期望特定字符串 即每出现一次expect(字符串) 你就要视情况填入相应字符串以继续填入其他参数
    //这里的by后面跟一个实体，是用来设定伤害来源的，如果不写by就是无伤害来源
    val attackerGetter = if (expect("by")) quest<LivingEntity>() else quester { null }
    result {
        defenderGetter.get().run {
            attackerGetter.get()?.let {
                damage(amount.get(), it)
            } ?: damage(amount.get())
        }
    }
    /**根据quest，expect出现的顺序整理得    
     * damage 实体 伤害数值 (by 实体)
     * 括号内选填
     */
}
```

## 中缀解释器

以com.skillw.pouvoir.internal.core.asahi.infix.bukkit.InfixEntity为例
```kotlin
infix("metadata") { obj ->
    //这里的parse类似前缀中的quest
    val key = parse<String>()
    //expect同理
    if (expect("to"))
        obj.setMeta(key, parse())
    else
        obj.getMetaFirst(key)
    //整理得 实体 metadata metadata的key值 to 值
}
```


