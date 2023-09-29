import { dehydrate, Hydrate } from '@tanstack/react-query';

import { communityApi } from '@/api/community/communityApi';
import { GetTransparencyRequest } from '@/api/community/communityApi.types';
import { Transparency } from '@/app/community/transparency/Transparency';
import { getQueryClient } from '@/utils/get-query-client';
import { queryKeys } from '@/utils/react-query-keys';
import { TimePeriod } from '@/utils/types';

export const HydratedTransparency = async () => {
  const queryClient = getQueryClient();

  const parameters: GetTransparencyRequest = {
    timePeriod: TimePeriod.LAST_YEAR,
  };

  await queryClient.prefetchQuery(
    queryKeys.communityKeys.useGetTransparency(parameters),
    () => communityApi.getTransparency(parameters),
  );

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Transparency />
    </Hydrate>
  );
};
