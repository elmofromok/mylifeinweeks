'use client';

import { LifeEvent } from '../../types';

interface TimelineGridProps {
  birthDate: Date;
  totalWeeks?: number;
  events?: LifeEvent[];
}

export function TimelineGrid({
  birthDate,
  totalWeeks = 4160,
  events = [],
}: TimelineGridProps) {
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - birthDate.getTime());
  const currentWeek = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
  const birthYear = birthDate.getFullYear();
  const totalYears = Math.ceil(totalWeeks / 52);

  return (
    <div className='flex flex-wrap gap-2 w-fit'>
      {Array.from({ length: totalYears }, (_, yearIndex) => {
        const year = birthYear + yearIndex;
        const yearStartWeek = yearIndex * 52;

        return (
          <>
            {/* Year marker */}
            <div
              key={`year-marker-${year}`}
              className='flex-auto min-h-8 px-4 py-2 rounded-sm bg-bg-year'
            >
              <div className='text-xs text-text-light'>{year}</div>
            </div>

            {/* Weeks */}
            {Array.from({ length: 52 }, (_, weekIndex) => {
              const absoluteWeekNumber = yearStartWeek + weekIndex;
              const event = events.find(
                e => e.weekNumber === absoluteWeekNumber,
              );

              const getWeekClasses = () => {
                const baseClasses =
                  'flex-auto min-h-8 px-4 py-2 relative transition-colors rounded-sm text-xs';

                if (absoluteWeekNumber === currentWeek) {
                  return `${baseClasses} bg-primary text-text-light`;
                }

                if (event) {
                  return `${baseClasses} bg-event-${
                    event.category || 'personal'
                  } text-text-light`;
                }

                return `${baseClasses} ${
                  absoluteWeekNumber < currentWeek
                    ? 'bg-bg-past text-text-dark'
                    : 'bg-bg-future text-text-dark'
                }`;
              };

              return (
                <div
                  key={`week-${year}-${weekIndex + 1}`}
                  className={getWeekClasses()}
                  title={
                    event
                      ? `${event.title} (${year})`
                      : `Week ${weekIndex + 1} of ${year}`
                  }
                >
                  {event ? event.shortText : weekIndex + 1}
                </div>
              );
            })}
          </>
        );
      })}
    </div>
  );
}
