import { IconLink } from "./IconLink"

export default function LogoLinkHomeContact(
    {
        href,
        src,
        altText
    }:
    {
        href: string,
        src: string | undefined,
        altText: string
    }
){
    return <IconLink 
        href={ href }
        src={ src } 
        alt={ altText }
        width={25}
        height={24}
        classNameA='p-6' 
        classNameImg='h-[25px]'
    />
}