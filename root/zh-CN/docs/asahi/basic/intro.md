---
title: Asahi 结构总论
tags:
  - Asahi
category: 'docs'
---

# 基本结构

---
:::tip 必备基础
由于Asahi结构的特性，在学习Asahi使用的过程中，你不可避免地要接触**类**,**对象**等Java中的基础知识，但是不需要深入了解，知道是什么就足够了。

**wiki暂时不会对Java基础相关内容作讲解。**
:::
Asahi总体上由触发与执行两部分组成。通俗地说就是“当...时(触发)，做...事情(执行)”

与[Vulpecula](https://www.yuque.com/lanscarlos/vulpecula-doc/event-handle-start)类似的，触发部分主要由 **调度模块(dispatchers)** 和 **处理模块(handlers)** 来负责完成。

**调度模块(dispatchers)** 监听到事件发生后调用其相应 **处理模块(handlers)**

# 语法结构

一段Asahi脚本在编译执行时会先转化为一系列的**Token**，之后**不同命名空间的前缀解释器**和**中缀解释器**、**类型解释器**等解释器解释**Token**
最终转化为脚本返回的结果

---

## 命名空间(namespace)

与kether类似的，asahi通过namespace(命名空间)来管理不同来源的语句，防止冲突
你可以在脚本中使用  **命名空间::该命名空间内的前缀解释器**  来调用指定命名空间的前缀解释器

```yaml
bukkit::damage &player 10 by &entity
```

## 解释器(Parser)

解释器即为**解释代码含义，返回指定对象**的工具

### 前缀解释器

类似Minecraft中的命令，关键字在前
比如Math中的
```yaml
log 5 25 将返回以5为底，25的对数
```

### 中缀解释器

类似1+1这样的算式，关键字在中间
比如Bukkit中的
```yaml
&entity teleport to &player
```

### 类型解释器

解析特定类型
比如集合
```yaml
[ "Glom" to "咕咕咕?" , "Neige" to "神" , "紫马布鲁" to "诗远" ]
```

