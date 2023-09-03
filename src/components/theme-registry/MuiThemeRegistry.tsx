'use client';
import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { NextAppDirEmotionCacheProvider } from './EmotionCache';
import { getMuiTheme } from './mui-theme';

export function MuiThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui', prepend: true }}>
      <ThemeProvider theme={getMuiTheme()}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
