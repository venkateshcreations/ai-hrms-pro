import Card from "../../components/ui/Card";
import PageHeader from "../../components/ui/PageHeader";
import { TEAMS } from "../../data/departments";
import { dark, btn } from "../../styles/theme";
const ICONS=["⚡","🔧","✏️","🚀","📊","🤝"];
export default function Teams() {
  return (
    <div>
      <PageHeader title="Teams" subtitle="Cross-functional teams and squads" breadcrumb="People › Teams"
        actions={[<button key="a" style={btn(true)}>+ Create Team</button>]} />
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:18 }}>
        {TEAMS.map((t,i) => (
          <Card key={t.name}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
              <div style={{ width:40,height:40,borderRadius:10,background:`hsl(${i*55+15},65%,88%)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18 }}>{ICONS[i]}</div>
              <span style={{ fontSize:12,color:"#888",background:"#F5F5F5",padding:"3px 9px",borderRadius:8 }}>{t.dept}</span>
            </div>
            <div style={{ fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:15,color:dark,marginBottom:4 }}>{t.name}</div>
            <div style={{ fontSize:13,color:"#888",marginBottom:12 }}>📌 {t.project}</div>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <div style={{ display:"flex" }}>
                {Array(Math.min(t.members,4)).fill(0).map((_,j) => (
                  <div key={j} style={{ width:28,height:28,borderRadius:"50%",background:`hsl(${j*60},60%,80%)`,border:"2px solid #fff",marginLeft:j>0?-8:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,color:`hsl(${j*60},50%,35%)` }}>
                    {["P","M","A","C"][j]}
                  </div>
                ))}
                {t.members>4 && <div style={{ width:28,height:28,borderRadius:"50%",background:"#E6E6E6",border:"2px solid #fff",marginLeft:-8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:"#666" }}>+{t.members-4}</div>}
              </div>
              <span style={{ fontSize:12,color:"#888" }}>Lead: {t.lead.split(" ")[0]}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
