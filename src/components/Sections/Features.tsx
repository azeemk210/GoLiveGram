import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, XCircle, AlertCircle, Zap, TrendingUp, Trophy, Lightbulb } from 'lucide-react';

const Features: React.FC = () => {
  const comparisonRows = [
    {
      feature: '💰 Monetization',
      golivegram: 'Early rewarding for all creators',
      golivegram_status: 'check',
      other: 'Only for large creators',
      other_status: 'x',
    },
    {
      feature: '📊 Rewards Dashboard',
      golivegram: 'Transparent & built-in',
      golivegram_status: 'check',
      other: 'Limited / unclear',
      other_status: 'x',
    },
    {
      feature: '🤝 Brand Collaboration',
      golivegram: 'Built-in marketplace',
      golivegram_status: 'check',
      other: 'External platforms required',
      other_status: 'x',
    },
    {
      feature: '🛍️ In-App Commerce',
      golivegram: 'Creator selling enabled',
      golivegram_status: 'check',
      other: 'Limited / region-based',
      other_status: 'warning',
    },
    {
      feature: '🎯 Campaign Rewards',
      golivegram: 'Tasks, challenges, rewards',
      golivegram_status: 'check',
      other: 'Rare or unavailable',
      other_status: 'x',
    },
    {
      feature: '🏆 Creator Levels',
      golivegram: 'Structured growth system',
      golivegram_status: 'check',
      other: 'No structured progression',
      other_status: 'x',
    },
    {
      feature: '🔍 Discoverability',
      golivegram: 'Boost for new creators',
      golivegram_status: 'check',
      other: 'High competition',
      other_status: 'x',
    },
    {
      feature: '🔐 Content Verification',
      golivegram: 'AI + manual payout checks',
      golivegram_status: 'check',
      other: 'Not payout-focused',
      other_status: 'x',
    },
    {
      feature: '🎬 Short Videos',
      golivegram: 'Yes',
      golivegram_status: 'check',
      other: 'Yes',
      other_status: 'check',
    },
    {
      feature: '🎥 Live Streaming',
      golivegram: 'Yes (Rewarding enabled)',
      golivegram_status: 'check',
      other: 'Yes (Limited rewarding)',
      other_status: 'check',
    },
  ];

  const getIcon = (status: string) => {
    if (status === 'check') return <CheckCircle2 className="w-4 xs:w-5 h-4 xs:h-5 text-green-600 shrink-0" />;
    if (status === 'warning') return <AlertCircle className="w-4 xs:w-5 h-4 xs:h-5 text-yellow-600 shrink-0" />;
    return <XCircle className="w-4 xs:w-5 h-4 xs:h-5 text-red-600 shrink-0" />;
  };

  return (
    <section id="features" className="pt-24 lg:pt-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 bg-white text-red-600 rounded-full text-sm font-bold uppercase tracking-widest mb-6 border border-black"
          >
            <Star className="w-4 h-4 mr-2" />
            Core Features
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-fluid-h2 font-heading font-black text-black mb-8 leading-none tracking-tight"
          >
            Built for the Next Generation
          </motion.h2>
        </div>

        <div className="max-w-[76rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg sm:rounded-2xl md:rounded-[32px] border border-black shadow-xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-center sm:text-left">
                <thead>
                  <tr className="bg-black border-b border-black">
                    <th className="px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-2 xs:py-3 sm:py-4 text-[12px] sm:text-[15px] md:text-[20px] lg:text-[20px] font-bold uppercase tracking-wider text-white leading-tight text-center sm:text-left">Features</th>
                    <th className="px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-2 xs:py-3 sm:py-4 text-[12px] sm:text-[15px] md:text-[20px] lg:text-[20px] font-bold uppercase tracking-wider text-white leading-tight text-left">GoLiveGram</th>
                    <th className="px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-2 xs:py-3 sm:py-4 text-[12px] sm:text-[15px] md:text-[20px] lg:text-[20px] font-bold uppercase tracking-wider text-white leading-tight text-left">Other Platform</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr key={index} className="border-b border-black last:border-b-0 hover:bg-white transition-colors">
                      <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 xs:py-4 sm:py-5 text-xs xs:text-sm sm:text-base font-semibold text-black text-center sm:text-left">{row.feature}</td>
                      <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 xs:py-4 sm:py-5 text-xs xs:text-sm sm:text-base text-black text-left">
                        <div className="inline-flex items-center gap-2 flex-row">
                          {getIcon(row.golivegram_status)}
                          <span className="text-xs xs:text-sm sm:text-base md:text-lg">{row.golivegram}</span>
                        </div>
                      </td>
                      <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 xs:py-4 sm:py-5 text-xs xs:text-sm sm:text-base text-black text-left">
                        <div className="inline-flex items-center gap-2 flex-row">
                          {getIcon(row.other_status)}
                          <span className="text-xs xs:text-sm sm:text-base md:text-lg">{row.other}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 xs:py-4 sm:py-4 bg-white border-t border-black text-xs xs:text-sm text-black flex items-center gap-2">
              <Star className="w-3 xs:w-4 h-3 xs:h-4 text-red-600 flex-shrink-0" />
              <span>GoLiveGram outperforms on monetization, creator tools, and growth opportunities. See why creators are choosing us.</span>
            </div>
          </motion.div>
        </div>

        {/* Competitive Advantages Section */}
        <div className="mt-24 lg:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h3 className="text-fluid-h2 font-heading font-black text-black mb-6">
              🚀 Key Competitive Advantages
            </h3>
          </motion.div>

          {/* Advantages Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
              {/* Advantage 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(107, 114, 128, 0.15)' }}
                className="h-full p-6 sm:p-8 border-2 border-gray-300 rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-black">
                    <Zap className="w-5 h-5 text-red-600" />
                  </div>
                  <h4 className="font-bold text-black text-sm sm:text-base">Early Monetization</h4>
                </div>
                <p className="text-xs sm:text-sm text-black leading-relaxed">
                  Start rewarding from the beginning — no need to wait for a large audience.
                </p>
              </motion.div>

              {/* Advantage 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(107, 114, 128, 0.15)' }}
                className="h-full p-6 sm:p-8 border-2 border-gray-300 rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-black">
                    <TrendingUp className="w-5 h-5 text-red-600" />
                  </div>
                  <h4 className="font-bold text-black text-sm sm:text-base">Transparent Rewards</h4>
                </div>
                <p className="text-xs sm:text-sm text-black leading-relaxed">
                  Track views, rewards, and performance in one clear, built-in dashboard.
                </p>
              </motion.div>

              {/* Advantage 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(107, 114, 128, 0.15)' }}
                className="h-full p-6 sm:p-8 border-2 border-gray-300 rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-black">
                    <Trophy className="w-5 h-5 text-red-600" />
                  </div>
                  <h4 className="font-bold text-black text-sm sm:text-base">Creator Growth</h4>
                </div>
                <p className="text-xs sm:text-sm text-black leading-relaxed">
                  Clear progression: Bronze → Silver → Gold → Platinum with visible benefits.
                </p>
              </motion.div>

              {/* Advantage 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(107, 114, 128, 0.15)' }}
                className="h-full p-6 sm:p-8 border-2 border-gray-300 rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-black">
                    <Lightbulb className="w-5 h-5 text-red-600" />
                  </div>
                  <h4 className="font-bold text-black text-sm sm:text-base">All-in-One Platform</h4>
                </div>
                <p className="text-xs sm:text-sm text-black leading-relaxed">
                  Collaborations, affiliates, and selling — all inside one platform.
                </p>
              </motion.div>
            </div>
          </div>

          {/* USP Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white border-2 border-gray-300 rounded-lg p-8 md:p-12 mb-16 max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* What Makes It Different */}
              <div>
                <h4 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                  <span className="text-red-600">💡</span>
                  What Makes It Different
                </h4>
                <ul className="space-y-2 text-sm text-black">
                  <li>✓ Creator-first approach (not follower-first)</li>
                  <li>✓ Monetization + social combined</li>
                  <li>✓ Focus on talent, not just reach</li>
                  <li>✓ Real opportunities for emerging creators</li>
                </ul>
              </div>

              {/* Traditional Platforms */}
              <div>
                <h4 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                  <span className="text-gray-600">📊</span>
                  Traditional Platforms
                </h4>
                <ul className="space-y-2 text-sm text-black">
                  <li>• Audience growth first</li>
                  <li>• Monetization later</li>
                  <li>• Limited visibility for new creators</li>
                  <li>• External tools required</li>
                </ul>
              </div>

              {/* GoLiveGram Approach */}
              <div>
                <h4 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                  <span className="text-red-600">🚀</span>
                  GoLiveGram Approach
                </h4>
                <ul className="space-y-2 text-sm text-black">
                  <li>✓ Rewarding from day 1</li>
                  <li>✓ Fair exposure for new creators</li>
                  <li>✓ Transparent tracking</li>
                  <li>✓ Everything built-in</li>
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;