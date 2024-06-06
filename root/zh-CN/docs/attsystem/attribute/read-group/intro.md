---
title: 'AttributeSystem 读取组'
tags:
 - AttributeSystem
category: 'docs'
---

# 读取组

###### ReadPattern 子类，用于读取属性

### 介绍

**AttributeSystem** 中，**读取组**负责**属性**的 **读取** **记录** **获取**

> 你可以通过编写 **ReadPattern** 子类来实现自定义读取格式

下面来介绍一下 **读取组** 的功能

### 读取 & 记录(ReadGroup)

即读取 `字符串 & NBT` 中的**属性**

例如
**字符串**: `攻击力: 100`

**NBT**

```yaml
ATTRIBUTE_DATA:
  example_data:
    PhysicalDamage:
      value: 100
```

如果 `攻击力[PhysicalDamage]` 的**读取格式**是**一个读取组**
那么这些 `字符串 & NBT` 都会作为参数传入对应的读取组，由**读取组**进行**属性**的读取
读取之后，读取组会将**捕获组**与**其捕获到的值**存入**属性状态** (后面会讲)

### 获取

通过变量`%as_att:属性ID_占位符id%`获取值

> 适用于所有属性

### 自定义读取组

于 **plugins/AttributeSystem/reader** 文件夹下任意一个**YAML 文件**中定义

```yaml
YourReadGroup:
  #类型， string / number
  type: number
  #这里是声明捕获组的地方
  matchers:
    #左边是捕获组id 右边是运算操作
    #运算操作:
    #- plus 加
    #- max 取最大
    #- min 取最小
    #- reduce 减
    #- scalar 乘
    percent: plus
    value: plus
  #匹配格式(正则)
  #可以通过<捕获组id>来让捕获组捕获相应位置的值
  #从上到下先后匹配，直到匹配到为止
  patterns:
    ## 攻击力: 10(%)
    - '{name}: <percent>\(%\)'
    ## 攻击力: 100
    - "{name}: <value>"
  #自定义变量(PAPI / PouPAPI)
  #调用变量格式: %as_att:属性ID_下面的id%
  placeholder:
    #占位符id
    #可带入上面patterns中的捕获组
    #这个是总值公式，务必填上
    total: "<value> * (1 + (<percent>/100) )"
    value: <value>
    percent: <percent>/100
```

让我们拆开来分析 **读取组**.

#### 键 [key]

读取组唯一标识符，(用于填到属性的`read-pattern`中)

#### 捕获组 [matchers]

声明**捕获组**,

#### 匹配格式 [patterns]

实际上是正则表达式

- `{name}` 属性名 读取时会被属性名替换
- `<捕获组id>` 你要捕获的东西

> **数字读取组**的**匹配格式**中`<捕获组id>` = `(?<捕获组id>(\+|\-)?(\d+(?:(\.\d+))?))` > **字符串读取组**的**匹配格式**中不能直接调用`<捕获组id>`，你需要像这样来使用: `(?<捕获组id>正则表达式)`

#### 占位符公式 [placeholder]

用于自定义占位符
支持所有**占位符**，**字符串内联函数**，**数字运算**
可以用 `<捕获组id>` 来带入**捕获组**捕获到的值
可以通过 `%as_att:属性ID_占位符id%` 获取

> 如果`%as_att:属性id_占位符id%`不填写`占位符id`则默认为`total`

### 例子

目标：

让读取格式读取`攻击力: 100(+10)`格式的属性

```yaml
Add:
  #类型， string / number
  type: number
  #这里是声明捕获组的地方
  matchers:
    #左边是捕获组id 右边是运算操作
    #运算操作:
    #- plus 加
    #- max 取最大
    #- min 取最小
    #- reduce 减
    #- scalar 乘
    percent: plus
    value: plus
    add: plus
  #匹配格式(正则)
  #可以通过<捕获组id>来让捕获组捕获相应位置的值
  #从上到下先后匹配，直到匹配到为止
  patterns:
    ## 攻击力: 10(%)
    - '{name}: <percent>\(%\)'
    ## 攻击力: 100(+10)
    - "{name}: <value>\(<add>\)"
    ## 攻击力: 100
    - "{name}: <value>"
  #自定义变量(PAPI / PouPAPI)
  #调用变量格式: %as_att:属性ID_下面的id%
  placeholder:
    #占位符id
    #可带入上面patterns中的捕获组
    #这个是总值公式，务必填上
    total: "(<value> + <add>) * (1 + (<percent>/100) )"
    value: <value>
    percent: <percent>/100
```

应该都能看懂吧
