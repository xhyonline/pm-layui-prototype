## 基本介绍


当用户需要频繁返回顶部查看相关内容时。


## 基础使用

### 示例

回到顶部组件的默认样式，`lay-backtop` 会自动寻找最近的可滚动祖先元素，也可以使用 `target` 属性指定触发滚动事件的元素，通过滑动来查看页面右下角的正方形按钮。

```vue
<template>
  <lay-backtop></lay-backtop>
</template>

<script>
</script>
```


## 自定义


## 挂载容器

### 示例

通过设置 `target` 和 `position="absolute"` 参数，可对特定容器进行返回顶部操作

```vue
<template>
<!-- 需要用一个 div 包裹触发滚动事件的目标元素和 lay-backtop 组件 -->
<div class="wrapper" style="width:700px; height:300px;">
  <div id="scrollContent" style="overflow-y:auto; overflow-x:auto; width:700px; height:300px;background-color:whitesmoke;">
    <lay-panel v-for="(n,index) in 50" :key="n" style="margin:10px;padding:10px;">内容</lay-panel>
  </div>
  <lay-backtop target="#scrollContent" :showHeight="100" :bottom="30" position="absolute"></lay-backtop>
</div>
</template>

<script>
export default {
  setup() {
    
    return {
      
    }
  }
}
</script>
```


## 属性


| 属性         | 描述                                           | 类型             | 默认值           | 可选值                         |
| ------------ | ---------------------------------------------  | ---------------- | ---------------- | ------------------------------ |
| target       | 可选，触发滚动事件的对象                        | string \| Window | `window`         | `CSS/Element 选择器` `window` |
| showHeight   | 可选，滚动高度达到该值后<br>显示回到顶部按钮     | number           | `200`            | —                              |
| disabled     | 可选，禁用点击返回顶部                          | boolean          | `false`          | `true` `false`                 |
| position     | 可选，定位方式，特定容器内部<br>需设置为 absolute | string           | `fixed`          | `absolute` `fixed`             |
| right        | 可选，按钮距离页面右边距                        | number           | `30`             | —                              |
| size         | 可选，按钮大小                                 | string           | ——               | `medium` `small`        |
| bottom       | 可选，按钮距离页面底部位置                      | number           | `40`             | `40`                           |
| bgcolor      | 可选，背景颜色                                 | string           | `#9F9F9F`        | —                              |
| opacity      | 可选，不透明度                                 | number           | `0.95`           | `0-1`                          |
| color        | 可选，前景颜色                                 | string           | `#FFFFFF`        | —                              |
| borderRadius | 可选，添加圆角                                 | number \| string | `2`              | e: 2 \| 2px \|50%              |
| circle       | 可选，使用圆形按钮                             | boolean          | `false`          | `true`  `false`                |
| icon         | 可选，图标类型                                 | string           | `layui-icon-top` | `lay-icon`组件支持的所有类型   |
| iconSize     | 可选，图标大小                                 | number           | `30`             | `30`                           |
| iconColor    | 可选，图标颜色                                 | string           | `#FFFFFF`        | —                              |


## Backtop 事件


| 事件   | 描述                       |   参数   |
| ------ | -------------------------- | -------- |
| click  | 点击回到顶部按钮的回调函数  | event    |


## Backtop 插槽


| 插槽 | 说明       |
| ------ | ---------- |
| default| 自定义内容 |

