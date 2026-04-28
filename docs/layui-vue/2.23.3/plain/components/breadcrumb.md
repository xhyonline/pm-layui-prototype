## 基本介绍


显示当前页面在系统层级结构中的位置，并能向上返回。


## 基础使用


### 示例

```vue
<template>
    <lay-breadcrumb>
        <lay-breadcrumb-item title="工作空间"></lay-breadcrumb-item>
        <lay-breadcrumb-item title="控制台"></lay-breadcrumb-item>
        <lay-breadcrumb-item title="访问量"></lay-breadcrumb-item>
    </lay-breadcrumb>
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


## 指定分割


### 示例

```vue
<template>
    <lay-breadcrumb separator=">">
        <lay-breadcrumb-item title="热门音乐"></lay-breadcrumb-item>
        <lay-breadcrumb-item title="王杰"></lay-breadcrumb-item>
        <lay-breadcrumb-item title="谁明浪子心"></lay-breadcrumb-item>
    </lay-breadcrumb>
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


## 使用插槽


### 示例

```vue
<template>
    <lay-breadcrumb separator="-">
        <lay-breadcrumb-item>今天</lay-breadcrumb-item>
        <lay-breadcrumb-item>有些</lay-breadcrumb-item>
        <lay-breadcrumb-item>不开心</lay-breadcrumb-item>
    </lay-breadcrumb>
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


## 图标分割


### 示例

```vue
<template>
    <lay-breadcrumb separator-icon="layui-icon-right">
        <lay-breadcrumb-item>今天</lay-breadcrumb-item>
        <lay-breadcrumb-item>有些</lay-breadcrumb-item>
        <lay-breadcrumb-item>不开心</lay-breadcrumb-item>
    </lay-breadcrumb>
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



## Breadcrumb 属性


| 名称      | 描述    | 类型     | 默认值 | 可选值 |
| --------- | ------ | -------- | ------ | ------ |
| separator | 分割符  | `string` | `/`    | -      |
| separator-icon | 图标分割符  | - | -    | -      |


## Breadcrumb 插槽


| 名称     | 描述     |
| ------- | -------- |
| default | 默认插槽  |

