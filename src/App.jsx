import { useState } from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import { NOTIFICATIONS_DATA } from "./data/notifications";

// Pages
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/people/Employees";
import Departments from "./pages/people/Departments";
import Teams from "./pages/people/Teams";
import EmployeeDirectory from "./pages/people/EmployeeDirectory";
import JobOpenings from "./pages/recruitment/JobOpenings";
import CandidatePipeline from "./pages/recruitment/CandidatePipeline";
import ResumeScreening from "./pages/recruitment/ResumeScreening";
import Interviews from "./pages/recruitment/Interviews";
import Offers from "./pages/recruitment/Offers";
import DailyAttendance from "./pages/attendance/DailyAttendance";
import Timesheets from "./pages/attendance/Timesheets";
import ShiftManagement from "./pages/attendance/ShiftManagement";
import AttendanceReports from "./pages/attendance/AttendanceReports";
import ApplyLeave from "./pages/leave/ApplyLeave";
import LeaveRequests from "./pages/leave/LeaveRequests";
import LeaveCalendar from "./pages/leave/LeaveCalendar";
import LeavePolicies from "./pages/leave/LeavePolicies";
import SalaryProcessing from "./pages/payroll/SalaryProcessing";
import Payslips from "./pages/payroll/Payslips";
import Reimbursements from "./pages/payroll/Reimbursements";
import TaxReports from "./pages/payroll/TaxReports";
import Goals from "./pages/performance/Goals";
import PerformanceReviews from "./pages/performance/PerformanceReviews";
import Feedback360 from "./pages/performance/Feedback360";
import Promotions from "./pages/performance/Promotions";
import AIAssistant from "./pages/ai/AIAssistant";
import Reports from "./pages/reports/Reports";
import Notifications from "./pages/notifications/Notifications";
import Settings from "./pages/settings/Settings";

// ── Page registry ──────────────────────────────────────────────────────────
const PAGE_REGISTRY = {
  dashboard:            Dashboard,
  employees:            Employees,
  departments:          Departments,
  teams:                Teams,
  "employee-directory": EmployeeDirectory,
  "job-openings":       JobOpenings,
  "candidate-pipeline": CandidatePipeline,
  "resume-screening":   ResumeScreening,
  interviews:           Interviews,
  offers:               Offers,
  "daily-attendance":   DailyAttendance,
  timesheets:           Timesheets,
  "shift-management":   ShiftManagement,
  "attendance-reports": AttendanceReports,
  "apply-leave":        ApplyLeave,
  "leave-requests":     LeaveRequests,
  "leave-calendar":     LeaveCalendar,
  "leave-policies":     LeavePolicies,
  "salary-processing":  SalaryProcessing,
  payslips:             Payslips,
  reimbursements:       Reimbursements,
  "tax-reports":        TaxReports,
  goals:                Goals,
  "performance-reviews":PerformanceReviews,
  "360-feedback":       Feedback360,
  promotions:           Promotions,
  ai:                   AIAssistant,
  reports:              Reports,
  notifications:        Notifications,
  settings:             Settings,
};

export default function App() {
  const [page,          setPage]          = useState("dashboard");
  const [collapsed,     setCollapsed]     = useState(false);
  const [expandedNav,   setExpandedNav]   = useState(null);
  const [notifications, setNotifications] = useState(NOTIFICATIONS_DATA);

  const unread     = notifications.filter((n) => !n.read).length;
  const sidebarW   = collapsed ? 68 : 258;
  const ActivePage = PAGE_REGISTRY[page] || Dashboard;

  // Pages that need shared notification state
  const pageProps =
    page === "notifications"
      ? { notifications, setNotifications }
      : page === "dashboard"
      ? { setPage }
      : {};

  return (
    <div style={{ fontFamily: "'DM Sans','Sora',sans-serif", background: "#F7F7F8", minHeight: "100vh" }}>
      <Header
        collapsed={collapsed}
        unread={unread}
        onNavigate={setPage}
      />

      <div style={{ display: "flex", marginTop: 58, minHeight: "calc(100vh - 58px)" }}>
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          page={page}
          setPage={setPage}
          expandedNav={expandedNav}
          setExpandedNav={setExpandedNav}
          unread={unread}
        />

        <main
          style={{
            marginLeft:  sidebarW,
            flex:        1,
            padding:     "26px 30px",
            transition:  "margin-left .28s cubic-bezier(.4,0,.2,1)",
            minWidth:    0,
            overflowX:   "hidden",
          }}
        >
          <ActivePage {...pageProps} />
        </main>
      </div>
    </div>
  );
}
