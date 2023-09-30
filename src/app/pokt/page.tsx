import { AnnualizedYield } from '@/app/pokt/AnnualizedYield';
import { CoverageRatio } from '@/app/pokt/CoverageRatio';
import { Liquidity } from '@/app/pokt/Liquidity';

const POKTPage = () => {
  return (
    <main className="flex flex-col gap-8 p-6">
      <Liquidity />
      <CoverageRatio />
      <AnnualizedYield />
    </main>
  );
};

export default POKTPage;
