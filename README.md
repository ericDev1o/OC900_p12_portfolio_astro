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

Commands are run from the root of the project, from a terminal:

| Command                    | Action                                                                                                       |
| :------------------------- | :----------------------------------------------------------------------------------------------------------- |
| `pnpm install`             | Installs stable dependencies, runs `pnpm install --frozen-lockfile`                                         |
| `pnpm update --interactive`| Upgrades dependencies one-by-one interactively to install security fixes and new features                    |
| `pnpm audit`               | Checks for known vulnerabilities                                                                             |
| `pnpm lint`                | runs `biome check --fix .` Biome is lighter than ESLint, plugins and Prettier                                |
| `pnpm migrate`             | runs `pnpm biome migrate --write` Updates biome.json automatically to current biome version's correct config |
| `pnpm test:e2e`            | runs `playwright test test/accessibility`                                                                    |
| `pnpm test:integration`    | runs `playwright test test/integration/Home.integration.browser.test.tsx"                                    |
| `pnpm dev`                 | Starts local dev server at `localhost:4321`, runs `astro dev`                                                |
| `pnpm build`               | Build your production site to `./dist/`, runs `astro build`                                                  |
| `pnpm preview`             | Preview your build locally, before deploying, runs `astro preview`                                           |
| `pnpm predeploy`           | runs `pnpm build`                                                                                            |
| `pnpm deploy`              | runs `gh-pages -d dist`                                                                                      |
| `pnpm astro ...`           | Run CLI commands like `astro add`                                                                            |
| `pnpm astro -- --help`     | Get help using the Astro CLI                                                                                 |

## clone & install using pnpm, be welcome

git clone https://github.com/ericDev1o/OC900_p12_portfolio.git

pnpm install --frozen-lockfile
### detail: default branch is gh-pages

### you should, as often as possible, to meet security and peer requirements, run

pnpm update --interactive

## dev taking advantage of HotModuleReload HMR

pnpm dev

## validate please

### you should keep the following in mind for a future script

#### HyperTextMarkupLanguage HTML

##### WorldWideWebConsortium W3C 

###### check online; please kindly signal if I oversaw the offline same 

[https://validator.w3.org/nu/](https://validator.w3.org/nu/)
#### CascadingStyleSheets CSS

##### W3C

[https://jigsaw.w3.org/css-validator/](https://jigsaw.w3.org/css-validator/)

#### accessibility a11y

##### Tailwind motion-reduce

###### chromium browser manual test

F12 dev tools -> 3 vertical ... -> More tools > -> Rendering -> Emulate CSS media feature prefers-reduced-motion -> prefers-reduced-motion: reduce -> you open your project details immediately instead of 0.6s.

## TEST please

### e2e accessibility

pnpm test:e2e
#### details

playwright test test/accessibility
### integration

#### set up

##### pnpm pw:install
$ playwright install
$ playwright install-deps

#### integration test in chromium browser

pnpm test:integration
#### details

playwright test test/integration/Home.integration.browser.test.tsx

## preview package.json script build & then preview

pnpm build
pnpm preview
### details

astro build --timings
astro preview

## deploy

### run package.json script predeploy & then deploy script

pnpm predeploy
pnpm deploy
#### details

pnpm build
gh-pages -d dist -b gh-pages --dotfiles"

## SECURIZE: mitigate fresh dependency vulnerability risk please

### in pnpm.config.yaml

#### add this line

package-extending: false

### in case you do a CI/CD or locally before deploy to check versions sync with package.json

pnpm install --frozen-lockfile

### pnpm audit

Check for known vulnerabilities using pnpm's tool.

#### to prevent following example attack

https://www.stepsecurity.io/blog/axios-compromised-on-npm-malicious-versions-drop-remote-access-trojan


## do you need help for markdown reading or node installation?

### reading markdown

#### titles as 2nd color for all non CLI is preferred for multi-line platform & mobile inclusion rather than

[https://github.com/orgs/community/discussions/31570](https://github.com/orgs/community/discussions/31570)
#### please kindly signal if I oversaw the current

[https://code.visualstudio.com/docs/languages/markdown](https://code.visualstudio.com/docs/languages/markdown)

### node install

#### from scratch
##### node -v

La commande « node » n'a pas été trouvée, mais peut être installée avec :
sudo apt install nodejs
##### export NVS_HOME="$HOME/.nvs"

##### git clone https://github.com/jasongin/nvs "$NVS_HOME"

Clonage dans '/home/eric/.nvs'...
remote: Enumerating objects: 2029, done.
remote: Counting objects: 100% (147/147), done.
remote: Compressing objects: 100% (100/100), done.
remote: Total 2029 (delta 96), reused 50 (delta 44), pack-reused 1882 (from 3)
Réception d'objets: 100% (2029/2029), 1.57 MiB | 4.08 MiB/s, fait.
Résolution des deltas: 100% (1336/1336), fait.
##### . "$NVS_HOME/nvs.sh" install

Downloading bootstrap node from https://nodejs.org/dist/v24.19.0/node-v24.19.0-linux-x64.tar.xz
############################################################################################################################################### 100.0%

~/.bashrc += nvs.sh
##### nvs add latest

Downloading [#############################################################################################################################] 100%  
Extracting [#############################################################################################################################] 100%  
Added at: ~/.nvs/node/26.12.1/x64/bin/node
To use this version now: nvs use node/26.12.1/x64
##### nvs use latest

PATH += ~/.nvs/node/26.12.1/x64/bin
##### node -v

v26.12.1


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
