import { LineChartMetric } from '@/components/metrics-charts';

const POKTPage = () => {
  return (
    <main className="flex flex-col gap-8 p-6">
      <LineChartMetric
        title="POKT Liquidity: 2% depth"
        color="primary"
        isLoading={true}
        isError={false}
      />
      <LineChartMetric
        title="Coverage Ratio"
        color="secondary"
        description="Protocol revenue / token issuance"
        isLoading={false}
        isError={false}
      />
      <LineChartMetric
        title="Annualised yield"
        color="primary"
        description="Protocol revenue / circulating supply"
        isLoading={false}
        isError={false}
      />
    </main>
  );
};

export default POKTPage;
