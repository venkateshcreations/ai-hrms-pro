# 🤖 AI HRMS Pro

> Next-generation AI-powered HR Management System built with React + Claude AI

![AI HRMS Pro](https://img.shields.io/badge/AI%20Powered-Claude%20AI-FF8A3D?style=flat-square)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat-square&logo=react)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## ✨ Features

### 🏢 Core HR Modules
| Module | Pages |
|--------|-------|
| **People** | Employees, Departments, Teams, Directory |
| **Recruitment** | Job Openings, Candidate Pipeline, AI Resume Screening, Interviews, Offers |
| **Attendance** | Daily Attendance, Timesheets, Shift Management, Reports |
| **Leave** | Apply Leave, Requests, Calendar, Policies |
| **Payroll** | Salary Processing, Payslips, Reimbursements, Tax Reports |
| **Performance** | Goals/OKR, Reviews, 360° Feedback, Promotions |

### 🤖 AI-Powered Capabilities
- **AI HR Assistant** — Full conversational AI powered by Claude (Anthropic)
- **Resume Screening** — AI analyses resumes and scores candidates automatically
- **Live AI Insights** — Attrition risk, high performer detection, hiring forecasts

### 📐 Design System
- **Colors:** `#FF8A3D` accent, `#1a1a2e` dark, clean white cards
- **Fonts:** DM Sans (body) + Sora (headings)
- **Components:** Reusable Card, Avatar, StatusChip, PageHeader, StatRow

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/ai-hrms-pro.git
cd ai-hrms-pro

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
ai-hrms-pro/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx                        # Root component & page router
│   ├── index.js                       # React entry point
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx             # Top navigation bar
│   │   │   └── Sidebar.jsx            # Left sidebar with nav
│   │   └── ui/
│   │       ├── Avatar.jsx             # Initials avatar component
│   │       ├── Card.jsx               # Standard card container
│   │       ├── PageHeader.jsx         # Breadcrumb + title row
│   │       ├── StatRow.jsx            # KPI stat cards row
│   │       └── StatusChip.jsx         # Colour-coded status badge
│   ├── data/
│   │   ├── departments.js             # Departments & teams data
│   │   ├── employees.js               # Employee records
│   │   ├── leave.js                   # Leave requests & policies
│   │   ├── navigation.js              # Sidebar nav config
│   │   ├── notifications.js           # Notification feed data
│   │   ├── payroll.js                 # Payslips & reimbursements
│   │   ├── performance.js             # Goals & reviews
│   │   └── recruitment.js             # Jobs & candidates
│   ├── hooks/
│   │   └── useAI.js                   # Claude API custom hook
│   ├── pages/
│   │   ├── Dashboard.jsx              # Main dashboard
│   │   ├── ai/
│   │   │   └── AIAssistant.jsx        # Full AI chat page
│   │   ├── attendance/
│   │   │   ├── AttendanceReports.jsx
│   │   │   ├── DailyAttendance.jsx
│   │   │   ├── ShiftManagement.jsx
│   │   │   └── Timesheets.jsx
│   │   ├── leave/
│   │   │   ├── ApplyLeave.jsx
│   │   │   ├── LeaveCalendar.jsx
│   │   │   ├── LeavePolicies.jsx
│   │   │   └── LeaveRequests.jsx
│   │   ├── notifications/
│   │   │   └── Notifications.jsx
│   │   ├── payroll/
│   │   │   ├── Payslips.jsx
│   │   │   ├── Reimbursements.jsx
│   │   │   ├── SalaryProcessing.jsx
│   │   │   └── TaxReports.jsx
│   │   ├── people/
│   │   │   ├── Departments.jsx
│   │   │   ├── EmployeeDirectory.jsx
│   │   │   ├── Employees.jsx
│   │   │   └── Teams.jsx
│   │   ├── performance/
│   │   │   ├── Feedback360.jsx
│   │   │   ├── Goals.jsx
│   │   │   ├── PerformanceReviews.jsx
│   │   │   └── Promotions.jsx
│   │   ├── recruitment/
│   │   │   ├── CandidatePipeline.jsx
│   │   │   ├── Interviews.jsx
│   │   │   ├── JobOpenings.jsx
│   │   │   ├── Offers.jsx
│   │   │   └── ResumeScreening.jsx
│   │   ├── reports/
│   │   │   └── Reports.jsx
│   │   └── settings/
│   │       └── Settings.jsx
│   └── styles/
│       ├── global.css                 # Global resets & animations
│       └── theme.js                   # Design tokens & style helpers
└── package.json
```

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, JSX |
| Styling | Inline styles + CSS (no Tailwind dependency) |
| AI | Anthropic Claude API (`claude-sonnet-4-20250514`) |
| Fonts | Google Fonts (DM Sans + Sora) |
| Build | Create React App |

---

## 🔑 AI Integration

The app uses the **Anthropic Messages API** directly from the browser for:

1. **AI HR Assistant** (`src/pages/ai/AIAssistant.jsx`) — conversational chat
2. **Resume Screening** (`src/pages/recruitment/ResumeScreening.jsx`) — structured JSON analysis
3. Custom hook: `src/hooks/useAI.js`

The API key is handled by the Claude.ai artifact environment. For standalone deployment, set your key in the fetch headers or use a backend proxy.

---

## 📋 Specification

Built from: `ai-hrms-system-specification-2026-updated.md`

All 20 specification sections implemented including:
- ✅ Microservices-ready component architecture
- ✅ Full color palette (`#FF8A3D`, `#F5F5F5`, `#333333`, `#E6E6E6`)
- ✅ Inter/DM Sans typography hierarchy
- ✅ Responsive sidebar (280px expanded / 72px collapsed)
- ✅ All 11 primary navigation modules
- ✅ 28 sub-pages fully built with content

---

## 📄 License

MIT © 2026 AI HRMS Pro
