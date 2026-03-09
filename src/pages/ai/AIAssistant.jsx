import { useState, useRef, useEffect } from "react";
import Card from "../../components/ui/Card";
import PageHeader from "../../components/ui/PageHeader";
import { useAI } from "../../hooks/useAI";
import { accent, dark } from "../../styles/theme";

const SYSTEM = `You are an AI HR Assistant for AI HRMS Pro. You have access to this workforce data:
- Total Employees: 1,284 | Engineering: 342 | Product: 48 | Design: 36 | Analytics: 62 | HR: 28 | Marketing: 54 | Finance: 32
- Open Positions: 38 (12 urgent) | On Leave Today: 47 | Monthly Payroll: $2.4M | Attendance Rate: 91.2%
- Attrition Risk: 3 employees flagged in Engineering | Recent hires: 5 this month
Respond helpfully, concisely, and professionally. Keep responses under 150 words.`;

const SUGGESTIONS=["How many employees are on leave today?","Show attrition risk analysis","What is the monthly payroll?","List open positions","Who are the top performers?","Generate a headcount report"];

export default function AIAssistant() {
  const { messages, loading, send } = useAI(SYSTEM);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);
  const allMessages = [{ role:"ai", text:"Hello! I'm your AI HR Assistant powered by Claude. Ask me anything about your workforce, payroll, recruitment, or HR analytics." }, ...messages];

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior:"smooth" }); }, [messages]);

  const handleSend = () => { send(input); setInput(""); };

  return (
    <div>
      <PageHeader title="AI HR Assistant" subtitle="Powered by Claude AI — Ask anything about your workforce" breadcrumb="AI Assistant"/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 280px",gap:20,height:"calc(100vh - 200px)"}}>
        <Card style={{display:"flex",flexDirection:"column",padding:0,overflow:"hidden"}}>
          <div style={{background:"linear-gradient(135deg,#1a1a2e,#2d1b4e)",padding:"18px 24px",display:"flex",alignItems:"center",gap:12}}>
            <div style={{width:40,height:40,background:`linear-gradient(135deg,${accent},#ff6b1a)`,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:18,fontWeight:800}}>✦</div>
            <div>
              <div style={{fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:15,color:"#fff"}}>AI HR Assistant</div>
              <div style={{fontSize:12,color:"rgba(255,255,255,0.5)"}}>Always available · Powered by Claude</div>
            </div>
            <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:6}}>
              <div style={{width:8,height:8,borderRadius:"50%",background:"#10b981",animation:"pulse 2s infinite"}}/>
              <span style={{fontSize:12,color:"rgba(255,255,255,0.6)"}}>Online</span>
            </div>
          </div>
          <div style={{flex:1,overflowY:"auto",padding:"20px 24px",display:"flex",flexDirection:"column",gap:14}}>
            {allMessages.map((m,i)=>(
              <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start",gap:10}}>
                {m.role==="ai"&&<div style={{width:32,height:32,borderRadius:"50%",background:`linear-gradient(135deg,${accent},#ff6b1a)`,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:14,flexShrink:0,marginTop:4}}>✦</div>}
                <div style={{maxWidth:"70%",padding:"12px 16px",borderRadius:m.role==="user"?"16px 16px 4px 16px":"16px 16px 16px 4px",background:m.role==="user"?`linear-gradient(135deg,${accent},#ff6b1a)`:"#F7F7F8",color:m.role==="user"?"white":"#333",fontSize:14,lineHeight:1.6}}>{m.text}</div>
              </div>
            ))}
            {loading&&<div style={{display:"flex",gap:10}}>
              <div style={{width:32,height:32,borderRadius:"50%",background:`linear-gradient(135deg,${accent},#ff6b1a)`,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:14,flexShrink:0}}>✦</div>
              <div style={{background:"#F7F7F8",padding:"12px 16px",borderRadius:"16px 16px 16px 4px",display:"flex",gap:5,alignItems:"center"}}>
                {[0,1,2].map(j=><div key={j} style={{width:8,height:8,borderRadius:"50%",background:accent,animation:`pulse 1.2s ${j*0.2}s infinite`}}/>)}
              </div>
            </div>}
            <div ref={bottomRef}/>
          </div>
          <div style={{padding:"16px 24px",borderTop:"1px solid #F0F0F0"}}>
            <div style={{display:"flex",gap:10}}>
              <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleSend()} placeholder="Ask about employees, payroll, attendance, recruitment..." style={{flex:1,border:"1px solid #E6E6E6",borderRadius:12,padding:"12px 16px",fontSize:14,outline:"none"}}/>
              <button onClick={handleSend} disabled={loading} style={{background:`linear-gradient(135deg,${accent},#ff6b1a)`,border:"none",borderRadius:12,padding:"12px 20px",color:"white",fontWeight:700,fontSize:16,cursor:"pointer",opacity:loading?0.6:1}}>→</button>
            </div>
          </div>
        </Card>
        <div style={{display:"flex",flexDirection:"column",gap:16}}>
          <Card>
            <h3 style={{fontFamily:"'Sora',sans-serif",fontSize:13,fontWeight:700,color:dark,marginBottom:12}}>💡 Suggested Questions</h3>
            {SUGGESTIONS.map(s=>(
              <button key={s} onClick={()=>setInput(s)} style={{display:"block",width:"100%",textAlign:"left",background:"#FAFAFA",border:"1px solid #F0F0F0",borderRadius:8,padding:"9px 12px",fontSize:12,color:"#555",cursor:"pointer",marginBottom:8,fontFamily:"'DM Sans',sans-serif"}}>{s}</button>
            ))}
          </Card>
          <Card>
            <h3 style={{fontFamily:"'Sora',sans-serif",fontSize:13,fontWeight:700,color:dark,marginBottom:12}}>🚀 AI Capabilities</h3>
            {["Employee queries","Payroll insights","Attendance analytics","Leave management","Recruitment analysis","Performance data"].map(c=>(
              <div key={c} style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
                <div style={{width:6,height:6,borderRadius:"50%",background:"#10b981",flexShrink:0}}/>
                <span style={{fontSize:12,color:"#666"}}>{c}</span>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}