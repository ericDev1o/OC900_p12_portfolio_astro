import { logos } from '../config/logoPathsConfig';
import { LogoKey } from '../types/LogoKey';
import { createContext, ReactNode, useContext } from 'react';

interface SkillsLogoContextType {
    getLogoURI: (key: LogoKey) => string | undefined;
}

const SkillsLogoContext = createContext<SkillsLogoContextType | undefined>(undefined);

/**
 * Logo name keys defined in /src/types/LogoKey.ts 
 * have a path defined in /src/config/LogoPaths.ts.
 * It avoids path hard-coding in components to ease maintainability.
 * 
 * @param {ReactNode} children wrapped in the Provider see ../main.tsx
 * @returns {SkillsLogoContextType} an object which getLogoURI function that
 * returns for a given key its corresponding logo image file URI.
 */
export function SkillsLogoProvider({children}: {children: ReactNode}) {
    const getLogoURI = (key: LogoKey) => {
        const fileFullPath = logos[key];
        return fileFullPath ? `${fileFullPath}` : undefined;
    }

    return <SkillsLogoContext.Provider value={{getLogoURI}}>
        {children}
    </SkillsLogoContext.Provider>;
}

export function useSkillsLogo() {
    const context = useContext(SkillsLogoContext);
    if(! context)
        throw new Error('useSkillsLogo must be used within a SkillsLogoProvider');
    return context;
}