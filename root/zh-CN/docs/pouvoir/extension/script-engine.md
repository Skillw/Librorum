---
title:  Pouvoir-脚本引擎
tags:
 - Pouvoir
category: 'docs'
---

# 脚本引擎


```kotlin
@AutoRegister
@RuntimeDependencies(
    RuntimeDependency("org.codehaus.groovy:groovy-jsr223:3.0.11"),
    RuntimeDependency("org.codehaus.groovy:groovy:3.0.11")
)
object PouGroovyScriptEngine : PouScriptEngine() {
    override val key: String = "groovy"
    override val suffixes: Array<String> = arrayOf("groovy")
    override val functionPattern: Pattern = Pattern.compile("^def (?<name>.*)\\(.*\\)(| +)\\{\$")
    override val bridge: ScriptBridge = GroovyBridge

    private val factory: ScriptEngineFactory by lazy(LazyThreadSafetyMode.NONE) { GroovyScriptEngineFactory() }
    override val engine: ScriptEngine
        get() = factory.scriptEngine
}

object GroovyBridge : ScriptBridge {
    override fun getEngine(vararg args: String): ScriptEngine = PouGroovyScriptEngine.engine
    override fun buildInvoker(script: CompiledScript): Invoker {
        return Invoker { function, arguments, parameters, receiver ->
            script.eval()
            script.engine.context.getBindings(ScriptContext.ENGINE_SCOPE).putAll(arguments)
            return@Invoker (script.engine as Invocable).invokeFunction(
                function,
                *parameters
            )
        }
    }

    override fun toObject(any: Any): Any? {
        return null
    }
}
```
