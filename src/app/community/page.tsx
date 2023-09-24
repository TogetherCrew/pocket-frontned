import { Adaptability } from '@/app/community/Adaptability';
import { HydratedAwareness } from '@/app/community/awareness';
import { HydratedCommunityAndCollaboration } from '@/app/community/community-and-collaboration';
import { Transparency } from '@/app/community/Transparency';

const CommunityPage = () => {
  return (
    <main className="flex flex-grow flex-col gap-8 p-6">
      <HydratedCommunityAndCollaboration />
      <HydratedAwareness />
      <Transparency />
      <Adaptability />
    </main>
  );
};

export default CommunityPage;
