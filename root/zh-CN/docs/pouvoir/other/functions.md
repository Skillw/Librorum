---
title: Pouvoir-Asahi-函数列表
tags:
 - Pouvoir
category: 'docs'
---

# Asahi-函数列表

## >>>From **Pouvoir**

## 逻辑 [Logic]

### check

##### 参数

1. a 值
2. 判断符号
3. b 值

##### 作用

判断

##### 例子

`check 1 == 1`

返回 true

附:
|判断符|作用|
|:--:|:--:|
|\<|比较数字|
|\<=|比较数字|
|\>|比较数字|
|\>=|比较数字|
|==|比较值|
|!=|比较值|
|===|比较内存地址|
|!==|比较内存地址|
|equals|比较值|
|!equals|比较值|
|in|a 是否属于 b 集合/字符串|
|!in|a 是否属于 b 集合/字符串|
|is|a 是否是 b 类的实例|
|!is|a 是否是 b 类的实例|
|contains|a 是否属于 b 字符串|
|!contains|a 是否属于 b 字符串|
|equalsIgnore|a 是否等于 b 字符串 (不论大小写)|
|!equalsIgnore|a 是否等于 b 字符串(不论大小写)|

---

### if

##### 参数

不使用短路与/短路或

1. bool 值 (true / false)
2. then + 真值
3. else + 假值

使用

1. bool 值 (true / false)
2. || 或 &&
3. bool 值 (true / false)
4. then + 真值
5. else + 假值

##### 作用

逻辑判断

##### 例子

`if check %player_name% == 'Neige' && check %player_level% == 0 then '太菜了,菜!' else '菜'`

若为 玩家 Neige 且等级为 0

返回 太菜了,菜!

否则

返回 菜

### all

##### 参数

1. 布尔值列表

##### 作用

满足所有

##### 例子

`all [ check 1 == 2 , check 2 == 2 ]`

返回 `false`

---

### any

##### 参数

1. 布尔值列表

##### 作用

满足其一

##### 例子

`all [ check 1 == 2 , check 2 == 2 ]`

返回 `true`

---

### not

##### 参数

1. 布尔值

##### 作用

取反

##### 例子

`not true`

返回 `false`

---

### return

##### 参数

1. 对象

##### 作用

不执行当前代码块剩下的函数，直接返回值

##### 例子

```
print 1
return 1
print 2
```

输出: `1`
返回: `1`
`print 2`不会被执行

---

## 任务 (Task)

### task

##### 参数

1. in \{delay\} - 延迟 tick (可选)
2. every \{period\} - 周期 tick (可选)
3. \{Block\} - 代码块

##### 作用

同步执行代码

##### 例子

```
task in 10 every 5 \{
    print 1
\}
```

在半秒后，每 0.25 秒打印一次`1`

### async

##### 参数

1. in \{delay\} - 延迟 tick (可选)
2. every \{period\} - 周期 tick (可选)
3. \{Block\} - 代码块

##### 作用

异步执行代码 (请注意线程安全)

##### 例子

```
async in 10 every 5 \{
    print 1
\}
```

在半秒后，每 0.25 秒打印一次`1`

### sync

##### 参数

1. \{Block\} - 代码块

##### 作用

快速跳回同步执行代码
只能在异步使用，否则会堵塞主线程

##### 例子

```
async in 10 every 5 \{
    print 1
    sync \{ print 2 \}
\}
```

## 游戏 (Bukkit)

### permission

##### 参数

1. 实体
2. 权限列表

##### 作用

检测实体权限

##### 例子

```
permission &entity [ 'a.b.c' , 'c.b.a' ]
```

若实体有权限`abc`和`c.b.a`则返回: `true` 反之 `false`

---

### effect

##### 参数

1. \{Particle\} - 粒子类型
2. at \{Location\} - 位置
3. limit \{Int\} - 可视范围 (可选)
4. offset \{Vector\} - 偏移 (可选)
5. amount \{Int\} - 粒子数量 (可选)
6. speed \{Double\} - 播放速度(?) (可选)
7. data \{ParticleData\} - 粒子数据 (可选)

##### 作用

播放粒子效果

##### 例子

```
effect 'REDSTONE' at [ 'world' 0 64 0 ]
```

在世界`world`的坐标`0,64,0`处播放粒子`REDSTONE`

---

### uuid

##### 参数

1. 实体

##### 作用

获取实体 uuid

##### 例子

```
uuid &entity
```

返回实体的 UUID

---

### world

##### 参数

1. 世界名

##### 作用

获取世界

##### 例子

```
world 'world'
```

---

### location

##### 参数

1. [ \{世界\} \{x\} \{y\} \{z\} ]
2. with \{pitch\} \{yaw\} - 可选

##### 作用

构建 Location

##### 例子

```
location [ world 'world' 0 0 0 ] with 1 1
```

---

### vector

##### 参数

1. [ \{x\} \{y\} \{z\} ]

##### 作用

构建向量

##### 例子

```
vector [ 1 1 1 ]
```

---

### color

##### 参数

1. [ \{red\} \{green\} \{blue\} ]

##### 作用

构建颜色，范围`0~255`

##### 例子

```
color [ 255 255 255 ]
```

---

### particle

##### 参数

1. 粒子类型 ID

##### 作用

获取粒子类型

[粒子效果 ID 列表](https://bukkit.windit.net/javadoc/org/bukkit/Particle.html)

##### 例子

```
particle 'CRIT'
```

---

### sound

##### 参数

1. 声音类型 id

##### 作用

获取声音类型

[声音 ID 列表](https://bukkit.windit.net/javadoc/org/bukkit/Sound.html)

---

### material

##### 参数

1. 材质类型 id

##### 作用

获取材质类型

[材质 ID 列表](https://bukkit.windit.net/javadoc/org/bukkit/Material.html)

---

### particleData

##### 参数

1. 类型
2. 参数列表

##### 作用

构建粒子数据

|      类型      |         介绍          |                                   参数                                   |
| :------------: | :-------------------: | :----------------------------------------------------------------------: |
|      dust      |     REDSTONE 数据     |                            \{Color\} in \{size\}                             |
| dustTransition | REDSTONE 颜色转换数据 |                    \{初 Color\} to \{末 Color\} in \{size\}                    |
|     block      |     方块粒子数据      |                          \{Material\} with \{data\}                          |
|      item      |     物品粒子数据      | \{Material\} (with \{data\}) (name \{name\}) (lore \{lore\}) (data \{model data\}) |
|   vibration    |      震动(?)数据      |                 \{初 Location\} to \{Destination\} in \{time\}                 |

> \{size\} 代表粒子尺寸(?) 填小数即可
>
> `( )`内的代表可选，但是要按顺序填
>
> \{time\} 代表运动时间, 填整数 单位为 tick

##### 例子

```
particleData dust [ color [ 255 255 255 ] in 1 ]
```

---

### destination

##### 参数

1. 类型
2. 参数

##### 作用

构建 Vibration 的 Destination

|   类型   |   介绍   |    参数     |
| :------: | :------: | :---------: |
| location | 坐标位置 | \{location\}  |
|  entity  | 实体位置 | \{实体 UUID\} |

##### 例子

`destination &endLocation`
或
`destination uuid &entity`

---

### item

##### 参数

1. 材质类型

##### 作用

构建物品

##### 例子

```
item material 'DIAMOND'
```

---

## 循环结构 [Loop]

### while

##### 参数

1. 条件，返回布尔值的代码块
2. 标签(可选)
3. 代码块

##### 作用

循环执行

##### 例子

```
set array to arrayOf [ 'a' 'b' 'c' ]
set index = -1
set condition to block \{
    set index = calculate '\{&index\} + 1'
    check &index < list &array size
\}
while &condition then \{
    print list &array get at &index
\}
print 'a'

```

打印:

```
a
b
c
a
```

---

### repeat

##### 参数

1. 次数
2. 传入的`当前次数`参数名
3. 标签(可选)
4. 代码块

##### 作用

循环执行固定次数，传入的`次数参数`从 0 开始，每次加 1

##### 例子

```
set array to arrayOf [ 'a' 'b' 'c' ]
repeat 3 with 'index' then \{
    print list &array get at &index
\}
print 'a'

```

打印:

```
a
b
c
a
```

---

### foreach

##### 参数

1. 传入参数名(列表/数组中的元素)
2. 列表/数组
3. 标签(可选)
4. 代码块

##### 作用

遍历列表/数组中的元素，并操作

##### 例子

```
set list to listOf [ 'a' 'b' 'c' ]
foreach item in &list then \{
    print &item
\}
print 'a'

```

打印:

```
a
b
c
a
```

---

### break

##### 参数

1. label 标签(可选)

##### 作用

停止一个循环的执行

##### 例子

```
while \{ true \} lable a then \{
    while \{ true \} lable b then \{
        print 1
        break the a
    \}
    print 2
\}
print 'a'

```

打印:

```
2
a
```

---

### continue

##### 参数

1. label 标签(可选)

##### 作用

跳过当前循环，开始下一次循环

##### 例子

```
repeat 5 then \{
    print 1
    print 2
    continue
    print 3
\}
print 'a'

```

打印:

```
1
2
1
2
1
2
1
2
1
2
a
```

---

## 声明 [Define]

### set

##### 参数

1. 变量名
2. to/= 值

##### 作用

定义变量

##### 例子

`set a to check 1 == 2`

a 赋值为 false
并返回 false

---

### set by lazy

##### 参数

1. 变量名
2. by lazy
3. to/= \{ 代码块 \}

##### 作用

懒汉式定义

##### 例子

`set a by lazy to \{ check 1 == 2 \}`

只定义不赋值，当调用时再赋值
使用`&a`时才开始执行代码块中的内容并赋值`a`

---

### set ifndef

##### 参数

1. 变量名
2. to/= 值

##### 作用

如未定义再定义变量

##### 例子

`set a ifndef to check 1 == 2`

如果变量`a`没有被定义则定义
反之则返回变量`a`的值

---

### block

##### 参数

1. 代码块 (由\{\}包裹)

##### 作用

生成代码块

##### 例子

`block \{ print 1 \}`

---

### &

##### 参数

1. 变量名

##### 作用

取变量

##### 例子

`&a`
若 a 有值，则返回 a 变量的值
否则返回 '&a'

---

### has

##### 参数

1. 变量名

##### 作用

判断是否有此变量

##### 例子

`has a`
若 `a` 已定义，返回`true`
否则返回 `false`

---

## 数字 [Math]

### abs

##### 参数

1. 数字

##### 作用

取绝对值

##### 例子

`abs -100`

返回 100

---

### calculate

##### 参数

1. 公式
2. 参数.... (可选)

##### 作用

计算公式

##### 例子

`calculate '10+20'`

返回 30

---

### ceil

##### 参数

1. 数字

##### 作用

向上取整

##### 例子

`ceil 0.1 `

返回 1

---

### floor

##### 参数

1. 数字

##### 作用

向下取整

##### 例子

`floor 1.1 `

返回 1

---

### format

##### 参数

1. 数字
2. 格式

##### 作用

格式化数字

##### 例子

`format 1.12312 #.### `

返回 1.12

附:

![num_format.png](https:///assets/docs/pouvoir/other/num_format.png)

---

### max

##### 参数

1. 数字 1
2. 数字 2

##### 作用

取两者最大值

##### 例子

`max -100 100 `

返回 100

---

### min

##### 参数

1. 数字 1
2. 数字 2

##### 作用

取两者最小值

##### 例子

`min -100 100 `

返回 -100

---

### random

##### 参数

1. 最小值
2. 最大值
3. 数字格式(可选)

##### 作用

返回区间内随机小数

##### 例子

`random 0 1`

返回 0.66

(format 参数默认为 #.### )

---

### randomInt

##### 参数

1. 最小整数
2. 最大整数

##### 作用

返回两整数区间内的随机整数

##### 例子

`randomInt 1 4 `

返回 2

---

### round

##### 参数

1. 数字

##### 作用

四舍五入

##### 例子

`round 1.233 `

返回 1

---

### weight

##### 参数

1. 权重(整数) to 任意对象 ...

##### 作用

返回权重随机结果

##### 例子

`weight [ 1 to a , 2 to b]`

大概率返回 b

小概率返回 a

---

### randomObj

##### 参数

1. 对象列表(支持键值对)

##### 作用

返回列表中随机对象

##### 例子

`randomObj [ '粗糙的' '破损的' '破碎的' '破残的' '破坏的' ]`

随机返回一个前缀

---

## 字符串 [String]

### analysis

##### 参数

1. 字符串

##### 作用

解析字符串

##### 例子

```
set name to 'Neige'
analysis 'hi! i'm a \{ if check &name == Neige then Neige else Human \} !'
```

返回`hi! i'm a Neige`

---

### replace

##### 参数

1. 字符串
2. 替换列表

##### 作用

替换字符串

##### 例子

```
replace ' 咖啡 是sb' [ '咖啡' to 'Glom_' , 'sb' to '帅逼' ]
```

返回` Glom_ 是帅逼`

## IO

### print

##### 参数

1. 对象

##### 作用

向控制台打印字符串

##### 例子

`print 1`

返回 `1`

---

## 对象 [Object]

### import

##### 参数

1. 类路径

##### 作用

导入类

##### 例子

`import 'com.skillw.attsystem.AttributeSystem'`

返回 类对象 AttributeSystem

---

### getField

##### 参数

1. 对象
2. 字段名

##### 作用

获取实例字段的值

##### 例子

`getField &obj 'a'`

返回对象`obj`的实例字段`a`的值

---

### getFieldStatic

##### 参数

1. 对象
2. 字段名

##### 作用

获取静态字段的值

##### 例子

`getField &obj 'a'`

返回对象`obj`的静态字段`a`的值

---

### setField

##### 参数

1. 对象
2. 字段名
3. 值

##### 作用

设置实例字段的值

##### 例子

`setField &obj 'a' '嗨嗨嗨'`

---

### setFieldStatic

1. 对象
2. 字段名
3. 值

##### 作用

设置静态字段的值

##### 例子

`setFieldStatic &obj 'a' '嗨嗨嗨'`

``

返回

---

### invoke

##### 参数

1. 对象
2. 方法名
3. 参数列表

##### 作用

调用实例方法

##### 例子

`invoke &obj 'get' [ 'key' , 'param2' ]`

返回调用对象`obj`的实例方法`get`后的值

---

### invokeStatic

##### 参数

1. 对象
2. 方法名
3. 参数列表

##### 作用

调用静态方法

##### 例子

`invoke &obj 'get' [ 'key' , 'param2' ]`

返回调用对象`obj`的静态方法`get`后的值

---

### type

##### 参数

1. 类型名
2. 对象

##### 作用

强制将对象转换为另一个类型

##### 例子

`type double '111'`

返回类型为`double`的`111`

附:
类型名 double/int/long/float/short/byte/bool/char/string

---

## 集合 [Collection]

### arrayOf

##### 参数

1. 对象列表

##### 作用

生成数组

##### 例子

`arrayOf [ 1 , 2 , 3 ]`

---

### listOf

##### 参数

1. 对象列表

##### 作用

生成 `List`

##### 例子

`listOf [ 1 , 2 , 3 ]`

---

### mapOf

##### 参数

1. with \{Map 模板\} - Map 模板 (可选)
2. 键值对列表

##### 作用

生成 `Map` 映射对象

##### 例子

`mapOf [ 'a' to 1 , 'b' to 2 , 'c' to 3 ]`

---

### mapTemplate

##### 参数

1. 键列表

##### 作用

生成 `Map模板`

##### 例子

```
set maps to mapListOF with mapTemplate ['品质' '颜色' '材质']
[
    ['粗糙' '&7' 'WOODEN_SWORD']
    ['良好' '&3' 'STONE_SWORD']
]

print maps get at 0 get '品质'
```

打印:

```
粗糙
```

---

### mapListOf

##### 参数

1. with \{Map 模板\}
2. 值列表的列表

##### 作用

需配合`Map模板`使用
生成 `Map` 映射对象的列表(下标从 0 开始)

##### 例子

```
mapListOF with mapTemplate ['品质' '颜色' '材质']
[
    ['粗糙' '&7' 'WOODEN_SWORD']
    ['良好' '&3' 'STONE_SWORD']
]

print maps get at 0 get '品质'
```

打印:

```
粗糙
```

---

### pairOf

##### 参数

1. 键值对

##### 作用

构建键值对

##### 例子

`pairOf 'a' to 1`

---

## >>>From **AttributeSystem**

> `namespace = common`

### attr

- `read \{string list\}` - 读取字符串列表属性
- `readItem \{item\}` - 读取物品属性
- `readLore \{item\}` - 读取物品 lore 属性
- `readNBT \{item\}` - 读取物品 NBT 属性
- `add \{key\} \{attr_data\}` - 给实体添加属性数据 (实体为变量 entity 的值)
- `remove \{key\}` - - 删除实体属性数据 (实体为变量 entity 的值)
- `addItemAttr \{item\} \{key\} \{attr_data\}` - 添加物品的属性数据
- `addItemAttr \{item\} \{attr_data_compound\}` - 添加物品的属性数据
- `removeItemAttr \{key\}` - 删除物品的属性数据

---

> `namespace = attsysem`

### data

##### 参数

- `damage`
  - `get \{key\}` 获取伤害源，返回的是[OperationElement](https://doc.skillw.com/attsystem/com/skillw/attsystem/api/operation/OperationElement.html)
  - `put \{key\} with \{Number Operation\} to \{number\}` 计入伤害源
  - `remove \{key\}` 删除伤害源
  - `has \{key\}` 是否存在伤害源
  - `size` 伤害源总数
  - `clear` 清除伤害源
  - `isEmpty` 是否没有伤害源
  - `keys` 伤害源 key 列表
- `hasResult` 是否命中
- `hasResult to/= true/false` 设置是否命中
- `calMessage` 是否计算战斗信息
- `calMessage to/= true/false` 设置是否计算战斗信息
- `put \{key\} to \{value\}` 存数据
- `get \{key\}` 取数据
- `remove \{key\}` 删除数据
- `has \{key\}` 是否有数据
- `size` 数据总数
- `clear` 清除所有数据
- `isEmpty` 是否没有数据
- `keys` 数据 key 列表

##### 作用

操作战斗数据

##### 例子

`data damage put 'crit' with scalar to 100.0`

---

### in-fight

##### 参数

1. 实体

##### 作用

获取实体是否在战斗中

##### 例子

`in-fight &entity`

---

## >>>From **ItemSystem**

> `namespace = item_system`

### def

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

a 赋值为 false
并返回 false

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

### save

##### 参数

1. 变量名列表

##### 作用

将变量值保存到物品 NBT，供自动更新/重新构建物品时使用

##### 例子

`save [ 'a' 'b' 'c' ]`

---

### syncNBT

##### 参数

1. NBT 路径

##### 作用

同步物品 NBT 的值

##### 例子

`syncNBT '耐久.当前耐久'`

---

### dynamic

##### 参数

1. `\{ 内联函数段 \}`

##### 作用

动态内联函数段

##### 例子

`dynamic \{ calculate '\{item nbt ' 耐久.当前耐久'\} * 100' \}`

---

### papi

##### 参数

1. 文本

##### 作用

(实体对象为名为 `entity` 变量的值)
解析文本的占位符

##### 例子

`papi '%player_level%'`

---

### mmskill

##### 参数

1. 技能名
2. with power

##### 作用

(实体对象为名为 `entity` 变量的值)
实体释放 MM 技能

##### 例子

`mmskill 'ExampleSkill' with 1.5`

---
