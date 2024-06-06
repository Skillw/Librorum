---
title: Asahi namespace:Lang
tags:
 - Asahi
category: 'docs'
---

# Lang命名空间

## 前缀解释器
---
### 基础语法

#### **null**
顾名思义，返回null
#### **pass**
返回空字符串 ""
#### **布尔值**
true,false
#### **return**
设定函数返回值
#### **exit(stop)**
执行退出程序回调函数
#### **代码块**
代码块用{}包裹
#### **命名空间导入**
using 命名空间数组 导入指定命名空间

`using [ bukkit , regex ]`

unusing 命名空间 移除指定命名空间，用于防止语句冲突

`unusing regex`

### 函数

#### **fun(def)**
顾名思义，声明函数
~~(伟大的圆括号!)~~
```yaml
fun callDamage ( amount player ) = {

   damage &entity &amount by &player 

}
```

#### **invoke(call)**
顾名思义，调用函数
```yaml
fun main = {

    invoke callDamage [ 60 , &player ]

}
```


#### **import**

导入其它脚本文件的上下文

路径似乎是一种相对路径: 类似这样 /plugins/Pouvoir/scripts/test.asahi

```yaml
import [ /plugins/Pouvoir/scripts/test.asahi , /plugins/BuffSystem/scripts/test2.asahi ]
```

### 变量

#### **set**
顾名思义，设置变量
```yaml
#set 变量名 =(to) 值
set neige = "南山道人"
#set 变量名 ifdef =(to) 值  如果变量已存在就不重新定义，并返回已存在的值
set glom ifdef = "咕咕咕"
#set 变量名 by lazy =(to) 代码块  类似Kotlin中的 by lazy 只有在获取时才执行代码块中的内容并取值
set zimaBlue by lazy = {
  print "诗远"
  return "紫马布鲁"
}

```
#### **has**
顾名思义，看看有没有这个变量
#### **get**
顾名思义，取出这个变量
#### **delete**
顾名思义，删除这个变量
```yaml
if has glom then {
  get glom
  delete glom
}
```

### 流程控制-条件

#### **if**
if都不会用就紫砂吧
```yaml
if check 1 < 2 then {
  print "1显然小于2"
} else {
  print "数学不存在了"
}
```
#### **condition**

#### **switch(when)**
```yaml
print switch of "Glom" {
  case == "Glom" -> "咕咕咕"
  else -> "Glom!"
}
```

### 流程控制-循环

#### **_label_**
任何循环都可以加入label(标签)用于标识循环
```yaml
#这里如果不写标签，break就会产生歧义
repeat 1 with index label "outer" then {
  while check &entity health > 0 label "inner" then {
    damage &entity 1
    if check &entity velocity == 0 then {
      break "inner"
    }
  }
}
```
#### **while**
```yaml
while check &entity health > 0 then {
  damage &entity 1
}
```
#### **repeat**
指定循环间隔，并提供循环次数
repeat 间隔 with 次数变量
```yaml
repeat 1 with index label "outer" then {
  print "循环，第 ${&index} 次"
}
```
#### **for(foreach)**
用于遍历集合
```yaml
set array = [ "唧唧复唧唧" , "木兰当户织" , "问女何所思" , "问女何所忆" ]
for poem in array then {
  print &poem
}
```
### 数字操作

abs 值(Number)

ceil 值(Double) 向上取整

floor 值(Double) 向下取整

round 值(Double) 四舍五入取整

format 值(Number) 格式(String) 格式化数字 格式类似"#.##"

max 值 to 值 返回二者之间的最大值

min 值 to 值 返回二者之间的最小值

max 值数组 返回数组中最大值

min 值数组 返回数组中最大值

range 值(Double) to/~/.. 值(Double)  返回一个范围

number 值 将值转换为数值
### 数学运算
三角函数名 值(弧度制)

sin cos tan asin acos atan 

对数函数名 底数值 值

log 3 9

ln 9 

lg 10

log2 8
### 随机数
#### **random**
random 值(Double) to 值(Double)

randomInt 值(Int) to 值(Int)

randomObj 值(List) 从集合里随机取一个元素

#### **weight**
带权重随机

weight [ 权重(Int) to 值 , 权重(Int) to 值 ] 直接取出随机后的值

weight [ 权重(Int) to 值 , 权重(Int) to 值 ] build 类似lazy，返回taboolib.common5.RandomList 需要取值时调用其random函数 ~~(这玩意有什么意义...)~~
```yaml
print weight [ 10 to "Glom" , 20 to "Neige" , 20 to "紫马布鲁" ]

```

### Java对接

#### **java**
导包
```yaml
#从包package中获取所有的Class，之后用Class名调用
java in com.skillw.pouvoir.util
#获取单个class
java of com.skillw.pouvoir.util.EntityUtil
```

#### **new**
实例化一个类
```yaml
new ItemStack ( Material.AIR )
```
### 持久化容器
持久化容器用于存储一些不会在服务器关闭/玩家退出后消失的数据。
持久化容器依靠数据库，存储表格式(有行和列)的数据结构
#### **userdata**
操作UserBased类型的容器
:::tip UserBased
UserBased是一种基于用户的容器

其容器特征有：

列名只有 username key value

一一对应，username key不可重复
eg.
| username | key | value |
| -------- | ------ | --------------- |
| Glom   | 马内 | -100 |
| Glom   | 状态 | 上学 |
| Glom   | 作品 | Pouvoir,AttributeSystem,BuffSystem... |
:::
```yaml
#[]内为可选参数
userdata [of 值(UserBased)] user set key to value #若不填入of 值(UserBased)则使用Pouvoir自带容器
userdata [of 值(UserBased)] user get key
userdata [of 值(UserBased)] user contains key
userdata [of 值(UserBased)] user delete key
```
### 工具

#### **debug**
```yaml
debug on compile #开启编译时调试
debug on eval #开启执行时调试
debug off compile #关闭编译时调试
debug off eval #关闭执行时调试
debug context #获取上下文
debug bean info #显示所有AsahiClassBean(com.skillw.asahi.internal.util.AsahiClassBean)信息 
debug bean info of 类名 #显示特定AsahiClassBean信息
debug bean load 类名 #加载特定AsahiClassBean并返回
#还有一堆，想看自己翻源码(com.skillw.asahi.internal.namespacing.prefix.lang.util.PrefixDebug)看吧，大部分人也就用用前两个了
```
#### **gson**
```yaml
gson encode 值 #将特定对象序列化为gson文本
gson decode 值(String) of 类型 #将gson文本反序列化为特定类型的对象
```
#### **analysis(inline)**
解析文本中的Asahi 例如:

"测试Asahi: {random 0 to 1}" 返回: "测试Asahi: 0.88"
```yaml
#目前有更加快捷的方式来实现字符串解析——字符串模板
test: |-
  inline "测试Asahi: {random 0 to 1}"
  inline all [ "测试Asahi: {random 0 to 1}" , "测试Asahi2: {random 0 to 1}" ]
```
#### **type**
强转类型
```kotlin
//type 类型 值
//type double 10
//类型表
when (type.get()) {
    "double" -> Coerce.toDouble(obj)
    "int" -> Coerce.toInteger(obj)
    "long" -> Coerce.toLong(obj)
    "float" -> Coerce.toFloat(obj)
    "short" -> Coerce.toShort(obj)
    "byte" -> Coerce.toByte(obj)
    "bool" -> Coerce.toBoolean(obj)
    "char" -> Coerce.toChar(obj)
    "string" -> Coerce.toString(obj)
    else -> obj
}
```
#### **date**
返回当前时间
```kotlin
//date in 时间单位 
//时间单位
when (typeGetter.get()?.lowercase()) {
    "year" -> "yyyy"
    "month" -> "MM"
    "day" -> "dd"
    "time" -> "HH:mm:ss"
    "timeDetail" -> "HH:mm:ss.SSS"
    else -> "yyyy年MM月dd日 HH:mm:ss"
}
```
#### **time**
返回当前时间
```yaml
time as 时间格式
yyyy为年 MM为月 dd为日 HH小时 mm分钟 ss秒 SSS毫秒
time as "yyyy年MM月dd日 HH:mm:ss"
```
#### **currentTick**
返回当前tick
```yaml
currentTick
```
## 中缀解释器
---
