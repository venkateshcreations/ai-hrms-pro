import Card from "../../components/ui/Card";
import StatusChip from "../../components/ui/StatusChip";
import PageHeader from "../../components/ui/PageHeader";
import { dark, btn } from "../../styles/theme";
const OFFERS=[{candidate:"Nadia Petrov",role:"HR Business Partner",salary:"$88,000",issued:"Mar 5, 2026",expires:"Mar 15, 2026",status:"Accepted"},{candidate:"Aryan Kapoor",role:"Sr. React Developer",salary:"$105,000",issued:"Mar 7, 2026",expires:"Mar 17, 2026",status:"Pending"}];
export default function Offers() {
  return (
    <div>
      <PageHeader title="Offers" subtitle="Manage job offers and approvals" breadcrumb="Recruitment › Offers" actions={[<button key="a" style={btn(true)}>+ Create Offer</button>]}/>
      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:18}}>
        {OFFERS.map((o,i)=>(
          <Card key={i}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}><div style={{fontFamily:"'Sora',sans-serif",fontSize:16,fontWeight:700,color:dark}}>{o.candidate}</div><StatusChip status={o.status}/></div>
            <div style={{fontSize:13,color:"#888",marginBottom:12}}>{o.role}</div>
            {[["Offered Salary",o.salary],["Issued",o.issued],["Expires",o.expires]].map(([k,v])=>(
              <div key={k} style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderTop:"1px solid #FAFAFA"}}><span style={{fontSize:13,color:"#999"}}>{k}</span><span style={{fontSize:13,fontWeight:600,color:dark}}>{v}</span></div>
            ))}
            <div style={{display:"flex",gap:10,marginTop:16}}><button style={btn(true)}>View Offer Letter</button><button style={btn(false)}>Resend</button></div>
          </Card>
        ))}
      </div>
    </div>
  );
}