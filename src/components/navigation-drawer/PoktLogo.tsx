import Image from 'next/image';

export const PoktLogo = () => {
  return (
    <>
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
    </>
  );
};
