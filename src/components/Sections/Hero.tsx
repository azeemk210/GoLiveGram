import React from 'react';
import { Smartphone } from 'lucide-react';
import { handleDownloadClick } from '../../utils/downloads';
import IPhoneMockup3D from '../UI/IPhoneMockup3D';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-bg min-h-screen flex items-center relative overflow-hidden pt-20 xs:pt-24 md:pt-28 pb-20 xs:pb-24 md:pb-28 w-full max-w-full">
      {/* Background Elements */}
      <div className="absolute inset-0 z-10 pt-50">
        {/* Clean professional background - no floating emojis */}
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 z-10 relative w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-1 lg:order-1">
            <div className="mb-4 sm:mb-6">
              <span className="inline-flex items-center px-3 sm:px-4 py-2 bg-white border border-black rounded-full text-black text-xs sm:text-sm font-medium">
                Join 10K+ Active Creators
              </span>
            </div>
            
            <h1 className="text-fluid-h1 font-heading font-bold text-black mb-4 sm:mb-6 leading-none break-words">
              Stream Your Passion.
              <br />
              <span className="text-black">
                Build Your Audience.
              </span>
              <br />
              <span style={{ color: '#ee3a3a' }} className="font-bold">
                Connect, Share & Shine
              </span>
            </h1>
            
            <p className="text-fluid-body text-black mb-6 sm:mb-8 max-w-prose px-1 xs:px-2 sm:px-0 break-words">
              Share Your Passion with the World
              <br />
              <span className="text-black font-semibold">
                Live stream, build community, and connect with millions
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 w-full max-w-full justify-center lg:justify-start items-center">
              <button 
                onClick={() => handleDownloadClick('ios')}
                aria-label="Download GoLiveGram on the App Store"
                className="bg-white text-black border border-black px-2 py-1.5 xs:px-2.5 xs:py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 rounded-xl font-semibold flex items-center justify-center space-x-1 xs:space-x-1.5 sm:space-x-2 md:space-x-2 cursor-pointer shadow-sm"
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
                className="bg-white text-black border border-black px-2 py-1.5 xs:px-2.5 xs:py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 rounded-xl font-semibold flex items-center justify-center space-x-1 xs:space-x-1.5 sm:space-x-2 md:space-x-2 cursor-pointer shadow-sm"
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

            <div className="flex items-center justify-center lg:justify-start mb-8 sm:mb-0">
              <button 
                onClick={() => window.open('https://www.golivegram.com/webapp/login/', '_blank')}
                aria-label="Try GoLiveGram web version"
                className="text-black border-2 border-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium flex items-center space-x-2 cursor-pointer text-sm sm:text-base"
              >
                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>Or Try Web Version</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-6 mt-6 xs:mt-8 sm:mt-12 px-1 xs:px-2 sm:px-0 w-full max-w-full">
              <div className="text-center min-w-0">
                <div className="text-2xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-black mb-1 truncate">10K+</div>
                <div className="text-black text-xs sm:text-sm leading-tight">Active Users</div>
              </div>
              <div className="text-center min-w-0">
                <div className="text-2xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-black mb-1 truncate">₹1L+</div>
                <div className="text-black text-xs sm:text-sm leading-tight">Paid to Creators</div>
              </div>
              <div className="text-center min-w-0">
                <div className="text-2xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-black mb-1 truncate">4.8★</div>
                <div className="text-black text-xs sm:text-sm leading-tight">App Store Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - iPhone 16 Mockups */}
          <div className="relative w-full order-2 lg:order-2 mb-8 lg:mb-0 flex items-center justify-center scale-60 xs:scale-75 sm:scale-90 md:scale-90 lg:scale-90">
            <IPhoneMockup3D
              leftScreen="https://img.freepik.com/premium-photo/selfie-taken-by-fan-front-row-capturing-their-excitement-stage_891336-49344.jpg"
              rightScreen="https://www.boredpanda.com/blog/wp-content/uploads/2015/07/animals-with-camera-helping-photographers-9__880.jpg?utm_campaign=rebelboost_true"
            />
          </div>
          </div>
        </div>
      
      {/* Scroll Indicator - hidden */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-black/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-black/20 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;