export default function Title5(
    {
        title
    }:
    {
        title: string
    }
){
    return <h5
        className='
        pb-4 
        text-xl
        leading-loose'
    >
        { title }
    </h5>
}