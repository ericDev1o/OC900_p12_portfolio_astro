import { useLogo } from '../hooks/useLogo';
import Skill from '../UI/Skill';

/**
 * This component holds all the Skill.tsx on the Home.tsx page in the dedicated section.
 * It is in this separate component for Home.tsx readability.
 * @returns skills logos on the Home.tsx page in the skills section.
 */
export default function Skills() {
    const { getLogoURI } = useLogo();

    const skills = [
        'HTML',
        'CSS',
        'SCSS',
        'tailwindCSS',
        'vite',
        'JS',
        'TS',
        'jest',
        'react',
        'reactRouter',
        'redux',
        'lighthouse',
        'GTmetrix',
        'WAvE',
        'axeDevTool',
        'greenITanalysis',
        'stylelint',
        'pa11y',
        'vitestAxe',
        'feedly',
        'notion',
        'excalidraw'
    ];

    return <div 
        className='
            flex
            justify-center
            flex-wrap
            items-center'
    >
        {skills.map(skill => (
            <Skill
                key={skill}
                logoURI={getLogoURI(skill)}
                altText={skill}
            />
        ))}
    </div>
}