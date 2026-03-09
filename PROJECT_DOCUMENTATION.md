# AI HRMS Pro - Project Documentation

## 1. Project Overview
**AI HRMS Pro** is a comprehensive, next-generation Human Resource Management System powered by AI (Anthropic Claude API). Built with React 18, it provides a unified platform for managing all aspects of the employee lifecycle, from recruitment to performance evaluation.

### Key Highlights
- **Conversational AI Assistant:** Built-in AI to support HR queries.
- **AI-Powered Resume Screening:** Automates candidate evaluation.
- **Modern UI/UX:** Clean, intuitive interface with a distinct color palette (`#FF8A3D` accent, `#1a1a2e` dark).
- **Comprehensive Modules:** Covers People, Recruitment, Attendance, Leave, Payroll, and Performance.

---

## 2. Tech Stack Setup
- **Frontend Framework:** React 18, utilizing JSX syntax.
- **Routing:** React Router v6 (`react-router-dom`).
- **Styling:** Inline styles + CSS (No Tailwind dependency; uses global themes and resets).
- **Fonts:** DM Sans (body) and Sora (headings) via Google Fonts.
- **AI Integration:** Direct Anthropic Messages API (`claude-sonnet-4-20250514`).
- **Build Tool:** Create React App (`react-scripts`).

---

## 3. Architecture & Structure

The codebase is organized into modular directories under `src/`:

```
src/
├── App.jsx                 # Main application router and state wrapper
├── index.js                # React DOM entry point
├── components/             # Reusable UI components
│   ├── layout/             # Header, Sidebar
│   └── ui/                 # Avatar, Card, PageHeader, StatRow, StatusChip
├── data/                   # Mock data for various modules (e.g., employees, leave)
├── hooks/                  # Custom React hooks (e.g., useAI)
├── pages/                  # Page-level components, organized by module
└── styles/                 # Global CSS and theme definitions
```

---

## 4. Core Modules & Pages

The application defines a comprehensive `PAGE_REGISTRY` in `App.jsx`, mapping logical page keys to their respective components:

### 🧑‍💼 People Management
- `dashboard` -> `Dashboard.jsx` (Central overview)
- `employees` -> `Employees.jsx` (Employee listing)
- `employee-directory` -> `EmployeeDirectory.jsx` (Visual employee grid/cards)
- `departments` & `teams` -> `Departments.jsx`, `Teams.jsx`

### 🎯 Recruitment
- `job-openings` -> `JobOpenings.jsx`
- `candidate-pipeline` -> `CandidatePipeline.jsx` (Applicant tracking)
- `resume-screening` -> `ResumeScreening.jsx` (AI-powered resume analysis)
- `interviews` & `offers` -> Post-screening phases

### 📅 Attendance & Leave
- `daily-attendance`, `timesheets`, `shift-management`, `attendance-reports` -> Attendance tracking and reporting.
- `apply-leave`, `leave-requests`, `leave-calendar`, `leave-policies` -> Comprehensive leave management suite.

### 💰 Payroll
- `salary-processing`, `payslips`, `reimbursements`, `tax-reports` -> Compensation tracking.

### 📈 Performance
- `goals`, `performance-reviews`, `360-feedback`, `promotions` -> Multi-faceted employee evaluation tools.

### 🤖 AI Additions
- `ai` -> `AIAssistant.jsx` (Dedicated chat interface for HR automation and insights)

### ⚙️ Utilities
- `notifications` -> `Notifications.jsx`
- `reports` -> `Reports.jsx`
- `settings` -> `Settings.jsx`

---

## 5. Global State & Layout
The `App.jsx` handles global state using `useState`:
- **Page State (`page`)**: Controls the currently active view based on `PAGE_REGISTRY`.
- **Sidebar State (`collapsed`, `expandedNav`)**: Manages the visual state of the main navigation sidebar.
- **Notifications State**: Shared context primarily used by the `Header` and `Notifications` pages to track unread alerts.

The main layout consists of a fixed `Header`, a flexible `Sidebar` (which can collapse from 258px to 68px width), and an active `<main>` content plane that adapts to the view selection.

---

## 6. How to Run Locally

1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Start the development server:**
   \`\`\`bash
   npm start
   \`\`\`
   The app will open automatically at `http://localhost:3000`.

3. **Production Build:**
   \`\`\`bash
   npm run build
   \`\`\`

---

## 7. AI Security Note
Currently, the Anthropic API key is handled directly by the frontend/environment (e.g., inside the Claude.ai artifact). For production, this should be moved to a secure backend proxy to prevent exposing the API token.
