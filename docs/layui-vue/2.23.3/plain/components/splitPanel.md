## 基本介绍


更灵活的布局方案。


## 基础使用


### 示例

```vue
<template>
<div>
    <lay-split-panel style="height: 300px">
        <lay-split-panel-item>A</lay-split-panel-item>
        <lay-split-panel-item>B</lay-split-panel-item>
        <lay-split-panel-item>C</lay-split-panel-item>
    </lay-split-panel>
</div>
</template>

<script>
</script>

<style>
	.lay-split-panel-item{
		display: flex;
		font-size: 16px;
		font-weight: bold;
		justify-content: center;
		align-items: center;
	}
</style>
```


## 自定义比例



### 示例

```vue
<template>
<div>
    <lay-split-panel style="height: 300px">
        <lay-split-panel-item :space="200">1</lay-split-panel-item>
        <lay-split-panel-item>2</lay-split-panel-item>
        <lay-split-panel-item :space="200">3</lay-split-panel-item>
    </lay-split-panel>
</div>
</template>

<script>
</script>
```


## 垂直布局



### 示例

```vue
<template>
<div>
    <lay-split-panel :vertical="true" style="height: 600px; width: 100%">
        <lay-split-panel-item>1</lay-split-panel-item>
        <lay-split-panel-item>2</lay-split-panel-item>
        <lay-split-panel-item>3</lay-split-panel-item>
    </lay-split-panel>
</div>
</template>

<script>
</script>
```


## 组合用法



### 示例

```vue
<template>
<div>
    <lay-split-panel style="height: 600px;">
        <lay-split-panel-item :space="300">
            <lay-split-panel :vertical="true" style="height: 600px; width: 100%">
                <lay-split-panel-item :space="200">1</lay-split-panel-item>
                <lay-split-panel-item>2</lay-split-panel-item>
            </lay-split-panel>
        </lay-split-panel-item>
        <lay-split-panel-item>2</lay-split-panel-item>
        <lay-split-panel-item>2</lay-split-panel-item>
    </lay-split-panel>
</div>
</template>

<script>
</script>
```


## splitPanel属性


| 属性  | 描述 | 类型 |可选值 | 默认值|
| ----- | ---- | ------ | ---| ---|
| vertical | 是否垂直布局 | Boolean |`true` `false`| false |
| minSize | 块拉动最小范围(按像素 `px`) | number | - | 50  |


## splitPanelItem属性


| 属性  | 描述 | 类型 |可选值 | 默认值|
| ----- | ---- | ------ | ---| ---|
| space | 设置当前item宽度，可传固定宽度如 `300` 、 `300px` 、 `20%`。必须传数值类型，不可传 如 `auto` 值 | `number` | `string` | - | 按照个数平分 |

