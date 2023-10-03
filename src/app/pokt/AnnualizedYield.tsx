'use client';

import { poktApiGateway } from '@/api/pokt';
import { LineChartMetric } from '@/components/metrics-charts';
import { useGetTimePeriodSearchParam } from '@/hooks/use-get-time-peroiod-search-param';

export const AnnualizedYield = () => {
  const timePeriod = useGetTimePeriodSearchParam();

  const { useGetAnnualizedYield } = poktApiGateway;
  const { isLoading, isError, data, error } = useGetAnnualizedYield({
    timePeriod,
  });

  return (
    <LineChartMetric
      title="Annualised yield"
      color="primary"
      description="Protocol revenue / circulating supply"
      isLoading={isLoading}
      isError={isError}
      data={data?.metrics.annualised_yield.values}
      errorMessage={error?.message}
    />
  );
};
