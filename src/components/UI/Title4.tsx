export default function Title4(
    {
        title
    }:
    {
        title: string
    }
){
    return <h4
        className='
        pt-12 
        pb-2 
        text-2xl
        leading-loose'
    >
        { title }
    </h4>
}