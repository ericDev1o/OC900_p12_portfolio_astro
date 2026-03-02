export default function Link(
    {
        href,
        text
    }:
    {
        href: string,
        text: string
    }
){
    return <a 
        href={ href }
        target='_blank'
        rel='noopener noreferrer' 
        className='
        px-4 
        py-2 
        underline 
        text-blue-300 
        transition-transform 
        transition-colors 
        duration-600 
        ease-in-out 
        hover:text-blue-600 
        hover:scale-110 
        motion-reduce:transition-none 
        motion-reduce:transform-none'
    >
       { text }
    </a>
}