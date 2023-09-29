import {
  GetAdaptabilityRequest,
  GetAwarenessRequest,
  GetCommunityAndCollaborationRequest,
  GetTransparencyRequest,
} from '@/api/community/communityApi.types';
import { createKeyFactory } from '@/utils/query-key-factory';

const communityKeys = createKeyFactory('community', {
  useGetCommunityAndCollaboration: (
    params: GetCommunityAndCollaborationRequest,
  ) => Object.values(params),

  useGetAwareness: (params: GetAwarenessRequest) => Object.values(params),

  useGetTransparency: (params: GetTransparencyRequest) => Object.values(params),

  useGetAdaptability: (params: GetAdaptabilityRequest) => Object.values(params),
});

export const queryKeys = {
  communityKeys,
};
