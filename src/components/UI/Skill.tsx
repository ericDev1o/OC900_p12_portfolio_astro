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
            lazy 
            p-6 
            h-25
            will-change-filter 
            filter 
            duration-300
            hover:drop-shadow-[0_0_2em_#646cffaa]' 
        alt={altText}
        loading='lazy'
    />
}