import type { Metadata } from 'next';
import { site } from '@/config/site';
import '@fontsource-variable/bricolage-grotesque';
import './globals.css';
export const metadata: Metadata = {
  ...(site.url ? { metadataBase: new URL(site.url), alternates: { canonical: '/' } } : {}),
  title: 'Kalakritik — Little loops. Big love.',
  description: 'Explore the warm, creative world of Kalakritik. Handmade crochet inspiration, thoughtful gifts, and custom creations.',
  openGraph: { title: 'Kalakritik — Little loops. Big love.', description: 'Made with yarn, care & creativity.', type: 'website', images: [{ url: '/images/og.png', width: 1200, height: 630, alt: 'Kalakritik crochet bee illustration' }] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
