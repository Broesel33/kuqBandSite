"use client";

import { useState } from "react";

const SHOW_BANNER = true;

export default function ConstructionBanner() {
  const [closed, setClosed] = useState(false);

  if (!SHOW_BANNER || closed) return null;

  return (
    <div
      role="status"
      style={{
        backgroundColor: "#f97316",
        color: "#000",
        fontSize: "0.875rem",
        fontWeight: 600,
        lineHeight: 1.5,
        zIndex: 100,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // Min-height ensures the banner is tall enough for a 44px touch target
        minHeight: "44px",
        padding: "0.5rem 3rem 0.5rem 1rem",
      }}
    >
      <span style={{ textAlign: "center" }}>
        🚧 Diese Website befindet sich noch im Aufbau — nicht alle Inhalte sind bereits verfügbar. Danke für dein Verständnis!
      </span>
      <button
        onClick={() => setClosed(true)}
        aria-label="Banner schließen"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          // Full-height button = always at least 44px tall, easy to tap
          width: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "1.125rem",
          color: "#000",
          opacity: 0.6,
          flexShrink: 0,
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.6")}
      >
        ✕
      </button>
    </div>
  );
}
