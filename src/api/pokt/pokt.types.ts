import {
  ApiError,
  ApiResponse,
  AreaChartMetricsResponse,
  TimePeriodRequestParameter,
} from '@/utils/types';

export interface GetLiquidityRequest extends TimePeriodRequestParameter {}

export type GetLiquiditySuccessResponse = ApiResponse<{
  POKT_liquidity: AreaChartMetricsResponse;
}>;

export type GetLiquidityResponse = GetLiquiditySuccessResponse | ApiError;

export interface GetCoverageRatioRequest extends TimePeriodRequestParameter {}

export type GetCoverageRatioSuccessResponse = ApiResponse<{
  coverage_ratio: AreaChartMetricsResponse;
}>;

export type GetCoverageRatioResponse =
  | GetCoverageRatioSuccessResponse
  | ApiError;

export interface GetAnnualizedYieldRequest extends TimePeriodRequestParameter {}

export type GetAnnualizedYieldSuccessResponse = ApiResponse<{
  annualised_yield: AreaChartMetricsResponse;
}>;

export type GetAnnualizedYieldResponse =
  | GetAnnualizedYieldSuccessResponse
  | ApiError;
