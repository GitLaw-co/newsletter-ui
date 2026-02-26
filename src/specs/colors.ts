/**
 * TypeScript re-export of color tokens.
 * Components import from '../specs' (barrel), not directly from this file.
 */
export {
  purple,
  obsidian,
  grey,
  grass,
  bluish,
  email,
  semantic,
} from './colors.tokens.js';

// Flattened convenience object for component usage
import { semantic, email as emailTokens } from './colors.tokens.js';

export const colors = {
  ...semantic,
  email: emailTokens,
} as const;
