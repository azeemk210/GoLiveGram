export const SITE_METRICS = {
  activeCreators: 2_500_000,
  totalViewers: 8_500_000,
  appRating: 4.8,
  paidToCreatorsUSD: 2_000_000,
  uptimePct: 99.9,
  ratingCount: 15_000,
} as const;

export type SiteMetrics = typeof SITE_METRICS;