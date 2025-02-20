import { ThemeToggle } from './components/theme-toggle';
import { TimelineGrid } from './components/timeline/grid';
import { getLifeEvents } from './data/events';

export default function HomePage() {
  const birthDate = new Date('1971-06-24');
  const events = getLifeEvents(birthDate);

  return (
    <main
      className='min-h-screen'
      style={{ background: 'var(--color-bg-base)' }}
    >
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <header className='mb-8 flex justify-between items-center'>
          <div>
            <h1
              className='text-4xl font-bold'
              style={{ color: 'var(--color-text-primary)' }}
            >
              Life in Weeks
            </h1>
            <p
              className='mt-2 text-lg'
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Each box represents a week of your life
            </p>
          </div>
          <ThemeToggle />
        </header>

        <TimelineGrid birthDate={birthDate} events={events} />
      </div>
    </main>
  );
}
