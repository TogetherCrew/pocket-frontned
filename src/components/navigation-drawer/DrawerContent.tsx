import DonutLargeRoundedIcon from '@mui/icons-material/DonutLargeRounded';
import GroupsIcon from '@mui/icons-material/Groups';
import ShieldIcon from '@mui/icons-material/Shield';
import StackedBarChartRoundedIcon from '@mui/icons-material/StackedBarChartRounded';
import { ButtonBase, SvgIconProps } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Copyright } from '@/components/navigation-drawer/Copyright';
import { PoktLogo } from '@/components/navigation-drawer/PoktLogo';
import { useNavigationDrawer } from '@/hooks/use-navigation-drawer';
import { paths } from '@/utils/paths';

const items = [
  {
    title: paths.community.title,
    Icon: (params: SvgIconProps) => <GroupsIcon {...params} />,
    href: paths.community.href,
  },
  {
    title: paths.governance.title,
    Icon: (params: SvgIconProps) => <ShieldIcon {...params} />,
    href: paths.governance.href,
  },
  {
    title: paths.protocol.title,
    Icon: (params: SvgIconProps) => <StackedBarChartRoundedIcon {...params} />,
    href: paths.protocol.href,
  },
  {
    title: paths.pokt.title,
    Icon: (params: SvgIconProps) => <DonutLargeRoundedIcon {...params} />,
    href: paths.pokt.href,
  },
];

export const DrawerContent = () => {
  const pathname = usePathname();
  const { isOpen, toggleDrawer } = useNavigationDrawer();

  return (
    <>
      <div className="flex items-center justify-start p-7 pb-0">
        <PoktLogo />
      </div>
      <div className="p-3 pt-1">
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
                onClick={() => {
                  // Toggle only when the drawer is open,
                  // so that the toggle operation is not performed in the desktop size
                  // Note:Disables scroll behavior when drawer navigation is open
                  if (isOpen) toggleDrawer();
                }}
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
      <div className="mt-auto flex items-center justify-center gap-2 pb-6">
        <span className="text-title-semi-bold">Powered by</span>
        <Copyright />
      </div>
    </>
  );
};
