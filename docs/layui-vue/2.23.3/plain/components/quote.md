## 基础使用


### 示例

```vue
<template>
  <lay-quote>引用区域的文字</lay-quote>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    return {
    }
  }
}
</script>
```


## 灰色主题


### 示例

```vue
<template>
  <lay-quote type="nm">引用区域的文字</lay-quote>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const nm = ref(true)

    return {
      nm
    }
  }
}
</script>
```


## Quote 属性


| Name | Description | Accepted Values |
| ---- | ----------- | --------------- |
| nm   | 灰色样式    | --              |

