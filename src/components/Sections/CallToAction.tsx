import React from 'react';
import { Smartphone } from 'lucide-react';
import { handleDownloadClick } from '../../utils/downloads';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Primary CTA */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <h2 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight text-gray-900">
              Ready to Go Live
              <br />
              <span className="text-blue-600">and Connect?</span>
            </h2>
          </div>
          
          <p className="text-2xl mb-8 text-gray-600 max-w-3xl mx-auto">
            Join millions of creators sharing their passion with the world.
            <br />
            <span className="text-blue-600 font-semibold">
              Start streaming today.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <button 
              onClick={() => handleDownloadClick('ios')}
              className="bg-white text-black border border-gray-300 px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-3 hover:bg-gray-50 transition-all duration-300 shadow-lg cursor-pointer"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs font-medium">Download on the</div>
                <div className="text-lg font-bold -mt-0.5">App Store</div>
              </div>
            </button>
            
            <button 
              onClick={() => handleDownloadClick('android')}
              className="bg-white text-black border border-gray-300 px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-3 hover:bg-gray-50 transition-all duration-300 shadow-lg cursor-pointer"
            >
              <img 
                src="/google-play-store-icon.webp" 
                alt="Google Play" 
                className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0"
              />
              <div className="text-left">
                <div className="text-xs font-medium">GET IT ON</div>
                <div className="text-lg font-bold -mt-0.5">Google Play</div>
              </div>
            </button>
          </div>

          <button 
            onClick={() => handleDownloadClick('web')}
            className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center space-x-2 mx-auto cursor-pointer"
          >
            <Smartphone className="w-5 h-5" />
            <span>Try Web Version</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;