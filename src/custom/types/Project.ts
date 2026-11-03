import type { LogoKey } from '@/config/logoPathsConfig';

/**
 * This is a type for data in /src/assets/data/projects.json
 */
export type Project = {
  URL: string;
  repository: string;
  image: ImageMetadata;
  number: number;
  title: string;
  contexte: string;
  objectifs: string;
  stackTechnique: string | { label: string; value: string }[];
  competencesDeveloppees: string | { label: string; value: string }[];
  resultatsEtImpact: string;
  perspectivesAmelioration: string | { label: string; value: string }[];
  logos: LogoKey[];
};
