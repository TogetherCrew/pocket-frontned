'use client';

import { communityApiGateway } from '@/api/community';
import { StackedBarCharMetric } from '@/components/metrics-charts';
import { TimePeriod } from '@/utils/types';

export const Adaptability = () => {
  const { useGetAdaptability } = communityApiGateway;
  const { isLoading, isError, data } = useGetAdaptability({
    timePeriod: TimePeriod.LAST_YEAR, // todo
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="text-title-large">Adaptability</div>
      <StackedBarCharMetric
        title="Velocity of experiments v no. debated proposals"
        multiple
        isLoading={isLoading}
        isError={isError}
        data={
          data?.metrics.velocity_of_experiments_v_no_debated_proposals.values
        }
      />
    </div>
  );
};
