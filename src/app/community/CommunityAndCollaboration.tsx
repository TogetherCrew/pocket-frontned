import { LineChartMetric } from '@/components/metrics-charts';

const EcosystemProjectsDeliveringImpact = () => {
  // TODO: change span with an disabled select input
  return (
    <div className="flex w-full flex-col gap-5 rounded-2xl bg-surfaceContainerLow p-5">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-title-medium">
            Ecosystem projects delivering impact
          </span>
          <div className="bg-zinc-700 flex w-[125px] items-center justify-center rounded-lg bg-opacity-10">
            <span className="text-zinc-900 text-center text-title-small opacity-40">
              Last 2 months
            </span>
          </div>
        </div>
        <span className="text-body-medium text-onSurfaceVariant">
          This cycle/ previous cycle
        </span>
      </div>
      <span className="text-title-large text-primary">23.21</span>
    </div>
  );
};

const CommunityAndCollaboration = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-title-large">Community & Collaboration</div>
      <EcosystemProjectsDeliveringImpact />
      <div className="grid h-80 w-full grid-cols-2 gap-5">
        <LineChartMetric title="Pocket Network DNA NPS" color="secondary" />
        <LineChartMetric title="Community NPS" color="secondary" />
      </div>
    </div>
  );
};

export { CommunityAndCollaboration };
