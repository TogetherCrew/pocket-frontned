import { TimePeriod } from '@/utils/types';
import type { TimePeriodParamType } from '@/utils/types';

const VALID_TIME_PERIODS = Object.values(TimePeriod);

export const isValidTimePeriod = (period: TimePeriodParamType) =>
  VALID_TIME_PERIODS.includes(period);
