import Card from "../../components/ui/Card";
import PageHeader from "../../components/ui/PageHeader";
import { LEAVE_POLICIES } from "../../data/leave";
import { dark } from "../../styles/theme";
export default function LeavePolicies() {
  return (
    <div>
      <PageHeader title="Leave Policies" subtitle="Company leave entitlements and rules" breadcrumb="Leave › Policies"/>
      <div style={{display:"flex",flexDirection:"column",gap:14}}>
        {LEAVE_POLICIES.map(p=>(
          <Card key={p.name}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
              <div>
                <div style={{fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:15,color:dark,marginBottom:6}}>{p.name}</div>
                <div style={{fontSize:13,color:"#666",lineHeight:1.6,maxWidth:560}}>{p.desc}</div>
              </div>
              <div style={{display:"flex",gap:12,flexShrink:0,marginLeft:24}}>
                {[["Entitlement",`${p.days} days`],["Carry Forward",`${p.carry} days`],["Encashable",p.encash?"Yes":"No"]].map(([k,v])=>(
                  <div key={k} style={{textAlign:"center",background:"#FAFAFA",borderRadius:9,padding:"10px 16px"}}>
                    <div style={{fontSize:11,color:"#999",marginBottom:3}}>{k}</div>
                    <div style={{fontSize:16,fontWeight:800,fontFamily:"'Sora',sans-serif",color:dark}}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}