'use client';

import { useContext } from 'react';

import { NavigationDrawerContext } from '@/context/navigation-drawer-provider';

export const useNavigationDrawer = () => useContext(NavigationDrawerContext);
