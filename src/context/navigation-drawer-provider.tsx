'use client';

import { createContext, ReactNode, useState } from 'react';

interface NavigationDrawerContextType {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const initialIsOpen: boolean = false;

export const NavigationDrawerContext =
  createContext<NavigationDrawerContextType>({
    isOpen: initialIsOpen,
    toggleDrawer: () => {},
  });

export const NavigationDrawerProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const value: NavigationDrawerContextType = {
    isOpen,
    toggleDrawer() {
      setIsOpen((prevState) => !prevState);
    },
  };

  return (
    <NavigationDrawerContext.Provider value={value}>
      {children}
    </NavigationDrawerContext.Provider>
  );
};
