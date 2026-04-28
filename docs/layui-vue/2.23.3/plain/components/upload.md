## 基本介绍


文件上传


## 基础使用


### 示例

使用 `lay-upload` 标签, 创建一个上传按钮

```vue
<template>
  <lay-upload url="https://www.mocky.io/v2/5cc8019d300000980a055e76" field="file" @done="doneHandle" multiple>
    <template #preview>
      <img v-if="data" :src="data.url" style="width: 100px;"/>
    </template>
  </lay-upload>
</template>

<script setup>
import { ref,reactive } from 'vue'

const data = ref();

const doneHandle = (result) => {
  data.value = JSON.parse(result.data);
  console.log(data.value.url)
};
</script>
```


## 手动上传


### 示例

通过设置 `auto` 属性为 `false`, 使用 `v-model` 接收选择的文件对象。

```vue
<template>
  <div style="display:flex;flex-direction: column;">
    <lay-upload ref="uploadRef" url="https://www.mocky.io/v2/5cc8019d300000980a055e76" v-model="file1" field="file" :auto="false">
      <template #preview>
        {{ file1[0]?.name }}
      </template>
    </lay-upload>
    <lay-button @click="handleUpload">上传服务器</lay-button>
  </div>
</template>

<script setup>
import { ref,reactive } from 'vue'

const file1 = ref([]);
const uploadRef = ref(null)

const handleUpload = () => {
  uploadRef.value.submit()
}
</script>
```


## 默认插槽


### 示例

使用 `default` 插槽, 自定义入口

```vue
<template>
  <lay-upload @done="getUploadFile" @choose="beginChoose">
    <template v-slot:default="params">
      <lay-button>上传 - 是否禁用 - {{ params.disabled }}</lay-button>
    </template>
    <template #preview>
      <div v-for="(item,index) in picList" :key="`demo1-pic-'${index}`">
        <img :src="item"/>
      </div>
    </template>
  </lay-upload>
</template>

<script setup>
import { ref,reactive } from 'vue'

const picList = ref([]);
const filetoDataURL=(file,fn)=>{
  const reader = new FileReader();
  reader.onloadend = function(e){
    fn(e.target.result);
  };
  reader.readAsDataURL(file);
};
const getUploadFile=(files)=>{
  if(Array.isArray(files)&&files.length>0){
    files.forEach((file,index,array)=>{
      filetoDataURL(file,(res)=>{
        console.log(res);
        picList.value.push(res);
        console.log(picList.value);
      });
    });
  }
};
const beginChoose =(e)=>{
  console.log("beginChoose",e);
};

</script>
```


## 多文件上传


### 示例

使用 `lay-upload` 标签, 并使用 `multiple` 创建一个可上传多个文件的上传组件

```vue
<template>
  <lay-upload :multiple="true"></lay-upload>
</template>
```


## 拖拽上传


### 示例

使用 `lay-upload` 标签, 使用 `drag属性` 创建一个可拖拽的上传文件域

```vue
<template>
  <lay-upload :drag="true"></lay-upload>
</template>
```


## 文件夹上传


### 示例

使用 `directory` 开启文件夹上传

```vue
<template>
  <lay-upload directory @onChange="handleChange"></lay-upload>
</template>

<script setup>

const handleChange = (file) => {
  console.log(file, "文件")
  console.log(file.length, "文件数量")
}

</script>
```


## 自定义预览/上传禁用


### 示例

使用 `lay-upload` 标签, 使用 `#preview` 自定义预览的 UI 交互,使用 `disabled` 对上传按钮添加禁用状态,使用 `disabledPreview` 对上传预览区域添加禁用状态

```vue
<template>
  <lay-upload @done="getUploadFile2" :disabled="true" :disabledPreview="true">
    <template #preview>
      <div class="easy-wrap">
        <img src="https://chixian.oss-cn-hangzhou.aliyuncs.com/20211023003617_0706a.jpg" style="width:62.9px;height:63.2px"/>
        <img src="https://chixian.oss-cn-hangzhou.aliyuncs.com/20211023003617_0706a.jpg" style="width:62.9px;height:63.2px"/>
        <img src="https://chixian.oss-cn-hangzhou.aliyuncs.com/20211023003617_0706a.jpg" style="width:62.9px;height:63.2px"/>
        <img src="https://chixian.oss-cn-hangzhou.aliyuncs.com/20211023003617_0706a.jpg" style="width:62.9px;height:63.2px"/>
        <img src="https://chixian.oss-cn-hangzhou.aliyuncs.com/20211023003617_0706a.jpg" style="width:62.9px;height:63.2px"/>
      </div>
    </template>
  </lay-upload>
</template>

<script setup>
import { ref } from 'vue'

const getUploadFile2 = (file)=>{
  console.log(file);
};
</script>
```


## 开启裁剪


## 钩子函数


## Upload 属性


| 属性            | 描述                                                    | 类型                             | 默认值                       | 可选值      |
| --------------- | ------------------------------------------------------- | -------------------------------- | ---------------------------- | ----------- |
| url             | 服务端上传接口的地址                                    | string                           | --                           | --          |
| data            | 请求上传接口的额外参数                                  | object                           | --                           | --          |
| headers         | 接口的请求头                                            | object                           | --                           | --          |
| acceptMime      | 文件选择框时的可选文件类型       | string                           | `MIME_type`                  | [文件类型可查看](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file) |
| auto            | 是否自动提交                                            | boolean                          | true                        | --          |
| field           | 设定文件域的字段名                                      | string                           | `file`                       | --          |
| size            | 设置文件最大可允许上传的大小，单位 KB。不支持 ie8/9     | number                           | `0(不限制)`                  | --          |
| multiple        | 是否允许多文件上传。设置 true 即可开启。不支持 ie8/9    | boolean                          | false                        | --          |
| number          | 设置同时可上传的文件数量，一般配合 multiple 参数出现。  | number                           | `0(不限制)`                  | --          |
| drag            | 是否接受拖拽的文件上传，设置 false 可禁用。不支持 ie8/9 | boolean                          | true                         | --          |
| disabled        | 设置文件禁用                                            | boolean                          | false                        | --          |
| disabledPreview | 设置文件预览插槽区域为禁用状态                          | boolean                          | false                        | --          |
| directory `2.21.2`      | 支持上传文件夹                | boolean                          | false                        | --          |
| cut             | 开启裁剪(`acceptMime`为image类型生效)                 | boolean                          | false                        | --          |
| cutOptions      | 开启剪裁的模态弹窗与剪裁框的配置                        | object                           | { layerOption,copperOption } | --          |
| text            | 普通上传描述                                            | string                           | --                           | --          |
| dragText        | 拖拽上传描述                                            | string                           | --                           | --          |
| beforeUpload    | 上传之前的钩子（1.9.4）                                 | Function : boolean Promise       | --                           | --          |
| onProgress      | 上传过程的回调（1.9.8）                                 | Function（event: ProgressEvent） | --                           | --          |


## Upload 插槽


| 名称    | 描述           | 参数 |
| ------- | -------------- | ---- |
| preview | 自定义预览效果 | --   |


## Upload 事件


| 名称     | 描述                                                                                  | 参数 |
| -------- | ---------------------------- | ---- |
| choose   | 打开系统选择文件窗体的回调     |`currentTimeStamp`   |
| on-change(2.17.0)   | 选择文件后回调  | `[File]`(文件数组)   |
| before   | 上传事务开启前的回调 (在 1.9.4 版本新增 before-upload 属性，来代替该事件，仍向后兼容) | --   |
| done     | 上传事务结束的回调           | {`currentTimeStamp`, `msg`, `data`}  |
| error    | 上传事务中出现错误的回调    | {`currentTimeStamp`, `msg`}   |
| cutdone  | 剪裁完成                 | {`currentTimeStamp`, `cutResult`(剪裁后base64文件),`orgInfo`(原图片文件)}  |
| cutcancel | 剪裁取消                  | {`currentTimeStamp`}   |


## Upload Exposes


| 名称   | 描述             | 参数 |
| ------ | ---------------- | ---- |
| submit | 手动触发上传方法 | --   |

