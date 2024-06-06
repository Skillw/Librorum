---
title: ItemSystem 物品继承
tags:
 - ItemSystem
category: 'docs'
---

# 物品继承

### 为什么要有**物品继承**

在实际编写物品时，往往会出现许多**重复的物品元数据**
就像这样:
当我想写几个类似的**宝石物品**时:

```yaml
#攻击宝石
AttackGem:
  process:
    - key: quality
      type: weight
      values:
        - 200: "粗糙"
        - 100: "精良"
        - 50: "稀有"
        - 25: "优秀"
        - 12: "史诗"
        - 6: "传说"
    - run: "set 品质数据模板 = mapTemplate [ '颜色' '评分' '材质' ]"
    - key: 品质数据Map
      meta: define
      type: map
      粗糙: ["&8", "10", "YELLOW_DYE"]
      精良: ["&e", "20", "PINK_DYE"]
      稀有: ["&b", "30", "MAGENTA_DYE"]
      优秀: ["&a", "40", "PURPLE_DYE"]
      史诗: ["&5", "50", "RED_DYE"]
      传说: ["&6", "60", "RED_DYE"]
    - run: |-
        def list = &品质数据Map get &quality
        def 品质数据 = mapOf with &品质数据模板 &list
        def 品质颜色 = &品质数据 get '颜色'
        def 品质评分 = &品质数据 get '评分'
        def 材质 = &品质数据 get '材质'
        def 品质 = join [ &品质颜色 , &quality ]
    - run: "def 总评分 to type int calculate ' { &品质评分 } * 10 '"
    - material: "{&材质}"
    - glow-color: "{&品质颜色}"
    - display: "{&品质颜色}攻击宝石"
    - lore:
        - "&f&m─&7&m─────────&f&m─&f介绍&f&m─&7&m─────────&f&m─"
        - ""
        - "&f>> &7品质: {&品质}             &7评分: &c{&总评分}"
        - "&e天然的宝石，据说颜色越深，品质越高。"
        - ""
        - "&f&m─&7&m─────────&f&m─&f属性统计&f&m─&7&m─────────&f&m─"
        - ""
        - "&f>> &7攻击力 &c+{ calculate '10 * {&总评分}' }"
        - "&f>> &7攻击力 &c+{ calculate '{&总评分}/10' }&8(%)"
        - ""
        - "&f&m─&7&m─────────&f&m─&f其它&f&m─&7&m─────────&f&m─"
        - ""
        - "&7请将我放到有宝石槽的物品上"
        - ""
    - nbt:
        unique: "{&unique}"
        IGNORE_ATTRIBUTE: "true"
    - action:
        type: build
        run: |-
          set attKey to analysis 'gem-{&unique}'
          set gemAtt to attr readLore &item
          attr addItemAttr &item &attKey &gemAtt
    - action:
        type: click_item
        run: js_invoke::gem.js::inlay
#防御宝石
DefenseGem:
  process:
    - key: quality
      type: weight
      values:
        - 200: "粗糙"
        - 100: "精良"
        - 50: "稀有"
        - 25: "优秀"
        - 12: "史诗"
        - 6: "传说"
    - run: "set 品质数据模板 = mapTemplate [ '颜色' '评分' '材质' ]"
    - key: 品质数据Map
      meta: define
      type: map
      粗糙: ["&8", "10", "YELLOW_DYE"]
      精良: ["&e", "20", "PINK_DYE"]
      稀有: ["&b", "30", "MAGENTA_DYE"]
      优秀: ["&a", "40", "PURPLE_DYE"]
      史诗: ["&5", "50", "RED_DYE"]
      传说: ["&6", "60", "RED_DYE"]
    - run: |-
        def list = &品质数据Map get &quality
        def 品质数据 = mapOf with &品质数据模板 &list
        def 品质颜色 = &品质数据 get '颜色'
        def 品质评分 = &品质数据 get '评分'
        def 材质 = &品质数据 get '材质'
        def 品质 = join [ &品质颜色 , &quality ]
    - run: "def 总评分 to type int calculate ' { &品质评分 } * 10 '"
    - material: "{&材质}"
    - glow-color: "{&品质颜色}"
    - display: "{&品质颜色}防御宝石"
    - lore:
        - "&f&m─&7&m─────────&f&m─&f介绍&f&m─&7&m─────────&f&m─"
        - ""
        - "&f>> &7品质: {&品质}             &7评分: &c{&总评分}"
        - "&e天然的宝石，据说颜色越深，品质越高。"
        - ""
        - "&f&m─&7&m─────────&f&m─&f属性统计&f&m─&7&m─────────&f&m─"
        - ""
        - "&f>> &7护甲 &c+{ calculate '10 * {&总评分}' }"
        - "&f>> &7护甲 &c+{ calculate '{&总评分}/10' }&8(%)"
        - ""
        - "&f&m─&7&m─────────&f&m─&f其它&f&m─&7&m─────────&f&m─"
        - ""
        - "&7请将我放到有宝石槽的物品上"
        - ""
    - nbt:
        unique: "{&unique}"
        IGNORE_ATTRIBUTE: "true"
    - action:
        type: build
        run: |-
          set attKey to analysis 'gem-{&unique}'
          set gemAtt to attr readLore &item
          attr addItemAttr &item &attKey &gemAtt
    - action:
        type: click_item
        run: js_invoke::gem.js::inlay
```

可见，重复的物品元数据有很多，我们确实可以把重复的物品元放到全局物品元里，然后再一个个导入
但是，这样不够**优雅**
于是，**ItemSystem**提供了**物品继承**

### 物品继承有什么用?

这里有**物品**`A` 和 **物品**`B`
且**物品**`B`继承**物品**`A`
那么**物品**`B`会拥有**物品**`A`的所有**物品元数据**
并且可以通过 **覆写**(`override`) 來修改**物品**`A`的变量
依次来达到:

- 实现**物品元数据**的重用
- 提高物品的**可维护性**
- **节省**大量**创建新物品的时间**
- **提高编写效率和编写质量**

### 物品继承怎么用?

```yaml
eaxmple_item:
  #继承
  extends:
    - "物品A"
  process:
    - display: "&e示例物品"
    - material: "stone"
    - lore:
        - ""
        - "&f&m─&7&m─────────&f&m─&f介绍&f&m─&7&m─────────&f&m─"
        - ""
        - "&7仅仅是示例... &3继承了[物品A]!"
        - ""
```

没错，在**物品选项**里写上

```yaml
extends:
  - "父物品id1"
  - "父物品id2"
```

即可

### 一些细节

来自父物品的**物品元数据**，会**按继承顺序依次排在此物品的后面**
所以你才可以肆无忌惮地**覆写**(`override`)父物品的变量

### 小试牛刀——物品继承

那么就让我们通过物品继承，优化一下**宝石物品**吧

```yaml
BaseGem:
  process:
    - key: quality
      type: weight
      values:
        - 200: "粗糙"
        - 100: "精良"
        - 50: "稀有"
        - 25: "优秀"
        - 12: "史诗"
        - 6: "传说"
    - run: "set 品质数据模板 = mapTemplate [ '颜色' '评分' '材质' ]"
    - key: 品质数据Map
      meta: define
      type: map
      粗糙: ["&8", "10", "YELLOW_DYE"]
      精良: ["&e", "20", "PINK_DYE"]
      稀有: ["&b", "30", "MAGENTA_DYE"]
      优秀: ["&a", "40", "PURPLE_DYE"]
      史诗: ["&5", "50", "RED_DYE"]
      传说: ["&6", "60", "RED_DYE"]
    - run: |-
        def list = &品质数据Map get &quality
        def 品质数据 = mapOf with &品质数据模板 &list
        def 品质颜色 = &品质数据 get '颜色'
        def 品质评分 = &品质数据 get '评分'
        def 材质 = &品质数据 get '材质'
        def 品质 = join [ &品质颜色 , &quality ]
    - run: "def 总评分 to type int calculate ' { &品质评分 } * 10 '"
    - material: "{&材质}"
    - glow-color: "{&品质颜色}"
    - run: |-
        def name to '模板'
        def attributes to listOf [ '无' ] 
        def 名字 to &name
        def 属性 to join &attributes by '\n'
    - display: "{&品质颜色}{&名字}宝石"
    - lore:
        - "&f&m─&7&m─────────&f&m─&f介绍&f&m─&7&m─────────&f&m─"
        - ""
        - "&f>> &7品质: {&品质}             &7评分: &c{&总评分}"
        - "&e天然的宝石，据说颜色越深，品质越高。"
        - ""
        - "&f&m─&7&m─────────&f&m─&f属性统计&f&m─&7&m─────────&f&m─"
        - ""
        - "{&属性}"
        - ""
        - "&f&m─&7&m─────────&f&m─&f其它&f&m─&7&m─────────&f&m─"
        - ""
        - "&7请将我放到有宝石槽的物品上"
        - ""
    - nbt:
        unique: "{&unique}"
        IGNORE_ATTRIBUTE: "true"
    - action:
        type: build
        run: |-
          set attKey to analysis 'gem-{&unique}'
          set gemAtt to attr readLore &item
          attr addItemAttr &item &attKey &gemAtt
    - action:
        type: click_item
        run: js_invoke::gem.js::inlay

AttackGem:
  extends:
    - "BaseGem"
  process:
    #给父物品提供了变量name和attributes
    - key: name
      type: string
      value: "攻击"
    - key: attributes
      type: strings
      values:
        - "&f>> &7攻击力 &c+{ calculate '10 * {&总评分}' }"
        - "&f>> &7攻击力 &c+{ calculate '{&总评分}/10' }&8(%)"
DefenseGem:
  extends:
    - "BaseGem"
  process:
    #给父物品提供了变量name和attributes
    - key: name
      type: string
      value: "防御"
    - key: attributes
      type: strings
      values:
        - "&f>> &7护甲 &c+{ calculate '10 * {&总评分}' }"
        - "&f>> &7护甲 &c+{ calculate '{&总评分}/10' }&8(%)"
```

> 因为父物品元数据会被放到最后，所以这里没有用到**覆写(**`override`)
> 覆写的概念和用法已经在[变量](https://../variable/intro)讲过了，这里就不多赘述了

除了**物品元 define**，你也可以通过其它方式定义变量，如果你不知道，请看[变量](https://../variable/intro)
