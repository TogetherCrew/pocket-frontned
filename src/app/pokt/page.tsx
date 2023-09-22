import { LineChartMetric } from '@/components/metrics-charts';

const POKTPage = () => {
  return (
    <main className="flex flex-col gap-8 p-6">
      <LineChartMetric title="POKT Liquidity: 2% depth" color="primary" />
      <LineChartMetric
        title="Coverage Ratio"
        color="secondary"
        description="Protocol revenue / token issuance"
      />
      <LineChartMetric
        title="Annualised yield"
        color="primary"
        description="Protocol revenue / circulating supply"
      />
    </main>
  );
};

export default POKTPage;
