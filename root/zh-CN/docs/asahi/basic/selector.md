---
title: Asahi 目标选择器
tags:
 - Asahi
category: 'docs'
---
# 目标选择器

## 目标选择器是什么?

**目标选择器(selector)**是bukkit命名空间下的一种特殊的**前缀解释器**，可以用于选取特定的目标(可以是**实体**，可以是**位置**)集合并对集合整体操作

类似MythicMobs，SkillAPI的Target，Planners的selector

## 目标选择器的使用方法

```yaml
# selector 释放者 [ @选择器1 参数 @选择器2 参数 ]
# 过滤器filter是一种特殊的目标选择器，用于辅助目标选择器，过滤掉目标选择器选取的、未能达成指定条件的目标
# filter 释放者 [ @过滤器1 参数 @过滤器2 参数 ]
# @!为反选过滤器，意为"除了" @!self代表“除了自己”
# 参数也可以这样写 { 参数名 = 值 }
def testSelector() = {
  targets [
    selector &sender [ @cone { radius = 15 , angle = 60 } ] #选取以函数执行者为原点，前方半径15格，张角60°的扇形区域内的实体目标
    filter &sender [ @flag 'test' ] #要求目标必须满足“带有名为'test'的flag”的条件
    selector &sender [ @line 10.0 ] #选取以执行者为原点，视线上10格以内的实体目标
  ]
  targets each (target) => { #遍历之前选取的所有目标
    print '咕咕咕'
    print &target
  }
} 
```
更多示例见[BuffSystem默认配置](https://github.com/Skillw/BuffSystem/blob/master/src/main/resources/buffs/example.yml)