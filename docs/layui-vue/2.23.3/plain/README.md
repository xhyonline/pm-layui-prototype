# layui-vue 2.23.3 Plain Docs

This directory contains a normalized plain-Markdown view of the curated `layui-vue 2.23.3` docs.

## What changed

- Converted `::: title` to markdown headings.
- Converted `::: describe` to normal paragraphs.
- Converted `::: demo` to `### 示例` plus fenced `vue` code blocks.
- Preserved table bodies from `::: table`.
- Dropped `anchor` and `previousNext` navigation-only containers.

## Why use this directory

- Better for AI skill reading.
- Easier to search in an editor.
- Easier to copy from without the upstream doc-site syntax.

## Fallback rule

If the normalized document loses needed context, use the raw upstream copy in `../../../assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/`.
