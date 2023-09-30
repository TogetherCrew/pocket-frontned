'use client';

import { communityApiGateway } from '@/api/community';
import { LineChartMetric } from '@/components/metrics-charts';
import { useGetTimePeriodSearchParam } from '@/hooks/use-get-time-peroiod-search-param';

export const Transparency = () => {
  const timePeriod = useGetTimePeriodSearchParam();

  const { useGetTransparency } = communityApiGateway;
  const { isLoading, isError, data } = useGetTransparency({
    timePeriod,
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="text-title-large">Transparency</div>
      <div className="flex flex-row flex-wrap justify-between gap-5 lg:flex-nowrap">
        <LineChartMetric
          title="Projects working in the open"
          color="primary"
          isLoading={isLoading}
          isError={isError}
          data={data?.metrics.projects_working_in_the_open.values}
        />
        <LineChartMetric
          title="Percentage of projects self-reporting"
          color="secondary"
          showDisabledTimePeriod={true}
          disabledTimePeriodText="Last month"
          isLoading={isLoading}
          isError={isError}
          data={data?.metrics.percentage_of_projects_self_reporting.values}
        />
      </div>
    </div>
  );
};