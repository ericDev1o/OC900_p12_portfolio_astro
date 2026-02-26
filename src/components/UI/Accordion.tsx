import { type ReactNode } from 'react'; 

/** 
 * This is an accordion. 
 * @param summary is the label of hidden content 
 * @returns label of hidden content, arrow to open/close and content. 
 * */

export default function Accordion( 
  { 
    summary, 
    children 
  }: { 
    summary: string; 
    children: ReactNode 
  } ) 
  { 
    return( 
      <details 
        className='
          group 
          w-full 
          rounded 
          shadow' 
      > 
        <summary
          className='
            cursor-pointer 
            flex 
            justify-between 
            items-center 
            px-4 
            py-3 
            font-semibold 
            text-blue-500 
            hover:bg-gray-700 
            select-none' 
        > 
          {summary} 
          <span 
            aria-hidden='true' 
            className='
                inline-block 
                transition-transform
                duration-600 
                ease-in-out 
                motion-reduce:transition-none 
                group-open:rotate-180'
          > 
            ▼ 
          </span>
        </summary>
        <div 
          className='
            px-4 
            py-3' 
        > 
          {children} 
        </div>
      </details>
    )
  };