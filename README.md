<h1 align="center">
  <br>
  ⬡ NovaDash
  <br>
</h1>

<h4 align="center">A full-featured admin analytics dashboard built with React 18 + TypeScript — zero external UI libraries.</h4>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5.6-3178c6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5.4-646cff?style=flat-square&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" />
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Structure</a>
</p>

---

## Features

- **Custom SVG Charts** — Line chart with smooth bezier curves and bar chart, written from scratch without Recharts or Chart.js. Hover tooltips, grid lines, and animated dots included.
- **Dark / Light Mode** — Full theme switch using CSS custom properties. Preference persists across the session.
- **Collapsible Sidebar** — Smooth width animation. Collapses to icon-only mode on smaller viewports.
- **Sortable Data Table** — Click any column header to sort ascending/descending. Paginated to 6 rows per page.
- **Live Search** — Filters the transactions table in real-time as you type. Powered by `useMemo` for zero unnecessary re-renders.
- **KPI Stats Cards** — 4 metric cards with trend indicators (up/down), color-coded per category.
- **Fully Responsive** — Grid collapses cleanly from 4-column stats → 2-column → 1-column on mobile.

## Tech Stack

| Layer | Technology |
|---|---|
| UI | React 18 (functional components + hooks) |
| Language | TypeScript 5.6 (strict mode) |
| Build | Vite 5.4 |
| Styling | CSS custom properties (no Tailwind, no MUI) |
| Charts | Custom SVG — hand-coded bezier curves |
| State | `useState`, `useMemo` |
| Fonts | Inter (Google Fonts) |

## Getting Started

```bash
# Clone the repo
git clone https://github.com/parthlashkari/nova-dash.git
cd nova-dash

# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:5173

# Type-check without building
npm run type-check

# Production build
npm run build
npm run preview
```

**Requirements:** Node.js 18+ and npm 9+

## Project Structure

```
src/
├── components/
│   ├── StatsCard.tsx     # KPI metric card with trend badge
│   ├── LineChart.tsx     # Custom SVG line chart with bezier smoothing
│   ├── BarChart.tsx      # Custom SVG bar chart with hover tooltips
│   └── DataTable.tsx     # Sortable, paginated data table
├── data.ts               # Mock stats, chart data, and transactions
├── types.ts              # All TypeScript interfaces and types
├── App.tsx               # Root layout: sidebar + topbar + page
└── App.css               # All styles with light/dark CSS variables
```

## Key Implementation Details

### Custom SVG Line Chart
The line chart uses **cubic bezier curves** (`C` path command) to create smooth arcs between data points — the same technique used by Recharts internally. Control points are calculated as the midpoint between adjacent X coordinates, giving a natural-looking smooth line without any library.

### Dark / Light Theme
Themes are implemented with CSS `custom properties` scoped to `.dark` class on the root element. A single `setTheme` state toggle switches the entire visual theme in one re-render.

### Zero-Dependency Charts
Avoiding chart libraries reduces the bundle by ~80KB gzipped and demonstrates deeper SVG and math knowledge — a meaningful differentiator in frontend interviews.

## License

MIT © [Parth Lashkari](https://github.com/parthlashkari)
