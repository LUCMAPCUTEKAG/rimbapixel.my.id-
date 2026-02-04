export interface Project {
  slug: string;
  title_ar: string;
  title_en: string;
  desc_ar: string;
  desc_en: string;
  year: number;
  tags: string[];
  category?: string;
  coverImage: string;
  galleryImages: string[];
  videos?: Array<{ url: string; poster?: string }>;
  featured: boolean;
}

export interface Motion {
  slug: string;
  title_ar: string;
  title_en: string;
  desc_ar: string;
  desc_en: string;
  year: number;
  tags: string[];
  posterImage: string;
  videoUrl: string;
  localVideo?: string;
  featured: boolean;
}

export interface About {
  about_ar: string;
  about_en: string;
  highlights_ar: string[];
  highlights_en: string[];
  skills?: string[];
}

export interface Settings {
  brand_ar: string;
  brand_en: string;
  name_ar: string;
  name_en: string;
  experience_ar: string;
  experience_en: string;
  location_ar: string;
  location_en: string;
  whatsapp: string;
  telegram: string;
  email: string;
  seo_title_ar: string;
  seo_title_en: string;
  seo_desc_ar: string;
  seo_desc_en: string;
  og_image: string;
}
