# pm-layui-prototype

一个面向 `layui-vue 2.23.3` + `layui-vue-admin` 的后台原型技能。

它适合这些场景：

- 产品经理线框图
- 后台管理页面原型
- CRUD 列表页
- Dashboard / 工作台
- 表单页
- 审批流页面
- PRD 转页面草稿

技能默认以桌面端后台为目标，强调：

- 保持 `layui-vue-admin` 壳层风格
- 优先使用 `layui-vue` 兼容组件
- 画原型时前端本地构造 mock 数据
- 不把后端接口作为页面渲染前置依赖
- 当用户要求完整演示工程时，优先生成可 `pnpm dev` 的完整后台项目骨架

## 仓库结构

这个仓库本身就是一个完整的 skill 目录，根目录包含：

- `SKILL.md`
- `SKILL-zh.md`
- `references/`
- `docs/`
- `assets/`

这意味着你把仓库推送到 GitHub 后，可以直接按“整个仓库就是一个 skill”的方式安装。

## 是否可以通过 GitHub 安装

可以。

只要 GitHub 仓库根目录保留 `SKILL.md`，Codex 的 skill 安装器就可以把这个仓库根目录当作一个 skill 目录安装。

你的仓库地址：

- `https://github.com/xhyonline/pm-layui-prototype`

## 安装方式

### 方式一：通过 GitHub 安装器安装

如果你的 Codex 环境已经带有 `skill-installer`，推荐用这个方式。

核心参数是：

- `--repo xhyonline/pm-layui-prototype`
- `--path .`
- `--name pm-layui-prototype`

之所以要显式写 `--name`，是因为这个 skill 目录就在仓库根目录。

示例命令：

```bash
python "$CODEX_HOME/skills/.system/skill-installer/scripts/install-skill-from-github.py" \
  --repo xhyonline/pm-layui-prototype \
  --path . \
  --name pm-layui-prototype
```

如果你的系统技能目录不在 `$CODEX_HOME/skills/.system/`，请把上面的脚本路径改成你本机实际的 `skill-installer/scripts/install-skill-from-github.py` 路径。

Windows PowerShell 示例：

```powershell
python "$env:CODEX_HOME\skills\.system\skill-installer\scripts\install-skill-from-github.py" `
  --repo xhyonline/pm-layui-prototype `
  --path . `
  --name pm-layui-prototype
```

安装完成后，重启 Codex。

### 方式二：手动安装

如果你不想依赖安装脚本，直接把仓库克隆到本地 skills 目录也可以。

Linux / macOS:

```bash
git clone https://github.com/xhyonline/pm-layui-prototype.git \
  "$CODEX_HOME/skills/pm-layui-prototype"
```

Windows PowerShell:

```powershell
git clone https://github.com/xhyonline/pm-layui-prototype.git `
  "$env:CODEX_HOME\skills\pm-layui-prototype"
```

如果你没有设置 `CODEX_HOME`，很多环境默认会使用：

- Linux / macOS: `~/.codex`
- Windows: `%USERPROFILE%\.codex`

安装完成后，重启 Codex。

## 安装后如何验证

安装后，可以尝试这些提示词，看是否触发这份 skill：

- `帮我画一个 layui-vue-admin 风格的用户管理后台原型页`
- `根据这份 PRD 出一个后台审批流页面草稿`
- `给我做一个 layui-vue 的 dashboard 工作台原型`
- `做一个带搜索区、表格区、弹窗编辑的 CRUD 页面`

如果触发成功，Codex 会优先按这份 skill 的约束来组织页面结构、组件选型和 mock 数据。

## 推荐使用方式

这份 skill 最适合：

- 后台页面方案设计
- 页面原型和脚手架生成
- 前端业务页面结构梳理
- PM / UI / 前端对齐页面结构

它不应该直接替代完整生产开发流程。正式开发阶段仍然需要补充：

- 真实接口联调
- 权限控制
- 表单校验
- 错误处理
- 测试
- 工程规范收口

## 主要参考入口

如果你要直接阅读这份 skill 的内容，优先看：

- [SKILL.md](./SKILL.md)
- [SKILL-zh.md](./SKILL-zh.md)
- [references/offline-doc-index.md](./references/offline-doc-index.md)
- [references/offline-doc-index-zh.md](./references/offline-doc-index-zh.md)

## 许可证与说明

本仓库包含为 skill 使用整理过的本地参考资料与离线文档，请在你自己的使用场景下确认相关依赖与上游资料的许可证要求。
