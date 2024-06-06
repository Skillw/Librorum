---
title: Asahi namespace:bukkit
tags:
 - Asahi
category: 'docs'
---

# Bukkit命名空间

## 前缀解释器
---
前缀解释器与旧版内联函数大致相同
### 基础

#### **颜色**
```yaml
colored 文本(String) #给文本加上颜色 & -> §
decolored 文本(String) #给加上颜色的文本变回去 § -> &
uncolored 文本(String) #去除文本的颜色 '§' -> ''
```
#### **指令**
```yaml
command 文本(String) as op 玩家(Player) #让玩家以op权限执行指令
command 文本(String) as console #控制台执行指令
command 文本(List<String>) as op 玩家(Player) #让玩家以op权限执行一系列指令
command 文本(List<String>) as console #控制台执行一系列指令
```
#### **papi(placeholder) **
```yaml
papi of 实体(LivingEntity) 文本(String) #解析占位符(PouPAPI & PAPI),解析Asahi语句
```
### 物品
#### **material**
```yaml
material 物品Id(String) #获取指定材质枚举
```
## 中缀解释器
---

### Player操作

#### **actionbar**
给玩家发送actionbar信息(解析颜色)
```yaml
&player actionbar 信息(String)
```
#### **title**
给玩家发送title信息(解析颜色)
```yaml
&player title 大标题(String) 小标题(String) 淡入(Int) 持续(Int) 淡出(Int)
```
#### **message**
给玩家发送message信息(解析颜色)
```yaml
&player actionbar 信息(String)
```
#### **messages**
给玩家发送一系列message信息(解析颜色)
```yaml
&player actionbar 信息(List<String>)
```
#### **command**
以玩家身份执行命令
```yaml
&player command 指令(String)
```
#### **allowFlight**
获取/设置玩家是否可飞行
```yaml
&player allowFlight #返回玩家是否可飞行
&player allowFlight to 值(Boolean) #设置玩家是否可飞行
```
#### **bedSpawn**
获取/设置玩家床重生点的位置
```yaml
&player bedSpawn #返回玩家床重生点
&player bedSpawn to 值(Location) #设置玩家床重生点
```
#### **blocking**
获取玩家是否在用盾牌格挡
```yaml
&player blocking
```
#### **cooldown**
获取/设置玩家特定物品的冷却

由于原版限制，同一玩家同一材质的物品冷却共享
```yaml
&player cooldown 材质(Material) #返回玩家特定物品的冷却
&player cooldown 材质(Material) to 冷却(Int) #设置玩家特定物品的冷却
```
#### **name**
获取玩家名字
```yaml
&player name
```
#### **healthScale**
获取/设置玩家血量压缩
```yaml
&player healthScale #返回玩家血量压缩
&player healthScale to 值(Int) #设置玩家血量压缩
```
#### **isSneaking**
获取玩家是否在潜行
```yaml
&player isSneaking
```
#### **isSleeping**
获取玩家是否在睡觉
```yaml
&player isSleeping
```
#### **exp**
获取/设置玩家经验
```yaml
&player exp #返回玩家经验
&player exp to 值(Int) #设置玩家经验
```
#### **level**
获取/设置玩家原版等级
```yaml
&player level #返回玩家原版等级
&player level to 值(Int) #设置玩家原版等级
```
#### **playSound**
给玩家播放特定音效

volume 是音量大小 pitch 是音调高低
```yaml
&player playSound 音效(Sound) with volume(Float) pitch(Float)
```
#### **stopSound**
终止玩家特定音效的播放
```yaml
&player stopSound 音效(Sound)
```
#### **metadata**
获取/修改玩家[MetaData](https://jd.bukkit.org/org/bukkit/metadata/Metadatable.html)

MetaData是一种存储临时数据(关服、退服后会消失)的可选方案
```yaml
&player metadata key(String) #返回玩家特定key下的MataDataValue
&player metadata key(String) to value(MetaDataValue) #返回玩家特定key下的MataDataValue
```
### Entity操作

#### **location**
获取实体位置
```yaml
&entity location #获取实体位置
```
#### **teleport**
传送实体
```yaml
&entity teleport to 目标(Location / Entity)
```
#### **name**
获取实体名字
```yaml
&entity name
```
#### **displayName**
获取实体显示名字
```yaml
&entity displayName
```
#### **velocity**
获取/修改实体速度
```yaml
&entity velocity #获取实体速度
&entity velocity to 向量(Vector) #设置实体速度
```
#### **metadata**
获取/修改实体[MetaData](https://jd.bukkit.org/org/bukkit/metadata/Metadatable.html)

MetaData是一种存储临时数据(关服、退服后会消失)的可选方案
```yaml
&entity metadata key(String) #返回实体特定key下的MataDataValue
&entity metadata key(String) to value(MetaDataValue) #返回实体特定key下的MataDataValue
```
#### **fireTicks**
获取/修改实体燃烧时间，以tick为单位
```yaml
&entity fireTicks #获取实体燃烧时间
&entity fireTicks to 时间(Int) #设置实体燃烧时间
```
#### **fallDistance**
获取/修改实体摔落距离
```yaml
&entity fallDistance #获取实体摔落距离
&entity fallDistance to 时间(Int) #设置实体摔落距离
```
### LivingEntity操作

#### **health**
获取/修改实体生命值
```yaml
&entity health #获取实体生命值
&entity health to 血量(Int) #设置实体生命值
```
#### **maxHealth**
获取/修改实体最大生命值
```yaml
&entity maxHealth #获取实体最大生命值
&entity maxHealth to 血量(Int) #设置实体最大生命值
```
#### **potion**
给实体药水效果[XPotion](https://github.com/TabooLib/taboolib/blob/501ad4cb34a2b6bc8cb5302f30fe1b824eb80706/platform/platform-bukkit/src/main/java/taboolib/library/xseries/XPotion.java)
```yaml
&livingEntity potion add 药水(XPotion)
```
#### **nearbyEntities**
获取周围以实体为中心的一个碰撞箱内的实体

x y z 为碰撞箱各坐标轴上长度的1/2
```yaml
&livingEntity nearbyEntities x(Double) y(Double) z(Double)
```
#### **rayHitEntity**
获取实体视线方向的实体
```yaml
&livingEntity rayHitEntity 距离(Double)
```
### Location操作

#### **toVector**
Location转Vector
```yaml
&location toVector #返回Vector
```
#### **distance**
获取两坐标间距
```yaml
&location distance 另一个坐标(Location)
```
#### **direction**
获取/修改坐标的方向
```yaml
&location direction #获取坐标的方向
&location direction to 向量(Vector) #修改坐标的方向
```
#### **multiply**
让Location所有参数乘以一个数
```yaml
&location multiply 数值(Double)
```
#### **length**
即到原点距离(x^2+y^2+z^2)^(1/2)
```yaml
&location length
```
#### **clone**
复制一个新的Location对象

直接修改获取来的Location对象会导致Location所属实体位置改变
```yaml
&location clone
```
#### **world**
获取该坐标所在世界
```yaml
&location world
```
#### **pitch**
获取该坐标朝向的pitch
```yaml
&location pitch
```
#### **yaw**
获取该坐标朝向的yaw
```yaml
&location yaw
```
#### **x,y,z**
获取/修改x,y,z
```yaml
&location x 
&location y
&location z
&location x to 值(Double)
&location y to 值(Double)
&location z to 值(Double)
```
#### **add**
做向量加运算
```yaml
&location add [ x(Double) , y(Double) , z(Double) ]
&location add 值(Location/Vector)
```
#### **subtract**
做向量减运算
```yaml
&location subtract [ x(Double) , y(Double) , z(Double) ]
&location subtract 值(Location/Vector)
```
#### **zero**
把坐标变成零向量
```yaml
&location zero
```


### Vector操作

#### **rotateAround**
让向量以指定坐标轴为轴旋转
```yaml
&vector rotateAroundX 弧度制角度(Double)
&vector rotateAroundY 弧度制角度(Double)
&vector rotateAroundZ 弧度制角度(Double)
```
#### **toLocation**
向量转坐标
```yaml
&vector toLocation
```
#### **normalize**
转为单位向量
```yaml
&vector normalize
```
#### **isNormalized**
是否为单位向量
```yaml
&vector isNormalized
```
#### **isInSphere**
是否在特定球体内
```yaml
&vector isInSphere 原点(Vector) 半径(Double)
```
#### **isInAABB**
判断本向量是否在一个与坐标轴平行的长方体碰撞箱中.

参数 min 和 max 必须是正确的最小坐标和最大坐标,也就是说必须是能构成长方体的对角点.
```yaml
&vector isInAABB min(Vector) max(Vector)
```
#### **midpoint**
顾名思义，获取一个新的向量,它的值为本向量和另一个向量间的连线的中点.
```yaml
&vector midpoint 另一个向量(Vector)
```
#### **dot**
计算本向量与另一个向量的点积,定义为x1*x2+y1*y2+z1*z2. 此函数的返回值是个标量.
```yaml
&vector dot 另一个向量(Vector)
```
#### **divide**
将本向量的坐标除以另一个向量的坐标.
```yaml
&vector divide 另一个向量(Vector)
```
#### **distance**
获取本向量与与另一个向量之间的距离. 这个方法的返回值没有被缓存,且使用了开销较大的平方以及开根函数, 所以不要反复调用这个方法来获取向量的模值. 当向量的模过大时,开根函数有可能发生溢出,并会返回Double.NaN.
```yaml
&vector distance 另一个向量(Vector)
```
#### **crossProduct**
将本向量的坐标设为两个向量的叉积.

其计算过程如下:

x = y1 * z2 - y2 * z1

y = z1 * x2 - z2 * x1

z = x1 * y2 - x2 * y1

注:叉积是a向量和b向量的垂直向量的积的模,方向使用右手定则判断.
```yaml
&vector crossProduct 另一个向量(Vector)
```
#### **copy**
将本向量的坐标全部设为另一个向量的坐标.
```yaml
&vector 另一个向量(Vector)
```
#### **angle**
获取本向量与另一个向量的夹角,用弧度表示.
```yaml
&vector angle 另一个向量(Vector)
```
#### **multiply**
让Vector所有参数乘以一个数
```yaml
&vector multiply 数值(Double)
```
#### **length**
即到原点距离(x^2+y^2+z^2)^(1/2)
```yaml
&vector length
```
#### **clone**
复制一个新的Vector对象

直接修改获取来的Vector对象会导致Vector所属实体位置改变
```yaml
&vector clone
```
#### **x,y,z**
获取/修改x,y,z
```yaml
&vector x 
&vector y
&vector z
&vector x to 值(Double)
&vector y to 值(Double)
&vector z to 值(Double)
```
#### **add**
做向量加运算
```yaml
&vector add [ x(Double) , y(Double) , z(Double) ]
&vector add 值(Location/Vector)
```
#### **subtract**
做向量减运算
```yaml
&vector subtract [ x(Double) , y(Double) , z(Double) ]
&vector subtract 值(Location/Vector)
```
#### **zero**
把向量变成零向量
```yaml
&vector zero
```

### Cancellable操作
#### **isCancelled**
获取/修改事件是否被取消

```yaml
&event isCancelled
&event isCancelled to 布尔(Boolean)
```
### BossBar操作

#### **title**
获取/修改bossbar的title
```yaml
&bossbar title #获取bossbar的title
&bossbar title to title(String) #修改bossbar的title
```
#### **color**
获取/修改bossbar的颜色
```yaml
&bossbar color #获取bossbar的color
&bossbar color to color(org.bukkit.boss.BarColor) #修改bossbar的color
```
#### **style**
获取/修改bossbar的风格
```yaml
&bossbar style #获取bossbar的style
&bossbar style to style(org.bukkit.boss.BarStyle) #修改bossbar的style
```
#### **progress**
获取/修改bossbar的进度
```yaml
&bossbar progress #获取bossbar的progress
&bossbar progress to progress(Double) #修改bossbar的progress
```
#### **visible**
获取/修改bossbar是否可见
```yaml
&bossbar visible #获取bossbar是否可见
&bossbar visible to 布尔(Boolean) #修改bossbar是否可见
```
#### **flag**
获取/修改bossbar的flag
```yaml
&bossbar flag has flag(org.bukkit.boss.BarFlag) #获取bossbar是否有特定flag
&bossbar flag add flag(org.bukkit.boss.BarFlag) #添加bossbar的flag
&bossbar flag remove flag(org.bukkit.boss.BarFlag) #移除bossbar的flag
```
#### **player**
修改bossbar对指定玩家可见性
```yaml
&bossbar player add 玩家(Player)
&bossbar player remove 玩家(Player)
&bossbar player removeAll 玩家(Player)
```