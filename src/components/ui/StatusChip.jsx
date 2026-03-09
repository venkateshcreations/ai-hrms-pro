import { STATUS_COLORS, pill } from "../../styles/theme";

/**
 * StatusChip — renders a colour-coded pill for any status string.
 */
export default function StatusChip({ status }) {
  const [bg, col] = STATUS_COLORS[status] || ["#f3f4f6", "#555"];
  return <span style={pill(bg, col)}>{status}</span>;
}
