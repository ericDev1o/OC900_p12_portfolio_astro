export default function LogoLinkHomeContact(
    {
        href,
        src,
        altText
    }:
    {
        href: string,
        src: string | undefined,
        altText: string
    }
){
    return <a 
        href={ href }
        target='_blank'
        rel='noopener noreferrer'
    >
        <img 
            src={ src }
            className='
            p-6 
            h-25 
            will-change-filter 
            filter 
            duration-300
            hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt={ altText }
            loading='lazy' 
        />
    </a>
}