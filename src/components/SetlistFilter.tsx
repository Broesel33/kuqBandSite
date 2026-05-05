"use client";

import { useState, useRef, KeyboardEvent } from "react";

export interface GenreSection {
  id: string;
  label: string;
  badgeColor: string;
  songs: { title: string; artist: string; decade?: string }[];
}

interface SetlistFilterProps {
  genres: GenreSection[];
}

export default function SetlistFilter({ genres }: SetlistFilterProps) {
  const [activeId, setActiveId] = useState(genres[0]?.id ?? "");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleTabKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = (index + 1) % genres.length;
      setActiveId(genres[next].id);
      tabRefs.current[next]?.focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = (index - 1 + genres.length) % genres.length;
      setActiveId(genres[prev].id);
      tabRefs.current[prev]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveId(genres[0].id);
      tabRefs.current[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      const last = genres.length - 1;
      setActiveId(genres[last].id);
      tabRefs.current[last]?.focus();
    }
  }

  const activeGenre = genres.find((g) => g.id === activeId);

  return (
    <div>
      {/* Tab List */}
      <div
        role="tablist"
        aria-label="Genres filtern"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginBottom: "2.5rem",
        }}
      >
        {genres.map((genre, index) => {
          const isActive = activeId === genre.id;
          return (
            <button
              key={genre.id}
              role="tab"
              id={`tab-${genre.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${genre.id}`}
              tabIndex={isActive ? 0 : -1}
              ref={(el) => { tabRefs.current[index] = el; }}
              onClick={() => setActiveId(genre.id)}
              onKeyDown={(e) => handleTabKeyDown(e, index)}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "9999px",
                border: isActive ? "2px solid var(--color-amber)" : "2px solid var(--color-border)",
                background: isActive ? "var(--color-amber)" : "transparent",
                color: isActive ? "#000" : "var(--color-text-secondary)",
                fontFamily: "var(--font-ui)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                cursor: "pointer",
                minHeight: "44px",
                transition: "all 0.15s",
              }}
            >
              {genre.label}
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      {genres.map((genre) => (
        <div
          key={genre.id}
          role="tabpanel"
          id={`panel-${genre.id}`}
          aria-labelledby={`tab-${genre.id}`}
          hidden={activeId !== genre.id}
          tabIndex={0}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "2rem",
            }}
          >
            <span
              style={{
                padding: "0.25rem 0.875rem",
                borderRadius: "9999px",
                fontSize: "0.75rem",
                fontWeight: 600,
                fontFamily: "var(--font-ui)",
                background: "var(--color-amber-light)",
                color: "var(--color-amber-text)",
              }}
            >
              {genre.label}
            </span>
            <span style={{ color: "var(--color-text-muted)", fontSize: "0.8125rem", fontFamily: "var(--font-ui)" }}>
              {genre.songs.length} Songs
            </span>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {genre.songs.map((song) => (
              <li
                key={`${song.artist}-${song.title}`}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "1.5rem",
                  padding: "0.875rem 0",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                {song.decade && (
                  <span
                    style={{
                      width: "2.5rem",
                      flexShrink: 0,
                      fontSize: "0.75rem",
                      color: "var(--color-text-muted)",
                      fontFamily: "var(--font-ui)",
                    }}
                  >
                    {song.decade}
                  </span>
                )}
                <div>
                  <p style={{ fontWeight: 700, color: "var(--color-text)", fontFamily: "var(--font-headline)", fontSize: "1rem" }}>
                    {song.title}
                  </p>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.875rem", fontFamily: "var(--font-body)", marginTop: "0.125rem" }}>
                    {song.artist}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
