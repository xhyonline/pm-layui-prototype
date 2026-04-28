# Layui Vue Doc Syntax

This file explains the custom markdown containers used by the official `layui-vue` docs.

## Why this exists

The copied upstream docs are not plain Markdown. They are rendered by a Vite markdown pipeline with custom `markdown-it-container` plugins.

The plugin registry is in:

- `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/plugin/all-plugins.ts`

## Container types found in the docs

The actual container types used in the Chinese docs are:

- `title`
- `describe`
- `demo`
- `table`
- `quote`
- `anchor`
- `previousNext`

## Meaning of each container

### `::: title xxx`

- Purpose: section title block.
- Upstream render: wraps the title inside a `lay-field` heading block.
- Skill-friendly meaning: treat as a normal markdown heading.

### `::: describe xxx`

- Purpose: short descriptive paragraph.
- Upstream render: wraps text into a custom description block.
- Skill-friendly meaning: treat as a normal paragraph.

### `::: demo xxx`

- Purpose: example section with optional description and demo code.
- Upstream render: wraps code into a `lay-code` demo viewer and extracts `template` and `script` blocks.
- Skill-friendly meaning: treat as a code example section.

### `::: table`

- Purpose: API tables such as props, events, slots, and exposes.
- Upstream render: wraps markdown table content with a custom table component.
- Skill-friendly meaning: keep the inner markdown table content.

### `::: quote`

- Purpose: highlighted quote or definition block.
- Upstream render: wraps content with `lay-quote`.
- Skill-friendly meaning: treat as markdown blockquote.

### `::: anchor`

- Purpose: page anchor navigation based on title blocks.
- Upstream render: creates a floating anchor navigation component.
- Skill-friendly meaning: ignore for content extraction.

### `::: previousNext xxx`

- Purpose: previous and next navigation at the bottom of a page.
- Upstream render: builds router links from the docs menu tree.
- Skill-friendly meaning: ignore for content extraction.

## Recommended reading rule for this skill

- Prefer `docs/layui-vue/2.23.3/plain/` first.
- If formatting or semantics seem unclear, fall back to the raw upstream docs in `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/`.
- If there is still ambiguity, inspect the upstream plugin implementation in `assets/vendor/.../docs/src/plugin/`.
