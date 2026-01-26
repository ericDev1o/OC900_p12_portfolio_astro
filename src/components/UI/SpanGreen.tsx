export default function SpanGreen({ text }: { text: string })
{
    return <span 
        className='
            mx-2 
            font-extrabold 
            text-green-400'
    >
        { text }
    </span>
}