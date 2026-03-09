import Card from "../../components/ui/Card";
import StatusChip from "../../components/ui/StatusChip";
import PageHeader from "../../components/ui/PageHeader";
import { PAYSLIPS } from "../../data/payroll";
import { accent, accentLight, dark, btn } from "../../styles/theme";
export default function Payslips() {
  return (
    <div>
      <PageHeader title="Payslips" subtitle="View and download employee payslips" breadcrumb="Payroll › Payslips"/>
      <Card>
        <div style={{display:"flex",gap:12,alignItems:"center",marginBottom:18}}>
          <select style={{border:"1px solid #E6E6E6",borderRadius:9,padding:"9px 12px",fontSize:14,outline:"none"}}>
            {["February 2026","January 2026","December 2025"].map(m=><option key={m}>{m}</option>)}
          </select>
          <input placeholder="Search employee..." style={{flex:1,border:"1px solid #E6E6E6",borderRadius:9,padding:"9px 14px",fontSize:14,outline:"none"}}/>
          <button style={btn(true)}>Bulk Download</button>
        </div>
        <table>
          <thead><tr>{["Employee","Month","Gross Pay","Deductions","Net Pay","Status",""].map(h=><th key={h}>{h}</th>)}</tr></thead>
          <tbody>{PAYSLIPS.map((p,i)=>(
            <tr key={i} style={{borderBottom:"1px solid #FAFAFA"}}>
              <td style={{padding:"12px 0"}}><span style={{fontSize:14,fontWeight:600,color:"#333"}}>{p.emp}</span></td>
              <td><span style={{fontSize:13,color:"#555"}}>{p.month}</span></td>
              <td><span style={{fontSize:14,fontWeight:700,color:dark}}>{p.gross}</span></td>
              <td><span style={{fontSize:13,color:"#f43f5e"}}>-{p.deductions}</span></td>
              <td><span style={{fontSize:14,fontWeight:700,color:"#10b981"}}>{p.net}</span></td>
              <td><StatusChip status={p.status}/></td>
              <td><button style={{background:accentLight,border:"none",borderRadius:7,padding:"6px 14px",fontSize:12,fontWeight:600,color:accent,cursor:"pointer"}}>⬇ Download</button></td>
            </tr>
          ))}</tbody>
        </table>
      </Card>
    </div>
  );
}