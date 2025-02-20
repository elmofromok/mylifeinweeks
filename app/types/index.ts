export interface LifeEvent {
  id: string;
  weekNumber: number;
  title: string;
  shortText: string; // For displaying in the box
  content: string; // Long-form content for the modal/expanded view
  date: Date;
  category?: 'education' | 'career' | 'personal' | 'travel';
  imageUrl?: string;
}
