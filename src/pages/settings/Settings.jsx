import { useState } from "react";
import Card from "../../components/ui/Card";
import StatusChip from "../../components/ui/StatusChip";
import PageHeader from "../../components/ui/PageHeader";
import { dark, accent, accentLight, btn } from "../../styles/theme";
export default function Settings() {
  const [tab,setTab]=useState("profile");
  const tabs=["profile","company","security","integrations","notifications","billing"];
  return (
    <div>
      <PageHeader title="Settings" subtitle="Manage your account and system preferences" breadcrumb="Settings"/>
      <div style={{display:"flex",gap:4,background:"#F5F5F5",borderRadius:12,padding:4,marginBottom:24,width:"fit-content"}}>
        {tabs.map(t=>(
          <button key={t} onClick={()=>setTab(t)} style={{background:tab===t?"#fff":"transparent",border:"none",borderRadius:9,padding:"8px 18px",fontSize:13,fontWeight:tab===t?700:500,color:tab===t?dark:"#888",cursor:"pointer",textTransform:"capitalize",boxShadow:tab===t?"0 1px 4px rgba(0,0,0,0.08)":"none"}}>{t}</button>
        ))}
      </div>
      {tab==="profile"&&(
        <div style={{display:"grid",gridTemplateColumns:"280px 1fr",gap:20}}>
          <Card style={{textAlign:"center",padding:"30px 24px"}}>
            <div style={{width:80,height:80,borderRadius:"50%",background:`linear-gradient(135deg,${accent},#ff6b1a)`,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontFamily:"'Sora',sans-serif",fontWeight:800,fontSize:24}}>AK</div>
            <div style={{fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:18,color:dark,marginTop:14}}>Arjun Kumar</div>
            <div style={{fontSize:14,color:"#888",marginTop:3}}>HR Director</div>
            <div style={{marginTop:12}}><StatusChip status="Active"/></div>
            <button style={{...btn(false),marginTop:16,width:"100%"}}>Change Photo</button>
          </Card>
          <Card>
            <h3 style={{fontFamily:"'Sora',sans-serif",fontSize:15,fontWeight:700,color:dark,marginBottom:20}}>Profile Information</h3>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
              {[["First Name","Arjun"],["Last Name","Kumar"],["Email","arjun@company.com"],["Phone","+91 98765 00001"],["Department","HR"],["Location","Bangalore"]].map(([label,val])=>(
                <div key={label}>
                  <label style={{fontSize:12,color:"#999",fontWeight:600,display:"block",marginBottom:6}}>{label.toUpperCase()}</label>
                  <input defaultValue={val} style={{width:"100%",border:"1px solid #E6E6E6",borderRadius:9,padding:"10px 12px",fontSize:14,outline:"none"}}/>
                </div>
              ))}
            </div>
            <button style={{...btn(true),marginTop:20}}>Save Changes</button>
          </Card>
        </div>
      )}
      {tab==="company"&&(
        <Card>
          <h3 style={{fontFamily:"'Sora',sans-serif",fontSize:15,fontWeight:700,color:dark,marginBottom:20}}>Company Details</h3>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
            {[["Company Name","TechCorp Global Inc."],["Industry","Technology"],["Founded","2018"],["Headquarters","Bangalore, India"],["Website","www.techcorpglobal.com"],["Employees","1,284"]].map(([label,val])=>(
              <div key={label}><label style={{fontSize:12,color:"#999",fontWeight:600,display:"block",marginBottom:6}}>{label.toUpperCase()}</label><input defaultValue={val} style={{width:"100%",border:"1px solid #E6E6E6",borderRadius:9,padding:"10px 12px",fontSize:14,outline:"none"}}/></div>
            ))}
          </div>
          <button style={{...btn(true),marginTop:20}}>Update Company Info</button>
        </Card>
      )}
      {tab==="security"&&(
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
          <Card>
            <h3 style={{fontFamily:"'Sora',sans-serif",fontSize:15,fontWeight:700,color:dark,marginBottom:18}}>Change Password</h3>
            {["Current Password","New Password","Confirm New Password"].map(l=>(
              <div key={l} style={{marginBottom:14}}><label style={{fontSize:12,color:"#999",fontWeight:600,display:"block",marginBottom:6}}>{l.toUpperCase()}</label><input type="password" style={{width:"100%",border:"1px solid #E6E6E6",borderRadius:9,padding:"10px 12px",fontSize:14,outline:"none"}}/></div>
            ))}
            <button style={btn(true)}>Update Password</button>
          </Card>
          <Card>
            <h3 style={{fontFamily:"'Sora',sans-serif",fontSize:15,fontWeight:700,color:dark,marginBottom:18}}>Security Settings</h3>
            {[["Two-Factor Authentication",true],["Login Alerts",true],["Session Timeout","30 min"],["IP Whitelist","Disabled"]].map(([k,v])=>(
              <div key={k} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0",borderBottom:"1px solid #FAFAFA"}}>
                <span style={{fontSize:14,color:"#333"}}>{k}</span>
                {typeof v==="boolean"?<div style={{width:40,height:22,borderRadius:11,background:v?accent:"#E6E6E6",position:"relative",cursor:"pointer"}}><div style={{width:18,height:18,borderRadius:"50%",background:"white",position:"absolute",right:v?2:20,top:2,transition:"right .2s"}}/></div>:<span style={{fontSize:13,color:accent,fontWeight:600}}>{v}</span>}
              </div>
            ))}
          </Card>
        </div>
      )}
      {tab==="integrations"&&(
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:18}}>
          {[{name:"Slack",icon:"💬",desc:"Team messaging and notifications",connected:true},{name:"Microsoft Teams",icon:"📺",desc:"Video meetings and collaboration",connected:true},{name:"Zoom",icon:"🎥",desc:"Video conferencing integration",connected:false},{name:"LinkedIn",icon:"💼",desc:"Job posting and candidate sourcing",connected:true},{name:"QuickBooks",icon:"📒",desc:"Finance and payroll sync",connected:false},{name:"SAP",icon:"🏭",desc:"Enterprise resource planning",connected:false}].map(int=>(
            <Card key={int.name}>
              <div style={{display:"flex",gap:12,alignItems:"flex-start",marginBottom:14}}><div style={{fontSize:30}}>{int.icon}</div><div><div style={{fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:14,color:dark}}>{int.name}</div><div style={{fontSize:12,color:"#888",marginTop:2}}>{int.desc}</div></div></div>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <StatusChip status={int.connected?"Active":"Paused"}/>
                <button style={{background:int.connected?accentLight:"#F5F5F5",border:"none",borderRadius:7,padding:"6px 14px",fontSize:12,fontWeight:600,color:int.connected?accent:"#555",cursor:"pointer"}}>{int.connected?"Disconnect":"Connect"}</button>
              </div>
            </Card>
          ))}
        </div>
      )}
      {tab==="notifications"&&(
        <Card>
          <h3 style={{fontFamily:"'Sora',sans-serif",fontSize:15,fontWeight:700,color:dark,marginBottom:20}}>Notification Preferences</h3>
          <table>
            <thead><tr>{["Event","Email","Push","Slack"].map(h=><th key={h}>{h}</th>)}</tr></thead>
            <tbody>{["New leave request","Payroll processed","New candidate","Interview scheduled","Performance review due","Attrition alert"].map(e=>(
              <tr key={e} style={{borderBottom:"1px solid #FAFAFA"}}>
                <td style={{padding:"13px 0",fontSize:14,color:"#333"}}>{e}</td>
                {[true,true,false].map((def,j)=>(
                  <td key={j}><div style={{width:36,height:20,borderRadius:10,background:def?accent:"#E6E6E6",position:"relative",cursor:"pointer",display:"inline-block"}}><div style={{width:16,height:16,borderRadius:"50%",background:"white",position:"absolute",right:def?2:18,top:2}}/></div></td>
                ))}
              </tr>
            ))}</tbody>
          </table>
          <button style={{...btn(true),marginTop:20}}>Save Preferences</button>
        </Card>
      )}
      {tab==="billing"&&(
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
          <Card>
            <h3 style={{fontFamily:"'Sora',sans-serif",fontSize:15,fontWeight:700,color:dark,marginBottom:16}}>Current Plan</h3>
            <div style={{background:"linear-gradient(135deg,#1a1a2e,#2d1b4e)",borderRadius:12,padding:"20px 22px",color:"white",marginBottom:18}}>
              <div style={{fontSize:12,color:"rgba(255,255,255,0.5)",marginBottom:6}}>CURRENT PLAN</div>
              <div style={{fontFamily:"'Sora',sans-serif",fontWeight:800,fontSize:22}}>Enterprise Pro</div>
              <div style={{fontSize:14,color:"rgba(255,255,255,0.7)",marginTop:4}}>Billed annually · $24/employee/month</div>
              <div style={{marginTop:14,fontSize:24,fontFamily:"'Sora',sans-serif",fontWeight:800,color:accent}}>$30,816<span style={{fontSize:14,color:"rgba(255,255,255,0.5)",fontWeight:400}}>/mo</span></div>
            </div>
            {["Unlimited employees","AI Assistant included","Advanced analytics","Priority support","Custom integrations"].map(f=>(
              <div key={f} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid #FAFAFA"}}><span style={{color:"#10b981",fontSize:16}}>✓</span><span style={{fontSize:14,color:"#333"}}>{f}</span></div>
            ))}
          </Card>
          <Card>
            <h3 style={{fontFamily:"'Sora',sans-serif",fontSize:15,fontWeight:700,color:dark,marginBottom:16}}>Billing History</h3>
            {[["Feb 2026","$30,816","Paid"],["Jan 2026","$30,816","Paid"],["Dec 2025","$29,952","Paid"],["Nov 2025","$29,952","Paid"]].map(([month,amount,status])=>(
              <div key={month} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0",borderBottom:"1px solid #FAFAFA"}}>
                <span style={{fontSize:14,color:"#333"}}>{month}</span>
                <span style={{fontSize:14,fontWeight:700,color:dark}}>{amount}</span>
                <div style={{display:"flex",alignItems:"center",gap:10}}><StatusChip status={status}/><button style={{background:"transparent",border:"none",color:accent,fontSize:12,fontWeight:600,cursor:"pointer"}}>⬇</button></div>
              </div>
            ))}
          </Card>
        </div>
      )}
    </div>
  );
}