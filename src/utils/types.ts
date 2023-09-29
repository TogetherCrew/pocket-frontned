export interface StringMetricsResponse {
  value: string;
}

export interface NumberMetricsResponse {
  value: number;
  change?: number;
}

export interface BarChartMetricsResponse {
  values: [
    {
      date: string;
      value: number;
    },
  ];
}

export interface AreaChartMetricsResponse {
  values: [
    {
      date: string;
      value: number;
    },
  ];
}

export interface StackedBarChartMetricsResponse {
  values: [
    {
      date: string;
      values: [
        {
          name: string;
          value: number;
        },
      ];
    },
  ];
}

export interface ApiResponse<T> {
  metrics: T;
}

export interface ApiError {
  statusCode: number;
  message: string;
  error?: string;
}

export const enum TimePeriod {
  // TODAY = 'today',
  // YESTERDAY = 'yesterday',
  LAST_WEEK = 'last-week',
  LAST_MONTH = 'last-month',
  LAST_YEAR = 'last-year',
}

export interface TimePeriodRequestParameter {
  timePeriod: TimePeriod;
}
