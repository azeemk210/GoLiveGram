export const SITE_METRICS = {
  activeCreators: 125_000,
  totalViewers: 2_800_000,
  appRating: 4.6,
  paidToCreatorsUSD: 2_000_000,
  uptimePct: 99.9,
  ratingCount: 8_500,
} as const;

export type SiteMetrics = typeof SITE_METRICS;