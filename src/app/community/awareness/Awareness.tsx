'use client';

import { communityApiGateway } from '@/api/community';
import { LineChartMetric } from '@/components/metrics-charts';
import { TimePeriod } from '@/utils/types';

export const Awareness = () => {
  const { useGetAwareness } = communityApiGateway;
  const { isLoading, isError, data } = useGetAwareness({
    timePeriod: TimePeriod.LAST_YEAR, // todo
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="text-title-large">Awareness</div>
      <LineChartMetric
        title="Twitter followers"
        color="primary"
        isLoading={isLoading}
        isError={isError}
        data={data?.metrics.twitter_followers.values}
      />
    </div>
  );
};
