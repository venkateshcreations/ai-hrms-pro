import PageHeader from "../../components/ui/PageHeader";
import { dark, accent, btn } from "../../styles/theme";
const TYPE_COLORS={"recruitment":"#6366f1","leave":"#10b981","performance":"#FF8A3D","payroll":"#f43f5e","ai":"#8b5cf6","people":"#fbbf24","attendance":"#06b6d4","settings":"#94a3b8"};
export default function Notifications({ notifications, setNotifications }) {
  const unread=notifications.filter(n=>!n.read).length;
  const markAll=()=>setNotifications(p=>p.map(n=>({...n,read:true})));
  return (
    <div>
      <PageHeader title="Notifications" subtitle={`${unread} unread notifications`} breadcrumb="Notifications" actions={[<button key="a" style={btn(false)} onClick={markAll}>Mark all as read</button>]}/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 280px",gap:20}}>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {notifications.map(n=>(
            <div key={n.id} onClick={()=>setNotifications(p=>p.map(x=>x.id===n.id?{...x,read:true}:x))}
              style={{background:n.read?"#fff":"#FFFAF7",borderRadius:14,padding:"16px 20px",display:"flex",gap:14,alignItems:"flex-start",cursor:"pointer",boxShadow:"0 1px 6px rgba(0,0,0,0.05)",border:`1px solid #F0F0F0`,borderLeft:`3px solid ${n.read?"#F0F0F0":accent}`}}>
              <div style={{width:42,height:42,borderRadius:12,background:(TYPE_COLORS[n.type]||"#888")+"18",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>{n.icon}</div>
              <div style={{flex:1}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <span style={{fontSize:14,fontWeight:n.read?500:700,color:dark}}>{n.title}</span>
                  <div style={{display:"flex",alignItems:"center",gap:8}}>
                    <span style={{fontSize:12,color:"#aaa"}}>{n.time}</span>
                    {!n.read&&<div style={{width:8,height:8,borderRadius:"50%",background:accent}}/>}
                  </div>
                </div>
                <div style={{fontSize:13,color:"#666",marginTop:3}}>{n.desc}</div>
                <span style={{fontSize:11,background:(TYPE_COLORS[n.type]||"#888")+"20",color:TYPE_COLORS[n.type]||"#888",padding:"2px 8px",borderRadius:8,fontWeight:600,marginTop:6,display:"inline-block"}}>{n.type}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:16}}>
          <div style={{background:"#fff",borderRadius:14,padding:"22px 24px",boxShadow:"0 1px 6px rgba(0,0,0,0.05)",border:"1px solid #F0F0F0"}}>
            <h3 style={{fontFamily:"'Sora',sans-serif",fontSize:13,fontWeight:700,color:dark,marginBottom:12}}>By Type</h3>
            {Object.entries(TYPE_COLORS).map(([type,color])=>{
              const count=notifications.filter(n=>n.type===type).length;
              if(!count) return null;
              return <div key={type} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"7px 0",borderBottom:"1px solid #FAFAFA"}}>
                <div style={{display:"flex",alignItems:"center",gap:8}}><div style={{width:8,height:8,borderRadius:"50%",background:color}}/><span style={{fontSize:13,color:"#555",textTransform:"capitalize"}}>{type}</span></div>
                <span style={{fontSize:13,fontWeight:700,color:dark}}>{count}</span>
              </div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}