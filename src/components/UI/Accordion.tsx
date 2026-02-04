import { 
  useRef, 
  type ReactNode 
} from 'react'; 

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
    const detailsRef = useRef<HTMLDetailsElement>(null); 
    const contentRef = useRef<HTMLDivElement>(null); 

    const toggle = (e: React.MouseEvent) => 
    { 
      e.preventDefault(); 

      const details = detailsRef.current; 
      const content = contentRef.current;

      if ( ! details || ! content) return; 

      const isOpen = details.hasAttribute('open'); 

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if ( ! isOpen) 
      { 
        details.setAttribute('open', ''); 
        content.style.maxHeight = '0px'; 

        content.getBoundingClientRect();

        content.style.transition = prefersReducedMotion 
          ? 'none' 
          : 'max-height 0.6s ease-in-out'; 
        content.style.maxHeight = `${content.scrollHeight}px`; 
      } 
      else 
      { 
        content.style.maxHeight = `${content.scrollHeight}px`; 

        content.getBoundingClientRect();

        content.style.transition = prefersReducedMotion
          ? 'none'
          : 'max-height 0.6s ease-in-out'; 
        content.style.maxHeight = '0px'; 

        content.addEventListener
        ( 
          'transitionend', 
          () => details.removeAttribute('open'), { once: true } 
        ); 
      } 
    }
          
    return( 
      <details 
        ref={detailsRef} 
        className='
          w-full 
          overflow-hidden 
          rounded 
          shadow' 
      > 
        <summary onClick={toggle}
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
          ref={contentRef} 
          className='overflow-hidden'
          style={{ maxHeight: 0 }} 
        > 
          <div 
            className='
              px-4 
              py-3' 
          > 
            {children} 
          </div> 
        </div> 
      </details>
    )
  };