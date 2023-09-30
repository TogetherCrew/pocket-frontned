'use client';

import { useSearchParams } from 'next/navigation';

import { DEFAULT_TIME_PERIOD, TIME_PERIOD_KEY } from '@/utils/constants';
import type { TimePeriodParamType } from '@/utils/types';
import { isValidTimePeriod } from '@/utils/validators';

export const useGetTimePeriodSearchParam = (): TimePeriodParamType => {
  const searchParams = useSearchParams();

  const query = searchParams.get(TIME_PERIOD_KEY) as TimePeriodParamType;

  return isValidTimePeriod(query) ? query : DEFAULT_TIME_PERIOD;
};
