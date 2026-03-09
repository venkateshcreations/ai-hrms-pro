import { accent } from "../../styles/theme";

/**
 * PageHeader — breadcrumb + title + optional action buttons row.
 */
export default function PageHeader({ title, subtitle, breadcrumb, actions }) {
  return (
    <div style={{ marginBottom: 26 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
        <span style={{ fontSize: 12, color: "#aaa", fontWeight: 500 }}>AI HRMS Pro</span>
        <span style={{ color: "#ddd" }}>›</span>
        <span style={{ fontSize: 12, color: accent, fontWeight: 600 }}>{breadcrumb || title}</span>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: 24, fontWeight: 800, color: "#1a1a2e", marginBottom: 3 }}>
            {title}
          </h1>
          {subtitle && <p style={{ color: "#888", fontSize: 14 }}>{subtitle}</p>}
        </div>
        {actions && <div style={{ display: "flex", gap: 10 }}>{actions}</div>}
      </div>
    </div>
  );
}
