---
title: 'AttributeSystem 战斗信息显示方式'
tags:
 - AttributeSystem
category: 'docs'
---

# 战斗信息显示方式

> Kotlin / Java

```kotlin
class ASChat(val text: StringBuilder) : Message {

    override fun plus(message: Message, type: Message.Type): Message {
        message as ASChat
        text.append(separator(type)).append(message.text)
        return this
    }

    fun separator(type: Message.Type): String {
        return ASConfig["message"].getString("fight-message.chat.${type.name.lowercase()}.separator") ?: "&5|"
    }

    override fun sendTo(vararg players: Player) {
        players.forEach { player -> player.sendMessage(text.toString().placeholder(player).colored()) }
    }

}
```

```kotlin
@AutoRegister
object ASChatBuilder : MessageBuilder {

    override val key: String = "chat"

    override fun build(damageType: DamageType, fightData: FightData, first: Boolean, type: Message.Type): Message {
        val typeStr = type.name.lowercase()
        val typeText = fightData.handle(damageType["$typeStr-chat"].toString().replace("{name}", damageType.name))
        val text = if (first) fightData.handle(
            message.getString("fight-message.chat.$typeStr.text")
                ?.replace("{message}", typeText) ?: typeText
        )
        else typeText
        return ASChat(StringBuilder(text))
    }
}
```
