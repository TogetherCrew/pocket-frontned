import '@mui/material/styles';

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
