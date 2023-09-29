import { LineChartMetric } from '@/components/metrics-charts';

export const NakamotoCoefficient = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-title-large">Nakamoto Coefficient</div>
      <div className="flex flex-row flex-wrap justify-between gap-5 lg:flex-nowrap">
        <LineChartMetric
          title="Validators to control protocol"
          color="primary"
          isLoading={true}
          isError={false}
        />
        <LineChartMetric
          title="Voters to control DAO"
          color="secondary"
          isLoading={true}
          isError={false}
        />
      </div>
    </div>
  );
};
