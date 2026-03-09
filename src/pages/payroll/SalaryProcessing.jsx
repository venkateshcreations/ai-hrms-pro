import { useState } from "react";
import Card from "../../components/ui/Card";
import PageHeader from "../../components/ui/PageHeader";
import StatRow from "../../components/ui/StatRow";
import { dark, accent, btn } from "../../styles/theme";
export default function SalaryProcessing() {
  const [processing,setProcessing]=useState(false);
  const [done,setDone]=useState(false);
  const run=()=>{setProcessing(true);setTimeout(()=>{setProcessing(false);setDone(true)},2500)};
  return (
    <div>
      <PageHeader title="Salary Processing" subtitle="Process monthly payroll" breadcrumb="Payroll › Salary Processing"/>
      <StatRow stats={[{icon:"💰",label:"Total Payroll",value:"$2.4M"},{icon:"👥",label:"Employees",value:"1,284"},{icon:"✅",label:"Processed",value:"1,284"},{icon:"⚠️",label:"Exceptions",value:"3"}]}/>
      <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:20}}>
        <Card>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
            <h3 style={{fontFamily:"'Sora',sans-serif",fontSize:15,fontWeight:700,color:dark}}>March 2026 Payroll Run</h3>
            <span style={{background:"#d1fae5",color:"#065f46",padding:"4px 12px",borderRadius:8,fontSize:12,fontWeight:700}}>Ready to Process</span>
          </div>
          {[["Pay Period","March 1–31, 2026"],["Payment Date","March 31, 2026"],["Total Employees","1,284"],["Gross Payroll","$2,854,320"],["Total Deductions","$454,320"],["Net Payroll","$2,400,000"]].map(([k,v])=>(
            <div key={k} style={{display:"flex",justifyContent:"space-between",padding:"12px 0",borderBottom:"1px solid #F5F5F5"}}><span style={{fontSize:14,color:"#666"}}>{k}</span><span style={{fontSize:14,fontWeight:700,color:dark}}>{v}</span></div>
          ))}
          <div style={{marginTop:20,display:"flex",gap:12}}>
            {done?<div style={{background:"#d1fae5",borderRadius:10,padding:"14px 20px",flex:1,textAlign:"center",color:"#065f46",fontWeight:700}}>✅ Payroll Processed Successfully!</div>:<button onClick={run} disabled={processing} style={{...btn(true),flex:1,padding:"12px",opacity:processing?.7:1}}>{processing?"⏳ Processing...":"▶ Run Payroll"}</button>}
            <button style={btn(false)}>Download Summary</button>
          </div>
        </Card>
        <Card>
          <h3 style={{fontFamily:"'Sora',sans-serif",fontSize:14,fontWeight:700,color:dark,marginBottom:14}}>Payroll Breakdown</h3>
          {[["Base Salary","78%","#FF8A3D"],["Bonuses","12%","#6366f1"],["Allowances","7%","#10b981"],["Overtime","3%","#fbbf24"]].map(([label,pct,color])=>(
            <div key={label} style={{marginBottom:14}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}><span style={{fontSize:13,color:"#555"}}>{label}</span><span style={{fontSize:13,fontWeight:700,color:dark}}>{pct}</span></div>
              <div style={{height:8,background:"#F5F5F5",borderRadius:4}}><div style={{height:"100%",width:pct,background:color,borderRadius:4}}/></div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}