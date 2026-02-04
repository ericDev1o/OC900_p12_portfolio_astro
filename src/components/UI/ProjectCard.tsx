import type { Project } from '../../custom/types/Project';
import type { LogoKey } from '../../custom/types/LogoKey';

import { basePath } from '../../config/logoPathsConfig';

import { useLogo } from '../hooks/useLogo';

import SkillLogos from '../containers/ProjectCardSkillLogos';

import LinkClickWarning from './LinkClickWarning';
import Accordion from './Accordion';

export default function ProjectCard
(
    {
        project,
        projectsPath
    }: {
        project: Project
        projectsPath: string
    }
)
{
    const alt = project.title.split(',')[0];

    const imgSrc = basePath + projectsPath + project.fileName;

    const logoURIs = new Set<string>();
    const { getLogoURI } = useLogo();
    project.logos.forEach(logoName => {
        const logoPath = getLogoURI(logoName as LogoKey);
        logoURIs.add(logoPath as string);
    });

    const motion = `
        duration-600 
        ease-in-out 
        motion-reduce:transition-none`

    return <article 
        className='
            my-8 
            mx-4 
            max-w-lg 
            shadow-xs 
            bg-gray-900'
        >
            <div 
                className='
                    p-6 
                    text-center'
            >
                <a 
                    href={project.URL}
                    target='_blank' 
                    aria-label={project.title}
                    className={`
                        group 
                        inline-block 
                        relative
                        transition-transform                            
                        hover:scale-110 
                        ${ motion }
                        motion-reduce:transition-none 
                        motion-reduce:transform-none
                    `}
                    rel="noreferrer"
                >
                    <img 
                        src={imgSrc}
                        className={`
                            w-full 
                            transition-shadow 
                            ${ motion }
                            hover:shadow-[0_0_2em_rgba(100,108,255,0.6)]
                        `}
                        alt={alt}
                        loading='lazy'
                    />
                    <LinkClickWarning />
                </a>
                <h4 
                    className='
                        m-6 
                        text-2xl 
                        leading-loose 
                        text-orange-500 
                        font-semibold 
                        tracking-tight 
                        text-heading'
                > 
                    {project.title}
                </h4>
                <SkillLogos 
                    paths={logoURIs} 
                    repo={project.repository} 
                />
            </div>
            <Accordion
                summary='Découvrez ce projet'
            >
                <h6 className='font-extrabold mt-2'>contexte</h6>
                <p>{project.contexte}</p>
                <h6 className='font-extrabold mt-2'>objectifs</h6>
                <p>{project.objectifs}</p>
                <h6 className='font-extrabold mt-2'>stack technique</h6>
                <p>{project.stackTechnique}</p><h6 className='font-extrabold mt-2'>compétences développées</h6>
                <p>{project.competencesDeveloppees}</p>
                <h6 className='font-extrabold mt-2'>résultats et impact</h6>
                <p>{project.resultatsEtImpact}</p>
                <h6 className='font-extrabold mt-2'>perspectives d'amélioration</h6>
                <p>{project.perspectivesAmelioration}</p>
            </Accordion>
    </article>
}