'use client';

import { Drawer, DrawerProps, styled, SxProps, Theme } from '@mui/material';

import { DrawerContent } from '@/components/navigation-drawer/DrawerContent';
import { useNavigationDrawer } from '@/hooks/use-navigation-drawer';

interface StyledDrawerProps extends DrawerProps {
  width?: number | string;
  sx?: SxProps<Theme>;
}

const StyledDrawer = styled(Drawer)<StyledDrawerProps>`
  display: ${({ variant }) => (variant === 'temporary' ? 'block' : 'none')};

  ${({ theme }) => theme.breakpoints.up('lg')} {
    display: ${({ variant }) => (variant === 'temporary' ? 'none' : 'block')};
  }

  & .MuiDrawer-paper {
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.palette.surfaceContainerLow.main};
    width: ${({ width }) => width + 'rem'};
    border: none;
  }
`;

const CurvedDrawer = styled(StyledDrawer)`
  & .MuiDrawer-paper {
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;
  }
`;

interface NavigationDrawerProps {
  width: number;
}

export const NavigationDrawer = ({ width }: NavigationDrawerProps) => {
  const { isOpen, toggleDrawer } = useNavigationDrawer();

  return (
    <nav>
      {/* Desktop Version */}
      <StyledDrawer variant="permanent" width={width} open>
        <DrawerContent />
      </StyledDrawer>
      {/* Small/Medium Screen Version */}
      <CurvedDrawer
        variant="temporary"
        open={isOpen}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        width={width}
      >
        <DrawerContent />
      </CurvedDrawer>
    </nav>
  );
};
