import Card from "./Card";
import { dark } from "../../styles/theme";

/**
 * StatRow — renders a responsive row of KPI stat cards.
 * Each stat: { icon, label, value, delta, up }
 */
export default function StatRow({ stats }) {
  return (
    <div
      style={{
        display:             "grid",
        gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
        gap:                 16,
        marginBottom:        24,
      }}
    >
      {stats.map((s) => (
        <Card key={s.label} style={{ padding: "18px 20px" }}>
          <div style={{ fontSize: 22, marginBottom: 8 }}>{s.icon}</div>
          <div style={{ fontSize: 26, fontFamily: "'Sora', sans-serif", fontWeight: 800, color: dark }}>
            {s.value}
          </div>
          <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>{s.label}</div>
          {s.delta && (
            <div style={{ fontSize: 11, color: s.up ? "#10b981" : "#f43f5e", marginTop: 4, fontWeight: 600 }}>
              {s.delta}
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
