# Offline Doc Index

Use this file as the single entry point for local `layui-vue` and `layui-vue-admin` prototype references.

## Why this file exists

- It reduces search cost for AI and humans.
- It points from page intent to the right local example and the right offline docs.
- It separates the fast normalized docs from the raw upstream fallback docs.

## Fast path

When starting a prototype task, use this order:

1. Read this file to choose the right example and component family.
2. If the user wants faster output, direct generation, or code-first behavior, read [fast-mode.md](fast-mode.md) first.
3. If the user wants a full project, runnable demo, or `pnpm dev`, read [full-project-generation.md](full-project-generation.md) first.
4. Read [layui-vue-admin-source-map.md](layui-vue-admin-source-map.md) if the task is a backend/admin page.
5. Read [layui-vue-admin-patterns.md](layui-vue-admin-patterns.md) for shell and page composition rules.
6. Read [layui-vue-components.md](layui-vue-components.md) for component-family guidance.
7. Open the exact normalized component docs in `docs/layui-vue/2.23.3/plain/components/`.
8. Only if syntax still seems ambiguous, open the raw upstream docs in `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/`.

## Path rules

For any component named `xyz`:

- normalized doc: `docs/layui-vue/2.23.3/plain/components/xyz.md`
- raw upstream doc: `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/xyz.md`

For any guide named `xyz`:

- normalized guide: `docs/layui-vue/2.23.3/plain/guide/xyz.md`
- raw upstream guide: `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/guide/xyz.md`

## Admin example index

Use these local examples before reading larger source trees.

If the user wants a full project, these examples only define page patterns, not the final project scaffold.

For fast full-project generation, prefer:

- `assets/examples/admin/project/lightweight-admin-scaffold/README.md`
- `assets/examples/admin/project/minimal-admin-skeleton.md`

| Page intent | Example file | Use for |
| --- | --- | --- |
| admin shell / layout | `assets/examples/admin/layout/basic-layout-shell.vue` | side menu, top header, tab bar, breadcrumb |
| route / menu structure | `assets/examples/admin/router/admin-route-map.ts` | menu grouping, route meta, IA |
| dashboard / workbench | `assets/examples/admin/pages/dashboard-workbench.vue` | quick links, cards, activity blocks |
| CRUD list | `assets/examples/admin/pages/crud-user-page.vue` | search card, table, toolbar, dialog |
| tree / permission page | `assets/examples/admin/pages/menu-tree-page.vue` | tree table, node actions, menu management |
| centered form page | `assets/examples/admin/pages/base-form-page.vue` | intro card, centered form, submit footer |

## Page-pattern routing

Use this table to decide what to read first.

| Requested page | Read example first | Read docs next |
| --- | --- | --- |
| dashboard | `pages/dashboard-workbench.vue` | `grid`, `card`, `tag`, `progress`, `table`, `noticeBar` |
| CRUD list | `pages/crud-user-page.vue` | `card`, `form`, `input`, `select`, `datePicker`, `table`, `page`, `layer` |
| tree / permission | `pages/menu-tree-page.vue` | `table`, `tree`, `switch`, `tag`, `layer` |
| simple form | `pages/base-form-page.vue` | `form`, `input`, `select`, `radio`, `checkbox`, `switch`, `textarea`, `button` |
| detail page | no direct example; reuse CRUD or form layout | `pageHeader`, `card`, `descriptions`, `tag`, `timeline`, `table` |
| dialog or drawer edit | `pages/crud-user-page.vue` | `layer`, `drawer`, `form`, `input`, `select`, `switch`, `textarea` |
| result / exception | no direct example | `result`, `exception`, `button`, `card` |
| approval flow | form or detail page layout | `step`, `timeline`, `descriptions`, `form`, `tag`, `table` |

## High-frequency component index

These are the components most likely to appear in PM admin prototypes.

| Component | Typical use | Normalized doc | Raw upstream doc |
| --- | --- | --- | --- |
| `layout` | page shell structure | `docs/layui-vue/2.23.3/plain/components/layout.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/layout.md` |
| `container` | bounded page wrapper | `docs/layui-vue/2.23.3/plain/components/container.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/container.md` |
| `grid` | row and col layout | `docs/layui-vue/2.23.3/plain/components/grid.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/grid.md` |
| `card` | default content section | `docs/layui-vue/2.23.3/plain/components/card.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/card.md` |
| `pageHeader` | page title and actions | `docs/layui-vue/2.23.3/plain/components/pageHeader.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/pageHeader.md` |
| `menu` | side navigation | `docs/layui-vue/2.23.3/plain/components/menu.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/menu.md` |
| `breadcrumb` | page location | `docs/layui-vue/2.23.3/plain/components/breadcrumb.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/breadcrumb.md` |
| `tab` | tab grouping | `docs/layui-vue/2.23.3/plain/components/tab.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/tab.md` |
| `step` | multi-step flow | `docs/layui-vue/2.23.3/plain/components/step.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/step.md` |
| `form` | form container | `docs/layui-vue/2.23.3/plain/components/form.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/form.md` |
| `input` | text field | `docs/layui-vue/2.23.3/plain/components/input.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/input.md` |
| `textarea` | long text field | `docs/layui-vue/2.23.3/plain/components/textarea.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/textarea.md` |
| `inputNumber` | numeric field | `docs/layui-vue/2.23.3/plain/components/inputNumber.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/inputNumber.md` |
| `select` | option select | `docs/layui-vue/2.23.3/plain/components/select.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/select.md` |
| `radio` | small exclusive choice | `docs/layui-vue/2.23.3/plain/components/radio.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/radio.md` |
| `checkbox` | multiple choice | `docs/layui-vue/2.23.3/plain/components/checkbox.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/checkbox.md` |
| `switch` | boolean state | `docs/layui-vue/2.23.3/plain/components/switch.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/switch.md` |
| `datePicker` | date filter or edit | `docs/layui-vue/2.23.3/plain/components/datePicker.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/datePicker.md` |
| `timeSelect` | time range choice | `docs/layui-vue/2.23.3/plain/components/timeSelect.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/timeSelect.md` |
| `cascader` | hierarchical choice | `docs/layui-vue/2.23.3/plain/components/cascader.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/cascader.md` |
| `treeSelect` | visible hierarchy select | `docs/layui-vue/2.23.3/plain/components/treeSelect.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/treeSelect.md` |
| `upload` | file or image upload | `docs/layui-vue/2.23.3/plain/components/upload.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/upload.md` |
| `table` | list and audit queue | `docs/layui-vue/2.23.3/plain/components/table.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/table.md` |
| `page` | pagination | `docs/layui-vue/2.23.3/plain/components/page.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/page.md` |
| `descriptions` | detail fields | `docs/layui-vue/2.23.3/plain/components/descriptions.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/descriptions.md` |
| `tag` | status tag | `docs/layui-vue/2.23.3/plain/components/tag.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/tag.md` |
| `badge` | count badge | `docs/layui-vue/2.23.3/plain/components/badge.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/badge.md` |
| `progress` | progress display | `docs/layui-vue/2.23.3/plain/components/progress.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/progress.md` |
| `timeline` | operation history | `docs/layui-vue/2.23.3/plain/components/timeline.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/timeline.md` |
| `tree` | hierarchy display | `docs/layui-vue/2.23.3/plain/components/tree.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/tree.md` |
| `layer` | modal, message, confirm | `docs/layui-vue/2.23.3/plain/components/layer.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/layer.md` |
| `drawer` | side-panel edit | `docs/layui-vue/2.23.3/plain/components/drawer.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/drawer.md` |
| `loading` | loading state | `docs/layui-vue/2.23.3/plain/components/loading.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/loading.md` |
| `popconfirm` | destructive confirm | `docs/layui-vue/2.23.3/plain/components/popconfirm.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/popconfirm.md` |
| `tooltip` | inline help | `docs/layui-vue/2.23.3/plain/components/tooltip.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/tooltip.md` |
| `dropdown` | action menu | `docs/layui-vue/2.23.3/plain/components/dropdown.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/dropdown.md` |
| `noticeBar` | notice banner | `docs/layui-vue/2.23.3/plain/components/noticeBar.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/noticeBar.md` |
| `result` | success/failure page | `docs/layui-vue/2.23.3/plain/components/result.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/result.md` |
| `exception` | route-level exception page | `docs/layui-vue/2.23.3/plain/components/exception.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/exception.md` |

## Guide index

These guides are the most relevant non-component docs.

| Guide | Normalized doc | Raw upstream doc | Use for |
| --- | --- | --- | --- |
| `introduce` | `docs/layui-vue/2.23.3/plain/guide/introduce.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/guide/introduce.md` | quick orientation |
| `getStarted` | `docs/layui-vue/2.23.3/plain/guide/getStarted.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/guide/getStarted.md` | install and basic usage |
| `locale` | `docs/layui-vue/2.23.3/plain/guide/locale.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/guide/locale.md` | i18n and locale settings |
| `theme` | `docs/layui-vue/2.23.3/plain/guide/theme.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/guide/theme.md` | theme variables |
| `dark` | `docs/layui-vue/2.23.3/plain/guide/dark.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/guide/dark.md` | dark mode behavior |
| `problem` | `docs/layui-vue/2.23.3/plain/guide/problem.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/guide/problem.md` | known problems and caveats |
| `upgrade` | `docs/layui-vue/2.23.3/plain/guide/upgrade.md` | `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/guide/upgrade.md` | version upgrade notes |

## If the user is vague

Use this narrowing rule:

- If they ask for a whole admin page, start from the matching admin example.
- If they ask for a full admin project and care about speed, prefer `fast-mode.md` and `lightweight-admin-scaffold/README.md`, then read `minimal-admin-skeleton.md` only if needed.
- If they ask for one module inside a page, start from the matching component family.
- If they ask for exact prop, event, slot, or syntax behavior, go straight to the normalized component doc.
- If the normalized doc seems transformed or incomplete, verify against the raw upstream doc.
