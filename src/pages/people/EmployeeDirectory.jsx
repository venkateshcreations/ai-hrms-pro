import Card from "../../components/ui/Card";
import Avatar from "../../components/ui/Avatar";
import StatusChip from "../../components/ui/StatusChip";
import PageHeader from "../../components/ui/PageHeader";
import { EMPLOYEES } from "../../data/employees";
import { accent, accentLight, dark } from "../../styles/theme";
export default function EmployeeDirectory() {
  return (
    <div>
      <PageHeader title="Employee Directory" subtitle="Find and connect with colleagues" breadcrumb="People › Directory" />
      <Card style={{ marginBottom:18 }}>
        <input placeholder="🔍  Search by name, role, department, or skill..." style={{ width:"100%",border:"1px solid #E6E6E6",borderRadius:9,padding:"11px 16px",fontSize:14,outline:"none" }} />
      </Card>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:16 }}>
        {EMPLOYEES.map((e,i) => (
          <Card key={e.id} style={{ textAlign:"center", padding:"24px 18px" }}>
            <Avatar initials={e.avatar} index={i} size={56} />
            <div style={{ fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:14,color:dark,marginTop:12 }}>{e.name}</div>
            <div style={{ fontSize:12,color:"#888",marginTop:3 }}>{e.role}</div>
            <div style={{ fontSize:12,color:accent,marginTop:2 }}>{e.dept}</div>
            <div style={{ marginTop:10 }}><StatusChip status={e.status} /></div>
            <div style={{ marginTop:14,display:"flex",gap:8,justifyContent:"center" }}>
              <button style={{ background:"#F5F5F5",border:"none",borderRadius:7,padding:"6px 12px",fontSize:12,cursor:"pointer" }}>✉️</button>
              <button style={{ background:"#F5F5F5",border:"none",borderRadius:7,padding:"6px 12px",fontSize:12,cursor:"pointer" }}>📞</button>
              <button style={{ background:accentLight,border:"none",borderRadius:7,padding:"6px 12px",fontSize:12,fontWeight:600,color:accent,cursor:"pointer" }}>View</button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
