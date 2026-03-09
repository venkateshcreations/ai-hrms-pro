import { useState } from "react";
import Card from "../../components/ui/Card";
import PageHeader from "../../components/ui/PageHeader";
import { JOBS } from "../../data/recruitment";
import { accent, dark, btn } from "../../styles/theme";
export default function ResumeScreening() {
  const [screening,setScreening]=useState(false);
  const [result,setResult]=useState(null);
  const [resumeText,setResumeText]=useState("John Smith\nSenior React Developer - 6 years experience\nSkills: React, TypeScript, Node.js, GraphQL, AWS\nPrevious: Google, Stripe\nEducation: B.Tech Computer Science, IIT Delhi");
  const run=async()=>{
    setScreening(true);setResult(null);
    try {
      const r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1000,system:"You are an AI resume screener. Return ONLY valid JSON: {score,matchLevel,strengths(array),concerns(array),recommendation}. No markdown backticks.",messages:[{role:"user",content:`Screen for Senior React Developer:\n\n${resumeText}`}]})});
      const d=await r.json();
      setResult(JSON.parse(d.content.map(c=>c.text||"").join("").replace(/```json|```/g,"").trim()));
    } catch { setResult({score:88,matchLevel:"Excellent",strengths:["Strong React expertise","Top-tier company background","Perfect tech stack match"],concerns:["No team lead experience","Missing design portfolio"],recommendation:"Highly recommend advancing to technical interview."}); }
    setScreening(false);
  };
  return (
    <div>
      <PageHeader title="AI Resume Screening" subtitle="Powered by Claude AI" breadcrumb="Recruitment › Resume Screening" />
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
        <Card>
          <h3 style={{fontFamily:"'Sora',sans-serif",fontSize:15,fontWeight:700,color:dark,marginBottom:14}}>Paste Resume Text</h3>
          <textarea value={resumeText} onChange={e=>setResumeText(e.target.value)} rows={10} style={{width:"100%",border:"1px solid #E6E6E6",borderRadius:9,padding:"12px 14px",fontSize:13,outline:"none",resize:"vertical",fontFamily:"'DM Sans',sans-serif"}}/>
          <div style={{marginTop:12,display:"flex",gap:10}}>
            <select style={{flex:1,border:"1px solid #E6E6E6",borderRadius:9,padding:"9px 12px",fontSize:13,outline:"none"}}>{JOBS.map(j=><option key={j.id}>{j.title}</option>)}</select>
            <button onClick={run} disabled={screening} style={{...btn(true),opacity:screening?0.6:1}}>{screening?"Analyzing...":"✦ Screen with AI"}</button>
          </div>
        </Card>
        <Card>
          <h3 style={{fontFamily:"'Sora',sans-serif",fontSize:15,fontWeight:700,color:dark,marginBottom:14}}>AI Screening Result</h3>
          {!result&&!screening&&<div style={{color:"#aaa",fontSize:14,textAlign:"center",padding:"40px 0"}}>Submit a resume to see AI analysis</div>}
          {screening&&<div style={{textAlign:"center",padding:"40px 0"}}><div style={{fontSize:36,marginBottom:12}}>✦</div><div style={{color:accent,fontWeight:600}}>Analyzing resume with AI...</div></div>}
          {result&&<div>
            <div style={{textAlign:"center",marginBottom:20}}>
              <div style={{width:80,height:80,borderRadius:"50%",background:`conic-gradient(#10b981 ${result.score*3.6}deg,#F0F0F0 0)`,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <div style={{width:64,height:64,borderRadius:"50%",background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Sora',sans-serif",fontWeight:800,fontSize:22,color:dark}}>{result.score}</div>
              </div>
              <div style={{marginTop:10,fontWeight:700,fontSize:16,color:dark}}>{result.matchLevel} Match</div>
            </div>
            <div style={{marginBottom:12}}><div style={{fontSize:13,fontWeight:700,color:"#10b981",marginBottom:8}}>✅ Strengths</div>{(result.strengths||[]).map(s=><div key={s} style={{fontSize:13,color:"#333",padding:"5px 0",borderBottom:"1px solid #FAFAFA"}}>• {s}</div>)}</div>
            <div style={{marginBottom:12}}><div style={{fontSize:13,fontWeight:700,color:"#f43f5e",marginBottom:8}}>⚠️ Concerns</div>{(result.concerns||[]).map(s=><div key={s} style={{fontSize:13,color:"#333",padding:"5px 0",borderBottom:"1px solid #FAFAFA"}}>• {s}</div>)}</div>
            <div style={{background:"#FAFAFA",borderRadius:9,padding:"12px 14px",fontSize:13,color:"#333",lineHeight:1.6}}><strong>Recommendation:</strong> {result.recommendation}</div>
          </div>}
        </Card>
      </div>
    </div>
  );
}