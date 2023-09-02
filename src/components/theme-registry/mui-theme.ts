import { PaletteMode } from '@mui/material';
import { createTheme, ThemeOptions } from '@mui/material/styles';

import baseTheme from '@/../theme';

// https://mui.com/material-ui/customization/palette/#typescript
declare module '@mui/material/styles' {
  interface Palette {
    onPrimary: Palette['primary'];
    primaryContainer: Palette['primary'];
    onPrimaryContainer: Palette['primary'];
    primaryFixed: Palette['primary'];
    onPrimaryFixed: Palette['primary'];
    primaryFixedDim: Palette['primary'];
    onPrimaryFixedVariant: Palette['primary'];

    onSecondary: Palette['primary'];
    secondaryContainer: Palette['primary'];
    onSecondaryContainer: Palette['primary'];
    secondaryFixed: Palette['primary'];
    onSecondaryFixed: Palette['primary'];
    secondaryFixedDim: Palette['primary'];
    onSecondaryFixedVariant: Palette['primary'];

    tertiary: Palette['primary'];
    onTertiary: Palette['primary'];
    tertiaryContainer: Palette['primary'];
    onTertiaryContainer: Palette['primary'];
    tertiaryFixed: Palette['primary'];
    onTertiaryFixed: Palette['primary'];
    tertiaryFixedDim: Palette['primary'];
    onTertiaryFixedVariant: Palette['primary'];

    onError: Palette['primary'];
    errorContainer: Palette['primary'];
    onErrorContainer: Palette['primary'];

    green: Palette['primary'];
    orange: Palette['primary'];
    pink: Palette['primary'];
    yellow: Palette['primary'];
  }

  interface PaletteOptions {
    onPrimary: PaletteOptions['primary'];
    primaryContainer: PaletteOptions['primary'];
    onPrimaryContainer: PaletteOptions['primary'];
    primaryFixed: PaletteOptions['primary'];
    onPrimaryFixed: PaletteOptions['primary'];
    primaryFixedDim: PaletteOptions['primary'];
    onPrimaryFixedVariant: PaletteOptions['primary'];

    onSecondary: PaletteOptions['primary'];
    secondaryContainer: PaletteOptions['primary'];
    onSecondaryContainer: PaletteOptions['primary'];
    secondaryFixed: PaletteOptions['primary'];
    onSecondaryFixed: PaletteOptions['primary'];
    secondaryFixedDim: PaletteOptions['primary'];
    onSecondaryFixedVariant: PaletteOptions['primary'];

    tertiary: PaletteOptions['primary'];
    onTertiary: PaletteOptions['primary'];
    tertiaryContainer: PaletteOptions['primary'];
    onTertiaryContainer: PaletteOptions['primary'];
    tertiaryFixed: PaletteOptions['primary'];
    onTertiaryFixed: PaletteOptions['primary'];
    tertiaryFixedDim: PaletteOptions['primary'];
    onTertiaryFixedVariant: PaletteOptions['primary'];

    onError: PaletteOptions['primary'];
    errorContainer: PaletteOptions['primary'];
    onErrorContainer: PaletteOptions['primary'];

    green?: PaletteOptions['primary'];
    orange?: PaletteOptions['primary'];
    pink?: PaletteOptions['primary'];
    yellow?: PaletteOptions['primary'];
  }
}

export const lightPalette: ThemeOptions['palette'] = {
  mode: 'light',
  primary: { main: baseTheme?.colors?.primary?.light },
  onPrimary: { main: baseTheme?.colors?.onPrimary?.light },
  primaryContainer: { main: baseTheme?.colors?.primaryContainer?.light },
  onPrimaryContainer: { main: baseTheme?.colors?.onPrimaryContainer?.light },
  primaryFixed: { main: baseTheme?.colors?.primaryFixed?.light },
  onPrimaryFixed: { main: baseTheme?.colors?.onPrimaryFixed?.light },
  primaryFixedDim: { main: baseTheme?.colors?.primaryFixedDim?.light },
  onPrimaryFixedVariant: {
    main: baseTheme?.colors?.onPrimaryFixedVariant?.light,
  },

  secondary: { main: baseTheme?.colors?.secondary?.light },
  onSecondary: { main: baseTheme?.colors?.onSecondary?.light },
  secondaryContainer: { main: baseTheme?.colors?.secondaryContainer?.light },
  onSecondaryContainer: {
    main: baseTheme?.colors?.onSecondaryContainer?.light,
  },
  secondaryFixed: { main: baseTheme?.colors?.secondaryFixed?.light },
  onSecondaryFixed: { main: baseTheme?.colors?.onSecondaryFixed?.light },
  secondaryFixedDim: { main: baseTheme?.colors?.secondaryFixedDim?.light },
  onSecondaryFixedVariant: {
    main: baseTheme?.colors?.onSecondaryFixedVariant?.light,
  },

  tertiary: { main: baseTheme?.colors?.tertiary?.light },
  onTertiary: { main: baseTheme?.colors?.onTertiary?.light },
  tertiaryContainer: { main: baseTheme?.colors?.tertiaryContainer?.light },
  onTertiaryContainer: { main: baseTheme?.colors?.onTertiaryContainer?.light },
  tertiaryFixed: { main: baseTheme?.colors?.tertiaryFixed?.light },
  onTertiaryFixed: { main: baseTheme?.colors?.onTertiaryFixed?.light },
  tertiaryFixedDim: { main: baseTheme?.colors?.tertiaryFixedDim?.light },
  onTertiaryFixedVariant: {
    main: baseTheme?.colors?.onTertiaryFixedVariant?.light,
  },

  error: { main: baseTheme?.colors?.error?.light },
  onError: { main: baseTheme?.colors?.onError?.light },
  errorContainer: { main: baseTheme?.colors?.errorContainer?.light },
  onErrorContainer: { main: baseTheme?.colors?.onErrorContainer?.light },
};

export const darkPalette: ThemeOptions['palette'] = {
  mode: 'dark',
  primary: { main: baseTheme?.colors?.primary?.dark },
  onPrimary: { main: baseTheme?.colors?.onPrimary?.dark },
  primaryContainer: { main: baseTheme?.colors?.primaryContainer?.dark },
  onPrimaryContainer: { main: baseTheme?.colors?.onPrimaryContainer?.dark },
  primaryFixed: { main: baseTheme?.colors?.primaryFixed?.dark },
  onPrimaryFixed: { main: baseTheme?.colors?.onPrimaryFixed?.dark },
  primaryFixedDim: { main: baseTheme?.colors?.primaryFixedDim?.dark },
  onPrimaryFixedVariant: {
    main: baseTheme?.colors?.onPrimaryFixedVariant?.dark,
  },

  secondary: { main: baseTheme?.colors?.secondary?.dark },
  onSecondary: { main: baseTheme?.colors?.onSecondary?.dark },
  secondaryContainer: { main: baseTheme?.colors?.secondaryContainer?.dark },
  onSecondaryContainer: {
    main: baseTheme?.colors?.onSecondaryContainer?.dark,
  },
  secondaryFixed: { main: baseTheme?.colors?.secondaryFixed?.dark },
  onSecondaryFixed: { main: baseTheme?.colors?.onSecondaryFixed?.dark },
  secondaryFixedDim: { main: baseTheme?.colors?.secondaryFixedDim?.dark },
  onSecondaryFixedVariant: {
    main: baseTheme?.colors?.onSecondaryFixedVariant?.dark,
  },

  tertiary: { main: baseTheme?.colors?.tertiary?.dark },
  onTertiary: { main: baseTheme?.colors?.onTertiary?.dark },
  tertiaryContainer: { main: baseTheme?.colors?.tertiaryContainer?.dark },
  onTertiaryContainer: { main: baseTheme?.colors?.onTertiaryContainer?.dark },
  tertiaryFixed: { main: baseTheme?.colors?.tertiaryFixed?.dark },
  onTertiaryFixed: { main: baseTheme?.colors?.onTertiaryFixed?.dark },
  tertiaryFixedDim: { main: baseTheme?.colors?.tertiaryFixedDim?.dark },
  onTertiaryFixedVariant: {
    main: baseTheme?.colors?.onTertiaryFixedVariant?.dark,
  },

  error: { main: baseTheme?.colors?.error?.dark },
  onError: { main: baseTheme?.colors?.onError?.dark },
  errorContainer: { main: baseTheme?.colors?.errorContainer?.dark },
  onErrorContainer: { main: baseTheme?.colors?.onErrorContainer?.dark },
};

const getMuiTheme = (mode: PaletteMode = 'light') => {
  const muiTheme: ThemeOptions = {
    palette: {
      mode: mode,
      ...(mode === 'light' ? lightPalette : darkPalette),

      green: {
        light: '#3A9E2B',
        main: '#3A9E2B',
      },
      orange: {
        light: '#FF8022',
        main: '#FF8022',
      },
      pink: {
        light: '#ED24D9',
        main: '#ED24D9',
      },
      yellow: {
        light: '#EBC13E',
        main: '#EBC13E',
      },
    },
  };

  return createTheme(muiTheme);
};

export default getMuiTheme;
