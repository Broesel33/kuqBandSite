interface PlaceholderImageProps {
  alt: string;
  label?: string;
  variant?: 'dark' | 'light';
  className?: string;
}

export default function PlaceholderImage({
  alt,
  label = "Foto folgt",
  variant = 'light',
  className = "",
}: PlaceholderImageProps) {
  const isDark = variant === 'dark';

  return (
    <div
      role="img"
      aria-label={alt}
      className={`w-full h-full flex flex-col items-center justify-center gap-3 ${className}`}
      style={{
        backgroundColor: isDark ? 'var(--color-navy-mid)' : 'var(--color-warm-gray)',
        border: `2px dashed ${isDark ? 'rgba(255,255,255,0.15)' : 'var(--color-border)'}`,
      }}
    >
      <span
        className="material-symbols-outlined"
        aria-hidden="true"
        style={{
          fontSize: '2.5rem',
          color: isDark ? 'rgba(176,190,200,0.4)' : 'rgba(138,155,170,0.5)',
        }}
      >
        photo_camera
      </span>
      <span
        style={{
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: isDark ? 'rgba(176,190,200,0.5)' : 'rgba(138,155,170,0.6)',
        }}
      >
        {label}
      </span>
    </div>
  );
}
