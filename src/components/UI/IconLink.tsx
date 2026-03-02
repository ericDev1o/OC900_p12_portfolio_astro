type IconLinkProps = {
  href: string
  src: string | undefined
  alt: string
  width: number
  height: number
  classNameA?: string 
  classNameImg?: string
}

export function IconLink({
  href,
  src,
  alt,
  width,
  height,
  classNameA='',
  classNameImg=''
}: IconLinkProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`
        focus-visible:outline-2
        focus-visible:outline-blue-500
        hover:drop-shadow-[0_0_2em_rgba(100,108,255,0.6)]
        focus-visible:drop-shadow-[0_0_2em_rgba(100,108,255,0.6)]
        ${classNameA}
      `}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`
          transition-shadow
          duration-600
          ease-in-out
          ${classNameImg}
        `}
        loading='lazy'
      />
    </a>
  )
}