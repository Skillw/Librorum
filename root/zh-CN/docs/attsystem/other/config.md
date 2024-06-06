---
title: 'AttributeSystem 配置文件'
tags:
 - AttributeSystem
category: 'docs'
---

## 配置文件

### config.yml

```yaml
options:
  debug: false
  #生命值缩放
  health-scale: 20
  fight:
    #实体与实体间的战斗
    eve-fight-cal: false
    #战斗时间禁生命恢复系统
    disable-regain-on-fight: false
    #忽视枪械插件的伤害计算
    skip-crash-shot: true
    attack-speed:
      #cooldown 物品冷却
      #vanilla 原版攻击速度机制
      type: cooldown
      #任何时间都能攻击(冷却不结束，就不能攻击)
      #伤害会被蓄力机制影响
      damage-any-time: true
      #蓄力机制 (已度过冷却时间/总时间)
      attack-force: true
      #最小蓄力值 若蓄力开启 且 蓄力值小于此值则伤害取消
      min-force: 0.05
      #不冷却的材质
      no-cooldown-types:
        - "BOW"
        - "CROSSBOW"
    #无伤间隔/ 无敌帧
    #一个玩家打一次怪物 会有n tick 不能再伤害怪物
    no-damage-ticks:
      disable-world:
        - "example_world"
      #tick
      value: 5
    fight-status:
      #战斗状态持续时间
      #tick
      time: 100
    #是否开启原版最大生命值 (若不开启则完全接管)
    vanilla-max-health: true
    #是否开启原版移速 (若不开启则完全接管)
    vanilla-movement-speed: true
    #是否开启原版攻速 (若不开启则完全接管)
    vanilla-attack-speed: false
    #是否计算原版护甲
    vanilla-armor: true
    #是否开启原版回血
    vanilla-regain: true
    #这俩配置是为了用户能最大化定义距离攻击
    #比如说关闭这两个 自己写个特效机制
    distance-attack:
      #距离攻击的特效
      effect: true
      #距离攻击的声音
      sound: true
    #默认攻击距离
    #这里填原版的数值
    #如果有偏差会导致 “二次伤害” 的触发
    vanilla-distance:
      default: 3
      creative: 4.5
    #禁止直接普攻的材质
    disable-damage-types:
      - "BOW"
      - "CROSSBOW"
    attack-fight:
      {}
      #若没有这些权限，则攻击时运行默认的 attack 战斗组
      #当攻击者拥有这个权限时，攻击时将运行 class-a-attack 战斗组
  ##      as.class.a: class-a-attack
  ## as.class.b: class-b-attack
  attribute:
    #tick
    time:
      #生命恢复间隔
      health-regain: 10
      #属性更新间隔
      attribute-update: 10
      #属性数据清理间隔
      attribute-clear: 1200
    #当行中有这些之一时，忽略此行属性
    ignores:
      - "//"
      - "§-"
    line-condition:
      #单行条件的格式
      #解析:
      ## .* 匹配任意多个字符 : 用于匹配属性名及其值
      ## \/ '\'用来转义，   :  属性和单行条件之间的分隔符
      ## (?<requirement>.*) : 单行条件们
      ## 例： 攻击力: 100/Lv.100,职业: 巫师
      format: '.*\/(?<requirement>.*)'
      #每个单行条件间的分隔符
      separator: ","
    base-attribute:
      #玩家基础属性
      player:
        - "生命恢复: 0.1"
        - "攻击速度: 1.5"
        - "命中几率: 100(%)"
        - "攻击距离: 2.7"
        - "暴击伤害: 150(%)"
      #其它实体基础属性
      entity:
        - "命中几率: 100(%)"
  #数字格式，这个最好不要乱动
  ## ?<value>不要改，后面的正则可以改
  number-pattern: '(?<value>(\+|\-)?(\d+(?:(\.\d+))?))'
  string-append-separator: ", "
```

### message.yml

```yaml
options:
  default:
    ## TITLE 标题
    ## ACTION_BAR ActionBar文本
    ## CHAT 聊天框文本
    ## HOLO 全息文本
    ## DISABLE 关闭
    attack: holo
    ## ACTION_BAR ActionBar文本
    ## CHAT 聊天框文本
    ## DISABLE 关闭
    defend: chat
    #是否开启生命恢复全息提示
    ## true 开启
    ## false 关闭
    health-regain-holo: true
  #是否开启玩家个性选择
  personal: true
fight-message:
  #默认的名字
  default-name:
    #attacker为null时
    attacker: "大自然"
    #defender为null时
    defender: "未知"
  chat:
    attack:
      text: "&d[&9AttributeSystem&d] &e你对 &a{defender-name} &e造成了: {message}"
      separator: "&5,"
    defend:
      text: "&d[&9AttributeSystem&d] &e&a{attacker-name} &e对你造成了: {message}"
      separator: "&5,"
  action-bar:
    attack:
      text: "&e你对 &a{defender-name} &e造成了: {message}"
      separator: "&5|"
    defend:
      text: "&e&a{attacker-name} &e对你造成了: {message}"
      separator: "&5|"
    stay: 30
  title:
    attack:
      title: "{message}"
      sub-title: "{message}"
      separator: "&5|"
    defend:
      title: "{message}"
      sub-title: "{message}"
      separator: "&5|"
    fade-in: 3
    stay: 7
    fade-out: 5
  #AS的全息伤害显示
  #支持动画
  #纯发包不卡服务器
  holo:
    #起始位置
    begin:
      x: 0
      y: 0
      z: 0
    #终止位置
    end:
      x: 0
      y: 1
      z: 0
    #运动次数
    time: 5
    #存在时间
    stay: 20
#生命恢复全息
health-regain-holo:
  #全息内容
  text: "&2+ &a{value}"
  distance: 8
  #起始位置
  begin:
    x: 0
    y: 1
    z: 0
  #终止位置
  end:
    x: 0
    y: 1
    z: 0
  #运动次数
  time: -1
  #存在时间
  stay: 20
```

### slot.yml

```yaml
#左ID 右槽位
player:
  #左AS内部槽位key 右原版槽位
  "头盔": "HEAD"
  #可节点形式/字符串形式
  "胸甲": "CHEST"
  "护腿": "LEGS"
  "靴子": "FEET"
  "主手": "HAND"
  "副手": "OFFHAND"
  #读取槽位20的装备 以20th为id存入装备栏
  "20th": "20"
entity:
  "头盔": "HEAD"
  "胸甲": "CHEST"
  "护腿": "LEGS"
  "靴子": "FEET"
  "主手": "HAND"
  "副手": "OFFHAND"
## 萌芽槽位
germ-slots:
  - "example"
```

### formula.yml

```yaml
#支持 PAPI/PPAPI 字符串内联函数
#会影响实体的原版属性
#若填-1，则表示不修改此原版属性
attribute-formulas:
  max-health: "%as_att:MaxHealth%"
  #这个数值可以实现 %as_att:MovementSpeed%/100 /s
  movement-speed: "%as_att:MovementSpeed% / 2250"
  #默认每10tick(0.5s)恢复一次生命值 (见config.yml  options.attribute.time.health-regain)
  #为了方便实现"每秒回血" %as_att:HealthRegain% /s 故将值除以二
  health-regain: "%as_att:HealthRegain% / 2"
  #击退抗性
  knockback-resistance: "%as_att:Resistance%"
  #下面这些只支持玩家
  #单位为 攻击次数/s
  attack-speed: "%as_att:AttackSpeed%"
  #攻击距离
  #单位为格
  attack-distance: "%as_att:AttackDistance%"
  #幸运值
  luck: "%as_att:Luck%"
skill-api:
  max-mana: "%as_att:MaxMana%"
  ## cooldown : 技能冷却
  skill-cooldown: "{cooldown} * (1- (%as_att:SkillSpeed%/(100-%as_att:SkillSpeed%)))"
  mana-regain: "%as_att:ManaRegain%"
```
