export const NAV = [
  { id: "dashboard", icon: "⬛", label: "Dashboard" },
  {
    id: "people", icon: "👥", label: "People",
    children: [
      { id: "employees",          label: "Employees"         },
      { id: "departments",        label: "Departments"       },
      { id: "teams",              label: "Teams"             },
      { id: "employee-directory", label: "Employee Directory"},
    ],
  },
  {
    id: "recruitment", icon: "🎯", label: "Recruitment",
    children: [
      { id: "job-openings",       label: "Job Openings"          },
      { id: "candidate-pipeline", label: "Candidate Pipeline"    },
      { id: "resume-screening",   label: "Resume Screening (AI)" },
      { id: "interviews",         label: "Interviews"            },
      { id: "offers",             label: "Offers"                },
    ],
  },
  {
    id: "attendance", icon: "🕐", label: "Attendance",
    children: [
      { id: "daily-attendance",   label: "Daily Attendance"  },
      { id: "timesheets",         label: "Timesheets"        },
      { id: "shift-management",   label: "Shift Management"  },
      { id: "attendance-reports", label: "Attendance Reports"},
    ],
  },
  {
    id: "leave", icon: "🌿", label: "Leave Management",
    children: [
      { id: "apply-leave",    label: "Apply Leave"    },
      { id: "leave-requests", label: "Leave Requests" },
      { id: "leave-calendar", label: "Leave Calendar" },
      { id: "leave-policies", label: "Leave Policies" },
    ],
  },
  {
    id: "payroll", icon: "💰", label: "Payroll",
    children: [
      { id: "salary-processing", label: "Salary Processing" },
      { id: "payslips",          label: "Payslips"          },
      { id: "reimbursements",    label: "Reimbursements"    },
      { id: "tax-reports",       label: "Tax Reports"       },
    ],
  },
  {
    id: "performance", icon: "📈", label: "Performance",
    children: [
      { id: "goals",               label: "Goals / OKR"        },
      { id: "performance-reviews", label: "Performance Reviews" },
      { id: "360-feedback",        label: "360 Feedback"        },
      { id: "promotions",          label: "Promotions"          },
    ],
  },
  { id: "ai",            icon: "✦",  label: "AI Assistant"      },
  { id: "reports",       icon: "📊", label: "Reports & Analytics"},
  { id: "notifications", icon: "🔔", label: "Notifications"     },
  { id: "settings",      icon: "⚙️", label: "Settings"          },
];
