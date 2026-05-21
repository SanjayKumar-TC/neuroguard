import React from "react";

export default function Tag({ children, color = "#00ff9d" }) {
  return (
    <span style={{
      display: "inline-block",
      background: color + "15",
      border: `1px solid ${color}40`,
      color: color,
      padding: "2px 10px",
      borderRadius: "20px",
      fontSize: "0.72rem",
      fontFamily: "'Space Mono', monospace",
      margin: "3px"
    }}>{children}</span>
  );
}
