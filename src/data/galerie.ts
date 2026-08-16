export type MediaType = 'image' | 'video';

export interface GalerieMedia {
  /** Cloudinary public ID */
  publicId: string;
  alt: string;
  type: MediaType;
}

export interface GalerieEvent {
  slug: string;
  title: string;
  dateLabel: string;
  /** Cloudinary public ID for the preview image */
  previewImage: string;
  previewAlt: string;
  mediaCount: number;
  media: GalerieMedia[];
}

export const galerieEvents: GalerieEvent[] = [
  {
    slug: 'rinthpark-frohnleiten-2026',
    title: 'Eröffnung Rinthpark Frohnleiten',
    dateLabel: '09. Mai 2026',
    previewImage: 'galerie/20260509_Rintpark/img_1',
    previewAlt: 'Kreiz & Quer live bei der Eröffnung des Rinthparks Frohnleiten',
    mediaCount: 9,
    media: [
      { publicId: 'galerie/20260509_Rintpark/img_1', alt: 'Kreiz & Quer live — Eröffnung Rinthpark Frohnleiten, Mai 2026', type: 'image' },
      { publicId: 'galerie/20260509_Rintpark/img_2', alt: 'Kreiz & Quer live — Eröffnung Rinthpark Frohnleiten, Mai 2026', type: 'image' },
      { publicId: 'galerie/20260509_Rintpark/img_3', alt: 'Kreiz & Quer live — Eröffnung Rinthpark Frohnleiten, Mai 2026', type: 'image' },
      { publicId: 'galerie/20260509_Rintpark/img_4', alt: 'Kreiz & Quer live — Eröffnung Rinthpark Frohnleiten, Mai 2026', type: 'image' },
      { publicId: 'galerie/20260509_Rintpark/img_5', alt: 'Kreiz & Quer live — Eröffnung Rinthpark Frohnleiten, Mai 2026', type: 'image' },
      { publicId: 'galerie/20260509_Rintpark/img_6', alt: 'Kreiz & Quer live — Eröffnung Rinthpark Frohnleiten, Mai 2026', type: 'image' },
      { publicId: 'galerie/20260509_Rintpark/img_7', alt: 'Kreiz & Quer live — Eröffnung Rinthpark Frohnleiten, Mai 2026', type: 'image' },
      { publicId: 'galerie/20260509_Rintpark/img_8', alt: 'Kreiz & Quer live — Eröffnung Rinthpark Frohnleiten, Mai 2026', type: 'image' },
      { publicId: 'galerie/20260509_Rintpark/steiermark', alt: 'Kreiz & Quer live — Video von der Eröffnung Rinthpark Frohnleiten, Mai 2026', type: 'video' },
    ],
  },
];
