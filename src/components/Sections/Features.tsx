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
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start gap-6 lg:gap-10 mb-12 last:mb-0 max-w-3xl mx-auto`}
    >
      {/* Content Side */}
      <div className="flex-1 space-y-4 lg:max-w-[320px]">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300`}>
          {React.cloneElement(feature.icon as React.ReactElement<any>, { className: 'w-5 h-5' })}
        </div>

        <div className="space-y-2">
          <div className="text-[10px] font-black text-red-500 uppercase tracking-widest">{feature.badge}</div>
          <h3 className="text-xl font-heading font-extrabold text-gray-900 leading-tight">
            {feature.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {feature.description}
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-2">
          {feature.points.slice(0, 3).map((point: string, idx: number) => (
            <li key={idx} className="flex items-center space-x-2 text-gray-700 bg-gray-50/50 p-1.5 rounded-lg border border-gray-100/50 hover:border-red-200 transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span className="font-semibold text-[11px]">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Visual Side */}
      <div className="flex-1 relative w-full lg:max-w-xs">
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 blur-2xl rounded-[30px] transform ${isEven ? 'translate-x-6 translate-y-6' : '-translate-x-6 -translate-y-6'}`}></div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* Stats Overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/90 backdrop-blur-xl p-3 rounded-xl shadow-2xl border border-white/50 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-[9px] text-gray-500 font-bold uppercase leading-none mb-1">Activity</div>
                    <div className="text-xs font-black text-gray-900">{feature.highlight}</div>
                  </div>
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
      points: ["Real-time Earning Stats", "Global Audience Reach", "HD Story Support"]
    },
    {
      title: "Snap & Earn Rewards",
      description: "Send private snaps to your friends and followers and get rewarded for candid moments.",
      icon: <Camera />,
      color: "from-yellow-400 to-orange-500",
      image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=800",
      badge: "Instant Profit",
      highlight: "Earn per Snap",
      points: ["Daily Snap Bonuses", "Disappearing Rewards", "Interactive Reactions"]
    },
    {
      title: "Gallery Showcase",
      description: "Select your finest moments directly from your gallery and showcase them with professional flair.",
      icon: <LayoutGrid />,
      color: "from-purple-500 to-indigo-600",
      image: "https://images.unsplash.com/photo-1621112904887-419379ce6824?auto=format&fit=crop&q=80&w=800",
      badge: "Showcase",
      highlight: "Permanent Content",
      points: ["HD Gallery Uploads", "Personal Branding", "High Quality Media"]
    },
    {
      title: "Audio Calls",
      description: "Stay connected with high-fidelity, private audio calls. Experience crystal clear voice quality.",
      icon: <PhoneCall />,
      color: "from-blue-500 to-indigo-600",
      image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=800",
      badge: "High Fidelity",
      highlight: "Crystal Clear Voice",
      points: ["Private 1v1 Calls", "Ultra-low Latency", "Secure Connection"]
    },
    {
      title: "Live Streaming",
      description: "Go live any time, anywhere and instantly connect with your audience in real-time.",
      icon: <Video />,
      color: "from-rose-500 to-pink-600",
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=800",
      badge: "Anytime, Anywhere",
      highlight: "Instant Connectivity",
      points: ["One-Tap Go Live", "Interactive RTMP", "Audience Engagement"]
    }
  ];

  return (
    <section id="features" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 bg-red-50 text-red-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4"
          >
            Core Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-heading font-black text-gray-900 mb-6 leading-tight"
          >
            Built for the <span className="text-red-600">Next Gen</span>
          </motion.h2>
          <p className="text-base text-gray-600 leading-relaxed font-medium">
            GoLiveGram provides the tools you need to build, grow, and monetize your community.
          </p>
        </div>

        {/* Diagonal Layout Features */}
        <div className="relative">
          <div className="relative z-10">
            {features.map((feature, index) => (
              <FeatureItem key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 items-center justify-center text-center">
            <Users className="w-6 h-6 text-red-600 mx-auto mb-2" />
            <div className="text-xl font-black text-gray-900 mb-0.5">100K+</div>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Active Community</p>
          </div>
          <div className="p-4 bg-red-600 rounded-2xl items-center justify-center text-center shadow-lg shadow-red-200">
            <Star className="w-6 h-6 text-white mx-auto mb-2" />
            <div className="text-xl font-black text-white mb-0.5">4.8/5</div>
            <p className="text-[10px] text-red-100 font-bold uppercase tracking-wider">App Store Rating</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 items-center justify-center text-center">
            <TrendingUp className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <div className="text-xl font-black text-gray-900 mb-0.5">300%</div>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Monthly Growth</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;