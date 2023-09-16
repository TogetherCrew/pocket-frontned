import { Adaptability } from '@/app/community/Adaptability';
import { CommunityAndCollaboration } from '@/app/community/CommunityAndCollaboration';

const CommunityPage = () => {
  return (
    <main className="flex flex-col gap-8 p-6">
      <CommunityAndCollaboration />
      <Adaptability />
    </main>
  );
};

export default CommunityPage;
