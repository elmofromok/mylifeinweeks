
# Life in Weeks

A visual representation of your life, where each box represents one week. This app helps you visualize your life's journey through a unique timeline format, highlighting significant events and milestones.

## Features

- 📅 Weekly grid visualization of your life from birth
- 🏷️ Highlight important life events
- 🎨 Visual indicators for:
  - Past weeks
  - Current week
  - Future weeks
  - Life events
  - Year markers
- 🌗 Dark mode support

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd life-in-weeks
```


2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:

```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── components/     # React components
│   └── timeline/   # Timeline-related components
├── data/          # Data files and utilities
├── types/         # TypeScript type definitions
└── styles/        # Global styles
```

## Adding Life Events

Edit `app/data/events.ts` to add your life events:

```typescript
export const lifeEvents: LifeEvent[] = [
  {
    id: "1",
    weekNumber: 0,
    title: "Born",
    description: "Born on [date]",
    date: new Date("YYYY-MM-DD"),
    category: "personal"
  }
  // Add more events...
];
```

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


