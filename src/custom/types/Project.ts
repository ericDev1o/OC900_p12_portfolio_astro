import type { LogoKey } from "./LogoKey"

/**
 * This is a type for data in /src/assets/data/projects.json
 */
export type Project = {
    'URL': string,
    'repository': string,
    'fileName': string,
    'number': number,
    'title': string,
    'contexte': string,
    'objectifs': string,
    'stackTechnique': string,
    'competencesDeveloppees': string,
    'resultatsEtImpact': string,
    'perspectivesAmelioration': string,
    'logos': LogoKey[]
}