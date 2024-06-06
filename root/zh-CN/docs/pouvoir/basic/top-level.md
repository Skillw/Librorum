---
title: Pouvoir-顶级成员
tags:
 - Pouvoir
category: 'docs'

---

# 顶级成员



在编写 js 脚本时，会有许多不便之处，例如非常冗长的类名，如果需要使用的话要写下完整包名，

为了缓解这种不便，**Pouvoir 1.4** 提供了**顶级成员**供脚本编写者使用

### 什么是顶级成员

在**Pouvoir**中，顶级成员包括

- 静态类
- 静态属性
- 静态方法

在脚本中，他们可以直接被调用

### 能干什么？

顶级成员可以提高你的脚本编写速率

就像下面这个例子

```javascript
//static就是一个顶级函数 可以快速获取类对象
var Coere = static("Coere");
function isNum(numStr) {
  return Coere.asDouble(numStr).isPresent;
}
```

### 都有哪些？

通过**顶级函数** `checkUsableVars` 在后台打印**Pouvior**及其它插件提供的顶级成员列表：

```javascript
function printTopLevel() {
  checkUsableVars();
}
```

**Pouvoir**默认了一些常用的函数:

```javascript
// ? 代表可空 也就是可以填null
// 若顶级函数有多个参数，使用时需要把参数们用 [] 括起来
// 函数 : 的后面是返回值类型
// JsArray就是将值用 [] 括起来 如 [1,2,3]
function arrayOf(JsArray) : Array<Any?> //js数组 转 java数组
function listOf(JsArray) : MutableList<Any?> //js数组 转 List

function analysis(String): String //解析字符串内嵌函数
function placeholder(String,entity): String  //解析字符串内占位符(papi&pou)
function color(String): String //解析字符串内颜色
function calculate(formula,Player?,Map?): BigDecimal //计算公式，支持带入papi&pou占位符，支持Map<String,String>替换

function find(path) : StaticClass?  //查找静态类
function static(path) : StaticClass? //获取静态类

function info(Object?) //控制台打印文字
function warning(Object?) //控制台打印警告
function debug(String) //当Pouvoir在debug模式时才打印

//时间单位均为 tick
//Consumor 表示 接受一个参数 无返回值
//Supplier 表示 无参数 有返回值
function task(Consumor<PlatformTask>) //同步任务
function taskLater(delay,Consumor<PlatformTask>) //延时同步任务
function taskTimer(delay,period,Consumor<PlatformTask>) //延时定时同步任务

function taskAsync(Consumor<PlatformTask>) //异步任务
function taskAsyncLater(delay,Consumor<PlatformTask>) //延时异步任务
function taskAsyncTimer(delay,period,Consumor<PlatformTask>) //延时定时异步任务

function sync(Consumor<PlatformTask>) //异步时快速跳回同步 (同步不要用，会堵塞线程)

    // public interface PlatformTask {
    //     public abstract fun cancel(): kotlin.Unit
    // }
//                  String
function monitorNow(key,Supplier<Any?>):Any? //监控函数执行耗时
//                   String
function mirrorFuture(key,Consumor<MirrorFuture<Any?>>): Any? //监控函数执行耗时
    // class MirrorFuture<T> {

    //     internal val time = System.nanoTime()
    //     internal val future = CompletableFuture<T>()

    //     fun finish(any: T) {
    //         future.complete(any)
    //     }
    // }
const Bukkit = find('org.bukkit.Bukkit')
const Arrays = find('java.util.Arrays')
const Tool = find('com.skillw.pouvoir.api.script.ScriptTool   ')     //工具类
const Data = find('com.skillw.pouvoir.api.script.ScriptTool.INSTANCE') //数据类
const Pouvoir = find('com.skillw.pouvoir.Pouvoir')
const CalculationUtils = find('com.skillw.pouvoir.util.CalculationUtils')
const MapUtils = find('com.skillw.pouvoir.util.MapUtils')
const ColorUtils = find('com.skillw.pouvoir.util.ColorUtils')
const EntityUtils = find('com.skillw.pouvoir.util.EntityUtils')
const FileUtils = find('com.skillw.pouvoir.util.FileUtils')
const ItemUtils = find('com.skillw.pouvoir.util.ItemUtils')
const GsonUtils = find('com.skillw.pouvoir.util.GsonUtils')
const MessageUtils = find('com.skillw.pouvoir.util.MessageUtils')
const NumberUtils = find('com.skillw.pouvoir.util.NumberUtils')
const PlayerUtils = find('com.skillw.pouvoir.util.PlayerUtils')
const ClassUtils = find('com.skillw.pouvoir.util.ClassUtils')
const StringUtils = find('com.skillw.pouvoir.util.StringUtils')
```
