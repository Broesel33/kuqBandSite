"use client";

import { useState } from "react";

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
}

export default function YouTubeFacade({ videoId, title }: YouTubeFacadeProps) {
  const [active, setActive] = useState(false);

  // Vorschaubild liegt lokal in /public — vor dem Klick entsteht so keinerlei
  // Verbindung zu Google. Erst das Abspielen lädt YouTube nach (Zwei-Klick-Lösung).
  const thumbnailUrl = "/video-vorschau.jpg";

  if (active) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
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
      type="button"
      onClick={() => setActive(true)}
      aria-label={`Video abspielen: ${title}. Beim Abspielen wird eine Verbindung zu YouTube hergestellt.`}
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
      {/* Dekorativ: Der Button trägt bereits die vollständige Beschriftung */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumbnailUrl}
        alt=""
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
      {/* Datenschutzhinweis vor dem ersten Kontakt zu YouTube */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          padding: "0.625rem 1rem",
          background: "rgba(0,0,0,0.72)",
          color: "#ffffff",
          fontFamily: "var(--font-ui)",
          fontSize: "0.8125rem",
          lineHeight: 1.45,
          textAlign: "center",
        }}
      >
        Beim Abspielen wird eine Verbindung zu YouTube hergestellt.
      </span>
    </button>
  );
}
