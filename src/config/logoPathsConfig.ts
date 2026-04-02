const modules = import.meta.glob<{ default: ImageMetadata }>(
    '@/assets/images/logos/*.webp', 
    { eager: true }
);

export const logosMap = Object.fromEntries(
    Object.entries(modules).map(([path, module]) => {
        const filename = path.split('/').pop();
        if( ! filename)
            throw new Error(`Invalid path: ${path}`);
        const key = filename.replace('.webp', '');

        return [key, module.default];
    })
) as Record<string, ImageMetadata>;

export type LogoKey = keyof typeof logosMap;