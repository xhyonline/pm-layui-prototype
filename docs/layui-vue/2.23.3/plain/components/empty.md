## 基本介绍


当目前没有数据时，用于显式的用户提示。


## 基础使用


### 示例

```vue
<template>
  <lay-empty></lay-empty>
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


## 指定描述


### 示例

```vue
<template>
  <lay-empty description="刷新试试"></lay-empty>
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


## 扩展插槽


### 示例

```vue
<template>
  <lay-empty description="刷新试试">
    <template #extra>
      <lay-button>刷新页面</lay-button>
    </template> 
  </lay-empty>
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


## 图片插槽


### 示例

```vue
<template>
  <lay-empty description="刷新试试">
    <template #image>
      图片
    </template>
  </lay-empty>
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


## Empty 属性


| 属性        | 描述     | 可选值 |
| ----------- | -------- | ------ |
| description | 描述信息 | --     |


## Empty 插槽


| 属性        | 描述     | 可选值 |
| ----------- | -------- | ------ |
| extra | 扩展插槽 | --     |

