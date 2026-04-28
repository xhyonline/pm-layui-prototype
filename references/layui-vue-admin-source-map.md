# Layui Vue Admin Source Map

Use this file to decide which local example source to read before writing a PM prototype.

## Local example root

- `assets/examples/admin/`

## Example files

### Admin shell

- `layout/basic-layout-shell.vue`
- Use for:
  - side menu + header + tab bar structure
  - breadcrumb placement
  - account dropdown and header action area

### Route structure

- `router/admin-route-map.ts`
- Use for:
  - top-level information architecture
  - page group naming
  - route to menu mapping
  - affix and closable assumptions

### Dashboard

- `pages/dashboard-workbench.vue`
- Use for:
  - workbench style cards
  - recent activity blocks
  - quick links and announcement panels

### CRUD user list

- `pages/crud-user-page.vue`
- Use for:
  - top search card
  - toolbar plus table plus dialog composition
  - standard user management layout

### Menu tree page

- `pages/menu-tree-page.vue`
- Use for:
  - tree table layout
  - menu and permission management
  - node add or edit actions

### Basic form page

- `pages/base-form-page.vue`
- Use for:
  - centered form layout
  - intro card plus form body composition
  - standard admin form density

## Selection guide

- If the user asks for a dashboard, read `dashboard-workbench.vue` first.
- If the user asks for list, search, CRUD, or management pages, read `crud-user-page.vue` first.
- If the user asks for menu, role tree, organization tree, or permission design, read `menu-tree-page.vue` first.
- If the user asks for create or edit pages, read `base-form-page.vue` first.
- If the user asks for overall backend IA or shell layout, read `basic-layout-shell.vue` and `admin-route-map.ts` first.

## Relationship to vendor source

- These files are curated examples extracted from the local `layui-vue-admin-master` reference project.
- Prefer these examples first for PM work because they are smaller and easier to reuse.
- Only read the full local admin project when a needed pattern is missing from these examples.
