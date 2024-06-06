---
title: ItemSystem 物品
tags:
 - ItemSystem
category: 'docs'
---
# 物品

### 你应该在 ItemSystem/items 文件夹下定义物品

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
        #动作类型，[ left / right / shift_left / shift_right / click_item / attack / build / consume / swap_to_main_hand / swap_to_offhand / right_click_entity /  break_block /  drop /  pick_up / damage ] 可通过脚本拓展
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

### 示例配置

```yaml
eaxmple_item:
  #自动更新
  auto-update: true
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

### 分层讲解

#### 物品 ID [`eaxmple_item`]

物品的唯一标识符，请不要重复
用于生成物品

#### 物品选项 [`auto-update`]

物品的一些配置，具体请看[物品选项](https://option)

#### 物品流程 [`process`]

物品的流程，每一个元素都是一个**物品元数据**
构建物品时，**物品元**从上到下依次执行
具体见 [物品流程](https://process)
