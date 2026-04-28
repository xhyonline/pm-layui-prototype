---
name: pm-layui-prototype
description: Use this skill when the user wants product-manager style wireframes, page prototypes, PRD-to-page drafts, admin screens, CRUD lists, dashboards, forms, approval flows, or interaction structures that must stay within the `layui-vue 2.23.3` and `layui-vue-admin` stack. This skill is especially for desktop admin backends and should preserve the `layui-vue-admin` shell, navigation, and page composition patterns instead of introducing other UI libraries or unrelated design systems.
---

# PM Layui Prototype

This skill is for PM-oriented backend and admin prototype work inside one fixed stack:

- Frontend UI: `layui-vue 2.23.3`
- Admin shell: `layui-vue-admin`

Do not use `Element Plus`, `Ant Design Vue`, `Naive UI`, `Vant`, or custom design systems unless the user explicitly relaxes the stack.

## Output goals

Produce artifacts that feel like they belong to a team already using `layui-vue-admin`.

Prefer:

- realistic backend information architecture
- page module breakdown
- component mapping
- interaction notes
- route and menu suggestions
- `Vue SFC` prototype code when code is requested
- frontend mock data for demos and review

## Workflow

1. Read the user request and identify:
   - page type
   - user role
   - primary task
   - data objects
   - whether the user needs a full backend page or only one business module
2. Read [references/stack-rules.md](references/stack-rules.md).
3. Read [references/version-matrix.md](references/version-matrix.md).
4. Read [references/offline-doc-index.md](references/offline-doc-index.md).
5. Read [docs/layui-vue/2.23.3/plain/README.md](docs/layui-vue/2.23.3/plain/README.md).
6. If the task is for an admin backend, read these before writing code:
   - [references/layui-vue-admin-patterns.md](references/layui-vue-admin-patterns.md)
   - [references/layui-vue-admin-source-map.md](references/layui-vue-admin-source-map.md)
7. Read only the examples and docs needed for the page type:
   - curated admin examples under `assets/examples/admin/`
   - normalized component docs under `docs/layui-vue/2.23.3/plain/components/*.md`
   - normalized guide docs under `docs/layui-vue/2.23.3/plain/guide/*.md`
   - raw upstream component docs under `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/*.md` when exact syntax matters
   - raw upstream guide docs under `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/guide/*.md` when exact syntax matters
   - offline routing index: [references/offline-doc-index.md](references/offline-doc-index.md)
   - component summary: [references/layui-vue-components.md](references/layui-vue-components.md)
   - doc syntax notes: [references/layui-vue-doc-syntax.md](references/layui-vue-doc-syntax.md)
   - output format: [references/prototype-output-spec.md](references/prototype-output-spec.md)
8. Map each visible block to an allowed `layui-vue` component or a simple native HTML structure.
9. If the requested pattern does not exist in the allowed stack, say so and propose the nearest `Layui`-compatible fallback.
10. Keep the implementation prototype-friendly:
   - simple
   - readable
   - easy for PM review
   - close to `layui-vue-admin` structure
11. When drawing a prototype, create the display data directly in the frontend:
   - use local mock arrays, objects, and status fields
   - do not depend on backend interfaces before the page can be rendered
   - make the prototype reviewable even if no server exists yet

## Admin-specific defaults

When the user asks for a management backend and does not specify otherwise:

- assume desktop-first layout
- assume `layui-vue-admin` shell with left side navigation and top header
- assume breadcrumb in header
- assume a tab bar below header for multi-page systems
- assume cards as section wrappers
- assume top search card + table region for CRUD pages
- assume modal or drawer editing for simple create or edit flows

If the user only asks for a business page, still keep its inner layout compatible with the admin shell.

## Example source selection

Read the lightest matching example first:

- backend shell or IA:
  - `assets/examples/admin/layout/basic-layout-shell.vue`
  - `assets/examples/admin/router/admin-route-map.ts`
- dashboard:
  - `assets/examples/admin/pages/dashboard-workbench.vue`
- CRUD list:
  - `assets/examples/admin/pages/crud-user-page.vue`
- tree or permission style page:
  - `assets/examples/admin/pages/menu-tree-page.vue`
- centered form page:
  - `assets/examples/admin/pages/base-form-page.vue`

Only read the full local admin project when these examples do not cover the needed pattern.

## Hard constraints

- Use only `layui-vue` compatible components and styling patterns.
- Keep page layout compatible with `layui-vue-admin`.
- Do not introduce other UI libraries.
- Do not invent a visual language that conflicts with Layui admin defaults.
- Prefer cards, forms, tables, tabs, drawers, dialogs, tags, and switches over custom widgets.
- When producing prototype code, keep data local in the frontend unless the user explicitly asks for API integration.
- Treat this skill as desktop admin first, not mobile app first.

## Reference loading rules

- Prefer normalized offline docs under `docs/layui-vue/2.23.3/plain/` for first-pass reading.
- Prefer [references/offline-doc-index.md](references/offline-doc-index.md) when you need to route from page intent to the right example or component doc quickly.
- Prefer curated summaries under `references/` for scanning.
- Prefer curated examples under `assets/examples/admin/` for page structure.
- Treat files under `assets/vendor/` as fallback raw material, not first-pass prompt content.
- Read raw vendor docs only when the summaries or curated examples are insufficient.

## Templates

Start from these templates when code is requested and the request is generic:

- [assets/templates/crud-page.vue](assets/templates/crud-page.vue)
- [assets/templates/form-dialog.vue](assets/templates/form-dialog.vue)
- [assets/templates/dashboard.vue](assets/templates/dashboard.vue)

Use admin examples first when the request explicitly targets a backend page.

## Expected response shapes

Choose the lightest useful output:

- page module list
- wireframe section list
- component mapping
- route and menu draft
- frontend mock data draft
- `Vue` prototype page
- PRD-to-prototype conversion notes

If the user is vague, default to:

1. page goal
2. information architecture
3. component mapping
4. main interactions
5. route or menu placement
6. prototype code
