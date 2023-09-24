import {
  GetAwarenessRequest,
  GetCommunityAndCollaborationRequest,
} from '@/api/community/communityApi.types';
import { createKeyFactory } from '@/utils/query-key-factory';

const communityKeys = createKeyFactory('community', {
  useGetCommunityAndCollaboration: (
    params: GetCommunityAndCollaborationRequest,
  ) => Object.values(params),

  useGetAwareness: (params: GetAwarenessRequest) => Object.values(params),
});

export const queryKeys = {
  communityKeys,
};
