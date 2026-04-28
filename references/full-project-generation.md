# Full Project Generation Rules

Use this document for “full-project mode”.

Prioritize this mode when the user explicitly asks for any of:

- a full project
- a full backend system
- a runnable demo
- support for `pnpm dev`

## Goal

The output must be a runnable admin project, not just a page-level demo.

At minimum it should support:

- `pnpm install`
- `pnpm dev`
- `pnpm build`

## Root requirements

Generate at least these root files:

- `package.json`
- `vite.config.ts`
- `tsconfig.json`
- `index.html`
- `.gitignore`

Prefer:

- `TypeScript`
- `Vite`
- `pnpm`

## src requirements

Generate at least these directories and files:

- `src/main.ts`
- `src/App.vue`
- `src/layouts/`
- `src/router/`
- `src/views/`
- `src/store/`
- `src/styles/`

Optional but recommended:

- `src/mockjs/`
- `src/assets/`
- `src/api/`
- `src/types/`

## Layout constraints

- `App.vue` should usually act as the style and router entry with `<router-view />`
- do not place the entire admin shell directly inside `App.vue`
- use a dedicated `BasicLayout` as the main backend shell
- the backend shell should include:
  - left navigation
  - top header
  - breadcrumb
  - tab bar
  - main content area

## Router constraints

- use `src/router/index.ts`
- use `src/router/module/` or an equivalent route-organization folder
- use nested routes with `BasicLayout + children`
- place business pages under `children` instead of flattening everything at the top level
- for backend systems, include a default home or workbench route

## State and navigation constraints

In full-project mode, keep these capabilities by default:

- selected menu state
- open menu state
- tab switching
- breadcrumb
- basic theme or side-theme settings

Do not omit these admin-shell behaviors unless the user explicitly wants a reduced app.

## Styling constraints

- import global styles from a single entry such as `src/styles/index.css`
- separate page-level styles from shell-level global styles
- do not rely on inline page styles to create the whole backend shell
- avoid shell/theme conflicts such as a hand-written white side panel combined with a default dark menu theme

## Relationship between page examples and project scaffold

- `assets/examples/admin/` is for page structure and visual-pattern reference only
- `assets/templates/` is for local page scaffolding only
- neither is a substitute for a real project skeleton

If the user asks for a full project:

- establish the project scaffold first
- place business pages into `src/views/`
- then register routes and menus

## Recommended dependency set

The minimum dependency set usually includes:

- `vue`
- `vue-router`
- `pinia`
- `@layui/layui-vue`

To stay closer to the admin reference project, you may also include:

- `pinia-plugin-persistedstate`
- `mockjs`
- `axios`
- `nprogress`

## Forbidden degradation

When the user asks for a full project, do not return:

- a minimal demo with only `App.vue`, `router`, and `views`
- a backend app with no `layouts/`
- code fragments that cannot be started with `pnpm dev`
- page-only mockups with no project entry or directory structure
