import { LineChartMetric } from '@/components/metrics-charts';

export const Awareness = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-title-large">Awareness</div>
      <LineChartMetric title="Twitter followers" color="primary" />
    </div>
  );
};
