---
title: 'AttributeSystem NBT'
tags:
 - AttributeSystem
category: 'docs'
---
# NBT

### 格式

```yaml
#负责存物品属性数据的NBT
ATTRIBUTE_DATA:
  #属性数据，这个key不能重复
  Example_Key:
    #属性状态
    Attribute_key:
      #属性状态的具体内容
      Matcher_key: value
```

### 例子

若一个名 为`ExampleAtt`的属性，其读取组为`YourReadGroup`

```yaml
ExampleAtt:
  names:
    - "示例属性"
  read-pattern: YourReadGroup
```

```yaml
YourReadGroup:
  type: number
  matchers:
    percent: plus
    value: plus
  patterns:
    - '{name}: <percent>\(%\)'
    - "{name}: <value>"
  placeholder:
    total: "<value> * (1 + (<percent>/100) )"
    value: <value>
    percent: <percent>/100
```

那么在 **NBT** 中，需要像这样书写属性数据:

```yaml
ATTRIBUTE_DATA:
  #这里写什么都行，别重复
  example-key:
    ExampleAtt:
      value: 100
      percent: 10
    其他属性:
      value: 10
      percent: 100
  #这里写什么都行，别重复
  example-key2:
    ExampleAtt:
      value: 114514
      percent: 1919810
    其他属性:
      value: 10
      percent: 100
```
