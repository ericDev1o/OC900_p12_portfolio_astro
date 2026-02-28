export default function LinkClickWarning() {
    return <span className='
        absolute 
        bottom-full 
        mb-2 
        inset-x-0 
        mx-auto 
        z-40 

        bg-white 
        text-gray-900 
        text-xs 
        rounded 
        py-1 
        px-3 

        whitespace-nowrap
        max-w-[90vw]
        overflow-hidden
        text-ellipsis

        opacity-0 
        pointer-events-none 
        group-hover:opacity-100 

        transition-opacity 
        duration-600 
        ease-in-out
        
        motion-reduce:transition-none'
    >
        🔒 Vérifiez toujours l'URL avant de cliquer!
    </span>
}