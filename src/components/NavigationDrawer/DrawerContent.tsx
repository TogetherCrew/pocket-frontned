import React from 'react';

import DonutLargeRoundedIcon from '@mui/icons-material/DonutLargeRounded';
import GroupsIcon from '@mui/icons-material/Groups';
import ShieldIcon from '@mui/icons-material/Shield';
import StackedBarChartRoundedIcon from '@mui/icons-material/StackedBarChartRounded';
import { ButtonBase, SvgIconProps, Toolbar } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  {
    title: 'Community',
    Icon: (params: SvgIconProps) => <GroupsIcon {...params} />,
    href: '/community',
  },
  {
    title: 'Governance',
    Icon: (params: SvgIconProps) => <ShieldIcon {...params} />,
    href: '/governance',
  },
  {
    title: 'Protocol',
    Icon: (params: SvgIconProps) => <StackedBarChartRoundedIcon {...params} />,
    href: '/protocol',
  },
  {
    title: 'POKT',
    Icon: (params: SvgIconProps) => <DonutLargeRoundedIcon {...params} />,
    href: '/pokt',
  },
];

export const DrawerContent = () => {
  const pathname = usePathname();

  return (
    <div className="p-3">
      <Toolbar />
      <ul className="flex w-full flex-col items-start justify-stretch px-0">
        {items.map(({ title, Icon, href }) => (
          <ButtonBase
            component="li"
            key={title}
            className={`w-full rounded-full transition-all duration-500 hover:cursor-pointer hover:bg-primaryContainer ${
              pathname === href ? 'bg-primaryContainer' : ''
            }`}
          >
            <Link
              className="flex w-full items-center justify-stretch gap-3 p-3"
              href={href}
            >
              <Icon
                className={
                  pathname === href
                    ? 'text-onPrimaryContainer'
                    : 'text-onSurfaceVariant'
                }
              />
              <span
                className={`text-title-small ${
                  pathname === href
                    ? 'text-onPrimaryContainer'
                    : 'text-onSurfaceVariant'
                }`}
              >
                {title}
              </span>
            </Link>
          </ButtonBase>
        ))}
      </ul>
    </div>
  );
};
