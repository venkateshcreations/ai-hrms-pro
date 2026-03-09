import Card from "../../components/ui/Card";
import PageHeader from "../../components/ui/PageHeader";
import { dark, btn } from "../../styles/theme";
const REPORTS=[{title:"Monthly Summary",icon:"📅",desc:"Full month attendance report with dept breakdown"},{title:"Individual Report",icon:"👤",desc:"Per-employee detailed attendance history"},{title:"Overtime Report",icon:"⏱️",desc:"Track overtime hours and compliance"},{title:"Absence Analysis",icon:"📉",desc:"Identify patterns in absenteeism"},{title:"Late Arrival Log",icon:"⚠️",desc:"Employees with consistent late check-ins"},{title:"Remote Work Report",icon:"🏠",desc:"WFH vs office attendance breakdown"}];
export default function AttendanceReports() {
  return (
    <div>
      <PageHeader title="Attendance Reports" subtitle="Generate and download attendance analytics" breadcrumb="Attendance › Reports"/>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:18}}>
        {REPORTS.map(r=>(
          <Card key={r.title} style={{cursor:"pointer"}}>
            <div style={{fontSize:28,marginBottom:12}}>{r.icon}</div>
            <div style={{fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:14,color:dark,marginBottom:6}}>{r.title}</div>
            <div style={{fontSize:13,color:"#888",lineHeight:1.5}}>{r.desc}</div>
            <button style={{...btn(true),marginTop:14,width:"100%",padding:"8px"}}>Generate</button>
          </Card>
        ))}
      </div>
    </div>
  );
}