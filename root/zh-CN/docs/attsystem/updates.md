---
title: 'AttributeSystem 更新日志'
tags:
 - AttributeSystem
category: 'docs'
---

# 更新日志


## 1.0.0 2022 年 2 月 20 日

插件发布

---

## 1.0.1 2022 年 2 月 20 日

更新了 Book 式的属性统计

---

## 1.0.2 2022 年 2 月 21 日

兼容了 DragonCore 的装备栏，key 为 Dragon-Core

支持了原版属性开关，将 formula 中的值设为-1 即可关闭

---

## 1.0.3 2022 年 2 月 21 日

更好地兼容了 DragonCore 的装备栏，key 为 Dragon-Core 子 key 为槽位 id (将槽位 attribute 设为 true 即可)

---

## 1.0.4 2022 年 2 月 21 日

兼容了萌芽的装备栏，key 为 Germ-Equipment 子 key 为槽位 id (AS 配置 slot.yml 中 germ-slots 节点下添加槽位)

---

## 1.0.5 2022 年 2 月 23 日

更好地兼容了萌芽&龙核的装备栏

兼容了部分 AP2/3 附属 (请把那些附属 jar 包内的 plugin.yml 中 AttributePlus 改为 AttributeSystem 方可正常使用)

兼容/修复了龙时的 RGB 颜色读不到属性的问题

修复了 PAPI 变量标识符为"asys"的问题(现在改为"as")

修改了读取组的默认配置(旧版的 placeholder valueMax 的值笔误成了 valueMin)

使恢复全息在恢复值为 0 时不显示

---

## 1.0.6 2022 年 2 月 24 日

添加了针对物品的条件（见配置）

兼容了 SKAPI 技能冷却 与 skill-speed 挂钩（请更新 formula.yml）

优化了龙核的装备栏兼容

---

## 1.0.7 2022 年 2 月 25 日

添加了针对多行字符串的条件（详见配置）

添加了 bstats 统计

兼容了 MM 怪属性，在怪物配置下加节点"Attributes"

---

## 1.0.8 2022 年 2 月 26 日

修改条件配置(原配置转义错误)

优化 API

---

## 1.0.9 2022 年 2 月 26 日

优化 API 添加了条件解析事件

---

## 1.1.0 2022 年 3 月 6 日

添加了战斗状态

添加了标签系统(基于属性)

修复了高精度数字显示

兼容了 mod 物品

重构了条件系统

将公式配置移动至单独文件

删除了对 NBT 属性的支持

删除了信息栏系统

---

## 1.1.1 2022 年 3 月 6 日

修复了部分信息显示错误的 bug

生命恢复可关闭(formula 里设为-1)

---

## 1.1.2 2022 年 3 月 11 日

修改变量获取失败时返回值 "N/A" -\> "0.0"

修复 mod 物品材质报错问题

再兼容了物品的 NBT 属性数据的序列化与反序列化

新增指令 itemstats 查看装备栏内任意槽位的装备属性统计

新增变量 %as*formulastr*公式 id% 返回 公式的原始字符串

新增读取组数乘模式的读取变量

修改最大生命值属性添加方式 -\> 已兼容其它插件/mod

修复了可能会内存泄漏的问题 （快用 paper）

---

## 1.1.3 2022 年 3 月 12 日

修复了可能会读到空气装备的情况（）

添加了捕获组运算符 （*无*敌\*）

添加了指令 entitystats 查看实体属性统计

---

## 1.1.4 2022 年 3 月 20 日

修复了 1.12 不存在 getLore 方法问题

兼容了 1.18

添加了 debug

---

## 1.1.5 2022 年 3 月 21 日

修复了读取组捕获组 id 报错

更好地兼容了 1.18

属性统计可自定义

优化用户体验

---

## 1.1.6 2022 年 3 月 22 日

修复抛射物伤害 MISS 问题

兼容 CrashShot (options.fight.skip-crash-shot 为是否跳过伤害计算)

---

## 1.2.0 2022 年 4 月 4 日

分开三个模块，重构部分代码并开源

此版之后支持字符串属性（开发者）

---

## 1.2.1 2022 年 5 月 8 日

合并三个模块，优化代码

---

## 1.2.2 2022 年 6 月 12 日

修复 personal 指令不管用 bug

修复怪物属性 重载时会刷新

修复条件不起效果 bug

兼容 Pouvoir 1.3.0

---

## 1.2.3 2022 年 6 月 21 日

新增几个简写函数

AttributeDataCompound#getAttributeStatus(String) -\> AttributeDataCompound#getStatus(String)

AttributeDataCompound#getAttributeStatus(Attribute) -\> AttributeDataCompound#getStatus(Attribute)

---

## 1.2.3-fix 2022 年 6 月 22 日

kotlin 版本退到 1610

---

## 1.2.4 2022 年 6 月 26 日

增加生命恢复事件（我怎么妄加了）

增加 config 中 disable-regain-on-fight 是否在战斗中暂停生命恢复

---

## 1.3.0 2022 年 7 月 15 日

优化战斗系统（快的一批）

优化调度器系统

增加指令 report / clear 用来 查看 /清除 耗时数据

兼容 MythicMobs 5 & MythicMobs 4 技能伤害公式 （机制 att-damage\{key="战斗组 id"\}）

不再兼容 OriginSkill (会做 Planners 兼容)

删除 TriggerManager TriggerHolderManager

修复了卸载 AS 攻击速度异常 （详细修复见 FAQ）

更优雅的代码（）

API 变动，具体看 javadoc

---

## 1.3.1 2022 年 7 月 25 日

#### 新增

物品 NBT 属性条件

禁攻材质权限 (as.damage_type.\{小写材质 id\})

更多的 Status ( NormalStatus(String to Any) ， StringStatus(String to String) )

支持 Planners Kether AttDamage 动作

支持 脚本注解注册 机制 条件 读取格式 Operation

支持 Kether 编辑判断流程(见 damage 与 fight)

FightDataHandleEvent

ItemNBTReadEvent

#### 修复

'options.fight.damage-any-time' 不奏效

生命恢复时报错

MM 怪属性重载时刷新

---

## 1.3.2 2022 年 7 月 31 日

#### 新增

不同权限攻击触发不同战斗组

指令 info 查看插件信息

指令 disable 用于卸载插件

#### 优化

---

## 1.3.3 2022 年 8 月 4 日

用户体验

#### 新增

MessageBuilderManager

你可以拓展伤害显示的方式了(来个大佬帮我写萌芽/龙核附属)

#### 支持

Pouvoir 重构后的字符串内联函数 (性能很棒的说)

#### 修复

禁普攻材质不起效

距离攻击不起效

---

## 1.3.4 2022 年 8 月 6 日

#### 修复

注解注册注销显示 bug

---

## 1.3.5 2022 年 8 月 6 日

#### 兼容

1.19.1

MM 的属性伤害机制支持以下参数
|标签(缩写) |描述 |默认设置|
|:--:|:--:|:--:|
|amount(a) |造成的伤害值 |1|
|ignoreArmor(ia) |是否无视防御,为 false 时,若伤害の目标为自身,则无法伤害自身 |false|
|preventknockback(pkb,pk) |是否不造成击退 |false|
|preventimmunity(pi) |是否无视伤害硬直 |false|

且支持参数传递，例:
`att-damage\{key="战斗机制组id";test=1\} @Target`
则可以在战斗机制组中通过`\{test\}`调用参数值

---

## 1.3.5-fix 2022 年 8 月 7 日

#### 修复

1.19.1 兼容问题

---

## 1.4.0 2022 年 8 月 12 日

#### 新增

**字符串属性**，可以自定义**字符串属性数据**间的**运算操作**

**属性映射**，支持**内联函数**

自带 **AttributePlus 3** 的所有属性，均通过脚本实现（可以自由组合拆卸）

##### **条件**

- altitude
- attribute
- fighting
- fire
- food
- ground
- health
- level
- gm
- slot
- water
- weather
- world

##### ** 机制**

- damage
- crit
- vampire
- rebound
- potion
- frozen
- thunder
- flame
- mythicskill
- function
- kether
- shield

##### **字符串运算操作**

- roman_num

##### 读取组

###### 数字

- default \[\[valuemax, percentmax, scalar, percentmin, valuemin, percent, value\]\]
- percent \[\[percentmax, percentmin, percent\]\]

###### 字符串

- strskip \[\[value\]\]
- strappend \[\[value\]\]
- strroman \[\[roman\]\]

##### **属性**

- 攻击力
- 快速属性
- 唯一字符串属性
- 拼接字符串属性
- 罗马数字
- 法术伤害
- 法术命中几率
- 法术闪避几率
- 法术暴击几率
- 法术暴击伤害
- 法术暴击抵抗
- 法术防御
- 法术护甲穿透
- 法术破甲几率
- 真实伤害
- 攻击距离
- 攻击速度
- 击退抗性
- PVE 伤害
- PVP 伤害
- PVE 防御
- PVP 防御
- 远程伤害
- 远程护甲
- 攻击力
- 命中几率
- 闪避几率
- 暴击几率
- 暴击伤害
- 暴击抵抗
- 护甲
- 护甲穿透
- 破甲几率
- 燃烧伤害
- 燃烧几率
- 冰冻强度
- 冰冻几率
- 雷击伤害
- 雷击几率
- 反弹倍率
- 反弹几率
- 吸血几率
- 吸血倍率
- 吸血抵抗
- 生命值
- 生命恢复
- 移动速度
- 幸运
- 经验加成
- 箭矢速度
- 箭矢精准
- 箭矢穿透率
- 箭矢穿透数
- 法力值
- 法力恢复
- 技能极速
- 盾牌减伤
- 破盾几率

#### 兼容

##### **Magic**

添加**Action**: `att_damage`  
必填参数 `fight-group: 战斗机制组id`  
其他参数和 **DamageAction** 的一样

##### **反作弊**

- Matrix
- AAC

##### 优化

**NBT 条件的读取**

- 物品 **lore** 缓存
- 物品 **NBT** 缓存
- 物品**属性数据**缓存

##### 修复

无

---

## 1.4.1 2022 年 8 月 13 日

##### **支持**

盔甲架作为攻击者

优化战斗数据解析变量时性能

##### **新增**

**data** 函数用于操作战斗数据

**最小蓄力值**配置，小于此蓄力值时将无法造成伤害，具体位置是`config.yml`中`options.fight.attack-speed.min-force`

全息的参数都支持**内联函数**与**占位符**(\{a.攻击者占位符\} / \{d.防御者占位符\})

具体位置是 `message.yml`中的`fight-message.holo` 和 `health-regain-holo`(这个只有攻击者(回血的实体)占位符)

可以自定义**攻击者**为`null`时的**攻击者名**，具体位置是`message.yml`的`fight-message.default-name`

---

## 1.4.2 2022 年 8 月 27 日

##### **支持**

抛射物伤害等，支持提前获取**攻击者属性**

兼容 **ItemsAdder**

## 1.4.2-fix 2022 年 8 月 29 日

##### **修复**

1.19 空物品报错问题
最大血量`\<=0`报错问题
