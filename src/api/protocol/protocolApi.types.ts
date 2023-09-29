import {
  ApiError,
  ApiResponse,
  AreaChartMetricsResponse,
  BarChartMetricsResponse,
  StringMetricsResponse,
  TimePeriodRequestParameter,
} from '@/utils/types';

export type GetProtocolUpgradeSuccessResponse = ApiResponse<{
  v1_mainnet_launch_date: StringMetricsResponse;
}>;

export type GetProtocolUpgradeResponse =
  | GetProtocolUpgradeSuccessResponse
  | ApiError;

export interface GetDemandRequest extends TimePeriodRequestParameter {}

export type GetDemandSuccessResponse = ApiResponse<{
  protocol_revenue: AreaChartMetricsResponse;
  gateway_operator_share_of_relays: BarChartMetricsResponse;
}>;

export type GetDemandResponse = GetDemandSuccessResponse | ApiError;
