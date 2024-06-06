---
title: Pouvoir更新日志
tags:
 - Pouvoir
category: 'docs'
---
# Pouvoir 更新日志


## 1.0.0 - 2021 年 8 月 16 日

全面用 kt 重构代码(从 RPGLib)
性能大幅提升

---

## 1.0.1 - 2021 年 9 月 12 日

最新 Tlib
修复一大堆 bug

---

## 1.0.2 - 2021 年 9 月 30 日

修复了重载 指令注册等问题
最新 TLib

---

## 1.0.3 - 2022 年 1 月 8 日

修复了脚本监听器注册失败的 bug
修复了初始化 SubPouvoir 失败的 bug
修复了自动补全脚本名的 bug
添加了 on-init on-load on-enable on-active on-reload on-disable 等时刻供调用脚本
更新了语言文件
最新 TLib
为 AttributeSystem RandomItem III 提供了部分支持

---

## 1.0.4-2022 年 1 月 24 日:

修复了 函数系统 可能会引起的 bug
修复了 ConfigManager
优化了用户体验
兼容 RI III
添加了大量方法（）

---

## 1.0.5-2022 年 1 月 31 日:

升华了 ScriptManager
升级了 ConfigManager 默认配置
支持了 ES6 标准
优化了用户体验

---

## 1.0.6-2022 年 2 月 2 日:

添加了部分方法
兼容了最新版 RI3
优化了用户体验

---

## 1.0.7-2022 年 2 月 4 日:

添加了 Hologram API (纯发包)
兼容了最新版 RI3
优化了用户体验

---

## 1.1.0-2022 年 2 月 6 日:

支持了 Groovy
添加了脚本注解系统
优化了字符串内嵌函数系统
优化了用户体验

---

## 1.2.0-2022 年 2 月 11 日:

优化 API
修复了监听器注解的相关 bug (稳定了，快去用)
支持了字符串内嵌函数的嵌套

---

## 1.2.2-2022 年 2 月 12 日:

兼容了高精度数字运算

---

## 1.2.3-2022 年 2 月 12 日:

优化了一些代码

---

## 1.2.4-2022 年 2 月 20 日:

兼容 AttributeSystem

---

## 1.2.5-2022 年 2 月 24 日:

修复与部分插件不兼容问题

---

## 1.2.6-2022 年 3 月 6 日:

修复 spigot 核心下 玩家进入服务器验证失败
修复 calculate 函数中嵌套括号问题 （请用 [] ）

---

## 1.2.7-2022 年 3 月 11 日:

实时玩家数据库
优化报错提示

---

## 1.2.8-2022 年 3 月 20 日:

### 兼容

## 1.18

添加 debug (config 里 option.debug)

---

## 1.2.9-2022 年 3 月 21 日:

优化用户体验

---

## 1.2.12-2022 年 5 月 29 日:

修复脚本指令初始化 bug

---

## 1.3.0-2022 年 6 月 12 日:

API 没变，优化了大量代码

---

## 1.3.1-2022 年 6 月 17 日:

KT 版本退到 1610

---

## 1.3.2-2022 年 6 月 21 日:

ScriptTool 中 ProtocolLib 相关代码移至 ProtocolTool 中 (脚本中请用 PTool 来调用 PLib 相关函数)

---

## 1.3.2-fix-2022 年 6 月 22 日:

KT 版本退到 1610 (忘退了

---

## 1.3.3-2022 年 7 月 15 日:

更优雅的代码
优化调度器系统

---

## 1.3.4-2022 年 7 月 15 日:

监听器注解修复（忘加了草）

---

## 1.4.0-2022 年 7 月 26 日:

**巨大改变**

#### 重构:

大量底层代码
SubPouvoirHanlder 附属插件解析器
ScriptManager 脚本管理器
ScriptEngineManger 脚本引擎管理器
ScriptAnnotationManager 脚本注解管理器

#### 新增

脚本顶级成员(支持类 静态字段 静态方法)
ContainerManager (from TabooLib6) 持久化容器管理器
自动注册系统
脚本文件注解

###### 现在脚本中引入类的方法:

- find(String) :StaticClass 通过路径寻找静态类实例
- static(String) :StaticClass 通过类名在 Map 中直接获取静态类实例 (如果类名唯一，就用这个吧)
  事件: ManagerEvent

#### 优化

用户体验(debug)
Map 工具类
ManagerSystem
Hologram System (from Adyeshach) 全息系统
附属插件处理系统

#### 改变

FunctionManager 已更名为 InlineFunctionManger

#### 兼容

1.18
支持 Nashorn 中顶级函数调用时参数中 js 函数转 Kotlin 的 Function

---

## 1.4.1-2022 年 7 月 31 日:

#### 重构

脚本调用系统
Map 工具类

#### 支持

高并发调用脚本
可取消式脚本任务

#### 优化

用户体验

###### 回退 TLib6 至 6.0.9-35

---

## 1.4.1-fix-2022 年 7 月 31 日:

#### 兼容全息

Adyeshach
DecentHolograms

###### 如果你的服务器不支持 Pouvoir 原生的全息，请安装 Adyeshach 或 DecentHolograms

---

## 1.4.2-2022 年 8 月 4 日:

#### 重构

字符串内嵌函数
现在旧的和新的函数系统都支持

### 修复

EntityRayHit 算法

---

## 1.4.3-2022 年 8 月 6 日

#### 新增

Placeholder 注解

---

## 1.4.4-2022 年 8 月 6 日

#### 新增

`AutoRegister` 的 `test` 构造参数

兼容 1.19.1(未测试)

---

## 1.4.5-2022 年 8 月 7 日

#### 新增

`analysis` 函数，用于解析字符串

#### 修改

现在解析一段文本时的**上下文**会是它的**父上下文**

---

## 1.4.6-2022 年 8 月 12 日

#### 优化

预编译内联函数

#### 新增

新增内联函数

> / 或
> ()中的是可选
> \{\}参数
> []数组
> \{ \} 代码块

#### Def

- has \{key\} 是否有此变量
- set \{key\} by lazy (to/=) \{ \} 懒汉式定义
- set \{key\} ifndef (to/=) \{value\} 如未定义再定义

#### Obj

- import \{class path\} 获取静态类对象
- getField \{obj\} \{field name\}
- getFieldStatic \{obj\} \{field name\}
- invoke \{obj\} \{method name\} [ '参数 1' , '参数 2' ]
- invokeStatic \{obj\} \{method name\} [ '参数 1' , '参数 2' ]
- setField \{obj\} \{field name\} \{any\}
- setFieldStatic \{obj\} \{field name\} \{any\}
- type double/int/long/float/short/byte/bool/char/string \{any\} 强转转换

#### Logic

- all [ bool1 , bool2 , bool3 ] 满足所有
- any [ bool1 , bool2 , bool3 ] 满足其一
- not \{bool\} 取反
- return \{any\} 返回

#### Bukkit

- permission \{entity\} [ 'a.b.c' , 'c.b.a' ] 是否有权限
- sound \{sound\} \{location\}/[ 'world' , x , y , z ] (with \{volume\} \{pitch\}) 播放声音

#### Loop

- while \{condition\} (lable \{lable\}) \{ \} 循环
- break (the \{lable\})
- continue (the \{lable\})

#### Collection

- arrayOf [ a , b , c ] 数组
- listOf [ a , b , c ] List
- list \{list\} set \{any\} at \{index\}
- list \{list\} get at \{index\}
- list \{list\} remove at \{index\}
- list \{list\} add \{any\}
- list \{list\} contains \{ant\}
- list \{list\} size/clear/isEmpty/toArray/toString

#### String

- print \{any\} 打印
- replace \{string\} [ '你要替换的内容' to '替换后的' , 'a' to 'b' ] 替换

---

## 1.4.7-2022 年 8 月 13 日

#### 重构

容器系统

#### 新增函数

- block \{ \} 代码块对象
- foreach
- repeat

具体看函数列表吧

## 1.5.0-2022 年 8 月 27 日

#### 重构

**内联函数系统**的**解释器**
(累死劳资)

#### 新增

**动作系统**
一些**函数**
详见:

- [**函数列表**](https://other/functions)
- [**动作列表**](https://other/actions)

#### 修复

1.18 全息实体回收问题
