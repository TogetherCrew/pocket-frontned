import { LineChartMetric } from '@/components/MetricCharts';

const EcosystemProjectsDeliveringImpact = () => {
  // TODO: change span with an disabled select input
  return (
    <div className="flex w-full flex-col gap-5 rounded-2xl bg-surfaceContainerLow p-5">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-base font-semibold">
            Ecosystem projects delivering impact
          </span>
          <div className="bg-zinc-700 flex w-[125px] items-center justify-center rounded-lg bg-opacity-10">
            <span className="text-zinc-900 text-center text-sm leading-tight opacity-40">
              Last 2 months
            </span>
          </div>
        </div>
        <span className="text-sm text-onSurfaceVariant">
          This cycle/ previous cycle
        </span>
      </div>
      <span className="text-xl font-bold text-primary">23.21</span>
    </div>
  );
};

const CommunityAndCollaboration = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-xl font-bold">Community & Collaboration</div>
      <EcosystemProjectsDeliveringImpact />
      <div className="grid h-80 w-full grid-cols-2 gap-5">
        <LineChartMetric title="Pocket Network DNA NPS" />
        <LineChartMetric title="Community NPS" />
      </div>
    </div>
  );
};

export { CommunityAndCollaboration };
