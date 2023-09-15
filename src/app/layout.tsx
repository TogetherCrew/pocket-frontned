import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';

import { ReactQueryProviders } from '@/app/context/react-query';
import { MuiThemeRegistry } from '@/components/theme-registry/MuiThemeRegistry';
import { PlusJakarta } from '@/font';

export const metadata: Metadata = {
  title: 'Pocket Network Frontend',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={PlusJakarta.className}>
        <MuiThemeRegistry>
          <ReactQueryProviders>{children}</ReactQueryProviders>
        </MuiThemeRegistry>

        <Script src="/scripts/grafana.js" />
      </body>
    </html>
  );
}
