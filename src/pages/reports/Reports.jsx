import Card from "../../components/ui/Card";
import PageHeader from "../../components/ui/PageHeader";
import { DEPARTMENTS } from "../../data/departments";
import { dark, accent, btn } from "../../styles/theme";
export default function Reports() {
  return (
    <div>
      <PageHeader title="Reports & Analytics" subtitle="Data-driven workforce insights" breadcrumb="Reports"/>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16,marginBottom:24}}>
        {[{label:"Total Employees",value:"1,284",change:"+12"},{label:"Attrition Rate",value:"2.3%",change:"-0.4%"},{label:"Avg Salary",value:"$87K",change:"+3.2%"},{label:"Time to Hire",value:"18 days",change:"-3 days"}].map(s=>(
          <Card key={s.label} style={{padding:"18px 20px"}}>
            <div style={{fontSize:24,fontFamily:"'Sora',sans-serif",fontWeight:800,color:dark}}>{s.value}</div>
            <div style={{fontSize:12,color:"#888",marginTop:2}}>{s.label}</div>
            <div style={{fontSize:11,color:"#10b981",marginTop:6,fontWeight:700}}>{s.change} vs last month</div>
          </Card>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1.5fr 1fr",gap:20,marginBottom:20}}>
        <Card>
          <h3 style={{fontFamily:"'Sora',sans-serif",fontSize:15,fontWeight:700,color:dark,marginBottom:18}}>Headcount by Department</h3>
          {DEPARTMENTS.map((d,i)=>(
            <div key={d.name} style={{display:"flex",alignItems:"center",gap:12,marginBottom:12}}>
              <span style={{fontSize:13,color:"#555",width:100,flexShrink:0}}>{d.name}</span>
              <div style={{flex:1,height:10,background:"#F5F5F5",borderRadius:5}}>
                <div style={{height:"100%",width:`${(d.employees/342)*100}%`,background:[accent,"#6366f1","#10b981","#fbbf24","#f43f5e","#8b5cf6","#06b6d4"][i],borderRadius:5}}/>
              </div>
              <span style={{fontSize:13,fontWeight:700,color:dark,width:40,textAlign:"right"}}>{d.employees}</span>
            </div>
          ))}
        </Card>
        <Card>
          <h3 style={{fontFamily:"'Sora',sans-serif",fontSize:15,fontWeight:700,color:dark,marginBottom:16}}>Hiring Trend (2026)</h3>
          <div style={{display:"flex",alignItems:"flex-end",gap:8,height:120}}>
            {[{m:"Jan",h:8},{m:"Feb",h:12},{m:"Mar",h:5}].map(b=>(
              <div key={b.m} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:6}}>
                <span style={{fontSize:11,color:dark,fontWeight:700}}>{b.h}</span>
                <div style={{width:"100%",height:`${b.h*7}px`,background:accent,borderRadius:"4px 4px 0 0",minHeight:20}}/>
                <span style={{fontSize:11,color:"#888"}}>{b.m}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:18}}>
        {[{title:"Workforce Report",icon:"👥",desc:"Full headcount, turnover, and tenure analysis"},{title:"Payroll Analytics",icon:"💰",desc:"Cost breakdown, trends, and forecasting"},{title:"Performance Metrics",icon:"📈",desc:"Ratings distribution and goal completion"},{title:"Recruitment Funnel",icon:"🎯",desc:"Source effectiveness and conversion rates"},{title:"Attendance Summary",icon:"🕐",desc:"Trends, patterns, and compliance"},{title:"Diversity & Inclusion",icon:"🌍",desc:"Workforce diversity metrics and benchmarks"}].map(r=>(
          <Card key={r.title} style={{cursor:"pointer"}}>
            <div style={{fontSize:28,marginBottom:10}}>{r.icon}</div>
            <div style={{fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:14,color:dark,marginBottom:5}}>{r.title}</div>
            <div style={{fontSize:12,color:"#888",marginBottom:14}}>{r.desc}</div>
            <button style={{...btn(true),padding:"7px 14px",fontSize:12}}>Generate</button>
          </Card>
        ))}
      </div>
    </div>
  );
}