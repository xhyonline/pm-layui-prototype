## 基本介绍


在一组可选项中进行多项选择时。


## 基础使用


### 示例

使用 `lay-checkbox` 标签, 创建一个复选框

```vue
<template>
    <lay-checkbox name="like" skin="primary"  v-model="checked1" value="1" label="属性描述"></lay-checkbox>
    <lay-checkbox name="like" skin="primary"  v-model="checkedSlot" value="1">
      插槽描述
    </lay-checkbox>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const checked1 = ref(false)
    const checkedSlot = ref(false)

    return {
      checked1
    }
  }
}
</script>
```


## 默认样式


### 示例

```vue
<template>
    <lay-checkbox name="like" value="1" v-model="checked2">普通</lay-checkbox>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const checked2 = ref(false)

    return {
      checked2
    }
  }
}
</script>
```


## 复选框组


### 示例

方便通过数组生成 checkbox 复选框。

```vue
<template>
    <lay-checkbox-group v-model="checkeds" @change="groupChange">
      <lay-checkbox name="like" skin="primary" value="1">写作</lay-checkbox>
      <lay-checkbox name="like" skin="primary" value="2">画画</lay-checkbox>
      <lay-checkbox name="like" skin="primary" value="3">运动</lay-checkbox>
    </lay-checkbox-group>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const checkeds = ref(['1','2']);
    const groupChange = function(val) {
      console.log("回调:" + JSON.stringify(val))
    }
    
    return {
        checkeds,
        groupChange
    }
  }
}
</script>
```


## 禁用状态


### 示例

```vue
<template>
    <lay-checkbox name="like" skin="primary" value="1" :disabled="disabled" v-model="checked6">禁用</lay-checkbox>
    <br/><br/>
    <lay-checkbox-group v-model="checkeds" :disabled="disabled">
      <lay-checkbox name="like" skin="primary" value="1">写作</lay-checkbox>
      <lay-checkbox name="like" skin="primary" value="2">画画</lay-checkbox>
      <lay-checkbox name="like" skin="primary" value="3">运动</lay-checkbox>
    </lay-checkbox-group>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const disabled = ref(true)
    const checked6 = ref(true);
    return {
      disabled,checked6
    }
  }
}
</script>
```


## 事件回调


### 示例

```vue
<template>
    <lay-checkbox name="like" skin="primary" value="1" @change="change" v-model="checked7">回调</lay-checkbox>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const checked7 = ref(true);

    const change = function(isChecked) {
        console.log("是否选中:" + isChecked)
    }

    return {
        change,
        checked7
    }
  }
}
</script>
```


## 半选状态


### 示例

在实现全选效果时，你可能会用到 `isIndeterminate` 属性。

```vue
<template>
    <lay-checkbox name="like" skin="primary" value="1" :isIndeterminate="isIndeterminate8" v-model="isChecked8" :disabled="true">全选</lay-checkbox>
    <hr/>
    <lay-checkbox-group v-model="checkeds8">
      <lay-checkbox name="like" skin="primary" value="1">写作</lay-checkbox>
      <lay-checkbox name="like" skin="primary" value="2">画画</lay-checkbox>
      <lay-checkbox name="like" skin="primary" value="3">运动</lay-checkbox>
    </lay-checkbox-group>
</template>

<script>
import { ref, computed, watch } from 'vue'

export default {
  setup() {

    const checkeds8 = ref([]);

    const isChecked8 = ref(false);

    watch(checkeds8, () => {
      isChecked8.value = checkeds8.value.length > 0;
    })

    const isIndeterminate8 = computed(() => {
      return checkeds8.value.length < 3;
    })

    return {
        checkeds8,
        isChecked8,
        isIndeterminate8
    }
  }
}
</script>
```


## Checkbox 属性


| 属性                | 描述          | 可选值               |
| ------------------- | ------------- | -------------------- |
| name                | 原始属性 name | --                   |
| skin                | 主题          | --                   |
| label               | 显示内容      | --                  |
| value               | 选中值        | --                   |
| v-model             | 是否选中      | `true` `false`       |
| isIndeterminate     | 半选状态      | `true` `false`       |
| disabled            | 是否禁用      | `true` `false`       |
| size                | 尺寸          | `lg` `md` `sm` `xs`         |


## Checkbox 事件


| 事件   | 描述     | 可选值               |
| ------ | -------- | -------------------- |
| change | 切换事件 | isChecked : 当前状态 |


## CheckboxGroup 属性


| 属性                | 描述          | 可选值               |
| ------------------- | ------------ | ------------------ |
| disabled            | 是否整体禁用      | `true` `false`      |

