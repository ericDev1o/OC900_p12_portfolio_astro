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
        className='
            focus-visible:outline-2 
            focus-visible:outline-blue-500 
            hover:drop-shadow-[0_0_2em_rgba(100,108,255,0.6)] 
            focus-visible:drop-shadow-[0_0_2em_rgba(100,108,255,0.6)]'
    >
        <img 
            src={ src }
            className='
            p-6 
            h-25 
            transition-shadow 
            duration-600 
            ease-in-out 
            motion-reduce:transition-none' 
            alt={ altText }
            loading='lazy' 
        />
    </a>
}