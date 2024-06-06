---
title: ItemSystem 变量类型列表
tags:
 - ItemSystem
category: 'docs'
---

# 变量类型列表


> 提供 IS 自带的，如果您有意愿，可以给我 pr 你拓展的变量类型

### number / num

##### 参数

1. `value: {值}`
2. `format: {格式}` (可选) 默认 `#.##`
3. `max: {最大值}` (可选)
4. `min: {最小值}` (可选)

##### 返回值

一个经过格式化，最大最小值筛选过的数字

##### 例子

```yaml
key: example_num
type: number
value: 100
```

---

### string

##### 参数

1. `value: {字符串}`

##### 返回值

一个字符串对象

##### 例子

```yaml
key: example_string
type: string
value: "我是一个字符串"
```

---

### strings

##### 参数

1. `values: {字符串列表}`

##### 返回值

一个字符串列表(`List`)对象

##### 例子

```yaml
key: example_strings
type: strings
values:
  - "第一行"
  - "第二行"
```

---

### map

##### 参数

1. `键: 值`...

##### 返回值

一个映射(`Map`)对象

##### 例子

```yaml
key: example_map
type: map
键1: "值"
键2:
  #支持map下的变量类型嵌套
  type: strings
  values:
    - "第一行"
    - "第二行"
键3: 2333
```

---

### random

##### 参数

1. `values: {字符串列表}`

##### 返回值

列表中随机一个字符串

##### 例子

```yaml
key: example_random
type: random
values:
  - "可能是我"
  - "也可能是我"
```

---

### weight

##### 参数

1. `values: {权重,值对}`

##### 返回值

根据权重随机出来的值

##### 例子

```yaml
key: example_weight
type: weight
values:
  - 100: "我有100的权重"
  - 200: "我有200的权重"
```

---
