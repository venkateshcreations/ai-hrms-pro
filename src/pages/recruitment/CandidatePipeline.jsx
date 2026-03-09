import Avatar from "../../components/ui/Avatar";
import PageHeader from "../../components/ui/PageHeader";
import { CANDIDATES } from "../../data/recruitment";
import { dark } from "../../styles/theme";
const STAGES=["Applied","Screening","Shortlisted","Interview","Offer","Hired","Rejected"];
export default function CandidatePipeline() {
  return (
    <div>
      <PageHeader title="Candidate Pipeline" subtitle="Track candidates through hiring stages" breadcrumb="Recruitment › Pipeline" />
      <div style={{display:"flex",gap:14,overflowX:"auto",paddingBottom:8}}>
        {STAGES.map(s=>(
          <div key={s} style={{minWidth:200,background:"#F7F7F8",borderRadius:12,padding:14,flexShrink:0}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
              <span style={{fontWeight:700,fontSize:13,color:dark}}>{s}</span>
              <span style={{background:"#E6E6E6",borderRadius:10,padding:"1px 8px",fontSize:12,fontWeight:700}}>{CANDIDATES.filter(c=>c.stage===s).length}</span>
            </div>
            {CANDIDATES.filter(c=>c.stage===s).map((c,i)=>(
              <div key={c.id} style={{background:"#fff",borderRadius:10,padding:"12px 14px",marginBottom:10,boxShadow:"0 1px 4px rgba(0,0,0,0.06)",border:"1px solid #F0F0F0"}}>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
                  <Avatar initials={c.avatar} index={i}/>
                  <div><div style={{fontSize:13,fontWeight:700,color:dark}}>{c.name}</div><div style={{fontSize:11,color:"#888"}}>{c.role}</div></div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <div style={{height:4,flex:1,background:"#F0F0F0",borderRadius:2}}>
                    <div style={{height:"100%",width:`${c.score}%`,background:c.score>85?"#10b981":"#FF8A3D",borderRadius:2}}/>
                  </div>
                  <span style={{fontSize:12,fontWeight:700,color:dark}}>{c.score}</span>
                </div>
              </div>
            ))}
            <button style={{width:"100%",background:"transparent",border:"1px dashed #E6E6E6",borderRadius:9,padding:"8px",fontSize:12,color:"#aaa",cursor:"pointer"}}>+ Add</button>
          </div>
        ))}
      </div>
    </div>
  );
}