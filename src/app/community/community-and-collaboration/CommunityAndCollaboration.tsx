'use client';

import { communityApiGateway } from '@/api/community';
import { DisabledTimePeriod } from '@/components/disabled-time-period';
import { LineChartMetric } from '@/components/metrics-charts';
import { NumberSkeleton } from '@/components/skeletons';
import { useGetTimePeriodSearchParam } from '@/hooks/use-get-time-peroiod-search-param';
import { NumberMetricsResponse } from '@/utils/types';

interface EcosystemProjectsDeliveringImpactProps {
  data?: NumberMetricsResponse;
  isLoading: boolean;
  isError: boolean;
}

const EcosystemProjectsDeliveringImpact = ({
  data,
  isError,
  isLoading,
}: EcosystemProjectsDeliveringImpactProps) => {
  return (
    <div className="flex w-full flex-col gap-5 rounded-2xl bg-surfaceContainerLow p-5">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-title-medium">
            Ecosystem projects delivering impact
          </span>
          <div className="bg-zinc-700 flex w-[125px] items-center justify-center rounded-lg bg-opacity-10">
            <DisabledTimePeriod>Last 2 months</DisabledTimePeriod>
          </div>
        </div>
        <span className="text-body-medium text-onSurfaceVariant">
          This cycle/ previous cycle
        </span>
      </div>
      <span className="text-title-large text-primary">
        {/* todo */}
        {isLoading ? <NumberSkeleton /> : null}
        {isError ? 'error' : null}
        {data ? data.value.toFixed(2) : null}
      </span>
    </div>
  );
};

const CommunityAndCollaboration = () => {
  const timePeriod = useGetTimePeriodSearchParam();

  const { useGetCommunityAndCollaboration } = communityApiGateway;
  const { isLoading, isError, data } = useGetCommunityAndCollaboration({
    timePeriod,
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="text-title-large">Community & Collaboration</div>
      <EcosystemProjectsDeliveringImpact
        isLoading={isLoading}
        isError={isError}
        data={data?.metrics.ecosystem_projects_delivering_impact}
      />
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
        <LineChartMetric
          title="Pocket Network DNA NPS"
          color="secondary"
          isLoading={isLoading}
          isError={isError}
          data={data?.metrics.pocket_network_DNA_NPS.values}
        />
        <LineChartMetric
          title="Community NPS"
          color="secondary"
          isLoading={isLoading}
          isError={isError}
          data={data?.metrics.community_NPS.values}
        />
      </div>
    </div>
  );
};

export { CommunityAndCollaboration };
