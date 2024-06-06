---
title: Pouvoir-占位符
tags:
 - Pouvoir
category: 'docs'
---
## PouPlaceHolderAPI

和**PAPI**非常像，但是对象变为了**存活实体**[`LivingEntity`]

### 使用

```javascript
placeholder(["%example%", entity]);
```

```kotlin
"%example%".placeholder(entity)
```

### 拓展

```javascript
//@Placeholder(example,示例占位符,Glom_,1.0.0)
function examplePlaceholder(params, entity, def) {
  //code
}
```

```kotlin
object : PouPlaceHolder(key, name, author, version) {
    override fun onPlaceHolderRequest(params: String, entity: LivingEntity, def: String): String? {
        return scriptManager.invoke<String>(script, function, parameters = arrayOf(params, entity, def))
    }
}.register()
```
