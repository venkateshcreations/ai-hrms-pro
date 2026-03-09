import Card from "../../components/ui/Card";
import Avatar from "../../components/ui/Avatar";
import StatusChip from "../../components/ui/StatusChip";
import PageHeader from "../../components/ui/PageHeader";
import { EMPLOYEES } from "../../data/employees";
import { dark, accentLight, accent, btn } from "../../styles/theme";
export default function Timesheets() {
  return (
    <div>
      <PageHeader title="Timesheets" subtitle="Weekly work hour records" breadcrumb="Attendance › Timesheets" actions={[<button key="a" style={btn(true)}>Submit Timesheet</button>]}/>
      <Card>
        <div style={{display:"flex",gap:16,alignItems:"center",marginBottom:20}}>
          <button style={{background:accentLight,border:`1px solid ${accent}`,color:accent,borderRadius:8,padding:"7px 16px",fontSize:13,fontWeight:600,cursor:"pointer"}}>← Prev Week</button>
          <span style={{fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:15,color:dark}}>Mar 2 – Mar 8, 2026</span>
          <button style={{background:accentLight,border:`1px solid ${accent}`,color:accent,borderRadius:8,padding:"7px 16px",fontSize:13,fontWeight:600,cursor:"pointer"}}>Next Week →</button>
        </div>
        <table>
          <thead><tr>{["Employee","Mon","Tue","Wed","Thu","Fri","Total","Status"].map(h=><th key={h}>{h}</th>)}</tr></thead>
          <tbody>{EMPLOYEES.slice(0,5).map((e,i)=>{
            const days=[8,8,9,8,7];
            return (
              <tr key={e.id} style={{borderBottom:"1px solid #FAFAFA"}}>
                <td style={{padding:"12px 0"}}><div style={{display:"flex",alignItems:"center",gap:10}}><Avatar initials={e.avatar} index={i}/><span style={{fontSize:14,fontWeight:600,color:"#333"}}>{e.name}</span></div></td>
                {days.map((d,j)=><td key={j}><span style={{fontSize:13,color:"#555"}}>{d}h</span></td>)}
                <td><span style={{fontSize:14,fontWeight:800,color:dark}}>{days.reduce((a,b)=>a+b,0)}h</span></td>
                <td><StatusChip status="Approved"/></td>
              </tr>
            );
          })}</tbody>
        </table>
      </Card>
    </div>
  );
}