"use client";

import { useState } from "react";

export default function AudioButton() {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    if (isPlaying) return;
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.value = 440;
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 2);
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 2100);
  };

  return (
    <button
      type="button"
      onClick={playAudio}
      disabled={isPlaying}
      className="inline-flex items-center gap-2 text-sm font-semibold min-h-[44px] px-3 transition-opacity rounded"
      style={{
        color: "var(--color-text-muted-on-dark)",
        fontFamily: "var(--font-ui)",
        opacity: isPlaying ? 0.6 : 1,
        background: "transparent",
        border: "none",
        cursor: isPlaying ? "default" : "pointer",
      }}
      aria-label={isPlaying ? "Hörprobe läuft" : "Hörprobe abspielen"}
    >
      <span
        className="material-symbols-outlined"
        aria-hidden="true"
        style={{ fontSize: "1.1rem" }}
      >
        {isPlaying ? "graphic_eq" : "play_circle"}
      </span>
      {isPlaying ? "Läuft …" : "Hörprobe"}
    </button>
  );
}
