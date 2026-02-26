/**
 * Color Tokens — Single Source of Truth
 *
 * This file defines all color primitives and semantic tokens for newsletter components.
 * It is plain JS (not TS) so it can be imported by both:
 *   - tailwind.config.js (Node/PostCSS, no TS support)
 *   - colors.ts (TypeScript components)
 *
 * Source: Figma UI-v3 design system
 *
 * ⚠️  When changing colors, update ONLY this file.
 *     tailwind.config.js and colors.ts both read from here.
 */

// ── Primitives ──────────────────────────────────────────────

export const purple = {
  50: '#F7F6FF',
  65: '#F3F1FF',
  100: '#EBE7FF',
  200: '#E2DDFF',
  300: '#CFC8F3',
  400: '#B6AEE9',
  450: '#978AE6',
  500: '#7F72FF',
  600: '#6F5EEC',
  700: '#5E49D6',
  800: '#4D33BC',
  900: '#382C80',
  950: '#261D56',
};

export const obsidian = {
  50: '#F0F0F5',
  100: '#C0C0D1',
  200: '#A3A3B3',
  300: '#81818F',
  400: '#6E6E7B',
  500: '#5C5C67',
  600: '#4A4A53',
  700: '#38383F',
  800: '#2D2D33',
  900: '#242428',
  950: '#1B1B1F',
};

export const grey = {
  20: '#C4C4C4',
  40: '#ABABAB',
  50: '#989898',
  60: '#6B6B6B',
  80: '#3D3D3D',
};

export const grass = {
  50: '#EBFAEE',
  65: '#DFFBE3',
  80: '#D9F8DD',
  100: '#CFF5D4',
  150: '#C3F1CA',
};

export const bluish = {
  50: '#F1F5F8',
  100: '#DCE3E8',
};

// ── Email-specific tokens ──────────────────────────────────
export const email = {
  lightPurple: '#867EFF',     // Feature block light-purple variant
  green: '#A6F48F',           // Feature block green variant
  greenText: '#107624',       // Template card title
  greenMuted: '#C5DBC9',      // Template card skeleton bars
  greenCaption: '#55785C',    // Template card caption text
  greenBorder: '#A2CEAA',     // Template card dashed border
};

// ── Semantic tokens ─────────────────────────────────────────

export const semantic = {
  // Brand
  primary: purple[700],          // #5E49D6
  primaryLight: purple[100],     // #EBE7FF
  primaryHover: purple[600],     // #6F5EEC

  secondary: purple[100],        // #EBE7FF
  secondaryHover: purple[200],   // #E2DDFF

  // Status
  destructive: '#E11D48',
  alert: '#F97316',
  positive: '#15803D',

  // Text
  textPrimary: obsidian[950],    // #1B1B1F
  textSecondary: grey[50],       // #989898
  textNegative: purple[50],      // #F7F6FF
  textButton: purple[700],       // #5E49D6
  textButtonNegative: purple[50],// #F7F6FF
  textButtonDisabled: purple[300],// #CFC8F3

  // Icons
  iconPrimary: purple[700],      // #5E49D6
  iconSecondary: grey[50],       // #989898
  iconDisabled: purple[300],     // #CFC8F3
  iconNegative: purple[50],      // #F7F6FF
  iconBlack: obsidian[950],      // #1B1B1F

  // Backgrounds
  white: '#FFFFFF',
  card: '#FFFFFF',
  pageBackground: purple[50],    // #F7F6FF

  // Borders
  border: purple[200],           // #E2DDFF
  inputBorder: bluish[100],      // #DCE3E8

  // Input
  inputYellow: '#FEF37D',
  inputDisabled: bluish[50],     // #F1F5F8

  // Link
  link: purple[700],             // #5E49D6

  // Muted
  muted: obsidian[50],           // #F0F0F5
};
