import Card from "../../components/ui/Card";
import PageHeader from "../../components/ui/PageHeader";
import { dark, btn } from "../../styles/theme";
export default function TaxReports() {
  return (
    <div>
      <PageHeader title="Tax Reports" subtitle="Annual and monthly tax computations" breadcrumb="Payroll › Tax Reports"/>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:18,marginBottom:24}}>
        {[{icon:"📄",title:"Form 16 / W-2",desc:"Annual tax certificate for all employees",year:"FY 2025-26"},{icon:"📊",title:"TDS Summary",desc:"Monthly TDS deduction and deposit report",year:"Mar 2026"},{icon:"🧾",title:"Tax Liability Report",desc:"Department-wise tax liability breakdown",year:"Q4 2025"}].map(r=>(
          <Card key={r.title} style={{textAlign:"center"}}>
            <div style={{fontSize:36,marginBottom:10}}>{r.icon}</div>
            <div style={{fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:15,color:dark,marginBottom:6}}>{r.title}</div>
            <div style={{fontSize:13,color:"#888",marginBottom:8}}>{r.desc}</div>
            <span style={{background:"#EEF2FF",color:"#4338ca",padding:"3px 10px",borderRadius:8,fontSize:12,fontWeight:600}}>{r.year}</span>
            <button style={{...btn(true),marginTop:16,width:"100%",padding:"9px"}}>⬇ Download</button>
          </Card>
        ))}
      </div>
      <Card>
        <h3 style={{fontFamily:"'Sora',sans-serif",fontSize:15,fontWeight:700,color:dark,marginBottom:16}}>Tax Summary — FY 2025-26</h3>
        {[["Total Taxable Income","$24,840,000"],["Total TDS Deducted","$4,104,000"],["PF Contributions","$1,824,000"],["ESI Contributions","$342,000"],["Net Tax Payable","$204,000"]].map(([k,v])=>(
          <div key={k} style={{display:"flex",justifyContent:"space-between",padding:"12px 0",borderBottom:"1px solid #F5F5F5"}}><span style={{fontSize:14,color:"#666"}}>{k}</span><span style={{fontSize:14,fontWeight:700,color:dark}}>{v}</span></div>
        ))}
      </Card>
    </div>
  );
}