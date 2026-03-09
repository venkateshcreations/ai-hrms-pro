import Card from "../../components/ui/Card";
import Avatar from "../../components/ui/Avatar";
import StatusChip from "../../components/ui/StatusChip";
import PageHeader from "../../components/ui/PageHeader";
import StatRow from "../../components/ui/StatRow";

import { btn } from "../../styles/theme";
const RECORDS=[{name:"Priya Sharma",avatar:"PS",in:"09:02 AM",out:"06:15 PM",hours:"9h 13m",status:"Present"},{name:"Marcus Johnson",avatar:"MJ",in:"08:45 AM",out:"05:30 PM",hours:"8h 45m",status:"Present"},{name:"Aiko Tanaka",avatar:"AT",in:"-",out:"-",hours:"-",status:"On Leave"},{name:"Carlos Rivera",avatar:"CR",in:"09:30 AM",out:"-",hours:"Active",status:"Present"},{name:"Liam O'Brien",avatar:"LO",in:"09:00 AM",out:"06:00 PM",hours:"9h 0m",status:"Present"},{name:"Wei Chen",avatar:"WC",in:"-",out:"-",hours:"-",status:"On Leave"}];
export default function DailyAttendance() {
  return (
    <div>
      <PageHeader title="Daily Attendance" subtitle="Today — March 9, 2026" breadcrumb="Attendance › Daily" actions={[<button key="a" style={btn(true)}>Export</button>]}/>
      <StatRow stats={[{icon:"✅",label:"Present",value:"1,176"},{icon:"🌿",label:"On Leave",value:"47"},{icon:"❌",label:"Absent",value:"61"},{icon:"⏰",label:"Late Arrivals",value:"23"}]}/>
      <Card>
        <table>
          <thead><tr>{["Employee","Check In","Check Out","Hours","Status"].map(h=><th key={h}>{h}</th>)}</tr></thead>
          <tbody>{RECORDS.map((r,i)=>(
            <tr key={i} style={{borderBottom:"1px solid #FAFAFA"}}>
              <td style={{padding:"12px 0"}}><div style={{display:"flex",alignItems:"center",gap:10}}><Avatar initials={r.avatar} index={i}/><span style={{fontSize:14,fontWeight:600,color:"#333"}}>{r.name}</span></div></td>
              <td><span style={{fontSize:13,fontWeight:600,color:"#333"}}>{r.in}</span></td>
              <td><span style={{fontSize:13,color:"#333"}}>{r.out}</span></td>
              <td><span style={{fontSize:13,color:r.hours==="Active"?"#10b981":"#333",fontWeight:r.hours==="Active"?700:400}}>{r.hours}</span></td>
              <td><StatusChip status={r.status}/></td>
            </tr>
          ))}</tbody>
        </table>
      </Card>
    </div>
  );
}