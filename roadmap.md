Got it—**a biographical timeline of your life, displayed week by week.** No planning, tracking, or goal-setting—just a **visual story of your life events** in a cool, engaging format.

### 💡 **App Summary**

A personal biography web app that visually represents your life in weekly segments, showcasing key events and milestones in a unique timeline format.

---

## 🎯 **Core Objectives**

- 📅 **Weekly Life Timeline:** Visualize your entire life week by week.
- 🏷️ **Life Events Display:** Highlight important events (birthdays, graduations, moves, career changes, etc.).
- 🎨 **Visually Appealing:** A clean, stylish design that makes the timeline engaging.
- 🕒 **Static Biographical View:** No tracking or future planning—purely informational.
- 💾 **Simple Data Storage:** Local data storage or a static JSON file for event data.

---

## 🏗️ **Core Features (MVP)**

1. **Weekly Grid View:**

   - Grid of weeks from birth to the current date (and beyond for future life expectancy).
   - Different colors or markers for significant life phases (childhood, school, career, etc.).

2. **Event Highlights:**

   - Visual markers on weeks where major life events occurred.
   - Clicking/tapping an event shows more details (modal or side panel).

3. **Biography Section:**

   - Static text section with key life facts.
   - Minimalist profile header (e.g., name, birthdate).

4. **Responsive Design:**
   - Mobile-friendly and visually appealing across devices.

---

## 🌟 **Nice-to-Have Enhancements**

- 🖼️ Add images for key events
- 🌗 Dark mode toggle ✓
- 📜 Scrollable timeline with animations
- 🏙️ Group events by "chapters" of life (e.g., Education, Career, Travels)
- 🌡️ Add temperature data visualization for each week based on location

---

## 🛠️ **Tech Stack**

- **Framework:** Next.js (TypeScript)
- **Styling:** Tailwind CSS
- **Data Handling:** Static JSON for life events
- **State Management:** Basic React state for UI interactions
- **Deployment:** Vercel

---

## 🚀 **Development Roadmap**

### 📦 **Phase 1: Project Setup**

- [x] Set up Next.js with TypeScript
- [x] Install Tailwind CSS
- [x] Define folder structure (`components/`, `data/`, `pages/`)

---

### 🧩 **Phase 2: Core Components**

1. **TimelineGrid Component**
   - [x] Render the weekly grid based on age
   - [x] Highlight weeks with life events
   - [x] Add year markers
   - [ ] Add event tooltips/details

2. **Theme Toggle Component**
   - [x] Create theme context
   - [x] Add light/dark mode toggle
   - [x] Add system theme detection

3. **BiographyHeader Component**
   - [ ] Static header with name
   - [ ] Add date of birth display
   - [ ] Add short bio section

---

### 🎨 **Phase 3: UI/UX Enhancements**

- [x] Style timeline grid with dynamic colors
- [x] Add dark mode support
- [ ] Add smooth animations when selecting weeks
- [ ] Add responsive adjustments for mobile
- [ ] Add hover effects for grid items

---

### 💾 **Phase 4: Data Integration**

- [x] Create event data structure
- [x] Add birthday event generation
- [ ] Add location-based temperature data
- [ ] Add support for images in events
- [ ] Add event categories and filtering

---

### 🚀 **Phase 5: Deployment**

- [ ] Deploy app to Vercel
- [ ] Add SEO metadata
- [ ] Optimize performance
- [ ] Add accessibility improvements

---

## 💬 **Next Steps:**

Does this capture your vision?  
Would you like help creating the **event data structure** or **timeline rendering logic** next?
