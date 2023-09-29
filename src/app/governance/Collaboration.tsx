'use client';

import { governanceApiGateway } from '@/api/governance';
import { StackedBarCharMetric } from '@/components/metrics-charts';
import { TimePeriod } from '@/utils/types';

export const Collaboration = () => {
  const { useGetCollaboration } = governanceApiGateway;
  const { isLoading, isError, data } = useGetCollaboration({
    timePeriod: TimePeriod.LAST_YEAR,
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="text-title-large">Collaboration</div>
      <StackedBarCharMetric
        title="Proposals from community v core contributors"
        multiple
        description="Velocity of community driven vs pni/pnf driven enhancements"
        isLoading={isLoading}
        isError={isError}
        data={data?.metrics.proposals_from_community_v_core_contributors.values}
      />
    </div>
  );
};
