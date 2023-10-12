'use client';

import Link from 'next/link';

import { governanceApiGateway } from '@/api/governance';
import { LineChartMetric } from '@/components/metrics-charts';
import { useGetTimePeriodSearchParam } from '@/hooks/use-get-time-peroiod-search-param';

export const DaoGovernance = () => {
  const timePeriod = useGetTimePeriodSearchParam();

  const { useGetDAOGovernance } = governanceApiGateway;
  const { isLoading, isError, data, error } = useGetDAOGovernance({
    timePeriod,
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="text-title-large">DAO Governance</div>
      <div className="flex flex-row flex-wrap justify-between gap-5 lg:flex-nowrap">
        <LineChartMetric
          title="DAO Governance Asset Value"
          color="primary"
          description={
            <span className="">
              DAO Treasury x Voter Participation Ratio x (1 - Voter Power
              Concentration Index).{' '}
              <Link
                className="text-primary"
                href="https://mirror.xyz/0x2462fF59E08d60ED5bD737caAa667F5Fe435C358/fM1vWMkSMRwQWidP_wZ4X30mpWHUdSDFITeAxUcZbbA"
                target="_blank"
              >
                see here for more info
              </Link>
            </span>
          }
          isLoading={isLoading}
          isError={isError}
          data={data?.metrics.DAO_governance_asset_value.values}
          errorMessage={error?.message}
        />
        <LineChartMetric
          title="Value ($) of DAO Treasury"
          color="secondary"
          isLoading={isLoading}
          isError={isError}
          data={data?.metrics.DAO_treasury.values}
          errorMessage={error?.message}
        />
      </div>
    </div>
  );
};
