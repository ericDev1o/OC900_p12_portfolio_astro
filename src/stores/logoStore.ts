import { atom } from 'nanostores';
import { logos } from '../config/logoPathsConfig';
import type { LogoKey } from '@/custom/types/LogoKey';

export const logoStore = atom<Record<LogoKey, string>>(logos);