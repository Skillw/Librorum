---
title: AttributeSystem FAQ
tags:
 - AttributeSystem
category: 'docs'
---

### FAQ

### 插件卸载了攻击速度不正常

formula.yml 里 attribute-formulas.attack-speed 设置成-1(关闭攻击速度系统)，重载 as，关服，删除 AS

### 加了插件走不动路/属性计算结果不能正常四舍五入 （1.1.4 已修复）

更新 Pouvoir 的 config.yml

### 读取不了属性

看看读取组里面有没有你所写的读取格式

### 怎么兼容 mod 生命值 （1.1.3 已修复）

关闭生命值系统 生命压缩设置成-1

### 为什么有时候会打出两次伤害

调整 config.yml 里的默认攻击距离
