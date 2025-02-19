import { LifeEvent } from '../types';

export const lifeEvents: LifeEvent[] = [
  {
    id: '1',
    weekNumber: 0,
    title: 'Born',
    description: 'Born on June 24, 1971',
    date: new Date('1971-06-24'),
    category: 'personal',
  },
  {
    id: '2',
    weekNumber: 1040, // Example: around age 20
    title: 'Started College',
    description: 'Began undergraduate studies',
    date: new Date('1991-09-01'),
    category: 'education',
  },
  // Add more events as needed
];

export function calculateWeekNumber(date: Date, birthDate: Date): number {
  const diffTime = Math.abs(date.getTime() - birthDate.getTime());
  return Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
}
