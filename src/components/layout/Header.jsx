import { accent } from "../../styles/theme";

export default function Header({ collapsed, unread, onNavigate }) {
  return (
    <header
      style={{
        height:       58,
        background:   "#fff",
        borderBottom: "1px solid #EBEBEB",
        display:      "flex",
        alignItems:   "center",
        padding:      "0 18px",
        gap:          14,
        position:     "fixed",
        top:          0,
        left:         0,
        right:        0,
        zIndex:       200,
        boxShadow:    "0 1px 8px rgba(0,0,0,0.04)",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 9, minWidth: collapsed ? 52 : 236, transition: "min-width .3s" }}>
        <div
          style={{
            width:        33,
            height:       33,
            background:   `linear-gradient(135deg, ${accent}, #ff6b1a)`,
            borderRadius: 9,
            display:      "flex",
            alignItems:   "center",
            justifyContent: "center",
            color:        "white",
            fontFamily:   "'Sora', sans-serif",
            fontWeight:   800,
            fontSize:     13,
            flexShrink:   0,
          }}
        >
          AI
        </div>
        {!collapsed && (
          <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 15, color: "#1a1a2e" }}>
            HRMS <span style={{ color: accent }}>Pro</span>
          </span>
        )}
      </div>

      {/* Search */}
      <div
        style={{
          flex:         1,
          maxWidth:     480,
          background:   "#F5F5F5",
          borderRadius: 10,
          display:      "flex",
          alignItems:   "center",
          padding:      "0 13px",
          height:       37,
          gap:          7,
        }}
      >
        <span style={{ color: "#bbb", fontSize: 14 }}>🔍</span>
        <input
          placeholder="Search employees, reports, modules..."
          style={{ border: "none", background: "none", outline: "none", flex: 1, fontSize: 13, color: "#333", fontFamily: "'DM Sans', sans-serif" }}
        />
      </div>

      {/* Right actions */}
      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
        <button
          onClick={() => onNavigate("ai")}
          style={{
            background:   `linear-gradient(135deg, ${accent}, #ff6b1a)`,
            border:       "none",
            borderRadius: 8,
            padding:      "6px 14px",
            color:        "white",
            fontSize:     13,
            fontWeight:   600,
            cursor:       "pointer",
            display:      "flex",
            alignItems:   "center",
            gap:          6,
          }}
        >
          <span>✦</span> AI Assistant
        </button>

        {/* Notifications bell */}
        <div style={{ position: "relative", cursor: "pointer" }} onClick={() => onNavigate("notifications")}>
          <div style={{ width: 36, height: 36, background: "#F5F5F5", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
            🔔
          </div>
          {unread > 0 && (
            <div
              style={{
                position:       "absolute",
                top:            5,
                right:          5,
                width:          16,
                height:         16,
                background:     "#f43f5e",
                borderRadius:   "50%",
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                fontSize:       9,
                color:          "white",
                fontWeight:     800,
              }}
            >
              {unread}
            </div>
          )}
        </div>

        {/* User avatar */}
        <div
          style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", padding: "4px 10px", borderRadius: 10, background: "#F5F5F5" }}
          onClick={() => onNavigate("settings")}
        >
          <div
            style={{
              width:          29,
              height:         29,
              borderRadius:   "50%",
              background:     `linear-gradient(135deg, ${accent}, #6366f1)`,
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              color:          "white",
              fontSize:       11,
              fontWeight:     700,
            }}
          >
            AK
          </div>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#333" }}>Arjun</span>
        </div>
      </div>
    </header>
  );
}
