# Welcome to [Astro](https://astro.build)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/s/github/withastro/astro/tree/latest/examples/basics)

Demonstrate that @astro/image module doesn´t correctly consider subpath configuration on sharp or squoosh image manipulation server with SSR option enabled when building the project.

- Modifications on the base model:
  - Include Node SSR extension
  - Include Image extension
  - Add example image to public/logo.webp
  - Add sample Image component to index.astro page
  - Modified astro.config.mjs to include "base" configuration to "/somepath"

How to imulate problem:
```bash
yarn build && yarn preview
```

Logo image path doesn't includes '/somepath/_image/....'