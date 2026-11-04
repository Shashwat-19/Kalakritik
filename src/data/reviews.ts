export type Review = { id: string; quote: string; author: string };
// Add only approved, verified reviews. Form submissions do not publish automatically.
export const reviews: Review[] = [];
