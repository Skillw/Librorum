---
title: Asahi 目标选择器列表
tags:
 - Asahi
category: 'docs'
---

# 目标选择器

> Glom这目标选择器写的有点草率，暂时不建议在生产服使用 ——诗远

## Flag标签选择器
Flag类似SkillAPI的Flag，用于标记特定实体
```yaml
#选取带有 my_flag 标签的实体 且距离Caster 10格以内
set result to selector &caster [ @flag 'my_flag' @range 10 ]
for entity in &result { &caster damage &entity &damage }
```

## Cone扇形选择器
选取以函数执行者为原点，前方半径*radius*格，张角*angle*°的扇形区域内的实体目标
```yaml
selector &sender [ @cone { radius = 15 , angle = 60 } ] #选取以函数执行者为原点，前方半径15格，张角60°的扇形区域内的实体目标
```

## Amount数量选择器
限制选择的实体数量，超出数量时，从最先选择的目标中移除(诗远评价: 移除方案过于简单粗暴，后续应该会加入移除的优先级)
```yaml
selector &sender [ @cone { radius = 15 , angle = 60 } @amount 5 ] #选取以函数执行者为原点，前方半径15格，张角60°的扇形区域内的实体目标，最多选取5个
```

## Line视线选择器
选取以执行者为原点，视线上*distance*格以内的实体目标(诗远评价: 功能局限，后续应该会加入起始坐标，终止坐标之类的参数)
```yaml
selector &sender [ @line 10.0 ] #选取以执行者为原点，视线上10格以内的实体目标
```

## LookAt
和Line的区别就是，LookAt只选择看向的最近的目标
```yaml
selector &sender [ @lookAt 10.0 ] #选取以执行者为原点，视线上10格以内的最近的实体目标
```
 
## Nearest
选取以执行者为原点，最近的一些实体目标
```yaml
selector &sender [ @nearest { amount = 5 , distance = 10 } ] #选取以执行者为原点，周围10格以内的最近的5个实体目标
```

## Projectile抛射选择器
还没有实现，目前跟Line一样
```yaml
selector &sender [ @line 10.0 ] #选取以执行者为原点，视线上10格以内的实体目标
```

## Range
同 nearByEntities

获取周围以实体为中心的一个碰撞箱内的实体

x y z 为碰撞箱各坐标轴上长度的1/2
```yaml
selector &sender [ @range { x = 2 , y = 3 , z = 3 } ]
selector &sender [ @range 15 ] #只填一个参数则默认为立方体
```

## Side
检测目标是否在执行者的旁边(中间不间隔原版Minecraft所定义的实体方块) (诗远评价: 是否为实体方块在不同情景有不同需求，不能简单按原版判断)

```yaml
filter &sender [ @side 'IGNORE' ] # 无视任何方块间隔，直接过滤条件通过
filter &sender [ @side 'SAME' ] # 目标在执行者的旁边时 过滤条件通过
filter &sender [ @side 'DIFFERENT' ] # 目标不在执行者的旁边时 过滤条件通过
```