import { Adaptability } from '@/app/community/adaptability';
import { Awareness } from '@/app/community/awareness';
import { CommunityAndCollaboration } from '@/app/community/community-and-collaboration';
import { Transparency } from '@/app/community/transparency';

const CommunityPage = () => {
  return (
    <main className="flex flex-grow flex-col gap-8 p-6">
      <CommunityAndCollaboration />
      <Awareness />
      <Transparency />
      <Adaptability />
    </main>
  );
};

export default CommunityPage;
