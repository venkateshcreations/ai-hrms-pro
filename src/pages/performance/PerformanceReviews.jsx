import Card from "../../components/ui/Card";
import Avatar from "../../components/ui/Avatar";
import StatusChip from "../../components/ui/StatusChip";
import PageHeader from "../../components/ui/PageHeader";
import { PERFORMANCE_REVIEWS } from "../../data/performance";
import { EMPLOYEES } from "../../data/employees";
import { accent, accentLight, dark, btn } from "../../styles/theme";
export default function PerformanceReviews() {
  return (
    <div>
      <PageHeader title="Performance Reviews" subtitle="Q4 2025 Annual Reviews" breadcrumb="Performance › Reviews" actions={[<button key="a" style={btn(true)}>Start Review Cycle</button>]}/>
      <Card>
        <table>
          <thead><tr>{["Employee","Review Period","Rating","Score","Reviewer","Status",""].map(h=><th key={h}>{h}</th>)}</tr></thead>
          <tbody>{PERFORMANCE_REVIEWS.map((r,i)=>(
            <tr key={i} style={{borderBottom:"1px solid #FAFAFA"}}>
              <td style={{padding:"13px 0"}}><div style={{display:"flex",alignItems:"center",gap:10}}><Avatar initials={EMPLOYEES[i]?.avatar||"??"} index={i}/><span style={{fontSize:14,fontWeight:600,color:"#333"}}>{r.name}</span></div></td>
              <td><span style={{fontSize:13,color:"#555"}}>{r.period}</span></td>
              <td><span style={{fontSize:13,color:"#333"}}>{r.rating}</span></td>
              <td>
                <div style={{width:36,height:36,borderRadius:"50%",background:`conic-gradient(${r.score>80?"#10b981":"#FF8A3D"} ${r.score*3.6}deg,#F0F0F0 0)`,display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <div style={{width:26,height:26,borderRadius:"50%",background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:800,color:dark}}>{r.score}</div>
                </div>
              </td>
              <td><span style={{fontSize:13,color:"#555"}}>{r.reviewer}</span></td>
              <td><StatusChip status={r.status}/></td>
              <td><button style={{background:accentLight,border:"none",borderRadius:7,padding:"6px 14px",fontSize:12,fontWeight:600,color:accent,cursor:"pointer"}}>View</button></td>
            </tr>
          ))}</tbody>
        </table>
      </Card>
    </div>
  );
}