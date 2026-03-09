/**
 * Avatar — circular initials avatar with hue-rotated background.
 */
export default function Avatar({ initials, index = 0, size = 34 }) {
  const hue = ((index || 0) * 47 + 20) % 360;
  return (
    <div
      style={{
        width:          size,
        height:         size,
        borderRadius:   "50%",
        background:     `hsl(${hue}, 70%, 88%)`,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        fontSize:       size > 36 ? 14 : 12,
        fontWeight:     700,
        color:          `hsl(${hue}, 60%, 35%)`,
        flexShrink:     0,
      }}
    >
      {initials}
    </div>
  );
}
