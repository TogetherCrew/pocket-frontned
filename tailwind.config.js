/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        light: '#703CD0',
        DEFAULT: '#703CD0',
        dark: '#D2BCFF',
      },
      onPrimary: {
        light: '#FFFFFF',
        DEFAULT: '#FFFFFF',
        dark: '#3E008E',
      },
      primaryContainer: {
        light: '#EADDFF',
        DEFAULT: '#EADDFF',
        dark: '#581AB7',
      },
      onPrimaryContainer: {
        light: '#25005A',
        DEFAULT: '#25005A',
        dark: '#EADDFF',
      },
      primaryFixed: {
        light: '#EADDFF',
        DEFAULT: '#EADDFF',
        dark: '#EADDFF',
      },
      onPrimaryFixed: {
        light: '#25005A',
        DEFAULT: '#25005A',
        dark: '#25005A',
      },
      primaryFixedDim: {
        light: '#D2BCFF',
        DEFAULT: '#D2BCFF',
        dark: '#D2BCFF',
      },
      onPrimaryFixedVariant: {
        light: '#581AB7',
        DEFAULT: '#581AB7',
        dark: '#581AB7',
      },
      secondary: {
        light: '#005EB2',
        DEFAULT: '#005EB2',
        dark: '#A7C8FF',
      },
      onSecondary: {
        light: '#FFFFFF',
        DEFAULT: '#FFFFFF',
        dark: '#003061',
      },
      secondaryContainer: {
        light: '#D5E3FF',
        DEFAULT: '#D5E3FF',
        dark: '#004788',
      },
      onSecondaryContainer: {
        light: '#001B3C',
        DEFAULT: '#001B3C',
        dark: '#D5E3FF',
      },
      secondaryFixed: {
        light: '#D5E3FF',
        DEFAULT: '#D5E3FF',
        dark: '#D5E3FF',
      },
      onSecondaryFixed: {
        light: '#001B3C',
        DEFAULT: '#001B3C',
        dark: '#001B3C',
      },
      secondaryFixedDim: {
        light: '#A7C8FF',
        DEFAULT: '#A7C8FF',
        dark: '#A7C8FF',
      },
      onSecondaryFixedVariant: {
        light: '#004788',
        DEFAULT: '#004788',
        dark: '#004788',
      },
      tertiary: {
        light: '#7E525E',
        DEFAULT: '#7E525E',
        dark: '#F0B8C6',
      },
      onTertiary: {
        light: '#FFFFFF',
        DEFAULT: '#FFFFFF',
        dark: '#4A2530',
      },
      tertiaryContainer: {
        light: '#FFD9E1',
        DEFAULT: '#FFD9E1',
        dark: '#643B47',
      },
      onTertiaryContainer: {
        light: '#31101C',
        DEFAULT: '#31101C',
        dark: '#FFD9E1',
      },
      tertiaryFixed: {
        light: '#FFD9E1',
        DEFAULT: '#FFD9E1',
        dark: '#FFD9E1',
      },
      onTertiaryFixed: {
        light: '#31101C',
        DEFAULT: '#31101C',
        dark: '#31101C',
      },
      tertiaryFixedDim: {
        light: '#F0B8C6',
        DEFAULT: '#F0B8C6',
        dark: '#F0B8C6',
      },
      onTertiaryFixedVariant: {
        light: '#643B47',
        DEFAULT: '#643B47',
        dark: '#643B47',
      },
      error: {
        light: '#BA1437',
        DEFAULT: '#BA1437',
        dark: '#FFB3B5',
      },
      onError: {
        light: '#FFFFFF',
        DEFAULT: '#FFFFFF',
        dark: '#680018',
      },
      errorContainer: {
        light: '#FFDADA',
        DEFAULT: '#FFDADA',
        dark: '#920026',
      },
      onErrorContainer: {
        light: '#40000B',
        DEFAULT: '#40000B',
        dark: '#FFDADA',
      },
      outline: {
        light: '#7A757F',
        DEFAULT: '#7A757F',
        dark: '#948F99',
      },
      background: {
        light: '#FFFBFF',
        DEFAULT: '#FFFBFF',
        dark: '#1D1B1E',
      },
      onBackground: {
        light: '#1D1B1E',
        DEFAULT: '#1D1B1E',
        dark: '#E6E1E6',
      },
      surface: {
        light: '#FDF8FD',
        DEFAULT: '#FDF8FD',
        dark: '#141316',
      },
      onSurface: {
        light: '#1D1B1E',
        DEFAULT: '#1D1B1E',
        dark: '#CAC5CA',
      },
      surfaceVariant: {
        light: '#E7E0EB',
        DEFAULT: '#E7E0EB',
        dark: '#49454E',
      },
      onSurfaceVariant: {
        light: '#49454E',
        DEFAULT: '#49454E',
        dark: '#CBC4CF',
      },
      inverseSurface: {
        light: '#323033',
        DEFAULT: '#323033',
        dark: '#E6E1E6',
      },
      inverseOnSurface: {
        light: '#F5EFF4',
        DEFAULT: '#F5EFF4',
        dark: '#1D1B1E',
      },
      inversePrimary: {
        light: '#D2BCFF',
        DEFAULT: '#D2BCFF',
        dark: '#703CD0',
      },
      shadow: {
        light: '#000000',
        DEFAULT: '#000000',
        dark: '#000000',
      },
      surfaceTint: {
        light: '#703CD0',
        DEFAULT: '#703CD0',
        dark: '#D2BCFF',
      },
      outlineVariant: {
        light: '#CBC4CF',
        DEFAULT: '#CBC4CF',
        dark: '#49454E',
      },
      scrim: {
        light: '#000000',
        DEFAULT: '#000000',
        dark: '#000000',
      },
      surfaceContainerHighest: {
        light: '#E6E1E6',
        DEFAULT: '#E6E1E6',
        dark: '#363438',
      },
      surfaceContainerHigh: {
        light: '#ECE6EB',
        DEFAULT: '#ECE6EB',
        dark: '#2B292D',
      },
      surfaceContainer: {
        light: '#F2ECF1',
        DEFAULT: '#F2ECF1',
        dark: '#211F22',
      },
      surfaceContainerLow: {
        light: '#F8F2F7',
        DEFAULT: '#F8F2F7',
        dark: '#1D1B1E',
      },
      surfaceContainerLowest: {
        light: '#FFFFFF',
        DEFAULT: '#FFFFFF',
        dark: '#0F0E11',
      },
      surfaceBright: {
        light: '#FDF8FD',
        DEFAULT: '#FDF8FD',
        dark: '#3B383C',
      },
      surfaceDim: {
        light: '#DED8DD',
        DEFAULT: '#DED8DD',
        dark: '#141316',
      },
      green: {
        light: '#056E00',
        DEFAULT: '#056E00',
      },
      orange: {
        light: '#FF8022',
        DEFAULT: '#FF8022',
      },
      pink: {
        light: '#ED24D9',
        DEFAULT: '#ED24D9',
      },
      yellow: {
        light: '#EBC13E',
        DEFAULT: '#EBC13E',
      },
    },

    extend: {
      fontSize: {
        'display-large': ['3.5625rem', { fontWeight: 400, lineHeight: '4rem' }],
        'display-medium': [
          '2.8125rem',
          { fontWeight: 400, lineHeight: '3.25rem' },
        ],
        'display-small': [
          '2.25rem',
          { fontWeight: 400, lineHeight: '2.75rem' },
        ],
        'headline-large': ['2rem', { fontWeight: 400, lineHeight: '2.5rem' }],
        'headline-medium': [
          '1.75rem',
          { fontWeight: 400, lineHeight: '2.25rem' },
        ],
        'headline-small': ['1.5rem', { fontWeight: 400, lineHeight: '2rem' }],
        'body-large': ['1rem', { fontWeight: 400, lineHeight: '1.5rem' }],
        'body-medium': [
          '0.875rem',
          {
            fontWeight: 400,
            lineHeight: '1.25rem',
          },
        ],
        'body-small': ['0.75rem', { fontWeight: 400, lineHeight: '1rem' }],
        'label-large': [
          '0.875rem',
          {
            fontWeight: 500,
            lineHeight: '1.25rem',
          },
        ],
        'label-medium': ['0.75rem', { fontWeight: 500, lineHeight: '1rem' }],
        'label-small': ['0.875rem', { fontWeight: 500, lineHeight: '1.25rem' }],
        'title-large': ['1.375rem', { fontWeight: 700, lineHeight: '1.5rem' }],
        'title-semi-bold': [
          '0.875rem',
          {
            fontWeight: 600,
            lineHeight: '1.25rem',
          },
        ],
        'title-semi-large': [
          '1.125rem',
          {
            fontWeight: 700,
            lineHeight: '1.375rem',
          },
        ],
        'title-medium': ['1rem', { fontWeight: 600, lineHeight: '1.5rem' }],
        'title-small': [
          '0.875rem',
          {
            fontWeight: 500,
            lineHeight: '1.25rem',
          },
        ],
      },
    },
  },
  plugins: [],
  important: true,
  corePlugins: {
    preflight: false,
  },
};
