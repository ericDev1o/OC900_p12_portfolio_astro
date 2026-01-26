import type { ReactNode } from 'react';
import SkillLogo from '../UI/ProjectCardSkillLogo';

/**
 * This component is the container of ProjectCardSkillLogo.tsx.
 * ProjectCard prefix is specified to avoid confusion 
 * with skill logos on the Home.tsx page in the skills section.
 * 
 * @param paths to logo files
 * @param repo URL each logo targets
 * @returns 
 */
export default function ProjectCardSkillLogos({paths, repo}: {paths: Set<string>, repo: string}) {
    let nodes: Set<ReactNode> = new Set<ReactNode>;
    paths.forEach(path => {
        nodes.add(<SkillLogo logoPath={path} repo={repo} key={path} />);
        });
    if(nodes.size > 1)
        return <div 
            className='
                flex 
                flex-wrap 
                shrink-0 
                justify-between 
                items-center'>
                    {nodes}
        </div>;
    else if (nodes.size === 1)
        return nodes
    else return <></>;
}