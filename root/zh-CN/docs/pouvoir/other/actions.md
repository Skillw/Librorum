---
title: Pouvoir-Asahi-动作列表
tags:
 - Pouvoir
category: 'docs'
---

# Asahi-动作列表

格式: `{对象} {action}`
例如:

```
set array to arrayOf [ 1 2 3 ]
print &array get at 1
```

打印 `2`

## >>>From **Pouvoir**

### 数组(Array)

- `get at {index}` - 获取下标处元素
- `set at {index} to {value}` - 设置下标处元素
- `length` - 数组长度

---

### 列表(List)

- `add {value}` - 添加元素
- `get at {index}` - 获取下标处元素
- `set at {index} to {value}` - 设置下标处元素
- `remove {value}` - 删除元素
- `remove at {index}` - 删除下标处元素
- `clear` - 清除列表所有元素
- `contains {value}` - 列表是否含某个元素
- `isEmpty` - 列表是否为空
- `toArray` - 列表转为数组
- `toString` - 转为字符串
- `merge by {separator}` - 以字符串为分隔符，将每个元素合并
- `size` - 列表元素总数

---

### 映射(Map)

- `get {key}` - 获取键对应的值
- `put {key} to {value}` - 设置键对应的值
- `set {key} to {value}` - 设置键对应的值
- `remove {key}` - 删除键对应的值
- `clear` - 清除 Map 所有键值对
- `contains {key}` - Map 是否含某个键
- `keys` - Map 的键列表
- `values` - Map 的值列表
- `entries` - Map 的键值对列表
- `size` - Map 元素总数

### 键值对(Pair)

- `key` - 获取键
- `value` - 获取值

### 字符串(Pair)

- `placeholder {entity}` - 解析占位符

### 实体(Entity)

- `location` - 获取坐标
- `teleport to {location}/{entity}` - 传送
- `name` - 获取名字
- `displayName` - 获取展示名
- `velocity` - 获取速度
- `velocity to {velocity}` - 设置度
- `metadata {key}` - 获取 metadta
- `metadata {key} to {value}` - 设置 metadta

### 有生命的实体(LivingEntity)

- `location` - 获取坐标
- `teleport to {location}/{entity}` - 传送
- `name` - 获取名字
- `displayName` - 获取展示名
- `health` - 获取生命值
- `health to {health}` - 设置生命值
- `maxHealth` - 获取最大生命值
- `maxHealth to {maxHealth}` - 设置最大生命值
- `velocity` - 获取速度
- `velocity to {velocity}` - 设置度
- `metadata {key}` - 获取 metadta
- `metadata {key} to {value}` - 设置 metadta

### 玩家(Player)

- `location` - 获取坐标
- `teleport to {location}/{entity}` - 传送
- `actionbar {message} {tick}` - 发送动作栏消息
- `title {title} {subtitle} {fadeIn} {stay} {fadeOut}` - 发送标题
- `message {message}` - 发送消息
- `messages {message列表}` - 发送消息列表
- `command {command}` - 执行指令
- `blocking` - 获取是否在格挡
- `name` - 获取名字
- `displayName` - 获取展示名
- `isSneaking` - 获取是否在潜行
- `isSleeping` - 获取是否在睡觉
- `playSound {sound} (with {volume} {pitch})` - 播放声音
- `stopSound {sound}` - 停止声音
- `allowFlight` - 获取是否允许飞行
- `allowFlight to true/false` - 设置是否允许飞行
- `bedSpawn` - 获取出生点
- `bedSpawn to {location}` - 设置出生点
- `cooldown {material}` - 获取材质冷却
- `cooldown {material} to {tick}` - 设置材质冷却
- `health` - 获取生命值
- `health to {health}` - 设置生命值
- `maxHealth` - 获取最大生命值
- `maxHealth to {maxHealth}` - 设置最大生命值
- `healthScale` - 获取生命缩放
- `healthScale to {healthScale}` - 设置生命缩放
- `exp` - 获取经验值
- `exp to {exp}` - 设置经验值
- `level` - 获取等级
- `level to {level}` - 设置等级
- `velocity` - 获取速度
- `velocity to {velocity}` - 设置度
- `metadata {key}` - 获取 metadta
- `metadata {key} to {value}` - 设置 metadta

### 坐标(Location)

- `add {location}/{vector}/{x,y,z列表}` - 将本位置的坐标加上另一个位置的坐标
- `subtract {location}/{vector}/{x,y,z列表}` - 将本位置的坐标减去另一个位置的坐标
- `world` - 获取世界
- `world to {world}` - 设置世界
- `pitch` - 获取俯仰角(度)
- `pitch to {pitch}` - 设置俯仰角(度)
- `yaw` - 获取偏航角(度)
- `yaw to {yaw}` - 设置偏航角(度)
- `x` - 获取 x 轴坐标
- `x to {x}` - 设置 x 轴坐标
- `y` - 获取 y 轴坐标
- `y to {y}` - 设置 y 轴坐标
- `z` - 获取 z 轴坐标
- `z to {z}` - 设置 z 轴坐标
- `direction` - 获取方向(Vector)
- `direction to {vector}` - 设置方向(Vector)
- `multiply {double}` - 坐标数乘, 将所有坐标轴上扩展某个倍数.
- `length` - 获取位置的模值,定义为 sqrt(x^2+y^2+z^2)
- `zero` - 清零此位置的 xyz 坐标数值
- `clone` - 复制
- `toVector` - 转为向量
- `distance {location}` - 距离

### 矢量(Vector)

- `add {location}/{vector}/{x,y,z列表}` - 将本矢量加上另一个矢量
- `subtract {location}/{vector}/{x,y,z列表}` - 将本矢量减去另一个矢量
- `x` - 获取 x 轴
- `x to {x}` - 设置 x 轴
- `y` - 获取 y 轴
- `y to {y}` - 设置 y 轴
- `z` - 获取 z 轴
- `z to {z}` - 设置 z 轴
- `multiply {double}` - 数乘, 将所有轴上扩展某个倍数
- `length` - 获取向量的模值,定义为 sqrt(x^2+y^2+z^2)
- `zero` - 清零此向量的 xyz 坐标数值
- `clone` - 复制
- `toLocation {world} (with {pitch} {yaw})` - 转为坐标
- `distance {vector}` - 距离
- `rotateAroundX {angle}` - 绕 X 轴旋转
- `rotateAroundY {angle}` - 绕 Y 轴旋转
- `rotateAroundZ {angle}` - 绕 Z 轴旋转
- `normalize` - 转为单位向量
- `isNormalized` - 是否为单位向量
- `isInAABB {min vector} {max vector}` - 判断本向量是否在一个 AABB 包围盒中. 参数 min 和 max 必须真的是最小坐标和最大坐标,也就是说必须是能构成长方体的对角点.
- `isInSphere {vector} {radius}` 判断本向量是否在一个球形空间中.
- `midpoint {vector}` - 设置本向量的坐标为两个向量连线的中点.
- `dot {vector}` - 计算本向量与另一个向量的点积,定义为 x1*x2+y1*y2+z1\*z2. 此函数的返回值是个标量.
- `divide {vector}` - 将本向量的坐标除以另一个向量的坐标.
- `distance {vector}` - 距离
- `crossProduct {vector}` - 将本向量的坐标设为两个向量的叉积.
- `copy {vector}` - 将本向量的坐标全部设为另一个向量的坐标.
- `angle {vector}` - 获取本向量与另一个向量的夹角,用弧度表示.

## >>>From **ItemSystem**

### 物品(ItemStack)

- `amount` - 获取数量
- `amount to {amount}` - 设置数量
- `name` - 获取展示名
- `name to {name}` - 设置展示名
- `type` - 获取材质
- `type to {material}` - 设置材质
- `lore` - 获取 lore
- `lore to {lore}` - 设置 lore
- `cooldown` - 获取玩家的物品材质冷却 (玩家为变量 `player` 的值)
- `cooldown to {cooldown}` - 设置玩家的物品材质 (玩家为变量 `player` 的值)
- `damage` - 获取损坏值
- `damage to {damage}` - 设置损坏值
- `nbt` - 获取 NBT
- `nbt to {nbt}` - 设置 NBT
- `rebuild (with {variables} {data})` - 重新构建 例如: `rebuild with [ 'a' 'b' ] [ 'c' to 1 , 'd' to 2 ]
- `repair {amount}` - 修复物品
- `consume` - 消耗物品(数量 - 1)
- `maxDurability` - 获取最大耐久
- `drop at {location}` - 掉落物品
- `clone` - 复制物品

### NBT(ItemTag)

- `get {key}` - 获取值
- `put {key} to {value}` - 设置键值对
- `remove {key}` - 删除键对应的值
- `has {key}` - 是否含 key
- `saveTo {item}` - 保存至物品
