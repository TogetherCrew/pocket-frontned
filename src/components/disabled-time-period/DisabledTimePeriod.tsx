import { ReactNode } from 'react';

export const DisabledTimePeriod = ({ children }: { children: ReactNode }) => {
  return (
    <div className="cursor-not-allowed rounded-lg bg-onSurface bg-opacity-[0.12] px-2 py-1 text-center text-xs text-onSurface text-opacity-40 sm:text-title-small">
      {children}
    </div>
  );
};
