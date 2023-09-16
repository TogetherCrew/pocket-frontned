import {
  StackedBarCharMetric,
  generateMultipleData,
} from '@/components/MetricCharts';

const Adaptability = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-title-large">Adaptability</div>
      <div className="h-72">
        <StackedBarCharMetric
          title="Velocity of experiments v no. debated proposals"
          multiple
          data={generateMultipleData(10, 3)}
        />
      </div>
    </div>
  );
};

export { Adaptability };
