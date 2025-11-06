export const MONETIZATION_COLORS = {
  pink: {
    gradient: 'from-pink-500 to-rose-500',
    icon: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-400/20',
    hover: 'hover:shadow-pink-500/20',
  },
  yellow: {
    gradient: 'from-yellow-500 to-orange-500',
    icon: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-400/20',
    hover: 'hover:shadow-yellow-500/20',
  },
  blue: {
    gradient: 'from-blue-500 to-cyan-500',
    icon: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-400/20',
    hover: 'hover:shadow-blue-500/20',
  },
  green: {
    gradient: 'from-green-500 to-emerald-500',
    icon: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-400/20',
    hover: 'hover:shadow-green-500/20',
  },
  purple: {
    gradient: 'from-purple-500 to-violet-500',
    icon: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-400/20',
    hover: 'hover:shadow-purple-500/20',
  },
} as const;

export type MonetizationColors = typeof MONETIZATION_COLORS;
export type ColorTheme = keyof MonetizationColors;
export type ColorVariant = keyof MonetizationColors[ColorTheme];