import { redirect } from 'next/navigation';

export default async function Home() {
  redirect('/community');

  return (
    <main>
      <p>Pocket Network Front-end</p>
    </main>
  );
}
