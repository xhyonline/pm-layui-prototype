# Version Matrix

## Current project decision

- `layui`: follow the `@layui/layui-vue` 2.23.3 design language and package set
- `layui-vue`: `2.23.3`
- `layui-vue-admin`: align full-project conventions to a `layui-vue-admin-master` reference project, package version `2.0.0`, upgraded to `@layui/layui-vue 2.23.3`
- `Vue`: `3.3.13`

## Local source of truth

- Vendor source root: `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/`
- Admin example root: `assets/examples/admin/`
- Full-project convention reference: `references/full-project-generation.md`
- Official normalized offline docs root: `docs/layui-vue/2.23.3/plain/`
- Raw upstream docs root: `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/`
- Package metadata source: `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/packages/layui/package.json`

## Confirmed from downloaded source

- `@layui/layui-vue` package version is `2.23.3`.
- Workspace peer dependency `vue` version is `3.3.13`.
- Raw official Chinese usage docs come from `docs/src/document/zh-CN/`.
- Admin layout and project-structure conventions were distilled from an upgraded `layui-vue-admin-master` reference project during skill authoring.

## Usage rule

- Do not mix examples from different major versions.
- When vendor docs conflict, prefer the versions listed above.
- When admin examples and raw component docs differ, keep the component API aligned to `layui-vue 2.23.3` and keep the page layout aligned to the local admin examples.
- When full-project conventions and page-only examples differ, prefer the full-project conventions for runnable demo requests.
- When building a prototype, prefer local mock data over any assumed backend contract.

## Recommended next step

- Keep normalized docs and curated references aligned whenever the upstream docs snapshot changes.
