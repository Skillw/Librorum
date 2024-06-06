---
title: ItemSystem 物品动作列表
tags:
 - ItemSystem
category: 'docs'
---

# 物品动作列表

|      动作 id       |          何时触发          |
| :----------------: | :------------------------: |
|        left        |        拿着物品左键        |
|       right        |        拿着物品右键        |
|     shift_left     |    拿着物品 Shift+左键     |
|    shift_right     |    拿着物品 Shift+右键     |
|     click_item     | 拿着物品在界面中点其它物品 |
|       attack       |         用物品攻击         |
|       build        |          构建物品          |
|       place        |          放置物品          |
|      consume       |          消耗物品          |
| swap_to_main_hand  |       将物品换到主手       |
|  swap_to_offhand   |       将物品换到副手       |
| right_click_entity |      拿着物品右键实体      |
|    break_block     |       用物品破坏方块       |
|        drop        |          物品掉落          |
|      pick_up       |          捡起物品          |
|       damage       |        物品耐久耗损        |

所有物品动作提供的参数，
均有:

- `entity` - 触发动作的实体
- `item` - 触发动作的物品

下面的物品动作的`提供的参数`会省略以上两个

### left

##### 提供的参数

除共同提供的参数以外，无额外提供的参数

---

### right

##### 提供的参数

除共同提供的参数以外，无额外提供的参数

---

### shift_left

##### 提供的参数

除共同提供的参数以外，无额外提供的参数

---

### shift_right

##### 提供的参数

除共同提供的参数以外，无额外提供的参数

---

### click_item

##### 提供的参数

- `cursor` - 鼠标指针上的物品
- `current` - 被点击的物品
- `event` - [背包点击事件](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryClickEvent.html)

---

### attack

##### 提供的参数

- `attacker` - 攻击者
- `defender` - 防御者
- `event` - [EVE 事件](https://bukkit.windit.net/javadoc/org/bukkit/event/entity/EntityDamageByEntityEvent.html)

---

### build

##### 提供的参数

- `builder` - 物品构建器
- `event` - [构建后事件](https://doc.skillw.com/itemsystem/com/skillw/itemsystem/api/event/ItemBuildEvent.After.html)
- 物品过程数据中所有变量

---

### place

##### 提供的参数

- `location` - 放置的位置
- `hand` - 放方块的手的名称
- `event` - [放置方块事件](https://bukkit.windit.net/javadoc/org/bukkit/event/block/BlockPlaceEvent.html)

---

### consume

##### 提供的参数

- `event` - [消耗物品事件](https://bukkit.windit.net/javadoc/org/bukkit/event/player/PlayerItemConsumeEvent.html)

---

### swap_to_main_hand

##### 提供的参数

- `event` - [切主手副手事件](https://bukkit.windit.net/javadoc/org/bukkit/event/player/PlayerSwapHandItemsEvent.html)

---

### swap_to_offhand

##### 提供的参数

- `event` - [切主手副手事件](https://bukkit.windit.net/javadoc/org/bukkit/event/player/PlayerSwapHandItemsEvent.html)

---

### right_click_entity

##### 提供的参数

- `clicked` - 右击的实体
- `event` - [玩家点击实体事件](https://bukkit.windit.net/javadoc/org/bukkit/event/player/PlayerInteractAtEntityEvent.html)

---

### break_block

##### 提供的参数

除共同提供的参数以外，无额外提供的参数

---

### drop

##### 提供的参数

- `event` - [实体掉落物品事件](https://bukkit.windit.net/javadoc/org/bukkit/event/entity/EntityDropItemEvent.html)/[API 掉落物品事件](https://doc.skillw.com/itemsystem/com/skillw/itemsystem/api/event/ItemDropEvent.html)

---

### pick_up

##### 提供的参数

- `event` - [实体捡物品事件](https://bukkit.windit.net/javadoc/org/bukkit/event/entity/EntityPickupItemEvent.html)

---

### damage

##### 提供的参数

- `damage` - 损失的耐久
- `event` - [物品损失耐久事件](https://bukkit.windit.net/javadoc/org/bukkit/event/player/PlayerItemDamageEvent.html)
