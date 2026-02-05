import type { LogoKey } from '@/custom/types/LogoKey';

export const basePath = import.meta.env.BASE_URL || '/';
export const logosPaths = 'logos/';
const fullPath = basePath + logosPaths;

export const logos: Record<LogoKey, string> = {
    HTML: fullPath + 'HTML5.webp',
    CSS: fullPath + 'CSS3.webp',
    SCSS: fullPath + 'SCSS.webp',
    tailwindCSS : fullPath + 'tailwindCSS.webp',
    vite: fullPath + 'vite.webp',
    JS: fullPath + 'JS.webp',
    TS: fullPath + 'TS.webp',
    jest: fullPath + 'jest.webp',
    react: fullPath + 'react.webp',
    reactRouter: fullPath + 'react-router.webp',
    redux: fullPath + 'redux.webp',
    lighthouse: fullPath + 'lighthouse.webp',
    GTmetrix: fullPath + 'GTmetrix.webp',
    WAvE: fullPath + 'WAvE.webp',
    axeDevTool: fullPath + 'axeDevTool.webp',
    greenITanalysis: fullPath + 'greenITanalysis.webp',
    stylelint: fullPath + 'stylelint.webp',
    pa11y: fullPath + 'pa11y.webp',
    vitestAxe: fullPath + 'vitest-axe.webp',
    linkedIn: fullPath + 'linkedIn.webp',
    gitHub: fullPath + 'gitHub.webp',
    E: fullPath + 'logo.webp',
    feedly: fullPath + 'feedly.webp',
    notion: fullPath + 'notion.webp',
    excalidraw: fullPath + 'excalidraw.webp'
}