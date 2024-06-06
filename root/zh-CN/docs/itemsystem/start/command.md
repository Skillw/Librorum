---
title: ItemSystem 指令
tags:
 - ItemSystem
category: 'docs'
---

# 指令

```
指令列表:
   /item
     - help —— 显示帮助.
     - get [物品ID] (-amount 数量公式) (-probable 几率公式) (--same) (-data 构造数据) —— 获取一个物品.
     - give [玩家ID] [物品ID] (-amount 数量公式) (-probable 几率公式) (--same) (-data 构造数据) —— 给玩家物品
     - rebuild (玩家ID) (-vars 刷新的变量id) (-data 构造数据) —— 刷新玩家手上的物品
     - list (页数) —— 列出物品列表
     - save [物品ID] [文件路径] —— 存储你手上的物品
     - drop [玩家ID] [物品ID] [世界名] [x] [y] [z] (-amount 数量公式) (-probable 几率公式) (--same) (-data 构造数据) (--effect) —— 掉落物品.
     - reload —— 重载插件
 []为必填项 , ()为可填项
 公式支持PAPI 四则运算,几率0~1对应1%~100%
 (构造数据) 的 格式: {变量ID:值,变量id2:[a,b,c]}
```
