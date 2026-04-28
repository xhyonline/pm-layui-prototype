# Layui Vue Components

This file summarizes the `layui-vue 2.23.3` component docs that were copied from the official repository.

## Source

- Official normalized offline docs root: `docs/layui-vue/2.23.3/plain/components/`
- Raw upstream source path: `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/`

## How to use this file

- Use this file first to choose the right component family.
- Then open the matching normalized markdown doc in `docs/layui-vue/2.23.3/plain/components/`.
- If exact syntax still needs verification, open the matching raw upstream doc under `assets/vendor/layui-vue/upstream/layui-vue-2.23.3/docs/src/document/zh-CN/components/`.
- If a component is not listed here, search the normalized docs directory before inventing a custom UI pattern.

## PM prototype priority set

These are the components that should cover most admin and product prototype pages.

### Layout and page shell

- `layout.md`: overall page shell and structural layout.
- `container.md`: bounded content areas and page framing.
- `grid.md`: row and column layout for responsive sections.
- `card.md`: the default section container for most modules.
- `panel.md`: light content grouping when a full card is too heavy.
- `pageHeader.md`: page title, subtitle, action area, and breadcrumb-like header block.

### Navigation and wayfinding

- `menu.md`: left navigation and nested menus.
- `breadcrumb.md`: page location and hierarchy.
- `tab.md`: tabbed information grouping.
- `step.md`: step-based flow or wizard progress.

### Form and data entry

- `form.md`: the main form container and validation entry point.
- `input.md`: basic text entry.
- `textarea.md`: long text description or remarks.
- `inputNumber.md`: quantity and numeric fields.
- `select.md`: single or multiple option selection.
- `radio.md`: small mutually exclusive choices.
- `checkbox.md`: multiple selection and boolean groups.
- `switch.md`: direct on or off state.
- `datePicker.md`: date and datetime filters.
- `timeSelect.md`: time-range or clock-style selection.
- `cascader.md`: hierarchical area or category selection.
- `treeSelect.md`: tree-based selection with structure visible.
- `autoComplete.md`: search suggestion input.
- `upload.md`: file or image upload.

### Data display and review

- `table.md`: list page core component for CRUD and audit queues.
- `descriptions.md`: detail page field display.
- `tag.md`: status and categorical markers.
- `badge.md`: count and quick status indicator.
- `progress.md`: progress and completion display.
- `timeline.md`: operation or approval history.
- `collapse.md`: collapsible advanced sections.
- `empty.md`: empty state representation.
- `result.md`: result feedback pages after submit or approval.
- `tree.md`: hierarchical data display.

### Overlay and feedback

- `layer.md`: messages, confirm, modal, drawer, notify, photos, prompt.
- `drawer.md`: side-panel editing or detail review.
- `loading.md`: loading state.
- `popconfirm.md`: lightweight dangerous-action confirmation.
- `tooltip.md`: small explanatory help.
- `dropdown.md`: command or shortcut action menu.
- `noticeBar.md`: notice banner and operation reminders.

## Secondary component set

Useful when a page needs richer expression, but not always necessary for an early prototype.

- `avatar.md`
- `calendar.md`
- `carousel.md`
- `checkcard.md`
- `colorPicker.md`
- `exception.md`
- `fullscreen.md`
- `icon.md`
- `iconPicker.md`
- `jsonSchemaForm.md`
- `qrcode.md`
- `rate.md`
- `segmented.md`
- `skeleton.md`
- `slider.md`
- `space.md`
- `splitPanel.md`
- `transfer.md`
- `watermark.md`

## PM page mapping shortcuts

### CRUD list page

- Start with `card + form + table + page + layer`.
- Typical docs to read: `card.md`, `form.md`, `input.md`, `select.md`, `datePicker.md`, `table.md`, `page.md`, `layer.md`.

### Detail page

- Start with `pageHeader + card + descriptions + tag + timeline`.
- Typical docs to read: `pageHeader.md`, `card.md`, `descriptions.md`, `tag.md`, `timeline.md`.

### Dialog form

- Start with `layer + form + input + select + switch + textarea`.
- Typical docs to read: `layer.md`, `form.md`, `input.md`, `select.md`, `switch.md`, `textarea.md`.

### Dashboard

- Start with `row/col + card + tag + progress + table + noticeBar`.
- Typical docs to read: `grid.md`, `card.md`, `tag.md`, `progress.md`, `table.md`, `noticeBar.md`.

## Important constraint

- Do not infer component names from other UI libraries.
- Use the normalized docs under `docs/layui-vue/2.23.3/plain/components/` first, and use the raw upstream docs as the final authority when exact syntax matters.
