export default function ProjectCardSkillLogo({ logoPath, repo}: {logoPath: string, repo: string}) {
    const pathSplit = logoPath.split('/');
    const fileName = pathSplit[pathSplit.length - 1];
    const altName = fileName?.split('.')[0];
    
    return <section>
        <a 
            href={repo} 
            target='_blank' 
            aria-label={repo} rel="noreferrer"
        >
            <img 
                src={logoPath} 
                alt={altName}
                loading='lazy'
                className='m-2'></img>
        </a>
    </section>
}