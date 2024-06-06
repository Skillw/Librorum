---
title: BuffSystem 占位符
tags:
 - BuffSystem
category: 'docs'
---

# 占位符


###### `%bs_buff:key1_key2%` - Buff 信息

- `key1` **Buff 数据 key**
- `key2` **条件 key** (或者 `name` -> 返回 buff 展示名)

例:

- `%bs_buff:examkey_name%` -> 示例 BUFF
- `%bs_buff:examkey_time%` -> 剩余时间: 10.4s

###### `%bs_buffs%` - 返回所有 Buff 数据 key

例: `%bs_buffs%` -> [examkey1,examkey2]
