'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { DEFAULT_TIME_PERIOD, TIME_PERIOD_KEY } from '@/utils/constants';
import type { TimePeriodParamType } from '@/utils/types';
import { isValidTimePeriod } from '@/utils/validators';

export const useGetTimePeriodSearchParam = (): TimePeriodParamType => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const query = searchParams.get(TIME_PERIOD_KEY) as TimePeriodParamType;

  if (!isValidTimePeriod(query)) {
    const currentParams = new URLSearchParams(searchParams.toString());

    currentParams.delete(TIME_PERIOD_KEY);

    router.push(`${pathname}?${currentParams.toString()}`);

    return DEFAULT_TIME_PERIOD;
  }

  return query;
};
