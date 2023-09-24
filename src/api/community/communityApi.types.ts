import {
  ApiError,
  ApiResponse,
  AreaChartMetricsResponse,
  NumberMetricsResponse,
  TimePeriodRequestParameter,
} from '@/utils/types';

export interface GetCommunityAndCollaborationRequest
  extends TimePeriodRequestParameter {}

export type GetCommunityAndCollaborationSuccessResponse = ApiResponse<{
  ecosystem_projects_delivering_impact: NumberMetricsResponse;
  dna_nps?: AreaChartMetricsResponse;
  community_nps?: AreaChartMetricsResponse;
}>;

export type GetCommunityAndCollaborationResponse =
  | GetCommunityAndCollaborationSuccessResponse
  | ApiError;

export interface GetAwarenessRequest extends TimePeriodRequestParameter {}

export type GetAwarenessSuccessResponse = ApiResponse<{
  twitter_followers: AreaChartMetricsResponse;
}>;

export type GetAwarenessResponse = GetAwarenessSuccessResponse | ApiError;
