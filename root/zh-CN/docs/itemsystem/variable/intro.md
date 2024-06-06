---
title: ItemSystem 变量
tags:
 - ItemSystem
category: 'docs'
---

# 变量

这里的变量指的是 [**Asahi**](https://../../pouvoir/other/asahi) 中的变量
**ItemSystem**只不过是多加了 2 种定义变量的方式，以及对**变量在物品上的生命周期**做了点规范而已
下面的内容，需要你有贯穿[**Asahi**](https://../../pouvoir/other/asahi) [**物品元**](https://../meta/intro) 的知识储备，请熟读

### ItemSystem 中的 定义变量

###

#### set

> 内联函数声明变量的方法

##### 参数

1. 变量名
2. to/= 值

##### 作用

定义变量

- 会覆盖已有变量, 除非你使用 `ifndef`
- 不会保存到物品 NBT，供自动更新/重新构建物品时使用，除非你使用 `save` 函数
  > 具体请看[函数列表](https://../../pouvoir/other/functions)这里不过多阐述

##### 例子

`set a to check 1 == 2`

a 赋值为 false
并返回 false

---

#### def

##### 参数

1. 变量名
2. to/= 值

##### 作用

定义变量，与`set`的区别是

- 只能在`物品生产流程`中使用
- 若已经有此变量名的变量，则跳过定义
- 变量值会自动保存到物品 NBT，供自动更新/重新构建物品时使用

##### 例子

`def a to check 1 == 2`

---

### override

##### 参数

1. 变量名
2. to/= 值

##### 作用

定义变量，与`def`的区别是

- 会覆盖已有的变量

##### 例子

```
set a to 1
override a to check 1 == 2
```

a 赋值为 false
并返回 false
(无视已有的变量`a`，直接覆盖)

---

#### define 物品元

> 你也可以使用 define 物品元来定义变量

##### 参数

1. `key: {变量id}`
2. `type: {变量类型}`
3. `save: {是否保存至NBT}` - 可选，默认 true
4. `cache: {是否缓存}` - 可选，默认 true
5. `override: {是否覆盖}` - 可选，默认 false

##### 作用

定义变量

例:

```yaml
key: "变量1号"
#变量类型，后面会详细讲
type: "strings"
values:
  - "第一行"
  - "第二行"
```

### ItemSystem 中变量的调用

就像**内联函数**中一样，直接通过`&变量名`调用，并且支持[**中缀动作**](https://../../pouvoir/other/actions)

你可以在**物品流程**中的任何地方(除了 meta 和各种 type)调用变量

下面细讲一下 `define 物品元`中用到的**变量类型**

### define 物品元的变量类型

见下一节[变量类型](https://type)

### 细谈 cache(缓存) 与 save(保存)

如果你仔细研读了上文，不难得出:

- `set`函数 = 无 `cache` + 无 `save` (需要手动去设置)
- `def`函数 = `cache` + `save`
- `defin`物品元 = `cache` + `save` 均自定义

下面谈谈 `cache` 与 `save` 的具体作用

#### cache(缓存)

即变量在赋值后不再改变
若不开启 `cache`，则变量的值会视情况一直动态，不固定

> 前提是你的变量值本身就是可动态的，而不是什么常量

#### save(保存)

变量会存到构建出的物品的 **NBT** 中，供**自动更新**/**重新构建**物品时使用

### override (重载/覆盖)

会覆盖已有变量，用于覆盖父物品的变量，详见[物品继承](https://../further/extends)
