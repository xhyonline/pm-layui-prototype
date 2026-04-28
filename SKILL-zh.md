---
name: pm-layui-prototype
description: 当用户希望产出产品经理风格的线框图、页面原型、PRD 转页面草稿、后台页面、CRUD 列表、仪表盘、表单、审批流或交互结构时，使用此技能。实现必须限定在 `layui-vue 2.23.3` 技术栈内；后台场景优先使用 `layui-vue-admin`，非后台页面则使用普通 `layui-vue` 组合。默认应输出支持 `pnpm dev` 的轻量可运行原型，便于快速评审和自然语言迭代；只有当用户明确要求“完整工程”“完整后台系统”或“交付级 demo”时，才生成完整后台工程。
---

# PM Layui Prototype

这个技能用于固定技术栈下的 PM 导向原型工作：

- 前端 UI：`layui-vue 2.23.3`
- 需要后台壳层时：`layui-vue-admin`

除非用户明确放宽限制，否则不要使用 `Element Plus`、`Ant Design Vue`、`Naive UI`、`Vant` 或自定义设计系统。

## 适用范围闸门

在使用这份 skill 之前，先判断目标是后台/Admin，还是非后台页面。

这份 skill 支持两条路径，但都必须保持在 `layui-vue` 栈内：

- 后台/Admin 原型
- 非后台的桌面 Web 原型，例如门户页、内容页、业务落地页、搜索页、详情页、独立功能页

后台/Admin 路径应使用：

- `layui-vue-admin`
- 合适时使用左侧导航 + 顶部头部
- `assets/examples/admin/` 下的后台示例

非后台路径应使用：

- 普通 `layui-vue` 页面组合
- 除非用户明确要求，否则不要套后台壳层
- 优先读组件文档和本地模板，而不是后台示例

以下场景不适合默认使用这份 skill：

- 移动端优先应用
- 需要强品牌化视觉系统、明显脱离 Layui 风格的营销站点
- 严重依赖非 Layui 组件生态的设计

## 输出目标

产出的内容应当像是来自一个已经在使用 `layui-vue` 的团队。

优先输出：

- 合理的信息架构
- 页面模块拆分
- 组件映射
- 交互说明
- 在后台或多页任务下提供路由与菜单建议
- 在用户要求写代码时，提供 `Vue SFC` 原型代码
- 供演示和评审使用的前端 mock 数据
- 在用户要求写代码时，补充可运行的落地说明
- 默认优先提供轻量可运行原型，便于快速预览页面
- 只有当用户明确要求时，再扩展为更完整的可运行项目

## 工作流程

1. 先阅读用户需求，并识别：
   - 页面类型
   - 用户角色
   - 核心任务
   - 数据对象
   - 目标是后台/Admin，还是非后台页面
   - 用户需要的是轻量可运行原型、完整后台工程、后台页面，还是某个业务模块
   - 在后台/Admin 分支下，当前任务是否应默认从 `assets/examples/admin/project/lightweight-admin-scaffold/` 这个可运行骨架起步
   - 在非后台分支下，当前任务是否应默认从 `assets/examples/non-admin/project/lightweight-web-scaffold/` 这个可运行骨架起步
2. 先选择执行分支：
   - 后台/Admin 路径：使用 `layui-vue-admin` 模式、后台壳层和后台示例
   - 非后台路径：使用普通 `layui-vue` 页面组合，默认不要套后台壳层
   - 如果任务明显超出本 skill 适用范围，要明确指出并改用更合适的 skill 或 fallback
3. 阅读 [references/stack-rules.md](references/stack-rules.md)。
4. 阅读 [references/version-matrix.md](references/version-matrix.md)。
5. 阅读 [references/offline-doc-index-zh.md](references/offline-doc-index-zh.md)。
6. 阅读 [docs/layui-vue/2.23.3/plain/README.zh.md](docs/layui-vue/2.23.3/plain/README.zh.md)。
7. 如果用户要求更快出稿、直接生成、少解释或明显偏向执行优先，先阅读 [references/fast-mode-zh.md](references/fast-mode-zh.md)。
8. 只有当用户明确要求完整工程、交付级 demo 或完整后台系统时，才阅读 [references/full-project-generation-zh.md](references/full-project-generation-zh.md)。
9. 如果任务是管理后台页面，在开始写代码前先阅读：
   - [references/layui-vue-admin-patterns.md](references/layui-vue-admin-patterns.md)
   - [references/layui-vue-admin-source-map.md](references/layui-vue-admin-source-map.md)
10. 只读取和页面类型相关的示例与文档：
   - `assets/examples/admin/` 下整理过的后台示例
   - `docs/layui-vue/2.23.3/plain/components/*.md` 下整理过的组件文档
   - `docs/layui-vue/2.23.3/plain/guide/*.md` 下整理过的指南文档
   - 当语法细节必须精确时，再读 `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/*.md` 下的上游原始组件文档
   - 当语法细节必须精确时，再读 `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/guide/*.md` 下的上游原始指南文档
   - 离线路由索引：[references/offline-doc-index-zh.md](references/offline-doc-index-zh.md)
   - 组件总览：[references/layui-vue-components.md](references/layui-vue-components.md)
   - 文档语法说明：[references/layui-vue-doc-syntax.md](references/layui-vue-doc-syntax.md)
   - 输出格式说明：[references/prototype-output-spec.md](references/prototype-output-spec.md)
11. 将每个可见区块映射到允许使用的 `layui-vue` 组件，或简单原生 HTML 结构。
12. 如果用户要求的模式在允许的栈内不存在，要明确说明，并给出最接近的 `Layui` 兼容替代方案。
13. 保持实现适合原型阶段：
   - 简单
   - 易读
   - 方便 PM 评审
   - 尽量贴近当前分支对应的结构
14. 在绘制原型时，直接在前端构造展示数据：
   - 使用本地 mock 数组、对象和状态字段
   - 不要把后端接口作为页面可渲染的前置依赖
   - 即使后端服务尚未存在，也要保证原型可评审
15. 在交付代码后，还要告诉用户如何启动它：
   - 如果用户已经有 `layui-vue-admin` 或 `Vue` 项目，要说明应该新增或替换哪个文件、如何注册路由或菜单，以及应该运行该项目现有的哪个启动命令
   - 如果用户要的是快速预览，默认给出轻量可运行原型的启动方式，至少包含 `pnpm install` 与 `pnpm dev`
   - 只有当用户明确要求完整工程或交付级 demo 时，才切换到完整后台工程交付
   - 只有当用户明确只要孤立单页预览时，才退回到最轻量的 `Vue 3 + Vite + @layui/layui-vue` 预览路径
   - 如果当前上下文只有这个 skill 仓库，要明确说明这个仓库本身是技能与参考资料包，不是一个可以直接启动的原型工程

## 进度反馈规则

长任务执行时不要长时间静默。

- 在开始较大规模阅读或生成前，先发一条简短进度说明，说明当前步骤
- 当工作持续较久时，至少每 `20-30` 秒反馈一次当前进度
- 如果任务是轻量可运行原型或完整工程，至少在这些里程碑反馈一次：
  - 参考资料读取完成
  - 工程骨架创建完成
  - 首个可运行预览完成
  - layout、router、store 完成（如果存在）
  - 第一个代表性业务页完成
  - 剩余页面完成（如果存在）
  - 正在执行安装或构建验证
- 如果某一步预计会超过 1 分钟，要在执行前明确告知用户
- 如果用户要求评估 skill 效率，要按步骤记录耗时，并指出最耗时的阶段

## 轻量可运行原型模式

当用户出现以下任一意图时，默认进入“轻量可运行原型模式”：

- 想先快速生成一个可运行草稿
- 明确要求支持 `pnpm dev`
- 想先看页面效果，再通过自然语言持续迭代

轻量可运行原型模式下必须遵守：

- 生成 `package.json`、`vite.config.ts`、`tsconfig.json`、`index.html`、`src/main.ts`、`src/App.vue`
- 生成 `vite.config.ts` 时，固定端口并开启 `strictPort: true`
- 优先使用 `TypeScript`
- 必须支持 `pnpm install` 与 `pnpm dev`，`pnpm build` 只在成本不高时保留
- 页面演示数据保留在前端本地，可使用 `mockjs` 或本地 mock 文件
- 工程必须足够小，便于快速生成、快速运行、快速改动
- 不要默认追求交付级完整度，除非用户明确要求
- 先选择可运行分支：
  - 后台/Admin 分支：
    - 如果当前就在这个 skill 仓库内工作，默认先复制 `assets/examples/admin/project/lightweight-admin-scaffold/` 作为可运行底座，再替换业务内容
    - 如果该骨架已经覆盖 layout、router、store、基础样式，就不要从零重新推导目录和壳层
    - 生成独立的 `src/layouts/`，不要把 layout 直接塞进 `App.vue`
    - 生成 `src/router/`，并使用 `BasicLayout` + 子路由的后台组织方式
    - 生成 `src/views/`、`src/styles/`、`src/store/`
    - 只保留原型预览必需的后台壳层：菜单、头部、内容区，以及当前原型需要的路由
  - 非后台分支：
    - 如果当前就在这个 skill 仓库内工作，默认先复制 `assets/examples/non-admin/project/lightweight-web-scaffold/` 作为可运行底座，再替换业务内容
    - 默认不要复制后台骨架
    - 优先生成最轻量的 `Vue 3 + Vite + @layui/layui-vue` 可运行结构
    - 除非用户明确要求，否则不要生成 `BasicLayout`
    - 只有当当前页面集合真的需要时，才补 `src/router/`、`src/layouts/`、`src/store/`
- 生成顺序优先这样加速：
  - 先搭最小可运行骨架
- 先让第一个页面在 `pnpm dev` 下成功显示
- 再按预览需要补 layout、router、store 和共享 mock 数据
- 再实现 1 个代表性业务页
- 最后只补用户当前明确要看的其余页面
- 不要把整个工程放进一次超长、无反馈的大批量生成里
- 额外说明文档、可选依赖、非关键润色，放到“已经可以运行”之后再补

## 完整工程模式

只有当用户明确要求以下目标时，才进入“完整工程模式”：

- 完整工程
- 完整后台系统
- 交付级 demo
- 需要较完整的信息架构与模块覆盖，而不是快速预览

完整工程模式下：

- 先按轻量可运行原型模式生成最小可运行结果
- 使用 `pnpm install`、`pnpm dev`、`pnpm build` 作为脚本约定
- 再按当前分支扩展：
  - 后台/Admin 分支：扩展菜单、tab、路由分组、业务模块和页面覆盖范围
  - 非后台分支：扩展路由、共享布局、公共区块和业务页面，不要强行补后台壳层
- 如果用户明确要求多个模块，不要停在 1 个代表页

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
- 在后台/Admin 分支下，如果本地存在可复制骨架，优先复制 `assets/examples/admin/project/lightweight-admin-scaffold/`，再替换业务内容
- 如果已经有最小骨架参考，就直接按骨架生成，不要重新推导目录结构
- 找到最小可信参考集后就停止继续阅读，直接开始写代码
- 优先做“1 个代表页 + 可复用共享模式”，不要每个页面都从零起草

## 面向后台场景的默认假设

当用户要的是管理后台，且没有额外说明时，默认：

- 采用桌面端优先布局
- 使用 `layui-vue-admin` 的左侧导航和顶部头部
- 头部包含面包屑
- 只有原型确实需要多页切换时，才在头部下方包含标签栏
- 各区块优先使用卡片作为容器
- CRUD 页面默认采用“顶部搜索卡片 + 下方表格区域”
- 简单新增/编辑流程默认使用弹窗或抽屉
- 如果用户要求可运行原型，默认包含 `layouts/router/store/styles` 目录，而不是只返回页面文件

## 非后台默认处理

当目标不是后台/Admin 时：

- 不要使用 `BasicLayout`
- 不要默认使用左侧管理导航
- 不要默认加入面包屑或 tab 标签栏
- 不要优先读取 `assets/examples/admin/layout/` 或 `assets/examples/admin/router/`
- 优先用 `layui-vue` 组件直接拼页面本身
- 输出重点放在当前页面，而不是后台壳层补全
- 优先使用卡片、栅格、标签页、页头、筛选区、详情区和简单本地状态，而不是后台导航骨架
- 如果合适，优先从 [assets/templates/dashboard.vue](assets/templates/dashboard.vue)、[assets/templates/crud-page.vue](assets/templates/crud-page.vue) 或直接 `layui-vue` 组件组合起步

如果用户要求的是“可运行原型”但页面不是后台：

- 仍然可以生成 `package.json`、`vite.config.ts`、`src/main.ts`、`src/App.vue`
- 但页面应保持普通 `layui-vue` 应用结构，而不是伪装成后台管理台
- 如果只是单页预览，优先生成最轻量的 `Vue 3 + Vite + @layui/layui-vue` 结构，而不是复制后台骨架

## 示例选择

优先读取最轻量、最贴近需求的示例：

- 如果目标是后台/Admin 轻量可运行原型：
  - `references/fast-mode-zh.md`
  - `assets/examples/admin/project/lightweight-admin-scaffold/`
  - `assets/examples/admin/project/lightweight-admin-scaffold/README.md`
  - `assets/examples/admin/project/minimal-admin-skeleton.md`
  - 1 个最贴近的页面示例
- 如果目标是后台/Admin 完整工程：
  - `references/fast-mode-zh.md`
  - `references/full-project-generation-zh.md`
  - `references/layui-vue-admin-source-map.md`
  - `assets/examples/admin/project/lightweight-admin-scaffold/`
  - `assets/examples/admin/project/lightweight-admin-scaffold/README.md`
  - `assets/examples/admin/project/minimal-admin-skeleton.md`
- 如果目标是非后台轻量可运行原型：
  - `references/fast-mode-zh.md`
  - `assets/examples/non-admin/project/lightweight-web-scaffold/`
  - `assets/examples/non-admin/project/lightweight-web-scaffold/README.md`
  - `assets/templates/dashboard.vue`
  - `assets/templates/crud-page.vue`
  - `assets/templates/form-dialog.vue`
  - `docs/layui-vue/2.23.3/plain/components/` 下最少必要的组件文档
- 如果目标是非后台较完整可运行项目：
  - `references/fast-mode-zh.md`
  - `references/full-project-generation-zh.md`
  - `assets/examples/non-admin/project/lightweight-web-scaffold/`
  - `assets/examples/non-admin/project/lightweight-web-scaffold/README.md`
  - `assets/templates/dashboard.vue`
  - `assets/templates/crud-page.vue`
  - `assets/templates/form-dialog.vue`
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

只有当后台示例仍不足以覆盖需求时，再去读完整的本地 admin 项目。

## 强约束

- 只使用 `layui-vue` 兼容的组件和样式模式。
- 只有当目标确实是后台/Admin 时，页面布局才必须兼容 `layui-vue-admin`。
- 不要引入其他 UI 库。
- 不要创造与 Layui Admin 默认风格冲突的视觉语言。
- 优先使用卡片、表单、表格、标签页、抽屉、对话框、标签、开关，而不是自定义小部件。
- 产出原型代码时，除非用户明确要求接接口，否则数据应保留在前端本地。
- 这个技能默认面向桌面端，而不是移动端应用。
- 当用户要求可运行原型时，如果用户需要 `pnpm dev`，不要只返回一个脱离工程的页面文件。
- 当用户要求完整工程时，不要用“轻量预览骨架”替代真正的完整目录骨架。
- 生成可运行工程时，不要省略 `vite.config.ts` 中的 `strictPort: true`。
- 如果需求明显不是后台，不要因为 skill 被触发就强行套成后台壳层。
- 如果需求是非后台页面，不要求必须使用 `layui-vue-admin`；保持在普通 `layui-vue` 结构内就是符合预期的。

## 参考资料加载规则

- 首轮阅读优先使用 `docs/layui-vue/2.23.3/plain/` 下整理过的离线文档。
- 当你需要根据“页面意图”快速决定该读哪个示例、哪个组件文档时，优先看 [references/offline-doc-index-zh.md](references/offline-doc-index-zh.md)。
- 扫描概览时优先使用 `references/` 下的整理资料。
- 后台页面结构参考优先使用 `assets/examples/admin/` 下的整理示例。
- 非后台页面结构参考优先使用 `assets/templates/` 与组件文档。
- `assets/vendor/` 下的文件仅作为兜底原始素材，不作为首轮提示内容。
- 只有当整理资料和示例仍然不够时，才去读原始 vendor 文档。
- 如果已进入快速模式，首轮不要扩读到组件全量文档或 vendor 原始文档。

## 模板

当用户要求代码，且需求比较泛时，从以下模板起步：

- [assets/templates/crud-page.vue](assets/templates/crud-page.vue)
- [assets/templates/form-dialog.vue](assets/templates/form-dialog.vue)
- [assets/templates/dashboard.vue](assets/templates/dashboard.vue)

如果用户明确要求的是后台页面，优先参考 admin 示例；否则优先参考模板。

## 预期输出形态

选择最轻量但足够有用的输出：

- 页面模块列表
- 线框区块列表
- 组件映射
- 路由和菜单草案
- 前端 mock 数据草案
- 轻量可运行原型
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
