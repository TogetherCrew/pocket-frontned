'use client';

import { protocolApiGateway } from '@/api/protocol';
import { LinearProgressDateMetric } from '@/components/metrics-charts';

export const ProtocolUpgrade = () => {
  const { useGetProtocolUpgrade } = protocolApiGateway;
  const { isLoading, isError, data, error } = useGetProtocolUpgrade();

  return (
    <div className="flex flex-col gap-5">
      <div className="text-title-large">Protocol Upgrade</div>
      <div className="flex flex-row flex-wrap justify-between gap-5 lg:flex-nowrap">
        <LinearProgressDateMetric
          startDate="30 Aug 2023"
          title="V1 Mainnet Launch Date"
          isLoading={isLoading}
          isError={isError}
          endDate={data?.metrics.v1_mainnet_launch_date.value}
          errorMessage={error?.message}
        />
      </div>
    </div>
  );
};
