import React, { useState, useEffect, useRef } from 'react';
import { Users, Eye, TrendingUp, Zap, Heart, Award } from 'lucide-react';
import { SITE_METRICS } from '../../config/siteMetrics';

const Statistics = () => {
  const [activeCreators, setActiveCreators] = useState(0);
  const [totalViewers, setTotalViewers] = useState(0);
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
    animateCounter(SITE_METRICS.appRating, setAppRating, 1000, 1);
  }, [isVisible]);

  const formatNumber = (num: number): string =>
    num >= 1_000_000 ? (num/1_000_000).toFixed(1).replace(/\.0$/, "") + "M"
    : num >= 1_000 ? (num/1_000).toFixed(0) + "K"
    : num.toString();

  return (
    <section
      ref={sectionRef}
      className="relative pt-12 sm:pt-16 md:pt-20 lg:pt-24 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-3 bg-white border border-gray-300 rounded-full px-5 py-2 mb-4">
            <TrendingUp className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-black">Platform Stats</span>
          </div>

          <h2 className="text-fluid-h2 font-heading font-bold mb-2 text-black">
            Building Communities Together
          </h2>

          <p className="text-fluid-body text-black max-w-prose mx-auto">
            Join thousands of creators sharing their passions with engaged audiences
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card Component */}
          {[
            {
              icon: <Users className="w-7 h-7 text-red-600" />,
              number: formatNumber(activeCreators) + "+",
              label: "Active Creators",
              tag: "Growing daily",
              tagIcon: <TrendingUp className="w-4 h-4" />,
              tagColor: "text-red-600"
            },
            {
              icon: <Eye className="w-7 h-7 text-red-600" />,
              number: formatNumber(totalViewers) + "+",
              label: "Monthly Viewers",
              tag: "Watching live",
              tagIcon: <Zap className="w-4 h-4" />,
              tagColor: "text-red-600"
            },
            {
              icon: <Award className="w-7 h-7 text-red-600" />,
              number: appRating.toFixed(1) + "★",
              label: "App Rating",
              tag: "User rated",
              tagIcon: <Heart className="w-4 h-4" />,
              tagColor: "text-red-600"
            },
            {
              icon: <Heart className="w-7 h-7 text-red-600" />,
              number: formatNumber(SITE_METRICS.ratingCount) + "+",
              label: "Reviews",
              tag: "Community feedback",
              tagIcon: <Heart className="w-4 h-4" />,
              tagColor: "text-red-600"
            }
          ].map((stat, i) => (
            <article
              key={i}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-md p-5 md:p-6 hover:shadow-xl transition-all duration-300 border border-red-600"
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div className="rounded-xl bg-white p-3 border border-red-600">
                    {React.cloneElement(stat.icon, { className: 'w-7 h-7 text-red-600' })}
                  </div>
                  <Heart className="w-5 h-5 text-red-600 group-hover:text-red-700 transition-all" />
                </div>
                
                <div className="text-fluid-h3 font-extrabold text-black mb-1" aria-live="polite">
                  {stat.number}
                </div>
                
                <div className="text-black text-sm font-semibold mb-3">
                  {stat.label}
                </div>
                
                <div className={`flex items-center gap-2 text-xs font-medium text-white bg-red-600 px-3 py-1.5 rounded-full w-fit border border-red-600`}>
                  {React.cloneElement(stat.tagIcon, { className: 'w-4 h-4' })}
                  <span>{stat.tag}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-10 md:mt-12 text-center text-black text-sm flex justify-center gap-2 items-center">
          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
          Updated regularly
        </div>
      </div>
    </section>
  );
};

export default Statistics;
