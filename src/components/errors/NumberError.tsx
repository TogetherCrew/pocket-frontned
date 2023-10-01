import { DEFAULT_ERROR_TEXT } from '@/utils/constants';

export const NumberError = ({ message }: { message?: string }) => {
  return (
    <p className="m-0 text-body-medium text-onErrorContainer">
      {message || DEFAULT_ERROR_TEXT}
    </p>
  );
};
