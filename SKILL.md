---
name: pm-layui-prototype
description: Use this skill when the user wants product-manager style wireframes, page prototypes, PRD-to-page drafts, admin screens, CRUD lists, dashboards, forms, approval flows, or interaction structures that should stay within the `layui-vue 2.23.3` stack. Prefer `layui-vue-admin` for admin backends, and plain `layui-vue` composition for non-admin pages. Default to a lightweight runnable prototype that supports `pnpm dev` for fast review and iteration. Only generate a full admin project when the user explicitly asks for a full project, delivery-grade demo, or complete backend system.
---

# PM Layui Prototype

This skill is for PM-oriented prototype work inside one fixed stack:

- Frontend UI: `layui-vue 2.23.3`
- Admin shell when needed: `layui-vue-admin`

Do not use `Element Plus`, `Ant Design Vue`, `Naive UI`, `Vant`, or custom design systems unless the user explicitly relaxes the stack.

## Scope Gate

Before using this skill, first decide whether the target is admin/backend or non-admin.

Use this skill for both of these branches when the implementation should remain inside the `layui-vue` stack:

- admin/backend prototypes
- non-admin desktop web prototypes such as portal pages, content pages, landing-style business pages, search pages, detail pages, or standalone functional pages

Admin/backend mode should use:

- `layui-vue-admin`
- left navigation + top header when appropriate
- admin examples under `assets/examples/admin/`

Non-admin mode should use:

- plain `layui-vue` page composition
- no admin shell unless the user explicitly asks for one
- component docs and local templates before admin examples

Do not use this skill when the target is clearly outside its strengths, such as:

- mobile-first apps
- highly branded marketing sites that need a custom visual system unrelated to Layui
- designs that depend on non-Layui component ecosystems

## Output goals

Produce artifacts that feel like they belong to a team already using `layui-vue`.

Prefer:

- realistic information architecture
- page module breakdown
- component mapping
- interaction notes
- route and menu suggestions when the task is admin or multi-page
- `Vue SFC` prototype code when code is requested
- frontend mock data for demos and review
- runnable handoff notes when code is requested
- a lightweight runnable prototype by default when the user wants to preview pages quickly
- a fuller runnable project only when the user explicitly asks for one

## Workflow

1. Read the user request and identify:
   - page type
   - user role
   - primary task
   - data objects
   - whether the target is admin/backend or non-admin
   - whether the user needs a lightweight runnable prototype, a full backend project, a backend page, or only one business module
   - for admin/backend mode, whether the current task should start from `assets/examples/admin/project/lightweight-admin-scaffold/` as the default runnable base
   - for non-admin mode, whether the current task should start from `assets/examples/non-admin/project/lightweight-web-scaffold/` as the default runnable base
2. Choose the branch first:
   - admin/backend mode: use `layui-vue-admin` patterns, admin shell, and admin examples
   - non-admin mode: use plain `layui-vue` page composition, and do not apply admin shell by default
   - if the task clearly falls outside this skill, say so and use a more suitable skill or fallback approach
3. Read [references/stack-rules.md](references/stack-rules.md).
4. Read [references/version-matrix.md](references/version-matrix.md).
5. Read [references/offline-doc-index.md](references/offline-doc-index.md).
6. Read [docs/layui-vue/2.23.3/plain/README.md](docs/layui-vue/2.23.3/plain/README.md).
7. If the user asks for a faster draft, direct generation, less explanation, or clear execution-first behavior, read [references/fast-mode.md](references/fast-mode.md) first.
8. If the user explicitly asks for a full project, delivery-grade demo, or complete backend system, read [references/full-project-generation.md](references/full-project-generation.md) first.
9. If the task is for an admin backend, read these before writing code:
   - [references/layui-vue-admin-patterns.md](references/layui-vue-admin-patterns.md)
   - [references/layui-vue-admin-source-map.md](references/layui-vue-admin-source-map.md)
10. Read only the examples and docs needed for the page type:
   - curated admin examples under `assets/examples/admin/`
   - normalized component docs under `docs/layui-vue/2.23.3/plain/components/*.md`
   - normalized guide docs under `docs/layui-vue/2.23.3/plain/guide/*.md`
   - raw upstream component docs under `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/*.md` when exact syntax matters
   - raw upstream guide docs under `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/guide/*.md` when exact syntax matters
   - offline routing index: [references/offline-doc-index.md](references/offline-doc-index.md)
   - component summary: [references/layui-vue-components.md](references/layui-vue-components.md)
   - doc syntax notes: [references/layui-vue-doc-syntax.md](references/layui-vue-doc-syntax.md)
   - output format: [references/prototype-output-spec.md](references/prototype-output-spec.md)
11. Map each visible block to an allowed `layui-vue` component or a simple native HTML structure.
12. If the requested pattern does not exist in the allowed stack, say so and propose the nearest `Layui`-compatible fallback.
13. Keep the implementation prototype-friendly:
   - simple
   - readable
   - easy for PM review
   - close to the chosen branch structure
14. When drawing a prototype, create the display data directly in the frontend:
   - use local mock arrays, objects, and status fields
   - do not depend on backend interfaces before the page can be rendered
   - make the prototype reviewable even if no server exists yet
15. After delivering code, also tell the user how to run it:
   - if the user already has a `layui-vue-admin` or `Vue` repo, say which file to add or replace, how to register the route or menu entry, and which existing dev command to run
   - if the user wants a fast preview, default to a lightweight runnable prototype with at least `pnpm install` and `pnpm dev`
   - only switch to a full admin project handoff when the user explicitly asks for a full project or delivery-grade demo
   - fall back to the lightest `Vue 3 + Vite + @layui/layui-vue` preview path only when the user explicitly wants an isolated single-page preview
   - if the only context is this skill repository, explicitly say that this repository is a skill and reference pack, not a runnable prototype project by itself

## Progress feedback rules

Do not stay silent during long prototype work.

- before substantial reading or generation, send a short update that states the current step
- during long-running work, send progress feedback at least once every 20 to 30 seconds
- if the task is a lightweight runnable prototype or a full project, report at these milestones:
  - reference reading completed
  - scaffold files created
  - first runnable preview completed
  - layout, router, and store completed when they exist
  - first representative business page completed
  - remaining pages completed when they exist
  - install or build verification running
- if a step is likely to take more than one minute, warn the user before starting it
- if the user asks to evaluate skill efficiency, keep a step-by-step time log and report which stage consumed the most time

## Lightweight runnable prototype mode

Enter “lightweight runnable prototype mode” by default when the user:

- asks for a prototype, backend page set, or runnable draft
- explicitly requires `pnpm dev`
- wants to preview pages quickly and iterate with natural-language feedback

In lightweight runnable prototype mode:

- generate `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `src/main.ts`, and `src/App.vue`
- when generating `vite.config.ts`, keep a fixed port and enable `strictPort: true`
- prefer `TypeScript`
- keep `pnpm install` and `pnpm dev` as the required script contract, and add `pnpm build` when it is cheap to keep
- keep demo data local in the frontend, optionally via local mock files or `mockjs`
- keep the project small enough to generate quickly and review quickly
- do not attempt delivery-grade completeness unless the user explicitly asks for it
- choose the runnable path first:
  - admin/backend runnable path:
    - when working inside this skill repository, default to copying `assets/examples/admin/project/lightweight-admin-scaffold/` as the runnable base and then replace business content
    - do not re-derive layout, router, store, and base styles from scratch when the scaffold already matches the request
    - generate a real `src/layouts/` directory instead of placing the shell directly in `App.vue`
    - generate `src/router/` with a `BasicLayout` plus child-route admin structure
    - generate `src/views/`, `src/styles/`, and `src/store/`
    - include only the minimum admin shell needed for preview: menu, header, content area, and the routes needed by the prototype
  - non-admin runnable path:
    - when working inside this skill repository, default to copying `assets/examples/non-admin/project/lightweight-web-scaffold/` as the runnable base and then replace business content
    - do not copy the admin scaffold by default
    - prefer the lightest runnable `Vue 3 + Vite + @layui/layui-vue` structure
    - do not generate `BasicLayout` unless the user explicitly wants a shell-like structure
    - add `src/router/`, `src/layouts/`, or `src/store/` only when the requested page set actually benefits from them
- accelerate generation with this order:
  - scaffold the minimum runnable project first
  - get the first page rendering under `pnpm dev` second
  - create layout, router, store, and shared mock data only to the extent needed for preview
  - implement one representative business page third
  - add only the remaining pages the user asked for
- avoid writing the whole project in one monolithic pass when smaller milestones will reach runnable state faster
- defer optional polish, extra dependencies, and non-critical refinements until after the project can already run

## Full-project mode

Enter “full-project mode” only when the user explicitly asks for:

- a full project
- a complete backend system
- a delivery-grade demo for handoff
- a full information architecture rather than just a fast preview

In full-project mode:

- start from lightweight runnable prototype mode
- keep `pnpm install`, `pnpm dev`, and `pnpm build` as the script contract
- expand according to the chosen branch:
  - admin/backend branch: expand the shell, routes, tabs, menu structure, and business pages toward full-system coverage
  - non-admin branch: expand routes, shared layout, common sections, and business pages without forcing an admin shell
- do not stop at one representative page if the user clearly asked for broader module coverage

## Fast mode

Enter “fast mode” when the user indicates any of:

- generate directly
- faster output
- less explanation
- code first
- give me a runnable draft first

In fast mode:

- read only `references/fast-mode.md` in the first pass
- if the target is a full project, then read `references/full-project-generation.md`
- then read only one closest page example instead of scanning several
- do not read the full `docs/layui-vue/2.23.3/plain/components/` set on the first pass
- do not read `assets/vendor/` raw material on the first pass
- open a single component doc only when a specific prop, event, or slot is uncertain
- in admin/backend mode, if a local copyable scaffold exists, prefer copying `assets/examples/admin/project/lightweight-admin-scaffold/` and then replacing business content
- if a minimal scaffold reference already exists, generate from it instead of re-deriving the project structure
- stop after the minimum confident reference set is found and start coding immediately
- prefer one representative page plus reusable shared patterns over implementing every module from scratch

## Admin-specific defaults

When the user asks for a management backend and does not specify otherwise:

- assume desktop-first layout
- assume `layui-vue-admin` shell with left side navigation and top header
- assume breadcrumb in header
- assume a tab bar below header only when the prototype needs multi-page switching
- assume cards as section wrappers
- assume top search card + table region for CRUD pages
- assume modal or drawer editing for simple create or edit flows
- assume `layouts/router/store/styles` directories when the user needs a runnable prototype

## Non-admin defaults

When the request is not an admin/backend system:

- do not use `BasicLayout`
- do not use left-side admin navigation by default
- do not add breadcrumb or tab bar unless the user explicitly asks for that structure
- do not read `assets/examples/admin/layout/` or `assets/examples/admin/router/` first
- prefer a page-local layout built directly from `layui-vue` components
- keep the output focused on the requested page itself, not on admin shell completion
- prefer cards, grid, tabs, page headers, hero sections, filters, detail sections, and simple local state over admin-only navigation chrome
- use [assets/templates/dashboard.vue](assets/templates/dashboard.vue), [assets/templates/crud-page.vue](assets/templates/crud-page.vue), or direct `layui-vue` composition as starting points when they fit

If the user asks for a runnable prototype but the page is non-admin:

- you may still generate `package.json`, `vite.config.ts`, `src/main.ts`, and `src/App.vue`
- but the page should remain a plain `layui-vue` app, not a disguised admin console
- for a single-page preview, prefer the lightest runnable `Vue 3 + Vite + @layui/layui-vue` structure instead of copying the admin scaffold

## Example source selection

Read the lightest matching example first:

- admin lightweight runnable prototype:
  - `references/fast-mode.md`
  - `assets/examples/admin/project/lightweight-admin-scaffold/`
  - `assets/examples/admin/project/lightweight-admin-scaffold/README.md`
  - `assets/examples/admin/project/minimal-admin-skeleton.md`
  - one closest page example
- admin full project:
  - `references/fast-mode.md`
  - `references/full-project-generation.md`
  - `references/layui-vue-admin-source-map.md`
  - `assets/examples/admin/project/lightweight-admin-scaffold/`
  - `assets/examples/admin/project/lightweight-admin-scaffold/README.md`
  - `assets/examples/admin/project/minimal-admin-skeleton.md`
- non-admin lightweight runnable prototype:
  - `references/fast-mode.md`
  - `assets/examples/non-admin/project/lightweight-web-scaffold/`
  - `assets/examples/non-admin/project/lightweight-web-scaffold/README.md`
  - `assets/templates/dashboard.vue`
  - `assets/templates/crud-page.vue`
  - `assets/templates/form-dialog.vue`
  - the minimum relevant component docs under `docs/layui-vue/2.23.3/plain/components/`
- non-admin fuller runnable project:
  - `references/fast-mode.md`
  - `references/full-project-generation.md`
  - `assets/examples/non-admin/project/lightweight-web-scaffold/`
  - `assets/examples/non-admin/project/lightweight-web-scaffold/README.md`
  - `assets/templates/dashboard.vue`
  - `assets/templates/crud-page.vue`
  - `assets/templates/form-dialog.vue`
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

Only read the full local admin project when the admin examples do not cover the needed pattern.

## Hard constraints

- Use only `layui-vue` compatible components and styling patterns.
- Keep page layout compatible with `layui-vue-admin` only when the target is actually admin/backend.
- Do not introduce other UI libraries.
- Do not invent a visual language that conflicts with Layui admin defaults.
- Prefer cards, forms, tables, tabs, drawers, dialogs, tags, and switches over custom widgets.
- When producing prototype code, keep data local in the frontend unless the user explicitly asks for API integration.
- Treat this skill as desktop-first, not mobile-app-first.
- When the user asks for a runnable prototype, do not return only a detached page file if the user needs `pnpm dev`.
- When the user asks for a full project, do not substitute a lightweight preview skeleton for a delivery-grade project skeleton.
- For runnable projects, do not omit `strictPort: true` from `vite.config.ts`.
- If the request is clearly non-admin, do not force it into an admin shell just because this skill was triggered.
- If the request is non-admin, do not require `layui-vue-admin`; staying within plain `layui-vue` is valid and expected.

## Reference loading rules

- Prefer normalized offline docs under `docs/layui-vue/2.23.3/plain/` for first-pass reading.
- Prefer [references/offline-doc-index.md](references/offline-doc-index.md) when you need to route from page intent to the right example or component doc quickly.
- Prefer curated summaries under `references/` for scanning.
- Prefer curated examples under `assets/examples/admin/` for admin page structure.
- Prefer `assets/templates/` plus component docs for non-admin page structure.
- Treat files under `assets/vendor/` as fallback raw material, not first-pass prompt content.
- Read raw vendor docs only when the summaries or curated examples are insufficient.
- If fast mode is active, do not expand to full component docs or raw vendor docs in the first pass.

## Templates

Start from these templates when code is requested and the request is generic:

- [assets/templates/crud-page.vue](assets/templates/crud-page.vue)
- [assets/templates/form-dialog.vue](assets/templates/form-dialog.vue)
- [assets/templates/dashboard.vue](assets/templates/dashboard.vue)

Use admin examples first when the request explicitly targets a backend page; otherwise prefer templates first.

## Expected response shapes

Choose the lightest useful output:

- page module list
- wireframe section list
- component mapping
- route and menu draft
- frontend mock data draft
- lightweight runnable prototype
- `Vue` prototype page
- PRD-to-prototype conversion notes
- run or preview instructions when code is included

If the user is vague, default to:

1. page goal
2. information architecture
3. component mapping
4. main interactions
5. route or menu placement
6. prototype code
7. run instructions
