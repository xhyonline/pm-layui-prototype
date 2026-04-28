## 基本介绍


为组件添加水波纹动画。


## 基础使用


### 示例

使用 `lay-ripple` 标签, 为 `element` 添加水波纹效果。

```vue
<template>
  <lay-space>
    <lay-ripple>
      <lay-button>click</lay-button>
    </lay-ripple>
    <lay-ripple type="out" borderRadius="2px">
      <lay-button>click</lay-button>
    </lay-ripple>
  </lay-space>
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


## 触发时机


### 示例

通过 `trigger` 属性，设置 `ripple` 触发时机，可选值 `click` `always` `mouseenter`。

```vue
<template>
  <lay-ripple type="out" trigger="always" borderRadius="2px" color="#009688">
    <lay-button type="primary">闪烁</lay-button>
  </lay-ripple>
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


## Ripple 属性


| 名称         | 描述                               | 类型      | 默认值  | 可选值                        |
| ------------ | ---------------------------------- | --------- | ------- | ----------------------------- |
| type         | 波纹类型                           | `string`  | `inset` | `out` `inset`                 |
| color        | 波纹颜色                           | `string`  | --      | --                            |
| borderRadius | 圆角，仅适用 `out` 类型                | `string`  | --       | --                             |
| spreadWidth  | 扩散宽度，单位 px，仅适用 `out` 类型    | `string`  | --       | --                             |
| spreadSize   | 扩散大小，单位 px，仅适用 `inset` 类型  | `string`  | --       | --                            |
| trigger      | 触发方式                           | `string`  | `click` | `click` `always` `mouseenter` |
| center       | 是否在元素中心扩散                  | `boolean` | `false` | `true` `false`                |


## Ripple 插槽


| 名称    | 描述     |
| ------- | -------- |
| default | 默认插槽 |

