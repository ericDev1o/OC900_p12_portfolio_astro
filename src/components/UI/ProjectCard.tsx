import type { Project } from '../../custom/types/Project';
import type { LogoKey } from '../../custom/types/LogoKey';

import { basePath } from '../../config/logoPathsConfig';

import { useLogo } from '../hooks/useLogo';

import SkillLogos from '../containers/ProjectCardSkillLogos';

import LinkClickWarning from './LinkClickWarning';
import AnimatedDetails from './AnimatedDetails';

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

    return <article 
        className='
            my-8 
            mx-4 
            bg-gray-900  
            max-w-lg   
            rounded-4xl 
            shadow-xs'
        >
            <div 
                className='
                    p-6 
                    text-center'
            >
                <span 
                    className='
                        group 
                        relative 
                        inline-flex 
                        items-center 
                        bg-brand-softer 
                        text-fg-brand-strong 
                        text-xs 
                        font-medium 
                        px-1.5 
                        py-0.5 
                        rounded-sm'
                >
                    <a 
                        href={project.URL}
                        target='_blank' 
                        aria-label={project.title}
                        className='
                            hover:scale-110 
                            transition 
                            duration-600 
                            motion-reduce:duration-3000 
                            ease-in-out' rel="noreferrer"
                    >
                        <img 
                            src={imgSrc}
                            className='
                                lazy 
                                w-full 
                                h-max 
                                will-change-filter 
                                filter 
                                duration-300
                                hover:drop-shadow-[0_0_2em_#646cffaa]' 
                            alt={alt}
                            loading='lazy'
                        />
                    </a>
                    <LinkClickWarning />
                </span>
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
                <SkillLogos paths={logoURIs} repo={project.repository} />
            </div>
        <div className='space-y-4'>
            <AnimatedDetails
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
            </AnimatedDetails>
        </div>
    </article>
}