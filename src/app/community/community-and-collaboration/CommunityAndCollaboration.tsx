'use client';

import { communityApiGateway } from '@/api/community';
import { DisabledTimePeriod } from '@/components/disabled-time-period';
import { LineChartMetric } from '@/components/metrics-charts';
import { TimePeriod } from '@/utils/types';

const EcosystemProjectsDeliveringImpact = () => {
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
      <span className="text-title-large text-primary">23.21</span>
    </div>
  );
};

const CommunityAndCollaboration = () => {
  const { useGetCommunityAndCollaboration } = communityApiGateway;
  const { isLoading, isError, data } = useGetCommunityAndCollaboration({
    timePeriod: TimePeriod.TODAY, // todo
  });

  console.log({ isLoading, isError, data });

  return (
    <div className="flex flex-col gap-5">
      <div className="text-title-large">Community & Collaboration</div>
      <EcosystemProjectsDeliveringImpact />
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
        <LineChartMetric title="Pocket Network DNA NPS" color="secondary" />
        <LineChartMetric title="Community NPS" color="secondary" />
      </div>
    </div>
  );
};

export { CommunityAndCollaboration };
