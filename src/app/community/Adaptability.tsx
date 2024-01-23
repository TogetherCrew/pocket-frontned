'use client';

import { useMemo } from 'react';

import { communityApiGateway } from '@/api/community';
import { MultiAreaChartMetric } from '@/components/metrics-charts';
import { MultiAreaData } from '@/components/metrics-charts/MultiAreaChartMetric';
import { useGetTimePeriodSearchParam } from '@/hooks/use-get-time-peroiod-search-param';

export const Adaptability = () => {
  const timePeriod = useGetTimePeriodSearchParam();

  const { useGetAdaptability } = communityApiGateway;
  const { isLoading, isError, data, error } = useGetAdaptability({
    timePeriod,
  });

  const filteredData = useMemo(() => {
    return data?.metrics.velocity_of_experiments_v_no_debated_proposals.values?.map(
      (data) => {
        return {
          date: data.date,
          values: [
            {
              name: '# debated proposals',
              value:
                data.values[0].name === 'No debated proposals count'
                  ? data.values[0].value
                  : null,
            },
            {
              name: 'Velocity of experiments',
              value:
                data.values[0].name === 'Velocity of experiments'
                  ? data.values[0].value
                  : null,
            },
          ],
        };
      },
    );
  }, [data?.metrics.velocity_of_experiments_v_no_debated_proposals.values]);

  return (
    <div className="flex flex-col gap-5">
      <div className="text-title-large">Adaptability</div>
      <MultiAreaChartMetric
        title="Velocity of Experiments"
        description="We’re looking for more Sockets opening than proposals, showing an engaged community."
        multiple
        isLoading={isLoading}
        isError={isError}
        data={filteredData as MultiAreaData[]}
        errorMessage={error?.message}
        xAxisLabelFormat="MMM yyyy"
      />
    </div>
  );
};
