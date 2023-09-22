import { LineChartMetric } from '@/components/metrics-charts';

export const Transparency = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-title-large">Transparency</div>
      <div className="flex flex-row flex-wrap justify-between gap-5 lg:flex-nowrap">
        <LineChartMetric title="Projects working in the open" color="primary" />
        <LineChartMetric
          title="Percentage of projects self-reporting"
          color="secondary"
          showDisabledTimePeriod={true}
          disabledTimePeriodText="Last month"
        />
      </div>
    </div>
  );
};
