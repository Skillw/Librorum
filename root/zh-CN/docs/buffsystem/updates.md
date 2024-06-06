---
title: BuffSystem 更新日志
tags:
 - BuffSystem
category: 'docs'
---

# BuffSystem 更新日志

---

## 1.0.0 2022 年 8 月 6 日

插件发布

---

## 1.0.1 2022 年 8 月 7 日

兼容 AS AP OA SX 属性

---

## 1.0.2 2022 年 8 月 7 日

#### 新增

##### Buff Key

引入 Buff Data Key 支持一个实体多个同 buff 数据并存

##### Buff Info

支持点击删除 Buff 数据

#### 修复

`plugin.yml`异常导致加载失败

---

## 1.0.3 2022 年 8 月 7 日

#### 新增

**BuffAPI**

[占位符](https://other/placeholder)

---

## 1.1.0 2022 年 8 月 12 日

#### 新增

兼容 **Buff** 中效果的计时定义
指令 `buff removeIf {}` 用于删除符合条件的 **buff**
**Buff** 的默认 **BuffData**
若**BuffData**中 `save = false` 则退服不保存 **buff**

#### 修复

数据库问题

---

## 1.1.1 2022 年 8 月 13 日

#### 修复

同属性效果不能叠加

#### 修改

数据库独立到插件配置文件夹中

---

## 1.1.3 2022 年 8 月 27 日

#### 优化

加了几条注释
详见`buffs/example.yml`
