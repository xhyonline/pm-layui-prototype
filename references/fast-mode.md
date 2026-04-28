# Fast Mode

Use this file to reduce first-pass reading and speed up generation.

## Trigger

Enable fast mode when the user clearly wants:

- faster output
- direct generation
- code first
- a runnable draft before a full explanation

## First-pass read limit

In fast mode, read at most:

1. this file
2. `references/full-project-generation.md`, only if the target is a full project
3. `references/layui-vue-admin-source-map.md`
4. `assets/examples/admin/project/lightweight-admin-scaffold/README.md`, only if the target is a full project
5. `assets/examples/admin/project/minimal-admin-skeleton.md`, only if the target is a full project
6. one closest page example

Do not expand in the first pass to:

- multiple page examples
- multiple component docs
- raw docs under `assets/vendor/`

## Generation strategy

- if the user wants a full project, scaffold from the minimal skeleton first
- if the user wants a page or module, generate from the closest page example first
- when a component detail is uncertain, read one exact component doc instead of scanning directories
- do not re-derive structure that is already defined by the scaffold reference
- create the first runnable milestone as early as possible, then expand from it
- prefer one representative page and shared patterns before filling every business page
- defer optional polish until after the project already starts successfully

## Fast path for full projects

For full-project requests, prefer this order:

1. read `full-project-generation.md`
2. prefer `lightweight-admin-scaffold/README.md`
3. then read `minimal-admin-skeleton.md`
4. if local scaffold reuse is allowed, copy `lightweight-admin-scaffold/` first
5. otherwise scaffold first:
   - `package.json`
   - `vite.config.ts`
   - `tsconfig.json`
   - `index.html`
   - `.gitignore`
   - `src/main.ts`
   - `src/App.vue`
   - `src/layouts/`
   - `src/router/`
   - `src/views/`
   - `src/store/`
   - `src/styles/`
6. make layout, router, and one home page runnable
7. then fill business pages

## Progress feedback

In fast mode, do not trade user visibility for speed.

- send a short update before each milestone that may take noticeable time
- if generation continues for more than 20 to 30 seconds, send another update
- for full projects, explicitly mark when scaffolding starts and when the first runnable state is reached

## Stop-reading rule

Stop searching and start coding as soon as any of these is true:

- a reusable project skeleton has been identified
- the closest page example has been identified
- the allowed component set is already clear

Only continue reading when:

- a component syntax detail is uncertain
- a required interaction pattern is missing from current examples
- the user explicitly asks for higher fidelity
