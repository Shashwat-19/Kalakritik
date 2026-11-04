export const site = {
  name: 'KALAKRITIK',
  instagramUrl: 'https://www.instagram.com/kalakritik/',
  customizationFormUrl: 'https://docs.google.com/forms/d/1m_7GONVdU2j_Xd-NsipdSao7FpvV2YKS6NbyPdPmwa8/viewform?edit_requested=true',
  reviewFormUrl: '',
  // Set to your verified HTTPS production origin before deployment.
  url: process.env.NEXT_PUBLIC_SITE_URL || '',
};
export const navigation = [
  ['Home', '#home'], ['Creations', '#creations'], ['Our Story', '#story'],
  ['Custom Orders', '#custom'], ['Reviews', '#reviews'],
] as const;
