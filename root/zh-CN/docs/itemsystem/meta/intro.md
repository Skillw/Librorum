---
title: ItemSystem 物品元
tags:
 - ItemSystem
category: 'docs'
---
# 物品元

### 物品元是干什么的?

**物品元**会根据**元数据**，直接操作**物品**
例如:
`display` 展示名物品元，是根据提供的文本，设置物品展示名
`lore` 描述物品元，是根据提供的文本，增加物品的描述

### 怎么使用?

在 **process** / [**全局物品元数据**](https://global-meta-data) 中书写**物品元数据**

> 物品元数据 = 物品元 + 参数

```yaml
process:
  #通用写法
  ## - meta: 物品元id
  ##   参数1: 值
  ##   参数2: 值
  ##   ...
  - meta: define
    key: "示例变量"
    type: string
    value: "我是字符串变量"
  - meta: display
    display: "展示名"
  #对于单参数
  #- 物品元id: 参数
  - display: "展示名"
  - lore:
      - "第1行"
      - "第2行"
  #对于 物品元define，你可以省略 meta: define
  #就像这样
  - key: "示例变量"
    type: string
    value: "我是字符串变量"
```

### 都有哪些?

见[物品元列表](https://list)

### 拓展

拓展的物品元与普通物品元的使用无异

需要用到 [Memory](https://doc.skillw.com/itemsystem/com/skillw/itemsystem/api/meta/data/Memory.html)

#### JavaScript

```javascript
//@Meta(custom-meta)
function customMeta(memory) {
  //获取str参数
  const str = memory.getString("str");
  memory.builder.lore.add("来自CustomMeta: " + str);
}
```

#### Kotlin

你可以去[**Github**](https://github.com/Skillw/ItemSystem)借鉴源码

```kotlin
@AutoRegister
object MetaDamage : BaseMeta("damage") {

    override fun invoke(memory: Memory) {
        with(memory) {
            builder.damage = getInt("damage")
        }
    }

    override fun loadData(data: ItemData): Any {
        data.itemTag.remove("Damage")
        return data.builder.damage
    }

}
```
