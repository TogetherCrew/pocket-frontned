'use client';

import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

import { PoktLogo } from '@/components/navigation-drawer/PoktLogo';
import { useNavigationDrawer } from '@/hooks/use-navigation-drawer';

export const MobileTopBar = () => {
  const { toggleDrawer } = useNavigationDrawer();

  return (
    <nav className="flex h-16 items-center justify-between border-0 border-b border-solid border-b-outlineVariant bg-surfaceContainerLow px-8 lg:hidden">
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ m: 0 }}
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>
      <PoktLogo />
    </nav>
  );
};
