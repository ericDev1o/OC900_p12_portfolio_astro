import { useLogo } from '../hooks/useLogo';

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
            <a 
                href='https://github.com/ericDev1o' 
                target='_blank'
                rel='noopener noreferrer'
            >
                <img 
                    src={githubLogo} 
                    alt='GitHub logo'
                    width={25}
                    height={24} 
                />
            </a>
        </li>
        <li>   
            <a 
                href='https://linkedin.com/in/ericfaraut' 
                target='_blank'
                rel='noopener noreferrer'
            >
                <img 
                    src={linkedinLogo} 
                    className='
                        will-change-filter 
                        filter 
                        duration-300
                        hover:drop-shadow-[0_0_2em_#646cffaa]' 
                    alt='LinkedIn logo' 
                    width={29}
                    height={24}
                />
            </a>
        </li>
    </ul>
}