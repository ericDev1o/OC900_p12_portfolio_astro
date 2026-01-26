import type { ReactNode } from 'react'

export default function Section(
    {
        children
    }:
    {
        children: ReactNode
    }
){
    return <section
        className='
            odd:bg-gray-950 
            even:bg-gray-800  
            pb-22 
            px-4'
    >
        { children }
    </section>
}