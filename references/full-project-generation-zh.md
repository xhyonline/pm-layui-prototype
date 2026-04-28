# 完整工程生成规则

这份说明用于“完整工程模式”。

当用户明确要求以下任一目标时，优先按这里执行：

- 完整工程
- 完整后台系统
- 可运行演示
- 支持 `pnpm dev`

## 目标

输出必须是一个可以直接安装依赖并启动的后台工程，而不是只包含页面文件的 demo。

最少应支持：

- `pnpm install`
- `pnpm dev`
- `pnpm build`

## 根目录要求

至少生成这些根文件：

- `package.json`
- `vite.config.ts`
- `tsconfig.json`
- `index.html`
- `.gitignore`

其中 `vite.config.ts` 必须满足：

- 显式固定开发端口
- 显式开启 `strictPort: true`
- 不要依赖 Vite 自动回退到 `5174+`

优先使用：

- `TypeScript`
- `Vite`
- `pnpm`

## src 目录要求

至少生成这些目录和文件：

- `src/main.ts`
- `src/App.vue`
- `src/layouts/`
- `src/router/`
- `src/views/`
- `src/store/`
- `src/styles/`

可选但推荐：

- `src/mockjs/`
- `src/assets/`
- `src/api/`
- `src/types/`

## 布局约束

- `App.vue` 默认只负责样式入口和 `<router-view />`
- 不要把整套后台壳层直接写进 `App.vue`
- 使用独立的 `BasicLayout` 作为后台主壳层
- 后台主壳层应包含：
  - 左侧菜单
  - 顶部头部
  - 面包屑
  - tab 标签栏
  - 主内容区

## 路由约束

- 使用 `src/router/index.ts`
- 使用 `src/router/module/` 或等价目录组织路由
- 采用 `BasicLayout + children` 的嵌套路由方式
- 业务页面放在 `children` 下，而不是全部平铺在顶层
- 如果是后台系统，默认包含首页或工作台路由

## 状态与导航约束

完整工程模式下，默认保留这些能力：

- 菜单选中态
- 展开菜单状态
- tab 多页切换
- 面包屑
- 基础主题或侧栏主题配置

如果用户没有要求精简，不要省略这些后台体验要素。

## 样式约束

- 全局样式从统一入口导入，例如 `src/styles/index.css`
- 页面级样式与全局壳层样式分离
- 不要只靠页面内联样式撑出整个后台
- 不要出现“侧栏是壳层手写白底，但菜单仍走默认 dark 主题”这类冲突

## 页面示例与工程骨架的关系

- `assets/examples/admin/` 只负责页面结构与视觉模式参考
- `assets/templates/` 只负责局部页面起步
- 它们都不能替代完整工程骨架

如果用户要求完整工程：

- 先确定项目骨架
- 再把业务页面填入 `src/views/`
- 再注册到路由和菜单

如果用户同时要求速度，优先再读：

- `references/fast-mode-zh.md`
- `assets/examples/admin/project/minimal-admin-skeleton.md`

## 提速规则

当速度重要时，优先按这个顺序执行：

1. 先生成根文件和最小 `src/` 目录树
2. 再生成 `BasicLayout`、router、store 和默认首页
3. 先确认工程结构已经可运行
4. 再实现 1 个代表性的 CRUD 或 dashboard 页面
5. 最后复用这个模式补齐剩余页面

同时遵守这些约束：

- 一旦已经找到足够贴近的示例，就不要继续扫多个示例
- 在核心应用跑起来前，不要先实现可选依赖
- 首轮不要把时间花在不影响结构评审的细节润色上
- 不要把整个工程塞进一次不可见的大批量生成里；应拆成更早可汇报、可验证的里程碑

## 进度反馈

完整工程生成时必须按里程碑反馈，而不是长时间静默。

- 开始生成骨架时反馈一次
- 后台壳层完成时反馈一次
- 第一个业务页完成时反馈一次
- 开始安装依赖或执行构建验证时反馈一次

## 推荐依赖集合

最低依赖通常包括：

- `vue`
- `vue-router`
- `pinia`
- `@layui/layui-vue`

如需贴近 admin 参考工程，可加入：

- `pinia-plugin-persistedstate`
- `mockjs`
- `axios`
- `nprogress`

## 禁止退化

当用户要求完整工程时，不要输出以下退化结果：

- 只有 `App.vue`、`router`、`views` 的极简 demo
- 没有 `layouts/` 的后台工程
- 不能直接 `pnpm dev` 的片段式代码
- 只有页面截图风格，没有工程入口与目录
