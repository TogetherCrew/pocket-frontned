import './globals.css';

import { Box } from '@mui/material';
import type { Metadata } from 'next';

import { MobileTopBar } from '@/components/mobile-top-bar';
import { NavigationDrawer } from '@/components/navigation-drawer';
import { PagesHeader } from '@/components/pages-header';
import { AppProviders } from '@/components/providers';
import { PlusJakarta } from '@/font';
import { DRAWER_WIDTH } from '@/utils/constants';

export const metadata: Metadata = {
  title: 'Pocket Dashboard',
  description: 'Pocket Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={PlusJakarta.className}>
        <AppProviders>
          <NavigationDrawer width={DRAWER_WIDTH} />
          <Box sx={{ ml: { lg: `${DRAWER_WIDTH}rem` } }}>
            <MobileTopBar />
            <PagesHeader />
            {children}
          </Box>
        </AppProviders>
      </body>
    </html>
  );
}
