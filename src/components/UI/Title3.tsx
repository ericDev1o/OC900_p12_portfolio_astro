export default function Title3(
    {
        title,
        id
    }:
    {
        title: string,
        id: string
    }
){
    return <h3
        id={ id }
        className='
        pt-22 
        pb-6 
        text-3xl
        leading-loose'
    >
        { title }
    </h3>
}