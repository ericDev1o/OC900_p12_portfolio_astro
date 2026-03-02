import { useLogo } from '../hooks/useLogo';
import { IconLink } from '../UI/IconLink';

export default function HeadFootLogos() {
    const { getLogoURI } = useLogo();

    const myLogo = getLogoURI('E');
    const linkedinLogo = getLogoURI('linkedIn');
    const githubLogo = getLogoURI('gitHub');
    
    return  <ul 
        className='
            flex 
            flex-col
            items-center 
            sm:flex-row
            gap-8'
    >
        <li>
            <img 
                src={myLogo} 
                className=' 
                    cursor-not-allowed
                    opacity-50' 
                alt='Eric logo'
                width={15}
                height={24}
            />
        </li>
        <li>   
            <IconLink 
                href='https://github.com/ericDev1o' 
                src={githubLogo} 
                alt='GitHub logo'
                width={25}
                height={24} 
            />
        </li>
        <li>   
            <IconLink 
                href='https://linkedin.com/in/ericfaraut' 
                src={linkedinLogo} 
                alt='LinkedIn logo' 
                width={29}
                height={24}
            />
        </li>
    </ul>
}