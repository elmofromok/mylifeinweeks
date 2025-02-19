'use client';

interface TimelineGridProps {
  birthDate: Date;
  totalWeeks?: number;
}

export function TimelineGrid({
  birthDate,
  totalWeeks = 4160,
}: TimelineGridProps) {
  // Calculate current week number from birth date
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - birthDate.getTime());
  const currentWeek = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));

  const weeks = Array.from({ length: totalWeeks }, (_, index) => ({
    weekNumber: index,
    isCurrentWeek: index === currentWeek,
    isPast: index < currentWeek,
    hasEvent: false, // We'll implement this later
  }));

  return (
    <div className='flex flex-wrap gap-0.5 w-fit'>
      {weeks.map(week => (
        <div
          key={week.weekNumber}
          className={`
            w-4 h-4 transition-colors rounded-sm
            ${week.isCurrentWeek ? 'bg-blue-500' : ''}
            ${week.isPast ? 'bg-gray-300' : 'bg-gray-200'}
            hover:bg-gray-300
          `}
          title={`Week ${week.weekNumber}`}
        />
      ))}
    </div>
  );
}
