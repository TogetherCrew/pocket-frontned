import { LineChartMetric } from '@/components/metrics-charts';

export const DaoGovernance = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-title-large">DAO Governance</div>
      <div className="flex flex-row flex-wrap justify-between gap-5 lg:flex-nowrap">
        <LineChartMetric
          title="DAO Governance Asset Value"
          color="primary"
          description="DAO Treasury x Voter Participation Ratio x (1 - Voter Power Concentration Index)"
          isLoading={false}
          isError={false}
        />
        <LineChartMetric
          title="Value ($) of DAO Treasury"
          color="secondary"
          isLoading={true}
          isError={true}
        />
      </div>
    </div>
  );
};
