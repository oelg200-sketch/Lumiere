export const siteConfig = {
  name: 'Lumière',
  fullName: 'Lumière Cosmetics',
  tagline: 'Belleza que nace de la naturaleza',
  email: 'hola@lumiere-cosmetics.com',
  phone: '+503 2000 0000',
  address: 'Centro Comercial Galerías, Local 25, San Salvador, El Salvador',
  social: {
    instagram: 'https://instagram.com',
    tiktok: 'https://tiktok.com',
    facebook: 'https://facebook.com',
    pinterest: 'https://pinterest.com',
    youtube: 'https://youtube.com',
  },
};

export type SocialKey = keyof typeof siteConfig.social;

export const socialLinks: { key: SocialKey; label: string; icon: string }[] = [
  { key: 'instagram', label: 'Instagram', icon: 'instagram' },
  { key: 'tiktok', label: 'TikTok', icon: 'tiktok' },
  { key: 'facebook', label: 'Facebook', icon: 'facebook' },
  { key: 'pinterest', label: 'Pinterest', icon: 'pinterest' },
  { key: 'youtube', label: 'YouTube', icon: 'youtube' },
];
