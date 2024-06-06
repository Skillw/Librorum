---
title: Pouvoir-脚本顶级成员
tags:
 - Pouvoir
category: 'docs'
---

# 脚本顶级成员


需用到 [`ScriptTopLevel`](https://http://doc.skillw.com/pouvoir/-pouvoir/com.skillw.pouvoir.api.annotation/-script-top-level/index.html)

```kotlin
@ScriptTopLevel
@JvmStatic
fun String.placeholder(entity: LivingEntity): String {
    return Pouvoir.pouPlaceHolderAPI.replace(entity, this)
}
```

(支持 Class,Static Field,Static Method)  
使用:

```javascript
placeholder(["%as_att:PhysicalDamage_value%", entity]);
```
