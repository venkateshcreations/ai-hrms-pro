import { useState } from "react";
import Card from "../../components/ui/Card";
import PageHeader from "../../components/ui/PageHeader";
import { dark, btn } from "../../styles/theme";
export default function ApplyLeave() {
  const [form,setForm]=useState({type:"Casual Leave",from:"",to:"",reason:""});
  const [submitted,setSubmitted]=useState(false);
  const balance=[["Casual Leave",8,12,"#FF8A3D"],["Sick Leave",5,10,"#6366f1"],["Earned Leave",14,24,"#10b981"],["Emergency",2,3,"#f43f5e"]];
  return (
    <div>
      <PageHeader title="Apply for Leave" subtitle="Submit a new leave request" breadcrumb="Leave › Apply"/>
      <div style={{display:"grid",gridTemplateColumns:"1.5fr 1fr",gap:20}}>
        <Card>
          {submitted?(
            <div style={{textAlign:"center",padding:"40px 20px"}}>
              <div style={{fontSize:48,marginBottom:16}}>✅</div>
              <div style={{fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:20,color:dark,marginBottom:8}}>Leave Request Submitted!</div>
              <div style={{color:"#888",marginBottom:24}}>Your request has been sent to your manager for approval.</div>
              <button onClick={()=>setSubmitted(false)} style={btn(true)}>Submit Another</button>
            </div>
          ):(
            <div>
              <h3 style={{fontFamily:"'Sora',sans-serif",fontSize:15,fontWeight:700,color:dark,marginBottom:20}}>Leave Application Form</h3>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:14}}>
                <div><label style={{fontSize:12,color:"#888",fontWeight:600,display:"block",marginBottom:6}}>LEAVE TYPE</label>
                  <select value={form.type} onChange={e=>setForm({...form,type:e.target.value})} style={{width:"100%",border:"1px solid #E6E6E6",borderRadius:9,padding:"10px 12px",fontSize:14,outline:"none"}}>
                    {["Casual Leave","Sick Leave","Earned Leave","Maternity Leave","Emergency Leave"].map(t=><option key={t}>{t}</option>)}
                  </select>
                </div>
                <div><label style={{fontSize:12,color:"#888",fontWeight:600,display:"block",marginBottom:6}}>FROM DATE</label><input type="date" value={form.from} onChange={e=>setForm({...form,from:e.target.value})} style={{width:"100%",border:"1px solid #E6E6E6",borderRadius:9,padding:"10px 12px",fontSize:14,outline:"none"}}/></div>
                <div><label style={{fontSize:12,color:"#888",fontWeight:600,display:"block",marginBottom:6}}>TO DATE</label><input type="date" value={form.to} onChange={e=>setForm({...form,to:e.target.value})} style={{width:"100%",border:"1px solid #E6E6E6",borderRadius:9,padding:"10px 12px",fontSize:14,outline:"none"}}/></div>
              </div>
              <div style={{marginBottom:16}}>
                <label style={{fontSize:12,color:"#888",fontWeight:600,display:"block",marginBottom:6}}>REASON</label>
                <textarea value={form.reason} onChange={e=>setForm({...form,reason:e.target.value})} rows={4} placeholder="Briefly describe the reason for leave..." style={{width:"100%",border:"1px solid #E6E6E6",borderRadius:9,padding:"10px 12px",fontSize:14,outline:"none",resize:"none"}}/>
              </div>
              <button onClick={()=>setSubmitted(true)} style={{...btn(true),width:"100%",padding:"11px"}}>Submit Leave Request</button>
            </div>
          )}
        </Card>
        <div style={{display:"flex",flexDirection:"column",gap:18}}>
          <Card>
            <h3 style={{fontFamily:"'Sora',sans-serif",fontSize:14,fontWeight:700,color:dark,marginBottom:14}}>My Leave Balance</h3>
            {balance.map(([type,used,total,color])=>(
              <div key={type} style={{marginBottom:14}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}>
                  <span style={{fontSize:13,color:"#555"}}>{type}</span><span style={{fontSize:12,color:"#888"}}>{total-used} of {total} left</span>
                </div>
                <div style={{height:7,background:"#F5F5F5",borderRadius:3}}><div style={{height:"100%",width:`${(used/total)*100}%`,background:color,borderRadius:3}}/></div>
              </div>
            ))}
          </Card>
          <Card>
            <h3 style={{fontFamily:"'Sora',sans-serif",fontSize:14,fontWeight:700,color:dark,marginBottom:12}}>Upcoming Holidays</h3>
            {[["Mar 14","Holi"],["Apr 14","Dr. Ambedkar Jayanti"],["Apr 18","Good Friday"],["May 1","Labour Day"]].map(([date,name])=>(
              <div key={date} style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:"1px solid #FAFAFA"}}>
                <span style={{fontSize:13,color:"#333"}}>{name}</span><span style={{fontSize:12,color:"#FF8A3D",fontWeight:600}}>{date}</span>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}