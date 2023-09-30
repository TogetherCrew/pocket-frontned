'use client';
import { useCallback, useState } from 'react';

import { SelectChangeEvent } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { PERIODS, PeriodSelector } from '@/components/period-selector';
import { TIME_PERIOD_KEY } from '@/utils/constants';

export const PagesHeader = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [period, setPeriod] = useState(
    searchParams.get(TIME_PERIOD_KEY) || PERIODS[0].value,
  );

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const onPeriodChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value);

    const queryString = createQueryString(TIME_PERIOD_KEY, event.target.value);

    router.push(`${pathname}?${queryString}`);
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
