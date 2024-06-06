---
title: ItemSystem 物品动作
tags:
 - ItemSystem
category: 'docs'
---
# 物品动作

### 一个非常自由的物品动作系统

根据**实体**/**玩家**对物品做出的不同互动，可以触发相应动作
我们默认提供了:
| 动作 id | 何时触发 |
| :----------------: | :------------------------: |
| left | 拿着物品左键 |
| right | 拿着物品右键 |
| shift_left | 拿着物品 Shift+左键 |
| shift_right | 拿着物品 Shift+右键 |
| click_item | 拿着物品在界面中点其它物品 |
| attack | 用物品攻击 |
| build | 构建物品 |
| place | 放置物品 |
| consume | 消耗物品 |
| swap_to_main_hand | 将物品换到主手 |
| swap_to_offhand | 将物品换到副手 |
| right_click_entity | 拿着物品右键实体 |
| break_block | 用物品破坏方块 |
| drop | 物品掉落 |
| pick_up | 捡起物品 |
| damage | 物品耐久耗损 |

不同动作有不同的参数可以调用

你可以在这里查询到我们提供的所有物品动作: [物品动作列表](https://actions)
如果你有意愿，可以给我们提交你的动作: [github.com/Skillw/Skillw/pulls](https://github.com/Skillw/Skillw/pulls)

### 使用

> plugin/ItemSystem/items/action.yml

```yaml
eaxmple_left:
  auto-update: true
  process:
    - display: "&7Glomの神奇石头"
    - material: "stone"
    #可以被放置，破坏后会掉落原物品
    - can-be-placed: true
    - lore:
        - ""
        - "&f&m─&7&m─────────&f&m─&f介绍&f&m─&7&m─────────&f&m─"
        - ""
        - "&7一块神奇的石头，左键会有神奇的事情发生..."
        - ""
    - action:
        #动作类型
        type: left
        #执行内容
        #- 直接填内联函数  -  执行内联函数
        #- js_eval::js代码  -  执行js代码
        #- js_invoke::js文件名::函数名 - 执行js函数
        run: |-
          set loc to &player location add listOf [ 0 3 0 ]
          set diamond to item material DIAMOND
          &diamond drop at &loc
          effect particle 'REDSTONE' at &loc data particleData dust [ color [ 255 0 255 ] in 10 ]
```

### 拓展

你可以通过**脚本/代码**拓展，就像这样:

```js
damage = ItemAPI.registerAction("damage");

//@Listener(-event org.bukkit.event.player.PlayerItemDamageEvent -priority HIGHEST --ignoreCancelled)
function onItemDamage(event) {
  const entity = event.entity;
  const item = event.item.itemStack;
  const damage = event.damage;
  ItemAPI.callAction("damage", entity, item, function (map) {
    map.put("damage", damage);
    map.put("event", event);
  });
}
```
