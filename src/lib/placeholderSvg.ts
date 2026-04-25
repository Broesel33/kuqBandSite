export function getPlaceholderSvg(
  width: number,
  height: number,
  dark = false
): string {
  const bg = dark ? '#162338' : '#f0ece7';
  const border = dark ? 'rgba(255,255,255,0.15)' : '#ddd8d2';
  const textColor = dark ? '#b0bec8' : '#8a9baa';

  const svg = [
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">`,
    `<rect width="100%" height="100%" fill="${bg}" stroke="${border}" stroke-width="2" stroke-dasharray="8,4"/>`,
    `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" `,
    `fill="${textColor}" font-family="sans-serif" font-size="14" font-weight="600" letter-spacing="2">FOTO FOLGT</text>`,
    `</svg>`,
  ].join('');

  const encoded = Buffer.from(svg).toString('base64');
  return `data:image/svg+xml;base64,${encoded}`;
}
