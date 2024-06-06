---
title: Asahi 调度模块
tags:
 - Asahi
category: 'docs'
---

# 调度模块


```yaml

ExampleTrigger:
  #triggers即为该调度器监听的事件
  #这里的事件名称对应Bukkit中的事件类名(去掉Event,单词首字母改为小写并用空格隔开)
  #例如 PlayerInteractEntityEvent 对应 player interact entity
  triggers: [ player interact entity ]
  #监听事件的优先级,优先级一共有六种，按监听顺序排列如下：
  #HIGHEST,HIGH,NORMAL(默认),LOW,LOWEST,MONITOR
  priority: NORMAL
  #context顾名思义，为后续的所有处理脚本提供上下文
  #比如在这里定义了player，则在后续脚本中可以用&player调用
  #定义方法 @event即事件实例，event的getter被简化
  #比如Java中的event.getPlayer()方法在这里使用
  #@event player即可调用
  context:
    player: "@event player"
    entity: "@event rightClicked"
  #namespaces规定脚本所处的“命名空间”
  #关于命名空间在kether中有所介绍
  #lang,common(基本命名空间)自动导入
  namespaces: [ bukkit ]
  #检测条件，若条件不满足则不调用任何处理
  condition: "@event isCancelled"
  #TabooLib的阻断器，用于阻断事件的频繁处理
  #详见Vulpecula(www.yuque.com/lanscarlos/vulpecula-doc/event-handle-start)
  baffle:
    based-on: player
    time: 5s
    #count: 5
  #functions 即时声明函数并在下文中用call调用
  functions:
    main: |-
      tell &player '芝士一个function例子'
  #pre-handle为预处理，即调用处理模块前执行的内容
  pre-handle: |-
    tell &player '你与实体${entity displayName}交互了! (此消息每5秒只能触发一次)'
  #post-handle为后处理，即调用处理模块后执行的内容
  #如你所见，脚本内容可以是JavaScript，也可以是Asahi
  post-handle:
    type: js
    content: |-
      this.context.player.sendMessage("处理完了!")
  #处理失败时执行
  exception: |-
    warning '触发器 my trigger 处理失败! 具体报错请看后台!'
  #还有个import，暂时不知道是干什么的

```
