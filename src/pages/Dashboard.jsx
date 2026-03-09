import Card from "../components/ui/Card";
import Avatar from "../components/ui/Avatar";
import StatusChip from "../components/ui/StatusChip";
import { EMPLOYEES } from "../data/employees";
import { accent, accentLight, dark, btn } from "../styles/theme";

const PIPELINE = [
  { stage: "Applied",     count: 142, color: "#FF8A3D" },
  { stage: "Screening",   count: 89,  color: "#fbbf24" },
  { stage: "Shortlisted", count: 45,  color: "#60a5fa" },
  { stage: "Interview",   count: 23,  color: "#a78bfa" },
  { stage: "Offer",       count: 9,   color: "#34d399" },
  { stage: "Hired",       count: 5,   color: "#10b981" },
];

const BARS = [
  { day: "Mon", p: 92 }, { day: "Tue", p: 88 },
  { day: "Wed", p: 95 }, { day: "Thu", p: 90 }, { day: "Fri", p: 84 },
];

const AI_INSIGHTS = [
  { icon: "⚠️", title: "Attrition Risk",    desc: "3 employees in Engineering show burnout indicators" },
  { icon: "⭐", title: "High Performers",   desc: "7 employees flagged for potential promotion" },
  { icon: "🔮", title: "Hiring Forecast",   desc: "Predicted 15 new hires needed in Q3 2026" },
];

export default function Dashboard({ setPage }) {
  return (
    <div>
      {/* Page title */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
          <span style={{ fontSize: 12, color: "#aaa" }}>AI HRMS Pro</span>
          <span style={{ color: "#ddd" }}>›</span>
          <span style={{ fontSize: 12, color: accent, fontWeight: 600 }}>Dashboard</span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div>
            <h1 style={{ fontFamily: "'Sora',sans-serif", fontSize: 26, fontWeight: 800, color: dark, marginBottom: 4 }}>
              Good morning, Arjun 👋
            </h1>
            <p style={{ color: "#888", fontSize: 14 }}>Here's what's happening across your workforce today.</p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button style={btn(false)}>Export Report</button>
            <button style={btn(true)} onClick={() => setPage("employees")}>+ Add Employee</button>
          </div>
        </div>
      </div>

      {/* KPI stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18, marginBottom: 24 }}>
        {[
          { label: "Total Employees",   value: "1,284", delta: "+12 this month", color: "#FF8A3D", icon: "👥" },
          { label: "Open Positions",    value: "38",    delta: "12 urgent",      color: "#6366f1", icon: "🎯" },
          { label: "On Leave Today",    value: "47",    delta: "3.7% of staff",  color: "#10b981", icon: "🌿" },
          { label: "Payroll This Month",value: "$2.4M", delta: "+2.1% vs last",  color: "#f43f5e", icon: "💰" },
        ].map((s) => (
          <div
            key={s.label}
            className="hov-card"
            style={{ background: "#fff", borderRadius: 14, padding: "20px 22px", boxShadow: "0 1px 6px rgba(0,0,0,0.05)", border: "1px solid #F0F0F0", cursor: "default" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <span style={{ fontSize: 22 }}>{s.icon}</span>
              <span style={{ background: s.color + "18", color: s.color, fontSize: 11, fontWeight: 600, padding: "3px 8px", borderRadius: 6 }}>{s.delta}</span>
            </div>
            <div style={{ fontSize: 28, fontFamily: "'Sora',sans-serif", fontWeight: 800, color: dark, marginBottom: 3 }}>{s.value}</div>
            <div style={{ fontSize: 13, color: "#888" }}>{s.label}</div>
            <div style={{ height: 3, borderRadius: 2, background: s.color + "22", marginTop: 14 }}>
              <div style={{ height: "100%", width: "68%", borderRadius: 2, background: s.color }} />
            </div>
          </div>
        ))}
      </div>

      {/* Mid row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 24 }}>
        <Card>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
            <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: 15, fontWeight: 700, color: dark }}>Recruitment Pipeline</h3>
            <span style={{ fontSize: 12, color: accent, fontWeight: 600, cursor: "pointer" }} onClick={() => setPage("candidate-pipeline")}>View all →</span>
          </div>
          {PIPELINE.map((p) => (
            <div key={p.stage} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 11 }}>
              <span style={{ fontSize: 12, color: "#888", width: 72, flexShrink: 0 }}>{p.stage}</span>
              <div style={{ flex: 1, height: 8, background: "#F5F5F5", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${(p.count / 142) * 100}%`, background: p.color, borderRadius: 4 }} />
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#333", width: 30, textAlign: "right" }}>{p.count}</span>
            </div>
          ))}
        </Card>

        <Card>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
            <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: 15, fontWeight: 700, color: dark }}>Weekly Attendance</h3>
            <span style={{ fontSize: 12, color: accent, fontWeight: 600, cursor: "pointer" }} onClick={() => setPage("daily-attendance")}>View →</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 14, height: 110 }}>
            {BARS.map((b) => (
              <div key={b.day} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <div style={{ width: "100%", position: "relative", height: 80 }}>
                  <div style={{ width: "100%", borderRadius: "6px 6px 0 0", background: accentLight, height: `${100 - b.p}%`, position: "absolute", bottom: 0 }} />
                  <div style={{ width: "100%", borderRadius: "6px 6px 0 0", background: `linear-gradient(180deg,${accent},#ff6b1a)`, height: `${b.p}%`, position: "absolute", bottom: 0 }} />
                </div>
                <span style={{ fontSize: 12, color: "#888" }}>{b.day}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}><div style={{ width: 10, height: 10, borderRadius: 2, background: accent }} /><span style={{ fontSize: 12, color: "#666" }}>Present</span></div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}><div style={{ width: 10, height: 10, borderRadius: 2, background: accentLight }} /><span style={{ fontSize: 12, color: "#666" }}>Absent</span></div>
          </div>
        </Card>
      </div>

      {/* Bottom row */}
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 18 }}>
        <Card>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
            <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: 15, fontWeight: 700, color: dark }}>Recent Employees</h3>
            <span style={{ fontSize: 12, color: accent, fontWeight: 600, cursor: "pointer" }} onClick={() => setPage("employees")}>View all →</span>
          </div>
          <table>
            <thead>
              <tr>{["Employee", "Department", "Status"].map((h) => <th key={h}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {EMPLOYEES.slice(0, 5).map((e, i) => (
                <tr key={e.id} style={{ borderBottom: "1px solid #FAFAFA" }}>
                  <td style={{ padding: "11px 0" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <Avatar initials={e.avatar} index={i} />
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: "#333" }}>{e.name}</div>
                        <div style={{ fontSize: 12, color: "#aaa" }}>{e.role}</div>
                      </div>
                    </div>
                  </td>
                  <td><span style={{ fontSize: 13, color: "#666" }}>{e.dept}</span></td>
                  <td><StatusChip status={e.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {/* AI Insights */}
          <div style={{ background: "linear-gradient(135deg,#1a1a2e,#2d1b4e)", borderRadius: 14, padding: "20px 22px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <span style={{ fontSize: 16, color: accent }}>✦</span>
              <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: 14, fontWeight: 700, color: "#fff" }}>AI Insights</h3>
              <span style={{ background: accent, color: "white", fontSize: 10, padding: "1px 6px", borderRadius: 10, fontWeight: 700, marginLeft: "auto" }}>LIVE</span>
            </div>
            {AI_INSIGHTS.map((ins) => (
              <div key={ins.title} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 9, padding: "10px 12px", marginBottom: 8, display: "flex", gap: 10, border: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>{ins.icon}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 2 }}>{ins.title}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>{ins.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <Card style={{ flex: 1 }}>
            <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: 14, fontWeight: 700, color: dark, marginBottom: 14 }}>Quick Stats</h3>
            {[
              { label: "Avg Attendance Rate",   value: "91.2%", bar: 91,   color: "#10b981" },
              { label: "Positions Filled (Mar)", value: "5/38",  bar: 13,   color: "#6366f1" },
              { label: "Payroll Accuracy",       value: "99.8%", bar: 99.8, color: accent },
              { label: "Employee Satisfaction",  value: "87%",   bar: 87,   color: "#f43f5e" },
            ].map((q) => (
              <div key={q.label} style={{ marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <span style={{ fontSize: 13, color: "#555" }}>{q.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: dark }}>{q.value}</span>
                </div>
                <div style={{ height: 6, background: "#F5F5F5", borderRadius: 3 }}>
                  <div style={{ height: "100%", width: `${q.bar}%`, background: q.color, borderRadius: 3 }} />
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}
