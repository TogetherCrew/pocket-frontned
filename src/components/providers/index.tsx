import { ReactNode } from 'react';

import { ReactQueryProviders } from '@/app/context/react-query';
import { MuiThemeRegistry } from '@/components/theme-registry/MuiThemeRegistry';
import { NavigationDrawerProvider } from '@/context/navigation-drawer-provider';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <MuiThemeRegistry>
      <NavigationDrawerProvider>
        <ReactQueryProviders>{children}</ReactQueryProviders>
      </NavigationDrawerProvider>
    </MuiThemeRegistry>
  );
};
