import { ReactNode } from 'react';

import { MuiThemeRegistry } from '@/components/theme-registry/MuiThemeRegistry';
import { NavigationDrawerProvider } from '@/context/navigation-drawer-provider';
import { ReactQueryProviders } from '@/context/react-query';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <MuiThemeRegistry>
      <NavigationDrawerProvider>
        <ReactQueryProviders>{children}</ReactQueryProviders>
      </NavigationDrawerProvider>
    </MuiThemeRegistry>
  );
};
