'use client';
import { useCallback, useState } from 'react';

import { SelectChangeEvent } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { PeriodSelector } from '@/components/period-selector';
import { DEFAULT_TIME_PERIOD, TIME_PERIOD_KEY } from '@/utils/constants';
import { paths, PathsObject } from '@/utils/paths';
import { TimePeriodParamType } from '@/utils/types';
import { isValidTimePeriod } from '@/utils/validators';

export const PagesHeader = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [period, setPeriod] = useState<TimePeriodParamType>(() => {
    const param = searchParams.get(TIME_PERIOD_KEY) as TimePeriodParamType;

    return isValidTimePeriod(param) ? param : DEFAULT_TIME_PERIOD;
  });

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

  const onPeriodChange = (event: SelectChangeEvent<TimePeriodParamType>) => {
    setPeriod(event.target.value as TimePeriodParamType);

    const queryString = createQueryString(TIME_PERIOD_KEY, event.target.value);

    router.push(`${pathname}?${queryString}`);
  };

  return (
    <header className="flex h-16 items-center justify-between bg-surfaceContainerLow px-8 lg:h-28">
      <span className="text-title-large capitalize">
        {paths[pathname?.split('/')?.at(1) as keyof PathsObject]?.title || ''}
      </span>
      <PeriodSelector period={period} onPeriodChange={onPeriodChange} />
    </header>
  );
};
