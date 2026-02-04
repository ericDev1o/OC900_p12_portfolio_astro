export default function Skill({
    logoURI, 
    altText
}: {
    logoURI: string | undefined, 
    altText: string
}) {
    return <img 
        src={logoURI} 
        className='
            p-6 
            h-25 
            transition-shadow 
            duration-600 
            ease-in-out 
            hover:shadow-[0_0_2em_rgba(100,108,255,0.6)] 
            motion-reduce:transition-none' 
        alt={altText}
        loading='lazy'
    />
}