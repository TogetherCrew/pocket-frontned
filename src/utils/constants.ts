import { TimePeriod } from '@/utils/types';

export const DRAWER_WIDTH = 22.5; // rem

export const TIME_PERIOD_KEY = 'period';

export const apiConfig = {
  BASE_API_URL: process.env.NEXT_PUBLIC_BASE_API_URL,
  staleTime: 4 * 60 * 60 * 1000, // 4h
};

export const DEFAULT_TIME_PERIOD = TimePeriod.LAST_WEEK;
