---
title: Pouvoir-脚本监听器
tags:
 - Pouvoir
category: 'docs'

---

# 脚本监听器



本节改编自 [bdn.tdiant.net/#/unit/2-2](https://bdn.tdiant.net/#/unit/2-2)

---

### 事件的监听

事件是服务器里发生的事.
例如, 天气的变化, 玩家的移动. 玩家把树打掉, 又捡起了掉落地上的原木. 这些都是事件.

事件分为可控事件和不可控事件. 其最大区别在于能不能取消*(也就是能不能 setCancelled).*
不难理解, 玩家如果退出服务器, 这不能被取消, 它是不可控事件. 玩家的移动可以被取消, 它是可控事件.

BukkitAPI 给了一些基本的服务器事件. 大多数情况下可以满足我们的需求.
本章以用脚本监听这些事件为例, 讲述事件的监听如何实现.

### 脚本监听器(Script Listener)

脚本监听器实质上是一个带`@Listener`注解的脚本函数
当服务器某个事件触发后, 例如玩家移动事件, 服务器就会创建一个对应的`PlayerMoveEvent`对象, 如果你的脚本有注册并正在监听该事件的监听器, 那么 Pouvoir 会按照`@Listener`注解找到对应的函数并调用, 你的脚本因而便可监听到玩家移动事件了.

我们以一个登录插件作为展开, 写一个“玩家不登录就不允许移动”的插件出来.
这里我们设定玩家“只要右键空气就可以登录”.

```javascript
//@Awake(Reload)
function onReload() {
  if (typeof this.playerNameList == "undefined") {
    this.playerNameList = new java.util.HashSet();
  }
}

/* 功能一：刚进入服务器的玩家都记录到“小本本”playerNameList上，他们是没登录的玩家 */
// 这个脚本注解告诉Pouvoir这个函数正在监听PlayerJoinEvent事件
//@Listener(-event org.bukkit.event.player.PlayerJoinEvent)
function onPlayerJoin(event) {
  // 玩家登录服务器时 Bukkit就会调用这个函数
  if (!playerNameList.contains(event.player.name)) {
    // 先判断这个玩家的名是不是记过了
    playerNameList.add(event.player.name); // 玩家一登录就给他记上名, 代表他没登录
  }
}

/* 功能二：没登录的玩家不让移动 */
//@Listener(-event org.bukkit.event.player.PlayerMoveEvent)
function onPlayerMove(event) {
  //玩家移动时Bukkit就会调用这个函数
  if (playerNameList.contains(event.player.name)) {
    event.setCancelled(true); //判断玩家是不是没登录, 是则取消事件
  }
}
/* 功能三：没登录的玩家禁言 */
//                                                                调优先级
//@Listener(-event org.bukkit.event.player.AsyncPlayerChatEvent)
function onPlayerChat(event) {
  //玩家说活时Bukkit就会调用这个函数
  if (playerNameList.contains(event.player.name)) {
    event.setCancelled(true); //判断玩家是不是没登录, 是则取消事件
  }
}

// 功能四：右击空气登录（本质就是从playerNameList把他删了)                           无视取消
//@Listener(-event org.bukkit.event.player.PlayerInteractEvent -priority LOWEST --ignoreCancel)
function onPlayerInteract(event) {
  // 玩家交互时会调用这个函数
  if (event.action.name() == "LEFT_CLICK_AIR") {
    // 判断是不是右键空气
    playerNameList.remove(event.player.name);
  }
}
```

从上面的代码我们可以看出每一个事件都对应着一个`XXXEvent`对象. 事件类都以`Event`作为名称的结尾.

脚本里由若干个带`@Listener`注解, 参数仅为一个`event`的函数. 这些事件触发后会触发这些函数, 这就是事件监听的本质.
要特别注意, 监听器中带有`@Listener`的函数一个只能监听某一个事件, 而不能监听多个事件! 换而言之, 这也就意味着, 你不能填写两个参数, 实现一个函数同时监听两个事件的目的!

#### 效果

![player_login](https:///assets/docs/pouvoir/basic/player_login.gif)
