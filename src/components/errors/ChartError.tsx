import Image from 'next/image';

import { DEFAULT_ERROR_TEXT } from '@/utils/constants';

export const ChartError = ({ message }: { message?: string }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <figure className="m-0 flex items-center justify-center">
        <Image
          src="/images/error-image.svg"
          alt="error"
          width={60}
          height={60}
        />
      </figure>
      <p className="m-0 mt-2 text-center text-body-medium text-onErrorContainer">
        {message || DEFAULT_ERROR_TEXT}
      </p>
    </div>
  );
};
