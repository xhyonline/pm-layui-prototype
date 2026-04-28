# Stack Rules

## Scope

This skill targets one stack only:

- `Vue 3`
- `layui-vue`
- `layui-vue-admin`

## UI constraints

- Allowed: `layui-vue` components, styles, tokens, and layout patterns.
- Allowed: native HTML and CSS when needed for simple structure.
- Allowed: small glue code around the chosen stack.

- Not allowed: `Element Plus`
- Not allowed: `Ant Design Vue`
- Not allowed: `Naive UI`
- Not allowed: `Vant`
- Not allowed: unrelated Tailwind-only component kits

## Design intent

- Keep prototypes close to a real admin system.
- Favor clarity over novelty.
- Use standard form, table, tabs, card, dialog, drawer, badge, and pagination patterns.
- Avoid visual ideas that require replacing the Layui look and feel.

## Behavior constraints

- If a requested UI pattern depends on a component outside this stack, propose a `layui-vue` fallback.
- If a request needs a mobile-first design system, explicitly warn that this skill is optimized for admin and desktop-style pages.
- If the user asks for production-ready implementation, keep the prototype but note missing engineering pieces such as validation, permissions, data contracts, and real API integration.
