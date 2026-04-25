"use client";

import { useState, useRef, useCallback, KeyboardEvent } from "react";

export interface Song {
  title: string;
  artist: string;
  decade?: string;
  previewUrl?: string;
}

export interface GenreSection {
  id: string;
  label: string;
  songs: Song[];
}

interface RepertoireFilterProps {
  genres: GenreSection[];
}

function playBeep() {
  try {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 440;
    osc.type = "sine";
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.6);
    osc.onended = () => ctx.close();
  } catch {
    // AudioContext not available
  }
}

function SongPreviewButton({ song }: { song: Song }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = useCallback(() => {
    if (song.previewUrl) {
      if (playing && audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setPlaying(false);
        return;
      }
      const audio = new Audio(song.previewUrl);
      audioRef.current = audio;
      audio.play().then(() => {
        setPlaying(true);
        audio.onended = () => setPlaying(false);
      }).catch(() => setPlaying(false));
    } else {
      playBeep();
      setPlaying(true);
      setTimeout(() => setPlaying(false), 700);
    }
  }, [song.previewUrl, playing]);

  return (
    <button
      onClick={handlePlay}
      aria-label={`${playing ? "Stopp" : "Vorschau"}: ${song.title} von ${song.artist}`}
      title={song.previewUrl ? undefined : "Vorschau folgt"}
      style={{
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "2.25rem",
        height: "2.25rem",
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        transition: "background 0.15s, transform 0.1s",
        background: playing ? "var(--color-gold)" : "var(--color-warm-gray-2)",
        color: playing ? "#000" : "var(--color-text-secondary)",
        opacity: song.previewUrl ? 1 : 0.55,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = playing
          ? "var(--color-gold)"
          : "var(--color-border)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = playing
          ? "var(--color-gold)"
          : "var(--color-warm-gray-2)";
      }}
    >
      <span
        className="material-symbols-outlined"
        aria-hidden="true"
        style={{ fontSize: "1.125rem" }}
      >
        {playing ? "stop" : "play_arrow"}
      </span>
    </button>
  );
}

export default function RepertoireFilter({ genres }: RepertoireFilterProps) {
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
        style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}
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
                border: isActive ? "2px solid var(--color-gold)" : "2px solid var(--color-border)",
                background: isActive ? "var(--color-gold)" : "transparent",
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
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <span
              style={{
                padding: "0.25rem 0.875rem",
                borderRadius: "9999px",
                fontSize: "0.75rem",
                fontWeight: 600,
                fontFamily: "var(--font-ui)",
                background: "var(--color-gold-light)",
                color: "#92610a",
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
                  alignItems: "center",
                  gap: "1rem",
                  padding: "0.75rem 0",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                {/* Decade badge */}
                {song.decade && (
                  <span
                    style={{
                      width: "3rem",
                      flexShrink: 0,
                      fontSize: "0.75rem",
                      color: "var(--color-text-muted)",
                      fontFamily: "var(--font-ui)",
                    }}
                  >
                    {song.decade}
                  </span>
                )}

                {/* Song info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontWeight: 700, color: "var(--color-text)", fontFamily: "var(--font-headline)", fontSize: "1rem", margin: 0 }}>
                    {song.title}
                  </p>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.875rem", fontFamily: "var(--font-body)", margin: "0.125rem 0 0" }}>
                    {song.artist}
                  </p>
                </div>

                {/* Preview button */}
                <SongPreviewButton song={song} />
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Legend */}
      <p
        style={{
          marginTop: "2rem",
          fontSize: "0.8125rem",
          color: "var(--color-text-muted)",
          fontFamily: "var(--font-ui)",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          className="material-symbols-outlined"
          aria-hidden="true"
          style={{ fontSize: "1rem" }}
        >
          info
        </span>
        Vorschau-Funktion folgt sobald die Aufnahmen vorliegen.
      </p>
    </div>
  );
}
