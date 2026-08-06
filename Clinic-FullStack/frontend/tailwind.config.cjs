/** @type {import('tailwindcss').Config} */
const path = require('path');

const BRAND_COLORS = {
  softPink: '#f7c7c8',
  babyBlue: '#bfeffd',
  orange: '#f7803c',
};

const BRAND_ROLES = {
  navDark: '#1a1a1a',
  text: '#111111',
  textMuted: '#4a4a4a',
};

module.exports = {
  content: [
    path.join(__dirname, 'index.html'),
    path.join(__dirname, 'src/**/*.{js,jsx}'),
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      'soft-pink': {
        DEFAULT: BRAND_COLORS.softPink,
        50: '#fef5f5',
        100: '#fde8e9',
        200: '#fbd1d2',
        300: '#f9babb',
        400: '#f8a3a4',
        500: BRAND_COLORS.softPink,
        600: '#e5b4b5',
        700: '#d3a1a2',
        800: '#c18e8f',
        900: '#af7b7c',
      },
      'baby-blue': {
        DEFAULT: BRAND_COLORS.babyBlue,
        50: '#f0fbff',
        100: '#e0f7ff',
        200: '#c1efff',
        300: BRAND_COLORS.babyBlue,
        400: '#99d9f5',
        500: '#7eccee',
        600: '#63bfe7',
        700: '#48b2e0',
        800: '#2da5d9',
        900: '#1298d2',
      },
      brand: {
        orange: BRAND_COLORS.orange,
        pink: BRAND_COLORS.softPink,
        blue: BRAND_COLORS.babyBlue,
        nav: BRAND_ROLES.navDark,
      },
      primary: {
        DEFAULT: BRAND_COLORS.orange,
        hover: '#e56f2b',
        light: '#fff0e6',
        foreground: '#111111',
      },
      secondary: {
        DEFAULT: BRAND_COLORS.babyBlue,
        hover: '#a8e0f5',
        light: '#e8f7fd',
        foreground: BRAND_ROLES.text,
      },
      accent: {
        DEFAULT: BRAND_COLORS.softPink,
        hover: '#f5b8b9',
        light: '#fef5f5',
        foreground: BRAND_ROLES.text,
      },
      surface: {
        DEFAULT: '#fafafa',
        secondary: BRAND_COLORS.babyBlue,
        card: '#ffffff',
        dark: BRAND_ROLES.navDark,
      },
      success: { DEFAULT: '#2d9d78', light: '#e6f7f1' },
      warning: { DEFAULT: BRAND_COLORS.orange, light: '#fff0e6' },
      error: { DEFAULT: '#dc2626', light: '#fef2f2' },
      info: { DEFAULT: '#3b82c4', light: '#e8f4fd' },
      text: {
        primary: BRAND_ROLES.text,
        secondary: '#333333',
        muted: BRAND_ROLES.textMuted,
        inverse: '#ffffff',
      },
      border: {
        DEFAULT: '#e8e8e8',
        strong: '#d0d0d0',
      },
    },
    extend: {
      fontFamily: {
        heading: ['"DM Sans"', 'sans-serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        accent: ['Caveat', 'cursive'],
      },
      fontSize: {
        display: ['3.25rem', { lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: '700' }],
        h1: ['2.75rem', { lineHeight: '1.12', letterSpacing: '-0.02em', fontWeight: '700' }],
        h2: ['2rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        h3: ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        h4: ['1.25rem', { lineHeight: '1.35', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65', fontWeight: '400' }],
        body: ['1rem', { lineHeight: '1.65', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.55', fontWeight: '400' }],
        caption: ['0.75rem', { lineHeight: '1.45', fontWeight: '400' }],
        eyebrow: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.12em', fontWeight: '600' }],
      },
      borderRadius: {
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0,0,0,0.06)',
        md: '0 4px 24px rgba(0,0,0,0.08)',
        lg: '0 12px 48px rgba(0,0,0,0.12)',
        card: '0 12px 48px rgba(0,0,0,0.1)',
        laptop: '0 24px 64px rgba(0,0,0,0.18)',
        orange: '0 8px 24px rgba(247,128,60,0.35)',
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-soft': 'var(--gradient-soft)',
        'gradient-brand': 'var(--gradient-brand)',
        'gradient-dark': 'var(--gradient-dark)',
      },
      maxWidth: {
        content: '1200px',
        prose: '640px',
      },
    },
  },
  plugins: [],
};
