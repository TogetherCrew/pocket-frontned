'use client';

import { governanceApiGateway } from '@/api/governance';
import { LineChartMetric } from '@/components/metrics-charts';
import { TimePeriod } from '@/utils/types';

export const NakamotoCoefficient = () => {
  const { useGetNakamotoCoefficient } = governanceApiGateway;
  const { isLoading, isError, data } = useGetNakamotoCoefficient({
    timePeriod: TimePeriod.LAST_YEAR, // todo
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="text-title-large">Nakamoto Coefficient</div>
      <div className="flex flex-row flex-wrap justify-between gap-5 lg:flex-nowrap">
        <LineChartMetric
          title="Validators to control protocol"
          color="primary"
          isLoading={isLoading}
          isError={isError}
          data={data?.metrics.validators_to_control_protocol.values}
        />
        <LineChartMetric
          title="Voters to control DAO"
          color="secondary"
          isLoading={isLoading}
          isError={isError}
          data={data?.metrics.voters_to_control_DAO.values}
        />
      </div>
    </div>
  );
};
