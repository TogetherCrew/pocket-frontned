import {
  StackedBarCharMetric,
  generateMultipleData,
} from '@/components/metrics-charts';

const Adaptability = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-title-large">Adaptability</div>
      <StackedBarCharMetric
        title="Velocity of experiments v no. debated proposals"
        multiple
        data={generateMultipleData(10, 3)}
      />
    </div>
  );
};

export { Adaptability };
