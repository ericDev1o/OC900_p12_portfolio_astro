import { useStore } from '@nanostores/react';
import { logoStore } from '@/stores/logoStore';
import type { LogoKey } from '@/custom/types/LogoKey';

export function useLogo() {
    const logos = useStore(logoStore);
    return {
        getLogoURI: (key: string) => logos[key as LogoKey]
    };
}