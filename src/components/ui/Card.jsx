import { cardStyle } from "../../styles/theme";

/**
 * Card — standard white rounded container used across every page.
 */
export default function Card({ children, style = {} }) {
  return <div style={{ ...cardStyle, ...style }}>{children}</div>;
}
