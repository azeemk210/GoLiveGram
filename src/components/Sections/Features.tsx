import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Video,
  PhoneCall,
  Image as ImageIcon,
  CheckCircle2,
  TrendingUp,
  Star,
  Users,
  LayoutGrid,
  Camera
} from 'lucide-react';

const FeatureItem = ({ feature, index }: { feature: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 mb-24 last:mb-0 max-w-7xl mx-auto`}
    >
      {/* Content Side */}
      <div className="flex-1 space-y-8 lg:max-w-xl">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300`}>
          {React.cloneElement(feature.icon as React.ReactElement<any>, { className: 'w-8 h-8' })}
        </div>

        <div className="space-y-6">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-50 border border-red-100">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest">{feature.badge}</span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 leading-[1.1]">
            {feature.title}
          </h3>

          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-medium">
            {feature.description}
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {feature.points.map((point: string, idx: number) => (
            <li key={idx} className="flex items-center space-x-3 text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-red-200 transition-colors group">
              <div className="bg-white p-1 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
              </div>
              <span className="font-semibold text-base">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Visual Side */}
      <div className="flex-1 w-full lg:max-w-xl relative">
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 blur-3xl rounded-[60px] transform ${isEven ? 'translate-x-12 translate-y-12' : '-translate-x-12 -translate-y-12'}`}></div>

        <div className="relative">
          <div className="bg-white p-4 rounded-[40px] shadow-2xl border border-gray-100">
            <div className="relative rounded-[32px] overflow-hidden bg-gray-100 aspect-[4/3]">
              <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Placeholder while loading */}
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop';
                }}
              />
            </div>

            {/* Floating Stats Card */}
            <div className={`absolute -bottom-6 ${isEven ? '-left-6' : '-right-6'} bg-white p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100`}>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0`}>
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Impact</div>
                  <div className="text-lg font-black text-gray-900 leading-none">{feature.highlight}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      title: "Post Stories & Earn per View",
      description: "Share your life highlights and get rewarded for your reach. Every view translates into earnings.",
      icon: <ImageIcon />,
      color: "from-orange-500 to-red-600",
      image: "/post_stories.jpg",
      badge: "Highest Earning",
      highlight: "Earn for every view",
      points: ["Real-time Earning Stats", "Global Audience Reach", "HD Story Support", "Instant Payouts"]
    },
    {
      title: "Snap & Earn Rewards",
      description: "Send private snaps to your friends and followers and get rewarded for candid moments.",
      icon: <Camera />,
      color: "from-yellow-400 to-orange-500",
      image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=1200",
      badge: "Instant Profit",
      highlight: "Earn per Snap",
      points: ["Daily Snap Bonuses", "Disappearing Rewards", "Interactive Reactions", "Streak Multipliers"]
    },
    {
      title: "Gallery Showcase",
      description: "Select your finest moments directly from your gallery and showcase them with professional flair.",
      icon: <LayoutGrid />,
      color: "from-purple-500 to-indigo-600",
      image: "https://images.unsplash.com/photo-1554048612-387768052bf7?auto=format&fit=crop&q=80&w=1200",
      badge: "Showcase",
      highlight: "Permanent Content",
      points: ["HD Gallery Uploads", "Personal Branding", "High Quality Media", "Portfolio Mode"]
    },
    {
      title: "Audio Calls",
      description: "Stay connected with high-fidelity, private audio calls. Experience crystal clear voice quality.",
      icon: <PhoneCall />,
      color: "from-blue-500 to-indigo-600",
      image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=1200",
      badge: "High Fidelity",
      highlight: "Crystal Clear Voice",
      points: ["Private 1v1 Calls", "Ultra-low Latency", "Secure Connection", "Voice Effects"]
    }
  ];

  return (
    <section id="features" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-bold uppercase tracking-widest mb-6 border border-red-100"
          >
            <Star className="w-4 h-4 mr-2" />
            Core Features
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-gray-900 mb-8 leading-tight tracking-tight"
          >
            Built for the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Next Generation</span>
          </motion.h2>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto">
            GoLiveGram provides the tools you need to build, grow, and monetize your community like never before.
          </p>
        </div>

        {/* Diagonal Layout Features */}
        <div className="relative mb-32">
          {features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 bg-gray-50 rounded-[32px] border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-red-600" />
            </div>
            <div className="text-4xl font-black text-gray-900 mb-2">100K+</div>
            <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Active Community</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 bg-gradient-to-br from-red-600 to-red-700 rounded-[32px] text-center shadow-xl shadow-red-200"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-black text-white mb-2">4.8/5</div>
            <p className="text-sm text-red-100 font-bold uppercase tracking-wider">App Store Rating</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 bg-gray-50 rounded-[32px] border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-4xl font-black text-gray-900 mb-2">300%</div>
            <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Monthly Growth</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;