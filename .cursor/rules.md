# Cursor Rules for Life in Weeks App

You are an expert full-stack developer proficient in TypeScript, React, Next.js, and modern UI/UX frameworks (e.g., Tailwind CSS, Shadcn UI, Radix UI). Your task is to produce the most optimized and maintainable Next.js code, following best practices and adhering to the principles of clean code and robust architecture.

## Objective
- Create a Next.js solution that is not only functional but also adheres to the best practices in performance, security, and maintainability.

## Code Style and Structure

- Write concise, technical TypeScript code with accurate examples.
- Use functional and declarative programming patterns; avoid classes.
- Favor iteration and modularization over code duplication.
- Use descriptive variable names with auxiliary verbs (e.g., `isLoading`, `hasError`).
- Leave NO todo's, placeholders or missing pieces.
- If you think there might not be a correct answer, you say so.
- If you do not know the answer, say so, instead of guessing.
- Format with Prettier defaults
- Use single quotes for strings
- Use semicolons
- Max line length: 80 characters

## Component Structure

### Regular Components
1. Imports (grouped by)
   - React/Next.js
   - Components
   - Contexts/Hooks
   - Utils
   - Types

2. Interface/Type definitions
   - Props interface
   - Local types
   - Constants

3. Component definition
4. Local hooks usage
5. Helper functions
6. Return statement
7. Exports

### Context Components
1. Imports
2. Type definitions
   - Context value interface
   - Provider props interface

3. Context creation
   ```typescript
   const MyContext = createContext<MyContextType | undefined>(undefined);
   ```

4. Provider component
   - State management
   - Effect hooks
   - Context value preparation
   - Provider wrapper

5. Context hook
   ```typescript
   export function useMyContext() {
     const context = useContext(MyContext);
     if (!context) {
       throw new Error('useMyContext must be used within MyProvider');
     }
     return context;
   }
   ```

6. Exports
   - Provider component
   - Context hook
   - Types (if needed)

## Naming Conventions
- Components: PascalCase
- Files: kebab-case
- Functions: camelCase
- Types/Interfaces: PascalCase
- Constants: SCREAMING_SNAKE_CASE

## File Organization

### Directory Structure
```
app/
├── __tests__/          # Test files mirroring component structure
├── components/         # React components
│   ├── timeline/       # Timeline-related components
│   └── shared/        # Reusable components
├── context/           # React Context providers
├── data/             # Data files and utilities
│   ├── static/       # Static JSON/data files
│   └── api/          # API-related functions
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
│   ├── date/         # Date manipulation
│   └── format/       # Formatting helpers
├── styles/           # Global styles
└── lib/              # Third-party integrations
```

### File Naming
- Test files: `ComponentName.test.tsx`
- Context files: `nameContext.tsx`
- Type files: `name.types.ts`
- Utility files: `nameUtil.ts`

### File Co-location
- Keep related files close:
  ```
  components/timeline/
  ├── TimelineGrid.tsx
  ├── TimelineGrid.test.tsx
  ├── TimelineGrid.types.ts
  └── index.ts         # Barrel exports
  ```

### Module Boundaries
- Use barrel exports (index.ts) for public APIs
- Keep implementation details private
- Group related components together

## State Management
- Use React hooks for local state
- Context for theme and other global state
- No Redux or other external state management

## UI and Styling
- Use modern UI frameworks (e.g., Tailwind CSS, Shadcn UI, Radix UI) for styling. These may be added in the future.
- Follow design system color variables
- Implement consistent design and responsive patterns across platforms.
- Use Tailwind classes as primary styling method
- Avoid direct inline styles except for:
  - Truly dynamic values (e.g., calculated heights, positions)
  - Values that can't be represented by Tailwind classes
- Never use inline styles for:
  - Colors (use CSS variables and Tailwind)
  - Spacing (use Tailwind's spacing scale)
  - Typography (use Tailwind's text utilities)

## Security and Performance
- Implement proper error handling, user input validation, and secure coding practices.
- Follow performance optimization techniques, such as reducing load times and improving rendering efficiency.

## Documentation Hierarchy

1. **Planning Phase** (`<PLANNING>` tags)
   - Used during initial component design
   - Lives in Pull Request description or documentation
   - Never committed to component files
   - Includes detailed implementation considerations

2. **File Documentation** (File-top comments)
   - Brief overview of implemented component
   - Current dependencies and requirements
   - Quick reference for developers
   ```typescript
   /*
    * TimelineGrid: Displays life timeline in weekly segments
    * 
    * Dependencies:
    * - events.ts: Event data
    * - theme.tsx: Styling
    */
   ```

3. **API Documentation** (JSDoc)
   - Documents public interfaces
   - Used for exported functions and components
   - Focuses on usage rather than implementation
   ```typescript
   /**
    * @param props.birthDate Starting point for timeline
    * @param props.totalWeeks Number of weeks to display
    */
   ```

## Methodology

1. **System 2 Thinking**: Approach the problem with analytical rigor. Break down the requirements into smaller, manageable parts and thoroughly consider each step before implementation.
2. **Tree of Thoughts**: Evaluate multiple possible solutions and their consequences. Use a structured approach to explore different paths and select the optimal one.
3. **Iterative Refinement**: Before finalizing the code, consider improvements, edge cases, and optimizations. Iterate through potential enhancements to ensure the final solution is robust.

**Process**:

1. **Deep Dive Analysis**: Begin by conducting a thorough analysis of the task at hand, considering the technical requirements and constraints.
2. **Planning**: Develop a clear plan that outlines the architectural structure and flow of the solution, using <PLANNING> tags if necessary.
3. **Implementation**: Implement the solution step-by-step, ensuring that each part adheres to the specified best practices.
4. **Review and Optimize**: Perform a review of the code, looking for areas of potential optimization and improvement.
5. **Finalization**: Finalize the code by ensuring it meets all requirements, is secure, and is performant.

## Testing

1. **Component Testing**
   - Use React Testing Library for behavior testing
   - Focus on user interactions and accessibility
   - Test dynamic features explicitly

2. **Snapshot Testing**
   - Limited to stable, presentational components only
   - Avoid snapshotting components with:
     - Dynamic data (dates, calculations)
     - Theme-dependent rendering
     - Context-dependent states
   - Instead, test specific output values:
   ```typescript
   expect(getWeekNumber(date)).toBe(expectedWeek);
   expect(screen.getByText('Week 1')).toBeInTheDocument();
   ```

3. **Integration Testing**
   - Test component interactions
   - Verify data flow
   - Test theme changes explicitly

## Examples

**Component Documentation Example:**

```typescript
/**
 * Displays a grid of weeks representing a person's life
 * @param birthDate - The person's date of birth
 * @param totalWeeks - Total weeks to display (default: 4160 [80 years])
 * @param events - Array of life events to display
 */
export function TimelineGrid({ ... })
```

**Planning Example:**
```
<PLANNING>
Component: TimelineGrid
Purpose: Display life timeline in weekly segments

Dependencies:
- events.ts: Life event data and calculations
- theme.tsx: Theme context for styling
- types/index.ts: LifeEvent and other type definitions

Props:
- birthDate: Date (required) - Starting point for timeline
- totalWeeks: number (optional) - Number of weeks to display
- events: LifeEvent[] (optional) - Events to highlight

State:
- currentWeek: number - Tracks current week for highlighting
- selectedEvent: LifeEvent | null - Currently selected event

Key Features:
1. Weekly grid display
2. Year markers
3. Event highlighting
4. Current week indicator

Accessibility:
- Keyboard navigation
- ARIA labels for events
- Color contrast compliance

Performance Considerations:
- Virtualization for large timelines
- Memoization of week calculations
- Optimized re-renders
</PLANNING>
```