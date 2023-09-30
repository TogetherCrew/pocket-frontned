import Image from 'next/image';

export const Copyright = () => {
  return (
    <div>
      <figure className="m-auto flex items-center justify-center">
        <Image
          src="/images/copy-right.svg"
          alt="copy right"
          width={109}
          height={35}
        />
      </figure>
    </div>
  );
};
