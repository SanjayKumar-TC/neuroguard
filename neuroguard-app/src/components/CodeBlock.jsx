import React, { useState } from "react";

export default function CodeBlock({ code, lang = "cpp" }) {
  const [copied, setCopied] = useState(false);
  return (
    <div style={{ position: "relative", margin: "1.5rem 0" }}>
      <div style={{
        background: "#0a0a0f",
        border: "1px solid #00ff9d30",
        borderRadius: "8px",
        overflow: "hidden"
      }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "0.5rem 1rem",
          background: "#00ff9d10",
          borderBottom: "1px solid #00ff9d20",
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.7rem",
          color: "#00ff9d80"
        }}>
          <span>{lang.toUpperCase()}</span>
          <button
            onClick={() => { navigator.clipboard?.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
            style={{
              background: "none", border: "1px solid #00ff9d40", color: "#00ff9d",
              padding: "2px 10px", borderRadius: "4px", cursor: "pointer",
              fontFamily: "'Space Mono', monospace", fontSize: "0.65rem"
            }}
          >{copied ? "COPIED!" : "COPY"}</button>
        </div>
        <pre style={{
          margin: 0, padding: "1.25rem",
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.72rem", lineHeight: 1.7,
          color: "#c0ffd0", overflowX: "auto",
          whiteSpace: "pre"
        }}>{code}</pre>
      </div>
    </div>
  );
}
