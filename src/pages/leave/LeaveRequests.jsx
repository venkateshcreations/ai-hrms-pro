import { useState } from "react";
import Card from "../../components/ui/Card";
import Avatar from "../../components/ui/Avatar";
import StatusChip from "../../components/ui/StatusChip";
import PageHeader from "../../components/ui/PageHeader";
import StatRow from "../../components/ui/StatRow";
import { LEAVE_REQUESTS } from "../../data/leave";
import { dark } from "../../styles/theme";
export default function LeaveRequests() {
  const [requests,setRequests]=useState(LEAVE_REQUESTS);
  return (
    <div>
      <PageHeader title="Leave Requests" subtitle="Review and approve employee leave requests" breadcrumb="Leave › Requests"/>
      <StatRow stats={[{icon:"⏳",label:"Pending Approval",value:"8"},{icon:"✅",label:"Approved Today",value:"3"},{icon:"❌",label:"Rejected",value:"1"},{icon:"📅",label:"Upcoming Leaves",value:"14"}]}/>
      <Card>
        <table>
          <thead><tr>{["Employee","Leave Type","Duration","Days","Status","Action"].map(h=><th key={h}>{h}</th>)}</tr></thead>
          <tbody>{requests.map((r,i)=>(
            <tr key={r.id} style={{borderBottom:"1px solid #FAFAFA"}}>
              <td style={{padding:"12px 0"}}><div style={{display:"flex",alignItems:"center",gap:10}}><Avatar initials={r.avatar} index={i}/><span style={{fontSize:14,fontWeight:600,color:"#333"}}>{r.name}</span></div></td>
              <td><span style={{fontSize:13,color:"#555"}}>{r.type}</span></td>
              <td><span style={{fontSize:13,color:"#555"}}>{r.from} – {r.to}</span></td>
              <td><span style={{fontSize:14,fontWeight:700,color:dark}}>{r.days}</span></td>
              <td><StatusChip status={r.status}/></td>
              <td>{r.status==="Pending"?(
                <div style={{display:"flex",gap:8}}>
                  <button onClick={()=>setRequests(p=>p.map(x=>x.id===r.id?{...x,status:"Approved"}:x))} style={{background:"#d1fae5",border:"none",borderRadius:7,padding:"5px 12px",fontSize:12,fontWeight:600,color:"#065f46",cursor:"pointer"}}>Approve</button>
                  <button onClick={()=>setRequests(p=>p.map(x=>x.id===r.id?{...x,status:"Rejected"}:x))} style={{background:"#fee2e2",border:"none",borderRadius:7,padding:"5px 12px",fontSize:12,fontWeight:600,color:"#991b1b",cursor:"pointer"}}>Reject</button>
                </div>
              ):<span style={{fontSize:13,color:"#aaa"}}>—</span>}</td>
            </tr>
          ))}</tbody>
        </table>
      </Card>
    </div>
  );
}