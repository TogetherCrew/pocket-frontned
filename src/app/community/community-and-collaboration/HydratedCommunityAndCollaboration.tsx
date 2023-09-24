import { dehydrate, Hydrate } from '@tanstack/react-query';

import { communityApi } from '@/api/community/communityApi';
import { CommunityAndCollaboration } from '@/app/community/community-and-collaboration/CommunityAndCollaboration';
import { getQueryClient } from '@/utils/get-query-client';
import { queryKeys } from '@/utils/react-query-keys';
import { TimePeriod } from '@/utils/types';

export const HydratedCommunityAndCollaboration = async () => {
  const queryClient = getQueryClient();

  const parameters = { timePeriod: TimePeriod.TODAY }; // todo

  await queryClient.prefetchQuery(
    queryKeys.communityKeys.useGetCommunityAndCollaboration(parameters),
    () => communityApi.getCommunityAndCollaboration(parameters),
  );

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <CommunityAndCollaboration />
    </Hydrate>
  );
};
