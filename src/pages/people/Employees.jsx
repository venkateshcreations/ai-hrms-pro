import { useState } from "react";
import Card from "../../components/ui/Card";
import Avatar from "../../components/ui/Avatar";
import StatusChip from "../../components/ui/StatusChip";
import PageHeader from "../../components/ui/PageHeader";
import { EMPLOYEES } from "../../data/employees";
import { accent, accentLight, dark, btn } from "../../styles/theme";

function EmployeeProfile({ employee, onBack }) {
  return (
    <div>
      <PageHeader
        title={employee.name}
        subtitle={employee.role}
        breadcrumb="People › Employees › Profile"
        actions={[
          <button key="back" style={btn(false)} onClick={onBack}>← Back</button>,
          <button key="edit" style={btn(true)}>Edit Profile</button>,
        ]}
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 20 }}>
        <Card>
          <div style={{ textAlign: "center", paddingBottom: 16, borderBottom: "1px solid #F0F0F0", marginBottom: 16 }}>
            <Avatar initials={employee.avatar} index={employee.id} size={72} />
            <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 18, color: dark, marginTop: 12 }}>{employee.name}</div>
            <div style={{ color: "#888", fontSize: 14, marginTop: 2 }}>{employee.role}</div>
            <div style={{ marginTop: 10 }}><StatusChip status={employee.status} /></div>
          </div>
          {[["Department", employee.dept], ["Location", employee.location], ["Manager", employee.manager], ["Joined", employee.joined], ["Email", employee.email], ["Phone", employee.phone]].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #FAFAFA" }}>
              <span style={{ fontSize: 13, color: "#999" }}>{k}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#333" }}>{v}</span>
            </div>
          ))}
        </Card>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <Card>
            <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: 15, fontWeight: 700, color: dark, marginBottom: 16 }}>Employment Details</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[["Employee ID", `EMP-00${employee.id}`], ["Salary", employee.salary], ["Employment Type", "Full-time"], ["Contract", "Permanent"], ["Work Mode", "Hybrid"], ["Notice Period", "30 days"]].map(([k, v]) => (
                <div key={k} style={{ background: "#FAFAFA", borderRadius: 9, padding: "12px 14px" }}>
                  <div style={{ fontSize: 12, color: "#999", marginBottom: 4 }}>{k}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: dark }}>{v}</div>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: 15, fontWeight: 700, color: dark, marginBottom: 14 }}>Performance Overview</h3>
            {[["Q4 2025 Review", "Exceeds Expectations", 92], ["Goal Completion", "87% of set goals", 87], ["Attendance Rate", "96.2%", 96], ["Peer Feedback Score", "4.7 / 5", 94]].map(([label, val, bar]) => (
              <div key={label} style={{ marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <span style={{ fontSize: 13, color: "#555" }}>{label}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: dark }}>{val}</span>
                </div>
                <div style={{ height: 6, background: "#F5F5F5", borderRadius: 3 }}>
                  <div style={{ height: "100%", width: `${bar}%`, background: accent, borderRadius: 3 }} />
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default function Employees() {
  const [search, setSearch]   = useState("");
  const [selected, setSelected] = useState(null);

  if (selected) return <EmployeeProfile employee={selected} onBack={() => setSelected(null)} />;

  const filtered = EMPLOYEES.filter(
    (e) => e.name.toLowerCase().includes(search.toLowerCase()) || e.dept.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <PageHeader
        title="Employees"
        subtitle={`${EMPLOYEES.length} employees across all departments`}
        breadcrumb="People › Employees"
        actions={[<button key="add" style={btn(true)}>+ Add Employee</button>]}
      />
      <Card style={{ marginBottom: 18 }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="🔍  Search employees..."
            style={{ flex: 1, minWidth: 200, border: "1px solid #E6E6E6", borderRadius: 9, padding: "9px 14px", fontSize: 14, outline: "none" }}
          />
          {["All", "Active", "On Leave", "Engineering", "Product", "Design"].map((f) => (
            <button key={f} style={{ background: "#F5F5F5", border: "1px solid #E6E6E6", borderRadius: 7, padding: "7px 13px", fontSize: 12, fontWeight: 600, color: "#555", cursor: "pointer" }}>{f}</button>
          ))}
        </div>
      </Card>
      <Card>
        <table>
          <thead>
            <tr>{["Employee", "Role", "Department", "Location", "Status", "Action"].map((h) => <th key={h}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {filtered.map((e, i) => (
              <tr key={e.id} style={{ borderBottom: "1px solid #FAFAFA" }}>
                <td style={{ padding: "12px 0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Avatar initials={e.avatar} index={i} />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#333" }}>{e.name}</div>
                      <div style={{ fontSize: 12, color: "#aaa" }}>{e.email}</div>
                    </div>
                  </div>
                </td>
                <td><span style={{ fontSize: 13, color: "#555" }}>{e.role}</span></td>
                <td><span style={{ fontSize: 13, color: "#555" }}>{e.dept}</span></td>
                <td><span style={{ fontSize: 13, color: "#555" }}>{e.location}</span></td>
                <td><StatusChip status={e.status} /></td>
                <td>
                  <button onClick={() => setSelected(e)} style={{ background: accentLight, border: "none", borderRadius: 7, padding: "6px 14px", fontSize: 12, fontWeight: 600, color: accent, cursor: "pointer" }}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
