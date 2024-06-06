---
title: Asahi 介绍
id: intro
tags:
 - Asahi
category: 'docs'
---

Asahi 是由 Glomzzz 所开发的基于 Taboolib 的、高速编译执行的动态脚本语言。通过调度器+处理器的事件处理系统和前缀、中缀解释器，Asahi以简单的语句、
优良的性能实现诸如定时任务、原版和其他插件的机制修改等本需要编写插件才能实现的内容。

---

对于一些可扩展API，**Pouvoir** 提供了脚本拓展

并使用脚本注解进行自动注册注销

详细请见WIKI

#### Asahi 前缀解释器拓展 (Asahi Prefix Parser Extension)

```javascript
//@AsahiPrefix(-name example)
function example(lexer) {
    var numberQuester = lexer.questDouble()
    return result(function (context) {
        var number = numberQuester.get(context)
        print(number)
        return number
    })
}
```

亦或者

```kotlin
@AsahiPrefix(["print", "info"], "lang")
fun info() = prefixParser {
        //开始此函数的"编译"(parse)
        val content = quest<Any>()  //寻求一个任意类型对象
        // result里是执行函数时，要干的事情
        result {
            content.get().also {
                //打印它
                println(it)
            }
        }
    }
```

使用:

```kotlin
 println("example 114.514".asahi())
```

打印: 114.514

## 相关链接
---
GitHub [github.com/Skillw/Pouvoir](https://github.com/Skillw/Pouvoir)

JavaDoc [http://doc.skillw.com/pouvoir/](https://http://doc.skillw.com/pouvoir/)

MCBBS [www.mcbbs.net/thread-1221977-1-1.html](https://www.mcbbs.net/thread-1221977-1-1.html)

爱发电 [afdian.net/@glom\_](https://afdian.net/@glom_)
