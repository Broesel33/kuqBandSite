import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const bandData = readFileSync(join(process.cwd(), 'public', 'band.png'))
  const bandSrc = `data:image/png;base64,${bandData.toString('base64')}`

  let fontData: ArrayBuffer | null = null
  try {
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), 3000)
    const css = await fetch(
      'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap',
      { headers: { 'User-Agent': 'Mozilla/5.0' }, signal: ctrl.signal }
    ).then((r) => r.text())
    clearTimeout(timer)
    const match = css.match(/url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/)
    if (match?.[1]) fontData = await fetch(match[1]).then((r) => r.arrayBuffer())
  } catch {}

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: '#3c4748',
          position: 'relative',
        }}
      >
        {/* Band photo — rechts, oben verankert */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '520px',
            height: '630px',
            overflow: 'hidden',
            display: 'flex',
          }}
        >
          <img
            src={bandSrc}
            width={520}
            height={630}
            style={{ objectFit: 'cover', objectPosition: 'top center' }}
          />
        </div>

        {/* Gradient: navy links → transparent rechts */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(to right, #3c4748 48%, rgba(60,71,72,0.55) 72%, transparent 100%)',
            display: 'flex',
          }}
        />

        {/* Textinhalt — über allem */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '700px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 64px',
            gap: '0px',
          }}
        >
          <div
            style={{
              fontSize: '15px',
              fontWeight: 700,
              color: '#a8c8cc',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '18px',
              display: 'flex',
            }}
          >
            Hochzeit · Ball · Firmenevents
          </div>

          <div
            style={{
              fontSize: '88px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1,
              marginBottom: '22px',
              display: 'flex',
              fontFamily: fontData ? 'SpaceGrotesk' : 'sans-serif',
            }}
          >
            Kreiz &amp; Quer
          </div>

          <div
            style={{
              fontSize: '25px',
              color: 'rgba(255,255,255,0.78)',
              lineHeight: 1.45,
              maxWidth: '510px',
              marginBottom: '30px',
              display: 'flex',
            }}
          >
            Live-Musik für jeden Anlass — individuell geplant, 100 % live gespielt.
          </div>

          <div
            style={{
              fontSize: '17px',
              color: '#a8c8cc',
              fontWeight: 600,
              letterSpacing: '0.5px',
              display: 'flex',
            }}
          >
            Vollband · Duo · Steiermark & ganz Österreich
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [{ name: 'SpaceGrotesk', data: fontData, weight: 700 as const }]
        : [],
    }
  )
}
