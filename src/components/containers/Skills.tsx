import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

import { useLogo } from '../hooks/useLogo';
import Skill from '../UI/Skill';

/**
 * This component holds all the Skill.tsx on the Home.tsx page in the dedicated section.
 * It is in this separate component for Home.tsx readability.
 * @returns skills logos on the Home.tsx page in the skills section.
 */
export default function Skills() {
    const { getLogoURI } = useLogo();

    const htmlLogo = getLogoURI('HTML');
    const cssLogo = getLogoURI('CSS');
    const scssLogo = getLogoURI('SCSS');
    const tailwindLogo = getLogoURI('tailwindCSS');
    const viteLogo = getLogoURI('vite');
    const jsLogo = getLogoURI('JS');
    const tsLogo = getLogoURI('TS');
    const jestLogo = getLogoURI('jest');
    const reactRouterLogo = getLogoURI('reactRouter');
    const reduxLogo = getLogoURI('redux');
    const lighthouseLogo = getLogoURI('lighthouse');
    const GTmetrixLogo = getLogoURI('GTmetrix');
    const WAvELogo = getLogoURI('WAvE');
    const axeDevToolLogo = getLogoURI('axeDevTool');
    const greenITanalysisLogo = getLogoURI('greenITanalysis');
    const stylelintLogo = getLogoURI('stylelint');
    const pa11yLogo = getLogoURI('pa11y');
    const vitestAxeLogo = getLogoURI('vitestAxe');
    const feedlyLogo = getLogoURI('feedly');
    const notionLogo = getLogoURI('notion');
    const excalidrawLogo = getLogoURI('excalidraw');

    return <div 
        className='
            flex
            justify-center
            flex-wrap
            items-center'
    >
        <Skill logoURI={viteLogo} altText='Vite'/>
        <Skill logoURI={htmlLogo} altText='HTML 5'/>
        <Skill logoURI={cssLogo} altText='CSS 3'/>
        <Skill logoURI={scssLogo} altText='SCSS'/>
        <Skill logoURI={tailwindLogo} altText='TailwindCSS' />
        <Skill logoURI={jsLogo} altText='JavaScript' />
        <Skill logoURI={tsLogo} altText='TypeScript' />
        <Skill logoURI={jestLogo} altText='Jest' />
        <FontAwesomeIcon 
            icon={faReact}
            className='w-12 h-12' 
        />
        <Skill logoURI={reactRouterLogo} altText='React Router' />
        <Skill logoURI={reduxLogo} altText='Redux' />
        <Skill logoURI={lighthouseLogo} altText='Lighthouse' />
        <Skill logoURI={GTmetrixLogo} altText='GTmetrix' />
        <Skill logoURI={WAvELogo} altText='WAvE' />
        <Skill logoURI={axeDevToolLogo} altText='Axe DevTool' />
        <Skill logoURI={greenITanalysisLogo} altText='GreenIT-Analysis' />  
        <Skill logoURI={stylelintLogo} altText='Stylelint' />
        <Skill logoURI={pa11yLogo} altText='pa11y' />
        <Skill logoURI={vitestAxeLogo} altText='Vitest-Axe' />
        <Skill logoURI={feedlyLogo} altText='Feedly' />
        <Skill logoURI={notionLogo} altText='Notion' />
        <Skill logoURI={excalidrawLogo} altText='excalidraw' />
    </div>
}