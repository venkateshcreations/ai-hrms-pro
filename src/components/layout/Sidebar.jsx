import { accent, accentLight } from "../../styles/theme";
import { NAV } from "../../data/navigation";

export default function Sidebar({ collapsed, setCollapsed, page, setPage, expandedNav, setExpandedNav, unread }) {
  const handleNav = (id, isParent = false) => {
    if (isParent) {
      setExpandedNav((prev) => (prev === id ? null : id));
    } else {
      setPage(id);
    }
  };

  return (
    <aside
      style={{
        width:      collapsed ? 68 : 258,
        background: "#fff",
        borderRight:"1px solid #EBEBEB",
        position:   "fixed",
        top:        58,
        bottom:     0,
        left:       0,
        overflowY:  "auto",
        overflowX:  "hidden",
        transition: "width .28s cubic-bezier(.4,0,.2,1)",
        zIndex:     150,
      }}
    >
      {/* Collapse toggle */}
      <div style={{ padding: "10px 8px 6px" }}>
        <button
          onClick={() => setCollapsed((c) => !c)}
          style={{
            width:          "100%",
            background:     "#F5F5F5",
            border:         "none",
            borderRadius:   8,
            padding:        "6px",
            cursor:         "pointer",
            display:        "flex",
            alignItems:     "center",
            justifyContent: collapsed ? "center" : "flex-end",
            color:          "#aaa",
            fontSize:       13,
          }}
        >
          {collapsed ? "→" : "← Collapse"}
        </button>
      </div>

      <nav style={{ padding: "4px 8px 20px" }}>
        {NAV.map((item) => {
          const isActive   = page === item.id || item.children?.some((c) => c.id === page);
          const isExpanded = expandedNav === item.id || item.children?.some((c) => c.id === page);

          return (
            <div key={item.id}>
              {/* Parent item */}
              <div
                className="hov-nav"
                onClick={() => item.children ? handleNav(item.id, true) : handleNav(item.id)}
                style={{
                  display:        "flex",
                  alignItems:     "center",
                  gap:            9,
                  padding:        collapsed ? "10px 0" : "8px 11px",
                  borderRadius:   9,
                  marginBottom:   1,
                  justifyContent: collapsed ? "center" : "flex-start",
                  background:     isActive && !item.children ? accentLight : isActive && item.children ? "#FFF5EE" : "transparent",
                  color:          isActive ? accent : "#555",
                  fontWeight:     isActive ? 600 : 400,
                  fontSize:       14,
                  cursor:         "pointer",
                  transition:     "all .15s",
                }}
              >
                <span style={{ fontSize: item.id === "ai" ? 16 : 14, flexShrink: 0 }}>{item.icon}</span>
                {!collapsed && (
                  <>
                    <span style={{ flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {item.label}
                    </span>
                    {item.children && (
                      <span style={{ fontSize: 10, color: "#ccc", transform: isExpanded ? "rotate(90deg)" : "none", transition: "transform .2s" }}>›</span>
                    )}
                    {item.id === "ai" && (
                      <span style={{ background: accent, color: "white", fontSize: 9, padding: "1px 6px", borderRadius: 8, fontWeight: 700 }}>AI</span>
                    )}
                    {item.id === "notifications" && unread > 0 && (
                      <span style={{ background: "#f43f5e", color: "white", fontSize: 10, padding: "1px 7px", borderRadius: 10, fontWeight: 800 }}>{unread}</span>
                    )}
                  </>
                )}
              </div>

              {/* Children */}
              {!collapsed && item.children && isExpanded && (
                <div className="slide-down" style={{ paddingLeft: 26, paddingBottom: 4 }}>
                  {item.children.map((child) => (
                    <div
                      key={child.id}
                      className="hov-nav"
                      onClick={() => handleNav(child.id)}
                      style={{
                        padding:    "7px 10px",
                        borderRadius: 8,
                        fontSize:   13,
                        color:      page === child.id ? accent : "#777",
                        fontWeight: page === child.id ? 600 : 400,
                        cursor:     "pointer",
                        display:    "flex",
                        alignItems: "center",
                        gap:        7,
                        background: page === child.id ? accentLight : "transparent",
                        marginBottom: 1,
                        transition: "all .15s",
                      }}
                    >
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: page === child.id ? accent : "#D0D0D0", flexShrink: 0 }} />
                      {child.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
