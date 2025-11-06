import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  emoji: string;
  title: string;
  description: string;
  visual?: string;
  highlight?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  emoji,
  title,
  description,
  visual,
  highlight
}) => {
  return (
    <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/20 cursor-pointer">
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon and Emoji Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="text-primary-400 group-hover:text-primary-300 transition-colors duration-300 group-hover:scale-110 transform">
              {icon}
            </div>
            <span className="text-3xl group-hover:animate-bounce">{emoji}</span>
          </div>
          
          {/* Visual Indicator */}
          {visual && (
            <div className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              {visual}
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-200 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
          {description}
        </p>

        {/* Highlight Badge */}
        {highlight && (
          <div className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm border border-primary-400/30 rounded-full px-4 py-2 text-sm font-medium text-primary-300">
            <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
            {highlight}
          </div>
        )}
      </div>

      {/* Decorative Corner Gradient */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-400/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default FeatureCard;