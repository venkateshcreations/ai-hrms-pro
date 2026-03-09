import Card from "../../components/ui/Card";
import StatusChip from "../../components/ui/StatusChip";
import PageHeader from "../../components/ui/PageHeader";
import StatRow from "../../components/ui/StatRow";
import { GOALS } from "../../data/performance";
import { dark, accent, btn } from "../../styles/theme";
export default function Goals() {
  return (
    <div>
      <PageHeader title="Goals / OKR" subtitle="Track objectives and key results" breadcrumb="Performance › Goals" actions={[<button key="a" style={btn(true)}>+ Create Goal</button>]}/>
      <StatRow stats={[{icon:"🎯",label:"Total Goals",value:"148"},{icon:"✅",label:"On Track",value:"112"},{icon:"⚠️",label:"At Risk",value:"24"},{icon:"✔️",label:"Completed",value:"12",up:true}]}/>
      <div style={{display:"flex",flexDirection:"column",gap:14}}>
        {GOALS.map(g=>(
          <Card key={g.id}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div style={{flex:1}}>
                <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:8}}>
                  <span style={{fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:15,color:dark}}>{g.goal}</span>
                  <StatusChip status={g.status}/>
                </div>
                <div style={{fontSize:13,color:"#888",marginBottom:12}}>Assigned to: <strong>{g.employee}</strong> · Due: {g.due}</div>
                <div style={{display:"flex",alignItems:"center",gap:12}}>
                  <div style={{flex:1,height:8,background:"#F5F5F5",borderRadius:4}}>
                    <div style={{height:"100%",width:`${g.progress}%`,background:g.progress>80?"#10b981":g.progress>60?"#FF8A3D":"#f43f5e",borderRadius:4}}/>
                  </div>
                  <span style={{fontSize:14,fontWeight:800,color:dark,minWidth:36}}>{g.progress}%</span>
                </div>
              </div>
              <button style={{...btn(false),marginLeft:20}}>Update</button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}