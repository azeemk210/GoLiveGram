import React from 'react';
import { Smartphone } from 'lucide-react';
import { handleDownloadClick } from '../../utils/downloads';

const CallToAction: React.FC = () => {
  return (
    <section className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8 relative z-10">
        {/* Primary CTA */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <h2 className="text-[2rem] sm:text-[3rem] md:text-[3rem] lg:text-[4rem] font-heading font-bold mb-6 leading-none text-black">
              Ready to Connect,
              <br />
              <span style={{ color: '#ee3a3a' }} className="font-bold">Share & Shine</span>
            </h2>
          </div>
          
          <p className="text-fluid-body mb-8 text-black max-w-prose mx-auto">
            Join millions of creators sharing their passion with the world.
            <br />
            <span className="text-red-600 font-semibold">
              Start streaming today.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <button 
              onClick={() => handleDownloadClick('ios')}
              aria-label="Download GoLiveGram on the App Store"
              className="bg-white text-black border border-red-600 px-2 py-1.5 xs:px-2.5 xs:py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 rounded-xl font-semibold flex items-center justify-center space-x-1 xs:space-x-1.5 sm:space-x-2 md:space-x-2 cursor-pointer shadow-sm"
            >
              <svg className="w-6 h-6 xs:w-6.5 xs:h-6.5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-[8px] xs:text-[9px] sm:text-xs font-medium">Download on the</div>
                <div className="text-[13px] xs:text-sm sm:text-base md:text-lg font-bold -mt-0.5">App Store</div>
              </div>
            </button>
            
            <button 
              onClick={() => handleDownloadClick('android')}
              aria-label="Download GoLiveGram on Google Play"
              className="bg-white text-black border border-red-600 px-2 py-1.5 xs:px-2.5 xs:py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 rounded-xl font-semibold flex items-center justify-center space-x-1 xs:space-x-1.5 sm:space-x-2 md:space-x-2 cursor-pointer shadow-sm"
            >
              <img 
                src="/google-play-store-icon.webp" 
                alt="Google Play" 
                width="24"
                height="24"
                className="w-6 h-6 xs:w-6.5 xs:h-6.5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 flex-shrink-0"
              />
              <div className="text-left">
                <div className="text-[8px] xs:text-[9px] sm:text-xs font-medium">Download on the</div>
                <div className="text-[13px] xs:text-sm sm:text-base md:text-lg font-bold -mt-0.5">Google Play</div>
              </div>
            </button>
          </div>

          <button 
            onClick={() => window.open('https://www.golivegram.com/webapp/login/', '_blank')}
            className="bg-white text-black border border-red-600 px-8 py-4 rounded-xl font-semibold text-base flex items-center space-x-3 shadow-lg cursor-pointer mx-auto"
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