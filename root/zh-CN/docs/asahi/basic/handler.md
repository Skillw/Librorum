---
title: Asahi 处理模块
tags:
  - Asahi
category: 'doc'
---

# 处理模块

```yaml
#调度器中的condition，triggers，context，functions等在处理器中都可以用
#同时增加when
on-attack:
  triggers: [ custom entity fight ]
  namespaces: [ bukkit ]
  #满足if中的条件时跳转到指定函数
  #否则跳转到else中的函数
  when:
    - if: "check &attacker name; == 'Neige'"
      goto: main1
    - else: main
  context:
    attackerData: attr data of &attacker
    defenderData: attr data of &defender
  functions:
    main: |-
      set addition_damage to math &attackerData.攻击力.value - &defenderData.防御力.value
      damage &defender &addition_damage
      particle REDSTONE at @defender eyeLocation; { 
        'range' = 100
        count = 1000
        data = particleData dust [ color [ 255 255 235 ] in 1.0 ]
      }
      sound
    main1: |-
      tell all 'Neige 打人了!'

```