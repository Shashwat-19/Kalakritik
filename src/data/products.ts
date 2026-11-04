export type Product = { id: string; name: string; description: string; image: string; alt: string; color: string; category: string };
// Illustrative design previews, not verified inventory. Replace with approved brand photography.
export const products: Product[] = [
  { id: 'flowers', name: 'A little forever bloom', description: 'A little inspiration for flowers that stay.', image: '/illustrations/flowers.svg', alt: 'Illustrated crochet daisies in a sage vase; design preview', color: 'sage', category: 'Floral inspiration' },
  { id: 'bee', name: 'Your pocket-sized sunshine', description: 'A tiny companion with a whole lot of character.', image: '/illustrations/bee-scene.svg', alt: 'Illustrated striped crochet bee on a warm pink background; design preview', color: 'rose', category: 'Amigurumi inspiration' },
  { id: 'bag', name: 'Loops for everyday', description: 'Soft textures and colors to make your own.', image: '/illustrations/bag.svg', alt: 'Illustrated sage crochet bag with a daisy; design preview', color: 'oat', category: 'Accessory inspiration' },
];
export const categories = ['All inspiration', 'Floral inspiration', 'Amigurumi inspiration', 'Accessory inspiration'] as const;
