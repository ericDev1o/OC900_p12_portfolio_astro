# Readme
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
│       └── Home.pa11y.test.ts
│   └── integration/
│       └── Home.integration.browser.test.tsx
└── astro.config.ts
└── eslint.config.ts
└── package.json
└── stylelint.config.mjs
└── tailwind.config.ts
└── tsconfig.json
└── vitest-setup.ts
└── vitest.config.ts
```
Any static assets, like images, robots.txt or sitemap.xml can be placed in the `public/` directory.

# 🧞 Commands

All commands are run from the root of the project, from a terminal:

| :------------------------- | :-------------------------------------------------------------------------- |
| Command                    | Action                                                                      |
| :------------------------- | :-------------------------------------------------------------------------- |
| `yarn install`             | Installs dependencies                                                       |
| `yarn upgrade-interactive` | Upgrades dependencies one-by-one interactively                              |
| `yarn clean`               | runs `vite :clean`                                                          |
| `yarn lint`                | runs `eslint --fix .`                                                       |
| `yarn test:a11y`           | runs `vitest run --config vitest.config.ts`                                 |
| `yarn test:integration`    | runs `playwright test test/integration/Home.integration.browser.test.tsx"   |
| `yarn dev`                 | Starts local dev server at `localhost:4321`, runs `astro dev`               |
| `yarn build`               | Build your production site to `./dist/`, runs `astro check && astro build`  |
| `yarn preview`             | Preview your build locally, before deploying, runs `astro preview`          |
| `yarn predeploy`           | runs `yarn build`                                                           |
| `yarn deploy`              | runs `gh-pages -d dist`                                                     |
| `yarn astro ...`           | Run CLI commands like `astro add`, `astro check`                            |
| `yarn astro -- --help`     | Get help using the Astro CLI                                                |
| :------------------------- | :-------------------------------------------------------------------------- |

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
[text](https://validator.w3.org/nu/)
#### CascadingStyleSheets CSS
##### W3C
[text](https://jigsaw.w3.org/css-validator/)
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
### pa11y
yarn test:a11y
#### details
vitest run --config vitest.config.ts
### integration test in chromium browser
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
gh-pages -d dist




## do you need help for markdown reading or preferred yarn install only?
### reading markdown
#### titles as 2nd color for all non CLI is preferred for multi-line platform & mobile inclusion rather than
[text](https://github.com/orgs/community/discussions/31570)
#### please kindly signal if I oversaw the current
[text](https://code.visualstudio.com/docs/languages/markdown)

### yarn install
#### upgrade yarn
##### minor version
###### the following answer finally given by brave's leo AI might do it for you; it once did for last peer node version by eric@eric-Aspire-TC-603:~/source/repos/OC/OC900_p12_portfolio$ 
which yarn
###### /home/eric/.nvs/node/24.10.0/x64/bin/yarn
corepack yarn -v
###### 4.11.0
corepack prepare yarn@4.12.0 --activate
###### Preparing yarn@4.12.0 for immediate activation...
corepack yarn -v
###### 4.11.0
yarn set version stable
###### ➤ YN0000: Downloading https://repo.yarnpkg.com/4.12.0/packages/yarnpkg-cli/bin/yarn.js
###### ➤ YN0000: Saving the new release in .yarn/releases/yarn-4.12.0.cjs
###### ➤ YN0000: Done in 0s 189ms
yarn install
###### ➤ YN0000: · Yarn 4.12.0
###### ➤ YN0000: ┌ Resolution step
###### ➤ YN0000: └ Completed in 0s 357ms
###### ➤ YN0000: ┌ Post-resolution validation
###### ➤ YN0002: │ portfolio@workspace:. doesn't provide @testing-library/dom (p6657f8), requested by @testing-library/react.
###### ➤ YN0086: │ Some peer dependencies are incorrectly met by your project; run yarn explain peer-requirements <hash> for details, where <hash> is the six-letter p-prefixed code.
###### ➤ YN0086: │ Some peer dependencies are incorrectly met by dependencies; run yarn explain peer-requirements for details.
###### ➤ YN0000: └ Completed
###### ➤ YN0000: ┌ Fetch step
###### ➤ YN0000: └ Completed in 1s 186ms
###### ➤ YN0000: ┌ Link step
###### ➤ YN0000: └ Completed in 0s 447ms
###### ➤ YN0000: · Done with warnings in 2s 186ms
yarn -v
###### 4.12.0


#### after you're done, do you still need help?
##### try follow https://yarnpkg.com/getting-started/install or
##### fallback on https://classic.yarnpkg.com/en/docs/install#debian-stable and 
##### https://yarnpkg.com/migration/guide
###### one or many following (abbreviated to complete ...) commands might help
which yarn
###### ...nvs...node/25.../bin/x64
###### /usr/local/bin...
sudo apt remove yarn && sudo apt purge yarn
rm /home/.../.nvs/node/25.2.1/x64/bin/yarn /home/.../.nvs/node/25.2.1/x64/bin/yarnpkg
find ~/.nvs -name "yarn" -type f -executable -delete
##### sudo rm -f ... .yarn .yarnpkg
sudo rm -f usr/local/bin/yarn usr/local/bin/yarnpkg
exec $SHELL
##### avoid the following -g as possible
npm install --g yarn@latest
yarn exec env
##### no paths? Try to remove the package.json packageManager line.
yarn exec env
##### paths? then don't install/enable
##### corepack enable
corepack yarn -v
##### not latest?
corepack prepare yarn@latest --activate
corepack yarn -v
yarn set version stable
yarn install
yarn -v

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