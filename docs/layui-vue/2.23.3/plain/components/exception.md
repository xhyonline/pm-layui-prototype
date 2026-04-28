## 基本介绍


通用的异常页面。


## 401


### 示例

使用 `lay-exception` 标签, 创建一个异常页面

```vue
<template>
  <lay-exception status="401" title="401" describe="身份认证失败">
      <template #extra>
        <lay-button>刷新</lay-button>
        <lay-button type="primary">返回</lay-button>
    </template>
  </lay-exception>
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


## 403


### 示例

使用 `lay-exception` 标签, 创建一个异常页面

```vue
<template>
  <lay-exception status="403" title="403" describe="暂无相关权限">
      <template #extra>
        <lay-button>刷新</lay-button>
        <lay-button type="primary">返回</lay-button>
    </template>
  </lay-exception>
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


## 404


### 示例

使用 `lay-exception` 标签, 创建一个异常页面

```vue
<template>
  <lay-exception status="404" title="404" describe="跳转页面失败">
    <template #extra>
        <lay-button>刷新</lay-button>
        <lay-button type="primary">返回</lay-button>
    </template>
  </lay-exception>
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



## 500


### 示例

使用 `lay-exception` 标签, 创建一个异常页面

```vue
<template>
  <lay-exception status="500" title="500" describe="服务发生错误">
      <template #extra>
        <lay-button>刷新</lay-button>
        <lay-button type="primary">返回</lay-button>
    </template>
  </lay-exception>
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


## Exception 属性


| 属性        | 描述     | 可选值 |
| ----------- | -------- | ------ |
| title | 标题 | --     |
| status | 状态 | `403` `404` `500` |
| describe | 描述信息 | -- |


## Exception 插槽


| 属性        | 描述     | 可选值 |
| ----------- | -------- | ------ |
| extra | 操作 | --     |

