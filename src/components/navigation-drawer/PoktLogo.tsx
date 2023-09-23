import Image from 'next/image';

export const PoktLogo = () => {
  return (
    <>
      <div className="p-3 pb-0">
        <figure className="m-auto p-4 pb-0">
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
