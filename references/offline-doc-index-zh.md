# 离线文档索引

把这个文件当作本地 `layui-vue` 与 `layui-vue-admin` 原型资料的统一入口。

## 为什么需要这份索引

- 降低 AI 和人工查找资料的成本。
- 让“页面意图 -> 本地示例 -> 离线组件文档”这条路径更直接。
- 把适合首读的标准化文档与上游原始兜底文档分开说明。

## 快速路径

开始处理原型任务时，按这个顺序走：

1. 先读这份索引，确定应该看哪个示例、哪个组件族。
2. 如果用户要完整工程、可运行演示或 `pnpm dev`，先读 [full-project-generation-zh.md](full-project-generation-zh.md)。
3. 如果任务是后台/Admin 页面，再读 [layui-vue-admin-source-map.md](layui-vue-admin-source-map.md)。
4. 再读 [layui-vue-admin-patterns.md](layui-vue-admin-patterns.md)，确认后台壳层与页面组织规则。
5. 再读 [layui-vue-components.md](layui-vue-components.md)，确定组件族。
6. 打开 `docs/layui-vue/2.23.3/plain/components/` 下对应的标准化组件文档。
7. 只有当语法、参数或事件仍有歧义时，再打开 `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/` 下的上游原始文档。

## 路径规则

对于任意名为 `xyz` 的组件：

- 标准化文档：`docs/layui-vue/2.23.3/plain/components/xyz.md`
- 上游原始文档：`assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/xyz.md`

对于任意名为 `xyz` 的 guide：

- 标准化 guide：`docs/layui-vue/2.23.3/plain/guide/xyz.md`
- 上游原始 guide：`assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/guide/xyz.md`

## 后台示例索引

优先读这些本地示例，不要一上来就去翻更大的源码树。

如果用户要的是完整工程，这些示例只负责页面结构参考，不负责定义最终目录骨架。

| 页面意图 | 示例文件 | 适用场景 |
| --- | --- | --- |
| 后台壳层 / 总体布局 | `assets/examples/admin/layout/basic-layout-shell.vue` | 左侧菜单、顶部头部、标签栏、面包屑 |
| 路由 / 菜单结构 | `assets/examples/admin/router/admin-route-map.ts` | 菜单分组、路由 meta、信息架构 |
| 仪表盘 / 工作台 | `assets/examples/admin/pages/dashboard-workbench.vue` | 快捷入口、卡片、动态区块 |
| CRUD 列表页 | `assets/examples/admin/pages/crud-user-page.vue` | 搜索卡片、表格、工具栏、弹窗 |
| 树形 / 权限页 | `assets/examples/admin/pages/menu-tree-page.vue` | 树表、节点操作、菜单管理 |
| 居中表单页 | `assets/examples/admin/pages/base-form-page.vue` | 引导卡片、居中表单、提交底栏 |

## 页面类型路由表

用这张表判断应该先读哪个示例、再读哪些组件文档。

| 需求页面 | 优先读的示例 | 接着读的组件文档 |
| --- | --- | --- |
| 仪表盘 | `pages/dashboard-workbench.vue` | `grid`、`card`、`tag`、`progress`、`table`、`noticeBar` |
| CRUD 列表 | `pages/crud-user-page.vue` | `card`、`form`、`input`、`select`、`datePicker`、`table`、`page`、`layer` |
| 树形 / 权限页 | `pages/menu-tree-page.vue` | `table`、`tree`、`switch`、`tag`、`layer` |
| 简单表单页 | `pages/base-form-page.vue` | `form`、`input`、`select`、`radio`、`checkbox`、`switch`、`textarea`、`button` |
| 详情页 | 没有直接示例；复用 CRUD 或表单布局 | `pageHeader`、`card`、`descriptions`、`tag`、`timeline`、`table` |
| 弹窗 / 抽屉编辑 | `pages/crud-user-page.vue` | `layer`、`drawer`、`form`、`input`、`select`、`switch`、`textarea` |
| 结果页 / 异常页 | 没有直接示例 | `result`、`exception`、`button`、`card` |
| 审批流页面 | 复用表单或详情页布局 | `step`、`timeline`、`descriptions`、`form`、`tag`、`table` |

## 高频组件索引

这些组件最常出现在 PM 后台原型里。

| 组件 | 常见用途 | 标准化文档 | 上游原始文档 |
| --- | --- | --- | --- |
| `layout` | 页面壳层结构 | `docs/layui-vue/2.23.3/plain/components/layout.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/layout.md` |
| `container` | 页面包裹容器 | `docs/layui-vue/2.23.3/plain/components/container.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/container.md` |
| `grid` | 行列布局 | `docs/layui-vue/2.23.3/plain/components/grid.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/grid.md` |
| `card` | 默认内容区块 | `docs/layui-vue/2.23.3/plain/components/card.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/card.md` |
| `pageHeader` | 页面标题与操作区 | `docs/layui-vue/2.23.3/plain/components/pageHeader.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/pageHeader.md` |
| `menu` | 侧边导航 | `docs/layui-vue/2.23.3/plain/components/menu.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/menu.md` |
| `breadcrumb` | 当前位置 | `docs/layui-vue/2.23.3/plain/components/breadcrumb.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/breadcrumb.md` |
| `tab` | 标签分组 | `docs/layui-vue/2.23.3/plain/components/tab.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/tab.md` |
| `step` | 多步骤流程 | `docs/layui-vue/2.23.3/plain/components/step.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/step.md` |
| `form` | 表单容器 | `docs/layui-vue/2.23.3/plain/components/form.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/form.md` |
| `input` | 文本输入 | `docs/layui-vue/2.23.3/plain/components/input.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/input.md` |
| `textarea` | 长文本输入 | `docs/layui-vue/2.23.3/plain/components/textarea.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/textarea.md` |
| `inputNumber` | 数值输入 | `docs/layui-vue/2.23.3/plain/components/inputNumber.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/inputNumber.md` |
| `select` | 下拉选择 | `docs/layui-vue/2.23.3/plain/components/select.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/select.md` |
| `radio` | 小范围单选 | `docs/layui-vue/2.23.3/plain/components/radio.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/radio.md` |
| `checkbox` | 多选 | `docs/layui-vue/2.23.3/plain/components/checkbox.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/checkbox.md` |
| `switch` | 开关状态 | `docs/layui-vue/2.23.3/plain/components/switch.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/switch.md` |
| `datePicker` | 日期筛选或编辑 | `docs/layui-vue/2.23.3/plain/components/datePicker.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/datePicker.md` |
| `timeSelect` | 时间范围选择 | `docs/layui-vue/2.23.3/plain/components/timeSelect.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/timeSelect.md` |
| `cascader` | 层级选择 | `docs/layui-vue/2.23.3/plain/components/cascader.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/cascader.md` |
| `treeSelect` | 可见树形选择 | `docs/layui-vue/2.23.3/plain/components/treeSelect.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/treeSelect.md` |
| `upload` | 文件或图片上传 | `docs/layui-vue/2.23.3/plain/components/upload.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/upload.md` |
| `table` | 列表与审核队列 | `docs/layui-vue/2.23.3/plain/components/table.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/table.md` |
| `page` | 分页 | `docs/layui-vue/2.23.3/plain/components/page.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/page.md` |
| `descriptions` | 详情字段展示 | `docs/layui-vue/2.23.3/plain/components/descriptions.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/descriptions.md` |
| `tag` | 状态标签 | `docs/layui-vue/2.23.3/plain/components/tag.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/tag.md` |
| `badge` | 数量角标 | `docs/layui-vue/2.23.3/plain/components/badge.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/badge.md` |
| `progress` | 进度展示 | `docs/layui-vue/2.23.3/plain/components/progress.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/progress.md` |
| `timeline` | 操作历史 | `docs/layui-vue/2.23.3/plain/components/timeline.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/timeline.md` |
| `tree` | 树形展示 | `docs/layui-vue/2.23.3/plain/components/tree.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/tree.md` |
| `layer` | 弹窗、消息、确认 | `docs/layui-vue/2.23.3/plain/components/layer.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/layer.md` |
| `drawer` | 抽屉编辑 | `docs/layui-vue/2.23.3/plain/components/drawer.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/drawer.md` |
| `loading` | 加载态 | `docs/layui-vue/2.23.3/plain/components/loading.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/loading.md` |
| `popconfirm` | 危险操作确认 | `docs/layui-vue/2.23.3/plain/components/popconfirm.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/popconfirm.md` |
| `tooltip` | 行内提示 | `docs/layui-vue/2.23.3/plain/components/tooltip.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/tooltip.md` |
| `dropdown` | 操作菜单 | `docs/layui-vue/2.23.3/plain/components/dropdown.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/dropdown.md` |
| `noticeBar` | 通知条 | `docs/layui-vue/2.23.3/plain/components/noticeBar.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/noticeBar.md` |
| `result` | 成功/失败结果页 | `docs/layui-vue/2.23.3/plain/components/result.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/result.md` |
| `exception` | 路由级异常页 | `docs/layui-vue/2.23.3/plain/components/exception.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/exception.md` |

## Guide 索引

这些是最常用的非组件类文档。

| Guide | 标准化文档 | 上游原始文档 | 用途 |
| --- | --- | --- | --- |
| `introduce` | `docs/layui-vue/2.23.3/plain/guide/introduce.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/guide/introduce.md` | 快速了解整体能力 |
| `getStarted` | `docs/layui-vue/2.23.3/plain/guide/getStarted.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/guide/getStarted.md` | 安装与基础用法 |
| `locale` | `docs/layui-vue/2.23.3/plain/guide/locale.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/guide/locale.md` | 国际化和语言设置 |
| `theme` | `docs/layui-vue/2.23.3/plain/guide/theme.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/guide/theme.md` | 主题变量 |
| `dark` | `docs/layui-vue/2.23.3/plain/guide/dark.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/guide/dark.md` | 暗色模式行为 |
| `problem` | `docs/layui-vue/2.23.3/plain/guide/problem.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/guide/problem.md` | 常见问题与注意事项 |
| `upgrade` | `docs/layui-vue/2.23.3/plain/guide/upgrade.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/guide/upgrade.md` | 升级说明 |

## 当用户描述模糊时

用这套收敛规则：

- 如果用户要的是完整后台页面，先读最匹配的后台示例。
- 如果用户要的是页面中的一个模块，先读对应组件族。
- 如果用户问的是精确的 props、events、slots 或语法行为，直接打开标准化组件文档。
- 如果标准化文档疑似在转换过程中丢了信息，再去上游原始文档核对。
