import React from "react";

export default function Table({ headers, rows }) {
  return (
    <div style={{ overflowX: "auto", margin: "1rem 0" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} style={{
                padding: "0.6rem 1rem", textAlign: "left",
                background: "#00ff9d15",
                border: "1px solid #00ff9d20",
                color: "#00ff9d",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.72rem",
                fontWeight: 600
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#ffffff05" : "transparent" }}>
              {row.map((cell, j) => (
                <td key={j} style={{
                  padding: "0.6rem 1rem",
                  border: "1px solid #ffffff10",
                  color: "#c8d8c8",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.71rem",
                  lineHeight: 1.5
                }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
