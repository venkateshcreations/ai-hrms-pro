import Card from "../../components/ui/Card";
import PageHeader from "../../components/ui/PageHeader";
import { dark, btn } from "../../styles/theme";
const LEAVES={6:"Aiko T.",7:"Aiko T.",8:"Aiko T.",9:"Aiko T.",10:"Aiko T.",3:"Sofia M.",4:"Sofia M.",20:"Liam O.",21:"Liam O.",22:"Liam O.",23:"Liam O.",24:"Liam O.",25:"Liam O.",26:"Liam O.",27:"Liam O."};
export default function LeaveCalendar() {
  return (
    <div>
      <PageHeader title="Leave Calendar" subtitle="March 2026 — Team leave overview" breadcrumb="Leave › Calendar"/>
      <Card>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
          <button style={btn(false)}>← Feb</button>
          <h3 style={{fontFamily:"'Sora',sans-serif",fontSize:16,fontWeight:700,color:dark}}>March 2026</h3>
          <button style={btn(false)}>Apr →</button>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4}}>
          {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d=>(
            <div key={d} style={{textAlign:"center",fontSize:12,fontWeight:700,color:"#aaa",padding:"8px 0"}}>{d}</div>
          ))}
          {Array(6).fill(null).map((_,i)=><div key={`e${i}`}/>)}
          {Array.from({length:31},(_,i)=>i+1).map(d=>(
            <div key={d} style={{background:LEAVES[d]?"#FFE8DA":d===9?"#FF8A3D":"#FAFAFA",borderRadius:8,padding:"8px 6px",minHeight:54,border:`1px solid ${d===9?"#FF8A3D":"#F0F0F0"}`}}>
              <div style={{fontSize:13,fontWeight:d===9?700:500,color:d===9?"#fff":"#333"}}>{d}</div>
              {LEAVES[d]&&<div style={{fontSize:10,color:"#ff6b1a",fontWeight:600,marginTop:3}}>{LEAVES[d]}</div>}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}