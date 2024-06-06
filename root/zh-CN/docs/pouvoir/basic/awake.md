---
title: Pouvoir-何时醒来?
tags:
 - Pouvoir
category: 'docs'

---

# 何时醒来?


在 JS 中，一段写好的程序该从哪里开始执行？

Pouvoir 提供了一套仁杏化的脚本注解—— @Awake (没错和 TLib6 那个很像)

### 如何使用？

一个脚本的编译，调用离不开 **Pouvoir** 的 **ScriptManager**(脚本管理器)，所以要将函数与其生命周期进行绑定

```javascript
//@Awake(Enable)
//@Awake(Reload)
function test() {
  print("你的脚本从这里开始");
  //Code
}
```

![awake.jpg](https:///assets/docs/pouvoir/basic/awake.jpg)

可见，想让一个函数在**ScriptManager**的某些**生命周期**被自动调用，需要使用`@Awake`

#### Pouvoir 的生命周期

[ManagerTime](https://http://doc.skillw.com/pouvoir/com/skillw/pouvoir/api/event/ManagerTime.html)

| 生命周期(不论大小写) | 对应阶段         |
| -------------------- | ---------------- |
| BEFORE_LOAD          | 管理器加载前     |
| LOAD                 | 管理器加载时     |
| BEFORE_ENABLE        | 管理器启用前     |
| ENABLE               | 管理器启用时     |
| BEFORE_ACTIVE        | 服务器完全启用前 |
| ACTIVE               | 服务器完全启用后 |
| BEFORE_RELOAD        | 管理器重载前     |
| RELOAD               | 管理器重载后     |
| BEFORE_DISABLE       | 管理器卸载前     |
| DISABLE              | 管理器卸载后     |

<br/>

> 你应该在 Enable 时完成脚本的所有准备工作，例如命令注册
>
> Active 时调度器才开始工作

<br/>

### AwakeType 参数

如果你想判断函数是在哪个定义周期被调用的，就要用到 **Awake Type**

```javascript
//@Awake(Enable)
//@Awake(Reload)
function test(awakeType) {
  print("你的脚本从这里开始: " + awakeType);
  //Code
}
```

awakeType 是 **当前生命周期的大写名称**
