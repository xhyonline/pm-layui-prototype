# Prototype Output Spec

Use this file to keep the skill output stable.

## Default output order

1. page goal
2. target users
3. page structure
4. component mapping
5. key interactions
6. route or menu placement
7. frontend mock data fields
8. prototype code

## Code output rules

- Prefer `Vue Single File Component` format.
- Keep code easy to read and easy to demo.
- Use stack-compatible naming.
- Do not import unrelated UI libraries.
- Keep mock data local unless the user asks for API integration.
- Keep the inner page structure compatible with the `layui-vue-admin` shell.

## Full-project output rules

When the user asks for a runnable project, demo system, or `pnpm dev`:

- Do not return only a page file.
- Return a complete project skeleton with root config files and a `src/` directory structure.
- Include `src/layouts`, `src/router`, `src/views`, `src/store`, and `src/styles`.
- Keep `App.vue` as a routing entry, not the only place where the whole shell lives.
- Use nested routes with a layout component such as `BasicLayout`.
- Include run instructions using `pnpm install` and `pnpm dev`.

## Prototype fidelity

- Low fidelity: section blocks and component placeholders only.
- Medium fidelity: realistic layout and component choices, minimal behavior.
- High fidelity: close to admin implementation, but still prototype-oriented.

## PM communication rules

- Explain screens in business language first.
- Translate business blocks into components second.
- Call out assumptions when requirements are missing.
- If it is a backend page, mention which first-level menu or route group it belongs to.

## If code is not requested

Return:

- page module list
- field list
- operation flow
- state and status list
- optional prototype notes
