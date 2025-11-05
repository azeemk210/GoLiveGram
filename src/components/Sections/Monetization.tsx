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
import { handleDownloadClick, getRecommendedPlatform } from '../../utils/downloads';

const Monetization: React.FC = () => {
  const revenueStreams = [
    {
      icon: <Gift className="w-10 h-10 text-pink-500" />,
      emoji: "🎁",
      title: "Virtual Gifts",
      description: "Receive virtual gifts worth real money from your audience",
      examples: ["Rose 🌹 - $0.50", "Diamond 💎 - $5.00", "Crown 👑 - $10.00"],
      earnings: "$50-500/day",
      color: "pink"
    },
    {
      icon: <Crown className="w-10 h-10 text-yellow-500" />,
      emoji: "👑",
      title: "Paid Subscriptions",
      description: "Premium subscriber-only content with recurring revenue",
      examples: ["Basic - $2.99/month", "Premium - $9.99/month", "VIP - $19.99/month"],
      earnings: "$300-3000/month",
      color: "yellow"
    },
    {
      icon: <Handshake className="w-10 h-10 text-blue-500" />,
      emoji: "🤝",
      title: "Brand Partnerships",
      description: "Collaborate with top brands for sponsored content",
      examples: ["Nike Campaign", "Coca-Cola Promo", "Samsung Partnership"],
      earnings: "$500-5000/campaign",
      color: "blue"
    },
    {
      icon: <DollarSign className="w-10 h-10 text-green-500" />,
      emoji: "💸",
      title: "Live Donations",
      description: "Real-time tips during your live streams",
      examples: ["Sarah donated $25! 🎉", "Mike sent $50! 💝", "Anna tipped $100! 🚀"],
      earnings: "$100-1000/stream",
      color: "green"
    },
    {
      icon: <Lock className="w-10 h-10 text-purple-500" />,
      emoji: "🔐",
      title: "Exclusive Content",
      description: "Sell premium content access to dedicated fans",
      examples: ["Behind the Scenes", "Tutorial Series", "Q&A Sessions"],
      earnings: "$200-2000/month",
      color: "purple"
    }
  ];

  return (
    <section id="monetization" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-600 font-medium mb-4">
            💰 Monetization Hub
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Multiple Ways to
            <span className="text-gradient bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent"> Monetize</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Turn Your Creativity Into Cold Hard Cash! 💵
            <br />
            <span className="text-green-600 font-semibold">
              Average Creator Earnings: $500-$5,000/month 📈
            </span>
          </p>
        </div>

        {/* Revenue Streams Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {revenueStreams.map((stream, index) => {
            // Define color classes statically
            const getColorClasses = (color: string) => {
              switch(color) {
                case 'pink': return { bg: 'bg-gradient-to-r from-pink-100 to-pink-200', text: 'text-pink-600', btn: 'bg-gradient-to-r from-pink-500 to-pink-600' };
                case 'yellow': return { bg: 'bg-gradient-to-r from-yellow-100 to-yellow-200', text: 'text-yellow-600', btn: 'bg-gradient-to-r from-yellow-500 to-yellow-600' };
                case 'blue': return { bg: 'bg-gradient-to-r from-blue-100 to-blue-200', text: 'text-blue-600', btn: 'bg-gradient-to-r from-blue-500 to-blue-600' };
                case 'green': return { bg: 'bg-gradient-to-r from-green-100 to-green-200', text: 'text-green-600', btn: 'bg-gradient-to-r from-green-500 to-green-600' };
                case 'purple': return { bg: 'bg-gradient-to-r from-purple-100 to-purple-200', text: 'text-purple-600', btn: 'bg-gradient-to-r from-purple-500 to-purple-600' };
                default: return { bg: 'bg-gradient-to-r from-gray-100 to-gray-200', text: 'text-gray-600', btn: 'bg-gradient-to-r from-gray-500 to-gray-600' };
              }
            };
            const colorClasses = getColorClasses(stream.color);
            
            return (
            <div key={index} className="feature-card group hover:shadow-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 ${colorClasses.bg} rounded-2xl flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300`}>
                  {stream.icon}
                  <div className="absolute -top-2 -right-2 text-2xl">{stream.emoji}</div>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-1">
                    {stream.title}
                  </h3>
                  <div className={`text-sm font-semibold ${colorClasses.text}`}>
                    {stream.earnings}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {stream.description}
              </p>
              
              <div className="space-y-3">
                <div className="text-sm font-medium text-gray-800 mb-2">Examples:</div>
                {stream.examples.map((example, i) => (
                  <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-700">{example}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button className={`w-full ${colorClasses.btn} text-white py-2 px-4 rounded-lg font-medium hover:scale-105 transition-transform duration-200`}>
                  Start Earning <Zap className="w-4 h-4 inline ml-1" />
                </button>
              </div>
            </div>
            );
          })}
        </div>

        {/* Success Story Banner */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-3xl font-bold mb-4">
              Our Top Creator Earned $50,000 Last Month!
            </h3>
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
        <div className="earnings-calculator bg-gray-50 rounded-3xl p-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                💰 Earnings Calculator
              </h3>
              <p className="text-gray-600">
                See how much you could earn as a GoLiveGram creator
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">🥉</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Beginner Creator</h4>
                <div className="text-3xl font-bold text-green-600 mb-4">$500-1K</div>
                <div className="text-gray-600 space-y-2 text-sm">
                  <div>• 100-500 followers</div>
                  <div>• 2-3 streams/week</div>
                  <div>• Basic monetization</div>
                </div>
              </div>
              
              <div className="earnings-card-featured text-center p-6 text-white rounded-2xl shadow-xl transform scale-105">
                <div className="text-4xl mb-4">🥈</div>
                <h4 className="text-xl font-bold mb-2 text-white">Rising Star</h4>
                <div className="text-3xl font-bold mb-4 text-white">$2K-5K</div>
                <div className="space-y-2 text-sm" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                  <div>• 1K-10K followers</div>
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
              <button 
                onClick={() => handleDownloadClick(getRecommendedPlatform())}
                className="btn-primary text-lg px-8 py-4 cursor-pointer"
              >
                <Target className="w-5 h-5 inline mr-2" />
                Start My Creator Journey 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Monetization;