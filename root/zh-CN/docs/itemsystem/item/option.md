---
title: ItemSystem 物品选项
tags:
 - ItemSystem
category: 'docs'
---
# 物品选项

```yaml
eaxmple_item:
  #继承
  extends:
    - "父物品id1"
    - "父物品id2"
  #自动更新
  auto-update: true
  #不刷新的NBT键
  locked-nbt-keys:
    - "gem"
  #注意除了process都是物品选项
  process:
    - display: "&e示例物品"
    - material: "stone"
    - lore:
        - ""
        - "&f&m─&7&m─────────&f&m─&f介绍&f&m─&7&m─────────&f&m─"
        - ""
        - "&7仅仅是示例... &3会随着配置更新而更新!"
        - ""
```

### 自动更新 [auto-update]

```yaml
auto-update: true
```

> 注意! 如果开启自动更新，会自动刷新掉所有与新物品无关的 NBT!
> 你需要在 `locked-nbt-keys` 中添加**NBT 键**来防止刷新!

### 锁定 NBT 键 [locked-nbt-keys]

```yaml
locked-nbt-keys:
  - "gem"
```

这些 **NBT** 不会随**自动更新**/**重新构建**而刷新，会一直在物品上.

### 物品继承 [extends]

```yaml
extends:
  - "父物品id1"
  - "父物品id2"
```

继承**父物品**拥有的**物品元数据**
详细见[物品继承](https://../further/extends)

### 物品类型 [locked-nbt-keys]

```yaml
type: "剑"
```

设置物品的物品类型
