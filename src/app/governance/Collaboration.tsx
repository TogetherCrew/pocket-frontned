'use client';

import { governanceApiGateway } from '@/api/governance';
import { StackedBarCharMetric } from '@/components/metrics-charts';
import { useGetTimePeriodSearchParam } from '@/hooks/use-get-time-peroiod-search-param';

export const Collaboration = () => {
  const timePeriod = useGetTimePeriodSearchParam();

  const { useGetCollaboration } = governanceApiGateway;
  const { isLoading, isError, data, error } = useGetCollaboration({
    timePeriod,
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="text-title-large">Collaboration</div>
      <StackedBarCharMetric
        title="Proposals from community vs core contributors"
        multiple
        description="Velocity of community driven vs pni/pnf driven enhancements"
        isLoading={isLoading}
        isError={isError}
        data={data?.metrics.proposals_from_community_v_core_contributors.values}
        errorMessage={error?.message}
      />
    </div>
  );
};
