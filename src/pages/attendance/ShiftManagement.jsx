import Card from "../../components/ui/Card";
import PageHeader from "../../components/ui/PageHeader";
import { dark, btn } from "../../styles/theme";
const SHIFTS=[{name:"Morning Shift",time:"6:00 AM – 2:00 PM",employees:340,supervisor:"James Park",icon:"🌅"},{name:"Day Shift",time:"9:00 AM – 6:00 PM",employees:820,supervisor:"Fatima Al-Hassan",icon:"☀️"},{name:"Evening Shift",time:"2:00 PM – 10:00 PM",employees:88,supervisor:"Marcus Johnson",icon:"🌆"},{name:"Night Shift",time:"10:00 PM – 6:00 AM",employees:36,supervisor:"Wei Chen",icon:"🌙"}];
export default function ShiftManagement() {
  return (
    <div>
      <PageHeader title="Shift Management" subtitle="Configure and assign work shifts" breadcrumb="Attendance › Shifts" actions={[<button key="a" style={btn(true)}>+ Create Shift</button>]}/>
      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:18}}>
        {SHIFTS.map((s,i)=>(
          <Card key={s.name}>
            <div style={{display:"flex",gap:14,alignItems:"flex-start"}}>
              <div style={{width:44,height:44,borderRadius:12,background:`hsl(${i*80+200},60%,88%)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22}}>{s.icon}</div>
              <div style={{flex:1}}>
                <div style={{fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:15,color:dark}}>{s.name}</div>
                <div style={{fontSize:13,color:"#FF8A3D",fontWeight:600,marginTop:2}}>{s.time}</div>
                <div style={{display:"flex",gap:16,marginTop:12}}>
                  {[["Employees",s.employees],["Supervisor",s.supervisor]].map(([k,v])=>(
                    <div key={k} style={{background:"#FAFAFA",borderRadius:8,padding:"8px 14px"}}>
                      <div style={{fontSize:11,color:"#999"}}>{k}</div>
                      <div style={{fontSize:typeof v==="number"?18:13,fontWeight:700,fontFamily:"'Sora',sans-serif",color:dark}}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}