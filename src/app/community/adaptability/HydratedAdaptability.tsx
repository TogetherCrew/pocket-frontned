import { dehydrate, Hydrate } from '@tanstack/react-query';

import { communityApi } from '@/api/community/communityApi';
import { GetAdaptabilityRequest } from '@/api/community/communityApi.types';
import { Adaptability } from '@/app/community/adaptability/Adaptability';
import { getQueryClient } from '@/utils/get-query-client';
import { queryKeys } from '@/utils/react-query-keys';
import { TimePeriod } from '@/utils/types';

export const HydratedAdaptability = async () => {
  const queryClient = getQueryClient();

  const parameters: GetAdaptabilityRequest = {
    timePeriod: TimePeriod.LAST_YEAR,
  };

  await queryClient.prefetchQuery(
    queryKeys.communityKeys.useGetAdaptability(parameters),
    () => communityApi.getAdaptability(parameters),
  );

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Adaptability />
    </Hydrate>
  );
};
