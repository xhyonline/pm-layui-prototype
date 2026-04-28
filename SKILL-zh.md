---
name: pm-layui-prototype
description: 当用户希望产出产品经理风格的线框图、页面原型、PRD 转页面草稿、后台页面、CRUD 列表、仪表盘、表单、审批流或交互结构时，使用此技能。实现必须限定在 `layui-vue 2.23.3` 与 `layui-vue-admin` 技术栈内。该技能主要面向桌面端管理后台；当用户要求“完整工程”“可运行演示”“支持 `pnpm dev`”时，必须优先生成完整后台工程，而不是单页 demo。
---

# PM Layui Prototype

这个技能用于固定技术栈下的 PM 导向后台/Admin 原型工作：

- 前端 UI：`layui-vue 2.23.3`
- 后台壳层：`layui-vue-admin`

除非用户明确放宽限制，否则不要使用 `Element Plus`、`Ant Design Vue`、`Naive UI`、`Vant` 或自定义设计系统。

## 输出目标

产出的内容应当像是来自一个已经在使用 `layui-vue-admin` 的团队。

优先输出：

- 符合后台场景的信息架构
- 页面模块拆分
- 组件映射
- 交互说明
- 路由和菜单建议
- 在用户要求写代码时，提供 `Vue SFC` 原型代码
- 供演示和评审使用的前端 mock 数据
- 在用户要求写代码时，补充可运行的落地说明
- 当用户明确要求完整工程时，提供可直接 `pnpm install` / `pnpm dev` 的后台项目骨架

## 工作流程

1. 先阅读用户需求，并识别：
   - 页面类型
   - 用户角色
   - 核心任务
   - 数据对象
   - 用户需要的是完整后台工程、后台页面，还是某个业务模块
2. 阅读 [references/stack-rules.md](references/stack-rules.md)。
3. 阅读 [references/version-matrix.md](references/version-matrix.md)。
4. 阅读 [references/offline-doc-index-zh.md](references/offline-doc-index-zh.md)。
5. 阅读 [docs/layui-vue/2.23.3/plain/README.zh.md](docs/layui-vue/2.23.3/plain/README.zh.md)。
6. 如果用户要求更快出稿、直接生成、少解释或明显偏向执行优先，先阅读 [references/fast-mode-zh.md](references/fast-mode-zh.md)。
7. 如果用户要求完整工程、可运行演示或明确提到 `pnpm dev`，先阅读 [references/full-project-generation-zh.md](references/full-project-generation-zh.md)。
8. 如果任务是管理后台页面，在开始写代码前先阅读：
   - [references/layui-vue-admin-patterns.md](references/layui-vue-admin-patterns.md)
   - [references/layui-vue-admin-source-map.md](references/layui-vue-admin-source-map.md)
9. 只读取和页面类型相关的示例与文档：
   - `assets/examples/admin/` 下整理过的后台示例
   - `docs/layui-vue/2.23.3/plain/components/*.md` 下整理过的组件文档
   - `docs/layui-vue/2.23.3/plain/guide/*.md` 下整理过的指南文档
   - 当语法细节必须精确时，再读 `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/*.md` 下的上游原始组件文档
   - 当语法细节必须精确时，再读 `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/guide/*.md` 下的上游原始指南文档
   - 离线路由索引：[references/offline-doc-index-zh.md](references/offline-doc-index-zh.md)
   - 组件总览：[references/layui-vue-components.md](references/layui-vue-components.md)
   - 文档语法说明：[references/layui-vue-doc-syntax.md](references/layui-vue-doc-syntax.md)
   - 输出格式说明：[references/prototype-output-spec.md](references/prototype-output-spec.md)
10. 将每个可见区块映射到允许使用的 `layui-vue` 组件，或简单原生 HTML 结构。
11. 如果用户要求的模式在允许的栈内不存在，要明确说明，并给出最接近的 `Layui` 兼容替代方案。
12. 保持实现适合原型阶段：
   - 简单
   - 易读
   - 方便 PM 评审
   - 尽量贴近 `layui-vue-admin` 的结构
13. 在绘制原型时，直接在前端构造展示数据：
   - 使用本地 mock 数组、对象和状态字段
   - 不要把后端接口作为页面可渲染的前置依赖
   - 即使后端服务尚未存在，也要保证原型可评审
14. 在交付代码后，还要告诉用户如何启动它：
   - 如果用户已经有 `layui-vue-admin` 或 `Vue` 项目，要说明应该新增或替换哪个文件、如何注册路由或菜单，以及应该运行该项目现有的哪个启动命令
   - 如果用户要求完整工程或可运行演示，默认给出完整后台工程的启动方式，至少包含 `pnpm install` 与 `pnpm dev`
   - 只有当用户明确只要单页预览、且没有要求完整工程时，才退回到最轻量的 `Vue 3 + Vite + @layui/layui-vue` 预览路径
   - 如果当前上下文只有这个 skill 仓库，要明确说明这个仓库本身是技能与参考资料包，不是一个可以直接启动的原型工程

## 进度反馈规则

长任务执行时不要长时间静默。

- 在开始较大规模阅读或生成前，先发一条简短进度说明，说明当前步骤
- 当工作持续较久时，至少每 `20-30` 秒反馈一次当前进度
- 如果任务是完整工程，至少在这些里程碑反馈一次：
  - 参考资料读取完成
  - 工程骨架创建完成
  - layout、router、store 完成
  - 第一个代表性业务页完成
  - 剩余页面完成
  - 正在执行安装或构建验证
- 如果某一步预计会超过 1 分钟，要在执行前明确告知用户
- 如果用户要求评估 skill 效率，要按步骤记录耗时，并指出最耗时的阶段

## 完整工程模式

当用户出现以下任一意图时，默认进入“完整工程模式”：

- 明确说要完整工程、完整项目、后台系统、演示项目
- 明确要求支持 `pnpm dev`
- 说要交付给他人演示，而不是只看单页原型

完整工程模式下必须遵守：

- 生成 `package.json`、`vite.config.ts`、`tsconfig.json`、`index.html`、`src/main.ts`、`src/App.vue`
- 生成独立的 `src/layouts/`，不要把 layout 直接塞进 `App.vue`
- 生成 `src/router/`，并使用 `BasicLayout` + 子路由的后台组织方式
- 生成 `src/views/`、`src/styles/`、`src/store/`
- 优先使用 `TypeScript`
- 默认使用 `pnpm` 脚本约定：`pnpm install`、`pnpm dev`、`pnpm build`
- 页面演示数据保留在前端本地，可使用 `mockjs` 或本地 mock 文件
- 除非用户明确要求，否则不要省略菜单、面包屑、tab、全局内容区这些后台骨架要素
- 除非用户明确要求极简，否则不要退化成一个只有 `App.vue + router + views` 的简化 demo
- 生成顺序优先这样加速：
  - 先搭最小可运行骨架
  - 再补 layout、router、store 和共享 mock 数据
  - 再实现 1 个代表性业务页
  - 最后复用模式补齐剩余页面
- 不要把整个工程放进一次超长、无反馈的大批量生成里
- 额外说明文档、可选依赖、非关键润色，放到“已经可以运行”之后再补

## 快速模式

当用户出现以下任一意图时，优先进入“快速模式”：

- 请直接生成
- 快一点
- 不用解释太多
- 先出代码
- 先给我能跑的版本

快速模式下：

- 首轮只读 `references/fast-mode-zh.md`
- 如果目标是完整工程，再补读 `references/full-project-generation-zh.md`
- 再读 1 个最贴近的页面示例，不要同时展开多个示例
- 不要首轮通读 `docs/layui-vue/2.23.3/plain/components/` 全目录
- 不要首轮读取 `assets/vendor/` 下的原始资料
- 只有当具体组件语法、事件、插槽拿不准时，才去补读单个组件文档
- 如果已经有最小骨架参考，就直接按骨架生成，不要重新推导目录结构
- 找到最小可信参考集后就停止继续阅读，直接开始写代码
- 优先做“1 个代表页 + 可复用共享模式”，不要每个页面都从零起草

## 面向后台场景的默认假设

当用户要的是管理后台，且没有额外说明时，默认：

- 采用桌面端优先布局
- 使用 `layui-vue-admin` 的左侧导航和顶部头部
- 头部包含面包屑
- 多页系统在头部下方包含标签栏
- 各区块优先使用卡片作为容器
- CRUD 页面默认采用“顶部搜索卡片 + 下方表格区域”
- 简单新增/编辑流程默认使用弹窗或抽屉
- 如果用户要求可运行演示，默认包含 `layouts/router/store/styles` 目录，而不是只返回页面文件

如果用户只要求某个业务页面，也要保证其内部布局能兼容后台壳层。

## 示例选择

优先读取最轻量、最贴近需求的示例：

- 如果目标是完整工程：
  - `references/fast-mode-zh.md`
  - `references/full-project-generation-zh.md`
  - `references/layui-vue-admin-source-map.md`
  - `assets/examples/admin/project/minimal-admin-skeleton.md`
- 后台壳层或信息架构：
  - `assets/examples/admin/layout/basic-layout-shell.vue`
  - `assets/examples/admin/router/admin-route-map.ts`
- 仪表盘：
  - `assets/examples/admin/pages/dashboard-workbench.vue`
- CRUD 列表：
  - `assets/examples/admin/pages/crud-user-page.vue`
- 树形或权限类页面：
  - `assets/examples/admin/pages/menu-tree-page.vue`
- 居中表单页：
  - `assets/examples/admin/pages/base-form-page.vue`

只有当这些示例仍不足以覆盖需求时，再去读完整的本地 admin 项目。

## 强约束

- 只使用 `layui-vue` 兼容的组件和样式模式。
- 页面布局必须兼容 `layui-vue-admin`。
- 不要引入其他 UI 库。
- 不要创造与 Layui Admin 默认风格冲突的视觉语言。
- 优先使用卡片、表单、表格、标签页、抽屉、对话框、标签、开关，而不是自定义小部件。
- 产出原型代码时，除非用户明确要求接接口，否则数据应保留在前端本地。
- 这个技能默认面向桌面后台，而不是移动端应用。
- 当用户要求完整工程时，不要用“单文件壳层示例”替代真正的目录骨架。

## 参考资料加载规则

- 首轮阅读优先使用 `docs/layui-vue/2.23.3/plain/` 下整理过的离线文档。
- 当你需要根据“页面意图”快速决定该读哪个示例、哪个组件文档时，优先看 [references/offline-doc-index-zh.md](references/offline-doc-index-zh.md)。
- 扫描概览时优先使用 `references/` 下的整理资料。
- 页面结构参考优先使用 `assets/examples/admin/` 下的整理示例。
- `assets/vendor/` 下的文件仅作为兜底原始素材，不作为首轮提示内容。
- 只有当整理资料和示例仍然不够时，才去读原始 vendor 文档。
- 如果已进入快速模式，首轮不要扩读到组件全量文档或 vendor 原始文档。

## 模板

当用户要求代码，且需求比较泛时，从以下模板起步：

- [assets/templates/crud-page.vue](assets/templates/crud-page.vue)
- [assets/templates/form-dialog.vue](assets/templates/form-dialog.vue)
- [assets/templates/dashboard.vue](assets/templates/dashboard.vue)

如果用户明确要求的是后台页面，优先参考 admin 示例而不是模板。

## 预期输出形态

选择最轻量但足够有用的输出：

- 页面模块列表
- 线框区块列表
- 组件映射
- 路由和菜单草案
- 前端 mock 数据草案
- `Vue` 原型页面
- 从 PRD 到原型的转换说明
- 如果包含代码，还要附上运行或预览说明

如果用户描述比较模糊，默认按以下顺序输出：

1. 页面目标
2. 信息架构
3. 组件映射
4. 主要交互
5. 路由或菜单位置
6. 原型代码
7. 启动说明
