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
        text-blue-300 
        hover:text-blue-600 
        hover:scale-110 
        transition
        transform 
        duration-600 
        motion-reduce:duration-3000 
        ease-in-out'
    >
       { text }
    </a>
}