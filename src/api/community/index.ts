import { useQuery } from '@tanstack/react-query';

import { communityApi } from '@/api/community/communityApi';
import {
  GetAwarenessRequest,
  GetAwarenessResponse,
  GetAwarenessSuccessResponse,
  GetCommunityAndCollaborationRequest,
  GetCommunityAndCollaborationResponse,
  GetCommunityAndCollaborationSuccessResponse,
} from '@/api/community/communityApi.types';
import { apiConfig } from '@/utils/constants';
import { queryKeys } from '@/utils/react-query-keys';
import { ApiError } from '@/utils/types';

export const communityApiGateway = {
  useGetCommunityAndCollaboration: (
    parameters: GetCommunityAndCollaborationRequest,
  ) =>
    useQuery<
      GetCommunityAndCollaborationResponse,
      ApiError,
      GetCommunityAndCollaborationSuccessResponse
    >(queryKeys.communityKeys.useGetCommunityAndCollaboration(parameters), {
      queryFn: () => communityApi.getCommunityAndCollaboration(parameters),
      staleTime: apiConfig.staleTime,
    }),

  useGetAwareness: (parameters: GetAwarenessRequest) =>
    useQuery<GetAwarenessResponse, ApiError, GetAwarenessSuccessResponse>(
      queryKeys.communityKeys.useGetAwareness(parameters),
      {
        queryFn: () => communityApi.getAwareness(parameters),
        staleTime: apiConfig.staleTime,
      },
    ),
};
