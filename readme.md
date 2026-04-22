# Hi
[![License: ISC](https://img.shields.io/badge/license-ISC-lightgrey.svg)](license.md)
[![Accessibility tests](https://img.shields.io/badge/tests-manual-yellow.svg)](#test-please)

# 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── assets/
│       └── data
│           └── projects.json
│   └── components/
│       └── containers
│           └── Layout.tsx
│           └── Portfolio.astro
│           └── Skills.tsx
│       └── UI
│           └── Footer.tsx
│           └── Header.tsx
│           └── ProjectCard.tsx
│           └── Skill.tsx
│   └── pages/
│       └── index.astro
├── test/
│   └── accessibility/
│       └── Home.a11y.test.ts
│   └── integration/
│       └── Home.integration.browser.test.tsx
└── astro.config.ts
└── eslint.config.ts
└── package.json
└── stylelint.config.mjs
└── tailwind.config.ts
└── tsconfig.json
```
Any static assets, like images, robots.txt or sitemap.xml can be placed in the `public/` directory.

# 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                                                      |
| :------------------------- | :-------------------------------------------------------------------------- |
| `yarn install`             | Installs dependencies                                                       |
| `yarn upgrade-interactive` | Upgrades dependencies one-by-one interactively                              |
| `yarn lint`                | runs `eslint --fix .`                                                       |
| `yarn test:e2e`            | runs `playwright test test/accessibility`                                   |
| `yarn test:integration`    | runs `playwright test test/integration/Home.integration.browser.test.tsx"   |
| `yarn dev`                 | Starts local dev server at `localhost:4321`, runs `astro dev`               |
| `yarn build`               | Build your production site to `./dist/`, runs `astro check && astro build`  |
| `yarn preview`             | Preview your build locally, before deploying, runs `astro preview`          |
| `yarn predeploy`           | runs `yarn build`                                                           |
| `yarn deploy`              | runs `gh-pages -d dist`                                                     |
| `yarn astro ...`           | Run CLI commands like `astro add`, `astro check`                            |
| `yarn astro -- --help`     | Get help using the Astro CLI                                                |

## clone & install using yarn, be welcome
git clone https://github.com/ericDev1o/OC900_p12_portfolio.git
yarn install
### detail: default branch is gh-pages
### you should, as often as possible, to meet portfolio's peer requirements, run
yarn upgrade-interactive

## dev taking advantage of HotModuleReload HMR
yarn dev

## validate please
### you should keep the following in mind for a future script
#### HyperTextMarkupLanguage HTML
##### WorldWideWebConsortium W3C 
###### check online; please kindly signal if I oversaw the offline same 
[https://validator.w3.org/nu/](https://validator.w3.org/nu/)
#### CascadingStyleSheets CSS
##### W3C
[https://jigsaw.w3.org/css-validator/](https://jigsaw.w3.org/css-validator/)
##### stylelint pre-validate by linting
yarn add -D stylelint stylelint-config-standard stylelint-config-tailwindcss
###### stylelint.config.mjs
/** @type {import('stylelint').Config} */
export default {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-tailwindcss'    
    ]
}
#### accessibility a11y
##### Tailwind motion-reduce
###### chromium browser manual test
F12 dev tools -> 3 vertical ... -> More tools > -> Rendering -> Emulate CSS media feature prefers-reduced-motion -> prefers-reduced-motion: reduce -> you open your project details immediately instead of 0.6s.

## test please
### e2e accessibility
yarn test:e2e
#### details
playwright test test/accessibility
### integration
#### set up
##### $ yarn playwright install
##### $ sudo yarn playwright install-deps
#### integration test in chromium browser
yarn test:integration
#### details
playwright test test/integration/Home.integration.browser.test.tsx

## preview package.json script build & then preview
yarn build
yarn preview
### details
astro check && astro build
astro preview
### detail: package.json script is from now on written PJS

## deploy
### run PJS predeploy & then deploy script
yarn predeploy
yarn deploy
#### details
yarn build
gh-pages -d dist -b gh-pages --dotfiles"

## mitigate dependency vulnerability risk please
### .yarnrc.yml
#### add this line
npmMinimalAgeGate: "7d"
#### to prevent following example attack
https://www.stepsecurity.io/blog/axios-compromised-on-npm-malicious-versions-drop-remote-access-trojan


## do you need help for markdown reading or preferred yarn install only?
### reading markdown
#### titles as 2nd color for all non CLI is preferred for multi-line platform & mobile inclusion rather than
[https://github.com/orgs/community/discussions/31570](https://github.com/orgs/community/discussions/31570)
#### please kindly signal if I oversaw the current
[https://code.visualstudio.com/docs/languages/markdown](https://code.visualstudio.com/docs/languages/markdown)

### yarn install
#### upgrade yarn
##### minor version
###### sudo corepack enable
[sudo: authenticate] Password: 
###### corepack prepare yarn@4.13.0 --activate
Preparing yarn@4.13.0 for immediate activation...
###### yarn set version 4.13.0
➤ YN0000: Downloading https://repo.yarnpkg.com/4.13.0/packages/yarnpkg-cli/bin/yarn.js
➤ YN0000: Saving the new release in .yarn/releases/yarn-4.13.0.cjs
➤ YN0000: Done in 0s 337ms
###### yarn -v
4.13.0

### preinstall a font
https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400..800&subset=latin&display=swap
#### keep only latin 
/* latin */ 
@font-face 
{ 
    font-family: 'JetBrains Mono'; 
    font-style: normal; 
    font-weight: 400 800; 
    font-display: swap; 
    src: url(https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxDcwg.woff2) format('woff2'); 
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; 
}
#### put 1 light file in src/assets/fonts
jetbrains-mono-400..800.woff2

#### update index.css
@font-face {
  font-family: 'JetBrains Mono';
  src: url('/fonts/jetbrains-mono-400..800.woff2') format('woff2');
  font-weight: 400 800;
  font-style: normal;
  font-display: swap;
}

@theme {
  --font-mono: var(--font-jetbrains-mono), ui-monospace, monospace;
}