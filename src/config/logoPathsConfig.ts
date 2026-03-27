export const basePath = import.meta.env.BASE_URL || '/';
const fullPath = `${basePath}logos/`;

export const logosRaw = {
    HTML: fullPath + 'HTML5.webp',
    CSS: fullPath + 'CSS3.webp',
    SCSS: fullPath + 'SCSS.webp',
    tailwindCSS : fullPath + 'tailwindCSS.webp',
    vite: fullPath + 'vite.webp',
    JS: fullPath + 'JS.webp',
    TS: fullPath + 'TS.webp',
    jest: fullPath + 'jest.webp',
    react: fullPath + 'react.webp',
    reactRouter: fullPath + 'reactRouter.webp',
    redux: fullPath + 'redux.webp',
    lighthouse: fullPath + 'lighthouse.webp',
    GTmetrix: fullPath + 'GTmetrix.webp',
    WAvE: fullPath + 'WAvE.webp',
    axeDevTool: fullPath + 'axeDevTool.webp',
    greenITanalysis: fullPath + 'greenITanalysis.webp',
    stylelint: fullPath + 'stylelint.webp',
    playwright: fullPath + 'playwright.webp',
    linkedIn: fullPath + 'linkedIn.webp',
    linkedInRetina: fullPath + 'linkedIn_w90px.webp',
    gitHub: fullPath + 'gitHub.webp',
    gitHubRetina: fullPath + 'gitHub_w78px.webp',
    E: fullPath + 'logo.webp',
    Eretina: fullPath + 'logo_w23px.webp',
    feedly: fullPath + 'feedly.webp',
    notion: fullPath + 'notion.webp',
    excalidraw: fullPath + 'excalidraw.webp'
} as const;

export type LogoKey = keyof typeof logosRaw;

export function getLogoURI(key: LogoKey): string {
    return logosRaw[key];
}