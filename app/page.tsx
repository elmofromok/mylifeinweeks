import { TimelineGrid } from './components/timeline/grid';

export default function HomePage() {
  const birthDate = new Date('1971-06-24'); // Example date, we'll make this configurable later

  return (
    <main className='min-h-screen bg-background'>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <header className='mb-8'>
          <h1 className='text-4xl font-bold text-foreground'>Life in Weeks</h1>
          <p className='mt-2 text-lg text-foreground/60'>
            Each box represents a week of your life
          </p>
        </header>

        <TimelineGrid birthDate={birthDate} />
      </div>
    </main>
  );
}
