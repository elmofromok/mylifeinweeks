import { LifeEvent } from '../types';

function getOrdinal(n: number): string {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function generateBirthdayEvents(
  birthDate: Date,
  totalYears: number,
): LifeEvent[] {
  return Array.from({ length: totalYears }, (_, yearIndex) => {
    const age = yearIndex;
    const weekNumber = yearIndex * 52;

    // Format date consistently
    const formatDate = (date: Date) => {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC', // Force UTC to prevent timezone shifts
      });
    };

    // Special case for birth (age 0)
    if (age === 0) {
      return {
        id: 'birth',
        weekNumber,
        title: 'Born',
        shortText: `👶 Born on ${formatDate(birthDate)}`,
        content: `Born on ${formatDate(birthDate)}`,
        date: birthDate,
        category: 'personal',
      };
    }

    const birthdayDate = new Date(
      Date.UTC(
        birthDate.getFullYear() + yearIndex,
        birthDate.getMonth(),
        birthDate.getDate(),
      ),
    );

    return {
      id: `birthday-${yearIndex}`,
      weekNumber,
      title: `${getOrdinal(age)} Birthday`,
      shortText: `🎂 ${getOrdinal(age)} Birthday`,
      content: `Turned ${age} years old on ${formatDate(birthdayDate)}`,
      date: birthdayDate,
      category: 'personal',
    };
  });
}

// Your existing life events
const manualEvents: LifeEvent[] = [
  {
    id: '1',
    weekNumber: 1040,
    title: 'Started College',
    shortText: '🎓 College',
    content: `Began my undergraduate studies in [Field] at [University]...`,
    date: new Date('1991-09-01'),
    category: 'education',
  },
  // Add more manual events...
];

export function getLifeEvents(
  birthDate: Date,
  totalYears: number = 80,
): LifeEvent[] {
  const birthdays = generateBirthdayEvents(birthDate, totalYears);

  // Combine birthdays with manual events, sort by weekNumber
  return [...birthdays, ...manualEvents].sort(
    (a, b) => a.weekNumber - b.weekNumber,
  );
}

export function calculateWeekNumber(date: Date, birthDate: Date): number {
  const diffTime = Math.abs(date.getTime() - birthDate.getTime());
  return Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
}
