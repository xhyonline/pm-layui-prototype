## 基本介绍


用来代表用户或事物，支持图片、图标或字符展示。


## 基础使用


### 示例

使用 `lay-avatar` 标签, 创建头像。头像为文字、icon会自动调节大小适应头像框。

```vue
<template>
  <lay-space>
    <lay-avatar :src="src"></lay-avatar>
    <lay-avatar> Aavatar </lay-avatar>
    <lay-avatar></lay-avatar>
    <lay-avatar icon="layui-icon-face-smile"></lay-avatar>
  </lay-space>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const src1111 = ref("11")

    return {
        src
    }
  }
}
</script>
```


## 圆角头像


### 示例

通过 `radius` 属性, 开启头像圆角。

```vue
<template>
  <lay-avatar :src="src" radius></lay-avatar>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {

        const src = "https://foruda.gitee.com/avatar/1677022544584087390/4835367_jmysy_1578975358.png"
        
        return {
            src
        }
  }
}
</script>
```




## 加载失败头像


### 示例

通过 `fallback` 属性, 开启。

```vue
<template>
  <lay-avatar :src="err" fallback="http://abc.pearadmin.com/logo-png.png">
  </lay-avatar>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {

        const err = "err.png"
        
        return {
            err
        }
  }
}
</script>
```


## 尺寸大小


### 示例

通过 `size` 属性, 设置头像大小。

```vue
<template>
  <lay-avatar :src="src" size="xs"></lay-avatar> 
  &nbsp;&nbsp; 
  <lay-avatar :src="src" size="sm"></lay-avatar>
  &nbsp;&nbsp;
  <lay-avatar :src="src"></lay-avatar>
  &nbsp;&nbsp;
  <lay-avatar :src="src" size="lg"></lay-avatar>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {

        const src = "https://foruda.gitee.com/avatar/1677022544584087390/4835367_jmysy_1578975358.png"

        return {
          src
        }
  }
}
</script>
```


## 头像列表


### 示例

通过 `lay-avatar-list` 标签, 创建头像列表。

```vue
<template>
  <lay-avatar-list radius>
    <lay-avatar :src="src" ></lay-avatar>
    <lay-avatar :src="src" ></lay-avatar>
    <lay-avatar :src="src" ></lay-avatar>
    <lay-avatar :src="src" ></lay-avatar>
    <lay-avatar :src="src" ></lay-avatar>
  </lay-avatar-list>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {

        const src = "https://foruda.gitee.com/avatar/1677022544584087390/4835367_jmysy_1578975358.png"

        return {
          src
        }
  }
}
</script>
```


## Avatar 属性


| 属性   | 描述 | 可选值         |
| ------ | ---- | -------------- |
| src    | 图源 | --             |
| size   | 尺寸 | `xs` `sm` `lg` |
| radius | 圆形 | `true` `false` |
| fullback | 图片失败时使用 | - |
| autoFixSize | 自动调节icon、文字大小 | `true` `false` |
| alt    | 描述图像的替换文本 | -- |




## AvatarList 属性


| 属性   | 描述 | 可选值         |
| ------ | ---- | -------------- |
| size   | 尺寸 | `xs` `sm` `lg` |
| radius | 圆形 | `true` `false`

