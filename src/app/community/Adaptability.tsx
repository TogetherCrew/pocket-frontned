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
    let lastDebatedValue: number | null = null;
    let lastVelocityValue: number | null = null;

    return data?.metrics.velocity_of_experiments_v_no_debated_proposals.values?.map(
      (entry) => {
        const debatedProposalsEntry = entry.values.find(
          (v) => v.name === 'No debated proposals count',
        );
        const velocityOfExperimentsEntry = entry.values.find(
          (v) => v.name === 'Velocity of experiments',
        );

        const debatedProposalsValue = debatedProposalsEntry
          ? debatedProposalsEntry.value
          : null;
        const velocityOfExperimentsValue = velocityOfExperimentsEntry
          ? velocityOfExperimentsEntry.value
          : null;

        if (debatedProposalsValue !== null) {
          lastDebatedValue = debatedProposalsValue;
        }

        if (velocityOfExperimentsValue !== null) {
          lastVelocityValue = velocityOfExperimentsValue;
        }

        return {
          date: entry.date,
          values: [
            {
              name: '# debated proposals',
              value:
                debatedProposalsValue !== null
                  ? debatedProposalsValue
                  : lastDebatedValue,
            },
            {
              name: 'Velocity of experiments',
              value:
                velocityOfExperimentsValue !== null
                  ? velocityOfExperimentsValue
                  : lastVelocityValue,
            },
          ],
        };
      },
    );
  }, [data?.metrics.velocity_of_experiments_v_no_debated_proposals.values]);

  return (
    <div className="flex flex-col gap-5 ">
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
