type GlobModule = {
    default: ImageMetadata;
}

const modules = import.meta.glob<GlobModule>(
    '@/assets/images/logos/*.webp', 
    { eager: true }
);

const logosMap: Record<string, ImageMetadata> = {};

for(const path in modules) {
    const module = modules[path];

    const filename = path.split('/').pop();

    if( ! filename)
        throw new Error(`Invalid path: ${path}`);

    const key = filename.replace('.webp', '');

    logosMap[key] = module.default;
}

export type LogoKey = keyof typeof logosMap;
export { logosMap };