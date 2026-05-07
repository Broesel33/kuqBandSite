"use client";

import { useState } from "react";

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
}

export default function YouTubeFacade({ videoId, title }: YouTubeFacadeProps) {
  const [active, setActive] = useState(false);

  // hqdefault (480×360) is guaranteed to exist for all videos
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  if (active) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    );
  }

  return (
    <button
      onClick={() => setActive(true)}
      aria-label={`Video abspielen: ${title}`}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        border: "none",
        padding: 0,
        cursor: "pointer",
        background: "none",
        display: "block",
      }}
    >
      {/* Plain img avoids next/image remote-pattern config for an external thumbnail */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumbnailUrl}
        alt={title}
        loading="lazy"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      {/* Play button overlay */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          background: "var(--color-amber)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="#000"
          style={{ marginLeft: "3px" }}
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  );
}
