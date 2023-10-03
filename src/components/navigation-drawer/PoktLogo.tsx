import Image from 'next/image';
import Link from 'next/link';

import { paths } from '@/utils/paths';

export const PoktLogo = () => {
  return (
    <Link href={paths.community.href}>
      <div>
        <figure className="m-auto flex items-center justify-center">
          <Image
            src="/images/pokt-logo.svg"
            alt="pokt logo"
            width={74}
            height={24}
          />
        </figure>
      </div>
    </Link>
  );
};
