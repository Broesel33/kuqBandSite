const CLOUD_NAME = "di3cxq3qc";

/** Baut eine Cloudinary-URL für ein Bild mit optionalen Transformationen. */
export function cloudinaryUrl(
  publicId: string,
  options: {
    width?: number;
    quality?: number | "auto";
    format?: string;
    crop?: string;
    gravity?: string;
    aspectRatio?: string;
  } = {}
): string {
  const { width, quality = "auto", format = "auto", crop, gravity, aspectRatio } = options;

  const transforms = [
    `f_${format}`,
    `q_${quality}`,
    aspectRatio ? `ar_${aspectRatio}` : null,
    width ? `w_${width}` : null,
    crop ? `c_${crop}` : "c_limit",
    gravity ? `g_${gravity}` : null,
  ]
    .filter(Boolean)
    .join(",");

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms}/${publicId}`;
}

/** Baut eine Cloudinary-URL für ein Video. */
export function cloudinaryVideoUrl(publicId: string): string {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${publicId}`;
}
