import { ReactNode } from 'react';

import { MuiThemeRegistry } from '@/components/theme-registry/MuiThemeRegistry';
import { NavigationDrawerProvider } from '@/context/navigation-drawer-provider';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <MuiThemeRegistry>
      <NavigationDrawerProvider>{children}</NavigationDrawerProvider>
    </MuiThemeRegistry>
  );
};
