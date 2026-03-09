import Card from "../../components/ui/Card";
import StatusChip from "../../components/ui/StatusChip";
import PageHeader from "../../components/ui/PageHeader";
import StatRow from "../../components/ui/StatRow";
import { accent, accentLight, dark, btn } from "../../styles/theme";
const DATA=[{candidate:"Aryan Kapoor",role:"Sr. React Developer",date:"Mar 10, 2026",time:"10:00 AM",type:"Technical",interviewer:"Priya Sharma",status:"Scheduled"},{candidate:"Emily Zhang",role:"Product Designer",date:"Mar 11, 2026",time:"2:30 PM",type:"Design Review",interviewer:"Aiko Tanaka",status:"Scheduled"},{candidate:"Nadia Petrov",role:"HR Business Partner",date:"Mar 8, 2026",time:"11:00 AM",type:"HR Final",interviewer:"Fatima Al-Hassan",status:"Completed"},{candidate:"James O'Neill",role:"Data Scientist",date:"Mar 13, 2026",time:"3:00 PM",type:"Case Study",interviewer:"Carlos Rivera",status:"Scheduled"}];
export default function Interviews() {
  return (
    <div>
      <PageHeader title="Interviews" subtitle="Upcoming and past interviews" breadcrumb="Recruitment › Interviews" actions={[<button key="a" style={btn(true)}>+ Schedule Interview</button>]}/>
      <StatRow stats={[{icon:"📅",label:"Scheduled",value:"8"},{icon:"✅",label:"Completed",value:"23"},{icon:"⏳",label:"Pending Feedback",value:"3"},{icon:"❌",label:"Cancelled",value:"1"}]}/>
      <Card>
        <table>
          <thead><tr>{["Candidate","Role","Date & Time","Type","Interviewer","Status",""].map(h=><th key={h}>{h}</th>)}</tr></thead>
          <tbody>{DATA.map((iv,i)=>(
            <tr key={i} style={{borderBottom:"1px solid #FAFAFA"}}>
              <td style={{padding:"13px 0"}}><div style={{fontWeight:600,fontSize:14,color:dark}}>{iv.candidate}</div></td>
              <td><span style={{fontSize:13,color:"#555"}}>{iv.role}</span></td>
              <td><div style={{fontSize:13,fontWeight:600,color:"#333"}}>{iv.date}</div><div style={{fontSize:12,color:"#888"}}>{iv.time}</div></td>
              <td><span style={{background:"#EEF2FF",color:"#4338ca",padding:"3px 9px",borderRadius:8,fontSize:12,fontWeight:600}}>{iv.type}</span></td>
              <td><span style={{fontSize:13,color:"#555"}}>{iv.interviewer}</span></td>
              <td><StatusChip status={iv.status}/></td>
              <td><button style={{background:accentLight,border:"none",borderRadius:7,padding:"6px 14px",fontSize:12,fontWeight:600,color:accent,cursor:"pointer"}}>Details</button></td>
            </tr>
          ))}</tbody>
        </table>
      </Card>
    </div>
  );
}