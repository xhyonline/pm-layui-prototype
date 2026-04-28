# Lightweight Admin Scaffold

这个目录是可直接复制的轻量后台原型骨架。

## 设计来源

视觉基线和布局约束参考：

- `E:\work\dir\pm-skills\layui-vue-admin-master\src\layouts\BasicLayout.vue`
- `E:\work\dir\pm-skills\layui-vue-admin-master\src\styles\admin.css`
- `E:\work\dir\pm-skills\layui-vue-admin-master\src\store\app.ts`

抽取的关键默认值：

- 主色：`#009688`
- 侧栏深色：`rgb(34, 36, 37, 98%)` 与 `#171717`
- 内容区背景：`whitesmoke`
- 顶部高度：`50px`
- 侧栏宽度：展开 `220px`，收起 `60px`

## 适用场景

- 用户要求 `pnpm dev`
- 用户要完整后台原型，但不要求交付级复杂度
- 你想先复制一个可运行骨架，再补业务页

## 使用方式

1. 复制本目录全部文件到目标工程目录。
2. 运行 `pnpm install`。
3. 运行 `pnpm dev`。
4. 在现有 `views/` 下新增业务页，并在 `src/router/module/base-routes.ts` 中补路由。

## 当前包含

- `BasicLayout` 后台壳层
- 工作台页
- 1 个代表性 CRUD 页：`系统管理 / 用户管理`
- 可持久化的最小 UI store
- 与 `layui-vue-admin-master` 接近的颜色、header、side、tab、body 视觉基线

## 有意省略

- 登录页
- 权限系统
- 真实 API
- mockjs
- echarts
- 国际化完整接入
- 多主题设置面板

它的目标不是替代完整 `layui-vue-admin-master`，而是让原型任务从“可复制骨架”起步，而不是从空目录起步。
