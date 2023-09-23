import { ReactNode } from 'react';

export const DisabledTimePeriod = ({ children }: { children: ReactNode }) => {
  return (
    <div className="cursor-not-allowed rounded-lg bg-onSurface bg-opacity-[0.12] px-4 py-1.5 text-center text-title-small text-onSurface text-opacity-40">
      {children}
    </div>
  );
};
