import {
  ApiError,
  ApiResponse,
  AreaChartMetricsResponse,
  StackedBarChartMetricsResponse,
  TimePeriodRequestParameter,
} from '@/utils/types';

export interface GetNakamotoCoefficientRequest
  extends TimePeriodRequestParameter {}

export type GetNakamotoCoefficientSuccessResponse = ApiResponse<{
  validators_to_control_protocol: AreaChartMetricsResponse;
  voters_to_control_DAO: AreaChartMetricsResponse;
}>;

export type GetNakamotoCoefficientResponse =
  | GetNakamotoCoefficientSuccessResponse
  | ApiError;

export interface GetDAOGovernanceRequest extends TimePeriodRequestParameter {}

export type GetDAOGovernanceSuccessResponse = ApiResponse<{
  DAO_governance_asset_value: AreaChartMetricsResponse;
  DAO_treasury: AreaChartMetricsResponse;
}>;

export type GetDAOGovernanceResponse =
  | GetDAOGovernanceSuccessResponse
  | ApiError;

export interface GetCollaborationRequest extends TimePeriodRequestParameter {}

export type GetCollaborationSuccessResponse = ApiResponse<{
  proposals_from_community_v_core_contributors: StackedBarChartMetricsResponse;
}>;

export type GetCollaborationResponse =
  | GetCollaborationSuccessResponse
  | ApiError;
