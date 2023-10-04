import Image from 'next/image';
import Link from 'next/link';

export const Copyright = () => {
  return (
    <div>
      <Link href="https://www.togethercrew.com/" target="_blank">
        <figure className="m-auto flex items-center justify-center">
          <Image
            src="/images/copy-right.svg"
            alt="copy right"
            width={109}
            height={35}
          />
        </figure>
      </Link>
    </div>
  );
};
