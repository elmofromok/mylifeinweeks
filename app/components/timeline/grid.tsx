'use client';

interface TimelineGridProps {
  birthDate: Date;
  totalWeeks?: number;
}

export function TimelineGrid({
  birthDate,
  totalWeeks = 4160,
}: TimelineGridProps) {
  // 4160 weeks = 80 years
  const weeks = Array.from({ length: totalWeeks }, (_, index) => ({
    weekNumber: index,
    isCurrentWeek: false, // We'll implement this later
    hasEvent: false, // We'll implement this later
  }));

  return (
    <div className='grid grid-cols-52 gap-1'>
      {weeks.map(week => (
        <div
          key={week.weekNumber}
          className='aspect-square bg-gray-200 hover:bg-gray-300 transition-colors rounded-sm'
          title={`Week ${week.weekNumber}`}
        />
      ))}
    </div>
  );
}
