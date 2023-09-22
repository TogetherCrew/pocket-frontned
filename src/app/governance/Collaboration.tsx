import {
  generateMultipleData,
  StackedBarCharMetric,
} from '@/components/metrics-charts';

export const Collaboration = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-title-large">Collaboration</div>
      <StackedBarCharMetric
        title="Proposals from community v core contributors"
        multiple
        data={generateMultipleData(10, 2)}
        description="Velocity of community driven vs pni/pnf driven enhancements"
      />
    </div>
  );
};
