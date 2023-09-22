import { LinearProgressDateMetric } from '@/components/metrics-charts';

export const ProtocolUpgrade = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-title-large">Protocol Upgrade</div>
      <div className="flex flex-row flex-wrap justify-between gap-5 lg:flex-nowrap">
        <LinearProgressDateMetric
          startDate="30 Aug 2023"
          endDate="30 Sep 2023"
          title="V1 Mainnet Launch Date"
        />
      </div>
    </div>
  );
};
