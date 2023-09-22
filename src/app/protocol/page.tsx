import { Demand } from '@/app/protocol/Demand';
import { ProtocolUpgrade } from '@/app/protocol/ProtocolUpgrade';

const ProtocolPage = () => {
  return (
    <main className="flex flex-col gap-8 p-6">
      <ProtocolUpgrade />
      <Demand />
    </main>
  );
};

export default ProtocolPage;
