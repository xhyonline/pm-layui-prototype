# Minimal Admin Skeleton

Use this file as the fastest text reference for generating a runnable admin project.

If you need a copyable starter instead of a text-only structure, prefer:

- `assets/examples/admin/project/lightweight-admin-scaffold/`

## Goal

This skeleton is the minimum recommended structure for a `layui-vue-admin`-style demo project that should run with `pnpm dev`.

## Root files

```text
package.json
vite.config.ts
tsconfig.json
index.html
.gitignore
```

## src tree

```text
src/
  App.vue
  main.ts
  layouts/
    BasicLayout.vue
  router/
    index.ts
    module/
      base-routes.ts
  store/
    index.ts
    app.ts
  styles/
    index.css
    admin.css
    reset.css
  views/
    workSpace/
      workbench/
        index.vue
```

## Directory responsibilities

- `App.vue`: style entry plus `<router-view />`
- `main.ts`: app bootstrap, router, store, optional mock bootstrap
- `layouts/BasicLayout.vue`: left menu, header, breadcrumb, tab bar, content area
- `router/module/base-routes.ts`: admin nested routes with `BasicLayout`
- `store/app.ts`: ui state such as collapse, theme, breadcrumb, tabs
- `styles/index.css`: central style import entry
- `views/`: business pages only

## Required route pattern

```ts
[
  { path: "/", redirect: "/workspace/workbench" },
  {
    path: "/workspace",
    component: BasicLayout,
    children: [
      {
        path: "/workspace/workbench",
        component: WorkbenchPage,
        meta: { title: "工作台", requireAuth: true, affix: true, closable: false }
      }
    ]
  }
]
```

## Required shell pattern

`BasicLayout.vue` should include:

- side menu
- top header
- breadcrumb
- tab bar
- router content area

Do not place the full shell in `App.vue`.

## Minimum dependencies

```json
{
  "dependencies": {
    "@layui/layui-vue": "2.23.3",
    "pinia": "^2.1.7",
    "vue": "^3.3.4",
    "vue-router": "^4.2.5"
  }
}
```

Recommended for closer admin behavior:

- `pinia-plugin-persistedstate`
- `mockjs`
- `nprogress`

## Fast-generation rule

If the user asks for a runnable admin project, generate this skeleton first and then add business pages.

## Preferred shortcut

When speed matters and local file reuse is allowed, copy `lightweight-admin-scaffold/` first, then only replace:

- route groups
- page titles
- mock data
- representative business pages
