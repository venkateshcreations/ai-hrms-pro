import Card from "../../components/ui/Card";
import Avatar from "../../components/ui/Avatar";
import StatusChip from "../../components/ui/StatusChip";
import PageHeader from "../../components/ui/PageHeader";
import { EMPLOYEES } from "../../data/employees";
import { dark, accent, btn } from "../../styles/theme";
const PROMOS=[{name:"Priya Sharma",current:"Sr. Engineer",proposed:"Engineering Lead",dept:"Engineering",score:92,status:"Approved"},{name:"Carlos Rivera",current:"Data Analyst",proposed:"Sr. Data Analyst",dept:"Analytics",score:88,status:"Pending"},{name:"Marcus Johnson",current:"Product Manager",proposed:"Sr. Product Manager",dept:"Product",score:84,status:"Pending"}];
export default function Promotions() {
  return (
    <div>
      <PageHeader title="Promotions" subtitle="Promotion recommendations and approvals" breadcrumb="Performance › Promotions" actions={[<button key="a" style={btn(true)}>+ Nominate Employee</button>]}/>
      <div style={{display:"flex",flexDirection:"column",gap:16}}>
        {PROMOS.map((p,i)=>(
          <Card key={i}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div style={{display:"flex",alignItems:"center",gap:14}}>
                <Avatar initials={EMPLOYEES[i]?.avatar||"??"} index={i} size={48}/>
                <div>
                  <div style={{fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:16,color:dark}}>{p.name}</div>
                  <div style={{fontSize:13,color:"#888",marginTop:3}}>{p.current} <span style={{color:accent,fontWeight:700}}>→</span> {p.proposed}</div>
                  <div style={{fontSize:12,color:"#aaa",marginTop:2}}>{p.dept}</div>
                </div>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:20}}>
                <div style={{textAlign:"center"}}>
                  <div style={{fontSize:11,color:"#999",marginBottom:3}}>Score</div>
                  <div style={{fontFamily:"'Sora',sans-serif",fontWeight:800,fontSize:22,color:accent}}>{p.score}</div>
                </div>
                <StatusChip status={p.status}/>
                <button style={btn(true)}>Review</button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}