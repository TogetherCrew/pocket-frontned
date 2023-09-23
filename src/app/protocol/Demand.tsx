import {
  generateSingleData,
  LineChartMetric,
  StackedBarCharMetric,
} from '@/components/metrics-charts';

export const Demand = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-title-large">Demand</div>
      <LineChartMetric title="Protocol Revenue" color="primary" />
      <StackedBarCharMetric
        title="Gateway operator share of relays"
        data={generateSingleData(10)}
      />
    </div>
  );
};