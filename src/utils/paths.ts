export interface Path {
  href: string;
  title: string;
}

export interface PathsObject {
  community: Path;
  governance: Path;
  protocol: Path;
  pokt: Path;
}

export const paths: PathsObject = {
  community: {
    href: '/community',
    title: 'Community',
  },
  governance: {
    href: '/governance',
    title: 'Governance',
  },
  protocol: {
    href: '/protocol',
    title: 'Protocol',
  },
  pokt: {
    href: '/pokt',
    title: 'POKT',
  },
};
