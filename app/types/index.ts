export interface LifeEvent {
  id: string;
  weekNumber: number;
  title: string;
  description: string;
  date: Date;
  category?: 'education' | 'career' | 'personal' | 'travel';
  imageUrl?: string;
}
