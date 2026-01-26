import { TextEncoder, TextDecoder } from 'node:util';

globalThis.TextEncoder = TextEncoder;
globalThis.TextDecoder = TextDecoder;

import { expect } from 'vitest';
import * as matchers from 'vitest-axe/matchers';
expect.extend(matchers);