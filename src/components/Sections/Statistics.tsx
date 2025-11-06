import React, { useState, useEffect, useRef } from 'react';
import { Users, Eye, Clock, TrendingUp, Zap, Heart, DollarSign, Award } from 'lucide-react';
import { SITE_METRICS } from '../../config/siteMetrics';

const Statistics = () => {
  const [activeCreators, setActiveCreators] = useState(0);
  const [totalViewers, setTotalViewers] = useState(0);
  const [paidToCreatorsUSD, setPaidToCreatorsUSD] = useState(0);
  const [appRating, setAppRating] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateCounter = (target: number, setter: (value: number) => void, duration = 1000, precision = 0) => {
      const fps = 60;
      const steps = Math.round((duration / 1000) * fps);
      const increment = target / steps;
      let current = 0, count = 0;

      const id = setInterval(() => {
        count++;
        current = count >= steps ? target : current + increment;
        setter(Number(current.toFixed(precision)));
        if (count >= steps) clearInterval(id);
      }, 1000 / fps);
    };

    animateCounter(SITE_METRICS.activeCreators, setActiveCreators);
    animateCounter((SITE_METRICS).totalViewers ?? 1500000, setTotalViewers);
    animateCounter(SITE_METRICS.paidToCreatorsUSD, setPaidToCreatorsUSD);
    animateCounter(SITE_METRICS.appRating, setAppRating, 1000, 1);
  }, [isVisible]);

  const formatNumber = (num: number): string =>
    num >= 1_000_000 ? (num/1_000_000).toFixed(1).replace(/\.0$/, "") + "M"
    : num >= 1_000 ? (num/1_000).toFixed(0) + "K"
    : num.toString();

  const formatCurrencyShort = (num: number): string =>
    num >= 1_000_000 ? "$" + (num/1_000_000).toFixed(1).replace(/\.0$/, "") + "M"
    : num >= 1_000 ? "$" + (num/1_000).toFixed(0) + "K"
    : "$" + num;

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-16 bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 text-white overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2 mb-4">
            <TrendingUp className="w-4 h-4 text-green-200" />
            <span className="text-sm font-medium text-white/90">GoLiveGram Impact</span>
            <div className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse" />
          </div>

          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-2 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            Empowering Creators Worldwide
          </h2>

          <p className="text-base md:text-lg text-white/85 max-w-2xl mx-auto">
            Real numbers from real creators building their dreams on GoLiveGram 🚀
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          
          {/* Card Component */}
          {[
            {
              icon: <Users className="w-7 h-7 text-purple-600" />,
              accent: "purple",
              number: formatNumber(activeCreators) + "+",
              label: "Active Creators",
              tag: "+15% monthly",
              tagIcon: <TrendingUp className="w-4 h-4" />,
              tagColor: "text-emerald-600"
            },
            {
              icon: <Eye className="w-7 h-7 text-blue-600" />,
              accent: "blue",
              number: formatNumber(totalViewers) + "+",
              label: "Total Viewers",
              tag: "Watching now",
              tagIcon: <Zap className="w-4 h-4" />,
              tagColor: "text-blue-600"
            },
            {
              icon: <DollarSign className="w-7 h-7 text-emerald-600" />,
              accent: "emerald",
              number: formatCurrencyShort(paidToCreatorsUSD) + "+",
              label: "Paid to Creators",
              tag: "Total earned",
              tagIcon: <Clock className="w-4 h-4" />,
              tagColor: "text-emerald-600"
            },
            {
              icon: <Award className="w-7 h-7 text-amber-600" />,
              accent: "amber",
              number: appRating.toFixed(1) + "★",
              label: "App Rating",
              tag: "Loved by users",
              tagIcon: <Heart className="w-4 h-4" />,
              tagColor: "text-amber-600"
            },
            {
              icon: <Users className="w-7 h-7 text-fuchsia-600" />,
              accent: "fuchsia",
              number: formatNumber(SITE_METRICS.ratingCount) + "+",
              label: "Happy Reviews",
              tag: "Community love",
              tagIcon: <Heart className="w-4 h-4" />,
              tagColor: "text-fuchsia-600"
            }
          ].map((stat, i) => (
            <article
              key={i}
              className={`group relative rounded-2xl overflow-hidden text-white shadow-xl p-5 md:p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer ${
                stat.accent === 'purple' 
                  ? 'bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 hover:from-purple-500 hover:to-pink-400' 
                  : stat.accent === 'blue'
                  ? 'bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-400 hover:from-blue-500 hover:to-cyan-400'
                  : stat.accent === 'emerald'
                  ? 'bg-gradient-to-br from-emerald-600 via-green-500 to-teal-400 hover:from-emerald-500 hover:to-teal-300'
                  : stat.accent === 'amber'
                  ? 'bg-gradient-to-br from-amber-500 via-orange-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300'
                  : 'bg-gradient-to-br from-fuchsia-600 via-pink-500 to-rose-400 hover:from-fuchsia-500 hover:to-rose-300'
              }`}
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12 animate-pulse delay-700"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div className="rounded-xl bg-white/20 backdrop-blur-sm p-3 ring-2 ring-white/30 group-hover:ring-white/50 transition-all">
                    {React.cloneElement(stat.icon, { className: 'w-7 h-7 text-white' })}
                  </div>
                  <Heart className="w-5 h-5 text-white/70 group-hover:text-white group-hover:scale-110 transition-all" />
                </div>
                
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 group-hover:scale-105 transition-transform" aria-live="polite">
                  {stat.number}
                </div>
                
                <div className="text-white/90 text-sm font-semibold mb-3 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
                
                <div className="flex items-center gap-2 text-xs font-medium text-white/80 group-hover:text-white/95 transition-colors">
                  {React.cloneElement(stat.tagIcon, { className: 'w-4 h-4' })}
                  <span>{stat.tag}</span>
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                stat.accent === 'purple' 
                  ? 'bg-gradient-to-br from-purple-400/20 to-pink-400/20' 
                  : stat.accent === 'blue'
                  ? 'bg-gradient-to-br from-blue-400/20 to-cyan-400/20'
                  : stat.accent === 'emerald'
                  ? 'bg-gradient-to-br from-emerald-400/20 to-teal-400/20'
                  : stat.accent === 'amber'
                  ? 'bg-gradient-to-br from-amber-400/20 to-yellow-400/20'
                  : 'bg-gradient-to-br from-fuchsia-400/20 to-rose-400/20'
              }`}></div>
            </article>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-10 md:mt-12 text-center text-white/80 text-sm flex justify-center gap-2 items-center">
          <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
          Updated in real-time
        </div>
      </div>
    </section>
  );
};

export default Statistics;
