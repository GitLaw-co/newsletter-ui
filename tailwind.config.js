import {
  purple,
  obsidian,
  grey,
  grass,
  bluish,
  semantic,
  email,
} from './src/specs/colors.tokens.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // GitLaw Brand Colors (from colors.tokens.js — single source of truth)
        primary: {
          DEFAULT: semantic.primary,
          light: semantic.primaryLight,
          hover: semantic.primaryHover,
          dark: purple[800],
        },
        secondary: {
          DEFAULT: semantic.secondary,
          hover: semantic.secondaryHover,
          dark: purple[200],
        },
        destructive: {
          DEFAULT: semantic.destructive,
        },
        // Text Colors
        foreground: semantic.textPrimary,
        subtle: semantic.textSecondary,
        negative: semantic.textNegative,
        // Border Colors
        border: {
          DEFAULT: semantic.border,
        },
        // Input Colors
        input: {
          border: semantic.inputBorder,
          yellow: semantic.inputYellow,
        },
        // Page/Layout Colors
        page: {
          background: semantic.pageBackground,
        },
        // Link text color
        link: semantic.link,
        // Muted Color
        muted: {
          DEFAULT: semantic.muted,
        },
        // Email template colors
        email: {
          'light-purple': email.lightPurple,
          green: email.green,
          'green-text': email.greenText,
          'green-muted': email.greenMuted,
          'green-caption': email.greenCaption,
          'green-border': email.greenBorder,
        },
        // Primitive palettes (for one-off usage)
        bluish,
        grass,
        purple,
        obsidian,
        grey,
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        georgia: ["'GT Super Ds Trial'", 'Georgia', 'serif'],
      },
      fontSize: {
        xxs: ['10px', { lineHeight: '1.4' }],
        xs: ['12px', { lineHeight: '1.4' }],
        sm: ['14px', { lineHeight: '1.4' }],
        base: ['16px', { lineHeight: '1.4' }],
        lg: ['18px', { lineHeight: '1.4' }],
        xl: ['20px', { lineHeight: '1.4' }],
        '2xl': ['24px', { lineHeight: '1.4' }],
      },
      spacing: {
        'gitlaw-xxs': '1px',
        'gitlaw-xs': '2px',
        'gitlaw-s': '4px',
        'gitlaw-m': '8px',
        'gitlaw-l': '12px',
        'gitlaw-xl': '16px',
        'gitlaw-2xl': '24px',
        'gitlaw-3xl': '32px',
        'gitlaw-4xl': '48px',
      },
      borderRadius: {
        'gitlaw-s': '4px',
        'gitlaw-m': '8px',
        'gitlaw-full': '1000px',
      },
      boxShadow: {
        card: '0px 10px 40px 0px rgba(0, 0, 0, 0.05)',
      },
      transitionTimingFunction: {
        'gitlaw': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      transitionDuration: {
        'fast': '100ms',
        'normal': '150ms',
        'slow': '200ms',
      },
    },
  },
  plugins: [],
};
