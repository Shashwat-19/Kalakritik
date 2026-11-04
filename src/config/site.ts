export const site = {
  name: 'KALAKRITIK',
  instagramUrl: 'https://www.instagram.com/kalakritik/',
  customizationFormUrl: '',
  reviewFormUrl: '',
  // Set to your verified HTTPS production origin before deployment.
  url: process.env.NEXT_PUBLIC_SITE_URL || '',
};
export const navigation = [
  ['Home', '#home'], ['Creations', '#creations'], ['Our Story', '#story'],
  ['Custom Orders', '#custom'], ['Reviews', '#reviews'],
] as const;
