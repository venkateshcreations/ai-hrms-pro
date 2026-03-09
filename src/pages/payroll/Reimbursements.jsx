import Card from "../../components/ui/Card";
import StatusChip from "../../components/ui/StatusChip";
import PageHeader from "../../components/ui/PageHeader";
import StatRow from "../../components/ui/StatRow";
import { REIMBURSEMENTS } from "../../data/payroll";
import { accent, accentLight, dark, btn } from "../../styles/theme";
export default function Reimbursements() {
  return (
    <div>
      <PageHeader title="Reimbursements" subtitle="Employee expense claims and approvals" breadcrumb="Payroll › Reimbursements" actions={[<button key="a" style={btn(true)}>+ Submit Expense</button>]}/>
      <StatRow stats={[{icon:"📋",label:"Total Claims",value:"47"},{icon:"⏳",label:"Pending",value:"12"},{icon:"✅",label:"Approved",value:"31"},{icon:"💰",label:"Total Amount",value:"$14.2K"}]}/>
      <Card>
        <table>
          <thead><tr>{["Employee","Type","Amount","Date","Status","Action"].map(h=><th key={h}>{h}</th>)}</tr></thead>
          <tbody>{REIMBURSEMENTS.map((r,i)=>(
            <tr key={i} style={{borderBottom:"1px solid #FAFAFA"}}>
              <td style={{padding:"12px 0"}}><span style={{fontSize:14,fontWeight:600,color:"#333"}}>{r.emp}</span></td>
              <td><span style={{background:"#EEF2FF",color:"#4338ca",padding:"3px 9px",borderRadius:8,fontSize:12,fontWeight:600}}>{r.type}</span></td>
              <td><span style={{fontSize:14,fontWeight:700,color:dark}}>{r.amount}</span></td>
              <td><span style={{fontSize:13,color:"#888"}}>{r.date}</span></td>
              <td><StatusChip status={r.status}/></td>
              <td><button style={{background:accentLight,border:"none",borderRadius:7,padding:"6px 14px",fontSize:12,fontWeight:600,color:accent,cursor:"pointer"}}>Review</button></td>
            </tr>
          ))}</tbody>
        </table>
      </Card>
    </div>
  );
}