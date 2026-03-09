import Card from "../../components/ui/Card";
import StatusChip from "../../components/ui/StatusChip";
import PageHeader from "../../components/ui/PageHeader";
import StatRow from "../../components/ui/StatRow";
import { JOBS } from "../../data/recruitment";
import { accent, accentLight, dark, btn } from "../../styles/theme";
export default function JobOpenings() {
  return (
    <div>
      <PageHeader title="Job Openings" subtitle="Manage all active job postings" breadcrumb="Recruitment › Job Openings" actions={[<button key="a" style={btn(true)}>+ Post New Job</button>]} />
      <StatRow stats={[{icon:"📋",label:"Total Openings",value:"38"},{icon:"🚨",label:"Urgent",value:"12"},{icon:"👤",label:"Total Applicants",value:"312"},{icon:"✅",label:"Positions Filled",value:"5",up:true}]} />
      <Card>
        <table>
          <thead><tr>{["Position","Dept","Location","Applicants","Posted","Status",""].map(h=><th key={h}>{h}</th>)}</tr></thead>
          <tbody>
            {JOBS.map(j=>(
              <tr key={j.id} style={{borderBottom:"1px solid #FAFAFA"}}>
                <td style={{padding:"13px 0"}}><div style={{fontWeight:600,fontSize:14,color:dark}}>{j.title}</div>{j.urgent&&<span style={{fontSize:10,background:"#fee2e2",color:"#991b1b",padding:"1px 7px",borderRadius:8,fontWeight:700}}>URGENT</span>}</td>
                <td><span style={{fontSize:13,color:"#555"}}>{j.dept}</span></td>
                <td><span style={{fontSize:13,color:"#555"}}>{j.location}</span></td>
                <td><span style={{fontSize:14,fontWeight:700,color:dark}}>{j.applicants}</span></td>
                <td><span style={{fontSize:13,color:"#888"}}>{j.posted}</span></td>
                <td><StatusChip status={j.status}/></td>
                <td><button style={{background:accentLight,border:"none",borderRadius:7,padding:"6px 14px",fontSize:12,fontWeight:600,color:accent,cursor:"pointer"}}>Manage</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}