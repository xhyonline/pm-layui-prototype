# Layui Vue Admin Patterns

This file captures the admin-shell and page conventions that PM prototypes should follow.

## Read order

1. Read this file for overall admin structure.
2. Read [layui-vue-admin-source-map.md](layui-vue-admin-source-map.md) to find the closest example source.
3. Read the matching `layui-vue` component docs only for the components actually used.

## Admin shell defaults

- Use a fixed left side navigation plus a top header as the default shell.
- Keep page content inside the `lay-body` area with `10px` style outer padding.
- Use a tab bar under the header when the product is multi-page and task switching matters.
- Keep breadcrumb in the header, not inside each business card.
- Put user menu, notice entry, language switch, and full screen actions on the top right.

## Left navigation rules

- First-level menus represent product domains, not single actions.
- Typical first-level groups:
  - `工作空间`
  - `系统管理`
  - `列表页面`
  - `表单页面`
  - `结果页面`
  - `个人中心`
- Put high-frequency business pages in the first two groups.
- Keep third-level menus rare; use them only when the information architecture clearly requires nesting.

## Header and tab rules

- Header left:
  - collapse button
  - refresh button when useful
  - breadcrumb
- Header right:
  - notice
  - locale switch when needed
  - user dropdown
  - more or setup action
- Tab bar:
  - keep home or dashboard tab pinned
  - allow close on most business pages
  - titles should match route meta titles

## Page wrapper rules

- Use `lay-container fluid="true"` or a simple padded wrapper for page-level content.
- Use one top search card plus one content card or table region for most CRUD pages.
- Separate summary, filters, and main content into cards instead of using long undivided pages.
- Prefer white cards on a light gray page background.

## CRUD list page pattern

Default structure:

1. filter card
2. table region
3. toolbar actions
4. row actions
5. modal or drawer for add or edit

Specific conventions:

- Put search filters in the top card.
- Use 3 to 4 filters per row on desktop.
- Use `查询` and `重置` as the last controls in the filter row.
- Use toolbar actions such as `新增`, `删除`, `导入`, `导出`.
- Use table row actions such as `编辑`, `删除`, `详情`, `分配`.
- Use switch, tag, avatar, and custom slots for important status columns.
- Use pagination inside the table component when possible.

## Tree and menu management pattern

- Use a tree table for menus, organizations, and permission nodes.
- Standard columns:
  - name
  - route path
  - component path
  - sort
  - visible
  - type
  - operator
- Use color tags for `目录`, `菜单`, `外链`.
- Toolbar should include:
  - new
  - expand all
  - collapse all
  - selected item actions if relevant

## Dashboard pattern

- Use a 18/6 or similar two-column split on desktop.
- Left area:
  - update cards
  - trends
  - recent activity
- Right area:
  - quick links
  - charts
  - announcements
- Use cards, icons, links, and concise metrics instead of dense tables in the first screen.

## Form page pattern

- Start with a short intro card when the page is a dedicated form page.
- Use a centered medium-width form column for basic forms.
- Use step form for longer or staged submissions.
- Use dialog forms for simple CRUD edits.
- Group fields by business meaning, not by component type.

## Detail page pattern

- Default sections:
  - header summary
  - base information
  - related records
  - operation history
- Prefer cards, descriptions, timeline, and tags.
- Use drawer detail panels when the user should stay on the current list page.

## Status and feedback pattern

- Use result pages for submit success, failure, no permission, and not found states.
- Use `layer.msg`, `layer.confirm`, and lightweight popconfirm for small feedback.
- Use full result pages only for workflow milestones or route-level exceptions.

## Responsive guidance

- This admin pattern is desktop-first.
- On narrow screens:
  - collapse the side menu
  - stack filters vertically
  - reduce card density
- Do not redesign into a mobile-first app unless the user explicitly changes the target.

## PM prototype shortcuts

If the user asks for one of these common pages, map them like this:

- user management: top filters + user table + add or edit modal
- role management: filters + role table + permission assignment
- menu management: tree table + node modal
- dashboard: update cards + quick links + recent activity + chart
- approval form: intro card + grouped form + submit footer

## Hard constraints

- Stay inside the `layui-vue-admin` page shell unless the user explicitly asks for a full-screen exception page or login page.
- Do not invent side panels, floating nav, or KPI card styles that obviously conflict with Layui admin defaults.
- Do not mix page patterns from other admin systems unless they can be expressed naturally with `layui-vue-admin`.
