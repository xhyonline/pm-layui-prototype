## 基本介绍


用于代替原生的选择器，或者需要一个更优雅的多选器时。


## 基础使用


### 示例

使用 `lay-select` 标签, 创建下拉选择框。

```vue
<template>
  <lay-select v-model="value" placeholder="请选择">
    <lay-select-option :value="1" label="学习"></lay-select-option>
    <lay-select-option :value="2" label="编码"></lay-select-option>
    <lay-select-option :value="3" label="运动"></lay-select-option>
  </lay-select>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const value = ref(null);
    return {
      value
    }
  }
}
</script>
```


## 禁止选择


### 示例

通过 `disabled` 属性, 禁用下拉选择。

```vue
<template>
  <lay-select v-model="value2" :disabled="true">
    <lay-select-option value="1" label="学习"></lay-select-option>
    <lay-select-option value="2" label="编码"></lay-select-option>
    <lay-select-option value="3" label="运动"></lay-select-option>
  </lay-select>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const value2 = ref('1')

    return {
      value2
    }
  }
}
</script>
```


## 开启检索


### 示例

通过 show-search 属性开启内容检索, input 变为可输入状态。在 multiple 模式下, 检索框位于 dropdown 顶部, 同时你可以使用 search-method 属性自定义搜索逻辑。

```vue
<template>
  <lay-select v-model="value3" :show-search="true" :multiple="true">
    <lay-select-option value="1" label="学习"></lay-select-option>
    <lay-select-option value="2" label="编码"></lay-select-option>
    <lay-select-option value="3" label="运动"></lay-select-option>
  </lay-select>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const value3 = ref(['1'])

    return {
      value3
    }
  }
}
</script>
```


## 传入选项


### 示例

传入 options 数据，如果设置则不需要手动构造 select-option 节点。

```vue
<template>
  <lay-select v-model="value4" :items="items4" :options="items4"></lay-select>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const value4 = ref('1');

    const items4=ref([
      {label:'选项1', value:1},
      {label:'选项2', value:2},
      {label:'选项3', value:3, disabled:true},
    ])

    return {
      items4,
      value4,
    }
  }
}
</script>
```


## 允许清空


### 示例

通过 allow-clear 属性开启显示清空icon。

```vue
<template>
  <lay-select v-model="value5" :allow-clear="true">
    <lay-select-option :value="0" label="学习"></lay-select-option>
    <lay-select-option :value="1" label="编码"></lay-select-option>
    <lay-select-option :value="2" label="运动"></lay-select-option>
  </lay-select>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const value5 = ref('1')

    return {
      value5
    }
  }
}
</script>
```


## 开启多选


### 示例

通过 `multiple` 属性, 开启多选模式。

```vue
<template>
  <lay-select v-model="value6" multiple allow-clear placeholder="请选择">
    <lay-select-option value="1" label="学习"></lay-select-option>
    <lay-select-option value="2" label="编码" disabled></lay-select-option>
    <lay-select-option value="3" label="运动"></lay-select-option>
    <lay-select-option value="4" label="唱歌"></lay-select-option>
    <lay-select-option value="5" label="跳舞"></lay-select-option>
    <lay-select-option value="6" label="打篮球"></lay-select-option>
    <lay-select-option value="7" label="rap"></lay-select-option>
  </lay-select>
</template>

<script>
import { ref,watch } from 'vue'

export default {
  setup() {
    const value6 = ref([]);

    return {
      value6
    }
  }
}
</script>
```


## 循环渲染


### 示例

通过 show-search 属性开启内容检索, input 变为可输入状态。在 multiple 模式下, 检索框位于 dropdown 顶部。

```vue
<template>
  <lay-select v-model="value8">
    <template v-for="number of 50">
        <lay-select-option :value="number"> 选项 - {{number}}</lay-select-option>
    </template>
  </lay-select>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const value8 = ref(1)

    return {
      value8
    }
  }
}
</script>
```


## 使用插槽


### 示例

通过 `default` 插槽, 实现选项的自定义渲染。

```vue
<template>
  <lay-select v-model="value">
    <lay-select-option :value="1" label="学习"></lay-select-option>
    <lay-select-option :value="2" label="编码"></lay-select-option>
    <lay-select-option :value="3" label="运动">运动</lay-select-option>
  </lay-select>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const value = ref(null);
    return {
      value
    }
  }
}
</script>
```


## 使用头部插槽


### 示例

通过 `header` 插槽, 实现option头部渲染。

```vue
<template>
  <lay-select v-model="value9" multiple>
    <template #header>
      <div style="padding: 10px">
        <lay-checkbox v-model="checkboxValue" skin="primary" :isIndeterminate="isIndeterminate" @change="hanldeChange" value="1">全选</lay-checkbox>
      </div>
    </template>
    <lay-select-option :value="1" label="学习"></lay-select-option>
    <lay-select-option :value="2" label="编码"></lay-select-option>
    <lay-select-option :value="3" label="运动">运动</lay-select-option>
  </lay-select>
</template>

<script setup>
import { ref, watch} from 'vue'

const checkboxValue = ref(false)
const isIndeterminate = ref(false)
const value9 = ref([]);

watch(value9, (val) => {
  if (val.length === 0) {
    checkboxValue.value = false
    isIndeterminate.value = false
  } else if (val.length === 3) {
    checkboxValue.value = true
    isIndeterminate.value = false
  } else {
    checkboxValue.value = true
    isIndeterminate.value = true
  }
})

const hanldeChange = (v) => {
  isIndeterminate.value = false
  if (v) {
    value9.value = [1,2,3]
  }else {
    value9.value = []
  }
}
</script>
```


## 使用底部插槽


### 示例

通过 `footer` 插槽, 实现option底部渲染。

```vue
<template>
  <lay-select v-model="value">
    <lay-select-option :value="1" label="学习"></lay-select-option>
    <lay-select-option :value="2" label="编码"></lay-select-option>
    <lay-select-option :value="3" label="运动">运动</lay-select-option>
    <template #footer>
      footer
    </template>
  </lay-select>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const value = ref(null);
    return {
      value
    }
  }
}
</script>
```


## 选项分组


### 示例

使用 `lay-select-option-group` 对备选项进行分组，它的 label 属性为分组名

```vue
<template>
  <lay-select v-model="value">
    <template  v-for="option in options">
        <lay-select-option-group :label="option.label">
          <template v-for="children in option.children">
            <lay-select-option :value="children.value" :label="children.label"></lay-select-option>
          </template>
        </lay-select-option-group>
    </template>
  </lay-select>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const value = ref(null);
    const options = ref([{
      label: "分组",
      children: [
        {
          label: "运动",
          value: 0
        },
        {
          label: "编码",
          value: 1
        },
        {
          label: "运动",
          value: 2
        }
      ]
    },
    {
      label: "分组",
      children: [
        {
          label: "运动",
          value: 3
        },
        {
          label: "编码",
          value: 4
        },
        {
          label: "运动",
          value: 5
        }
      ]
    }]);

    return {
      value,
      options
    }
  }
}
</script>
```


## Select 属性


| 属性                | 描述                               | 类型                                        | 可选值              | 默认值   |版本   |
| ------------------- | ---------------------------------- | ------------------------------------------- | ------------------- | -------- |------ |
| v-model             | 选中值                             | `string`/`number`/`Array`                   | -                   | -        |    |
| name                | 原生 name 属性                     | `string`                                    | -                   | -        |    |
| placeholder         | 默认空提示语                       | `string`                                    | -                   | `请选择` |    |
| allowClear            | 允许清空                           | `boolean`                                   | `true` `false`      | `false`  |    |
| disabled            | 是否禁用                           | `boolean`                                   | `true` `false`      | `false`  |    |
| multiple            | 是否为多选                         | `boolean`                                   | `true` `false`      | `false`  |    |
| size                | 尺寸                               | `string`                                    | `lg` `md` `sm` `xs` | `md`     |    |
| showSearch          | 开启搜索                           | `boolean`                                   | --                  | --       |    |
| searchMethod        | 自定义搜索逻辑 (text, optionProps) | `Function`                                  | --                  | --       |    |
| searchPlaceholder   | 搜索提示                           | `string`                                    | --                  | --       |    |
| minCollapsedNum     | 多选模式最小折叠数量               | `number`                                    | --                  | --       |    |
| collapseTagsTooltip | 多选折叠后时候悬浮展示             | `boolean`                                   | --                  | --       |    |
| contentStyle        | 内容自定义样式                     | `StyleValue`                                | --                  | --       |    |
| contentClass        | 内容自定义 Class                   | `string` `Array<string \| object>` `object` | --                  | --       |    |
| autoFitWidth        | 是否将下拉面板宽度设置为触发器宽度    | `boolean` | --                  | `true`      |    |
| autoFitMinWidth        | 是否将下拉面板最小宽度设置为触发器宽度    | `boolean` | --                  | `true`      |  `2.19.1`  |
| options (items)   |  传入选项                | `Array<Object>` | --                  | --       |    |
| teleportProps       | 继承至 dropdown 组件，下拉面板 `传递` 属性  | `object`             | `{to: 'body', disabled: false}`   |  `vue teleport` 组件  | `2.19.0` |


## Select 事件


| 属性   | 描述           | 接收值                  |  版本  |
| ------ | -------------- | ----------------------- |-------- |
| change | 切换事件       | value                   |  - |
| search | 关键词变化事件 | 用户输入的关键词 string |  -  |
| remove-tag | 多选场景删除tag | 删除的选项value | `2.18.3` |
| clear | 点击清空icon | - | `2.18.3` |


## Select Option 属性

| 属性     | 描述                                                | 类型                | 可选值         | 默认值  |
| -------- | --------------------------------------------------- | ------------------- | -------------- | ------- |
| label    | 标签值(`必填`)                                      | `string`            | -              | -       |
| value    | 值                                                  | `string` / `number` | -              | -       |
| keyword  | 用于匹配关键词的数据，传入文本+拼音可以支持拼音搜索 | `string`            | -              | -       |
| disabled | 是否禁用                                            | `boolean`           | `true` `false` | `false` |


## Select Option 插槽


| 属性    | 描述          | 接收值 |
| ------- | ------------- | ------ |
| default | 默认(`label`) | -      |
| prepend | 自定义前缀    | -      |
| append  | 自定义后缀    | -      |
| header  | 下拉列表顶部内容    | -      |
| footer  | 下拉列表底部内容    | -      |

