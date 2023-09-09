import React from 'react';

import { StackedBarCharMetric } from '@/components/MetricCharts';

const Adaptability = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-xl font-bold">Adaptability</div>
      <div className="h-72">
        <StackedBarCharMetric title="Velocity of experiments v no. debated proposals" />
      </div>
    </div>
  );
};

export { Adaptability };
