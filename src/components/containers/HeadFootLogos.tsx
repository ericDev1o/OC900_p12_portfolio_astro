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
                className='
                    focus-visible:outline-2 
                    focus-visible:outline-blue-500 
                    hover:drop-shadow-[0_0_2em_rgba(100,108,255,0.6)] 
                    focus-visible:drop-shadow-[0_0_2em_rgba(100,108,255,0.6)]'
            >
                <img 
                    src={githubLogo} 
                    className='
                        transition-shadow 
                        duration-600 
                        ease-in-out'
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
                className='
                    focus-visible:outline-2 
                    focus-visible:outline-blue-500 
                    hover:drop-shadow-[0_0_2em_rgba(100,108,255,0.6)] 
                    focus-visible:drop-shadow-[0_0_2em_rgba(100,108,255,0.6)]'
            >
                <img 
                    src={linkedinLogo} 
                    className='
                        will-change-filter 
                        filter 
                        duration-300' 
                    alt='LinkedIn logo' 
                    width={29}
                    height={24}
                />
            </a>
        </li>
    </ul>
}