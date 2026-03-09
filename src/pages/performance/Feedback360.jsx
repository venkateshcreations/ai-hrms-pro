import Card from "../../components/ui/Card";
import Avatar from "../../components/ui/Avatar";
import PageHeader from "../../components/ui/PageHeader";
import StatRow from "../../components/ui/StatRow";
import { EMPLOYEES } from "../../data/employees";
import { accent, accentLight, dark } from "../../styles/theme";
export default function Feedback360() {
  const pending=[{name:"Marcus Johnson",type:"Peer Feedback",due:"Mar 15"},{name:"Aiko Tanaka",type:"Manager Review",due:"Mar 20"},{name:"Wei Chen",type:"Self Assessment",due:"Mar 31"}];
  return (
    <div>
      <PageHeader title="360° Feedback" subtitle="Peer, manager, and self assessments" breadcrumb="Performance › Feedback"/>
      <StatRow stats={[{icon:"📝",label:"Pending Feedback",value:"24"},{icon:"✅",label:"Completed",value:"87"},{icon:"⭐",label:"Avg Score",value:"4.3/5"},{icon:"👥",label:"Participants",value:"214"}]}/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
        <Card>
          <h3 style={{fontFamily:"'Sora',sans-serif",fontSize:15,fontWeight:700,color:dark,marginBottom:16}}>Pending Feedback Requests</h3>
          {pending.map((f,i)=>(
            <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0",borderBottom:"1px solid #FAFAFA"}}>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <Avatar initials={EMPLOYEES[i+1]?.avatar||"??"} index={i+1}/>
                <div><div style={{fontSize:14,fontWeight:600,color:"#333"}}>{f.name}</div><div style={{fontSize:12,color:"#888"}}>{f.type}</div></div>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <span style={{fontSize:12,color:"#888"}}>Due {f.due}</span>
                <button style={{background:accentLight,border:"none",borderRadius:7,padding:"6px 14px",fontSize:12,fontWeight:600,color:accent,cursor:"pointer"}}>Give Feedback</button>
              </div>
            </div>
          ))}
        </Card>
        <Card>
          <h3 style={{fontFamily:"'Sora',sans-serif",fontSize:15,fontWeight:700,color:dark,marginBottom:16}}>Top Rated Employees</h3>
          {EMPLOYEES.slice(0,5).map((e,i)=>(
            <div key={e.id} style={{display:"flex",alignItems:"center",gap:12,padding:"10px 0",borderBottom:"1px solid #FAFAFA"}}>
              <span style={{fontFamily:"'Sora',sans-serif",fontWeight:800,fontSize:18,color:accent,width:24}}>{i+1}</span>
              <Avatar initials={e.avatar} index={i}/>
              <div style={{flex:1}}>
                <div style={{fontSize:14,fontWeight:600,color:"#333"}}>{e.name}</div>
                <div style={{display:"flex",gap:1,marginTop:3}}>{Array(5).fill(0).map((_,j)=><span key={j} style={{color:j<(5-Math.floor(i/3))?"#fbbf24":"#E6E6E6",fontSize:14}}>★</span>)}</div>
              </div>
              <span style={{fontSize:15,fontWeight:800,color:dark}}>{(4.9-i*0.2).toFixed(1)}</span>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}