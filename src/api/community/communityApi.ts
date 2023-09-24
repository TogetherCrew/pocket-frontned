import {
  GetAwarenessRequest,
  GetAwarenessResponse,
  GetCommunityAndCollaborationRequest,
  GetCommunityAndCollaborationResponse,
} from '@/api/community/communityApi.types';
import { httpClient } from '@/utils/http-client';

export const communityApi = {
  getCommunityAndCollaboration: async ({
    timePeriod,
  }: GetCommunityAndCollaborationRequest): Promise<GetCommunityAndCollaborationResponse> =>
    httpClient.get(
      `/metrics/community/community-collaboration?time_period=${timePeriod}`,
    ),

  getAwareness: async ({
    timePeriod,
  }: GetAwarenessRequest): Promise<GetAwarenessResponse> =>
    httpClient.get(`/metrics/community/awareness?time_period=${timePeriod}`),
};
