---
title: 'AttributeSystem 属性'
tags:
 - AttributeSystem
category: 'docs'
---

# 属性

### 介绍

#### 标识符

**属性**本身只是一个**标识符**，用来存取相应的属性数据

<!-- 例:

有一个 名(key)为 `PhysicalDamage` 的属性，

存：属性数据会以 `PhysicalDamage` 为键来存储

取：属性数据要通过 `PhysicalDamage` 来读取

> 就是**映射(mapping)**啦，高中必修一的概念 一个 key 对应一个属性数据 -->

#### 功能实现

不同于其它属性插件，**AttributeSystem** 中一个属性 与 其功能的实现 是 **完完全全分开的**

- **读取**&**记录** 通过 **ReadPattern 读取格式** 实现
- 属性具体功能的**实现** 通过 **原版属性公式 / **机制组公式**(战斗公式)** / **脚本监听器** / **机制** / **代码** 实现

### 自定义属性

于 **plugins/AttributeSystem/attributes** 文件夹下任意一个**YAML 文件**中定义你的属性即可

```yaml
ExampleAtt:
  #权重  不填默认0
  priority: 1
  #是否会计算到实体属性上  不填默认true
  include-entity: true
  #展示名  不填默认names的第一个
  display: "攻击力"
  #名称  不填默认是key
  names:
    - "示例属性"
    - "示例属性2"
    - "示例属性3"
  #读取组 不填默认Default
  read-pattern: Default
  #属性映射
  map:
    #其他属性, 这里格式和NBT属性一样
    PhysicalDamage:
      #其他属性的捕获组
      #后面可以通过 <占位符公式id> 调用本属性读取组的占位符公式
      #就像这样: <total>
      #支持内联函数与占位符
      value: |-
        calculate '<total> * %player_level%'
```

> 你可以通过以下方式快速定义一个属性

```yaml
快速属性: {}
```

接下来由我将属性的定义逐一拆解进行讲解.

### 键 [key]

属性的唯一标识符，用来存取属性数据
读取 NBT 属性时会通过它来读取

> NBT 属性 ，后面会详细讲解

```yaml
ATTRIBUTE_DATA:
  example_data:
    MyFirstAttribute:
      value: 100
```

#### 权重 [priority]

用来决定与其它属性间的读取顺序，
如果你在用诸如 **AttributePlus** 类的**属性插件**，
大概会遇到下面这个问题:
当一个属性名为 `伤害`
另一个属性名为 `暴击伤害`
**属性**在读取时会一律把含 `暴击伤害` 的词条读为了 `伤害` 属性，而忽略了 `暴击伤害`
**AttributeSystem** 通过权重解决这一问题

> 一个属性的权重值越小 读取顺序越靠前

```yaml
Crit:
  priority: 2
  names:
    - "伤害"
  read-pattern: Percent
CritDamage:
  priority: 1
  names:
    - "暴击伤害"
  read-pattern: Percent
```

以上配置便能完美地解决读取问题,这也是权重的作用

#### 计入实体 [include-entity]

- **true** 会计入实体属性，并能够通过实体占位符获取 (`%as_att:属性id_占位符id%`)
- **false** 不会计入实体属性，能通过物品占位符获取 (`%as_equipment:装备组id_装备id_属性名_占位符id%`)

#### 名称 [names]

将会以`<name>`为键带入读取格式，与文本进行匹配

#### 读取格式 [read-pattern]

与一个读取格式绑定，读取格式是用来定义属性是如何读取的
**AttributeSystem**自带的**读取格式**:

###### 数字

- default \[\[valuemax, percentmax, scalar, percentmin, valuemin, percent, value\]\] 默认的数字属性读取组
- percent \[\[percentmax, percentmin, percent\]\] 百分百属性读取组

###### 字符串

- strskip \[\[value\]\] 字符串读取组 (只读一个)
- strappend \[\[value\]\] 字符串读取组 (以某符号为分隔符进行字符串叠加)
- strroman \[\[roman\]\] 字符串读取组 (读取罗马数字)
