'use client';
import { useState } from 'react';

import { SelectChangeEvent } from '@mui/material';
import { usePathname } from 'next/navigation';

import { PERIODS, PeriodSelector } from '@/components/period-selector';

export const PagesHeader = () => {
  const pathname = usePathname();
  const [period, setPeriod] = useState(PERIODS[0].value);

  const onPeriodChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value);
  };

  return (
    <header className="flex h-16 items-center justify-between bg-surfaceContainerLow px-8 lg:h-28">
      <span className="text-title-large capitalize">
        {pathname?.split('/').at(1) || ''}
      </span>
      <PeriodSelector period={period} onPeriodChange={onPeriodChange} />
    </header>
  );
};
