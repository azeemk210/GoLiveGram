import React from 'react';
import {
  Gift,
  Crown,
  Handshake,
  DollarSign,
  Lock,
  Zap,
  Target
} from 'lucide-react';
import FloatingMoney from '../UI/FloatingMoney';
import DownloadCta from '../DownloadCta';
import { MONETIZATION_COLORS, type ColorTheme } from '../../config/monetizationColors';

type RevenueStream = {
  icon: React.ReactNode;
  emoji: string;
  title: string;
  description: string;
  badge?: string;
  examples: string[];
  earnings: string;
  color: ColorTheme;
};

const revenueStreams: RevenueStream[] = [
  {
    icon: <Gift className="w-8 h-8" />,
    emoji: '🎁',
    title: 'Virtual Gifts',
    description: 'Fans send animated gifts during streams — instantly convertible to earnings.',
    badge: 'Popular',
    examples: ['Rose 🌹 — $0.50', 'Diamond 💎 — $5.00', 'Crown 👑 — $10.00'],
    earnings: '$50–500 / day',
    color: 'pink'
  },
  {
    icon: <Crown className="w-8 h-8" />,
    emoji: '👑',
    title: 'Paid Subscriptions',
    description: 'Recurring revenue from tiered subscriber content and perks.',
    badge: 'Stable',
    examples: ['Basic — $2.99/mo', 'Premium — $9.99/mo', 'VIP — $19.99/mo'],
    earnings: '$300–3,000 / month',
    color: 'yellow'
  },
  {
    icon: <Handshake className="w-8 h-8" />,
    emoji: '🤝',
    title: 'Brand Partnerships',
    description: 'Sponsored content, affiliate deals, and long-term collaborations.',
    badge: 'Top',
    examples: ['Nike Campaign', 'Coca‑Cola Promo', 'Samsung Collab'],
    earnings: '$500–5,000 / campaign',
    color: 'blue'
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    emoji: '💸',
    title: 'Live Donations',
    description: 'Real-time tips and one-off support from your community.',
    badge: 'Realtime',
    examples: ['Sarah donated $25 🎉', 'Mike sent $50 💝', 'Anna tipped $100 🚀'],
    earnings: '$100–1,000 / stream',
    color: 'green'
  },
  {
    icon: <Lock className="w-8 h-8" />,
    emoji: '🔐',
    title: 'Exclusive Content',
    description: 'Gate premium posts, videos, and behind-the-scenes for paying fans.',
    badge: 'Premium',
    examples: ['Behind the Scenes', 'Paid Tutorials', 'Members Q&A'],
    earnings: '$200–2,000 / month',
    color: 'purple'
  },
  {
    icon: <Target className="w-8 h-8" />,
    emoji: '🛒',
    title: 'Merchandise & Products',
    description: 'Sell branded merchandise, digital products, and exclusive items to your fanbase.',
    badge: 'Trending',
    examples: ['T-Shirts & Hoodies', 'Digital Courses', 'Signed Merch'],
    earnings: '$400–4,000 / month',
    color: 'blue'
  }
];

const Monetization: React.FC = () => {
  return (
    <section id="monetization" className="py-20 bg-white" aria-labelledby="monetization-heading">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-600 font-medium mb-4"
            role="status"
            aria-live="polite"
          >
            <span className="w-5 h-5 mr-2" aria-hidden="true">💰</span>
            Monetization Hub
          </div>
          <h2 id="monetization-heading" className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Multiple Ways to{' '}
            <span className="text-gradient bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              Monetize
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Turn Your Creativity Into Cold Hard Cash! 💵
            <br />
            <span className="text-green-600 font-semibold">Average Creator Earnings: $500–$5,000 / month 📈</span>
          </p>
        </div>

        {/* Revenue Streams Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-12" role="list">
          {revenueStreams.map((stream, idx) => {
            const color = MONETIZATION_COLORS[stream.color];
            return (
              <article
                key={idx}
                role="listitem"
                aria-labelledby={`rs-title-${idx}`}
                className={`relative feature-card group hover:shadow-2xl rounded-2xl bg-white p-6 border border-gray-100 ${color.hover} transition-all duration-300 hover:scale-105 h-full flex flex-col`}
              >
                {/* gradient halo (decorative) */}
                <div
                  className={`absolute -inset-1 rounded-2xl blur-lg opacity-30 pointer-events-none bg-gradient-to-r ${color.gradient}`}
                  aria-hidden="true"
                />
                {/* content (on top of halo) */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="relative">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ${color.bg} relative overflow-hidden`}
                        aria-hidden="true"
                      >
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-current"></div>
                          <div className="absolute bottom-2 right-2 w-1 h-1 rounded-full bg-current"></div>
                          <div className="absolute top-4 right-3 w-1.5 h-1.5 rounded-full bg-current"></div>
                        </div>
                        
                        {/* Actual icon using appropriate colored fill */}
                        <div className={`${color.icon} relative z-10`}>
                          {stream.icon}
                        </div>
                      </div>
                      <div className="absolute -top-3 -right-3 text-3xl drop-shadow-lg" aria-hidden="true">
                        {stream.emoji}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3">
                        <h3 id={`rs-title-${idx}`} className="text-xl font-heading font-bold text-gray-900 truncate">
                          {stream.title}
                        </h3>
                        {stream.badge && (
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${color.gradient} shadow-md`}
                            aria-hidden="true"
                          >
                            {stream.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{stream.description}</p>

                  <div className="space-y-2 flex-grow">
                    <div className="text-sm font-medium text-gray-800 mb-3 flex items-center gap-2">
                      <span className="text-lg">💡</span>
                      Examples:
                    </div>
                    {stream.examples.map((ex, i) => (
                      <div key={i} className={`bg-gradient-to-r from-white to-gray-50 border ${color.border} rounded-lg p-3 hover:shadow-md transition-shadow duration-200 relative overflow-hidden`}>
                        <div className="absolute top-0 right-0 w-12 h-12 opacity-5">
                          <div className={`w-full h-full ${color.bg} rounded-full transform translate-x-4 -translate-y-4`}></div>
                        </div>
                        <div className="text-sm font-medium text-gray-700 relative z-10 flex items-center gap-2">
                          <span className="text-xs opacity-60">•</span>
                          {ex}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-200">
                    <div className={`text-center mb-3 text-xs font-semibold ${color.icon} uppercase tracking-wider`}>
                      {stream.earnings}
                    </div>
                    <button
                      type="button"
                      className={`w-full text-white py-3 px-4 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center bg-gradient-to-r ${color.gradient} relative overflow-hidden group`}
                      aria-label={`Start earning with ${stream.title}`}
                    >
                      <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                      <span className="relative z-10">Start Earning</span>
                      <Zap className="w-4 h-4 inline ml-2 relative z-10 group-hover:animate-pulse" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Trust Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12" aria-hidden="false">
          <div className="text-sm text-gray-600">Trusted by</div>
          <div className="bg-gray-50 rounded-full px-4 py-2 text-sm font-semibold">2M+ creators</div>
          <div className="bg-gray-50 rounded-full px-4 py-2 text-sm font-semibold">$2M+ paid out</div>
          <div className="bg-gray-50 rounded-full px-4 py-2 text-sm font-semibold">300% YoY growth</div>
        </div>

        {/* Success Story Banner */}
        <div
          className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white text-center mb-16 relative overflow-hidden"
          role="region"
          aria-label="Success story"
        >
          <div className="absolute right-6 top-6 opacity-30">
            <FloatingMoney />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-6xl mb-4" aria-hidden="true">🎉</div>
            <h3 className="text-3xl font-bold mb-4">Our Top Creator Earned $50,000 Last Month!</h3>
            <p className="text-xl text-green-100 mb-6">
              Join the creator economy revolution and start building your income streams today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 rounded-full px-6 py-2">
                <span className="font-semibold">💰 $2M+ paid to creators</span>
              </div>
              <div className="bg-white/20 rounded-full px-6 py-2">
                <span className="font-semibold">📈 300% monthly growth</span>
              </div>
              <div className="bg-white/20 rounded-full px-6 py-2">
                <span className="font-semibold">🏆 #1 Creator Platform</span>
              </div>
            </div>
          </div>
        </div>

        {/* Earnings Calculator */}
        <div className="earnings-calculator bg-gray-50 rounded-3xl p-8 mb-6" role="region" aria-label="Earnings calculator">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">💰 Earnings Calculator</h3>
              <p className="text-gray-600">Estimate what you could earn as a GoLiveGram creator</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">🥉</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Beginner Creator</h4>
                <div className="text-3xl font-bold text-green-600 mb-4">$500–1K</div>
                <div className="text-gray-600 space-y-2 text-sm">
                  <div>• 100–500 followers</div>
                  <div>• 2–3 streams / week</div>
                  <div>• Basic monetization</div>
                </div>
              </div>

              <div className="earnings-card-featured text-center p-6 text-white rounded-2xl shadow-xl transform scale-105" style={{ background: 'linear-gradient(90deg,#16a34a,#059669)' }}>
                <div className="text-4xl mb-4">🥈</div>
                <h4 className="text-xl font-bold mb-2 text-white">Rising Star</h4>
                <div className="text-3xl font-bold mb-4 text-white">$2K–5K</div>
                <div className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.95)' }}>
                  <div>• 1K–10K followers</div>
                  <div>• Daily streaming</div>
                  <div>• Multiple revenue streams</div>
                </div>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">🥇</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Top Creator</h4>
                <div className="text-3xl font-bold text-green-600 mb-4">$10K+</div>
                <div className="text-gray-600 space-y-2 text-sm">
                  <div>• 50K+ followers</div>
                  <div>• Professional content</div>
                  <div>• Brand partnerships</div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <DownloadCta
                platform="web"
                label="Start My Creator Journey 🚀"
                className="inline-flex items-center justify-center btn-primary text-lg px-8 py-4"
                source="monetization-calculator"
                campaign="creator-journey"
              >
                <Target className="w-5 h-5 inline mr-2" aria-hidden="true" />
              </DownloadCta>
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center max-w-2xl mx-auto">
              Estimates are illustrative only. Actual earnings depend on audience, engagement, and platform fees.
            </p>
          </div>
        </div>

        {/* Small disclaimer */}
        <div className="text-center text-sm text-gray-500">
          <p>
            GoLiveGram does not guarantee earnings. Results vary. See our terms for details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Monetization;