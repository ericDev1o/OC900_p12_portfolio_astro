export default function SpanViolet({ text }: { text: string })
{
    return <span 
        className='
            mx-2 
            font-extrabold 
            text-violet-400'
    >
        { text }
    </span>
}