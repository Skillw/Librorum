---
title: Asahi namespace:regex
tags:
 - Asahi
category: 'docs'
---

# Regex命名空间

## 前缀解释器
---

### 正则
正则相关知识: [跟着海螺学正则](https://www.mcbbs.net/thread-827651-1-1.html)
#### **regexOf**
创建正则对象，用于接下来的匹配
```yaml
regexOf 正则表达式 匹配设置(Set<RegexOption>)
``` 
#### **regex**
同regexOf

regex of 正则表达式

```yaml
regex 正则表达式 find 值(String)
regex 正则表达式 find 值(String) at &index #返回MatchResult，查找从字符串的第index处开始匹配的结果
regex 正则表达式 findAll 值(String) at &index #返回MatchResult集合，查找从字符串的第index处开始匹配的结果，按道理应该这样，但是代码好像有点问题
regex 正则表达式 matches 值(String) at &index #返回布尔值，查找从字符串的第index处开始匹配的结果是否存在
regex 正则表达式 replace 值(String) with 值(String) #替换
```
## 中缀解释器
---

### 正则
#### **[MatchResult](https://www.liaoxuefeng.com/wiki/1252599548343744/1306046706483233)操作**
```yaml
matchResult value #匹配到的值
matchResult group of 值(String)
matchResult group at 值(Int)
```
