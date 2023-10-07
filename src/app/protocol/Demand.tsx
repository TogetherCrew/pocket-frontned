'use client';

import { protocolApiGateway } from '@/api/protocol';
import {
  LineChartMetric,
  StackedBarCharMetric,
} from '@/components/metrics-charts';
import { useGetTimePeriodSearchParam } from '@/hooks/use-get-time-peroiod-search-param';

export const Demand = () => {
  const timePeriod = useGetTimePeriodSearchParam();

  const { useGetDemand } = protocolApiGateway;
  const { isLoading, isError, data, error } = useGetDemand({
    timePeriod,
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="text-title-large">Demand</div>
      <LineChartMetric
        title="Protocol Revenue"
        color="primary"
        isLoading={isLoading}
        isError={isError}
        data={data?.metrics.protocol_revenue.values}
        errorMessage={error?.message}
      />
      <StackedBarCharMetric
        title="Gateway operator share of relays"
        data={data?.metrics.gateway_operator_share_of_relays.values}
        isLoading={isLoading}
        isError={isError}
        multiple={false}
        errorMessage={error?.message}
        percentDate={true}
      />
    </div>
  );
};
