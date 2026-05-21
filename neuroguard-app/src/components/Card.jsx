import React from "react";

export default function Card({ title, children, accent = "#00ff9d" }) {
  return (
    <div style={{
      background: "#0d1117",
      border: `1px solid ${accent}25`,
      borderLeft: `3px solid ${accent}`,
      borderRadius: "8px",
      padding: "1.25rem 1.5rem",
      margin: "1rem 0"
    }}>
      {title && <div style={{
        color: accent, fontFamily: "'Space Mono', monospace",
        fontSize: "0.75rem", fontWeight: 700,
        marginBottom: "0.75rem", letterSpacing: "0.05em"
      }}>▸ {title}</div>}
      <div>{children}</div>
    </div>
  );
}
