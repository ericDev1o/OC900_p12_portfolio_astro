import type { ReactNode } from 'react';
import
{ 
  useRef, 
  useState, 
  useEffect, 
  useLayoutEffect,
  useId
} from 'react';
import * as m from '../../paraglide/messages';   

/**
 * This is a custom HTML accordion.
 * It was done due to realization difficulties 
 * to customize my animation using Flowbite's 4.0 Accordion.
 *  
 * Browser retro-compatibility:
 *  'onwebkittransitionend' 
 * is on old Safari and Chrome browsers.
 * 
 * @param summary is the label of hidden content
 * @returns label of hidden content, arrow to open/close and content.
 */
export default function AnimatedDetails(
  { summary, children }: { summary: string; children: ReactNode }
) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState('0px');
  const [shouldRender, setShouldRender] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const contentId = useId();

  const toggle = () => {
    if(! isOpen){
      setShouldRender(true);
      setIsOpen(true);
    }
    else {
      setMaxHeight('0px');
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (shouldRender && isOpen && contentRef.current) {
      requestAnimationFrame(() => {
        const height = contentRef.current?.scrollHeight;
        setMaxHeight(`${height}px`);
      });
    }
  }, [shouldRender, isOpen]);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const onTransitionEnd = (event: TransitionEvent) => {
      if (event.propertyName !== 'max-height') return;
      
      if(! isOpen)
      {
        setShouldRender(false);
        setMaxHeight('0px');
      }
    };

    const supportsTransitionEnd = 
      'ontransitionend' in window 
      ||
      'onwebkittransitionend' in window; // old Safari and Chrome browsers
      
    if(supportsTransitionEnd) {
      content.addEventListener('transitionend', onTransitionEnd);
      return () => {
        content.removeEventListener('transitionend', onTransitionEnd);
      };
    }
    
    const TRANSITION_DURATION_MS = 600;

    const timeoutId = setTimeout(() => {
        onTransitionEnd({ propertyName: 'max-height' } as TransitionEvent);
      }, TRANSITION_DURATION_MS);
    return () => clearTimeout(timeoutId);
      
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && shouldRender && contentRef.current) {
      contentRef.current.focus();
    }
  }, [isOpen, shouldRender]);

  useEffect(() => {
    const content = contentRef.current;

    return () => {
      if(content)
        content.style.maxHeight = '0px';
    }
  }, []);

  /* useLayoutEffect runs only once on mount before browser paints.
     It avoids hydration-mismatch console error and reduces
         1) flicker
         2) layout shift 
  */
  useLayoutEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <div className='
      w-full 
      overflow-hidden 
      rounded 
      shadow '
    >
      {isHydrated ? (
        <>
          <div
            role='button'
            tabIndex={0}
            aria-expanded={isOpen}
            aria-controls={contentId}
            onClick={toggle}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle();
              }
            }}
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
              className={`
                inline-block 
                transition-transform 
                duration-600 
                motion-reduce:duration-3000
                ease-in-out 
                transform ${
                isOpen ? 'rotate-180' : ''
              }`}
            >
              ▼
            </span>
          </div>
          <div
            id={contentId}
            ref={contentRef}
            tabIndex={-1}
            style={{ maxHeight }}
            className='
              relative
              overflow-hidden
              transition-[max-height]
              duration-600
              motion-reduce:duration-3000
              ease-in-out'
          >
            {shouldRender && <div className='px-4 py-3'>{children}</div>}
          </div>
        </>
      ) : null}
        <div aria-live='polite' className='sr-only' aria-atomic='true'>
          { isHydrated && (isOpen ? m.section_opened() : m.section_closed()) }
        </div>
      </div>
  );
}