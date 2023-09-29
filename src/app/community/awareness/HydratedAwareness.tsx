import { dehydrate, Hydrate } from '@tanstack/react-query';

import { communityApi } from '@/api/community/communityApi';
import { Awareness } from '@/app/community/awareness/Awareness';
import { getQueryClient } from '@/utils/get-query-client';
import { queryKeys } from '@/utils/react-query-keys';
import { TimePeriod } from '@/utils/types';

export const HydratedAwareness = async () => {
  const queryClient = getQueryClient();

  const parameters = { timePeriod: TimePeriod.LAST_YEAR }; // todo

  await queryClient.prefetchQuery(
    queryKeys.communityKeys.useGetAwareness(parameters),
    () => communityApi.getAwareness(parameters),
  );

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Awareness />
    </Hydrate>
  );
};
