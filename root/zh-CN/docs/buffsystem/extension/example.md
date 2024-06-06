---
title: BuffSystem 属性拓展例子
tags:
 - BuffSystem
category: 'docs'
---

# 属性拓展例子

## 兼容属性插件

> Kotlin

```kotlin
@AutoRegister("com.skillw.attsystem.api.AttrAPI")
object AttributeSystemHook : AttributeProvider {
    override val key: String = "AttributeSystem"
    override fun addAttribute(entity: LivingEntity, key: String, attributes: List<String>) {
        entity.addAttribute(key,attributes,false)
    }

    override fun removeAttribute(entity: LivingEntity, key: String) {
        entity.removeAttribute(key)
    }
}
```
