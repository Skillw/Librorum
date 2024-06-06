---
title: Pouvoir-指令
tags:
 - Pouvoir
category: 'docs'

---

# 指令



给个例子，请看注释

```javascript
var Player = find("org.bukkit.entity.Player");
//@Awake(Enable)
//@Awake(Reload)
function test() {
  print("你的脚本从这里开始");
  //Code
  //Tool是Pouvoir提供的脚本工具类，你可以在此查阅到http://doc.skillw.com/pouvoir/com/skillw/pouvoir/api/script/ScriptTool.html
  //这里返回的是 PluginCommand，你可以查阅bukkit.windit.net/javadoc/org/bukkit/command/PluginCommand.html
  var command = Tool.command("example");
  //借用莫老的教程
  //sender -> 命令发送者
  //command -> 命令的对象
  //label -> 命令发送者实际输入的指令
  //args -> 命令后所跟的参数 如/demo a b c 则后面的 a b c 就是args对应过来的 args[0],args[1],args[2]
  command.setExecutor(function (sender, command, label, args) {
    //如果发送者没有 "example" 权限 就不执行了
    if (!sender.hasPermission("example")) return true;
    if (!(sender instanceof Player)) {
      // 判断输入者的类型 为了防止出现 控制台或命令方块 输入的情况
      sender.sendMessage("你必须是一名玩家!");
      return true; // 这里返回true只是因为该输入者不是玩家,并不是输入错指令,所以我们直接返回true即可
    }
    sender.sendMessage("你成功的执行了指令/demo");
    return true; // 返回true防止返回指令的usage信息
  });

  //定义命令后还需要注册
  Tool.regCommand(command);
  //注意一下，如果你是Spigot用户, 这里需要同步注册指令
  //task(function(){Tool.regCommand(command);})
}
```

### 使用

控制台:

![console](https:///assets/docs/pouvoir/basic/console_command.jpg)

玩家:

![player](https:///assets/docs/pouvoir/basic/player_command.gif)

### 附

本节只是讲如何利用 Pouvoir 的工具类注册指令，并没有细讲，如果有需要可以百度深造。
