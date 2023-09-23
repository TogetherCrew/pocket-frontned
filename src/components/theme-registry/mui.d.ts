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

    surface: Palette['primary'];
    onSurface: Palette['primary'];
    surfaceVariant: Palette['primary'];
    onSurfaceVariant: Palette['primary'];
    inverseSurface: Palette['primary'];
    inverseOnSurface: Palette['primary'];

    surfaceContainerHighest: Palette['primary'];
    surfaceContainerHigh: Palette['primary'];
    surfaceContainer: Palette['primary'];
    surfaceContainerLow: Palette['primary'];
    surfaceContainerLowest: Palette['primary'];
    surfaceBright: Palette['primary'];
    surfaceDim: Palette['primary'];

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

    surface: PaletteOptions['primary'];
    onSurface: PaletteOptions['primary'];
    surfaceVariant: PaletteOptions['primary'];
    onSurfaceVariant: PaletteOptions['primary'];
    inverseSurface: PaletteOptions['primary'];
    inverseOnSurface: PaletteOptions['primary'];

    surfaceContainerHighest: PaletteOptions['primary'];
    surfaceContainerHigh: PaletteOptions['primary'];
    surfaceContainer: PaletteOptions['primary'];
    surfaceContainerLow: PaletteOptions['primary'];
    surfaceContainerLowest: PaletteOptions['primary'];
    surfaceBright: PaletteOptions['primary'];
    surfaceDim: PaletteOptions['primary'];

    green?: PaletteOptions['primary'];
    orange?: PaletteOptions['primary'];
    pink?: PaletteOptions['primary'];
    yellow?: PaletteOptions['primary'];
  }

  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    '2xl': true;
  }
}
