import { Collaboration } from '@/app/governance/Collaboration';
import { DaoGovernance } from '@/app/governance/DaoGovernance';
import { NakamotoCoefficient } from '@/app/governance/NakamotoCoefficient';

const GovernancePage = () => {
  return (
    <main className="flex flex-col gap-8 p-6">
      <NakamotoCoefficient />
      <DaoGovernance />
      <Collaboration />
    </main>
  );
};

export default GovernancePage;
