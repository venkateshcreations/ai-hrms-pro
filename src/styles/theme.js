// ── Design Tokens ─────────────────────────────────────────────────────
export const accent      = "#FF8A3D";
export const accentLight = "#FFE8DA";
export const dark        = "#1a1a2e";
export const border      = "#F0F0F0";
export const bg          = "#F7F7F8";
export const bgCard      = "#FFFFFF";

// ── Reusable style objects ─────────────────────────────────────────────
export const cardStyle = {
  background:   bgCard,
  borderRadius: 14,
  padding:      "22px 24px",
  boxShadow:    "0 1px 6px rgba(0,0,0,0.05)",
  border:       `1px solid ${border}`,
};

export const pill = (bg, col) => ({
  display:      "inline-block",
  padding:      "3px 11px",
  borderRadius: 20,
  fontSize:     12,
  fontWeight:   600,
  background:   bg,
  color:        col,
});

export const btn = (primary) => ({
  background:   primary ? `linear-gradient(135deg, ${accent}, #ff6b1a)` : "#fff",
  border:       primary ? "none" : `1px solid #E6E6E6`,
  borderRadius: 9,
  padding:      "8px 18px",
  fontSize:     13,
  fontWeight:   600,
  color:        primary ? "#fff" : "#555",
  cursor:       "pointer",
});

// ── Status chip colour map ─────────────────────────────────────────────
export const STATUS_COLORS = {
  "Active":       ["#d1fae5", "#065f46"],
  "On Leave":     ["#fef3c7", "#92400e"],
  "Approved":     ["#d1fae5", "#065f46"],
  "Pending":      ["#fef9c3", "#713f12"],
  "Rejected":     ["#fee2e2", "#991b1b"],
  "Paid":         ["#d1fae5", "#065f46"],
  "Paused":       ["#f3f4f6", "#374151"],
  "On Track":     ["#d1fae5", "#065f46"],
  "At Risk":      ["#fee2e2", "#991b1b"],
  "Applied":      ["#e0e7ff", "#3730a3"],
  "Screening":    ["#fef3c7", "#92400e"],
  "Shortlisted":  ["#dbeafe", "#1e40af"],
  "Interview":    ["#ede9fe", "#5b21b6"],
  "Offer":        ["#d1fae5", "#065f46"],
  "Hired":        ["#bbf7d0", "#14532d"],
  "Completed":    ["#d1fae5", "#065f46"],
  "In Progress":  ["#dbeafe", "#1e40af"],
};
