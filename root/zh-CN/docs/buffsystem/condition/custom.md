---
title: BuffSystem 拓展条件
tags:
 - BuffSystem
category: 'docs'
---

# 拓展条件


**BuffSystem**默认提供了 **2** 种**条件**

- time **时间**
- permissions **权限**

你可以通过编写 **脚本**/**代码** 拓展效果类型

### 拓展

需要用到 [`BuffData`](https://doc.skillw.com/buffsystem/com/skillw/buffsystem/api/data/BuffData.html)

> JavaScript

```javascript
//@BuffCondition(permission)
//文件注解顶头写

function init(entity, data) {
  //初始化data / 检测data
  //如果没有传进来参数 permissions 就警告
  if (!data.containsKey("permissions")) {
    warning(
      "The Buff ${data.buffKey} taken effect now has no parma of 'permissions'!"
    );
  }
}

function test(entity, data) {
  //主要功能,是否通过
  const permissions = data.get("permissions");
  if (permissions == null) return true;
  return permissions.stream().all(function (it) {
    entity.hasPermission(it);
  });
}

function isDeleted(entity, data) {
  //是否删除
  return false;
}

function status(entity, data) {
  //信息
  return null;
}
```

> Kotlin

```kotlin
@AutoRegister
object PermissionCondition : BuffCondition {
    override val key = "permission"
    override val description: String
        get() = BSConfig.permDescription

    private fun buildStatus(entity: LivingEntity, permissions: Collection<String>): String {
        if (!enablePermStatus) return ""
        val each = StringBuilder()
        permissions.forEach {
            each.append(
                permEachFormat.replace("{permission}", it).replace("{bool}", entity.hasPermission(it).toString())
            )
            if (it != permissions.last()) each.append(permSeparator)
        }
        return permStatusFormat.replace("{each}", each.toString())
    }

    override fun status(entity: LivingEntity, data: BuffData): String {
        val permissions = data.getAs<Collection<String>>("permissions") ?: return ""
        return buildStatus(entity, permissions)
    }

    override fun init(entity: LivingEntity, data: BuffData) {
        if (!data.containsKey("permissions")) {
            warning("The Buff ${data.buffKey} taken effect now has no parma of 'permissions'!")
        }
    }

    override fun isDeleted(entity: LivingEntity, data: BuffData): Boolean {
        return false
    }

    override fun test(entity: LivingEntity, data: BuffData): Boolean {
        val permissions = data.getAs<Collection<String>>("permissions") ?: return false
        return permissions.all { entity.hasPermission(it) }
    }


}
```
