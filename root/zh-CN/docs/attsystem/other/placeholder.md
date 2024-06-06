---
title: 'AttributeSystem 占位符'
tags:
 - AttributeSystem
category: 'docs'
---

# 占位符

### `%as_att:属性id_占位符id%` - 属性值

`占位符 id` 在读取组里可以自定义

例: `%as_att:MaxHealth_total%`

不写`占位符 id`，默认为 `total`

---

### `%as_att:属性id_matcher_捕获组id%` - 属性值

`捕获组id` 在读取组里可以自定义

例: `%as_att:MaxHealth_matcher_value%`

---

### `%as_equipment:装备组id_装备id_属性名_占位符id%` - 某装备属性值

> 装备组 `BASE-EQUIPMENT` (AS 提供的基础装备组)
> 其它的你可以通过 `/as itemstats ` 再按 `TAB` 查看
> 例: `%as_equipment:BASE-EQUIPMENT_hand_PhysicalDamage_total%`

---

### `%as_equipment:装备组id_装备id_属性名_matcher_捕获组id%` - 某装备属性值

> 例: `%as_equipment:BASE-EQUIPMENT_hand_PhysicalDamage_matcher_value%`

---

### `%as_formula:公式id%` - 返回公式计算结果

**公式 id**: `formula.yml` 内的公式 id

例: `%as_formula:luck%` => 实体 luck 公式计算结果

---

### `%as_formula_str:公式id%` - 返回公式字符串
