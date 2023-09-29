'use client';

import { protocolApiGateway } from '@/api/protocol';
import {
  LineChartMetric,
  StackedBarCharMetric,
} from '@/components/metrics-charts';
import { TimePeriod } from '@/utils/types';

export const Demand = () => {
  const { useGetDemand } = protocolApiGateway;
  const { isLoading, isError, data } = useGetDemand({
    timePeriod: TimePeriod.LAST_YEAR, // todo
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
      />
      <StackedBarCharMetric
        title="Gateway operator share of relays"
        data={data?.metrics.gateway_operator_share_of_relays.values}
        isLoading={isLoading}
        isError={isError}
        multiple={false}
      />
    </div>
  );
};
