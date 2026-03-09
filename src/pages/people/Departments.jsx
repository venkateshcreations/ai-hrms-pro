import Card from "../../components/ui/Card";
import PageHeader from "../../components/ui/PageHeader";
import StatRow from "../../components/ui/StatRow";
import { DEPARTMENTS } from "../../data/departments";
import { dark, btn } from "../../styles/theme";

const ICONS = ["💻","🎯","🎨","📊","👥","📣","💵"];

export default function Departments() {
  return (
    <div>
      <PageHeader title="Departments" subtitle="Manage all company departments" breadcrumb="People › Departments"
        actions={[<button key="a" style={btn(true)}>+ New Department</button>]} />
      <StatRow stats={[
        { icon:"🏢", label:"Total Departments", value:"7" },
        { icon:"👥", label:"Total Employees",   value:"1,284" },
        { icon:"💰", label:"Total Budget",       value:"$9.9M" },
        { icon:"📈", label:"Avg Growth",         value:"+8.3%", up:true },
      ]} />
      <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:18 }}>
        {DEPARTMENTS.map((d,i) => (
          <Card key={d.name}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
              <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                <div style={{ width:44,height:44,borderRadius:12,background:`hsl(${i*42+10},70%,90%)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20 }}>
                  {ICONS[i]}
                </div>
                <div>
                  <div style={{ fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:16,color:dark }}>{d.name}</div>
                  <div style={{ fontSize:13,color:"#888" }}>Head: {d.head}</div>
                </div>
              </div>
              <span style={{ background:"#d1fae5",color:"#065f46",fontSize:12,fontWeight:700,padding:"3px 9px",borderRadius:8 }}>{d.growth}</span>
            </div>
            <div style={{ display:"flex", gap:16, marginTop:18 }}>
              {[["Employees",d.employees],["Budget",d.budget]].map(([k,v]) => (
                <div key={k} style={{ flex:1,background:"#FAFAFA",borderRadius:9,padding:"10px 14px" }}>
                  <div style={{ fontSize:11,color:"#999",marginBottom:3 }}>{k}</div>
                  <div style={{ fontSize:18,fontWeight:800,fontFamily:"'Sora',sans-serif",color:dark }}>{v}</div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
