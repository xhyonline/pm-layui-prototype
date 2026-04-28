# layui-vue 2.23.3 Offline Docs

This directory contains curated offline documentation copied from the downloaded `layui-vue 2.23.3` repository.

## Source

- Repository root: `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/`
- Official docs source: `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/`
- Overview source: `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/README.zh.md`

## Inclusion rule used

- Keep files that are actual `layui-vue` usage documentation.
- Skip files that are empty, team-only, release log, or tooling-only content.
- Keep official component markdown files because they contain component introduction, examples, and usage details.

## Included docs

- `README.zh.md`: project overview and entry description.
- `plain/guide/introduce.md`: product introduction.
- `plain/guide/getStarted.md`: install and basic setup.
- `plain/guide/problem.md`: common usage problems.
- `plain/guide/theme.md`: theme customization.
- `plain/guide/locale.md`: language and locale setup.
- `plain/guide/dark.md`: dark mode usage.
- `plain/guide/upgrade.md`: upgrade notes from older versions.
- `plain/components/*.md`: normalized component usage docs.

## Plain docs

- The normalized view for AI reading is under `plain/`.
- Prefer `plain/components/*.md` and `plain/guide/*.md` for skill prompts.
- The raw copied `guide/` and `components/` directories were removed after conversion.
- If exact upstream formatting matters, fall back to the vendor repository under `assets/vendor/`.

## Skipped docs

- Upstream `guide/changelog.md`: release log, not a usage guide.
- Upstream `guide/member.md`: empty file, not usable documentation.
- Upstream `guide/plugin.md`: VS Code helper plugin doc, not core component usage documentation for this skill.

## Reading order for the skill

1. `README.md` in this directory
2. `plain/guide/getStarted.md` and `plain/guide/introduce.md`
3. the exact `plain/components/*.md` docs needed for the requested page
4. `references/layui-vue-components.md` for PM-oriented mapping shortcuts

## Notes

- The plain docs normalize upstream markdown container syntax such as `::: title`, `::: describe`, and `::: demo`.
- If a needed behavior is unclear here, the fallback source of truth is the raw vendor repository under `assets/vendor/layui-vue/upstream/`.
