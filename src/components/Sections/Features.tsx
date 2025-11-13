import React from 'react';
import { 
  Video, 
  MessageCircle, 
  Search, 
  DollarSign, 
  Smartphone, 
  Monitor,
  Zap,
  Users,
  Star,
  TrendingUp
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Video className="w-12 h-12 text-primary-500" />,
      emoji: "📺",
      title: "Broadcast Your World",
      description: "Go live instantly with HD quality streaming. Crystal clear broadcasts that keep viewers engaged and coming back for more.",
      visual: "🎥📡⚡",
      highlight: "HD Quality"
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-blue-500" />,
      emoji: "💬",
      title: "Connect Instantly",
      description: "Real-time chat, reactions, and interactions. Build loyal communities with instant connections and engaging conversations.",
      visual: "❤️🔥👏",
      highlight: "Real-time Chat"
    },
    {
      icon: <Search className="w-12 h-12 text-purple-500" />,
      emoji: "🔍",
      title: "Discover Amazing Creators",
      description: "Explore trending content and follow your favorite creators. Advanced algorithm helps you find content you'll love.",
      visual: "✨📈🌟",
      highlight: "Smart Discovery"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-green-500" />,
      emoji: "💰",
      title: "Turn Passion Into Profit",
      description: "Multiple revenue streams for creators. From virtual gifts to brand partnerships, monetize your content effectively.",
      visual: "💵📊🚀",
      highlight: "₹500-₹5K/month"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-pink-500" />,
      emoji: "📱",
      title: "Viral Short Videos",
      description: "Create and share Instagram-style reels. Vertical video feed with engagement metrics that help content go viral.",
      visual: "▶️🎬💫",
      highlight: "Viral Potential"
    },
    {
      icon: <Monitor className="w-12 h-12 text-indigo-500" />,
      emoji: "🌐",
      title: "Stream Everywhere",
      description: "Mobile, web, and smart TV compatibility. Reach your audience on any device, anywhere, anytime.",
      visual: "📱💻📺",
      highlight: "Cross-Platform"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-600 font-medium mb-4">
            ⭐ Platform Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="text-gradient bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"> Succeed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From HD streaming to advanced monetization, GoLiveGram provides all the tools 
            successful creators need to build their empire 🚀
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">{feature.emoji}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-primary-600 mb-1">
                    {feature.highlight}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-2xl space-x-2">
                  {feature.visual.split('').map((emoji, i) => (
                    <span key={i} className="inline-block animate-pulse" style={{animationDelay: `${i * 0.2}s`}}>
                      {emoji}
                    </span>
                  ))}
                </div>
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Zap className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">2.5M+</h3>
            <p className="text-gray-600">Active Community Members</p>
            <div className="mt-4 text-2xl">👥🌍</div>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">4.8/5</h3>
            <p className="text-gray-600">App Store Rating</p>
            <div className="mt-4 text-2xl">⭐🏆</div>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">300%</h3>
            <p className="text-gray-600">Monthly Growth Rate</p>
            <div className="mt-4 text-2xl">📈🚀</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-4xl">🎯</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Ready to Experience These Features?</h3>
              <p className="text-gray-600">Join thousands of successful creators today</p>
            </div>
            <button className="btn-primary">
              Get Started Now 🚀
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;