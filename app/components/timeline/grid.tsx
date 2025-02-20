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
              className='flex-auto min-h-8 px-4 py-2 bg-blue-900 rounded-sm'
            >
              <div className='text-xs text-gray-200'>{year}</div>
            </div>

            {/* Weeks of this year */}
            {Array.from({ length: 52 }, (_, weekIndex) => {
              const absoluteWeekNumber = yearStartWeek + weekIndex;
              const event = events.find(
                e => e.weekNumber === absoluteWeekNumber,
              );

              return (
                <div
                  key={`week-${year}-${weekIndex + 1}`}
                  className={`flex-auto min-h-8 px-4 py-2
                    relative transition-colors rounded-sm text-xs
                    ${
                      absoluteWeekNumber === currentWeek
                        ? 'bg-blue-500 text-white'
                        : ''
                    }
                    ${
                      event
                        ? 'bg-green-500 text-white'
                        : absoluteWeekNumber < currentWeek
                        ? 'bg-gray-300 text-gray-700'
                        : 'bg-gray-200 text-gray-700'
                    }
                    hover:bg-gray-300
                  `}
                  title={
                    event
                      ? `${event.title} (${year})`
                      : `Week ${weekIndex + 1} of ${year}`
                  }
                >
                  {weekIndex + 1}
                </div>
              );
            })}
          </>
        );
      })}
    </div>
  );
}
